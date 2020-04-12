import Service from '@ember/service';

export default class AppStateService extends Service {
    queuedItems = [];
    showPinnedItems = false;

    add(item) {
        this.queuedItems.push(item);
    }

    remove(item) {
        const index = this.queuedItems.findIndex(i => i === item);

        if (index) {
            this.queuedItems.splice(index, 1);
        }
    }

    empty() {
        this.queuedItems = [];
    }

    toggleShowPinnedItems() {
        this.showPinnedItems = !this.showPinnedItems;
    }
}
