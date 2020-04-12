import Component from "@glimmer/component";
import {action} from "@ember/object";
import {tracked} from "@glimmer/tracking";

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
        if (!this.dropdown || !this.dropdown.contains(e.target)) {
            this.isOpen = false;
        }
    }

    @action
    _setRef(ref) {
        this.dropdown = ref;
    }

    @action
    openMenu() {
        this.isOpen = !this.isOpen;
    }

    @action
    addAccount() {
        alert("add account");
    }

    @action
    signOut() {
        alert("signOut");
    }
}
