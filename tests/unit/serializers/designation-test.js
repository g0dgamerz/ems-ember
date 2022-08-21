import { module, test } from 'qunit';
import { setupTest } from 'ems/tests/helpers';

module('Unit | Serializer | designation', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('designation');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('designation', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
