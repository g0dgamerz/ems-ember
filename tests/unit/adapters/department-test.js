import { module, test } from 'qunit';
import { setupTest } from 'ems/tests/helpers';

module('Unit | Adapter | department', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:department');
    assert.ok(adapter);
  });
});
