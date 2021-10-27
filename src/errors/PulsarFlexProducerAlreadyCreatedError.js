class PulsarFlexProducerAlreadyCreatedError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexProducerAlreadyCreatedError';
  }
}

module.exports = PulsarFlexProducerAlreadyCreatedError;
