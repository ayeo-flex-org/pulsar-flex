class PulsarFlexProducerCloseError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexProducerCloseError';
  }
}

module.exports = PulsarFlexProducerCloseError;
