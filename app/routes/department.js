import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DepartmentRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('department', params.id);

    // this.controller.set('test', []);
    // this.controller.set('jigdesh', []);
  }
}
