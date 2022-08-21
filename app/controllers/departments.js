import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DepartmentsController extends Controller {
  @action deleteDepartment(department) {
    let confirmed = window.confirm(
      'Are you sure you wnat to delete this department'
    );
    if (confirmed) {
      department.destroyRecord();
    }
  }
}
