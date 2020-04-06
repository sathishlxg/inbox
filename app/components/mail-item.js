import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class extends Component {
    @tracked isSnoozeOpen = false;
    @tracked isSettingsOpen = false;
    @tracked _isItemSelected = false;

    get isItemSelected() {
        if (!this.args.isSelected) {
            return this._isItemSelected = false;
        }

        return this._isItemSelected;
    }

    get trimmedContent() {
        const {mail: {content = ""}} = this.args;

        return content.substring(0, 75);
    }

    get isMenuActive() {
        return this.isSnoozeOpen || this.isSettingsOpen;
    }

    get showPin() {
        const {mail: {isPinned = false}} = this.args;

        return !this.isSelected && !this.isMenuActive && isPinned;
    }

    @action
    onSelectionChange() {
        this._isItemSelected = !this._isItemSelected;
        const {mail: {id}, onSelectionChange} = this.args;

        if (onSelectionChange) {
            onSelectionChange({ id, selected: this._isItemSelected });
        }
    }

    @action
    pinItem() {
        const {mail: {id, isPinned}, onUpdate} = this.args;

        if (onUpdate) {
            onUpdate({ id, value: !isPinned });
        }
    }

    @action
    handleMenuOpen(name, value) {
        this[name] = value;
    }
}
