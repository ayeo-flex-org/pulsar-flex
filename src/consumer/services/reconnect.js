const utils = require('../../utils');

const reconnect = async ({ subscribe, cleanState, consumerState, intervalMs = 5000 }) => {
  if (consumerState.get() !== consumerState.states.UNSUBSCRIBED) {
    consumerState.set(consumerState.states.ERROR);
    cleanState();
    await subscribe().catch(async () => {
      await utils.sleep(intervalMs);
      await reconnect({ subscribe, cleanState, intervalMs });
    });
  }
};

module.exports = reconnect;
