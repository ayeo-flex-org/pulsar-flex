class PulsarFlexUnsubscribeError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexUnsubscribeError';
  }
}

module.exports = PulsarFlexUnsubscribeError;
