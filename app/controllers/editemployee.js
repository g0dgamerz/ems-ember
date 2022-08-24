import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditemployeeController extends Controller {
  @service store;
  @service router;
  selectedOption = null;
  @action setSelection(selected) {
    // eslint-disable-next-line ember/classic-decorator-no-classic-methods
    this.set('selectedOption', selected);
    console.log(this.selectedOption);
    this.sex = this.selectedOption;
    console.log(this.sex);
  }

  @action editEmployee(event) {
    event.preventDefault();
    let employee = this.model;
    employee.save().then(() => {
      this.router.transitionTo('employees');
    });
  }
}
