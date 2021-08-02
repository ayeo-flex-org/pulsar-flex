class PulsarFlexResponseTimeoutError extends Error {
  constructor({ id }) {
    super();
    this.message = `Timeout waiting for response for request id: ${id} from the Broker`;
    this.name = 'PulsarFlexResponseTimeoutError';
  }
}

module.exports = PulsarFlexResponseTimeoutError;
