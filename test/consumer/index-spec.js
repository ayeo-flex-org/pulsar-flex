const { Consumer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const utils = require('../utils');
const sleep = require('../../src/utils/sleep');
const { LEVELS } = require('../../src/logger');

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
    logLevel: LEVELS.WARN,
  })
  beforeEach(async function() {
    await utils.clearBacklog();
  })
  afterEach(async function() {
    if(cons.isSubscribed) {
        await cons.unsubscribe();
    }
    console.log('#####################################')
  })
  it('should consume the messages successfully', async function () {
    try {
      await cons.subscribe();
      let expectedMessages = ['hello', 'world', 'goodbye'];
      let messages = [];
      
      await utils.produceMessages({messages: expectedMessages});
      await new Promise((resolve, reject) => {
          cons.run({
              onMessage: ({ ack, message }) => {
                  console.log(message);
                  messages.push(message);
                  if(messages.length >= expectedMessages.length) {
                      resolve()
                  }
              },
          })
      })
      assert.deepEqual(messages, expectedMessages);
      
    } catch (e) {
      console.log(e);
      assert.ok(false);
    }
  });
  describe('Consumer Connection tests', function() {
    it('should re-connect after topic unload', async function() {
      await cons.subscribe();
      let msgCounter = 0;
      await utils.produceMessages({messages: ['hello', 'goodbye']});
      await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message }) => {
                msgCounter++;
                if(msgCounter == 1)
                  await utils.unloadTopic();
                if(msgCounter > 1)
                  resolve();
              },
              autoAck: true,
          })
      })

    }) 
    it('should re-send acks after connection loss', async function () {
      await cons.subscribe();
      let msgCounter = 0;
      await utils.produceMessages({messages: ['hello', 'world', 'goodbye']});
      await new Promise((resolve, reject) => {
          cons.run({
              onMessage: async ({ ack, message }) => {
                msgCounter++;
                console.log(message, 'AAAAAAAAAAAAAAAa')
                cons._client.getCnx().close();
                await ack();
                if(msgCounter >= 3)
                  resolve();
              },
              autoAck: false,
          })
      });
      await cons.unsubscribe();
      await cons.subscribe();
      let expectedMessages = ['one', 'two', 'three']
      let messages = [];
      msgCounter = 0;
      await utils.produceMessages({messages: expectedMessages});
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message }) => {
              console.log(message, cons.getState())
              msgCounter++;
              messages.push(message);
              if(msgCounter >= 3)
                resolve();
            },
            autoAck: true,
        })
      });
      assert.deepEqual(messages, expectedMessages);
    });   
  })
  describe('Manual Ack', function() {
    it('Should re-consume message when auto ack is off', async function() {
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMessages({messages: ['hello']})
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
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMessages({messages: ['bloo', 'blah']});
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
      const firstHalf = ['1', '2', '3'];
      const secondHalf = ['one', 'two', 'three'];
      let consumedFirstHalf = [];
      let msgCounter = 0;
      await cons.subscribe();
      await utils.produceMessages( {messages: [...firstHalf, ...secondHalf] })
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
  describe('Automatic Ack', function() {
    it('Should not re-consume the message', async function() {
      const expectedFirstMessage = 'hello';
      const expectedSecondMessage = 'goodbye';
      let firstMessage;
      let secondMessage;
      await cons.subscribe();
      await utils.produceMessages({messages: [expectedFirstMessage]})
      await new Promise((resolve, reject) => {
        cons.run({
            onMessage: async ({ ack, message }) => {
                firstMessage = message;
                await cons.unsubscribe();
                resolve();
            },
        })
      })
      await utils.produceMessages({messages: [expectedSecondMessage]})
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
      assert.equal(firstMessage, expectedFirstMessage);
      assert.equal(secondMessage, expectedSecondMessage)
    });
  });
  
});
