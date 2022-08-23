import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EmployeesController extends Controller {
  @action deleteEmployee(employee) {
    let confirmed = window.confirm(
      'Are you sure you wnat to delete this employee'
    );
    if (confirmed) {
      employee.destroyRecord();
    }
  }
}
