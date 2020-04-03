import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";

export default Controller.extend({
    application: Ember.inject.controller(),

    selectedItems: alias("application.queuedItems"),

    isPinned: alias("application.showPinnedItems"),

    isViewUpdated: false,

    messages: function(){
        var model = this.get('model');

        if (this.get("isPinned")) {
            return model.filter(function(message) {
                return !!message.get('isPinned');
            });
        }

        return model;
    }.property("model", "isPinned", "isViewUpdated"),

    globalSelect: function() {
        return this.get("selectedItems").length > 0;
    }.property("selectedItems.[]"),

    actions: {
        onSelectionChange: function(value) {
            if (value.selected) {
                this.get("selectedItems").pushObject(value.id);
            } else {
                this.get("selectedItems").removeObject(value.id);
            }
        },

        updateMessagePin: function({id, value}) {
            var message = this.get('model').find(function(m) {
                return m.get('id') === id;
            });

            if (message) {
                this.send("updatePin", message, value);
            }

            this.toggleProperty("isViewUpdated");
        }
    }
});
