import Controller from "@ember/controller";

export default Controller.extend({
    queuedItems: [],

    isSidebarOpen: true,

    showPinnedItems: false,

    composeSessions: [],

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
        },

        togglePinnedItems: function(value) {
            this.set("showPinnedItems", value);
        },

        onCreateCompose: function(email = "") {
            var length = this.get("composeSessions").length || 0;

            this.get("composeSessions").unshiftObject({id: length, index: length, to: email});
        },

        onCloseCompose: function(id) {
            var composeSessions = this.get("composeSessions");
            var sessionToRemove = composeSessions.find(c => c.id === id);

            composeSessions.removeObject(sessionToRemove);
        },

        bringToFront: function(id, index) {
            var highestIndex = 0;
            var composeSessions = this.get("composeSessions");
            var length = composeSessions.length;
            var startIndex = composeSessions.findIndex(function(c) {
                return c.index === index;
            })

            composeSessions.forEach(function(c) {
                if (c.index > highestIndex) {
                    highestIndex = c.index;
                }
            });

            for (var i = startIndex; i >= 0; i--, highestIndex--) {
                var current = composeSessions[i];

                Ember.set(current, "index", highestIndex);
            }

            for (var i = startIndex + 1; i < length; i++, highestIndex--) {
                var current = composeSessions[i];

                Ember.set(current, "index", highestIndex);
            }
        }
    }
});
