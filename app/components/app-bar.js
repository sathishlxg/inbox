import Component from "@ember/component";

export default Component.extend({
    actions: {
        emptyQueue: function() {
            this.sendAction("emptyQueue");
        },

        toggleSideBar: function() {
            this.sendAction("toggleSideBar");
        },

        togglePinnedItems: function(value) {
            this.sendAction("togglePinnedItems", value);
        }
    }
});
