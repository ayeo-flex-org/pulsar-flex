const config = require('../../config');
const assert = require('assert');
const serde = require('../../../src/client/serde');
const commands = require('../../../src/commands');
const serializeBatch = require('../../../src/client/serde/payloadCommand/batch');

describe('Client payloadBatchCommands serde', function () {
  describe('serialize', function () {
    let serialized = null;
    it('should serialize without exception', async function () {
      serialized = serializeBatch.serializer({
        command: commands.sendMessages({
          producerId: 1,
          sequenceId: 1,
          numMessages: 0,
        }),
        metadataCommand: commands.messageMetadata({
          producerName: 'bla',
          sequenceId: 1,
          numMessages: 0,
          properties: {},
        }),
        payload: [],
      });
    });
    it('should deserialize serialized object without exception', async function () {
      serde.payloadCommand.deserializer(serialized);
    });
  });
});
