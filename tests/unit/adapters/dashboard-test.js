import { module, test } from 'qunit';
import { setupTest } from 'ems/tests/helpers';

module('Unit | Adapter | dashboard', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:dashboard');
    assert.ok(adapter);
  });
});
