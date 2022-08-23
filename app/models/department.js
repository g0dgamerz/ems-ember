import Model, { attr } from '@ember-data/model';

export default class DepartmentModel extends Model {
  @attr('number') departmentId;
  @attr('string') departmentName;
}
