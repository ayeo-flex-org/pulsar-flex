const abstract = require('./abstract');

class NoIdResponseMediator extends abstract.ResponseMediator {
  constructor({ client, commands }) {
    super({ client });
    this._commands = commands;
    this._startToMediate();
  }

  _idFunc({ command }) {
    return 1;
  }
}

module.exports = NoIdResponseMediator;
