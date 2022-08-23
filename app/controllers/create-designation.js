import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateDesignationController extends Controller {
  @service store;
  @service router;
  @action createDesignation(event) {
    event.preventDefault();
    let designation = this.store.createRecord('designation', {
      designationId: 0,
      designationName: this.designationName,
      salary: this.salary,
    });
    designation.save().then(() => {
      this.router.transitionTo('designations');
    });
  }
}
