import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DesignationsController extends Controller {
  @action deleteDesignation(designation) {
    let confirmed = window.confirm(
      'Are you sure you wnat to delete this department'
    );
    if (confirmed) {
      designation.destroyRecord();
    }
  }
}
