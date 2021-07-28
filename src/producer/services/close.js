const commands = require('../../commands');

const close =
  ({ producerId, client, requestId, responseMediator }) =>
  () => {
    const { sendSimpleCommandRequest } = client;
    const closeProducer = commands.closeProducer({ producerId, requestId });
    return sendSimpleCommandRequest({ command: closeProducer, responseMediator });
  };

module.exports = close;
