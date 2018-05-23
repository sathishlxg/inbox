import Route from "@ember/routing/route";

export default Route.extend({
    actions: {
        close: function() {
            this.disconnectOutlet({
                outlet: "modal",
                parentView: "application"
            });
        },

        open: function(name, position) {
            if (position) {
                this.controllerFor("application").set("location", position);
            }

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
