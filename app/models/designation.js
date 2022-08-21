import Model, { attr } from '@ember-data/model';

export default class DesignationModel extends Model {
  @attr('string') designationName;
  @attr('number') salary;
}
