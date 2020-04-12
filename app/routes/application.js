import Route from "@ember/routing/route";
import { action } from "@ember/object";

export default class DoneRoute extends Route {
    @action
    didTransition() {
        this.controller.get("emptyQueue")();
    }

    @action
    close() {
        this.disconnectOutlet({
            outlet: "modal",
            parentView: "application"
        });
    }

    @action
    open(name) {
        this.render(name, {
            into: "application",
            outlet: "modal",
            controller: "application"
        });
    }

    @action
    showInvite() {
        this.send("open", "invite");
    }
}
