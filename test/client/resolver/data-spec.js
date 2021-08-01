const assert = require('assert');
const resolver = require('../../../src/client/resolver');
const emitter = require('../../../src/client/emitter');
const config = require('../../config');

const { commandConnectedBuffer, commandMessageBuffer, commandBatchMessageBuffer } = config;

describe('Client resolver tests', function() {
  describe('on correct simple command', function () {
    it('should resolve', async function () {
      try {
        resolver.data(commandConnectedBuffer);
        assert.ok(true);
      } catch (e) {
        assert.ok(false);
      }
    });
    it('should emit event successfully', async function () {
      const promise = new Promise((resolve) => emitter.data.on('connected', resolve));
      resolver.data(commandConnectedBuffer);
      await promise;
    });
  });
  describe('on over totalSize correct spliced simple command', function() {
    it('should resolve and emit the event when resolved', async function() {
      const promise = new Promise((resolve) => emitter.data.on('connected', resolve));

      resolver.data(commandConnectedBuffer.slice(0, 5));
      resolver.data(commandConnectedBuffer.slice(5));

      await promise;
    });
  });
  describe('on before totalSize correct spliced simple command', function() {
    it('should resolve and emit the event when resolved', async function() {
      const promise = new Promise((resolve) => emitter.data.on('connected', resolve));

      resolver.data(commandConnectedBuffer.slice(0, 3));
      resolver.data(commandConnectedBuffer.slice(3));

      await promise;
    });
  });
  describe('on correct payload command', function () {
    it('should resolve', async function () {
      try {
        resolver.data(commandMessageBuffer);
        assert.ok(true);
      } catch (e) {
        assert.ok(false);
      }
    });
    it('should emit event successfully', async function () {
      const promise = new Promise((resolve) => emitter.data.on('message', resolve));
      resolver.data(commandMessageBuffer);
      await promise;
    });
  });
  describe('on over totalSize correct spliced payload command', function() {
    it('should resolve and emit the event when resolved', async function() {
      const promise = new Promise((resolve) => emitter.data.on('message', resolve));

      resolver.data(commandMessageBuffer.slice(0, 5));
      resolver.data(commandMessageBuffer.slice(5));

      await promise;
    });
  });
  describe('on before totalSize correct spliced payload command', function() {
    it('should resolve and emit the event when resolved', async function() {
      const promise = new Promise((resolve) => emitter.data.on('message', resolve));

      resolver.data(commandMessageBuffer.slice(0, 3));
      resolver.data(commandMessageBuffer.slice(3));

      await promise;
    });
  });

  describe('on correct batch payload command', function () {
    it('should resolve', async function () {
      try {
        resolver.data(commandBatchMessageBuffer);
        assert.ok(true);
      } catch (e) {
        assert.ok(false);
      }
    });
    it('should emit event successfully', async function () {
      const promise = new Promise((resolve) => emitter.data.on('message', resolve));
      resolver.data(commandBatchMessageBuffer);
      await promise;
    });
  });
  describe('on over totalSize correct spliced batch payload command', function() {
    it('should resolve and emit the event when resolved', async function() {
      const promise = new Promise((resolve) => emitter.data.on('message', resolve));

      resolver.data(commandBatchMessageBuffer.slice(0, 5));
      resolver.data(commandBatchMessageBuffer.slice(5));

      await promise;
    });
  });
  describe('on before totalSize correct spliced batch payload command', function() {
    it('should resolve and emit the event when resolved', async function() {
      const promise = new Promise((resolve) => emitter.data.on('message', resolve));

      resolver.data(commandBatchMessageBuffer.slice(0, 3));
      resolver.data(commandBatchMessageBuffer.slice(3));

      await promise;
    });
  });
});
