import Component from "@glimmer/component";
import {action} from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class extends Component {
    @tracked isReplying = false;

    constructor() {
        super(...arguments);

        this._handleClickOutside = this._handleClickOutside.bind(this);

        window.addEventListener('click', this._handleClickOutside);
    }

    willDestroy() {
        const style = document.getElementById(`style-id-${this._getIdForAnimation()}`);

        if (style && style.parentNode) {
            style.parentNode.removeChild(style);
        }

        window.removeEventListener('click', this._handleClickOutside);
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
