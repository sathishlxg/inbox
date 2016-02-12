import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ["application"],
    
    selectedItems: Ember.computed.alias("controllers.application.queuedItems"),
    
    globalSelect: function(){
        if(!this.get("selectedItems")) return false;
        return this.get("selectedItems").length > 0;
    }.property("selectedItems.[]"),
    
    actions: {
        itemSelected: function(value){
            if(value.selected){
                this.get('selectedItems').pushObject(value.id);
            }
            else{
                this.get('selectedItems').removeObject(value.id);
            }
        }
    }
});
