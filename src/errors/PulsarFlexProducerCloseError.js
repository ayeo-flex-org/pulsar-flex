class PulsarFlexProducerCloseError extends Error {
  constructor({ message = 'The producer was closed' }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexProducerCloseError';
  }
}

module.exports = PulsarFlexProducerCloseError;
