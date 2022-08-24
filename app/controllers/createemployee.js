/* eslint-disable ember/classic-decorator-no-classic-methods */
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
// import { A } from '@ember/array';

export default class CreateemployeeController extends Controller {
  @service store;
  @service router;
  @tracked data = '11';
  @tracked organizations = [
    {
      id: 1,
      name: 'Cotiviti',
    },
    {
      id: 2,
      name: 'IMark',
    },
  ];
  @tracked departments;
  constructor() {
    super(...arguments);

    this.departments = this.store.findAll('department');
    this.designations = this.store.findAll('designation');
  }
  // sex = A(['Male', 'female', 'others']);
  // selectedGender = null;

  // let organizations =
  //  [

  //   ];
  // edit() {
  //   this.set('isEditing', true);
  // }
  // doneEditing() {
  //   this.set('isEditing', false);
  //   var user = this.model;
  //   user.save();
  // }

  selectedOption = null;
  @action setSelection(selected) {
    this.set('selectedOption', selected);
    this.sex = this.selectedOption;
    console.log(this.department);
    console.log(this.selectedOption);
  }
  sdepartmentId = null;
  @action setDepartment(selected) {
    this.set('sdepartmentId', selected);
    this.departmentId = this.sdepartmentId;
    console.log(this.departmentId);
  }
  sdesignationId = null;
  @action setDesignation(selected) {
    this.set('sdesignationId', selected);
    this.designationId = this.sdesignationId;
    console.log(this.designationId);
  }
  @action createemployee(event) {
    console.log('check', this.sex);
    event.preventDefault();
    console.log('gander', this.sex);
    console.log('depid', this.departmentId);
    console.log('desid', this.designationId);
    console.log(this.hireDate);
    let employee = this.store.createRecord('employee', {
      employeeId: 0,
      name: this.name,
      email: this.email,
      contactNumber: this.contactNumber,
      sex: this.sex,
      hireDate: '2022-08-24T12:45:31.322Z',
      departmentId: 1,
      designationID: 1,
    });
    employee.save().then(() => {
      this.router.transitionTo('employees');
    });
  }

  @action ddlClicked(event) {
    console.log('ddl clicked');
    var dt = event.target.parentNode.nextSibling;
    console.log(dt);
  }

  @action ddlFocusOut() {
    console.log('out of ddl');
  }

  @action selectValue() {}
}
