import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class AppStateService extends Service {
    @tracked queuedItems = A([]);
    @tracked showPinnedItems = false;

    add(item) {
        this.queuedItems.pushObject(item);
    }

    remove(item) {
        this.queuedItems.removeObject(item);
    }

    empty() {
        this.queuedItems.clear();
    }

    toggleShowPinnedItems() {
        this.showPinnedItems = !this.showPinnedItems;
    }
}
