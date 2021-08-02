const abstract = require('./abstract');

class SendResponseMediator extends abstract.ResponseMediator {
  constructor({ client, commands, producerConfiguration }) {
    super({ client, ...producerConfiguration });
    this._commands = commands;
    this._startToMediate();
  }

  _idFunc({ command }) {
    return `${command.producerId}::${command.sequenceId}`;
  }
}

module.exports = SendResponseMediator;
