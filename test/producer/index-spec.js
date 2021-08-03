const { Producer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const utils = require('../utils');

const { jwt, discoveryServers, topic, containerName } = config;

describe('Producer tests', function () {
  describe('on creating & closing ', function () {
    it('should not throw exception', async function () {
      try {
        const producer = new Producer({
          discoveryServers,
          jwt,
          topic,
        });
        await producer.create();
        await producer.close();
        assert.ok(true);
      } catch (e) {
        console.log(e);
        assert.ok(false);
      }
    });
  });
  describe('on creating multiple exclusive producer', function () {
    it('should throw exception', async function () {
      assert.rejects(
        async () => {
          const firstProducer = new Producer({
            discoveryServers,
            jwt,
            topic,
            producerAccessMode: Producer.ACCESS_MODES.EXCLUSIVE,
          });
          const secondProducer = new Producer({
            discoveryServers,
            jwt,
            topic,
            producerAccessMode: Producer.ACCESS_MODES.EXCLUSIVE,
          });
          await firstProducer.create();
          await secondProducer.create();
          await firstProducer.sendMessage({
            payload: 'asdf',
            properties: { k: 'v' },
          });

          await secondProducer.sendMessage({
            payload: 'asdf',
            properties: { k: 'v' },
          });
          await firstProducer.close();
          await secondProducer.close();
        },
        {
          name: 'PulsarFlexProducerCreationError',
        }
      );
    });
  });
});
