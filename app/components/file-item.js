import Component from "@ember/component";

export default Component.extend({
    tagName: "",

    isImage: function() {
        return this.get("file.fileType") === "image";
    }.property("file.fileType"),

    isVideo: function() {
        return this.get("file.fileType") === "video";
    }.property("file.fileType"),

    isDocument: function() {
        return this.get("file.fileType") === "document";
    }.property("file.fileType")
});
