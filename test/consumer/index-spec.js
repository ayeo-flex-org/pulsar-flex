const { Consumer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const utils = require('../utils');

const { jwt, discoveryServers, topic , containerName} = config;

describe('Consumer tests', function () {
  const cons = new Consumer({
    discoveryServers,
    jwt,
    topic: 'persistent://public/default/test',
    subscription: 'subscription',
    subType: Consumer.SUB_TYPES.EXCLUSIVE,
    consumerName: 'Consy',
    readCompacted: false,
    receiveQueueSize: 1000,
  })
  beforeEach(async function() {
    await utils.clearBacklog();
  })
  afterEach(async function() {
    if(cons.isSubscribed)
      await cons.unsubscribe();
  })
  it('should consume the messages successfully', async function () {
    this.timeout(30000);
    try {
      await cons.subscribe();
      let expectedMessages = ['hello', 'world', 'goodbye'];
      let messages = [];
      
      await utils.produceMsgs({messages: expectedMessages});
      await new Promise((resolve, reject) => {
          cons.run({
              onMessage: ({ ack, message }) => {
                  messages.push(message);
                  if(messages.length >= expectedMessages.length) {
                      resolve()
                  };
              },
          })
      })
      assert.deepEqual(messages, expectedMessages);
      
  } catch (e) {
      console.log(e);
      assert.ok(false);
    }
  });
  describe('Automatic Ack', function() {
    it('Should not re-consume the message', async function() {
      this.timeout(30000)
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMsgs({messages: ['hello']})
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message }) => {
                firstMessage = message;
                await cons.unsubscribe();
                resolve();
            },
        })
      })
      await utils.produceMsgs({messages: ['goodbye']})
      await cons.subscribe();
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message }) => {
              secondMessage = message;
              await cons.unsubscribe();
              resolve();
            },
        })
      })
      assert.notEqual(secondMessage, firstMessage);
    });
  });
  describe('Manual Ack', function() {
    it('Should re-consume message when auto ack is off', async function() {
      this.timeout(30000);
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMsgs({messages: ['hello']})
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message }) => {
              firstMessage = message;
              await cons.unsubscribe();
              resolve();
            },
            autoAck: false,
        })
      })
      await cons.subscribe();
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message }) => {
              secondMessage = message;
              await cons.unsubscribe();
              resolve();
            },
            autoAck: false,
        })
      })
      assert.equal(firstMessage, secondMessage);
    })
    it('Should not re-consume message after manual ack', async function() { 
      this.timeout(30000)
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMsgs({messages: ['bloo', 'blah']});
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message, test }) => {
              firstMessage = message;
              await ack();
              await cons.unsubscribe();
              resolve();
            },
            autoAck: false,
        })
      })
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
        })
      })
      assert.notEqual(firstMessage, secondMessage);
    })
    it('Should not re-consume cumulatively acked message', async function() {
      this.timeout(30000);
      const firstHalf = ['1', '2', '3'];
      const secondHalf = ['one', 'two', 'three'];
      let consumedFirstHalf = [];
      let msgCounter = 0;
      await cons.subscribe();
      await utils.produceMsgs( {messages: [...firstHalf, ...secondHalf] })
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message, test }) => {
              msgCounter++;
              consumedFirstHalf.push(message);
              if(msgCounter >= 3) {
                await ack({type: Consumer.ACK_TYPES.CUMULATIVE});
                await cons.unsubscribe();
                resolve();
              }
            },
            autoAck: false,
        })
      });
      await cons.subscribe();
      let consumedSecondHalf = [];
      msgCounter = 0;
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message, test }) => {
              msgCounter++;
              consumedSecondHalf.push(message);
              if(msgCounter >= 3) {
                await ack({type: Consumer.ACK_TYPES.CUMULATIVE});
                await cons.unsubscribe();
                resolve();
              }
            },
            autoAck: false,
        })
      });
      assert.deepEqual(consumedFirstHalf, firstHalf);
      assert.deepEqual(consumedSecondHalf, secondHalf);

    })
  });
});
