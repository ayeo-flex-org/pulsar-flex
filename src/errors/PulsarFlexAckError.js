class PulsarFlexAckError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexAckError';
  }
}

module.exports = PulsarFlexAckError;
