import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditdesignationController extends Controller {
  @service store;
  @service router;
  @action editDesignation(event) {
    event.preventDefault();
    let designation = this.model;
    // let designation = {
    //   designationid: this.model.id,
    //   designationName: this.model.designationName,
    //   salary: this.model.salary,
    // };
    designation.save().then(() => {
      this.router.transitionTo('designations');
    });
  }
}
