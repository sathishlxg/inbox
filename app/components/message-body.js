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
        window.removeEventListener('click', this._handleClickOutside);
    }

    _handleClickOutside(e) {
        if (this.messageBody && !this.messageBody.contains(e.target)) {
            this.args.onCloseMessage(e);
        }
    }

    @action
    _setRef(ref) {
        this.messageBody = ref;
    }

    @action
    onReply(e) {
        e.preventDefault();
        e.stopPropagation();

        this.isReplying = true;
    }
}
