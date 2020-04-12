import Route from "@ember/routing/route";
import { action } from "@ember/object";

export default class IndexRoute extends Route {
    model(params) {
        return this.store.query('message', params);
    }

    @action
    updatePin(message) {
        const isPinned = message.get('isPinned');

        message.set('isPinned', !isPinned);
        message.save();
    }
}
