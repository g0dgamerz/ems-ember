import ApplicationSerializer from './application';

export default class DashboardSerializer extends ApplicationSerializer {
  primaryKey = 'dashboardId';
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { dashboard: payload };
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
