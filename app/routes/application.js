import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        close: function() {
            this.disconnectOutlet({
                outlet: "modal",
                parentView: "application"
            })
        },
        open: function (name, position) {
            if(position){
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
        },
        showSettings: function (position) {
            this.send("open", "settings", position);
        },
        showSnooze: function(position) {
            this.send("open", "snoozeOption", position);
        }
    }
});
