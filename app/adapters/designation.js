/* eslint-disable ember/no-jquery */
import ApplicationAdapter from './application';
import $ from 'jquery';

export default class DesignationAdapter extends ApplicationAdapter {
  namespace = 'api';
  findAll(store, type) {
    console.log('from designaioin dap');
    let url = `https://localhost:7284/${this.namespace}/${type.modelName}`;
    return $.get(url);
  }
  findRecord(store, type, id) {
    let url = `https://localhost:7284/${this.namespace}/${type.modelName}/${id}`;
    return $.get(url);
  }
  createRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    return $.ajax({
      type: 'POST',
      url: `https://localhost:7284/${this.namespace}/${type.modelName}`,
      data: JSON.stringify(data.designation),
      contentType: 'application/json',
    });
  }
  deleteRecord(store, type, snapshot) {
    return $.ajax({
      type: 'DELETE',
      url: `https://localhost:7284/${this.namespace}/${type.modelName}/${snapshot.id}`,
    });
  }
  updateRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    return $.ajax({
      type: 'PUT',
      url: `https://localhost:7284/${this.namespace}/${type.modelName}/${snapshot.id}`,
      data: JSON.stringify(data.designation),
      contentType: 'application/json',
    });
  }
}
