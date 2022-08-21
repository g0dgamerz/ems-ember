/* eslint-disable ember/no-jquery */
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import $ from 'jquery';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  findAll(store, type) {
    console.log('from app adapter');

    let url = `https://localhost:7284/${this.namespace}/${type.modelName}`;
    return $.get(url);
  }
  findRecord(store, type, id) {
    let url = `https://localhost:7284/${this.namespace}/${type.modelName}/${id}`;
    return $.get(url);
  }
  // the role of a serializer is to format data sent to and received
  // from the server. Instead of formatting the snapshot data in the adapter,
  // which we could do, we should do this in the serializer. To get access to our
  // model’s serializer, we can call the serializerFor() method on the store,
  // giving it the model name. Next, serializers have a serializeIntoHash()
  // method that can be called to format the request payload data. In this case,
  // we are using serializeIntoHash() to build the data variable, which is
  // modified by reference. Thetype and snapshot arguments
  // are also passed along. This data variable
  // becomes our stringified JSON payload.
  // createRecord(store, type, snapshot) {
  //   let data = {};
  //   let serializer = store.serializerFor(type.modelName);
  //   serializer.serializeIntoHash(data, type, snapshot);
  //   console.log(data);
  //   return $.ajax({
  //     type: 'POST',
  //     url: `https://localhost:7284/${this.namespace}/${type.modelName}`,
  //     data: JSON.stringify(data),
  //     contentType: 'application/json',
  //   });
  // }
  deleteRecord(store, type, snapshot) {
    return $.ajax({
      type: 'DELETE',
      url: `https://localhost:7284/${this.namespace}/${type.modelName}/${snapshot.id}`,
    });
  }
}
