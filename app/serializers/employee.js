import ApplicationSerializer from './application';

export default class EmployeeSerializer extends ApplicationSerializer {
  primaryKey = 'employeeID';
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { employee: payload };
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
