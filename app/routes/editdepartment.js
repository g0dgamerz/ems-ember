import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditdepartmentRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('department', params.id);
  }
}
