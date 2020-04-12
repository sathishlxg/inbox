import Controller from "@ember/controller";
import {action} from "@ember/object";
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
    @service appState;

    get selectedItems() {
        return this.appState.queuedItems;
    }

    get isItemPinned() {
        return this.appState.showPinnedItems;
    }

    get messages() {
        const model = this.get('model');

        if (!!this.isItemPinned) {
            return model.filter(({isPinned}) => isPinned);
        }

        return model;
    }

    get messageGroups() {
        const n = 3;
        const groups = [];
        const chunkSize = Math.ceil(this.messages.length / n);
        const chunks = ["Today", "Yesterday", "Last week", "Last Month"];

        for (let i = 0; i < chunkSize; i++) {
            groups.push({
                chunk: chunks[i],
                messages: this.messages.slice(i * n, i * n + n)
            });
        }

        return groups;
    }

    get globalSelect() {
        return this.selectedItems.length > 0;
    }

    @action
    onSelectionChange(value) {
        if (value.selected) {
            this.appState.add(value.id);
        } else {
            this.appState.remove(value.id);
        }
    }

    @action
    updateMessagePin({id, value}) {
        var message = this.model.find(m => m.id === id);

        if (message) {
            this.send("updatePin", message, value);
        }
    }

}
