const utils = require('../../utils');
const CONSUMER_STATES = require('../consumerStates');

const reconnect = async ({ subscribe, cleanState, consumerState, intervalMs = 5000 }) => {
  if (consumerState.get() !== CONSUMER_STATES.UNSUBSCRIBED) {
    consumerState.set(CONSUMER_STATES.ERROR);
    cleanState();
    await subscribe().catch(async () => {
      console.log('Reconnecting...');
      await utils.sleep(intervalMs);
      await reconnect({ subscribe, cleanState, intervalMs });
    });
  }
};

module.exports = reconnect;
