import { module, test } from 'qunit';
import { setupTest } from 'ems/tests/helpers';

module('Unit | Adapter | designation', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:designation');
    assert.ok(adapter);
  });
});
