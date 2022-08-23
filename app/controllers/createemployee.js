import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// import { A } from '@ember/array';

export default class CreateemployeeController extends Controller {
  @service store;
  @service router;
  // sex = A(['Male', 'female', 'others']);
  // selectedGender = null;
  department() {
    return this.store.find('department');
  }
  @action createemployee(event) {
    event.preventDefault();
    console.log('did', this.departmentId);
    let employee = this.store.createRecord('employee', {
      employeeId: 0,
      name: this.name,
      email: this.email,
      contactNumber: this.contactNumber,
      sex: this.sex,
      hireDate: this.hireDate,
      departmentId: 1,
      designationId: 1,
    });
    employee.save().then(() => {
      this.router.transitionTo('employees');
    });
  }
}
