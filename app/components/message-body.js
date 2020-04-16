import Component from "@glimmer/component";
import {action} from "@ember/object";
import { tracked } from "@glimmer/tracking";
import throttle from "lodash/throttle";

export default class extends Component {
    @tracked isReplying = false;

    constructor() {
        super(...arguments);

        this._handleClickOutside = this._handleClickOutside.bind(this);

        this._handleScrollThrottled = throttle(this._handleScroll.bind(this), 50);

        window.addEventListener('click', this._handleClickOutside);
        window.addEventListener('scroll', this._handleScrollThrottled);
    }

    willDestroy() {
        const style = document.getElementById(`style-id-${this._getIdForAnimation()}`);

        if (style && style.parentNode) {
            style.parentNode.removeChild(style);
        }

        window.removeEventListener('click', this._handleClickOutside);
        window.removeEventListener('scroll', this._handleScrollThrottled);
    }

    _fixTopHeader() {
        const {messageBody: message} = this;
        const grower = message.querySelector('.grower');
        const footer = message.querySelector('.mail-footer');
        const appBar = document.querySelector('.menu-wrapper');
        const summary = message.querySelector('.mail-summary');

        const {width, top, bottom} = message.getBoundingClientRect();
        const height = (this.isReplying ? footer : summary).offsetHeight;
        const topPosition = appBar.offsetHeight + summary.offsetHeight;

        const shouldBeAbsolute = bottom - height < topPosition;
        const shouldBeSticky = top < summary.offsetHeight && bottom - height > topPosition;

        summary.style.width = `${width}px`;
        grower.style.height = `${summary.offsetHeight}px`;

        if (shouldBeSticky) {
            summary.style.bottom = null;
            message.classList.remove('absolute');
            message.classList.add('fixed');
        } else if (shouldBeAbsolute) {
            message.classList.remove('fixed');
            message.classList.add('absolute');

            if (this.isReplying)
                summary.style.bottom = footer.offsetHeight + 'px';
        } else {
            grower.style.height = null;
            summary.style.width = null;
            message.classList.remove('fixed');
            message.classList.remove('absolute');
        }
    }

    _fixBottomFooter() {
        const {messageBody: message} = this;
        const pusher = message.querySelector('.pusher');
        const footer = message.querySelector('.mail-footer');
        const summary = message.querySelector('.mail-summary');

        const {width, top, bottom} = message.getBoundingClientRect();
        const height = (this.isReplying ? footer : summary).offsetHeight;

        const shouldBeAbsolute = top + summary.offsetHeight + footer.offsetHeight > window.innerHeight;
        const shouldBeSticky = bottom > window.innerHeight;

        footer.style.width = `${width}px`;
        pusher.style.height = `${height}px`;

        if (shouldBeAbsolute) {
            message.classList.remove('fixed-bottom');
            message.classList.add('absolute-bottom');
        } else if (shouldBeSticky) {
            message.classList.remove('absolute-bottom');
            message.classList.add('fixed-bottom');
        } else {
            pusher.style.height = null;
            footer.style.width = null;
            message.classList.remove('fixed-bottom');
            message.classList.remove('absolute-bottom');
        }
    }

    _handleScroll() {
        if (this.messageBody) {
            this._fixTopHeader();
            this._fixBottomFooter();
        }
    }

    _handleClickOutside(e) {
        if (this.messageBody && !this.messageBody.contains(e.target)) {
            this.handleMessageClose();
        }
    }

    _listenForEndEvent(el, endEventType, cb) {
        const onEnd = () => {
            cb();
            el.removeEventListener(endEventType, onEnd);
        };

        el.addEventListener(endEventType, onEnd);
    }


    _transitionToOpen(message) {
        const grower = message.querySelector(".grower");
        const pusher = message.querySelector(".pusher");

        message.classList.add("mail--opening");
        pusher.classList.add("opening");

        this._listenForEndEvent(grower, "animationend", () => {
            message.classList.remove("mail--opening");
            message.classList.add("mail--open");
            pusher.classList.remove("opening");
            this._handleScroll();
        });
    }

    _transitionToClosed(message) {
        const pusher = message.querySelector(".pusher");
        const grower = message.querySelector(".grower");

        grower.setAttribute('data-id', this._getIdForAnimation());
        message.classList.add("mail--closing");
        message.classList.remove("mail--open");
        pusher.classList.add("closing");

        this._listenForEndEvent(pusher, "animationend", () => {
            message.classList.remove("mail--closing");
            pusher.classList.remove("closing");
            this.args.onCloseMessage();
        });
    }

    _getCollapsedHeight() {
        let defaultHeight = 0;
        const {message: {attachments = []}} = this.args;
        const hasPictures = attachments.any(({ext}) => ext === ".jpeg" || ext === ".png");

        if (attachments.length) {
            defaultHeight += 30;
        }

        if (hasPictures) {
            defaultHeight += 60;
        }

        return defaultHeight;
    }

    _getIdForAnimation() {
        return `var-${this.args.message.id}`;
    }

    _initAnimation(ref) {
        const details = ref.querySelector(".mail-content-details");
        const collapsedHeight = this._getCollapsedHeight();
        const scale = (details.clientHeight + 47) / 47;
        const randomId = this._getIdForAnimation();
        const sheet = (() => {
            // Create the <style> tag
            const style = document.createElement("style");
            style.setAttribute("id", `style-id-${randomId}`);

            // WebKit hack :(
            style.appendChild(document.createTextNode(""));
            document.head.appendChild(style);

            return style.sheet;
        })();

        sheet.insertRule(`
            @keyframes scale-out {
                0% {
                    transform: scale(1, 1);
                }
                80%,
                100% {
                    transform: scale(1, ${scale});
                }
            }
        `, 0);

        sheet.insertRule(`
            @keyframes scale-in {
                0% {
                    transform: scale(1, ${scale});
                }
                80%,
                100% {
                    transform: scale(1, 1);
                }
            }
        `, 1);

        sheet.insertRule(`
            @keyframes decrease-height-${randomId} {
                0% {
                    height: ${details.clientHeight};
                }
                80%,
                100% {
                    height: ${collapsedHeight}px;
                }
            }
        `, 2);

        sheet.insertRule(`
            .mail--opening .pusher, .mail--closing .pusher {
                height: ${details.clientHeight}px
            }
        `, 3);

        sheet.insertRule(`
            .mail--closing .grower[data-id=${randomId}] {
                height: ${collapsedHeight + 47}px
            }
        `, 4);

        sheet.insertRule(`
            .pusher.closing {
                animation-name: decrease-height-${randomId};
            }
        `, 5);

        this._transitionToOpen(this.messageBody, details.clientHeight);
    }


    @action
    _setRef(ref) {
        this.messageBody = ref;

        this._initAnimation(ref);
    }

    @action
    onReply(e) {
        e.preventDefault();
        e.stopPropagation();

        this.isReplying = true;
    }

    @action
    handleMessageClose() {
        this._transitionToClosed(this.messageBody);
    }
}
