const { Pulsar, Consumer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const utils = require('../utils');

const { jwt, discoveryServers, topic , containerName} = config;

describe('Consumer tests', function () {
  afterEach(() => {
    console.log('Clearing Backlog...');
    utils.clearBacklog();
  })
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
  describe('Consume Messages', function () {
    it('should not throw exception', async function () {
      this.timeout(30000);
      try {
        await cons.subscribe();
        let expectedMessages = ['hello', 'world', 'goodbye'];
        let messages = [];
        
        utils.produceMsgs(expectedMessages);
        
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
        await cons.unsubscribe();
        assert.deepEqual(messages, expectedMessages);
        
    } catch (e) {
        await cons.unsubscribe();
        console.log(e);
        assert.ok(false);
      }
    });
    describe('Manual Ack', function() {
      it('Should not re-read the message', async function() {
        await cons.subscribe();

      });
    });
  });
});
