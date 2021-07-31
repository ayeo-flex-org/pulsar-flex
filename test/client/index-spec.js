const { Pulsar } = require('../../src');
const config = require('../config');
const assert = require('assert');

const { jwt, discoveryServers, topic } = config;

describe('Client tests', function () {
  describe('on correct config', function () {
    it('should not throw exception', async function () {
      const pulsar = new Pulsar({
        discoveryServers,
        jwt,
      });

      try {
        await pulsar.connect({ topic });
        assert.ok(true);
      } catch (e) {
        console.log(e);
        assert.ok(false);
      }
    });
  });
  describe('on not existing topic', function () {
    it('should not throw exception (for auto topic creation)', async function () {
      const pulsar = new Pulsar({
        discoveryServers,
        jwt,
      });

      try {
        await pulsar.connect({ topic: 'persistent://public/default/notexists' });
        assert.ok(true);
      } catch (e) {
        console.log(e);
        assert.ok(false);
      }
    });
  });
  describe('on incorrect topic name', function () {
    it('should throw PulsarFlexTopicLookupError exception', async function () {
      const pulsar = new Pulsar({
        discoveryServers,
        jwt,
      });

      await assert.rejects(
        async () => {
          await pulsar.connect({ topic: 'thats/not\\theforamt' });
        },
        {
          name: 'PulsarFlexTopicLookupError',
        }
      );
    });
  });
  describe('on incorrect jwt', function () {
    it('should throw PulsarFlexConnectionError exception', async function () {
      const pulsar = new Pulsar({
        discoveryServers,
        jwt: jwt + 'wrong',
      });

      await assert.rejects(
        async () => {
          await pulsar.connect({ topic });
        },
        {
          name: 'PulsarFlexConnectionError',
          message: 'Unable to authenticate',
        }
      );
    });
  });
  describe('on incorrect namespace', function () {
    it('should throw PulsarFlexTopicLookupError exception', async function () {
      const pulsar = new Pulsar({
        discoveryServers,
        jwt,
      });

      await assert.rejects(
        async () => {
          await pulsar.connect({ topic: 'not/exists/forsure' });
        },
        {
          name: 'PulsarFlexTopicLookupError',
        }
      );
    });
  });
});
