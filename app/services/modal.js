import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ModalService extends Service {
    @tracked isOpen = false;

    @action
    onShow() {
        this.isOpen = true;
    }

    @action
    onHide() {
        this.isOpen = false;
    }
}
