import Controller from "@ember/controller";
import { alias } from "@ember/object/computed";

export default Controller.extend({
    application: Ember.inject.controller(),

    selectedItems: alias("application.queuedItems"),

    globalSelect: function() {
        if (!this.get("selectedItems")) return false;

        return this.get("selectedItems").length > 0;
    }.property("selectedItems.[]"),

    actions: {
        itemSelected: function(value) {
            if (value.selected) {
                this.get("selectedItems").pushObject(value.id);
            } else {
                this.get("selectedItems").removeObject(value.id);
            }
        }
    }
});
