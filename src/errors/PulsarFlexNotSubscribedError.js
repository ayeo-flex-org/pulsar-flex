class PulsarFlexNotSubscribedError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexNotSubscribedError';
  }
}

module.exports = PulsarFlexNotSubscribedError;
