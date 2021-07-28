const abstract = require('./abstract');

class RequestIdResponseMediator extends abstract.ResponseMediator {
  constructor({ client, commands }) {
    super({ client });
    this._commands = commands;
    this._startToMediate();
  }

  _idFunc({ command }) {
    return command.requestId;
  }
}

module.exports = RequestIdResponseMediator;
