const { Producer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const utils = require('../utils');

const { jwt, discoveryServers, topic, containerName } = config;

describe('Producer tests', function () {
  it('should not throw exception', async function () {
    try {
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic,
        producerConfiguration: Producer.ACCESS_MODES.EXCLUSIVE,
      });
      await producer.create();
      await producer.sendMessage({
        payload: 'test',
        properties: { someRandomKey: 'somerandomvalue' },
      });
    } catch (e) {
      console.log(e);
      assert.ok(false);
    }
  });
});
