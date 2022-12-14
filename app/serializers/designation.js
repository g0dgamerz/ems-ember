import ApplicationSerializer from './application';

export default class DesignationSerializer extends ApplicationSerializer {
  primaryKey = 'designationId';
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { designation: payload };
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
