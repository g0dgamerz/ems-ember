/* eslint-disable ember/no-jquery */
import ApplicationAdapter from './application';
import $ from 'jquery';

export default class DashboardAdapter extends ApplicationAdapter {
  namespace = 'api';
  findAll(store, type) {
    let url = `https://localhost:7284/${this.namespace}/${type.modelName}`;
    return $.get(url);
  }
}
