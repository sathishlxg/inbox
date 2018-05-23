import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
    location: config.locationType
});

Router.map(function() {
    this.route("index", {
        path: "/"
    });
    this.route("snooze");
    this.route("done");
});

export default Router;
