import Component from "@ember/component";

export default Component.extend({
    isSettingsOpen: false,

    isSnoozeOpen: false,

    isItemSelected: false,

    trimmedContent: function() {
        return this.get("mail.content").substring(0, 75);
    }.property("mail.content"),

    isMenuActive: function() {
        return this.get("isSnoozeOpen") || this.get("isSettingsOpen");
    }.property("isSnoozeOpen", "isSettingsOpen"),

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

    showPin: function() {
        return !this.get("isSelected") && this.get("mail.isPinned") && !this.get("isMenuActive");
    }.property("mail.isPinned", "isMenuActive", "isSelected"),

    actions: {
        pinItem: function() {
            this.sendAction("onUpdate", {
                id: this.get("mail.id"),
                value: !this.get("mail.isPinned")
            });
        },

        handleMenuOpen: function(name, value) {
            this.set(name, value);
        }
    }
});
