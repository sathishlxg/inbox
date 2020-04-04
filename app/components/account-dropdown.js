import Component from "@ember/component";
import $ from "jquery";
import { bind } from "@ember/runloop";
import { isEmpty } from "@ember/utils";

export default Component.extend({
    isOpen: false,

    didInsertElement() {
        $(document).on("click.global", bind(this, this._onClickOutside));
    },

    _onClickOutside: function(evt) {
        if (this.$() && isEmpty(this.$().has($(evt.target)))) {
            this.set("isOpen", false);
        }
    },

    actions: {
        openMenu: function() {
            this.toggleProperty("isOpen");
        },

        addAccount: function() {
            alert("add account");
        },

        signOut: function() {
            alert("signOut");
        }
    }
});
