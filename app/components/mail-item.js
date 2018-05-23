import Component from "@ember/component";
import $ from "jquery";

export default Component.extend({
    tagName: "",

    isPinned: false,

    settings: false,

    snooze: false,

    isItemSelected: false,

    trimmedContent: function() {
        return this.get("mail.content").substring(0, 75);
    }.property("mail.content"),

    isMenuActive: function() {
        return this.get("snooze") || this.get("settings");
    }.property("snooze", "settings"),

    onChange: function() {
        this.sendAction("setSelected", {
            id: this.get("mail.id"),
            selected: this.get("isItemSelected")
        });
    }.observes("isItemSelected"),

    onDeSelect: function() {
        if (!this.get("isSelected")) {
            this.set("isItemSelected", false);
        }
    }.observes("isSelected"),

    actions: {
        pinItem: function() {
            this.toggleProperty("isPinned");
        },

        handleMenuOpen: function(name, value) {
            this.set(name, value);
        }
    }
});
