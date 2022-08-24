import Model, { attr, belongsTo } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('number') employeeId;
  @attr('string') name;
  @attr('string') email;
  @attr('string') contactNumber;
  @attr('number') sex;
  @attr('date') hireDate;
  @attr('number') departmentId;
  @attr('number') designationId;
  @belongsTo('department') department;
  @belongsTo('designation') designation;
}
