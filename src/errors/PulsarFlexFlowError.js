class PulsarFlexFlowError extends Error {
  constructor({ message }) {
    super();
    this.message = message;
    this.name = 'PulsarFlexFlowError';
  }
}

module.exports = PulsarFlexFlowError;
