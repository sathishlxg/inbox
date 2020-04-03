import Component from "@ember/component";

export default Component.extend({
    actions: {
        onCreateCompose: function(email) {
            this.sendAction("onCreateCompose", email);
        }
    }
});
