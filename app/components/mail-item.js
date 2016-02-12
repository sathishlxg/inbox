import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "",
    isPinned: false,
    isItemSelected: false,

    trimmedContent: function() {
        return this.get("mail.content").substring(0, 75);
    }.property("mail.content"),

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

    _getPosition: function() {
        var link = Ember.$(event.target),
            offset = link.offset();

        return {
            position: "absolute",
            left: offset.left + link.outerWidth(),
            top: offset.top + link.outerHeight()
        }
    },

    actions: {
        pinItem: function() {
            this.toggleProperty("isPinned");
        },
        showSnooze: function() {
            this.sendAction("showSnooze", this._getPosition());
        },
        showSettings: function() {
            this.sendAction("showSettings", this._getPosition());
        }
    }
});
