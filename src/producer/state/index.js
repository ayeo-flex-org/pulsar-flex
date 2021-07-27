const state = () => {
  let currentState = {
    producerId: 0,
    requestId: 0,
    producerName: '',
    sequenceId: 0,
    client: {},
  };

  const getProducerId = () => currentState.producerId;
  const getRequestId = () => currentState.requestId;
  const getSequenceId = () => currentState.sequenceId;
  const getProducerName = () => currentState.producerName;
  const getClient = () => currentState.client;

  const setState = (newState) => {
    console.log(newState);
    currentState = { ...currentState, ...newState };
    return newState;
  };

  return {
    getProducerId,
    getRequestId,
    getSequenceId,
    getProducerName,
    getClient,
    setState,
  };
};

module.exports = state;
