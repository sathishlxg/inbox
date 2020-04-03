import Route from "@ember/routing/route";

export default Route.extend({
    model(params) {
        return this.store.query('message', params);
    },

    actions: {
        updatePin: function(message) {
            var isPinned = message.get('isPinned');

            message.set('isPinned', !isPinned);
            message.save();
        }
    }
});
