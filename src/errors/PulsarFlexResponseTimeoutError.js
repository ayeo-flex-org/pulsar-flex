class PulsarFlexResponseTimeoutError extends Error {
  constructor() {
    super();
    this.message = 'Timeout waiting for response from the Broker';
    this.name = 'PulsarFlexResponseTimeoutError';
  }
}

module.exports = PulsarFlexResponseTimeoutError;
