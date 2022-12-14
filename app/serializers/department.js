import ApplicationSerializer from './application';

export default class DepartmentSerializer extends ApplicationSerializer {
  primaryKey = 'departmentId';
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { department: payload };
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
