const reconnect = require('./reconnect');
const errors = require('../../errors');

const producerClose = ({ client, create, setConnected, sendResponseMediator }) => {
  const responseEvents = client.getResponseEvents();
  responseEvents.on('closeProducer', async () => {
    setConnected(false);
    sendResponseMediator.purgeRequests({ error: errors.PulsarFlexProducerCloseError });
    client.getCnx().close();
    await reconnect(create, setConnected);
    setConnected(true);
  });
};

module.exports = producerClose;
