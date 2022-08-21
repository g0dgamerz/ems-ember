import { module, test } from 'qunit';
import { setupTest } from 'ems/tests/helpers';

module('Unit | Model | designation', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('designation', {});
    assert.ok(model);
  });
});
