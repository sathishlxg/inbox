import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class extends Component {
    @tracked isOpen = false;

    constructor() {
        super(...arguments);

        this._handleClickOutside = this._handleClickOutside.bind(this);

        window.addEventListener('click', this._handleClickOutside);
    }

    willDestroy() {
        window.removeEventListener('click', this._handleClickOutside);
    }

    _handleClickOutside(e) {
        if (this.popOver && !this.popOver.contains(e.target)) {
            this.isOpen = false;

            if (this.args.onClose) {
                this.args.onClose(false);
            }
        }
    }

    @action
    _setRef(ref) {
        this.popOver = ref;
    }

    @action
    openMenu() {
        this.isOpen = true;

        if (this.args.onOpen) {
            this.args.onOpen(true);
        }
    }
}
