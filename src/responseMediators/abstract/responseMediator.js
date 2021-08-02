const errors = require('../../errors');

class ResponseMediator {
  constructor({ client, timeout = 5000 }) {
    this._requests = {};
    this._commands = [];
    this._responseEvents = client.getResponseEvents();
    this._timeout = timeout;
  }

  _startToMediate() {
    this._commands.forEach((command) => {
      this._responseEvents.on(command, (eventData) => {
        const id = this._idFunc(eventData);
        this._requests[id] && this._requests[id].resolve(eventData);
        this._requests[id] && delete this._requests[id];
      });
    });
  }

  _parseCommand({ command }) {
    const baseCommand = command.toObject();
    const baseCommandTypeId = command.getType();
    return { command: Object.values(baseCommand)[baseCommandTypeId - 1] };
  }

  _idFunc() {}

  purgeRequests({ error }) {
    Object.values(this._requests).forEach(({ reject }) => reject(new error({})));
  }

  response({ data, autoResolve }) {
    const id = this._idFunc(this._parseCommand(data));
    return new Promise((resolve, reject) => {
      autoResolve && resolve();
      setTimeout(() => reject(new errors.PulsarFlexResponseTimeoutError({ id })), this._timeout);
      this._requests[id] = { resolve, reject };
    });
  }
}

module.exports = ResponseMediator;
