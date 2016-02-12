import Ember from 'ember';

export default Ember.Component.extend({
    isOpen : false,
    didInsertElement(){
        Ember.$(document).on('click.global', Ember.run.bind(this, this._onClickOutside));
    },
    _onClickOutside: function (evt) {
        if (Ember.isEmpty(this.$().has(Ember.$(evt.target)))) {
            this.set('isOpen', false);
        }
    },
    actions: {
        openMenu: function(){
            this.toggleProperty("isOpen");
        },
        addAccount: function(){
            alert("add account");
        },
        signOut: function(){
            alert("signOut");
        }
    }
});
