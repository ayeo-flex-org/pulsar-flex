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

goog.provide('proto.pulsar.proto.CommandSeek');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.pulsar.proto.MessageIdData');

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
proto.pulsar.proto.CommandSeek = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandSeek, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandSeek.displayName = 'proto.pulsar.proto.CommandSeek';
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
proto.pulsar.proto.CommandSeek.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandSeek.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandSeek} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSeek.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    messageId: (f = msg.getMessageId()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f),
    messagePublishTime: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandSeek}
 */
proto.pulsar.proto.CommandSeek.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandSeek;
  return proto.pulsar.proto.CommandSeek.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandSeek} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandSeek}
 */
proto.pulsar.proto.CommandSeek.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConsumerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setMessageId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMessagePublishTime(value);
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
proto.pulsar.proto.CommandSeek.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandSeek.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandSeek} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSeek.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMessageId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandSeek.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSeek} returns this
 */
proto.pulsar.proto.CommandSeek.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSeek} returns this
 */
proto.pulsar.proto.CommandSeek.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSeek.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandSeek.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSeek} returns this
 */
proto.pulsar.proto.CommandSeek.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSeek} returns this
 */
proto.pulsar.proto.CommandSeek.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSeek.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageIdData message_id = 3;
 * @return {?proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandSeek.prototype.getMessageId = function() {
  return /** @type{?proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 3));
};


/**
 * @param {?proto.pulsar.proto.MessageIdData|undefined} value
 * @return {!proto.pulsar.proto.CommandSeek} returns this
*/
proto.pulsar.proto.CommandSeek.prototype.setMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandSeek} returns this
 */
proto.pulsar.proto.CommandSeek.prototype.clearMessageId = function() {
  return this.setMessageId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSeek.prototype.hasMessageId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 message_publish_time = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandSeek.prototype.getMessagePublishTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSeek} returns this
 */
proto.pulsar.proto.CommandSeek.prototype.setMessagePublishTime = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSeek} returns this
 */
proto.pulsar.proto.CommandSeek.prototype.clearMessagePublishTime = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSeek.prototype.hasMessagePublishTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


