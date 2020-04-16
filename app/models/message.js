import DS from "ember-data";

var message = DS.Model.extend({
    avatar: DS.attr("string"),
    senderName: DS.attr("string"),
    subject: DS.attr("string"),
    content: DS.attr("string"),
    snippet: DS.attr("string"),
    hasPictures: DS.attr("boolean"),
    isPinned: DS.attr("boolean"),
    hasAttachements: DS.attr("boolean"),
    attachments: DS.hasMany("file", { embedded: "always" })
});

export default message;
