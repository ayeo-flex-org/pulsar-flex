const config = require('../../config');
const assert = require('assert');
const serde = require('../../../src/client/serde');
const commands = require('../../../src/commands');

const {} = config;

describe('Client simpleCommand serde', function () {
  describe('serialize', function () {
    let serialized = null;
    it('should serialize without exception', async function () {
      serialized = serde.simpleCommand.serializer({
        command: commands.sendMessages({
          producerId: 1,
          sequenceId: 1,
          numMessages: 2,
        }),
      });
    });
    it('should deserialize serialized object without exception', async function () {
      serde.simpleCommand.deserializer(serialized);
    });
  });
});
