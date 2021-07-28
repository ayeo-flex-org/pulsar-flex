const abstract = require('./abstract');

class SendResponseMediator extends abstract.ResponseMediator {
  constructor(client) {
    super(client);
    this._commands = ['sendReceipt', 'sendError'];
    this._startToMediate();
  }

  _idFunc({ command }) {
    return `${command.producerId}::${command.sequenceId}`;
  }
}

module.exports = SendResponseMediator;
