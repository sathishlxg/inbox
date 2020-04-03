import Component from "@ember/component";

export default Component.extend({
    actions: {
        onCloseCompose: function(id) {
            this.sendAction("onCloseCompose", id);
        },

        bringToFront: function(id, index) {
            this.sendAction("bringToFront", id, index);
        }
    }
});
