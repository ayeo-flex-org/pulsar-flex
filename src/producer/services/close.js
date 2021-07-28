const commands = require('../../commands');

const close =
  ({ producerId, client, requestId }) =>
  () => {
    const { sendSimpleCommandRequest, responseEmitter } = client;
    const closeProducer = commands.closeProducer({ producerId, requestId });
    sendSimpleCommandRequest({ command: closeProducer });
    return new Promise((resolve, reject) => {
      responseEmitter.on('success', (data) => {
        console.log('closed');
        data.command.requestId === requestId && resolve(data);
      });
      responseEmitter.on('error', () => {
        resolve('failed to close producer');
      });
    });
  };

module.exports = close;
