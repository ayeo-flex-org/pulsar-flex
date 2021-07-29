class PulsarFlexConnectionError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexConnectionError';
  }
}

module.exports = PulsarFlexConnectionError;
