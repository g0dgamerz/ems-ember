import Model, { attr } from '@ember-data/model';

export default class DesignationModel extends Model {
  @attr('number') designationId;
  @attr('string') designationName;
  @attr('number') salary;
}
