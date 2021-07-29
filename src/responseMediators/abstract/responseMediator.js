class ResponseMediator {
  constructor({ client }) {
    this._requests = {};
    this._commands = [];
    this._responseEvents = client.getResponseEvents();
  }

  _startToMediate() {
    this._commands.forEach((command) => {
      this._responseEvents.on(command, (eventData) => {
        const id = this._idFunc(eventData);
        this._requests[id] && this._requests[id].resolve(eventData);
      });
    });
  }

  _parseCommand({ command }) {
    const baseCommand = command.toObject();
    const baseCommandTypeId = command.getType();
    return { command: Object.values(baseCommand)[baseCommandTypeId - 1] };
  }

  _idFunc() {}

  response({ data, timeout = 5000 }) {
    const id = this._idFunc(this._parseCommand(data));
    return new Promise((resolve, reject) => {
      this._requests[id] = { resolve };
      setTimeout(reject, timeout);
    });
  }
}

module.exports = ResponseMediator;
