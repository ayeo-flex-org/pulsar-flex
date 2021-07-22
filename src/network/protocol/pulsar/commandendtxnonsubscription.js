// source: PulsarApi.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.pulsar.proto.CommandEndTxnOnSubscription');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.pulsar.proto.Subscription');

goog.forwardDeclare('proto.pulsar.proto.TxnAction');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulsar.proto.CommandEndTxnOnSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandEndTxnOnSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandEndTxnOnSubscription.displayName = 'proto.pulsar.proto.CommandEndTxnOnSubscription';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandEndTxnOnSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandEndTxnOnSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    subscription: (f = msg.getSubscription()) && proto.pulsar.proto.Subscription.toObject(includeInstance, f),
    txnAction: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    txnidLeastBitsOfLowWatermark: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandEndTxnOnSubscription;
  return proto.pulsar.proto.CommandEndTxnOnSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandEndTxnOnSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidLeastBits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidMostBits(value);
      break;
    case 4:
      var value = new proto.pulsar.proto.Subscription;
      reader.readMessage(value,proto.pulsar.proto.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    case 5:
      var value = /** @type {!proto.pulsar.proto.TxnAction} */ (reader.readEnum());
      msg.setTxnAction(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidLeastBitsOfLowWatermark(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandEndTxnOnSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandEndTxnOnSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pulsar.proto.Subscription.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.pulsar.proto.TxnAction} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Subscription subscription = 4;
 * @return {?proto.pulsar.proto.Subscription}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.getSubscription = function() {
  return /** @type{?proto.pulsar.proto.Subscription} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.Subscription, 4));
};


/**
 * @param {?proto.pulsar.proto.Subscription|undefined} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
*/
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.setSubscription = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TxnAction txn_action = 5;
 * @return {!proto.pulsar.proto.TxnAction}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.getTxnAction = function() {
  return /** @type {!proto.pulsar.proto.TxnAction} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pulsar.proto.TxnAction} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.setTxnAction = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.clearTxnAction = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.hasTxnAction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 txnid_least_bits_of_low_watermark = 6;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.getTxnidLeastBitsOfLowWatermark = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.setTxnidLeastBitsOfLowWatermark = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscription} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.clearTxnidLeastBitsOfLowWatermark = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscription.prototype.hasTxnidLeastBitsOfLowWatermark = function() {
  return jspb.Message.getField(this, 6) != null;
};

