import Route from '@ember/routing/route';

export default class CreateDepartmentRoute extends Route {
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('departmentName', '');
  }
}
