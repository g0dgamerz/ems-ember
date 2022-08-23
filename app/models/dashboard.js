import Model, { attr } from '@ember-data/model';

export default class DashboardModel extends Model {
  @attr('number') dashboardId;
  @attr('number') countDepartment;
  @attr('number') countDesignation;
  @attr('number') countEmp;
  @attr('number') countMale;
  @attr('number') countFemale;
  @attr('number') countOther;
}
