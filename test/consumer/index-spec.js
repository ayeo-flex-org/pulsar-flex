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
  beforeEach(() => {
    console.log('Clearing Backlog...');
    utils.clearBacklog();
    cons.unsubscribe();
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
                    console.log(message);
                    if(messages.length >= expectedMessages.length) {
                        console.log(messages);
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
        const firstMessage = 'hello';
        utils.produceMsgs([firstMessage])
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: ({ ack, message, data }) => {
                  console.log(message);
                  resolve();
              },
          })
        })
        await cons.unsubscribe();
        const secondMessage = 'goodbye'
        utils.produceMsgs([secondMessage])
        await cons.subscribe();
        await new Promise((resolve, reject) => {
          cons.run({
              onMessage: ({ ack, message, data }) => {
                  console.log(message);
                  resolve();
              },
          })
        })
      });
    });
  });
});
