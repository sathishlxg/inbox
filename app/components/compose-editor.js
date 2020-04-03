import Component from "@ember/component";

export default Component.extend({
    tag: 'div',

    classNames: ['cell'],

    classNameBindings: ['isMinimized:minimized'],

    showCcBcc: false,

    isMinimized: false,

    actions: {
        toggleCcBcc: function() {
            this.toggleProperty("showCcBcc");
        },

        toggleMinimize: function() {
            this.toggleProperty("isMinimized");
        },

        onCloseCompose: function(id) {
            this.sendAction("onCloseCompose", id);
        },

        bringToFront: function(id, index) {
            this.sendAction("bringToFront", id, index);
        }
    }
});
