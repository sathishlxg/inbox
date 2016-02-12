import Ember from 'ember';

export default Ember.Controller.extend({
    queuedItems: [],

    count: function(){
        return this.get("queuedItems").length;
    }.property("queuedItems.[]"),
    
    hasItems: function(){
        return this.get("queuedItems").length > 0;
    }.property("queuedItems.[]"),
    
    actions:{
        emptyQueue: function(){
            this.get("queuedItems").clear();
        },
    }
    
});
