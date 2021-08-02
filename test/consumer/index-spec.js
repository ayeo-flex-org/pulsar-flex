const { Pulsar, Consumer } = require('../../src');
const config = require('../config');
const assert = require('assert');
const asyncExec = require('../utils/asyncExec');

const { jwt, discoveryServers, topic , containerName} = config;

describe('Consumer test', function () {
  describe('Consume Messages', function () {
    it('should not throw exception', async function () {
      this.timeout(30000);
      const cons = new Consumer({
        discoveryServers,
        jwt,
        topic: 'persistent://public/default/test',
        subscription: 'subscription',
        subType: Consumer.SUB_TYPES.EXCLUSIVE,
        consumerName: 'Consy',
        readCompacted: false,
        receiveQueueSize: 1,
    })
      try {
        await cons.subscribe();
        let expectedMessages = ['hello', 'world', 'goodbye'];
        let messages = [];

        await asyncExec(`docker exec ${containerName} /pulsar/bin/pulsar-client produce -m ${expectedMessages.join(',')} ${topic}`)

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
  });
});
