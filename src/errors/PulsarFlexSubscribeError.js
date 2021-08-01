class PulsarFlexSubscribeError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'PulsarFlexSubscribeError';
  }
}

module.exports = PulsarFlexSubscribeError;
