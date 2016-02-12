import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
       showInvite: function () {
           this.sendAction("showInvite")
       }
    }
});
