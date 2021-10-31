const utils = require('../../utils');

const reconnect = (create) =>
  create().catch(async (e) => {
    console.log(e);
    if (
      e.name === 'PulsarFlexProducerAlreadyCreatedError' ||
      e.error.contains('Producer with name')
    )
      return;
    await utils.sleep(5000);
    await reconnect(create);
  });

module.exports = reconnect;
