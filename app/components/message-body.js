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
        const style = document.getElementById(`style-id-${this.args.message.id}`);

        style.parentNode.removeChild(style);
        window.removeEventListener('click', this._handleClickOutside);
    }

    _handleClickOutside(e) {
        if (this.messageBody && !this.messageBody.contains(e.target)) {
            this.args.onCloseMessage(e);
        }
    }

    _listenForEndEvent(el, endEventType, cb) {
        const onEnd = () => {
            cb();
            el.removeEventListener(endEventType, onEnd);
        };

        el.addEventListener(endEventType, onEnd);
    }


    _transitionToOpen(message, height) {
        const grower = message.querySelector(".grower");
        const pusher = message.querySelector(".pusher");

        if (message.classList.contains("mail--open")) {
            return;
        }

        message.classList.add("mail--opening");
        pusher.classList.add("opening");
        pusher.style.height = `${height}px`;

        this._listenForEndEvent(grower, "animationend", () => {
            message.classList.remove("mail--opening");
            message.classList.add("mail--open");
            pusher.classList.remove("opening");
            pusher.style.height = 0;
        });
    }

    _transitionToClosed(message) {
        const pusher = message.querySelector(".pusher");

        message.classList.add("mail--closing");
        message.classList.remove("mail--open");
        pusher.classList.add("closing");

        this._listenForEndEvent(pusher, "animationend", () => {
            message.classList.remove("mail--closing");
            pusher.classList.remove("closing");
        });
    }


    @action
    _setRef(ref) {
        this.messageBody = ref;
        const details = ref.querySelector(".mail-content-details");
        const scale = (details.clientHeight + 47) / 47;
        const sheet = (() => {
            // Create the <style> tag
            const style = document.createElement("style");
            style.setAttribute("id", `style-id-${this.args.message.id}`);

            // style.innerHTML = `
            //     @keyframes scale-out {
            //         0% {
            //             transform: scale(1, 1);
            //         }
            //         80%,
            //         100% {
            //             transform: scale(1, ${scale});
            //         }
            //     }
            // `;

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

        setTimeout(() => this._transitionToOpen(this.messageBody, details.clientHeight), 0);
    }

    @action
    onReply(e) {
        e.preventDefault();
        e.stopPropagation();

        this.isReplying = true;
    }
}
