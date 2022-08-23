import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditdepartmentController extends Controller {
  @service store;
  @service router;
  @action editDepartment(event) {
    event.preventDefault();
    console.log(this.model.departmentName);
    console.log(this.model);
    let department = this.model;
    // let department = {
    //   ID: this.model.id,
    //   departmentName: this.model.departmentName,
    // };
    department.save().then(() => {
      this.router.transitionTo('departments');
    });
  }
}
