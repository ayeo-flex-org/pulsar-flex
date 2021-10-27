const utils = require('../../utils');

const reconnect = (create) =>
  console.log('actually reconnecting') ||
  create().catch(async (e) => {
    console.log(e);
    if (
      e.name === 'PulsarFlexProducerAlreadyCreatedError' ||
      e.error.contains('Producer with name')
    )
      return;
    console.log('Retrying in 5 seconds.......');
    await utils.sleep(5000);
    await reconnect(create);
  });

module.exports = reconnect;
