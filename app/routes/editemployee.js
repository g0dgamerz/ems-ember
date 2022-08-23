import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditemployeeRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('employee', params.id);
  }
}
