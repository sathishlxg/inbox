import DS from "ember-data";

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        attachments: { embedded: "always" }
    },

    normalizePayload: function(payload) {
        return {
            message: payload
        };
    }
});
