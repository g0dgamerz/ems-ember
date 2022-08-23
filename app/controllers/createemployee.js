import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateemployeeController extends Controller {
  @service store;
  @service router;
  department() {
    return this.store.find('department');
  }
  @action createemployee(event) {
    event.preventDefault();
    let designation = this.store.createRecord('employee', {
      name: this.name,
      email: this.email,
      contactNumber: this.contactNumber,
      sex: this.sex,
      hireDate: this.hireDate,
      departmentId: this.departmentId,
      designationID: this.designationID,
    });
    designation.save().then(() => {
      this.router.transitionTo('designations');
    });
  }
}
