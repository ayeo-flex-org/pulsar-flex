const { Producer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const utils = require('../utils');

const { jwt, discoveryServers, topic, containerName } = config;

describe('Producer tests', function () {
  const producer = new Producer({
    discoveryServers,
    jwt,
    topic,
  });
  beforeEach(async function () {});

  afterEach(async function () {
    if (producer._connected) {
      await producer.close();
    }
  });

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
        assert.ok(false);
      }
    });
  });
  describe('on creating multiple exclusive producers', function () {
    it('should throw exception', async function () {
      await assert.rejects(
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
          try {
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
          } catch (e) {
            await firstProducer.close();
            throw e;
          }
        },
        {
          name: 'PulsarFlexProducerCreationError',
        }
      );
    });
  });
  describe('on creating multiple shared producers', function () {
    it('should not throw exception', async function () {
      const firstProducer = new Producer({
        discoveryServers,
        jwt,
        topic,
        producerAccessMode: Producer.ACCESS_MODES.SHARED,
      });
      const secondProducer = new Producer({
        discoveryServers,
        jwt,
        topic,
        producerAccessMode: Producer.ACCESS_MODES.SHARED,
      });
      try {
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
        assert.ok(true);
      } catch (e) {
        await firstProducer.close();
        await secondProducer.close();
        assert.ok(false);
      }
    });
  });
  describe('on creating exclusive producer and "wait for exclusive" producer', function () {
    it('should not throw exception', async function () {
      const firstProducer = new Producer({
        discoveryServers,
        jwt,
        topic,
        producerAccessMode: Producer.ACCESS_MODES.WAITFOREXCLUSIVE,
      });
      const secondProducer = new Producer({
        discoveryServers,
        jwt,
        topic,
        producerAccessMode: Producer.ACCESS_MODES.WAITFOREXCLUSIVE,
      });
      try {
        await firstProducer.create();
        await secondProducer.create();
        await firstProducer.sendMessage({
          payload: 'asdf',
          properties: { k: 'v' },
        });
        await firstProducer.close();
        await utils.sleep(1000);
        await secondProducer.sendMessage({
          payload: 'asdf',
          properties: { k: 'v' },
        });
        await secondProducer.close();
        assert.ok(true);
      } catch (e) {
        await firstProducer.close();
        await secondProducer.close();
        assert.ok(false);
      }
    });
  });
  describe('on producerClose the producer continues sending messages', function () {
    it('should not throw exception', async function () {
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic,
      });
      try {
        await producer.create();
        await new Promise((resolve, reject) => {
          producer
            .sendMessage({ payload: 'sinai', properties: { k: 'v' } })
            .then(resolve)
            .catch(reject);
          const emitter = producer._client.getResponseEvents();
          setImmediate(() => emitter.emit('producerClose', { command: { requestId: 1 } }));
        });
        await producer.close();
        assert.ok(true);
      } catch (e) {
        await producer.close();
        assert.ok(false);
      }
    });
  });
  describe('on connection exception should resend message', function () {
    it('should not throw exception', async function () {
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic,
      });
      await producer.create();
      const goodClient = producer._client.getCnx();
      producer._client._cnx = {
        sendPayloadCommandRequest: () => {
          throw new Error('galrose');
        },
        sendSimpleCommandRequest: () => {
          throw new Error('galrose');
        },
        sendPayloadBatchCommandRequest: () => {
          throw new Error('galrose');
        },
      };
      await new Promise((resolve, reject) => {
        producer
          .sendMessage({ payload: 'sinai', properties: { k: 'v' } })
          .then(resolve)
          .catch(reject);
        producer._client._cnx = goodClient;
        const emitter = producer._client.getResponseEvents();
        setImmediate(() => emitter.emit('producerSuccess', { command: { requestId: 1 } }));
      });
      await producer.close();
    });
    it('should resend messages after reconnect', async function () {
      await producer.create();
      let msgsSent = 0;
      // copy his way for resolving promise, no await for send message
      // maybe add afterEach beforeEach
      // test unload() :(
      await new Promise(async (resolve, reject) => {
        while (msgsSent <= 2) {
          await producer
            .sendMessage({ payload: 'sinai', properties: { k: 'v' } })
            .then(() => {
              msgsSent++;
            })
            .catch(reject);
          if (msgsSent >= 2) {
            resolve();
            break;
          }
          console.log('closing connection');
          producer._client.getCnx().close();
        }
      });
    });
    it('should resend messages after unload', async function () {
      await producer.create();
      let msgsSent = 0;
      await new Promise(async (resolve, reject) => {
        while (msgsSent <= 5) {
          await producer
            .sendMessage({ payload: 'sinai', properties: { k: 'v' } })
            .then(() => {
              console.log('sent');
              msgsSent++;
            })
            .catch(reject);
          if (msgsSent === 3) {
            console.log('unloading');
            await utils.unloadTopic();
          }
          if (msgsSent >= 5) {
            resolve();
            break;
          }
        }
      });
    });
  });
  describe('on connection exception should resend batch', function () {
    it('should not throw exception', async function () {
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic,
      });
      await producer.create();
      const goodClient = producer._client.getCnx();
      producer._client._cnx = {
        sendPayloadCommandRequest: () => {
          throw new Error('galrose');
        },
        sendSimpleCommandRequest: () => {
          throw new Error('galrose');
        },
        sendPayloadBatchCommandRequest: () => {
          throw new Error('galrose');
        },
      };
      await new Promise((resolve, reject) => {
        producer
          .sendBatch({ messages: [{ payload: 'sinai', properties: { k: 'v' } }] })
          .then(resolve)
          .catch(reject);
        producer._client._cnx = goodClient;
        const emitter = producer._client.getResponseEvents();
        setImmediate(() => emitter.emit('producerSuccess', { command: { requestId: 2 } }));
      });
      await producer.close();
    });
  });
  describe('on sending message should contain payload and properties', function () {
    it('should not throw exception', async function () {
      const topic = 'public/default/testSendMessage';
      const subscriptionName = 'test';
      try {
        await utils.createTopic({ topicName: topic });
      } catch (e) {
        if (!e.message.includes('This topic already exists')) throw e;
      }
      try {
        await utils.createSubscription({ topicName: topic, subscriptionName });
      } catch (e) {
        if (!e.message.includes('Subscription already exists for topic')) throw e;
      }
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic,
      });
      await producer.create();
      await producer.sendMessage({ payload: 'galrose', properties: { sinai: 'noob' } });
      const message = await utils.consumeMessage({
        numberOfMessages: 1,
        subscriptionName,
        topicName: topic,
      });
      await producer.close();
      await utils.deleteTopic({ topicName: topic });
      assert(
        JSON.stringify(message).includes('key:[null], properties:[sinai=noob], content:galrose')
      );
    });
  });
  describe('on sending batch, all messages should contain payload and properties', function () {
    it('should not throw exception', async function () {
      const topic = 'public/default/testSendBatch';
      const subscriptionName = 'test';
      try {
        await utils.createTopic({ topicName: topic });
      } catch (e) {
        if (!e.message.includes('This topic already exists')) throw e;
      }
      try {
        await utils.createSubscription({ topicName: topic, subscriptionName });
      } catch (e) {
        if (!e.message.includes('Subscription already exists for topic')) throw e;
      }
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic,
      });
      await producer.create();
      await producer.sendBatch({
        messages: [
          { payload: 'galrose', properties: { sinai: 'noob' } },
          { payload: 'batch', properties: { test: 'good' } },
        ],
      });
      const messages = await utils.consumeMessage({
        numberOfMessages: 2,
        subscriptionName,
        topicName: topic,
      });
      await producer.close();
      await utils.deleteTopic({ topicName: topic });
      assert(
        JSON.stringify(messages).includes('key:[null], properties:[sinai=noob], content:galrose') &&
          JSON.stringify(messages).includes('key:[null], properties:[test=good], content:batch')
      );
    });
  });
});
