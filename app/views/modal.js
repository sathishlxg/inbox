import Ember from "ember";

export default Ember.View.extend({
    didInsertElement: function(argument) {
        var location = this.get("controller.location"),
            width = this.$(".actions-modal").width();

        this.$(".actions-modal").css({
            position: location.position,
            top: location.top + "px",
            left: location.left - width + "px"
        });

        Ember.run.next(this, function() {
            Ember.$(document).on("click.modal", Ember.run.bind(this, this._onClickOutside));
        });
    },

    _onClickOutside: function(evt) {
        if (Ember.isEmpty(this.$().has(Ember.$(evt.target)))) {
            this.get("controller").send("close");
        }
    },

    willDestroyElement: function(argument) {
        Ember.$(document).off("click.modal");
    }
});
