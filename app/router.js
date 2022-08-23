/* eslint-disable ember/no-capital-letters-in-routes */
import EmberRouter from '@ember/routing/router';
import config from 'ems/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('department', { path: '/department/:id' });
  this.route('departments');
  this.route('designations');
  this.route('employees');
  this.route('designation', { path: '/designation/:id' });
  this.route('createDepartment', { path: '/department/new' });
  this.route('createDesignation', { path: '/designation/new' });
  this.route('editdepartment', { path: '/department/edit/:id' });
  this.route('editdesignation', { path: '/designation/edit/:id' });
  this.route('employee', { path: '/employee/:id' });
  this.route('editemployee', { path: '/employee/edit/:id' });
  this.route('dashboard');
  this.route('createemployee', { path: '/employee/new' });
  this.route('not-found', { path: '/*path' });
});
