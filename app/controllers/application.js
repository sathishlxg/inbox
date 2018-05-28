import Controller from "@ember/controller";

export default Controller.extend({
    queuedItems: [],

    isSidebarOpen: true,

    currentRoutePath: function() {
        const path = this.get("currentPath");

        return path === "index" ? "inbox" : path;
    }.property("currentPath"),

    count: function() {
        return this.get("queuedItems").length;
    }.property("queuedItems.[]"),

    hasItems: function() {
        return this.get("queuedItems").length > 0;
    }.property("queuedItems.[]"),

    actions: {
        emptyQueue: function() {
            this.get("queuedItems").clear();
        },

        toggleSideBar: function() {
            this.toggleProperty("isSidebarOpen");
        }
    }
});
