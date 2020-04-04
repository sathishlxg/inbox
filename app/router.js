import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
    location: config.locationType
});

Router.map(function() {
    this.route("index", {
        path: "/"
    });
    this.route("snoozed");
    this.route("done");
    this.route("draft");
    this.route("sent");
    this.route("purchases");
    this.route("trash");
    this.route("spam");
});

export default Router;
