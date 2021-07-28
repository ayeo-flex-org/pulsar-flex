const commands = require('../../commands');

const close =
  ({ producerId, cnx, requestId, responseMediator }) =>
  () => {
    const { sendSimpleCommandRequest } = cnx;
    const closeProducer = commands.closeProducer({ producerId, requestId });
    return sendSimpleCommandRequest({ command: closeProducer, responseMediator });
  };

module.exports = close;
