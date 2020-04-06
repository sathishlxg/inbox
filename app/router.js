import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

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
