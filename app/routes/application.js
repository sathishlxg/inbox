import Route from "@ember/routing/route";

export default Route.extend({


    actions: {
        didTransition() {
            this.controller.get("queuedItems").clear();
        },

        close: function() {
            this.disconnectOutlet({
                outlet: "modal",
                parentView: "application"
            });
        },

        open: function(name) {
            this.render(name, {
                into: "application",
                outlet: "modal",
                controller: "application"
            });
        },

        showInvite: function() {
            this.send("open", "invite");
        }
    }
});
