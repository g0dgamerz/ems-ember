import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {
  @service store;
  model() {
    // console.log(this.store.findAll('dashboard'));
    return this.store.findAll('dashboard');
  }
}
