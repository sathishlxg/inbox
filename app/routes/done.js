import Route from '@ember/routing/route';

export default class DoneRoute extends Route {
    model(params) {
        return this.store.query('message', params).then(m => m.slice(-3));
    }
}
