import Ember from "ember";

export default Ember.View.extend({
    didInsertElement() {
        $(".menu-wrapper").on("click", ".menu-toggle-icon input", function() {
            $(".menu-wrapper nav").toggleClass("active");
        });

        $(".menu-wrapper").on("change", '.menu-toggle-icon>input[type=checkbox]', function() {
            $(".sidebar").toggleClass("hide").toggleClass("show");
        });
    },

    _getPosition: function() {
        var link = Ember.$(event.target),
            offset = link.offset();

        return {
            position: "fixed",
            left: offset.left + link.outerWidth(),
            top: (offset.top - $(window).scrollTop()) + link.outerHeight()
        }
    },

    actions: {
        showSnooze: function() {
            var controller = this.get("controller");

           controller.send("showSnooze", this._getPosition());
        },

        showSettings: function(evt) {
            this.get("controller").send("showSettings", this._getPosition());
        }
    }
});
