import Component from "@glimmer/component";
import {action} from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class ComposeEditor extends Component {
    @tracked showCcBcc = false;
    @tracked isMinimized = false;

    @action
    toggleCcBcc() {
        this.showCcBcc = !this.showCcBcc;
    }

    @action
    onMinimize(e) {
        e.stopPropagation();

        this.isMinimized = !this.isMinimized;
    }

    @action
    onClose(index, event) {
        event.stopPropagation();

        if (this.args.onCloseCompose) {
            this.args.onCloseCompose(index);
        }
    }
}
