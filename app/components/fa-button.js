import Component from "@ember/component";

export default Component.extend({
    actions: {
        showInvite: function() {
            this.sendAction("showInvite");
        }
    }
});
