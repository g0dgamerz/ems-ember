import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditdesignationRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('designation', params.id);
  }
}
