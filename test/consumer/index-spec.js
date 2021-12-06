const { Consumer, Producer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const utils = require('../utils');
const { LEVELS } = require('../../src/logger');

const { jwt, discoveryServers, topic, containerName, receiveQueueSize } = config;

describe('Consumer tests', function () {
  const cons = new Consumer({
    discoveryServers,
    jwt,
    topic: 'persistent://public/default/test',
    subscription: 'subscription',
    subType: Consumer.SUB_TYPES.FAILOVER,
    consumerName: 'Consy',
    readCompacted: false,
    receiveQueueSize,
    logLevel: LEVELS.INFO,
  });
  const cons2 = new Consumer({
    discoveryServers,
    jwt,
    topic: 'persistent://public/default/test',
    subscription: 'subscription',
    subType: Consumer.SUB_TYPES.FAILOVER,
    consumerName: 'Consy2',
    readCompacted: false,
    receiveQueueSize,
    logLevel: LEVELS.INFO,
  });
  const sharedConsumer1 = new Consumer({
    discoveryServers,
    jwt,
    topic: 'persistent://public/default/test',
    subscription: 'subscription',
    subType: Consumer.SUB_TYPES.SHARED,
    consumerName: 'Consy3',
    readCompacted: false,
    receiveQueueSize,
    logLevel: LEVELS.INFO,
  });
  const sharedConsumer2 = new Consumer({
    discoveryServers,
    jwt,
    topic: 'persistent://public/default/test',
    subscription: 'subscription',
    subType: Consumer.SUB_TYPES.SHARED,
    consumerName: 'Consy4',
    readCompacted: false,
    receiveQueueSize,
    logLevel: LEVELS.INFO,
  });
  const unackPrioritySharedConsumer = new Consumer({
    discoveryServers,
    jwt,
    topic: 'persistent://public/default/test',
    subscription: 'subscription',
    subType: Consumer.SUB_TYPES.SHARED,
    consumerName: 'Consy5',
    readCompacted: false,
    receiveQueueSize,
    logLevel: LEVELS.INFO,
    prioritizeUnacknowledgedMessages: true,
  });
  const smallReceiveQueueConsumer = new Consumer({
    discoveryServers,
    jwt,
    topic: 'persistent://public/default/test',
    subscription: 'subscription',
    subType: Consumer.SUB_TYPES.FAILOVER,
    consumerName: 'SmallReceiveQCons',
    readCompacted: false,
    receiveQueueSize: 5,
    logLevel: LEVELS.INFO,
  });
  beforeEach(async function () {
    await utils.clearBacklog();
  });
  afterEach(async function () {
    if (cons._isSubscribed) {
      await cons.unsubscribe();
    }
    if (cons2._isSubscribed) {
      await cons2.unsubscribe();
    }
    if (sharedConsumer1._isSubscribed) {
      await sharedConsumer1.unsubscribe();
    }
    if (sharedConsumer2._isSubscribed) {
      await sharedConsumer2.unsubscribe();
    }
    if (unackPrioritySharedConsumer._isSubscribed) {
      await unackPrioritySharedConsumer.unsubscribe();
    }
    if (smallReceiveQueueConsumer._isSubscribed) {
      await smallReceiveQueueConsumer.unsubscribe();
    }
  });
  describe('Flow tests', function () {
    it('Should empty the receive queue after reading all the messages', async function () {
      try {
        await cons.subscribe();
        let messageCounter = 0;
        const numberOfMessages = 20;
        const messages = Array(numberOfMessages).fill('message');
        await utils.produceMessages({ messages });
        await new Promise((resolve, reject) => {
          cons.run({
            onMessage: async ({ message }) => {
              messageCounter++;
              if (messageCounter === numberOfMessages) resolve();
            },
          });
        });
        assert.equal(cons._receiveQueue.length(), 0);
        assert.equal(cons._curFlow, receiveQueueSize - numberOfMessages);
      } catch (e) {
        console.log(e);
        throw e;
      }
    });
    it('Should read the messages after multiple reflows', async function () {
      try {
        await smallReceiveQueueConsumer.subscribe();
        let messageCounter = 0;
        const numberOfMessages = 20;
        const messages = Array(numberOfMessages).fill('message');
        await utils.produceMessages({ messages });
        await new Promise((resolve, reject) => {
          smallReceiveQueueConsumer.run({
            onMessage: async ({ message }) => {
              messageCounter++;
              console.log(message.toString());
              if (messageCounter === numberOfMessages) resolve();
            },
          });
        });
        assert.equal(smallReceiveQueueConsumer._curFlow, 3);
      } catch (e) {
        console.log(e);
        throw e;
      }
    });
  });
  describe('Failover Tests', function () {
    it('Should consume messages', async function () {
      try {
        await cons.subscribe();
        await cons2.subscribe();
        const expectedMessages = ['hello', 'world', 'goodbye'];
        let messages = [];
        let msgCounter = 0;
        await utils.produceMessages({ messages: expectedMessages });
        await new Promise((resolve, reject) => {
          const resolveIf = () => msgCounter >= 3 && resolve();
          cons.run({
            onMessage: async ({ message }) => {
              messages.push(message.toString());
              msgCounter++;
              if (msgCounter === 1) await cons.unsubscribe();
            },
          });
          cons2.run({
            onMessage: ({ ack, message }) => {
              messages.push(message.toString());
              msgCounter++;
              resolveIf();
            },
          });
        });
        assert.deepEqual(messages, expectedMessages);
      } catch (e) {
        console.log(e);
      }
    });
  });
  describe('Simple Consume Test', function () {
    it('should consume the messages successfully', async function () {
      try {
        await cons.subscribe();
        let expectedMessages = ['hello', 'world', 'goodbye'];
        let expectedRedeliveryCount = [0, 0, 0];
        let messages = [];
        let redeliveryCounts = [];

        await utils.produceMessages({ messages: expectedMessages });
        await new Promise((resolve, reject) => {
          cons.run({
            onMessage: ({ ack, message, redeliveryCount }) => {
              messages.push(message.toString());
              redeliveryCounts.push(redeliveryCount);
              if (messages.length >= expectedMessages.length) {
                resolve();
              }
            },
          });
        });
        assert.deepEqual(messages, expectedMessages);
        assert.deepEqual(redeliveryCounts, expectedRedeliveryCount);
      } catch (e) {
        console.log(e);
        assert.ok(false);
      }
    });
    it('should consume the messages successfully with headers', async function () {
      try {
        await cons.subscribe();
        let expectedMessages = ['galrose'];
        let properties = { sinai: 'noob' };
        let messages = [];
        let receivedProperties;

        const producer = new Producer({
          discoveryServers,
          jwt,
          topic: 'persistent://public/default/test',
        });
        await producer.create();
        await producer.sendMessage({ payload: 'galrose', properties: { sinai: 'noob' } });
        await producer.close();
        await new Promise((resolve, reject) => {
          cons.run({
            onMessage: ({ message, properties }) => {
              messages.push(message.toString());
              receivedProperties = properties;
              if (messages.length >= expectedMessages.length) {
                resolve();
              }
            },
          });
        });
        assert.deepEqual(messages, expectedMessages);
        assert.deepEqual(receivedProperties, properties);
      } catch (e) {
        console.log(e);
        assert.ok(false);
      }
    });
    it('should consume the batch successfully with headers', async function () {
      try {
        await cons.subscribe();
        let expectedMessages = ['galrose'];
        let properties = { sinai: 'noob' };
        let messages = [];
        let receivedProperties;

        const producer = new Producer({
          discoveryServers,
          jwt,
          topic: 'persistent://public/default/test',
        });
        await producer.create();
        await producer.sendBatch({
          messages: [{ payload: 'galrose', properties: { sinai: 'noob' } }],
        });
        await producer.close();
        await new Promise((resolve, reject) => {
          cons.run({
            onMessage: ({ message, properties }) => {
              messages.push(message.toString());
              receivedProperties = properties;
              if (messages.length >= expectedMessages.length) {
                resolve();
              }
            },
          });
        });
        assert.deepEqual(messages, expectedMessages);
        assert.deepEqual(receivedProperties, properties);
      } catch (e) {
        console.log(e);
        assert.ok(false);
      }
    });
  });
  describe('Consumer Connection tests', function () {
    it('should re-connect after topic unload', async function () {
      await cons.subscribe();
      let msgCounter = 0;
      await utils.produceMessages({ messages: ['hello', 'goodbye'] });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            msgCounter++;
            if (msgCounter === 1) await utils.unloadTopic();
            if (msgCounter > 1) resolve();
          },
          autoAck: true,
        });
      });
    });
    it('should re-send acks after connection loss', async function () {
      await cons.subscribe();
      let msgCounter = 0;
      await utils.produceMessages({ messages: ['hello', 'world', 'goodbye'] });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            msgCounter++;
            cons._client.getCnx().close();
            await ack();
            if (msgCounter >= 3) resolve();
          },
          autoAck: false,
        });
      });
      await cons.unsubscribe();
      await cons.subscribe();
      let expectedMessages = ['one', 'two', 'three'];
      let messages = [];
      msgCounter = 0;
      await utils.produceMessages({ messages: expectedMessages });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            msgCounter++;
            messages.push(message.toString());
            if (msgCounter >= 3) resolve();
          },
          autoAck: true,
        });
      });
      assert.deepEqual(messages, expectedMessages);
    });
  });
  describe('Manual Ack', function () {
    it('Should re-consume message when auto ack is off', async function () {
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMessages({ messages: ['hello'] });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            firstMessage = message.toString();
            await cons.unsubscribe();
            resolve();
          },
          autoAck: false,
        });
      });
      await cons.subscribe();
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            secondMessage = message.toString();
            await cons.unsubscribe();
            resolve();
          },
          autoAck: false,
        });
      });
      assert.equal(firstMessage, secondMessage);
    });
    it('Should not re-consume message after manual ack', async function () {
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMessages({ messages: ['bloo', 'blah'] });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message, test }) => {
            firstMessage = message;
            await ack();
            await cons.unsubscribe();
            resolve();
          },
          autoAck: false,
        });
      });
      await cons.subscribe();
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message, test }) => {
            secondMessage = message;
            await ack();
            await cons.unsubscribe();
            resolve();
          },
          autoAck: false,
        });
      });
      assert.notEqual(firstMessage, secondMessage);
    });
    it('Should not re-consume cumulatively acked message', async function () {
      const firstHalf = ['1', '2', '3'];
      const secondHalf = ['one', 'two', 'three'];
      let consumedFirstHalf = [];
      let msgCounter = 0;
      await cons.subscribe();
      await utils.produceMessages({ messages: [...firstHalf, ...secondHalf] });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message, test }) => {
            msgCounter++;
            consumedFirstHalf.push(message.toString());
            if (msgCounter >= 3) {
              await ack({ type: Consumer.ACK_TYPES.CUMULATIVE });
              await cons.unsubscribe();
              resolve();
            }
          },
          autoAck: false,
        });
      });
      await cons.subscribe();
      let consumedSecondHalf = [];
      msgCounter = 0;
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message, test }) => {
            msgCounter++;
            consumedSecondHalf.push(message.toString());
            if (msgCounter >= 3) {
              await ack({ type: Consumer.ACK_TYPES.CUMULATIVE });
              await cons.unsubscribe();
              resolve();
            }
          },
          autoAck: false,
        });
      });
      assert.deepEqual(consumedFirstHalf, firstHalf);
      assert.deepEqual(consumedSecondHalf, secondHalf);
    });
  });
  describe('Automatic Ack', function () {
    it('Should not re-consume the message', async function () {
      const expectedFirstMessage = 'hello';
      const expectedSecondMessage = 'goodbye';
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMessages({ messages: [expectedFirstMessage] });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            firstMessage = message.toString();
            await cons.unsubscribe();
            resolve();
          },
        });
      });
      await utils.produceMessages({ messages: [expectedSecondMessage] });
      await cons.subscribe();
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            secondMessage = message.toString();
            await cons.unsubscribe();
            resolve();
          },
        });
      });
      assert.equal(firstMessage, expectedFirstMessage);
      assert.equal(secondMessage, expectedSecondMessage);
    });
  });
  describe('Redeliver unacknowledged messages', function () {
    it('Should read the unacknowledged messages again, in failover subscription', async function () {
      const messages = ['first', 'second', 'third'];
      const receivedMessages = [];
      await cons.subscribe();
      let messageCounter = 0;
      await utils.produceMessages({ messages });
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            if (messageCounter === 0) await ack({ type: Consumer.ACK_TYPES.NEGATIVE });
            else await ack({ type: Consumer.ACK_TYPES.INDIVIDUAL });
            messageCounter++;
            receivedMessages.push(message.toString());
            messageCounter === 4 && resolve();
          },
          autoAck: false,
        });
      });
      assert.deepEqual(receivedMessages, ['first', 'first', 'second', 'third']);
    });
    it('Should read the unacknowledged messages again,in batch, in failover subscription', async function () {
      const messages = ['first', 'second', 'third'];
      const receivedMessages = [];
      await cons.subscribe();
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic: 'persistent://public/default/test',
      });
      await producer.create();
      let messageCounter = 0;
      await producer.sendBatch({ messages: messages.map((message) => ({ payload: message })) });
      await producer.close();
      await new Promise((resolve, reject) => {
        cons.run({
          onMessage: async ({ ack, message }) => {
            if (messageCounter === 0) await ack({ type: Consumer.ACK_TYPES.NEGATIVE });
            else await ack({ type: Consumer.ACK_TYPES.INDIVIDUAL });
            messageCounter++;
            receivedMessages.push(message.toString());
            messageCounter === 4 && resolve();
          },
          autoAck: false,
        });
      });
      assert.deepEqual(receivedMessages, ['first', 'first', 'second', 'third']);
    });
    it('Should increase the redeliveryCount on multiple consumers in the same shared subscription', async function () {
      let expectedRedeliveryCount = 0;
      let receivedRedeliveryCount = 0;
      let readByConsumer1 = false;
      let readByConsumer2 = false;
      await sharedConsumer1.subscribe();
      await sharedConsumer2.subscribe();
      await utils.produceMessages({ messages: ['galrose'] });
      await new Promise((resolve, reject) => {
        sharedConsumer1.run({
          onMessage: async ({ ack, redeliveryCount }) => {
            readByConsumer1 = true;
            if (!readByConsumer1 || !readByConsumer2) {
              expectedRedeliveryCount++;
              await ack({ type: Consumer.ACK_TYPES.NEGATIVE });
            } else {
              receivedRedeliveryCount = redeliveryCount;
              await ack({ type: Consumer.ACK_TYPES.INDIVIDUAL });
              resolve();
            }
          },
          autoAck: false,
        });
        sharedConsumer2.run({
          onMessage: async ({ ack, redeliveryCount }) => {
            readByConsumer2 = true;
            if (!readByConsumer1 || !readByConsumer2) {
              expectedRedeliveryCount++;
              await ack({ type: Consumer.ACK_TYPES.NEGATIVE });
            } else {
              receivedRedeliveryCount = redeliveryCount;
              await ack({ type: Consumer.ACK_TYPES.INDIVIDUAL });
              resolve();
            }
          },
          autoAck: false,
        });
      });
      assert(expectedRedeliveryCount, receivedRedeliveryCount);
    });
    it('Should read the unacknowledged message again after the current flow, in shared subscription', async function () {
      const messages = ['first', 'second', 'third'];
      const expectedRedeliveryCount = [0, 0, 0, 1];
      const receivedMessages = [];
      const receivedRedeliveryCount = [];
      await sharedConsumer1.subscribe();
      let messageCounter = 0;
      await utils.produceMessages({ messages });
      await new Promise((resolve, reject) => {
        sharedConsumer1.run({
          onMessage: async ({ ack, message, redeliveryCount }) => {
            receivedRedeliveryCount.push(redeliveryCount);
            if (messageCounter === 0) await ack({ type: Consumer.ACK_TYPES.NEGATIVE });
            else await ack({ type: Consumer.ACK_TYPES.INDIVIDUAL });
            messageCounter++;
            receivedMessages.push(message.toString());
            messageCounter === 4 && resolve();
          },
          autoAck: false,
        });
      });
      assert.deepEqual(receivedRedeliveryCount, expectedRedeliveryCount);
      assert.deepEqual(receivedMessages, ['first', 'second', 'third', 'first']);
    });
    it('Should read the unacknowledged message again before the rest of the flow, in shared subscription', async function () {
      const messages = ['first', 'second', 'third'];
      const expectedRedeliveryCount = [0, 1, 0, 0];
      const receivedMessages = [];
      const receivedRedeliveryCount = [];
      await unackPrioritySharedConsumer.subscribe();
      let messageCounter = 0;
      await utils.produceMessages({ messages });
      await new Promise((resolve, reject) => {
        unackPrioritySharedConsumer.run({
          onMessage: async ({ ack, message, redeliveryCount }) => {
            receivedRedeliveryCount.push(redeliveryCount);
            if (messageCounter === 0) await ack({ type: Consumer.ACK_TYPES.NEGATIVE });
            else await ack({ type: Consumer.ACK_TYPES.INDIVIDUAL });
            messageCounter++;
            receivedMessages.push(message.toString());
            messageCounter === 4 && resolve();
          },
          autoAck: false,
        });
      });
      assert.deepEqual(receivedRedeliveryCount, expectedRedeliveryCount);
      assert.deepEqual(receivedMessages, ['first', 'first', 'second', 'third']);
    });
    it('Should read the batch of the unacknowledged message again before the rest of the flow,in batch, in shared subscription', async function () {
      const messages = ['first', 'second', 'third'];
      const receivedMessages = [];
      await unackPrioritySharedConsumer.subscribe();
      const producer = new Producer({
        discoveryServers,
        jwt,
        topic: 'persistent://public/default/test',
      });
      await producer.create();
      let messageCounter = 0;
      await producer.sendBatch({ messages: messages.map((message) => ({ payload: message })) });
      await new Promise((resolve, reject) => {
        unackPrioritySharedConsumer.run({
          onMessage: async ({ ack, message }) => {
            messageCounter++;
            if (messageCounter === 1) await ack({ type: Consumer.ACK_TYPES.NEGATIVE });
            else {
              await ack({ type: Consumer.ACK_TYPES.INDIVIDUAL });
              receivedMessages.push(message.toString());
              messageCounter === 6 && resolve();
            }
          },
          autoAck: false,
        });
      });
      await producer.close();
      assert.deepEqual(receivedMessages, ['first', 'second', 'third', 'second', 'third']);
    });
  });
});
