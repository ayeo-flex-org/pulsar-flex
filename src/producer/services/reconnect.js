const utils = require('../../utils');

const reconnect = (create, setConnected) =>
  create().catch(async () => {
    await utils.sleep(5000);
    await reconnect(create, setConnected);
  });

module.exports = reconnect;
