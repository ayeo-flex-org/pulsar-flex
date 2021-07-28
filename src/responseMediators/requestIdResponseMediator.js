const abstract = require('./abstract');

class RequestIdResponseMediator extends abstract.ResponseMediator {
  constructor(client) {
    super(client);
    this._commands = ['producerSuccess', 'success', 'error'];
    this._startToMediate();
  }

  _idFunc({ command }) {
    return command.requestId;
  }
}

module.exports = RequestIdResponseMediator;
