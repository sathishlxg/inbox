/* eslint-disable ember/no-jquery */
import Component from "@glimmer/component";
import {action} from "@ember/object";

export default class extends Component {
    constructor() {
        super(...arguments);

        this._handleClickOutside = this._handleClickOutside.bind(this);

        window.addEventListener('click', this._handleClickOutside);
    }

    willDestroy() {
        window.removeEventListener('click', this._handleClickOutside);
    }

    _handleClickOutside(e) {
        if (!this.messageBody || !this.messageBody.contains(e.target)) {
            this.args.onCloseMessage(e);
        }
    }

    @action
    _setRef(ref) {
        this.messageBody = ref;
    }
}
