import Component from "@ember/component";

export default Component.extend({
    left: 0,

    width: 0,

    isOverflowing: false,

    scrollElement: null,

    hasPictures: function() {
        return this.get("attachments").any(function(item) {
            return item.ext === ".jpeg" || item.ext === ".png";
        });
    }.property("attachments.@each"),

    hasContent: function() {
        return this.get("attachments").length > 0;
    }.property("attachments.[]"),

    enableLeft: function() {
        return this.get("left") > 0;
    }.property("left"),

    enableRight: function() {
        return (
            this.get("width") - this.get("left") + 20 >
            this.get("scrollElement")[0].scrollWidth / 3
        );
    }.property("left", "width"),

    didInsertElement: function() {
        this.set("scrollElement", this.$(".attachments-wrapper"));
        this.set("left", this.get("scrollElement").scrollLeft());
        this.set("width", this.$().outerWidth());

        if (this.get("scrollElement") && this.get("scrollElement").length) {
            this.set(
                "isOverflowing",
                this.get("scrollElement")[0].scrollWidth > this.get("width")
            );
        }
    },

    actions: {
        scrollLeft: function() {
            if (this.get("left") <= 0) return;

            var $el = this.get("scrollElement");

            this.set("left", $el.scrollLeft() - $el[0].scrollWidth / 3);

            this.$(".attachments-wrapper").animate(
                {
                    scrollLeft: this.get("left")
                },
                300
            );
        },

        scrollRight: function() {
            if (this.get("width") - this.get("left") < this.get("width") / 3)
                return;

            var $el = this.get("scrollElement");

            this.set("left", $el.scrollLeft() + $el[0].scrollWidth / 3);

            this.$(".attachments-wrapper").animate(
                {
                    scrollLeft: this.get("left")
                },
                300
            );
        }
    }
});
