const utils = require('../../utils');

const reconnect = (create) =>
  create().catch(async () => {
    await utils.sleep(5000);
    await reconnect(create);
  });

module.exports = reconnect;
