/* eslint-disable ember/no-jquery */
import Ember from "ember";
import $ from 'jquery';

export default Ember.View.extend({
    didInsertElement() {
        $(".menu-wrapper").on("click", ".menu-toggle-icon input", function() {
            $(".menu-wrapper nav").toggleClass("active");
        });

        $(".menu-wrapper").on("change", '.menu-toggle-icon>input[type=checkbox]', function() {
            $(".sidebar").toggleClass("hide").toggleClass("show");
        });
    }
});
