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

  _idFunc() {}

  response({ data }) {
    const id = this._idFunc(data);

    return new Promise((resolve, reject) => {
      this._requests[id] = { resolve, reject };
    });
  }
}

module.exports = ResponseMediator;
