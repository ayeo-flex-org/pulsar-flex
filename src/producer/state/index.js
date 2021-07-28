const state = () => {
  let currentState = {
    producerId: 0,
    requestId: 0,
    producerName: '',
    sequenceId: 0,
    client: {},
    promisePool: {},
    responseResolver: null,
  };

  const getProducerId = () => currentState.producerId;
  const getRequestId = () => currentState.requestId;
  const getSequenceId = () => currentState.sequenceId;
  const getProducerName = () => currentState.producerName;
  const getClient = () => currentState.client;
  const getPromisePool = () => currentState.promisePool;
  const getResponseResolver = () => currentState.responseResolver;

  const setState = (newState) => {
    currentState = { ...currentState, ...newState };
    return newState;
  };

  const setPromisePool = (newPromisePool) => {
    currentState = {
      ...currentState,
      promisePool: { ...currentState.promisePool, ...newPromisePool },
    };
    return newPromisePool;
  };

  return {
    getProducerId,
    getRequestId,
    getSequenceId,
    getProducerName,
    getClient,
    getPromisePool,
    getResponseResolver,
    setState,
    setPromisePool,
  };
};

module.exports = state;
