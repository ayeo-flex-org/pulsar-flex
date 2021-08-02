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
    this.timeout(10000)
    console.log('Clearing Backlog...');
    await utils.clearBacklog();
  })
  this.afterEach(async function() {
    this.timeout(10000)
    if(cons.isSubscribed)
      await cons.unsubscribe();
  })
  describe('Consume Messages', function () {
    it('should not throw exception', async function () {
      this.timeout(30000);
      try {
        await cons.subscribe();
        let expectedMessages = ['hello', 'world', 'goodbye'];
        let messages = [];
        
        await utils.produceMsgs({messages: expectedMessages});
        await new Promise((resolve, reject) => {
            cons.run({
                onMessage: ({ ack, message, data }) => {
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
      it('Should not re-read the message', async function() {
        this.timeout(30000)
        await cons.subscribe();
        let firstMessage;
        await utils.produceMsgs({messages: ['hello']})
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message, data }) => {
                  firstMessage = message;
                  await cons.unsubscribe();
                  resolve();
              },
          })
        })
        await utils.produceMsgs({messages: ['goodbye']})
        let secondMessage;
        await cons.subscribe();
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message, data }) => {
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
      it('Should re-read message when auto ack is off', async function() {
        this.timeout(30000);
        await cons.subscribe();
        let firstMessage;
        await utils.produceMsgs({messages: ['hello']})
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message, data }) => {
                firstMessage = message;
                await cons.unsubscribe();
                resolve();
              },
              autoAck: false,
          })
        })
        await cons.subscribe();
        let secondMessage;
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message, data }) => {
                secondMessage = message;
                await cons.unsubscribe();
                resolve();
              },
              autoAck: false,
          })
        })
        assert.equal(firstMessage, secondMessage);
      })
      it('Should not re-read message after manual ack', async function() { 
        this.timeout(30000)
        await cons.subscribe();
        let firstMessage;
        await utils.produceMsgs({messages: ['hello', 'goodbye']});
        console.log('produced')
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message, data }) => {
                firstMessage = message;
                await ack();
                await cons.unsubscribe();
                resolve();
              },
              autoAck: false,
          })
        })
        await cons.subscribe();
        let secondMessage;
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message, data }) => {
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
    });
  });
});
