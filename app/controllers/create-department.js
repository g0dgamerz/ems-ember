import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CreateDepartmentController extends Controller {
  @service store;
  @service router;
  @action createDepartment(event) {
    event.preventDefault();
    console.log(this.departmentName);
    let department = this.store.createRecord('department', {
      departmentId: 0,
      departmentName: this.departmentName,
    });
    department.save().then(() => {
      this.router.transitionTo('departments');
    });
  }
}
