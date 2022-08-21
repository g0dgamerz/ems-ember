import { module, test } from 'qunit';
import { setupTest } from 'ems/tests/helpers';

module('Unit | Serializer | department', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('department');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('department', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
