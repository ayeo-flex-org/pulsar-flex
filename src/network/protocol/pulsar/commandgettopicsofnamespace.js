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

goog.provide('proto.pulsar.proto.CommandGetTopicsOfNamespace');
goog.provide('proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.pulsar.proto.CommandGetTopicsOfNamespace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetTopicsOfNamespace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetTopicsOfNamespace.displayName = 'proto.pulsar.proto.CommandGetTopicsOfNamespace';
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
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetTopicsOfNamespace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetTopicsOfNamespace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    namespace: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    mode: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetTopicsOfNamespace;
  return proto.pulsar.proto.CommandGetTopicsOfNamespace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetTopicsOfNamespace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = /** @type {!proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode} */ (reader.readEnum());
      msg.setMode(value);
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
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetTopicsOfNamespace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetTopicsOfNamespace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode = {
  PERSISTENT: 0,
  NON_PERSISTENT: 1,
  ALL: 2
};

/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string namespace = 2;
 * @return {string}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.setNamespace = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.clearNamespace = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Mode mode = 3;
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.getMode = function() {
  return /** @type {!proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode} value
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.setMode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespace} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.clearMode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespace.prototype.hasMode = function() {
  return jspb.Message.getField(this, 3) != null;
};


