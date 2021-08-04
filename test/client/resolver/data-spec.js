const assert = require('assert');
const resolvers = require('../../../src/client/resolver');
const emitters = require('../../../src/client/emitter');
const config = require('../../config');

const { commandConnectedBuffer, commandMessageBuffer, commandBatchMessageBuffer } = config;

describe('Client resolver tests', function () {
  describe('on correct simple command', function () {
    it('should resolve', async function () {
      try {
        const emitter = new emitters.data();
        resolvers.data(emitter)(commandConnectedBuffer);
        assert.ok(true);
      } catch (e) {
        assert.ok(false);
      }
    });
    it('should emit event successfully', async function () {
      const emitter = new emitters.data();
      const promise = new Promise((resolve) => emitter.on('connected', resolve));
      resolvers.data(emitter)(commandConnectedBuffer);
      await promise;
    });
  });
  describe('on over totalSize correct spliced simple command', function () {
    it('should resolve and emit the event when resolved', async function () {
      const emitter = new emitters.data();
      const resolver = resolvers.data(emitter);
      const promise = new Promise((resolve) => emitter.on('connected', resolve));

      resolver(commandConnectedBuffer.slice(0, 5));
      resolver(commandConnectedBuffer.slice(5));

      await promise;
    });
  });
  describe('on before totalSize correct spliced simple command', function () {
    it('should resolve and emit the event when resolved', async function () {
      const emitter = new emitters.data();
      const promise = new Promise((resolve) => emitter.on('connected', resolve));

      const resolver = resolvers.data(emitter);
      resolver(commandConnectedBuffer.slice(0, 3));
      resolver(commandConnectedBuffer.slice(3));

      await promise;
    });
  });
  describe('on correct payload command', function () {
    it('should resolve', async function () {
      try {
        const emitter = new emitters.data();

        resolvers.data(emitter)(commandMessageBuffer);
        assert.ok(true);
      } catch (e) {
        assert.ok(false);
      }
    });
    it('should emit event successfully', async function () {
      const emitter = new emitters.data();

      const promise = new Promise((resolve) => emitter.on('message', resolve));
      resolvers.data(emitter)(commandMessageBuffer);
      await promise;
    });
  });
  describe('on over totalSize correct spliced payload command', function () {
    it('should resolve and emit the event when resolved', async function () {
      const emitter = new emitters.data();
      const resolver = resolvers.data(emitter);
      const promise = new Promise((resolve) => emitter.on('message', resolve));

      resolver(commandMessageBuffer.slice(0, 5));
      resolver(commandMessageBuffer.slice(5));

      await promise;
    });
  });
  describe('on before totalSize correct spliced payload command', function () {
    it('should resolve and emit the event when resolved', async function () {
      const emitter = new emitters.data();
      const promise = new Promise((resolve) => emitter.on('message', resolve));
      const resolver = resolvers.data(emitter);

      resolver(commandMessageBuffer.slice(0, 3));
      resolver(commandMessageBuffer.slice(3));

      await promise;
    });
  });

  describe('on correct batch payload command', function () {
    it('should resolve', async function () {
      try {
        const emitter = new emitters.data();
        resolvers.data(emitter)(commandBatchMessageBuffer);
        assert.ok(true);
      } catch (e) {
        assert.ok(false);
      }
    });
    it('should emit event successfully', async function () {
      const emitter = new emitters.data();
      const promise = new Promise((resolve) => emitter.on('message', resolve));
      resolvers.data(emitter)(commandBatchMessageBuffer);
      await promise;
    });
  });
  describe('on over totalSize correct spliced batch payload command', function () {
    it('should resolve and emit the event when resolved', async function () {
      const emitter = new emitters.data();
      const promise = new Promise((resolve) => emitter.on('message', resolve));
      const resolver = resolvers.data(emitter);
      resolver(commandBatchMessageBuffer.slice(0, 5));
      resolver(commandBatchMessageBuffer.slice(5));

      await promise;
    });
  });
  describe('on before totalSize correct spliced batch payload command', function () {
    it('should resolve and emit the event when resolved', async function () {
      const emitter = new emitters.data();
      const resolver = resolvers.data(emitter);
      const promise = new Promise((resolve) => emitter.on('message', resolve));

      resolver(commandBatchMessageBuffer.slice(0, 3));
      resolver(commandBatchMessageBuffer.slice(3));

      await promise;
    });
  });
});
