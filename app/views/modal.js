/* eslint-disable no-async-promise-executor */
/* eslint-disable ember/new-module-imports */
/* eslint-disable ember/no-jquery */
import Ember from "ember";
import $ from 'jquery';

export default Ember.View.extend({
    didInsertElement: function() {
        var location = this.get("controller.location"),
            width = this.$(".actions-modal").width();

        this.$(".actions-modal").css({
            position: location.position,
            top: location.top + "px",
            left: location.left - width + "px"
        });

        Ember.run.next(this, function() {
            $(document).on("click.modal", Ember.run.bind(this, this._onClickOutside));
        });
    },

    _onClickOutside: function(evt) {
        if (Ember.isEmpty(this.$().has(Ember.$(evt.target)))) {
            this.get("controller").send("close");
        }
    },

    willDestroyElement: function() {
        Ember.$(document).off("click.modal");
    }
});
