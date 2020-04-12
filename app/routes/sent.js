import Route from '@ember/routing/route';

export default class SentRoute extends Route {
    model(params) {
        return this.store.query('message', params).then(m => m.slice(4));
    }
}
