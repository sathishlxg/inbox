import Component from "@glimmer/component";
import {action} from "@ember/object";

export default class FileItem extends Component {
    @action
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.args.toggleSideBar) {
            this.args.toggleSideBar();
        }
    }
}
