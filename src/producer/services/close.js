const commands = require('../../commands');

const close =
  ({ producerId, getClient, getRequestId, setState }) =>
  () => {
    const { sendSimpleCommandRequest, responseEmitter } = getClient();
    const requestId = getRequestId();
    const closeProducer = commands.closeProducer({ producerId, requestId });
    sendSimpleCommandRequest({ command: closeProducer });
    setState({ requestId: requestId + 1 });
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
