import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class extends Component {
    @service modal;

    constructor() {
        super(...arguments);

        this._handleClickOutside = this._handleClickOutside.bind(this);

        window.addEventListener('click', this._handleClickOutside);
    }

    _handleClickOutside(e) {
        if (!this.modalRef || !this.modalRef.contains(e.target)) {
            this.onClose();
        }
    }

    @action
    _setRef(ref) {
        this.modalRef = ref;
    }

    willDestroy() {
        window.removeEventListener('click', this._handleClickOutside);
    }

    get isOpen() {
        return this.modal.isOpen;
    }

    @action
    onClose() {
        this.modal.onHide();
    }
}
