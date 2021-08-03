const utils = require('../../utils');

const reconnect = async (subscribe, cleanState, intervalMs = 5000) => {
  cleanState && cleanState();
  await subscribe().catch(async () => {
    await utils.sleep(intervalMs);
    await reconnect(subscribe);
  });
};

module.exports = reconnect;
