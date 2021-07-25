// source: pulsar.proto
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

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.pulsar.proto.AuthData', null, global);
goog.exportSymbol('proto.pulsar.proto.AuthMethod', null, global);
goog.exportSymbol('proto.pulsar.proto.BaseCommand', null, global);
goog.exportSymbol('proto.pulsar.proto.BaseCommand.Type', null, global);
goog.exportSymbol('proto.pulsar.proto.BrokerEntryMetadata', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAck', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAck.AckType', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAck.ValidationError', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAckResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandActiveConsumerChange', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAddPartitionToTxn', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAddPartitionToTxnResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAddSubscriptionToTxn', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAddSubscriptionToTxnResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAuthChallenge', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandAuthResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandCloseConsumer', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandCloseProducer', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandConnect', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandConnected', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandConsumerStats', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandConsumerStatsResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandEndTxn', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandEndTxnOnPartition', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandEndTxnOnPartitionResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandEndTxnOnSubscription', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandEndTxnResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandError', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandFlow', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetLastMessageId', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetLastMessageIdResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetOrCreateSchema', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetOrCreateSchemaResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetSchema', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetSchemaResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetTopicsOfNamespace', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetTopicsOfNamespace.Mode', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandLookupTopic', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandLookupTopicResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandLookupTopicResponse.LookupType', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandMessage', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandNewTxn', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandNewTxnResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandPartitionedTopicMetadata', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandPartitionedTopicMetadataResponse', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandPing', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandPong', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandProducer', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandProducerSuccess', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandReachedEndOfTopic', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSeek', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSend', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSendError', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSendReceipt', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSubscribe', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSubscribe.InitialPosition', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSubscribe.SubType', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandSuccess', null, global);
goog.exportSymbol('proto.pulsar.proto.CommandUnsubscribe', null, global);
goog.exportSymbol('proto.pulsar.proto.CompressionType', null, global);
goog.exportSymbol('proto.pulsar.proto.EncryptionKeys', null, global);
goog.exportSymbol('proto.pulsar.proto.FeatureFlags', null, global);
goog.exportSymbol('proto.pulsar.proto.IntRange', null, global);
goog.exportSymbol('proto.pulsar.proto.KeyLongValue', null, global);
goog.exportSymbol('proto.pulsar.proto.KeySharedMeta', null, global);
goog.exportSymbol('proto.pulsar.proto.KeySharedMode', null, global);
goog.exportSymbol('proto.pulsar.proto.KeyValue', null, global);
goog.exportSymbol('proto.pulsar.proto.MessageIdData', null, global);
goog.exportSymbol('proto.pulsar.proto.MessageMetadata', null, global);
goog.exportSymbol('proto.pulsar.proto.ProducerAccessMode', null, global);
goog.exportSymbol('proto.pulsar.proto.ProtocolVersion', null, global);
goog.exportSymbol('proto.pulsar.proto.Schema', null, global);
goog.exportSymbol('proto.pulsar.proto.Schema.Type', null, global);
goog.exportSymbol('proto.pulsar.proto.ServerError', null, global);
goog.exportSymbol('proto.pulsar.proto.SingleMessageMetadata', null, global);
goog.exportSymbol('proto.pulsar.proto.Subscription', null, global);
goog.exportSymbol('proto.pulsar.proto.TxnAction', null, global);
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
proto.pulsar.proto.Schema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.Schema.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.Schema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.Schema.displayName = 'proto.pulsar.proto.Schema';
}
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
proto.pulsar.proto.MessageIdData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.MessageIdData.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.MessageIdData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.MessageIdData.displayName = 'proto.pulsar.proto.MessageIdData';
}
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
proto.pulsar.proto.KeyValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.KeyValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.KeyValue.displayName = 'proto.pulsar.proto.KeyValue';
}
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
proto.pulsar.proto.KeyLongValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.KeyLongValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.KeyLongValue.displayName = 'proto.pulsar.proto.KeyLongValue';
}
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
proto.pulsar.proto.IntRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.IntRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.IntRange.displayName = 'proto.pulsar.proto.IntRange';
}
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
proto.pulsar.proto.EncryptionKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.EncryptionKeys.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.EncryptionKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.EncryptionKeys.displayName = 'proto.pulsar.proto.EncryptionKeys';
}
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
proto.pulsar.proto.MessageMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.MessageMetadata.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.MessageMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.MessageMetadata.displayName = 'proto.pulsar.proto.MessageMetadata';
}
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
proto.pulsar.proto.SingleMessageMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.SingleMessageMetadata.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.SingleMessageMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.SingleMessageMetadata.displayName = 'proto.pulsar.proto.SingleMessageMetadata';
}
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
proto.pulsar.proto.BrokerEntryMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.BrokerEntryMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.BrokerEntryMetadata.displayName = 'proto.pulsar.proto.BrokerEntryMetadata';
}
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
proto.pulsar.proto.CommandConnect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandConnect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandConnect.displayName = 'proto.pulsar.proto.CommandConnect';
}
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
proto.pulsar.proto.FeatureFlags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.FeatureFlags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.FeatureFlags.displayName = 'proto.pulsar.proto.FeatureFlags';
}
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
proto.pulsar.proto.CommandConnected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandConnected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandConnected.displayName = 'proto.pulsar.proto.CommandConnected';
}
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
proto.pulsar.proto.CommandAuthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandAuthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAuthResponse.displayName = 'proto.pulsar.proto.CommandAuthResponse';
}
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
proto.pulsar.proto.CommandAuthChallenge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandAuthChallenge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAuthChallenge.displayName = 'proto.pulsar.proto.CommandAuthChallenge';
}
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
proto.pulsar.proto.AuthData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.AuthData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.AuthData.displayName = 'proto.pulsar.proto.AuthData';
}
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
proto.pulsar.proto.KeySharedMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.KeySharedMeta.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.KeySharedMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.KeySharedMeta.displayName = 'proto.pulsar.proto.KeySharedMeta';
}
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
proto.pulsar.proto.CommandSubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandSubscribe.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandSubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandSubscribe.displayName = 'proto.pulsar.proto.CommandSubscribe';
}
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
proto.pulsar.proto.CommandPartitionedTopicMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandPartitionedTopicMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandPartitionedTopicMetadata.displayName = 'proto.pulsar.proto.CommandPartitionedTopicMetadata';
}
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
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandPartitionedTopicMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.displayName = 'proto.pulsar.proto.CommandPartitionedTopicMetadataResponse';
}
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
proto.pulsar.proto.CommandLookupTopic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandLookupTopic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandLookupTopic.displayName = 'proto.pulsar.proto.CommandLookupTopic';
}
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
proto.pulsar.proto.CommandLookupTopicResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandLookupTopicResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandLookupTopicResponse.displayName = 'proto.pulsar.proto.CommandLookupTopicResponse';
}
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
proto.pulsar.proto.CommandProducer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandProducer.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandProducer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandProducer.displayName = 'proto.pulsar.proto.CommandProducer';
}
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
proto.pulsar.proto.CommandSend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandSend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandSend.displayName = 'proto.pulsar.proto.CommandSend';
}
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
proto.pulsar.proto.CommandSendReceipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandSendReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandSendReceipt.displayName = 'proto.pulsar.proto.CommandSendReceipt';
}
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
proto.pulsar.proto.CommandSendError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandSendError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandSendError.displayName = 'proto.pulsar.proto.CommandSendError';
}
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
proto.pulsar.proto.CommandMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandMessage.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandMessage.displayName = 'proto.pulsar.proto.CommandMessage';
}
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
proto.pulsar.proto.CommandAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandAck.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAck.displayName = 'proto.pulsar.proto.CommandAck';
}
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
proto.pulsar.proto.CommandAckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandAckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAckResponse.displayName = 'proto.pulsar.proto.CommandAckResponse';
}
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
proto.pulsar.proto.CommandActiveConsumerChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandActiveConsumerChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandActiveConsumerChange.displayName = 'proto.pulsar.proto.CommandActiveConsumerChange';
}
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
proto.pulsar.proto.CommandFlow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandFlow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandFlow.displayName = 'proto.pulsar.proto.CommandFlow';
}
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
proto.pulsar.proto.CommandUnsubscribe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandUnsubscribe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandUnsubscribe.displayName = 'proto.pulsar.proto.CommandUnsubscribe';
}
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
proto.pulsar.proto.CommandReachedEndOfTopic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandReachedEndOfTopic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandReachedEndOfTopic.displayName = 'proto.pulsar.proto.CommandReachedEndOfTopic';
}
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
proto.pulsar.proto.CommandCloseProducer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandCloseProducer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandCloseProducer.displayName = 'proto.pulsar.proto.CommandCloseProducer';
}
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
proto.pulsar.proto.CommandCloseConsumer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandCloseConsumer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandCloseConsumer.displayName = 'proto.pulsar.proto.CommandCloseConsumer';
}
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
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.displayName = 'proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages';
}
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
proto.pulsar.proto.CommandSuccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandSuccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandSuccess.displayName = 'proto.pulsar.proto.CommandSuccess';
}
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
proto.pulsar.proto.CommandProducerSuccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandProducerSuccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandProducerSuccess.displayName = 'proto.pulsar.proto.CommandProducerSuccess';
}
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
proto.pulsar.proto.CommandError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandError.displayName = 'proto.pulsar.proto.CommandError';
}
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
proto.pulsar.proto.CommandPing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandPing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandPing.displayName = 'proto.pulsar.proto.CommandPing';
}
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
proto.pulsar.proto.CommandPong = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandPong, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandPong.displayName = 'proto.pulsar.proto.CommandPong';
}
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
proto.pulsar.proto.CommandConsumerStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandConsumerStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandConsumerStats.displayName = 'proto.pulsar.proto.CommandConsumerStats';
}
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
proto.pulsar.proto.CommandConsumerStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandConsumerStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandConsumerStatsResponse.displayName = 'proto.pulsar.proto.CommandConsumerStatsResponse';
}
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
proto.pulsar.proto.CommandGetLastMessageId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetLastMessageId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetLastMessageId.displayName = 'proto.pulsar.proto.CommandGetLastMessageId';
}
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
proto.pulsar.proto.CommandGetLastMessageIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetLastMessageIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetLastMessageIdResponse.displayName = 'proto.pulsar.proto.CommandGetLastMessageIdResponse';
}
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
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.displayName = 'proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse';
}
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
proto.pulsar.proto.CommandGetSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetSchema.displayName = 'proto.pulsar.proto.CommandGetSchema';
}
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
proto.pulsar.proto.CommandGetSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetSchemaResponse.displayName = 'proto.pulsar.proto.CommandGetSchemaResponse';
}
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
proto.pulsar.proto.CommandGetOrCreateSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetOrCreateSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetOrCreateSchema.displayName = 'proto.pulsar.proto.CommandGetOrCreateSchema';
}
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
proto.pulsar.proto.CommandGetOrCreateSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetOrCreateSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetOrCreateSchemaResponse.displayName = 'proto.pulsar.proto.CommandGetOrCreateSchemaResponse';
}
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
proto.pulsar.proto.CommandNewTxn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandNewTxn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandNewTxn.displayName = 'proto.pulsar.proto.CommandNewTxn';
}
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
proto.pulsar.proto.CommandNewTxnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandNewTxnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandNewTxnResponse.displayName = 'proto.pulsar.proto.CommandNewTxnResponse';
}
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
proto.pulsar.proto.CommandAddPartitionToTxn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandAddPartitionToTxn.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandAddPartitionToTxn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAddPartitionToTxn.displayName = 'proto.pulsar.proto.CommandAddPartitionToTxn';
}
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
proto.pulsar.proto.CommandAddPartitionToTxnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandAddPartitionToTxnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAddPartitionToTxnResponse.displayName = 'proto.pulsar.proto.CommandAddPartitionToTxnResponse';
}
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
proto.pulsar.proto.Subscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.Subscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.Subscription.displayName = 'proto.pulsar.proto.Subscription';
}
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
proto.pulsar.proto.CommandAddSubscriptionToTxn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandAddSubscriptionToTxn.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandAddSubscriptionToTxn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAddSubscriptionToTxn.displayName = 'proto.pulsar.proto.CommandAddSubscriptionToTxn';
}
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
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandAddSubscriptionToTxnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.displayName = 'proto.pulsar.proto.CommandAddSubscriptionToTxnResponse';
}
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
proto.pulsar.proto.CommandEndTxn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandEndTxn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandEndTxn.displayName = 'proto.pulsar.proto.CommandEndTxn';
}
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
proto.pulsar.proto.CommandEndTxnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandEndTxnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandEndTxnResponse.displayName = 'proto.pulsar.proto.CommandEndTxnResponse';
}
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
proto.pulsar.proto.CommandEndTxnOnPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandEndTxnOnPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandEndTxnOnPartition.displayName = 'proto.pulsar.proto.CommandEndTxnOnPartition';
}
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
proto.pulsar.proto.CommandEndTxnOnPartitionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandEndTxnOnPartitionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandEndTxnOnPartitionResponse.displayName = 'proto.pulsar.proto.CommandEndTxnOnPartitionResponse';
}
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
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.displayName = 'proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse';
}
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
proto.pulsar.proto.BaseCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.BaseCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.BaseCommand.displayName = 'proto.pulsar.proto.BaseCommand';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.Schema.repeatedFields_ = [5];



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
proto.pulsar.proto.Schema.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.Schema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.Schema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.Schema.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    schemaData: msg.getSchemaData_asB64(),
    type: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.pulsar.proto.KeyValue.toObject, includeInstance)
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
 * @return {!proto.pulsar.proto.Schema}
 */
proto.pulsar.proto.Schema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.Schema;
  return proto.pulsar.proto.Schema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.Schema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.Schema}
 */
proto.pulsar.proto.Schema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSchemaData(value);
      break;
    case 4:
      var value = /** @type {!proto.pulsar.proto.Schema.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new proto.pulsar.proto.KeyValue;
      reader.readMessage(value,proto.pulsar.proto.KeyValue.deserializeBinaryFromReader);
      msg.addProperties(value);
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
proto.pulsar.proto.Schema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.Schema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.Schema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.Schema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.Schema.Type} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pulsar.proto.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.pulsar.proto.Schema.Type = {
  NONE: 0,
  STRING: 1,
  JSON: 2,
  PROTOBUF: 3,
  AVRO: 4,
  BOOL: 5,
  INT8: 6,
  INT16: 7,
  INT32: 8,
  INT64: 9,
  FLOAT: 10,
  DOUBLE: 11,
  DATE: 12,
  TIME: 13,
  TIMESTAMP: 14,
  KEYVALUE: 15,
  INSTANT: 16,
  LOCALDATE: 17,
  LOCALTIME: 18,
  LOCALDATETIME: 19,
  PROTOBUFNATIVE: 20
};

/**
 * required string name = 1;
 * @return {string}
 */
proto.pulsar.proto.Schema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.Schema} returns this
 */
proto.pulsar.proto.Schema.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.Schema} returns this
 */
proto.pulsar.proto.Schema.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.Schema.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required bytes schema_data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.Schema.prototype.getSchemaData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * required bytes schema_data = 3;
 * This is a type-conversion wrapper around `getSchemaData()`
 * @return {string}
 */
proto.pulsar.proto.Schema.prototype.getSchemaData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSchemaData()));
};


/**
 * required bytes schema_data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemaData()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.Schema.prototype.getSchemaData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSchemaData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.Schema} returns this
 */
proto.pulsar.proto.Schema.prototype.setSchemaData = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.Schema} returns this
 */
proto.pulsar.proto.Schema.prototype.clearSchemaData = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.Schema.prototype.hasSchemaData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required Type type = 4;
 * @return {!proto.pulsar.proto.Schema.Type}
 */
proto.pulsar.proto.Schema.prototype.getType = function() {
  return /** @type {!proto.pulsar.proto.Schema.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.Schema.Type} value
 * @return {!proto.pulsar.proto.Schema} returns this
 */
proto.pulsar.proto.Schema.prototype.setType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.Schema} returns this
 */
proto.pulsar.proto.Schema.prototype.clearType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.Schema.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated KeyValue properties = 5;
 * @return {!Array<!proto.pulsar.proto.KeyValue>}
 */
proto.pulsar.proto.Schema.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.pulsar.proto.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.KeyValue, 5));
};


/**
 * @param {!Array<!proto.pulsar.proto.KeyValue>} value
 * @return {!proto.pulsar.proto.Schema} returns this
*/
proto.pulsar.proto.Schema.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pulsar.proto.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.Schema.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pulsar.proto.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.Schema} returns this
 */
proto.pulsar.proto.Schema.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.MessageIdData.repeatedFields_ = [5];



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
proto.pulsar.proto.MessageIdData.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.MessageIdData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.MessageIdData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.MessageIdData.toObject = function(includeInstance, msg) {
  var f, obj = {
    ledgerid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    entryid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    partition: jspb.Message.getFieldWithDefault(msg, 3, -1),
    batchIndex: jspb.Message.getFieldWithDefault(msg, 4, -1),
    ackSetList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    batchSize: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.MessageIdData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.MessageIdData;
  return proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.MessageIdData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLedgerid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEntryid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPartition(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchIndex(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAckSet(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchSize(value);
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
proto.pulsar.proto.MessageIdData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.MessageIdData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.MessageIdData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.MessageIdData.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAckSetList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * required uint64 ledgerId = 1;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getLedgerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setLedgerid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearLedgerid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasLedgerid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 entryId = 2;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getEntryid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setEntryid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearEntryid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasEntryid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 partition = 3;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getPartition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, -1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setPartition = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearPartition = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasPartition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 batch_index = 4;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getBatchIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, -1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setBatchIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearBatchIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasBatchIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated int64 ack_set = 5;
 * @return {!Array<number>}
 */
proto.pulsar.proto.MessageIdData.prototype.getAckSetList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setAckSetList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.addAckSet = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearAckSetList = function() {
  return this.setAckSetList([]);
};


/**
 * optional int32 batch_size = 6;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setBatchSize = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearBatchSize = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasBatchSize = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.pulsar.proto.KeyValue.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.KeyValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.KeyValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.KeyValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    value: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.KeyValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.KeyValue;
  return proto.pulsar.proto.KeyValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.KeyValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.KeyValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.pulsar.proto.KeyValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.KeyValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.KeyValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.KeyValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
};


/**
 * required string key = 1;
 * @return {string}
 */
proto.pulsar.proto.KeyValue.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.KeyValue} returns this
 */
proto.pulsar.proto.KeyValue.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.KeyValue} returns this
 */
proto.pulsar.proto.KeyValue.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.KeyValue.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string value = 2;
 * @return {string}
 */
proto.pulsar.proto.KeyValue.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.KeyValue} returns this
 */
proto.pulsar.proto.KeyValue.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.KeyValue} returns this
 */
proto.pulsar.proto.KeyValue.prototype.clearValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.KeyValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.KeyLongValue.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.KeyLongValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.KeyLongValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.KeyLongValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    value: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.KeyLongValue}
 */
proto.pulsar.proto.KeyLongValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.KeyLongValue;
  return proto.pulsar.proto.KeyLongValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.KeyLongValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.KeyLongValue}
 */
proto.pulsar.proto.KeyLongValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
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
proto.pulsar.proto.KeyLongValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.KeyLongValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.KeyLongValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.KeyLongValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
};


/**
 * required string key = 1;
 * @return {string}
 */
proto.pulsar.proto.KeyLongValue.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.KeyLongValue} returns this
 */
proto.pulsar.proto.KeyLongValue.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.KeyLongValue} returns this
 */
proto.pulsar.proto.KeyLongValue.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.KeyLongValue.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 value = 2;
 * @return {number}
 */
proto.pulsar.proto.KeyLongValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.KeyLongValue} returns this
 */
proto.pulsar.proto.KeyLongValue.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.KeyLongValue} returns this
 */
proto.pulsar.proto.KeyLongValue.prototype.clearValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.KeyLongValue.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.IntRange.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.IntRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.IntRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.IntRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    end: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.IntRange}
 */
proto.pulsar.proto.IntRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.IntRange;
  return proto.pulsar.proto.IntRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.IntRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.IntRange}
 */
proto.pulsar.proto.IntRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnd(value);
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
proto.pulsar.proto.IntRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.IntRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.IntRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.IntRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * required int32 start = 1;
 * @return {number}
 */
proto.pulsar.proto.IntRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.IntRange} returns this
 */
proto.pulsar.proto.IntRange.prototype.setStart = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.IntRange} returns this
 */
proto.pulsar.proto.IntRange.prototype.clearStart = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.IntRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 end = 2;
 * @return {number}
 */
proto.pulsar.proto.IntRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.IntRange} returns this
 */
proto.pulsar.proto.IntRange.prototype.setEnd = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.IntRange} returns this
 */
proto.pulsar.proto.IntRange.prototype.clearEnd = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.IntRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.EncryptionKeys.repeatedFields_ = [3];



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
proto.pulsar.proto.EncryptionKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.EncryptionKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.EncryptionKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.EncryptionKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    value: msg.getValue_asB64(),
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.pulsar.proto.KeyValue.toObject, includeInstance)
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
 * @return {!proto.pulsar.proto.EncryptionKeys}
 */
proto.pulsar.proto.EncryptionKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.EncryptionKeys;
  return proto.pulsar.proto.EncryptionKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.EncryptionKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.EncryptionKeys}
 */
proto.pulsar.proto.EncryptionKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.KeyValue;
      reader.readMessage(value,proto.pulsar.proto.KeyValue.deserializeBinaryFromReader);
      msg.addMetadata(value);
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
proto.pulsar.proto.EncryptionKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.EncryptionKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.EncryptionKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.EncryptionKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pulsar.proto.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * required string key = 1;
 * @return {string}
 */
proto.pulsar.proto.EncryptionKeys.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.EncryptionKeys} returns this
 */
proto.pulsar.proto.EncryptionKeys.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.EncryptionKeys} returns this
 */
proto.pulsar.proto.EncryptionKeys.prototype.clearKey = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.EncryptionKeys.prototype.hasKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.EncryptionKeys.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * required bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.pulsar.proto.EncryptionKeys.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * required bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.EncryptionKeys.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.EncryptionKeys} returns this
 */
proto.pulsar.proto.EncryptionKeys.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.EncryptionKeys} returns this
 */
proto.pulsar.proto.EncryptionKeys.prototype.clearValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.EncryptionKeys.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated KeyValue metadata = 3;
 * @return {!Array<!proto.pulsar.proto.KeyValue>}
 */
proto.pulsar.proto.EncryptionKeys.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.pulsar.proto.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.KeyValue, 3));
};


/**
 * @param {!Array<!proto.pulsar.proto.KeyValue>} value
 * @return {!proto.pulsar.proto.EncryptionKeys} returns this
*/
proto.pulsar.proto.EncryptionKeys.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pulsar.proto.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.EncryptionKeys.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pulsar.proto.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.EncryptionKeys} returns this
 */
proto.pulsar.proto.EncryptionKeys.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.MessageMetadata.repeatedFields_ = [4,7,13];



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
proto.pulsar.proto.MessageMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.MessageMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.MessageMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.MessageMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerName: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sequenceId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    publishTime: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.pulsar.proto.KeyValue.toObject, includeInstance),
    replicatedFrom: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    partitionKey: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    replicateToList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    compression: jspb.Message.getFieldWithDefault(msg, 8, 0),
    uncompressedSize: jspb.Message.getFieldWithDefault(msg, 9, 0),
    numMessagesInBatch: jspb.Message.getFieldWithDefault(msg, 11, 1),
    eventTime: jspb.Message.getFieldWithDefault(msg, 12, 0),
    encryptionKeysList: jspb.Message.toObjectList(msg.getEncryptionKeysList(),
    proto.pulsar.proto.EncryptionKeys.toObject, includeInstance),
    encryptionAlgo: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    encryptionParam: msg.getEncryptionParam_asB64(),
    schemaVersion: msg.getSchemaVersion_asB64(),
    partitionKeyB64Encoded: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    orderingKey: msg.getOrderingKey_asB64(),
    deliverAtTime: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
    markerType: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
    txnidLeastBits: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f,
    txnidMostBits: (f = jspb.Message.getField(msg, 23)) == null ? undefined : f,
    highestSequenceId: jspb.Message.getFieldWithDefault(msg, 24, 0),
    nullValue: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    uuid: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
    numChunksFromMsg: (f = jspb.Message.getField(msg, 27)) == null ? undefined : f,
    totalChunkMsgSize: (f = jspb.Message.getField(msg, 28)) == null ? undefined : f,
    chunkId: (f = jspb.Message.getField(msg, 29)) == null ? undefined : f,
    nullPartitionKey: jspb.Message.getBooleanFieldWithDefault(msg, 30, false)
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
 * @return {!proto.pulsar.proto.MessageMetadata}
 */
proto.pulsar.proto.MessageMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.MessageMetadata;
  return proto.pulsar.proto.MessageMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.MessageMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.MessageMetadata}
 */
proto.pulsar.proto.MessageMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducerName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPublishTime(value);
      break;
    case 4:
      var value = new proto.pulsar.proto.KeyValue;
      reader.readMessage(value,proto.pulsar.proto.KeyValue.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplicatedFrom(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartitionKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addReplicateTo(value);
      break;
    case 8:
      var value = /** @type {!proto.pulsar.proto.CompressionType} */ (reader.readEnum());
      msg.setCompression(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUncompressedSize(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumMessagesInBatch(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEventTime(value);
      break;
    case 13:
      var value = new proto.pulsar.proto.EncryptionKeys;
      reader.readMessage(value,proto.pulsar.proto.EncryptionKeys.deserializeBinaryFromReader);
      msg.addEncryptionKeys(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncryptionAlgo(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEncryptionParam(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSchemaVersion(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPartitionKeyB64Encoded(value);
      break;
    case 18:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOrderingKey(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeliverAtTime(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarkerType(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidLeastBits(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidMostBits(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHighestSequenceId(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNullValue(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumChunksFromMsg(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalChunkMsgSize(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunkId(value);
      break;
    case 30:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNullPartitionKey(value);
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
proto.pulsar.proto.MessageMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.MessageMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.MessageMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.MessageMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pulsar.proto.KeyValue.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getReplicateToList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.CompressionType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getEncryptionKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.pulsar.proto.EncryptionKeys.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBytes(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeUint64(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeUint64(
      24,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeBool(
      25,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeString(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeInt32(
      27,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeInt32(
      28,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeInt32(
      29,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeBool(
      30,
      f
    );
  }
};


/**
 * required string producer_name = 1;
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getProducerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setProducerName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearProducerName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasProducerName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 sequence_id = 2;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setSequenceId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearSequenceId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasSequenceId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint64 publish_time = 3;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getPublishTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setPublishTime = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearPublishTime = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasPublishTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated KeyValue properties = 4;
 * @return {!Array<!proto.pulsar.proto.KeyValue>}
 */
proto.pulsar.proto.MessageMetadata.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.pulsar.proto.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.KeyValue, 4));
};


/**
 * @param {!Array<!proto.pulsar.proto.KeyValue>} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
*/
proto.pulsar.proto.MessageMetadata.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pulsar.proto.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.MessageMetadata.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pulsar.proto.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};


/**
 * optional string replicated_from = 5;
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getReplicatedFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setReplicatedFrom = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearReplicatedFrom = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasReplicatedFrom = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string partition_key = 6;
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getPartitionKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setPartitionKey = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearPartitionKey = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasPartitionKey = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string replicate_to = 7;
 * @return {!Array<string>}
 */
proto.pulsar.proto.MessageMetadata.prototype.getReplicateToList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setReplicateToList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.addReplicateTo = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearReplicateToList = function() {
  return this.setReplicateToList([]);
};


/**
 * optional CompressionType compression = 8;
 * @return {!proto.pulsar.proto.CompressionType}
 */
proto.pulsar.proto.MessageMetadata.prototype.getCompression = function() {
  return /** @type {!proto.pulsar.proto.CompressionType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.pulsar.proto.CompressionType} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setCompression = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearCompression = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasCompression = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 uncompressed_size = 9;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getUncompressedSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setUncompressedSize = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearUncompressedSize = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasUncompressedSize = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 num_messages_in_batch = 11;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getNumMessagesInBatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setNumMessagesInBatch = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearNumMessagesInBatch = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasNumMessagesInBatch = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint64 event_time = 12;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getEventTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setEventTime = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearEventTime = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasEventTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated EncryptionKeys encryption_keys = 13;
 * @return {!Array<!proto.pulsar.proto.EncryptionKeys>}
 */
proto.pulsar.proto.MessageMetadata.prototype.getEncryptionKeysList = function() {
  return /** @type{!Array<!proto.pulsar.proto.EncryptionKeys>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.EncryptionKeys, 13));
};


/**
 * @param {!Array<!proto.pulsar.proto.EncryptionKeys>} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
*/
proto.pulsar.proto.MessageMetadata.prototype.setEncryptionKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.pulsar.proto.EncryptionKeys=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.EncryptionKeys}
 */
proto.pulsar.proto.MessageMetadata.prototype.addEncryptionKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.pulsar.proto.EncryptionKeys, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearEncryptionKeysList = function() {
  return this.setEncryptionKeysList([]);
};


/**
 * optional string encryption_algo = 14;
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getEncryptionAlgo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setEncryptionAlgo = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearEncryptionAlgo = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasEncryptionAlgo = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bytes encryption_param = 15;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.MessageMetadata.prototype.getEncryptionParam = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes encryption_param = 15;
 * This is a type-conversion wrapper around `getEncryptionParam()`
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getEncryptionParam_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEncryptionParam()));
};


/**
 * optional bytes encryption_param = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEncryptionParam()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.MessageMetadata.prototype.getEncryptionParam_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEncryptionParam()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setEncryptionParam = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearEncryptionParam = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasEncryptionParam = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bytes schema_version = 16;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.MessageMetadata.prototype.getSchemaVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes schema_version = 16;
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getSchemaVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSchemaVersion()));
};


/**
 * optional bytes schema_version = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.MessageMetadata.prototype.getSchemaVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSchemaVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setSchemaVersion = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearSchemaVersion = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasSchemaVersion = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool partition_key_b64_encoded = 17;
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.getPartitionKeyB64Encoded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setPartitionKeyB64Encoded = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearPartitionKeyB64Encoded = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasPartitionKeyB64Encoded = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bytes ordering_key = 18;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.MessageMetadata.prototype.getOrderingKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * optional bytes ordering_key = 18;
 * This is a type-conversion wrapper around `getOrderingKey()`
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getOrderingKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderingKey()));
};


/**
 * optional bytes ordering_key = 18;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderingKey()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.MessageMetadata.prototype.getOrderingKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderingKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setOrderingKey = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearOrderingKey = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasOrderingKey = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int64 deliver_at_time = 19;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getDeliverAtTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setDeliverAtTime = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearDeliverAtTime = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasDeliverAtTime = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 marker_type = 20;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getMarkerType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setMarkerType = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearMarkerType = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasMarkerType = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint64 txnid_least_bits = 22;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional uint64 txnid_most_bits = 23;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional uint64 highest_sequence_id = 24;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getHighestSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setHighestSequenceId = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearHighestSequenceId = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasHighestSequenceId = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional bool null_value = 25;
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.getNullValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setNullValue = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearNullValue = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasNullValue = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string uuid = 26;
 * @return {string}
 */
proto.pulsar.proto.MessageMetadata.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setUuid = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearUuid = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional int32 num_chunks_from_msg = 27;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getNumChunksFromMsg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setNumChunksFromMsg = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearNumChunksFromMsg = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasNumChunksFromMsg = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional int32 total_chunk_msg_size = 28;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getTotalChunkMsgSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setTotalChunkMsgSize = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearTotalChunkMsgSize = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasTotalChunkMsgSize = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional int32 chunk_id = 29;
 * @return {number}
 */
proto.pulsar.proto.MessageMetadata.prototype.getChunkId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setChunkId = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearChunkId = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasChunkId = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional bool null_partition_key = 30;
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.getNullPartitionKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 30, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.setNullPartitionKey = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageMetadata} returns this
 */
proto.pulsar.proto.MessageMetadata.prototype.clearNullPartitionKey = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageMetadata.prototype.hasNullPartitionKey = function() {
  return jspb.Message.getField(this, 30) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.SingleMessageMetadata.repeatedFields_ = [1];



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
proto.pulsar.proto.SingleMessageMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.SingleMessageMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.SingleMessageMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.SingleMessageMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.pulsar.proto.KeyValue.toObject, includeInstance),
    partitionKey: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    payloadSize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    compactedOut: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    eventTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    partitionKeyB64Encoded: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    orderingKey: msg.getOrderingKey_asB64(),
    sequenceId: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    nullValue: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    nullPartitionKey: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.pulsar.proto.SingleMessageMetadata}
 */
proto.pulsar.proto.SingleMessageMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.SingleMessageMetadata;
  return proto.pulsar.proto.SingleMessageMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.SingleMessageMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.SingleMessageMetadata}
 */
proto.pulsar.proto.SingleMessageMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pulsar.proto.KeyValue;
      reader.readMessage(value,proto.pulsar.proto.KeyValue.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartitionKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPayloadSize(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompactedOut(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEventTime(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPartitionKeyB64Encoded(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOrderingKey(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceId(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNullValue(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNullPartitionKey(value);
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
proto.pulsar.proto.SingleMessageMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.SingleMessageMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.SingleMessageMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.SingleMessageMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pulsar.proto.KeyValue.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * repeated KeyValue properties = 1;
 * @return {!Array<!proto.pulsar.proto.KeyValue>}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.pulsar.proto.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.KeyValue, 1));
};


/**
 * @param {!Array<!proto.pulsar.proto.KeyValue>} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
*/
proto.pulsar.proto.SingleMessageMetadata.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pulsar.proto.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pulsar.proto.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};


/**
 * optional string partition_key = 2;
 * @return {string}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getPartitionKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setPartitionKey = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearPartitionKey = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasPartitionKey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 payload_size = 3;
 * @return {number}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getPayloadSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setPayloadSize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearPayloadSize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasPayloadSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool compacted_out = 4;
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getCompactedOut = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setCompactedOut = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearCompactedOut = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasCompactedOut = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 event_time = 5;
 * @return {number}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getEventTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setEventTime = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearEventTime = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasEventTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool partition_key_b64_encoded = 6;
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getPartitionKeyB64Encoded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setPartitionKeyB64Encoded = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearPartitionKeyB64Encoded = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasPartitionKeyB64Encoded = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes ordering_key = 7;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getOrderingKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes ordering_key = 7;
 * This is a type-conversion wrapper around `getOrderingKey()`
 * @return {string}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getOrderingKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderingKey()));
};


/**
 * optional bytes ordering_key = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderingKey()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getOrderingKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderingKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setOrderingKey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearOrderingKey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasOrderingKey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 sequence_id = 8;
 * @return {number}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setSequenceId = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearSequenceId = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasSequenceId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool null_value = 9;
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getNullValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setNullValue = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearNullValue = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasNullValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool null_partition_key = 10;
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.getNullPartitionKey = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.setNullPartitionKey = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.SingleMessageMetadata} returns this
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.clearNullPartitionKey = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.SingleMessageMetadata.prototype.hasNullPartitionKey = function() {
  return jspb.Message.getField(this, 10) != null;
};





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
proto.pulsar.proto.BrokerEntryMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.BrokerEntryMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.BrokerEntryMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.BrokerEntryMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    brokerTimestamp: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    index: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.BrokerEntryMetadata}
 */
proto.pulsar.proto.BrokerEntryMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.BrokerEntryMetadata;
  return proto.pulsar.proto.BrokerEntryMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.BrokerEntryMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.BrokerEntryMetadata}
 */
proto.pulsar.proto.BrokerEntryMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBrokerTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
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
proto.pulsar.proto.BrokerEntryMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.BrokerEntryMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.BrokerEntryMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.BrokerEntryMetadata.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional uint64 broker_timestamp = 1;
 * @return {number}
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.getBrokerTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.BrokerEntryMetadata} returns this
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.setBrokerTimestamp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.BrokerEntryMetadata} returns this
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.clearBrokerTimestamp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.hasBrokerTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 index = 2;
 * @return {number}
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.BrokerEntryMetadata} returns this
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.setIndex = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.BrokerEntryMetadata} returns this
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.clearIndex = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BrokerEntryMetadata.prototype.hasIndex = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandConnect.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandConnect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandConnect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConnect.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientVersion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    authMethod: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    authMethodName: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    authData: msg.getAuthData_asB64(),
    protocolVersion: jspb.Message.getFieldWithDefault(msg, 4, 0),
    proxyToBrokerUrl: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    originalPrincipal: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    originalAuthData: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    originalAuthMethod: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    featureFlags: (f = msg.getFeatureFlags()) && proto.pulsar.proto.FeatureFlags.toObject(includeInstance, f)
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
 * @return {!proto.pulsar.proto.CommandConnect}
 */
proto.pulsar.proto.CommandConnect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandConnect;
  return proto.pulsar.proto.CommandConnect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandConnect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandConnect}
 */
proto.pulsar.proto.CommandConnect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientVersion(value);
      break;
    case 2:
      var value = /** @type {!proto.pulsar.proto.AuthMethod} */ (reader.readEnum());
      msg.setAuthMethod(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthMethodName(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuthData(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxyToBrokerUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalPrincipal(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalAuthData(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalAuthMethod(value);
      break;
    case 10:
      var value = new proto.pulsar.proto.FeatureFlags;
      reader.readMessage(value,proto.pulsar.proto.FeatureFlags.deserializeBinaryFromReader);
      msg.setFeatureFlags(value);
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
proto.pulsar.proto.CommandConnect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandConnect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandConnect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConnect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.AuthMethod} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getFeatureFlags();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.pulsar.proto.FeatureFlags.serializeBinaryToWriter
    );
  }
};


/**
 * required string client_version = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandConnect.prototype.getClientVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setClientVersion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearClientVersion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasClientVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AuthMethod auth_method = 2;
 * @return {!proto.pulsar.proto.AuthMethod}
 */
proto.pulsar.proto.CommandConnect.prototype.getAuthMethod = function() {
  return /** @type {!proto.pulsar.proto.AuthMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pulsar.proto.AuthMethod} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setAuthMethod = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearAuthMethod = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasAuthMethod = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string auth_method_name = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandConnect.prototype.getAuthMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setAuthMethodName = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearAuthMethodName = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasAuthMethodName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes auth_data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.CommandConnect.prototype.getAuthData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes auth_data = 3;
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {string}
 */
proto.pulsar.proto.CommandConnect.prototype.getAuthData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuthData()));
};


/**
 * optional bytes auth_data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.CommandConnect.prototype.getAuthData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuthData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setAuthData = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearAuthData = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasAuthData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 protocol_version = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandConnect.prototype.getProtocolVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearProtocolVersion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasProtocolVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string proxy_to_broker_url = 6;
 * @return {string}
 */
proto.pulsar.proto.CommandConnect.prototype.getProxyToBrokerUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setProxyToBrokerUrl = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearProxyToBrokerUrl = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasProxyToBrokerUrl = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string original_principal = 7;
 * @return {string}
 */
proto.pulsar.proto.CommandConnect.prototype.getOriginalPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setOriginalPrincipal = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearOriginalPrincipal = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasOriginalPrincipal = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string original_auth_data = 8;
 * @return {string}
 */
proto.pulsar.proto.CommandConnect.prototype.getOriginalAuthData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setOriginalAuthData = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearOriginalAuthData = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasOriginalAuthData = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string original_auth_method = 9;
 * @return {string}
 */
proto.pulsar.proto.CommandConnect.prototype.getOriginalAuthMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.setOriginalAuthMethod = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearOriginalAuthMethod = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasOriginalAuthMethod = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional FeatureFlags feature_flags = 10;
 * @return {?proto.pulsar.proto.FeatureFlags}
 */
proto.pulsar.proto.CommandConnect.prototype.getFeatureFlags = function() {
  return /** @type{?proto.pulsar.proto.FeatureFlags} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.FeatureFlags, 10));
};


/**
 * @param {?proto.pulsar.proto.FeatureFlags|undefined} value
 * @return {!proto.pulsar.proto.CommandConnect} returns this
*/
proto.pulsar.proto.CommandConnect.prototype.setFeatureFlags = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnect} returns this
 */
proto.pulsar.proto.CommandConnect.prototype.clearFeatureFlags = function() {
  return this.setFeatureFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnect.prototype.hasFeatureFlags = function() {
  return jspb.Message.getField(this, 10) != null;
};





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
proto.pulsar.proto.FeatureFlags.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.FeatureFlags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.FeatureFlags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.FeatureFlags.toObject = function(includeInstance, msg) {
  var f, obj = {
    supportsAuthRefresh: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    supportsBrokerEntryMetadata: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.pulsar.proto.FeatureFlags}
 */
proto.pulsar.proto.FeatureFlags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.FeatureFlags;
  return proto.pulsar.proto.FeatureFlags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.FeatureFlags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.FeatureFlags}
 */
proto.pulsar.proto.FeatureFlags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsAuthRefresh(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsBrokerEntryMetadata(value);
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
proto.pulsar.proto.FeatureFlags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.FeatureFlags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.FeatureFlags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.FeatureFlags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool supports_auth_refresh = 1;
 * @return {boolean}
 */
proto.pulsar.proto.FeatureFlags.prototype.getSupportsAuthRefresh = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.FeatureFlags} returns this
 */
proto.pulsar.proto.FeatureFlags.prototype.setSupportsAuthRefresh = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.FeatureFlags} returns this
 */
proto.pulsar.proto.FeatureFlags.prototype.clearSupportsAuthRefresh = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.FeatureFlags.prototype.hasSupportsAuthRefresh = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool supports_broker_entry_metadata = 2;
 * @return {boolean}
 */
proto.pulsar.proto.FeatureFlags.prototype.getSupportsBrokerEntryMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.FeatureFlags} returns this
 */
proto.pulsar.proto.FeatureFlags.prototype.setSupportsBrokerEntryMetadata = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.FeatureFlags} returns this
 */
proto.pulsar.proto.FeatureFlags.prototype.clearSupportsBrokerEntryMetadata = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.FeatureFlags.prototype.hasSupportsBrokerEntryMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandConnected.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandConnected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandConnected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConnected.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverVersion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    protocolVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxMessageSize: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandConnected}
 */
proto.pulsar.proto.CommandConnected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandConnected;
  return proto.pulsar.proto.CommandConnected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandConnected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandConnected}
 */
proto.pulsar.proto.CommandConnected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxMessageSize(value);
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
proto.pulsar.proto.CommandConnected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandConnected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandConnected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConnected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * required string server_version = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandConnected.prototype.getServerVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConnected} returns this
 */
proto.pulsar.proto.CommandConnected.prototype.setServerVersion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnected} returns this
 */
proto.pulsar.proto.CommandConnected.prototype.clearServerVersion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnected.prototype.hasServerVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 protocol_version = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandConnected.prototype.getProtocolVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConnected} returns this
 */
proto.pulsar.proto.CommandConnected.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnected} returns this
 */
proto.pulsar.proto.CommandConnected.prototype.clearProtocolVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnected.prototype.hasProtocolVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 max_message_size = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandConnected.prototype.getMaxMessageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConnected} returns this
 */
proto.pulsar.proto.CommandConnected.prototype.setMaxMessageSize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConnected} returns this
 */
proto.pulsar.proto.CommandConnected.prototype.clearMaxMessageSize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConnected.prototype.hasMaxMessageSize = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.pulsar.proto.CommandAuthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAuthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAuthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAuthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientVersion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    response: (f = msg.getResponse()) && proto.pulsar.proto.AuthData.toObject(includeInstance, f),
    protocolVersion: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pulsar.proto.CommandAuthResponse}
 */
proto.pulsar.proto.CommandAuthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAuthResponse;
  return proto.pulsar.proto.CommandAuthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAuthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAuthResponse}
 */
proto.pulsar.proto.CommandAuthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientVersion(value);
      break;
    case 2:
      var value = new proto.pulsar.proto.AuthData;
      reader.readMessage(value,proto.pulsar.proto.AuthData.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolVersion(value);
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
proto.pulsar.proto.CommandAuthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAuthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAuthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAuthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pulsar.proto.AuthData.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string client_version = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandAuthResponse.prototype.getClientVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandAuthResponse} returns this
 */
proto.pulsar.proto.CommandAuthResponse.prototype.setClientVersion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAuthResponse} returns this
 */
proto.pulsar.proto.CommandAuthResponse.prototype.clearClientVersion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAuthResponse.prototype.hasClientVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AuthData response = 2;
 * @return {?proto.pulsar.proto.AuthData}
 */
proto.pulsar.proto.CommandAuthResponse.prototype.getResponse = function() {
  return /** @type{?proto.pulsar.proto.AuthData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.AuthData, 2));
};


/**
 * @param {?proto.pulsar.proto.AuthData|undefined} value
 * @return {!proto.pulsar.proto.CommandAuthResponse} returns this
*/
proto.pulsar.proto.CommandAuthResponse.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandAuthResponse} returns this
 */
proto.pulsar.proto.CommandAuthResponse.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAuthResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 protocol_version = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandAuthResponse.prototype.getProtocolVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAuthResponse} returns this
 */
proto.pulsar.proto.CommandAuthResponse.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAuthResponse} returns this
 */
proto.pulsar.proto.CommandAuthResponse.prototype.clearProtocolVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAuthResponse.prototype.hasProtocolVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.pulsar.proto.CommandAuthChallenge.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAuthChallenge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAuthChallenge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAuthChallenge.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverVersion: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    challenge: (f = msg.getChallenge()) && proto.pulsar.proto.AuthData.toObject(includeInstance, f),
    protocolVersion: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pulsar.proto.CommandAuthChallenge}
 */
proto.pulsar.proto.CommandAuthChallenge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAuthChallenge;
  return proto.pulsar.proto.CommandAuthChallenge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAuthChallenge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAuthChallenge}
 */
proto.pulsar.proto.CommandAuthChallenge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerVersion(value);
      break;
    case 2:
      var value = new proto.pulsar.proto.AuthData;
      reader.readMessage(value,proto.pulsar.proto.AuthData.deserializeBinaryFromReader);
      msg.setChallenge(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProtocolVersion(value);
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
proto.pulsar.proto.CommandAuthChallenge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAuthChallenge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAuthChallenge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAuthChallenge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChallenge();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pulsar.proto.AuthData.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string server_version = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.getServerVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandAuthChallenge} returns this
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.setServerVersion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAuthChallenge} returns this
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.clearServerVersion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.hasServerVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AuthData challenge = 2;
 * @return {?proto.pulsar.proto.AuthData}
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.getChallenge = function() {
  return /** @type{?proto.pulsar.proto.AuthData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.AuthData, 2));
};


/**
 * @param {?proto.pulsar.proto.AuthData|undefined} value
 * @return {!proto.pulsar.proto.CommandAuthChallenge} returns this
*/
proto.pulsar.proto.CommandAuthChallenge.prototype.setChallenge = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandAuthChallenge} returns this
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.clearChallenge = function() {
  return this.setChallenge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.hasChallenge = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 protocol_version = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.getProtocolVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAuthChallenge} returns this
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.setProtocolVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAuthChallenge} returns this
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.clearProtocolVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAuthChallenge.prototype.hasProtocolVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.pulsar.proto.AuthData.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.AuthData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.AuthData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.AuthData.toObject = function(includeInstance, msg) {
  var f, obj = {
    authMethodName: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    authData: msg.getAuthData_asB64()
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
 * @return {!proto.pulsar.proto.AuthData}
 */
proto.pulsar.proto.AuthData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.AuthData;
  return proto.pulsar.proto.AuthData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.AuthData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.AuthData}
 */
proto.pulsar.proto.AuthData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthMethodName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuthData(value);
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
proto.pulsar.proto.AuthData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.AuthData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.AuthData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.AuthData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string auth_method_name = 1;
 * @return {string}
 */
proto.pulsar.proto.AuthData.prototype.getAuthMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.AuthData} returns this
 */
proto.pulsar.proto.AuthData.prototype.setAuthMethodName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.AuthData} returns this
 */
proto.pulsar.proto.AuthData.prototype.clearAuthMethodName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.AuthData.prototype.hasAuthMethodName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes auth_data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.AuthData.prototype.getAuthData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes auth_data = 2;
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {string}
 */
proto.pulsar.proto.AuthData.prototype.getAuthData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuthData()));
};


/**
 * optional bytes auth_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthData()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.AuthData.prototype.getAuthData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuthData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.AuthData} returns this
 */
proto.pulsar.proto.AuthData.prototype.setAuthData = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.AuthData} returns this
 */
proto.pulsar.proto.AuthData.prototype.clearAuthData = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.AuthData.prototype.hasAuthData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.KeySharedMeta.repeatedFields_ = [3];



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
proto.pulsar.proto.KeySharedMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.KeySharedMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.KeySharedMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.KeySharedMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysharedmode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    hashrangesList: jspb.Message.toObjectList(msg.getHashrangesList(),
    proto.pulsar.proto.IntRange.toObject, includeInstance),
    allowoutoforderdelivery: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.pulsar.proto.KeySharedMeta}
 */
proto.pulsar.proto.KeySharedMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.KeySharedMeta;
  return proto.pulsar.proto.KeySharedMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.KeySharedMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.KeySharedMeta}
 */
proto.pulsar.proto.KeySharedMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pulsar.proto.KeySharedMode} */ (reader.readEnum());
      msg.setKeysharedmode(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.IntRange;
      reader.readMessage(value,proto.pulsar.proto.IntRange.deserializeBinaryFromReader);
      msg.addHashranges(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowoutoforderdelivery(value);
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
proto.pulsar.proto.KeySharedMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.KeySharedMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.KeySharedMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.KeySharedMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.pulsar.proto.KeySharedMode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getHashrangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pulsar.proto.IntRange.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * required KeySharedMode keySharedMode = 1;
 * @return {!proto.pulsar.proto.KeySharedMode}
 */
proto.pulsar.proto.KeySharedMeta.prototype.getKeysharedmode = function() {
  return /** @type {!proto.pulsar.proto.KeySharedMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pulsar.proto.KeySharedMode} value
 * @return {!proto.pulsar.proto.KeySharedMeta} returns this
 */
proto.pulsar.proto.KeySharedMeta.prototype.setKeysharedmode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.KeySharedMeta} returns this
 */
proto.pulsar.proto.KeySharedMeta.prototype.clearKeysharedmode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.KeySharedMeta.prototype.hasKeysharedmode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated IntRange hashRanges = 3;
 * @return {!Array<!proto.pulsar.proto.IntRange>}
 */
proto.pulsar.proto.KeySharedMeta.prototype.getHashrangesList = function() {
  return /** @type{!Array<!proto.pulsar.proto.IntRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.IntRange, 3));
};


/**
 * @param {!Array<!proto.pulsar.proto.IntRange>} value
 * @return {!proto.pulsar.proto.KeySharedMeta} returns this
*/
proto.pulsar.proto.KeySharedMeta.prototype.setHashrangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pulsar.proto.IntRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.IntRange}
 */
proto.pulsar.proto.KeySharedMeta.prototype.addHashranges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pulsar.proto.IntRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.KeySharedMeta} returns this
 */
proto.pulsar.proto.KeySharedMeta.prototype.clearHashrangesList = function() {
  return this.setHashrangesList([]);
};


/**
 * optional bool allowOutOfOrderDelivery = 4;
 * @return {boolean}
 */
proto.pulsar.proto.KeySharedMeta.prototype.getAllowoutoforderdelivery = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.KeySharedMeta} returns this
 */
proto.pulsar.proto.KeySharedMeta.prototype.setAllowoutoforderdelivery = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.KeySharedMeta} returns this
 */
proto.pulsar.proto.KeySharedMeta.prototype.clearAllowoutoforderdelivery = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.KeySharedMeta.prototype.hasAllowoutoforderdelivery = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandSubscribe.repeatedFields_ = [10];



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
proto.pulsar.proto.CommandSubscribe.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandSubscribe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandSubscribe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSubscribe.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    subscription: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    subtype: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    consumerId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    consumerName: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    priorityLevel: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    durable: jspb.Message.getBooleanFieldWithDefault(msg, 8, true),
    startMessageId: (f = msg.getStartMessageId()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f),
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.pulsar.proto.KeyValue.toObject, includeInstance),
    readCompacted: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
    schema: (f = msg.getSchema()) && proto.pulsar.proto.Schema.toObject(includeInstance, f),
    initialposition: jspb.Message.getFieldWithDefault(msg, 13, 0),
    replicateSubscriptionState: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
    forceTopicCreation: jspb.Message.getBooleanFieldWithDefault(msg, 15, true),
    startMessageRollbackDurationSec: jspb.Message.getFieldWithDefault(msg, 16, 0),
    keysharedmeta: (f = msg.getKeysharedmeta()) && proto.pulsar.proto.KeySharedMeta.toObject(includeInstance, f)
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
 * @return {!proto.pulsar.proto.CommandSubscribe}
 */
proto.pulsar.proto.CommandSubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandSubscribe;
  return proto.pulsar.proto.CommandSubscribe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandSubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandSubscribe}
 */
proto.pulsar.proto.CommandSubscribe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscription(value);
      break;
    case 3:
      var value = /** @type {!proto.pulsar.proto.CommandSubscribe.SubType} */ (reader.readEnum());
      msg.setSubtype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConsumerId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumerName(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriorityLevel(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDurable(value);
      break;
    case 9:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setStartMessageId(value);
      break;
    case 10:
      var value = new proto.pulsar.proto.KeyValue;
      reader.readMessage(value,proto.pulsar.proto.KeyValue.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadCompacted(value);
      break;
    case 12:
      var value = new proto.pulsar.proto.Schema;
      reader.readMessage(value,proto.pulsar.proto.Schema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    case 13:
      var value = /** @type {!proto.pulsar.proto.CommandSubscribe.InitialPosition} */ (reader.readEnum());
      msg.setInitialposition(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReplicateSubscriptionState(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceTopicCreation(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartMessageRollbackDurationSec(value);
      break;
    case 17:
      var value = new proto.pulsar.proto.KeySharedMeta;
      reader.readMessage(value,proto.pulsar.proto.KeySharedMeta.deserializeBinaryFromReader);
      msg.setKeysharedmeta(value);
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
proto.pulsar.proto.CommandSubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandSubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandSubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSubscribe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {!proto.pulsar.proto.CommandSubscribe.SubType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getStartMessageId();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.pulsar.proto.KeyValue.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.pulsar.proto.Schema.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.pulsar.proto.CommandSubscribe.InitialPosition} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeBool(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getKeysharedmeta();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.pulsar.proto.KeySharedMeta.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.pulsar.proto.CommandSubscribe.SubType = {
  EXCLUSIVE: 0,
  SHARED: 1,
  FAILOVER: 2,
  KEY_SHARED: 3
};

/**
 * @enum {number}
 */
proto.pulsar.proto.CommandSubscribe.InitialPosition = {
  LATEST: 0,
  EARLIEST: 1
};

/**
 * required string topic = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string subscription = 2;
 * @return {string}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getSubscription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setSubscription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearSubscription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required SubType subType = 3;
 * @return {!proto.pulsar.proto.CommandSubscribe.SubType}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getSubtype = function() {
  return /** @type {!proto.pulsar.proto.CommandSubscribe.SubType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandSubscribe.SubType} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setSubtype = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearSubtype = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasSubtype = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required uint64 consumer_id = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required uint64 request_id = 5;
 * @return {number}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string consumer_name = 6;
 * @return {string}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getConsumerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setConsumerName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearConsumerName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasConsumerName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 priority_level = 7;
 * @return {number}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getPriorityLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setPriorityLevel = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearPriorityLevel = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasPriorityLevel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool durable = 8;
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getDurable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, true));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setDurable = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearDurable = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasDurable = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MessageIdData start_message_id = 9;
 * @return {?proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getStartMessageId = function() {
  return /** @type{?proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 9));
};


/**
 * @param {?proto.pulsar.proto.MessageIdData|undefined} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
*/
proto.pulsar.proto.CommandSubscribe.prototype.setStartMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearStartMessageId = function() {
  return this.setStartMessageId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasStartMessageId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated KeyValue metadata = 10;
 * @return {!Array<!proto.pulsar.proto.KeyValue>}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.pulsar.proto.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.KeyValue, 10));
};


/**
 * @param {!Array<!proto.pulsar.proto.KeyValue>} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
*/
proto.pulsar.proto.CommandSubscribe.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.pulsar.proto.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.CommandSubscribe.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.pulsar.proto.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};


/**
 * optional bool read_compacted = 11;
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getReadCompacted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setReadCompacted = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearReadCompacted = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasReadCompacted = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Schema schema = 12;
 * @return {?proto.pulsar.proto.Schema}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getSchema = function() {
  return /** @type{?proto.pulsar.proto.Schema} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.Schema, 12));
};


/**
 * @param {?proto.pulsar.proto.Schema|undefined} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
*/
proto.pulsar.proto.CommandSubscribe.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional InitialPosition initialPosition = 13;
 * @return {!proto.pulsar.proto.CommandSubscribe.InitialPosition}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getInitialposition = function() {
  return /** @type {!proto.pulsar.proto.CommandSubscribe.InitialPosition} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandSubscribe.InitialPosition} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setInitialposition = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearInitialposition = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasInitialposition = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool replicate_subscription_state = 14;
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getReplicateSubscriptionState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setReplicateSubscriptionState = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearReplicateSubscriptionState = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasReplicateSubscriptionState = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool force_topic_creation = 15;
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getForceTopicCreation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, true));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setForceTopicCreation = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearForceTopicCreation = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasForceTopicCreation = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint64 start_message_rollback_duration_sec = 16;
 * @return {number}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getStartMessageRollbackDurationSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.setStartMessageRollbackDurationSec = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearStartMessageRollbackDurationSec = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasStartMessageRollbackDurationSec = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional KeySharedMeta keySharedMeta = 17;
 * @return {?proto.pulsar.proto.KeySharedMeta}
 */
proto.pulsar.proto.CommandSubscribe.prototype.getKeysharedmeta = function() {
  return /** @type{?proto.pulsar.proto.KeySharedMeta} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.KeySharedMeta, 17));
};


/**
 * @param {?proto.pulsar.proto.KeySharedMeta|undefined} value
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
*/
proto.pulsar.proto.CommandSubscribe.prototype.setKeysharedmeta = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandSubscribe} returns this
 */
proto.pulsar.proto.CommandSubscribe.prototype.clearKeysharedmeta = function() {
  return this.setKeysharedmeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSubscribe.prototype.hasKeysharedmeta = function() {
  return jspb.Message.getField(this, 17) != null;
};





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
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandPartitionedTopicMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    originalPrincipal: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    originalAuthData: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    originalAuthMethod: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandPartitionedTopicMetadata;
  return proto.pulsar.proto.CommandPartitionedTopicMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalPrincipal(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalAuthData(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalAuthMethod(value);
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
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandPartitionedTopicMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required string topic = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string original_principal = 3;
 * @return {string}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.getOriginalPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.setOriginalPrincipal = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.clearOriginalPrincipal = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.hasOriginalPrincipal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string original_auth_data = 4;
 * @return {string}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.getOriginalAuthData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.setOriginalAuthData = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.clearOriginalAuthData = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.hasOriginalAuthData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string original_auth_method = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.getOriginalAuthMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.setOriginalAuthMethod = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadata} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.clearOriginalAuthMethod = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadata.prototype.hasOriginalAuthMethod = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partitions: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    response: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandPartitionedTopicMetadataResponse;
  return proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPartitions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} */ (reader.readEnum());
      msg.setResponse(value);
      break;
    case 4:
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
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
  f = /** @type {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType = {
  SUCCESS: 0,
  FAILED: 1
};

/**
 * optional uint32 partitions = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getPartitions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setPartitions = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearPartitions = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasPartitions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LookupType response = 3;
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getResponse = function() {
  return /** @type {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setResponse = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearResponse = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.CommandLookupTopic.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandLookupTopic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandLookupTopic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandLookupTopic.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    authoritative: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    originalPrincipal: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    originalAuthData: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    originalAuthMethod: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    advertisedListenerName: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandLookupTopic}
 */
proto.pulsar.proto.CommandLookupTopic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandLookupTopic;
  return proto.pulsar.proto.CommandLookupTopic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandLookupTopic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandLookupTopic}
 */
proto.pulsar.proto.CommandLookupTopic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuthoritative(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalPrincipal(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalAuthData(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalAuthMethod(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdvertisedListenerName(value);
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
proto.pulsar.proto.CommandLookupTopic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandLookupTopic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandLookupTopic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandLookupTopic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * required string topic = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool authoritative = 3;
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.getAuthoritative = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.setAuthoritative = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.clearAuthoritative = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.hasAuthoritative = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string original_principal = 4;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.getOriginalPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.setOriginalPrincipal = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.clearOriginalPrincipal = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.hasOriginalPrincipal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string original_auth_data = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.getOriginalAuthData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.setOriginalAuthData = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.clearOriginalAuthData = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.hasOriginalAuthData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string original_auth_method = 6;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.getOriginalAuthMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.setOriginalAuthMethod = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.clearOriginalAuthMethod = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.hasOriginalAuthMethod = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string advertised_listener_name = 7;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.getAdvertisedListenerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.setAdvertisedListenerName = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopic} returns this
 */
proto.pulsar.proto.CommandLookupTopic.prototype.clearAdvertisedListenerName = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopic.prototype.hasAdvertisedListenerName = function() {
  return jspb.Message.getField(this, 7) != null;
};





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
proto.pulsar.proto.CommandLookupTopicResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandLookupTopicResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandLookupTopicResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandLookupTopicResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    brokerserviceurl: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    brokerserviceurltls: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    response: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    authoritative: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    error: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    proxyThroughServiceUrl: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse}
 */
proto.pulsar.proto.CommandLookupTopicResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandLookupTopicResponse;
  return proto.pulsar.proto.CommandLookupTopicResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandLookupTopicResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse}
 */
proto.pulsar.proto.CommandLookupTopicResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrokerserviceurl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrokerserviceurltls(value);
      break;
    case 3:
      var value = /** @type {!proto.pulsar.proto.CommandLookupTopicResponse.LookupType} */ (reader.readEnum());
      msg.setResponse(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAuthoritative(value);
      break;
    case 6:
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProxyThroughServiceUrl(value);
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
proto.pulsar.proto.CommandLookupTopicResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandLookupTopicResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandLookupTopicResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandLookupTopicResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {!proto.pulsar.proto.CommandLookupTopicResponse.LookupType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pulsar.proto.CommandLookupTopicResponse.LookupType = {
  REDIRECT: 0,
  CONNECT: 1,
  FAILED: 2
};

/**
 * optional string brokerServiceUrl = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getBrokerserviceurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setBrokerserviceurl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearBrokerserviceurl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasBrokerserviceurl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string brokerServiceUrlTls = 2;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getBrokerserviceurltls = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setBrokerserviceurltls = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearBrokerserviceurltls = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasBrokerserviceurltls = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LookupType response = 3;
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse.LookupType}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getResponse = function() {
  return /** @type {!proto.pulsar.proto.CommandLookupTopicResponse.LookupType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandLookupTopicResponse.LookupType} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setResponse = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearResponse = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required uint64 request_id = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool authoritative = 5;
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getAuthoritative = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setAuthoritative = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearAuthoritative = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasAuthoritative = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ServerError error = 6;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string message = 7;
 * @return {string}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool proxy_through_service_url = 8;
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.getProxyThroughServiceUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.setProxyThroughServiceUrl = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandLookupTopicResponse} returns this
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.clearProxyThroughServiceUrl = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandLookupTopicResponse.prototype.hasProxyThroughServiceUrl = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandProducer.repeatedFields_ = [6];



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
proto.pulsar.proto.CommandProducer.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandProducer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandProducer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandProducer.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    producerId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    producerName: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    encrypted: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    proto.pulsar.proto.KeyValue.toObject, includeInstance),
    schema: (f = msg.getSchema()) && proto.pulsar.proto.Schema.toObject(includeInstance, f),
    epoch: jspb.Message.getFieldWithDefault(msg, 8, 0),
    userProvidedProducerName: jspb.Message.getBooleanFieldWithDefault(msg, 9, true),
    producerAccessMode: jspb.Message.getFieldWithDefault(msg, 10, 0),
    topicEpoch: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandProducer}
 */
proto.pulsar.proto.CommandProducer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandProducer;
  return proto.pulsar.proto.CommandProducer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandProducer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandProducer}
 */
proto.pulsar.proto.CommandProducer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProducerId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducerName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEncrypted(value);
      break;
    case 6:
      var value = new proto.pulsar.proto.KeyValue;
      reader.readMessage(value,proto.pulsar.proto.KeyValue.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    case 7:
      var value = new proto.pulsar.proto.Schema;
      reader.readMessage(value,proto.pulsar.proto.Schema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpoch(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserProvidedProducerName(value);
      break;
    case 10:
      var value = /** @type {!proto.pulsar.proto.ProducerAccessMode} */ (reader.readEnum());
      msg.setProducerAccessMode(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTopicEpoch(value);
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
proto.pulsar.proto.CommandProducer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandProducer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandProducer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandProducer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.pulsar.proto.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.pulsar.proto.Schema.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ProducerAccessMode} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint64(
      11,
      f
    );
  }
};


/**
 * required string topic = 1;
 * @return {string}
 */
proto.pulsar.proto.CommandProducer.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 producer_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandProducer.prototype.getProducerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setProducerId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearProducerId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasProducerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint64 request_id = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandProducer.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string producer_name = 4;
 * @return {string}
 */
proto.pulsar.proto.CommandProducer.prototype.getProducerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setProducerName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearProducerName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasProducerName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool encrypted = 5;
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.getEncrypted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setEncrypted = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearEncrypted = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasEncrypted = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated KeyValue metadata = 6;
 * @return {!Array<!proto.pulsar.proto.KeyValue>}
 */
proto.pulsar.proto.CommandProducer.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.pulsar.proto.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.KeyValue, 6));
};


/**
 * @param {!Array<!proto.pulsar.proto.KeyValue>} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
*/
proto.pulsar.proto.CommandProducer.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.pulsar.proto.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.KeyValue}
 */
proto.pulsar.proto.CommandProducer.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.pulsar.proto.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};


/**
 * optional Schema schema = 7;
 * @return {?proto.pulsar.proto.Schema}
 */
proto.pulsar.proto.CommandProducer.prototype.getSchema = function() {
  return /** @type{?proto.pulsar.proto.Schema} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.Schema, 7));
};


/**
 * @param {?proto.pulsar.proto.Schema|undefined} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
*/
proto.pulsar.proto.CommandProducer.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 epoch = 8;
 * @return {number}
 */
proto.pulsar.proto.CommandProducer.prototype.getEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setEpoch = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearEpoch = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasEpoch = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool user_provided_producer_name = 9;
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.getUserProvidedProducerName = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, true));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setUserProvidedProducerName = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearUserProvidedProducerName = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasUserProvidedProducerName = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ProducerAccessMode producer_access_mode = 10;
 * @return {!proto.pulsar.proto.ProducerAccessMode}
 */
proto.pulsar.proto.CommandProducer.prototype.getProducerAccessMode = function() {
  return /** @type {!proto.pulsar.proto.ProducerAccessMode} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.pulsar.proto.ProducerAccessMode} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setProducerAccessMode = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearProducerAccessMode = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasProducerAccessMode = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 topic_epoch = 11;
 * @return {number}
 */
proto.pulsar.proto.CommandProducer.prototype.getTopicEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.setTopicEpoch = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducer} returns this
 */
proto.pulsar.proto.CommandProducer.prototype.clearTopicEpoch = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducer.prototype.hasTopicEpoch = function() {
  return jspb.Message.getField(this, 11) != null;
};





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
proto.pulsar.proto.CommandSend.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandSend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandSend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSend.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sequenceId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    numMessages: jspb.Message.getFieldWithDefault(msg, 3, 1),
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 4, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 5, 0),
    highestSequenceId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isChunk: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.pulsar.proto.CommandSend}
 */
proto.pulsar.proto.CommandSend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandSend;
  return proto.pulsar.proto.CommandSend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandSend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandSend}
 */
proto.pulsar.proto.CommandSend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProducerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumMessages(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidLeastBits(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidMostBits(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHighestSequenceId(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsChunk(value);
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
proto.pulsar.proto.CommandSend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandSend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandSend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSend.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * required uint64 producer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getProducerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setProducerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearProducerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasProducerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 sequence_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setSequenceId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearSequenceId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasSequenceId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 num_messages = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getNumMessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setNumMessages = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearNumMessages = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasNumMessages = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 txnid_least_bits = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 txnid_most_bits = 5;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 highest_sequence_id = 6;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getHighestSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setHighestSequenceId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearHighestSequenceId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasHighestSequenceId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_chunk = 7;
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.getIsChunk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setIsChunk = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearIsChunk = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasIsChunk = function() {
  return jspb.Message.getField(this, 7) != null;
};





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
proto.pulsar.proto.CommandSendReceipt.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandSendReceipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandSendReceipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSendReceipt.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sequenceId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    messageId: (f = msg.getMessageId()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f),
    highestSequenceId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.pulsar.proto.CommandSendReceipt}
 */
proto.pulsar.proto.CommandSendReceipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandSendReceipt;
  return proto.pulsar.proto.CommandSendReceipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandSendReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandSendReceipt}
 */
proto.pulsar.proto.CommandSendReceipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProducerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceId(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setMessageId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHighestSequenceId(value);
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
proto.pulsar.proto.CommandSendReceipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandSendReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandSendReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSendReceipt.serializeBinaryToWriter = function(message, writer) {
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
 * required uint64 producer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.getProducerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
 */
proto.pulsar.proto.CommandSendReceipt.prototype.setProducerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
 */
proto.pulsar.proto.CommandSendReceipt.prototype.clearProducerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.hasProducerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 sequence_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.getSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
 */
proto.pulsar.proto.CommandSendReceipt.prototype.setSequenceId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
 */
proto.pulsar.proto.CommandSendReceipt.prototype.clearSequenceId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.hasSequenceId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageIdData message_id = 3;
 * @return {?proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.getMessageId = function() {
  return /** @type{?proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 3));
};


/**
 * @param {?proto.pulsar.proto.MessageIdData|undefined} value
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
*/
proto.pulsar.proto.CommandSendReceipt.prototype.setMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
 */
proto.pulsar.proto.CommandSendReceipt.prototype.clearMessageId = function() {
  return this.setMessageId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.hasMessageId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 highest_sequence_id = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.getHighestSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
 */
proto.pulsar.proto.CommandSendReceipt.prototype.setHighestSequenceId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendReceipt} returns this
 */
proto.pulsar.proto.CommandSendReceipt.prototype.clearHighestSequenceId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendReceipt.prototype.hasHighestSequenceId = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.pulsar.proto.CommandSendError.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandSendError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandSendError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSendError.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sequenceId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    error: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandSendError}
 */
proto.pulsar.proto.CommandSendError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandSendError;
  return proto.pulsar.proto.CommandSendError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandSendError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandSendError}
 */
proto.pulsar.proto.CommandSendError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProducerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceId(value);
      break;
    case 3:
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandSendError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandSendError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandSendError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSendError.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * required uint64 producer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandSendError.prototype.getProducerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.setProducerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.clearProducerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendError.prototype.hasProducerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 sequence_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandSendError.prototype.getSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.setSequenceId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.clearSequenceId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendError.prototype.hasSequenceId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ServerError error = 3;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandSendError.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.setError = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.clearError = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendError.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required string message = 4;
 * @return {string}
 */
proto.pulsar.proto.CommandSendError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSendError} returns this
 */
proto.pulsar.proto.CommandSendError.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSendError.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandMessage.repeatedFields_ = [4];



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
proto.pulsar.proto.CommandMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    messageId: (f = msg.getMessageId()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f),
    redeliveryCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ackSetList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandMessage}
 */
proto.pulsar.proto.CommandMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandMessage;
  return proto.pulsar.proto.CommandMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandMessage}
 */
proto.pulsar.proto.CommandMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setMessageId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRedeliveryCount(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAckSet(values[i]);
      }
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
proto.pulsar.proto.CommandMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMessageId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAckSetList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      4,
      f
    );
  }
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandMessage.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandMessage.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required MessageIdData message_id = 2;
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandMessage.prototype.getMessageId = function() {
  return /** @type{!proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 2, 1));
};


/**
 * @param {!proto.pulsar.proto.MessageIdData} value
 * @return {!proto.pulsar.proto.CommandMessage} returns this
*/
proto.pulsar.proto.CommandMessage.prototype.setMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.clearMessageId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandMessage.prototype.hasMessageId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 redelivery_count = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandMessage.prototype.getRedeliveryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.setRedeliveryCount = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.clearRedeliveryCount = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandMessage.prototype.hasRedeliveryCount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated int64 ack_set = 4;
 * @return {!Array<number>}
 */
proto.pulsar.proto.CommandMessage.prototype.getAckSetList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.setAckSetList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.addAckSet = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandMessage} returns this
 */
proto.pulsar.proto.CommandMessage.prototype.clearAckSetList = function() {
  return this.setAckSetList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandAck.repeatedFields_ = [3,5];



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
proto.pulsar.proto.CommandAck.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ackType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    messageIdList: jspb.Message.toObjectList(msg.getMessageIdList(),
    proto.pulsar.proto.MessageIdData.toObject, includeInstance),
    validationError: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.pulsar.proto.KeyLongValue.toObject, includeInstance),
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 6, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 7, 0),
    requestId: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandAck}
 */
proto.pulsar.proto.CommandAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAck;
  return proto.pulsar.proto.CommandAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAck}
 */
proto.pulsar.proto.CommandAck.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.CommandAck.AckType} */ (reader.readEnum());
      msg.setAckType(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.addMessageId(value);
      break;
    case 4:
      var value = /** @type {!proto.pulsar.proto.CommandAck.ValidationError} */ (reader.readEnum());
      msg.setValidationError(value);
      break;
    case 5:
      var value = new proto.pulsar.proto.KeyLongValue;
      reader.readMessage(value,proto.pulsar.proto.KeyLongValue.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidLeastBits(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidMostBits(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
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
proto.pulsar.proto.CommandAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.CommandAck.AckType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMessageIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.pulsar.proto.CommandAck.ValidationError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pulsar.proto.KeyLongValue.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pulsar.proto.CommandAck.AckType = {
  INDIVIDUAL: 0,
  CUMULATIVE: 1
};

/**
 * @enum {number}
 */
proto.pulsar.proto.CommandAck.ValidationError = {
  UNCOMPRESSEDSIZECORRUPTION: 0,
  DECOMPRESSIONERROR: 1,
  CHECKSUMMISMATCH: 2,
  BATCHDESERIALIZEERROR: 3,
  DECRYPTIONERROR: 4
};

/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandAck.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAck.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required AckType ack_type = 2;
 * @return {!proto.pulsar.proto.CommandAck.AckType}
 */
proto.pulsar.proto.CommandAck.prototype.getAckType = function() {
  return /** @type {!proto.pulsar.proto.CommandAck.AckType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandAck.AckType} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.setAckType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearAckType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAck.prototype.hasAckType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated MessageIdData message_id = 3;
 * @return {!Array<!proto.pulsar.proto.MessageIdData>}
 */
proto.pulsar.proto.CommandAck.prototype.getMessageIdList = function() {
  return /** @type{!Array<!proto.pulsar.proto.MessageIdData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.MessageIdData, 3));
};


/**
 * @param {!Array<!proto.pulsar.proto.MessageIdData>} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
*/
proto.pulsar.proto.CommandAck.prototype.setMessageIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pulsar.proto.MessageIdData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandAck.prototype.addMessageId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pulsar.proto.MessageIdData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearMessageIdList = function() {
  return this.setMessageIdList([]);
};


/**
 * optional ValidationError validation_error = 4;
 * @return {!proto.pulsar.proto.CommandAck.ValidationError}
 */
proto.pulsar.proto.CommandAck.prototype.getValidationError = function() {
  return /** @type {!proto.pulsar.proto.CommandAck.ValidationError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandAck.ValidationError} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.setValidationError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearValidationError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAck.prototype.hasValidationError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated KeyLongValue properties = 5;
 * @return {!Array<!proto.pulsar.proto.KeyLongValue>}
 */
proto.pulsar.proto.CommandAck.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.pulsar.proto.KeyLongValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.KeyLongValue, 5));
};


/**
 * @param {!Array<!proto.pulsar.proto.KeyLongValue>} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
*/
proto.pulsar.proto.CommandAck.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pulsar.proto.KeyLongValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.KeyLongValue}
 */
proto.pulsar.proto.CommandAck.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pulsar.proto.KeyLongValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};


/**
 * optional uint64 txnid_least_bits = 6;
 * @return {number}
 */
proto.pulsar.proto.CommandAck.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAck.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 txnid_most_bits = 7;
 * @return {number}
 */
proto.pulsar.proto.CommandAck.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAck.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 request_id = 8;
 * @return {number}
 */
proto.pulsar.proto.CommandAck.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAck} returns this
 */
proto.pulsar.proto.CommandAck.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAck.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 8) != null;
};





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
proto.pulsar.proto.CommandAckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAckResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandAckResponse}
 */
proto.pulsar.proto.CommandAckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAckResponse;
  return proto.pulsar.proto.CommandAckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAckResponse}
 */
proto.pulsar.proto.CommandAckResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTxnidLeastBits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidMostBits(value);
      break;
    case 4:
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
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
proto.pulsar.proto.CommandAckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAckResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAckResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandAckResponse.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAckResponse.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandAckResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAckResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandAckResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAckResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandAckResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAckResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandAckResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAckResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 request_id = 6;
 * @return {number}
 */
proto.pulsar.proto.CommandAckResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAckResponse} returns this
 */
proto.pulsar.proto.CommandAckResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAckResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.pulsar.proto.CommandActiveConsumerChange.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandActiveConsumerChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandActiveConsumerChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandActiveConsumerChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.pulsar.proto.CommandActiveConsumerChange}
 */
proto.pulsar.proto.CommandActiveConsumerChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandActiveConsumerChange;
  return proto.pulsar.proto.CommandActiveConsumerChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandActiveConsumerChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandActiveConsumerChange}
 */
proto.pulsar.proto.CommandActiveConsumerChange.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
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
proto.pulsar.proto.CommandActiveConsumerChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandActiveConsumerChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandActiveConsumerChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandActiveConsumerChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandActiveConsumerChange} returns this
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandActiveConsumerChange} returns this
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_active = 2;
 * @return {boolean}
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandActiveConsumerChange} returns this
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.setIsActive = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandActiveConsumerChange} returns this
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.clearIsActive = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandActiveConsumerChange.prototype.hasIsActive = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandFlow.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandFlow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandFlow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandFlow.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    messagepermits: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandFlow}
 */
proto.pulsar.proto.CommandFlow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandFlow;
  return proto.pulsar.proto.CommandFlow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandFlow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandFlow}
 */
proto.pulsar.proto.CommandFlow.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMessagepermits(value);
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
proto.pulsar.proto.CommandFlow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandFlow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandFlow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandFlow.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandFlow.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandFlow} returns this
 */
proto.pulsar.proto.CommandFlow.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandFlow} returns this
 */
proto.pulsar.proto.CommandFlow.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandFlow.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 messagePermits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandFlow.prototype.getMessagepermits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandFlow} returns this
 */
proto.pulsar.proto.CommandFlow.prototype.setMessagepermits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandFlow} returns this
 */
proto.pulsar.proto.CommandFlow.prototype.clearMessagepermits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandFlow.prototype.hasMessagepermits = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandUnsubscribe.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandUnsubscribe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandUnsubscribe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandUnsubscribe.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandUnsubscribe}
 */
proto.pulsar.proto.CommandUnsubscribe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandUnsubscribe;
  return proto.pulsar.proto.CommandUnsubscribe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandUnsubscribe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandUnsubscribe}
 */
proto.pulsar.proto.CommandUnsubscribe.deserializeBinaryFromReader = function(msg, reader) {
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
proto.pulsar.proto.CommandUnsubscribe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandUnsubscribe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandUnsubscribe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandUnsubscribe.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandUnsubscribe} returns this
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandUnsubscribe} returns this
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandUnsubscribe} returns this
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandUnsubscribe} returns this
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandUnsubscribe.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandReachedEndOfTopic.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandReachedEndOfTopic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandReachedEndOfTopic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandReachedEndOfTopic.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandReachedEndOfTopic}
 */
proto.pulsar.proto.CommandReachedEndOfTopic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandReachedEndOfTopic;
  return proto.pulsar.proto.CommandReachedEndOfTopic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandReachedEndOfTopic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandReachedEndOfTopic}
 */
proto.pulsar.proto.CommandReachedEndOfTopic.deserializeBinaryFromReader = function(msg, reader) {
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
proto.pulsar.proto.CommandReachedEndOfTopic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandReachedEndOfTopic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandReachedEndOfTopic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandReachedEndOfTopic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandReachedEndOfTopic.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandReachedEndOfTopic} returns this
 */
proto.pulsar.proto.CommandReachedEndOfTopic.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandReachedEndOfTopic} returns this
 */
proto.pulsar.proto.CommandReachedEndOfTopic.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandReachedEndOfTopic.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};





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
proto.pulsar.proto.CommandCloseProducer.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandCloseProducer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandCloseProducer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandCloseProducer.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandCloseProducer}
 */
proto.pulsar.proto.CommandCloseProducer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandCloseProducer;
  return proto.pulsar.proto.CommandCloseProducer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandCloseProducer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandCloseProducer}
 */
proto.pulsar.proto.CommandCloseProducer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProducerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
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
proto.pulsar.proto.CommandCloseProducer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandCloseProducer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandCloseProducer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandCloseProducer.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * required uint64 producer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandCloseProducer.prototype.getProducerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandCloseProducer} returns this
 */
proto.pulsar.proto.CommandCloseProducer.prototype.setProducerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandCloseProducer} returns this
 */
proto.pulsar.proto.CommandCloseProducer.prototype.clearProducerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandCloseProducer.prototype.hasProducerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandCloseProducer.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandCloseProducer} returns this
 */
proto.pulsar.proto.CommandCloseProducer.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandCloseProducer} returns this
 */
proto.pulsar.proto.CommandCloseProducer.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandCloseProducer.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandCloseConsumer.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandCloseConsumer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandCloseConsumer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandCloseConsumer.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandCloseConsumer}
 */
proto.pulsar.proto.CommandCloseConsumer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandCloseConsumer;
  return proto.pulsar.proto.CommandCloseConsumer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandCloseConsumer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandCloseConsumer}
 */
proto.pulsar.proto.CommandCloseConsumer.deserializeBinaryFromReader = function(msg, reader) {
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
proto.pulsar.proto.CommandCloseConsumer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandCloseConsumer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandCloseConsumer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandCloseConsumer.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandCloseConsumer} returns this
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandCloseConsumer} returns this
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandCloseConsumer} returns this
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandCloseConsumer} returns this
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandCloseConsumer.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.repeatedFields_ = [2];



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
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    messageIdsList: jspb.Message.toObjectList(msg.getMessageIdsList(),
    proto.pulsar.proto.MessageIdData.toObject, includeInstance)
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
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages;
  return proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.addMessageIds(value);
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
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMessageIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MessageIdData message_ids = 2;
 * @return {!Array<!proto.pulsar.proto.MessageIdData>}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.getMessageIdsList = function() {
  return /** @type{!Array<!proto.pulsar.proto.MessageIdData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.MessageIdData, 2));
};


/**
 * @param {!Array<!proto.pulsar.proto.MessageIdData>} value
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
*/
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.setMessageIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pulsar.proto.MessageIdData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.addMessageIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pulsar.proto.MessageIdData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.clearMessageIdsList = function() {
  return this.setMessageIdsList([]);
};





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
proto.pulsar.proto.CommandSuccess.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandSuccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandSuccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSuccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    schema: (f = msg.getSchema()) && proto.pulsar.proto.Schema.toObject(includeInstance, f)
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
 * @return {!proto.pulsar.proto.CommandSuccess}
 */
proto.pulsar.proto.CommandSuccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandSuccess;
  return proto.pulsar.proto.CommandSuccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandSuccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandSuccess}
 */
proto.pulsar.proto.CommandSuccess.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.pulsar.proto.Schema;
      reader.readMessage(value,proto.pulsar.proto.Schema.deserializeBinaryFromReader);
      msg.setSchema(value);
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
proto.pulsar.proto.CommandSuccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandSuccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandSuccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSuccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pulsar.proto.Schema.serializeBinaryToWriter
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandSuccess.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSuccess} returns this
 */
proto.pulsar.proto.CommandSuccess.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSuccess} returns this
 */
proto.pulsar.proto.CommandSuccess.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSuccess.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Schema schema = 2;
 * @return {?proto.pulsar.proto.Schema}
 */
proto.pulsar.proto.CommandSuccess.prototype.getSchema = function() {
  return /** @type{?proto.pulsar.proto.Schema} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.Schema, 2));
};


/**
 * @param {?proto.pulsar.proto.Schema|undefined} value
 * @return {!proto.pulsar.proto.CommandSuccess} returns this
*/
proto.pulsar.proto.CommandSuccess.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandSuccess} returns this
 */
proto.pulsar.proto.CommandSuccess.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSuccess.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandProducerSuccess.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandProducerSuccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandProducerSuccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandProducerSuccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    producerName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    lastSequenceId: jspb.Message.getFieldWithDefault(msg, 3, -1),
    schemaVersion: msg.getSchemaVersion_asB64(),
    topicEpoch: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    producerReady: jspb.Message.getBooleanFieldWithDefault(msg, 6, true)
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
 * @return {!proto.pulsar.proto.CommandProducerSuccess}
 */
proto.pulsar.proto.CommandProducerSuccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandProducerSuccess;
  return proto.pulsar.proto.CommandProducerSuccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandProducerSuccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandProducerSuccess}
 */
proto.pulsar.proto.CommandProducerSuccess.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProducerName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastSequenceId(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSchemaVersion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTopicEpoch(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProducerReady(value);
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
proto.pulsar.proto.CommandProducerSuccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandProducerSuccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandProducerSuccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandProducerSuccess.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string producer_name = 2;
 * @return {string}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getProducerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.setProducerName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.clearProducerName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.hasProducerName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 last_sequence_id = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getLastSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, -1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.setLastSequenceId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.clearLastSequenceId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.hasLastSequenceId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes schema_version = 4;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getSchemaVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes schema_version = 4;
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {string}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getSchemaVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSchemaVersion()));
};


/**
 * optional bytes schema_version = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getSchemaVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSchemaVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.setSchemaVersion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.clearSchemaVersion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.hasSchemaVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 topic_epoch = 5;
 * @return {number}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getTopicEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.setTopicEpoch = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.clearTopicEpoch = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.hasTopicEpoch = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool producer_ready = 6;
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.getProducerReady = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, true));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.setProducerReady = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandProducerSuccess} returns this
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.clearProducerReady = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandProducerSuccess.prototype.hasProducerReady = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.pulsar.proto.CommandError.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandError.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    error: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandError}
 */
proto.pulsar.proto.CommandError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandError;
  return proto.pulsar.proto.CommandError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandError}
 */
proto.pulsar.proto.CommandError.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandError.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandError} returns this
 */
proto.pulsar.proto.CommandError.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandError} returns this
 */
proto.pulsar.proto.CommandError.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandError.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required ServerError error = 2;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandError.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandError} returns this
 */
proto.pulsar.proto.CommandError.prototype.setError = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandError} returns this
 */
proto.pulsar.proto.CommandError.prototype.clearError = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandError.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string message = 3;
 * @return {string}
 */
proto.pulsar.proto.CommandError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandError} returns this
 */
proto.pulsar.proto.CommandError.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandError} returns this
 */
proto.pulsar.proto.CommandError.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandError.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.pulsar.proto.CommandPing.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandPing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandPing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPing.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.pulsar.proto.CommandPing}
 */
proto.pulsar.proto.CommandPing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandPing;
  return proto.pulsar.proto.CommandPing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandPing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandPing}
 */
proto.pulsar.proto.CommandPing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.pulsar.proto.CommandPing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandPing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandPing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





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
proto.pulsar.proto.CommandPong.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandPong.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandPong} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPong.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.pulsar.proto.CommandPong}
 */
proto.pulsar.proto.CommandPong.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandPong;
  return proto.pulsar.proto.CommandPong.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandPong} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandPong}
 */
proto.pulsar.proto.CommandPong.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.pulsar.proto.CommandPong.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandPong.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandPong} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPong.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





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
proto.pulsar.proto.CommandConsumerStats.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandConsumerStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandConsumerStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConsumerStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    consumerId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandConsumerStats}
 */
proto.pulsar.proto.CommandConsumerStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandConsumerStats;
  return proto.pulsar.proto.CommandConsumerStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandConsumerStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandConsumerStats}
 */
proto.pulsar.proto.CommandConsumerStats.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConsumerId(value);
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
proto.pulsar.proto.CommandConsumerStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandConsumerStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandConsumerStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConsumerStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
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
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStats.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStats} returns this
 */
proto.pulsar.proto.CommandConsumerStats.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStats} returns this
 */
proto.pulsar.proto.CommandConsumerStats.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStats.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 consumer_id = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStats.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStats} returns this
 */
proto.pulsar.proto.CommandConsumerStats.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStats} returns this
 */
proto.pulsar.proto.CommandConsumerStats.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStats.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandConsumerStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandConsumerStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConsumerStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    errorCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    errorMessage: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    msgrateout: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    msgthroughputout: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    msgrateredeliver: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    consumername: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    availablepermits: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    unackedmessages: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    blockedconsumeronunackedmsgs: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    address: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    connectedsince: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    msgrateexpired: (f = jspb.Message.getOptionalFloatingPointField(msg, 14)) == null ? undefined : f,
    msgbacklog: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandConsumerStatsResponse;
  return proto.pulsar.proto.CommandConsumerStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandConsumerStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setErrorCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMsgrateout(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMsgthroughputout(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMsgrateredeliver(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumername(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailablepermits(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnackedmessages(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockedconsumeronunackedmsgs(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectedsince(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMsgrateexpired(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMsgbacklog(value);
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
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandConsumerStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandConsumerStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandConsumerStatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeUint64(
      15,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServerError error_code = 2;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getErrorCode = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setErrorCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearErrorCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasErrorCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double msgRateOut = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getMsgrateout = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setMsgrateout = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearMsgrateout = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasMsgrateout = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double msgThroughputOut = 5;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getMsgthroughputout = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setMsgthroughputout = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearMsgthroughputout = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasMsgthroughputout = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double msgRateRedeliver = 6;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getMsgrateredeliver = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setMsgrateredeliver = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearMsgrateredeliver = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasMsgrateredeliver = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string consumerName = 7;
 * @return {string}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getConsumername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setConsumername = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearConsumername = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasConsumername = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 availablePermits = 8;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getAvailablepermits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setAvailablepermits = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearAvailablepermits = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasAvailablepermits = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 unackedMessages = 9;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getUnackedmessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setUnackedmessages = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearUnackedmessages = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasUnackedmessages = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool blockedConsumerOnUnackedMsgs = 10;
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getBlockedconsumeronunackedmsgs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setBlockedconsumeronunackedmsgs = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearBlockedconsumeronunackedmsgs = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasBlockedconsumeronunackedmsgs = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string address = 11;
 * @return {string}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setAddress = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearAddress = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string connectedSince = 12;
 * @return {string}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getConnectedsince = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setConnectedsince = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearConnectedsince = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasConnectedsince = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string type = 13;
 * @return {string}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setType = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearType = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasType = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double msgRateExpired = 14;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getMsgrateexpired = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setMsgrateexpired = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearMsgrateexpired = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasMsgrateexpired = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint64 msgBacklog = 15;
 * @return {number}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.getMsgbacklog = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.setMsgbacklog = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandConsumerStatsResponse} returns this
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.clearMsgbacklog = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandConsumerStatsResponse.prototype.hasMsgbacklog = function() {
  return jspb.Message.getField(this, 15) != null;
};





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
proto.pulsar.proto.CommandGetLastMessageId.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetLastMessageId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetLastMessageId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetLastMessageId.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandGetLastMessageId}
 */
proto.pulsar.proto.CommandGetLastMessageId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetLastMessageId;
  return proto.pulsar.proto.CommandGetLastMessageId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetLastMessageId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetLastMessageId}
 */
proto.pulsar.proto.CommandGetLastMessageId.deserializeBinaryFromReader = function(msg, reader) {
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
proto.pulsar.proto.CommandGetLastMessageId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetLastMessageId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetLastMessageId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetLastMessageId.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageId} returns this
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageId} returns this
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageId} returns this
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageId} returns this
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageId.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetLastMessageIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetLastMessageIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastMessageId: (f = msg.getLastMessageId()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f),
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    consumerMarkDeletePosition: (f = msg.getConsumerMarkDeletePosition()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f)
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
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetLastMessageIdResponse;
  return proto.pulsar.proto.CommandGetLastMessageIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetLastMessageIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setLastMessageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setConsumerMarkDeletePosition(value);
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
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetLastMessageIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetLastMessageIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastMessageId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getConsumerMarkDeletePosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
};


/**
 * required MessageIdData last_message_id = 1;
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.getLastMessageId = function() {
  return /** @type{!proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 1, 1));
};


/**
 * @param {!proto.pulsar.proto.MessageIdData} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
*/
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.setLastMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.clearLastMessageId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.hasLastMessageId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageIdData consumer_mark_delete_position = 3;
 * @return {?proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.getConsumerMarkDeletePosition = function() {
  return /** @type{?proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 3));
};


/**
 * @param {?proto.pulsar.proto.MessageIdData|undefined} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
*/
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.setConsumerMarkDeletePosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.clearConsumerMarkDeletePosition = function() {
  return this.setConsumerMarkDeletePosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.hasConsumerMarkDeletePosition = function() {
  return jspb.Message.getField(this, 3) != null;
};





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



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.repeatedFields_ = [2];



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
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    topicsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse;
  return proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addTopics(value);
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
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string topics = 2;
 * @return {!Array<string>}
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.getTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.setTopicsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.addTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} returns this
 */
proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.prototype.clearTopicsList = function() {
  return this.setTopicsList([]);
};





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
proto.pulsar.proto.CommandGetSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    topic: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    schemaVersion: msg.getSchemaVersion_asB64()
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
 * @return {!proto.pulsar.proto.CommandGetSchema}
 */
proto.pulsar.proto.CommandGetSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetSchema;
  return proto.pulsar.proto.CommandGetSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetSchema}
 */
proto.pulsar.proto.CommandGetSchema.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTopic(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSchemaVersion(value);
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
proto.pulsar.proto.CommandGetSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetSchema.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandGetSchema.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetSchema} returns this
 */
proto.pulsar.proto.CommandGetSchema.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchema} returns this
 */
proto.pulsar.proto.CommandGetSchema.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchema.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string topic = 2;
 * @return {string}
 */
proto.pulsar.proto.CommandGetSchema.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandGetSchema} returns this
 */
proto.pulsar.proto.CommandGetSchema.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchema} returns this
 */
proto.pulsar.proto.CommandGetSchema.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchema.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes schema_version = 3;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.CommandGetSchema.prototype.getSchemaVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes schema_version = 3;
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {string}
 */
proto.pulsar.proto.CommandGetSchema.prototype.getSchemaVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSchemaVersion()));
};


/**
 * optional bytes schema_version = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.CommandGetSchema.prototype.getSchemaVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSchemaVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.CommandGetSchema} returns this
 */
proto.pulsar.proto.CommandGetSchema.prototype.setSchemaVersion = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchema} returns this
 */
proto.pulsar.proto.CommandGetSchema.prototype.clearSchemaVersion = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchema.prototype.hasSchemaVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.pulsar.proto.CommandGetSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    errorCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    errorMessage: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    schema: (f = msg.getSchema()) && proto.pulsar.proto.Schema.toObject(includeInstance, f),
    schemaVersion: msg.getSchemaVersion_asB64()
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
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse}
 */
proto.pulsar.proto.CommandGetSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetSchemaResponse;
  return proto.pulsar.proto.CommandGetSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse}
 */
proto.pulsar.proto.CommandGetSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setErrorCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 4:
      var value = new proto.pulsar.proto.Schema;
      reader.readMessage(value,proto.pulsar.proto.Schema.deserializeBinaryFromReader);
      msg.setSchema(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSchemaVersion(value);
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
proto.pulsar.proto.CommandGetSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pulsar.proto.Schema.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServerError error_code = 2;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.getErrorCode = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.setErrorCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.clearErrorCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.hasErrorCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Schema schema = 4;
 * @return {?proto.pulsar.proto.Schema}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.getSchema = function() {
  return /** @type{?proto.pulsar.proto.Schema} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.Schema, 4));
};


/**
 * @param {?proto.pulsar.proto.Schema|undefined} value
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
*/
proto.pulsar.proto.CommandGetSchemaResponse.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.clearSchema = function() {
  return this.setSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes schema_version = 5;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.getSchemaVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes schema_version = 5;
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {string}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.getSchemaVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSchemaVersion()));
};


/**
 * optional bytes schema_version = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.getSchemaVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSchemaVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.setSchemaVersion = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.clearSchemaVersion = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetSchemaResponse.prototype.hasSchemaVersion = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetOrCreateSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetOrCreateSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetOrCreateSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    topic: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    schema: (f = msg.getSchema()) && proto.pulsar.proto.Schema.toObject(includeInstance, f)
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
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetOrCreateSchema;
  return proto.pulsar.proto.CommandGetOrCreateSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetOrCreateSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTopic(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.Schema;
      reader.readMessage(value,proto.pulsar.proto.Schema.deserializeBinaryFromReader);
      msg.setSchema(value);
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
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetOrCreateSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetOrCreateSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetOrCreateSchema.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSchema();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pulsar.proto.Schema.serializeBinaryToWriter
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string topic = 2;
 * @return {string}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required Schema schema = 3;
 * @return {!proto.pulsar.proto.Schema}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.getSchema = function() {
  return /** @type{!proto.pulsar.proto.Schema} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.Schema, 3, 1));
};


/**
 * @param {!proto.pulsar.proto.Schema} value
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema} returns this
*/
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.setSchema = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchema} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.clearSchema = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetOrCreateSchema.prototype.hasSchema = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetOrCreateSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    errorCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    errorMessage: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    schemaVersion: msg.getSchemaVersion_asB64()
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
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetOrCreateSchemaResponse;
  return proto.pulsar.proto.CommandGetOrCreateSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setErrorCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSchemaVersion(value);
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
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetOrCreateSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ServerError error_code = 2;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.getErrorCode = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.setErrorCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.clearErrorCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.hasErrorCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes schema_version = 4;
 * @return {!(string|Uint8Array)}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.getSchemaVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes schema_version = 4;
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {string}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.getSchemaVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSchemaVersion()));
};


/**
 * optional bytes schema_version = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSchemaVersion()`
 * @return {!Uint8Array}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.getSchemaVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSchemaVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.setSchemaVersion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetOrCreateSchemaResponse} returns this
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.clearSchemaVersion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetOrCreateSchemaResponse.prototype.hasSchemaVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.pulsar.proto.CommandNewTxn.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandNewTxn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandNewTxn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandNewTxn.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnTtlSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tcId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pulsar.proto.CommandNewTxn}
 */
proto.pulsar.proto.CommandNewTxn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandNewTxn;
  return proto.pulsar.proto.CommandNewTxn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandNewTxn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandNewTxn}
 */
proto.pulsar.proto.CommandNewTxn.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTxnTtlSeconds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTcId(value);
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
proto.pulsar.proto.CommandNewTxn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandNewTxn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandNewTxn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandNewTxn.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandNewTxn.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandNewTxn} returns this
 */
proto.pulsar.proto.CommandNewTxn.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxn} returns this
 */
proto.pulsar.proto.CommandNewTxn.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxn.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txn_ttl_seconds = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandNewTxn.prototype.getTxnTtlSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandNewTxn} returns this
 */
proto.pulsar.proto.CommandNewTxn.prototype.setTxnTtlSeconds = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxn} returns this
 */
proto.pulsar.proto.CommandNewTxn.prototype.clearTxnTtlSeconds = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxn.prototype.hasTxnTtlSeconds = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 tc_id = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandNewTxn.prototype.getTcId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandNewTxn} returns this
 */
proto.pulsar.proto.CommandNewTxn.prototype.setTcId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxn} returns this
 */
proto.pulsar.proto.CommandNewTxn.prototype.clearTcId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxn.prototype.hasTcId = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.pulsar.proto.CommandNewTxnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandNewTxnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandNewTxnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandNewTxnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandNewTxnResponse}
 */
proto.pulsar.proto.CommandNewTxnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandNewTxnResponse;
  return proto.pulsar.proto.CommandNewTxnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandNewTxnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandNewTxnResponse}
 */
proto.pulsar.proto.CommandNewTxnResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandNewTxnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandNewTxnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandNewTxnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandNewTxnResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandNewTxnResponse} returns this
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandNewTxnResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandAddPartitionToTxn.repeatedFields_ = [4];



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
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAddPartitionToTxn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAddPartitionToTxn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddPartitionToTxn.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    partitionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAddPartitionToTxn;
  return proto.pulsar.proto.CommandAddPartitionToTxn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAddPartitionToTxn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.addPartitions(value);
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
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAddPartitionToTxn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAddPartitionToTxn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddPartitionToTxn.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPartitionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string partitions = 4;
 * @return {!Array<string>}
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.getPartitionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.setPartitionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.addPartitions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxn} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxn.prototype.clearPartitionsList = function() {
  return this.setPartitionsList([]);
};





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
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAddPartitionToTxnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAddPartitionToTxnResponse;
  return proto.pulsar.proto.CommandAddPartitionToTxnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAddPartitionToTxnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddPartitionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddPartitionToTxnResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.Subscription.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.Subscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.Subscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.Subscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    subscription: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.Subscription}
 */
proto.pulsar.proto.Subscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.Subscription;
  return proto.pulsar.proto.Subscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.Subscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.Subscription}
 */
proto.pulsar.proto.Subscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscription(value);
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
proto.pulsar.proto.Subscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.Subscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.Subscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.Subscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
};


/**
 * required string topic = 1;
 * @return {string}
 */
proto.pulsar.proto.Subscription.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.Subscription} returns this
 */
proto.pulsar.proto.Subscription.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.Subscription} returns this
 */
proto.pulsar.proto.Subscription.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.Subscription.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string subscription = 2;
 * @return {string}
 */
proto.pulsar.proto.Subscription.prototype.getSubscription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.Subscription} returns this
 */
proto.pulsar.proto.Subscription.prototype.setSubscription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.Subscription} returns this
 */
proto.pulsar.proto.Subscription.prototype.clearSubscription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.Subscription.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.repeatedFields_ = [4];



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
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAddSubscriptionToTxn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAddSubscriptionToTxn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    subscriptionList: jspb.Message.toObjectList(msg.getSubscriptionList(),
    proto.pulsar.proto.Subscription.toObject, includeInstance)
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
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAddSubscriptionToTxn;
  return proto.pulsar.proto.CommandAddSubscriptionToTxn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAddSubscriptionToTxn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addSubscription(value);
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
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAddSubscriptionToTxn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAddSubscriptionToTxn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSubscriptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pulsar.proto.Subscription.serializeBinaryToWriter
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Subscription subscription = 4;
 * @return {!Array<!proto.pulsar.proto.Subscription>}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.getSubscriptionList = function() {
  return /** @type{!Array<!proto.pulsar.proto.Subscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.Subscription, 4));
};


/**
 * @param {!Array<!proto.pulsar.proto.Subscription>} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
*/
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.setSubscriptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pulsar.proto.Subscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.Subscription}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.addSubscription = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pulsar.proto.Subscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxn} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxn.prototype.clearSubscriptionList = function() {
  return this.setSubscriptionList([]);
};





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
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandAddSubscriptionToTxnResponse;
  return proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} returns this
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.CommandEndTxn.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandEndTxn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandEndTxn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxn.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    txnAction: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandEndTxn}
 */
proto.pulsar.proto.CommandEndTxn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandEndTxn;
  return proto.pulsar.proto.CommandEndTxn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandEndTxn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandEndTxn}
 */
proto.pulsar.proto.CommandEndTxn.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.TxnAction} */ (reader.readEnum());
      msg.setTxnAction(value);
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
proto.pulsar.proto.CommandEndTxn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandEndTxn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandEndTxn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxn.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.TxnAction} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxn.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxn.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxn.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxn.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxn.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxn.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TxnAction txn_action = 4;
 * @return {!proto.pulsar.proto.TxnAction}
 */
proto.pulsar.proto.CommandEndTxn.prototype.getTxnAction = function() {
  return /** @type {!proto.pulsar.proto.TxnAction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.TxnAction} value
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.setTxnAction = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxn} returns this
 */
proto.pulsar.proto.CommandEndTxn.prototype.clearTxnAction = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxn.prototype.hasTxnAction = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.pulsar.proto.CommandEndTxnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandEndTxnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandEndTxnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandEndTxnResponse}
 */
proto.pulsar.proto.CommandEndTxnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandEndTxnResponse;
  return proto.pulsar.proto.CommandEndTxnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandEndTxnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandEndTxnResponse}
 */
proto.pulsar.proto.CommandEndTxnResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandEndTxnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandEndTxnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandEndTxnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandEndTxnOnPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    topic: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
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
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandEndTxnOnPartition;
  return proto.pulsar.proto.CommandEndTxnOnPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
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
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandEndTxnOnPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnPartition.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
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
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string topic = 4;
 * @return {string}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TxnAction txn_action = 5;
 * @return {!proto.pulsar.proto.TxnAction}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.getTxnAction = function() {
  return /** @type {!proto.pulsar.proto.TxnAction} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pulsar.proto.TxnAction} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.setTxnAction = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.clearTxnAction = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.hasTxnAction = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 txnid_least_bits_of_low_watermark = 6;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.getTxnidLeastBitsOfLowWatermark = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.setTxnidLeastBitsOfLowWatermark = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartition} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.clearTxnidLeastBitsOfLowWatermark = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartition.prototype.hasTxnidLeastBitsOfLowWatermark = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandEndTxnOnPartitionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandEndTxnOnPartitionResponse;
  return proto.pulsar.proto.CommandEndTxnOnPartitionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandEndTxnOnPartitionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse;
  return proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.pulsar.proto.BaseCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.BaseCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.BaseCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.BaseCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    connect: (f = msg.getConnect()) && proto.pulsar.proto.CommandConnect.toObject(includeInstance, f),
    connected: (f = msg.getConnected()) && proto.pulsar.proto.CommandConnected.toObject(includeInstance, f),
    subscribe: (f = msg.getSubscribe()) && proto.pulsar.proto.CommandSubscribe.toObject(includeInstance, f),
    producer: (f = msg.getProducer()) && proto.pulsar.proto.CommandProducer.toObject(includeInstance, f),
    send: (f = msg.getSend()) && proto.pulsar.proto.CommandSend.toObject(includeInstance, f),
    sendReceipt: (f = msg.getSendReceipt()) && proto.pulsar.proto.CommandSendReceipt.toObject(includeInstance, f),
    sendError: (f = msg.getSendError()) && proto.pulsar.proto.CommandSendError.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.pulsar.proto.CommandMessage.toObject(includeInstance, f),
    ack: (f = msg.getAck()) && proto.pulsar.proto.CommandAck.toObject(includeInstance, f),
    flow: (f = msg.getFlow()) && proto.pulsar.proto.CommandFlow.toObject(includeInstance, f),
    unsubscribe: (f = msg.getUnsubscribe()) && proto.pulsar.proto.CommandUnsubscribe.toObject(includeInstance, f),
    success: (f = msg.getSuccess()) && proto.pulsar.proto.CommandSuccess.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.pulsar.proto.CommandError.toObject(includeInstance, f),
    closeProducer: (f = msg.getCloseProducer()) && proto.pulsar.proto.CommandCloseProducer.toObject(includeInstance, f),
    closeConsumer: (f = msg.getCloseConsumer()) && proto.pulsar.proto.CommandCloseConsumer.toObject(includeInstance, f),
    producerSuccess: (f = msg.getProducerSuccess()) && proto.pulsar.proto.CommandProducerSuccess.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.pulsar.proto.CommandPing.toObject(includeInstance, f),
    pong: (f = msg.getPong()) && proto.pulsar.proto.CommandPong.toObject(includeInstance, f),
    redeliverunacknowledgedmessages: (f = msg.getRedeliverunacknowledgedmessages()) && proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.toObject(includeInstance, f),
    partitionmetadata: (f = msg.getPartitionmetadata()) && proto.pulsar.proto.CommandPartitionedTopicMetadata.toObject(includeInstance, f),
    partitionmetadataresponse: (f = msg.getPartitionmetadataresponse()) && proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.toObject(includeInstance, f),
    lookuptopic: (f = msg.getLookuptopic()) && proto.pulsar.proto.CommandLookupTopic.toObject(includeInstance, f),
    lookuptopicresponse: (f = msg.getLookuptopicresponse()) && proto.pulsar.proto.CommandLookupTopicResponse.toObject(includeInstance, f),
    consumerstats: (f = msg.getConsumerstats()) && proto.pulsar.proto.CommandConsumerStats.toObject(includeInstance, f),
    consumerstatsresponse: (f = msg.getConsumerstatsresponse()) && proto.pulsar.proto.CommandConsumerStatsResponse.toObject(includeInstance, f),
    reachedendoftopic: (f = msg.getReachedendoftopic()) && proto.pulsar.proto.CommandReachedEndOfTopic.toObject(includeInstance, f),
    seek: (f = msg.getSeek()) && proto.pulsar.proto.CommandSeek.toObject(includeInstance, f),
    getlastmessageid: (f = msg.getGetlastmessageid()) && proto.pulsar.proto.CommandGetLastMessageId.toObject(includeInstance, f),
    getlastmessageidresponse: (f = msg.getGetlastmessageidresponse()) && proto.pulsar.proto.CommandGetLastMessageIdResponse.toObject(includeInstance, f),
    activeConsumerChange: (f = msg.getActiveConsumerChange()) && proto.pulsar.proto.CommandActiveConsumerChange.toObject(includeInstance, f),
    gettopicsofnamespace: (f = msg.getGettopicsofnamespace()) && proto.pulsar.proto.CommandGetTopicsOfNamespace.toObject(includeInstance, f),
    gettopicsofnamespaceresponse: (f = msg.getGettopicsofnamespaceresponse()) && proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.toObject(includeInstance, f),
    getschema: (f = msg.getGetschema()) && proto.pulsar.proto.CommandGetSchema.toObject(includeInstance, f),
    getschemaresponse: (f = msg.getGetschemaresponse()) && proto.pulsar.proto.CommandGetSchemaResponse.toObject(includeInstance, f),
    authchallenge: (f = msg.getAuthchallenge()) && proto.pulsar.proto.CommandAuthChallenge.toObject(includeInstance, f),
    authresponse: (f = msg.getAuthresponse()) && proto.pulsar.proto.CommandAuthResponse.toObject(includeInstance, f),
    ackresponse: (f = msg.getAckresponse()) && proto.pulsar.proto.CommandAckResponse.toObject(includeInstance, f),
    getorcreateschema: (f = msg.getGetorcreateschema()) && proto.pulsar.proto.CommandGetOrCreateSchema.toObject(includeInstance, f),
    getorcreateschemaresponse: (f = msg.getGetorcreateschemaresponse()) && proto.pulsar.proto.CommandGetOrCreateSchemaResponse.toObject(includeInstance, f),
    newtxn: (f = msg.getNewtxn()) && proto.pulsar.proto.CommandNewTxn.toObject(includeInstance, f),
    newtxnresponse: (f = msg.getNewtxnresponse()) && proto.pulsar.proto.CommandNewTxnResponse.toObject(includeInstance, f),
    addpartitiontotxn: (f = msg.getAddpartitiontotxn()) && proto.pulsar.proto.CommandAddPartitionToTxn.toObject(includeInstance, f),
    addpartitiontotxnresponse: (f = msg.getAddpartitiontotxnresponse()) && proto.pulsar.proto.CommandAddPartitionToTxnResponse.toObject(includeInstance, f),
    addsubscriptiontotxn: (f = msg.getAddsubscriptiontotxn()) && proto.pulsar.proto.CommandAddSubscriptionToTxn.toObject(includeInstance, f),
    addsubscriptiontotxnresponse: (f = msg.getAddsubscriptiontotxnresponse()) && proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.toObject(includeInstance, f),
    endtxn: (f = msg.getEndtxn()) && proto.pulsar.proto.CommandEndTxn.toObject(includeInstance, f),
    endtxnresponse: (f = msg.getEndtxnresponse()) && proto.pulsar.proto.CommandEndTxnResponse.toObject(includeInstance, f),
    endtxnonpartition: (f = msg.getEndtxnonpartition()) && proto.pulsar.proto.CommandEndTxnOnPartition.toObject(includeInstance, f),
    endtxnonpartitionresponse: (f = msg.getEndtxnonpartitionresponse()) && proto.pulsar.proto.CommandEndTxnOnPartitionResponse.toObject(includeInstance, f),
    endtxnonsubscription: (f = msg.getEndtxnonsubscription()) && proto.pulsar.proto.CommandEndTxnOnSubscription.toObject(includeInstance, f),
    endtxnonsubscriptionresponse: (f = msg.getEndtxnonsubscriptionresponse()) && proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.toObject(includeInstance, f)
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
 * @return {!proto.pulsar.proto.BaseCommand}
 */
proto.pulsar.proto.BaseCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.BaseCommand;
  return proto.pulsar.proto.BaseCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.BaseCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.BaseCommand}
 */
proto.pulsar.proto.BaseCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pulsar.proto.BaseCommand.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.pulsar.proto.CommandConnect;
      reader.readMessage(value,proto.pulsar.proto.CommandConnect.deserializeBinaryFromReader);
      msg.setConnect(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.CommandConnected;
      reader.readMessage(value,proto.pulsar.proto.CommandConnected.deserializeBinaryFromReader);
      msg.setConnected(value);
      break;
    case 4:
      var value = new proto.pulsar.proto.CommandSubscribe;
      reader.readMessage(value,proto.pulsar.proto.CommandSubscribe.deserializeBinaryFromReader);
      msg.setSubscribe(value);
      break;
    case 5:
      var value = new proto.pulsar.proto.CommandProducer;
      reader.readMessage(value,proto.pulsar.proto.CommandProducer.deserializeBinaryFromReader);
      msg.setProducer(value);
      break;
    case 6:
      var value = new proto.pulsar.proto.CommandSend;
      reader.readMessage(value,proto.pulsar.proto.CommandSend.deserializeBinaryFromReader);
      msg.setSend(value);
      break;
    case 7:
      var value = new proto.pulsar.proto.CommandSendReceipt;
      reader.readMessage(value,proto.pulsar.proto.CommandSendReceipt.deserializeBinaryFromReader);
      msg.setSendReceipt(value);
      break;
    case 8:
      var value = new proto.pulsar.proto.CommandSendError;
      reader.readMessage(value,proto.pulsar.proto.CommandSendError.deserializeBinaryFromReader);
      msg.setSendError(value);
      break;
    case 9:
      var value = new proto.pulsar.proto.CommandMessage;
      reader.readMessage(value,proto.pulsar.proto.CommandMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 10:
      var value = new proto.pulsar.proto.CommandAck;
      reader.readMessage(value,proto.pulsar.proto.CommandAck.deserializeBinaryFromReader);
      msg.setAck(value);
      break;
    case 11:
      var value = new proto.pulsar.proto.CommandFlow;
      reader.readMessage(value,proto.pulsar.proto.CommandFlow.deserializeBinaryFromReader);
      msg.setFlow(value);
      break;
    case 12:
      var value = new proto.pulsar.proto.CommandUnsubscribe;
      reader.readMessage(value,proto.pulsar.proto.CommandUnsubscribe.deserializeBinaryFromReader);
      msg.setUnsubscribe(value);
      break;
    case 13:
      var value = new proto.pulsar.proto.CommandSuccess;
      reader.readMessage(value,proto.pulsar.proto.CommandSuccess.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    case 14:
      var value = new proto.pulsar.proto.CommandError;
      reader.readMessage(value,proto.pulsar.proto.CommandError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 15:
      var value = new proto.pulsar.proto.CommandCloseProducer;
      reader.readMessage(value,proto.pulsar.proto.CommandCloseProducer.deserializeBinaryFromReader);
      msg.setCloseProducer(value);
      break;
    case 16:
      var value = new proto.pulsar.proto.CommandCloseConsumer;
      reader.readMessage(value,proto.pulsar.proto.CommandCloseConsumer.deserializeBinaryFromReader);
      msg.setCloseConsumer(value);
      break;
    case 17:
      var value = new proto.pulsar.proto.CommandProducerSuccess;
      reader.readMessage(value,proto.pulsar.proto.CommandProducerSuccess.deserializeBinaryFromReader);
      msg.setProducerSuccess(value);
      break;
    case 18:
      var value = new proto.pulsar.proto.CommandPing;
      reader.readMessage(value,proto.pulsar.proto.CommandPing.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 19:
      var value = new proto.pulsar.proto.CommandPong;
      reader.readMessage(value,proto.pulsar.proto.CommandPong.deserializeBinaryFromReader);
      msg.setPong(value);
      break;
    case 20:
      var value = new proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages;
      reader.readMessage(value,proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.deserializeBinaryFromReader);
      msg.setRedeliverunacknowledgedmessages(value);
      break;
    case 21:
      var value = new proto.pulsar.proto.CommandPartitionedTopicMetadata;
      reader.readMessage(value,proto.pulsar.proto.CommandPartitionedTopicMetadata.deserializeBinaryFromReader);
      msg.setPartitionmetadata(value);
      break;
    case 22:
      var value = new proto.pulsar.proto.CommandPartitionedTopicMetadataResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.deserializeBinaryFromReader);
      msg.setPartitionmetadataresponse(value);
      break;
    case 23:
      var value = new proto.pulsar.proto.CommandLookupTopic;
      reader.readMessage(value,proto.pulsar.proto.CommandLookupTopic.deserializeBinaryFromReader);
      msg.setLookuptopic(value);
      break;
    case 24:
      var value = new proto.pulsar.proto.CommandLookupTopicResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandLookupTopicResponse.deserializeBinaryFromReader);
      msg.setLookuptopicresponse(value);
      break;
    case 25:
      var value = new proto.pulsar.proto.CommandConsumerStats;
      reader.readMessage(value,proto.pulsar.proto.CommandConsumerStats.deserializeBinaryFromReader);
      msg.setConsumerstats(value);
      break;
    case 26:
      var value = new proto.pulsar.proto.CommandConsumerStatsResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandConsumerStatsResponse.deserializeBinaryFromReader);
      msg.setConsumerstatsresponse(value);
      break;
    case 27:
      var value = new proto.pulsar.proto.CommandReachedEndOfTopic;
      reader.readMessage(value,proto.pulsar.proto.CommandReachedEndOfTopic.deserializeBinaryFromReader);
      msg.setReachedendoftopic(value);
      break;
    case 28:
      var value = new proto.pulsar.proto.CommandSeek;
      reader.readMessage(value,proto.pulsar.proto.CommandSeek.deserializeBinaryFromReader);
      msg.setSeek(value);
      break;
    case 29:
      var value = new proto.pulsar.proto.CommandGetLastMessageId;
      reader.readMessage(value,proto.pulsar.proto.CommandGetLastMessageId.deserializeBinaryFromReader);
      msg.setGetlastmessageid(value);
      break;
    case 30:
      var value = new proto.pulsar.proto.CommandGetLastMessageIdResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandGetLastMessageIdResponse.deserializeBinaryFromReader);
      msg.setGetlastmessageidresponse(value);
      break;
    case 31:
      var value = new proto.pulsar.proto.CommandActiveConsumerChange;
      reader.readMessage(value,proto.pulsar.proto.CommandActiveConsumerChange.deserializeBinaryFromReader);
      msg.setActiveConsumerChange(value);
      break;
    case 32:
      var value = new proto.pulsar.proto.CommandGetTopicsOfNamespace;
      reader.readMessage(value,proto.pulsar.proto.CommandGetTopicsOfNamespace.deserializeBinaryFromReader);
      msg.setGettopicsofnamespace(value);
      break;
    case 33:
      var value = new proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.deserializeBinaryFromReader);
      msg.setGettopicsofnamespaceresponse(value);
      break;
    case 34:
      var value = new proto.pulsar.proto.CommandGetSchema;
      reader.readMessage(value,proto.pulsar.proto.CommandGetSchema.deserializeBinaryFromReader);
      msg.setGetschema(value);
      break;
    case 35:
      var value = new proto.pulsar.proto.CommandGetSchemaResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandGetSchemaResponse.deserializeBinaryFromReader);
      msg.setGetschemaresponse(value);
      break;
    case 36:
      var value = new proto.pulsar.proto.CommandAuthChallenge;
      reader.readMessage(value,proto.pulsar.proto.CommandAuthChallenge.deserializeBinaryFromReader);
      msg.setAuthchallenge(value);
      break;
    case 37:
      var value = new proto.pulsar.proto.CommandAuthResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandAuthResponse.deserializeBinaryFromReader);
      msg.setAuthresponse(value);
      break;
    case 38:
      var value = new proto.pulsar.proto.CommandAckResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandAckResponse.deserializeBinaryFromReader);
      msg.setAckresponse(value);
      break;
    case 39:
      var value = new proto.pulsar.proto.CommandGetOrCreateSchema;
      reader.readMessage(value,proto.pulsar.proto.CommandGetOrCreateSchema.deserializeBinaryFromReader);
      msg.setGetorcreateschema(value);
      break;
    case 40:
      var value = new proto.pulsar.proto.CommandGetOrCreateSchemaResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandGetOrCreateSchemaResponse.deserializeBinaryFromReader);
      msg.setGetorcreateschemaresponse(value);
      break;
    case 50:
      var value = new proto.pulsar.proto.CommandNewTxn;
      reader.readMessage(value,proto.pulsar.proto.CommandNewTxn.deserializeBinaryFromReader);
      msg.setNewtxn(value);
      break;
    case 51:
      var value = new proto.pulsar.proto.CommandNewTxnResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandNewTxnResponse.deserializeBinaryFromReader);
      msg.setNewtxnresponse(value);
      break;
    case 52:
      var value = new proto.pulsar.proto.CommandAddPartitionToTxn;
      reader.readMessage(value,proto.pulsar.proto.CommandAddPartitionToTxn.deserializeBinaryFromReader);
      msg.setAddpartitiontotxn(value);
      break;
    case 53:
      var value = new proto.pulsar.proto.CommandAddPartitionToTxnResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandAddPartitionToTxnResponse.deserializeBinaryFromReader);
      msg.setAddpartitiontotxnresponse(value);
      break;
    case 54:
      var value = new proto.pulsar.proto.CommandAddSubscriptionToTxn;
      reader.readMessage(value,proto.pulsar.proto.CommandAddSubscriptionToTxn.deserializeBinaryFromReader);
      msg.setAddsubscriptiontotxn(value);
      break;
    case 55:
      var value = new proto.pulsar.proto.CommandAddSubscriptionToTxnResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.deserializeBinaryFromReader);
      msg.setAddsubscriptiontotxnresponse(value);
      break;
    case 56:
      var value = new proto.pulsar.proto.CommandEndTxn;
      reader.readMessage(value,proto.pulsar.proto.CommandEndTxn.deserializeBinaryFromReader);
      msg.setEndtxn(value);
      break;
    case 57:
      var value = new proto.pulsar.proto.CommandEndTxnResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandEndTxnResponse.deserializeBinaryFromReader);
      msg.setEndtxnresponse(value);
      break;
    case 58:
      var value = new proto.pulsar.proto.CommandEndTxnOnPartition;
      reader.readMessage(value,proto.pulsar.proto.CommandEndTxnOnPartition.deserializeBinaryFromReader);
      msg.setEndtxnonpartition(value);
      break;
    case 59:
      var value = new proto.pulsar.proto.CommandEndTxnOnPartitionResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandEndTxnOnPartitionResponse.deserializeBinaryFromReader);
      msg.setEndtxnonpartitionresponse(value);
      break;
    case 60:
      var value = new proto.pulsar.proto.CommandEndTxnOnSubscription;
      reader.readMessage(value,proto.pulsar.proto.CommandEndTxnOnSubscription.deserializeBinaryFromReader);
      msg.setEndtxnonsubscription(value);
      break;
    case 61:
      var value = new proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse;
      reader.readMessage(value,proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.deserializeBinaryFromReader);
      msg.setEndtxnonsubscriptionresponse(value);
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
proto.pulsar.proto.BaseCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.BaseCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.BaseCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.BaseCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.pulsar.proto.BaseCommand.Type} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getConnect();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pulsar.proto.CommandConnect.serializeBinaryToWriter
    );
  }
  f = message.getConnected();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pulsar.proto.CommandConnected.serializeBinaryToWriter
    );
  }
  f = message.getSubscribe();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pulsar.proto.CommandSubscribe.serializeBinaryToWriter
    );
  }
  f = message.getProducer();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.pulsar.proto.CommandProducer.serializeBinaryToWriter
    );
  }
  f = message.getSend();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.pulsar.proto.CommandSend.serializeBinaryToWriter
    );
  }
  f = message.getSendReceipt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.pulsar.proto.CommandSendReceipt.serializeBinaryToWriter
    );
  }
  f = message.getSendError();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.pulsar.proto.CommandSendError.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.pulsar.proto.CommandMessage.serializeBinaryToWriter
    );
  }
  f = message.getAck();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.pulsar.proto.CommandAck.serializeBinaryToWriter
    );
  }
  f = message.getFlow();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.pulsar.proto.CommandFlow.serializeBinaryToWriter
    );
  }
  f = message.getUnsubscribe();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.pulsar.proto.CommandUnsubscribe.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.pulsar.proto.CommandSuccess.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.pulsar.proto.CommandError.serializeBinaryToWriter
    );
  }
  f = message.getCloseProducer();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.pulsar.proto.CommandCloseProducer.serializeBinaryToWriter
    );
  }
  f = message.getCloseConsumer();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.pulsar.proto.CommandCloseConsumer.serializeBinaryToWriter
    );
  }
  f = message.getProducerSuccess();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.pulsar.proto.CommandProducerSuccess.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.pulsar.proto.CommandPing.serializeBinaryToWriter
    );
  }
  f = message.getPong();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.pulsar.proto.CommandPong.serializeBinaryToWriter
    );
  }
  f = message.getRedeliverunacknowledgedmessages();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.serializeBinaryToWriter
    );
  }
  f = message.getPartitionmetadata();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.pulsar.proto.CommandPartitionedTopicMetadata.serializeBinaryToWriter
    );
  }
  f = message.getPartitionmetadataresponse();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.serializeBinaryToWriter
    );
  }
  f = message.getLookuptopic();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.pulsar.proto.CommandLookupTopic.serializeBinaryToWriter
    );
  }
  f = message.getLookuptopicresponse();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.pulsar.proto.CommandLookupTopicResponse.serializeBinaryToWriter
    );
  }
  f = message.getConsumerstats();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.pulsar.proto.CommandConsumerStats.serializeBinaryToWriter
    );
  }
  f = message.getConsumerstatsresponse();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.pulsar.proto.CommandConsumerStatsResponse.serializeBinaryToWriter
    );
  }
  f = message.getReachedendoftopic();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.pulsar.proto.CommandReachedEndOfTopic.serializeBinaryToWriter
    );
  }
  f = message.getSeek();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.pulsar.proto.CommandSeek.serializeBinaryToWriter
    );
  }
  f = message.getGetlastmessageid();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.pulsar.proto.CommandGetLastMessageId.serializeBinaryToWriter
    );
  }
  f = message.getGetlastmessageidresponse();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.pulsar.proto.CommandGetLastMessageIdResponse.serializeBinaryToWriter
    );
  }
  f = message.getActiveConsumerChange();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.pulsar.proto.CommandActiveConsumerChange.serializeBinaryToWriter
    );
  }
  f = message.getGettopicsofnamespace();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.pulsar.proto.CommandGetTopicsOfNamespace.serializeBinaryToWriter
    );
  }
  f = message.getGettopicsofnamespaceresponse();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetschema();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.pulsar.proto.CommandGetSchema.serializeBinaryToWriter
    );
  }
  f = message.getGetschemaresponse();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.pulsar.proto.CommandGetSchemaResponse.serializeBinaryToWriter
    );
  }
  f = message.getAuthchallenge();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.pulsar.proto.CommandAuthChallenge.serializeBinaryToWriter
    );
  }
  f = message.getAuthresponse();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.pulsar.proto.CommandAuthResponse.serializeBinaryToWriter
    );
  }
  f = message.getAckresponse();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.pulsar.proto.CommandAckResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetorcreateschema();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.pulsar.proto.CommandGetOrCreateSchema.serializeBinaryToWriter
    );
  }
  f = message.getGetorcreateschemaresponse();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.pulsar.proto.CommandGetOrCreateSchemaResponse.serializeBinaryToWriter
    );
  }
  f = message.getNewtxn();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.pulsar.proto.CommandNewTxn.serializeBinaryToWriter
    );
  }
  f = message.getNewtxnresponse();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.pulsar.proto.CommandNewTxnResponse.serializeBinaryToWriter
    );
  }
  f = message.getAddpartitiontotxn();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.pulsar.proto.CommandAddPartitionToTxn.serializeBinaryToWriter
    );
  }
  f = message.getAddpartitiontotxnresponse();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto.pulsar.proto.CommandAddPartitionToTxnResponse.serializeBinaryToWriter
    );
  }
  f = message.getAddsubscriptiontotxn();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto.pulsar.proto.CommandAddSubscriptionToTxn.serializeBinaryToWriter
    );
  }
  f = message.getAddsubscriptiontotxnresponse();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto.pulsar.proto.CommandAddSubscriptionToTxnResponse.serializeBinaryToWriter
    );
  }
  f = message.getEndtxn();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      proto.pulsar.proto.CommandEndTxn.serializeBinaryToWriter
    );
  }
  f = message.getEndtxnresponse();
  if (f != null) {
    writer.writeMessage(
      57,
      f,
      proto.pulsar.proto.CommandEndTxnResponse.serializeBinaryToWriter
    );
  }
  f = message.getEndtxnonpartition();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      proto.pulsar.proto.CommandEndTxnOnPartition.serializeBinaryToWriter
    );
  }
  f = message.getEndtxnonpartitionresponse();
  if (f != null) {
    writer.writeMessage(
      59,
      f,
      proto.pulsar.proto.CommandEndTxnOnPartitionResponse.serializeBinaryToWriter
    );
  }
  f = message.getEndtxnonsubscription();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      proto.pulsar.proto.CommandEndTxnOnSubscription.serializeBinaryToWriter
    );
  }
  f = message.getEndtxnonsubscriptionresponse();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.pulsar.proto.BaseCommand.Type = {
  CONNECT: 2,
  CONNECTED: 3,
  SUBSCRIBE: 4,
  PRODUCER: 5,
  SEND: 6,
  SEND_RECEIPT: 7,
  SEND_ERROR: 8,
  MESSAGE: 9,
  ACK: 10,
  FLOW: 11,
  UNSUBSCRIBE: 12,
  SUCCESS: 13,
  ERROR: 14,
  CLOSE_PRODUCER: 15,
  CLOSE_CONSUMER: 16,
  PRODUCER_SUCCESS: 17,
  PING: 18,
  PONG: 19,
  REDELIVER_UNACKNOWLEDGED_MESSAGES: 20,
  PARTITIONED_METADATA: 21,
  PARTITIONED_METADATA_RESPONSE: 22,
  LOOKUP: 23,
  LOOKUP_RESPONSE: 24,
  CONSUMER_STATS: 25,
  CONSUMER_STATS_RESPONSE: 26,
  REACHED_END_OF_TOPIC: 27,
  SEEK: 28,
  GET_LAST_MESSAGE_ID: 29,
  GET_LAST_MESSAGE_ID_RESPONSE: 30,
  ACTIVE_CONSUMER_CHANGE: 31,
  GET_TOPICS_OF_NAMESPACE: 32,
  GET_TOPICS_OF_NAMESPACE_RESPONSE: 33,
  GET_SCHEMA: 34,
  GET_SCHEMA_RESPONSE: 35,
  AUTH_CHALLENGE: 36,
  AUTH_RESPONSE: 37,
  ACK_RESPONSE: 38,
  GET_OR_CREATE_SCHEMA: 39,
  GET_OR_CREATE_SCHEMA_RESPONSE: 40,
  NEW_TXN: 50,
  NEW_TXN_RESPONSE: 51,
  ADD_PARTITION_TO_TXN: 52,
  ADD_PARTITION_TO_TXN_RESPONSE: 53,
  ADD_SUBSCRIPTION_TO_TXN: 54,
  ADD_SUBSCRIPTION_TO_TXN_RESPONSE: 55,
  END_TXN: 56,
  END_TXN_RESPONSE: 57,
  END_TXN_ON_PARTITION: 58,
  END_TXN_ON_PARTITION_RESPONSE: 59,
  END_TXN_ON_SUBSCRIPTION: 60,
  END_TXN_ON_SUBSCRIPTION_RESPONSE: 61
};

/**
 * required Type type = 1;
 * @return {!proto.pulsar.proto.BaseCommand.Type}
 */
proto.pulsar.proto.BaseCommand.prototype.getType = function() {
  return /** @type {!proto.pulsar.proto.BaseCommand.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 2));
};


/**
 * @param {!proto.pulsar.proto.BaseCommand.Type} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommandConnect connect = 2;
 * @return {?proto.pulsar.proto.CommandConnect}
 */
proto.pulsar.proto.BaseCommand.prototype.getConnect = function() {
  return /** @type{?proto.pulsar.proto.CommandConnect} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandConnect, 2));
};


/**
 * @param {?proto.pulsar.proto.CommandConnect|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setConnect = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearConnect = function() {
  return this.setConnect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasConnect = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CommandConnected connected = 3;
 * @return {?proto.pulsar.proto.CommandConnected}
 */
proto.pulsar.proto.BaseCommand.prototype.getConnected = function() {
  return /** @type{?proto.pulsar.proto.CommandConnected} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandConnected, 3));
};


/**
 * @param {?proto.pulsar.proto.CommandConnected|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setConnected = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearConnected = function() {
  return this.setConnected(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasConnected = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CommandSubscribe subscribe = 4;
 * @return {?proto.pulsar.proto.CommandSubscribe}
 */
proto.pulsar.proto.BaseCommand.prototype.getSubscribe = function() {
  return /** @type{?proto.pulsar.proto.CommandSubscribe} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandSubscribe, 4));
};


/**
 * @param {?proto.pulsar.proto.CommandSubscribe|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setSubscribe = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearSubscribe = function() {
  return this.setSubscribe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasSubscribe = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CommandProducer producer = 5;
 * @return {?proto.pulsar.proto.CommandProducer}
 */
proto.pulsar.proto.BaseCommand.prototype.getProducer = function() {
  return /** @type{?proto.pulsar.proto.CommandProducer} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandProducer, 5));
};


/**
 * @param {?proto.pulsar.proto.CommandProducer|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setProducer = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearProducer = function() {
  return this.setProducer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasProducer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CommandSend send = 6;
 * @return {?proto.pulsar.proto.CommandSend}
 */
proto.pulsar.proto.BaseCommand.prototype.getSend = function() {
  return /** @type{?proto.pulsar.proto.CommandSend} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandSend, 6));
};


/**
 * @param {?proto.pulsar.proto.CommandSend|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setSend = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearSend = function() {
  return this.setSend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasSend = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CommandSendReceipt send_receipt = 7;
 * @return {?proto.pulsar.proto.CommandSendReceipt}
 */
proto.pulsar.proto.BaseCommand.prototype.getSendReceipt = function() {
  return /** @type{?proto.pulsar.proto.CommandSendReceipt} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandSendReceipt, 7));
};


/**
 * @param {?proto.pulsar.proto.CommandSendReceipt|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setSendReceipt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearSendReceipt = function() {
  return this.setSendReceipt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasSendReceipt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CommandSendError send_error = 8;
 * @return {?proto.pulsar.proto.CommandSendError}
 */
proto.pulsar.proto.BaseCommand.prototype.getSendError = function() {
  return /** @type{?proto.pulsar.proto.CommandSendError} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandSendError, 8));
};


/**
 * @param {?proto.pulsar.proto.CommandSendError|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setSendError = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearSendError = function() {
  return this.setSendError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasSendError = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CommandMessage message = 9;
 * @return {?proto.pulsar.proto.CommandMessage}
 */
proto.pulsar.proto.BaseCommand.prototype.getMessage = function() {
  return /** @type{?proto.pulsar.proto.CommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandMessage, 9));
};


/**
 * @param {?proto.pulsar.proto.CommandMessage|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CommandAck ack = 10;
 * @return {?proto.pulsar.proto.CommandAck}
 */
proto.pulsar.proto.BaseCommand.prototype.getAck = function() {
  return /** @type{?proto.pulsar.proto.CommandAck} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAck, 10));
};


/**
 * @param {?proto.pulsar.proto.CommandAck|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAck = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAck = function() {
  return this.setAck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAck = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CommandFlow flow = 11;
 * @return {?proto.pulsar.proto.CommandFlow}
 */
proto.pulsar.proto.BaseCommand.prototype.getFlow = function() {
  return /** @type{?proto.pulsar.proto.CommandFlow} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandFlow, 11));
};


/**
 * @param {?proto.pulsar.proto.CommandFlow|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setFlow = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearFlow = function() {
  return this.setFlow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasFlow = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CommandUnsubscribe unsubscribe = 12;
 * @return {?proto.pulsar.proto.CommandUnsubscribe}
 */
proto.pulsar.proto.BaseCommand.prototype.getUnsubscribe = function() {
  return /** @type{?proto.pulsar.proto.CommandUnsubscribe} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandUnsubscribe, 12));
};


/**
 * @param {?proto.pulsar.proto.CommandUnsubscribe|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setUnsubscribe = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearUnsubscribe = function() {
  return this.setUnsubscribe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasUnsubscribe = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CommandSuccess success = 13;
 * @return {?proto.pulsar.proto.CommandSuccess}
 */
proto.pulsar.proto.BaseCommand.prototype.getSuccess = function() {
  return /** @type{?proto.pulsar.proto.CommandSuccess} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandSuccess, 13));
};


/**
 * @param {?proto.pulsar.proto.CommandSuccess|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setSuccess = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CommandError error = 14;
 * @return {?proto.pulsar.proto.CommandError}
 */
proto.pulsar.proto.BaseCommand.prototype.getError = function() {
  return /** @type{?proto.pulsar.proto.CommandError} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandError, 14));
};


/**
 * @param {?proto.pulsar.proto.CommandError|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasError = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CommandCloseProducer close_producer = 15;
 * @return {?proto.pulsar.proto.CommandCloseProducer}
 */
proto.pulsar.proto.BaseCommand.prototype.getCloseProducer = function() {
  return /** @type{?proto.pulsar.proto.CommandCloseProducer} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandCloseProducer, 15));
};


/**
 * @param {?proto.pulsar.proto.CommandCloseProducer|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setCloseProducer = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearCloseProducer = function() {
  return this.setCloseProducer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasCloseProducer = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CommandCloseConsumer close_consumer = 16;
 * @return {?proto.pulsar.proto.CommandCloseConsumer}
 */
proto.pulsar.proto.BaseCommand.prototype.getCloseConsumer = function() {
  return /** @type{?proto.pulsar.proto.CommandCloseConsumer} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandCloseConsumer, 16));
};


/**
 * @param {?proto.pulsar.proto.CommandCloseConsumer|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setCloseConsumer = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearCloseConsumer = function() {
  return this.setCloseConsumer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasCloseConsumer = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CommandProducerSuccess producer_success = 17;
 * @return {?proto.pulsar.proto.CommandProducerSuccess}
 */
proto.pulsar.proto.BaseCommand.prototype.getProducerSuccess = function() {
  return /** @type{?proto.pulsar.proto.CommandProducerSuccess} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandProducerSuccess, 17));
};


/**
 * @param {?proto.pulsar.proto.CommandProducerSuccess|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setProducerSuccess = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearProducerSuccess = function() {
  return this.setProducerSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasProducerSuccess = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional CommandPing ping = 18;
 * @return {?proto.pulsar.proto.CommandPing}
 */
proto.pulsar.proto.BaseCommand.prototype.getPing = function() {
  return /** @type{?proto.pulsar.proto.CommandPing} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandPing, 18));
};


/**
 * @param {?proto.pulsar.proto.CommandPing|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setPing = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasPing = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional CommandPong pong = 19;
 * @return {?proto.pulsar.proto.CommandPong}
 */
proto.pulsar.proto.BaseCommand.prototype.getPong = function() {
  return /** @type{?proto.pulsar.proto.CommandPong} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandPong, 19));
};


/**
 * @param {?proto.pulsar.proto.CommandPong|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setPong = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearPong = function() {
  return this.setPong(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasPong = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional CommandRedeliverUnacknowledgedMessages redeliverUnacknowledgedMessages = 20;
 * @return {?proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages}
 */
proto.pulsar.proto.BaseCommand.prototype.getRedeliverunacknowledgedmessages = function() {
  return /** @type{?proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages, 20));
};


/**
 * @param {?proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setRedeliverunacknowledgedmessages = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearRedeliverunacknowledgedmessages = function() {
  return this.setRedeliverunacknowledgedmessages(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasRedeliverunacknowledgedmessages = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional CommandPartitionedTopicMetadata partitionMetadata = 21;
 * @return {?proto.pulsar.proto.CommandPartitionedTopicMetadata}
 */
proto.pulsar.proto.BaseCommand.prototype.getPartitionmetadata = function() {
  return /** @type{?proto.pulsar.proto.CommandPartitionedTopicMetadata} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandPartitionedTopicMetadata, 21));
};


/**
 * @param {?proto.pulsar.proto.CommandPartitionedTopicMetadata|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setPartitionmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearPartitionmetadata = function() {
  return this.setPartitionmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasPartitionmetadata = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional CommandPartitionedTopicMetadataResponse partitionMetadataResponse = 22;
 * @return {?proto.pulsar.proto.CommandPartitionedTopicMetadataResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getPartitionmetadataresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandPartitionedTopicMetadataResponse, 22));
};


/**
 * @param {?proto.pulsar.proto.CommandPartitionedTopicMetadataResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setPartitionmetadataresponse = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearPartitionmetadataresponse = function() {
  return this.setPartitionmetadataresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasPartitionmetadataresponse = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional CommandLookupTopic lookupTopic = 23;
 * @return {?proto.pulsar.proto.CommandLookupTopic}
 */
proto.pulsar.proto.BaseCommand.prototype.getLookuptopic = function() {
  return /** @type{?proto.pulsar.proto.CommandLookupTopic} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandLookupTopic, 23));
};


/**
 * @param {?proto.pulsar.proto.CommandLookupTopic|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setLookuptopic = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearLookuptopic = function() {
  return this.setLookuptopic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasLookuptopic = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CommandLookupTopicResponse lookupTopicResponse = 24;
 * @return {?proto.pulsar.proto.CommandLookupTopicResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getLookuptopicresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandLookupTopicResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandLookupTopicResponse, 24));
};


/**
 * @param {?proto.pulsar.proto.CommandLookupTopicResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setLookuptopicresponse = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearLookuptopicresponse = function() {
  return this.setLookuptopicresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasLookuptopicresponse = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional CommandConsumerStats consumerStats = 25;
 * @return {?proto.pulsar.proto.CommandConsumerStats}
 */
proto.pulsar.proto.BaseCommand.prototype.getConsumerstats = function() {
  return /** @type{?proto.pulsar.proto.CommandConsumerStats} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandConsumerStats, 25));
};


/**
 * @param {?proto.pulsar.proto.CommandConsumerStats|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setConsumerstats = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearConsumerstats = function() {
  return this.setConsumerstats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasConsumerstats = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional CommandConsumerStatsResponse consumerStatsResponse = 26;
 * @return {?proto.pulsar.proto.CommandConsumerStatsResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getConsumerstatsresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandConsumerStatsResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandConsumerStatsResponse, 26));
};


/**
 * @param {?proto.pulsar.proto.CommandConsumerStatsResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setConsumerstatsresponse = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearConsumerstatsresponse = function() {
  return this.setConsumerstatsresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasConsumerstatsresponse = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional CommandReachedEndOfTopic reachedEndOfTopic = 27;
 * @return {?proto.pulsar.proto.CommandReachedEndOfTopic}
 */
proto.pulsar.proto.BaseCommand.prototype.getReachedendoftopic = function() {
  return /** @type{?proto.pulsar.proto.CommandReachedEndOfTopic} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandReachedEndOfTopic, 27));
};


/**
 * @param {?proto.pulsar.proto.CommandReachedEndOfTopic|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setReachedendoftopic = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearReachedendoftopic = function() {
  return this.setReachedendoftopic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasReachedendoftopic = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional CommandSeek seek = 28;
 * @return {?proto.pulsar.proto.CommandSeek}
 */
proto.pulsar.proto.BaseCommand.prototype.getSeek = function() {
  return /** @type{?proto.pulsar.proto.CommandSeek} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandSeek, 28));
};


/**
 * @param {?proto.pulsar.proto.CommandSeek|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setSeek = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearSeek = function() {
  return this.setSeek(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasSeek = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional CommandGetLastMessageId getLastMessageId = 29;
 * @return {?proto.pulsar.proto.CommandGetLastMessageId}
 */
proto.pulsar.proto.BaseCommand.prototype.getGetlastmessageid = function() {
  return /** @type{?proto.pulsar.proto.CommandGetLastMessageId} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetLastMessageId, 29));
};


/**
 * @param {?proto.pulsar.proto.CommandGetLastMessageId|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGetlastmessageid = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGetlastmessageid = function() {
  return this.setGetlastmessageid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGetlastmessageid = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional CommandGetLastMessageIdResponse getLastMessageIdResponse = 30;
 * @return {?proto.pulsar.proto.CommandGetLastMessageIdResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getGetlastmessageidresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandGetLastMessageIdResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetLastMessageIdResponse, 30));
};


/**
 * @param {?proto.pulsar.proto.CommandGetLastMessageIdResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGetlastmessageidresponse = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGetlastmessageidresponse = function() {
  return this.setGetlastmessageidresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGetlastmessageidresponse = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional CommandActiveConsumerChange active_consumer_change = 31;
 * @return {?proto.pulsar.proto.CommandActiveConsumerChange}
 */
proto.pulsar.proto.BaseCommand.prototype.getActiveConsumerChange = function() {
  return /** @type{?proto.pulsar.proto.CommandActiveConsumerChange} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandActiveConsumerChange, 31));
};


/**
 * @param {?proto.pulsar.proto.CommandActiveConsumerChange|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setActiveConsumerChange = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearActiveConsumerChange = function() {
  return this.setActiveConsumerChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasActiveConsumerChange = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional CommandGetTopicsOfNamespace getTopicsOfNamespace = 32;
 * @return {?proto.pulsar.proto.CommandGetTopicsOfNamespace}
 */
proto.pulsar.proto.BaseCommand.prototype.getGettopicsofnamespace = function() {
  return /** @type{?proto.pulsar.proto.CommandGetTopicsOfNamespace} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetTopicsOfNamespace, 32));
};


/**
 * @param {?proto.pulsar.proto.CommandGetTopicsOfNamespace|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGettopicsofnamespace = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGettopicsofnamespace = function() {
  return this.setGettopicsofnamespace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGettopicsofnamespace = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional CommandGetTopicsOfNamespaceResponse getTopicsOfNamespaceResponse = 33;
 * @return {?proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getGettopicsofnamespaceresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse, 33));
};


/**
 * @param {?proto.pulsar.proto.CommandGetTopicsOfNamespaceResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGettopicsofnamespaceresponse = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGettopicsofnamespaceresponse = function() {
  return this.setGettopicsofnamespaceresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGettopicsofnamespaceresponse = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional CommandGetSchema getSchema = 34;
 * @return {?proto.pulsar.proto.CommandGetSchema}
 */
proto.pulsar.proto.BaseCommand.prototype.getGetschema = function() {
  return /** @type{?proto.pulsar.proto.CommandGetSchema} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetSchema, 34));
};


/**
 * @param {?proto.pulsar.proto.CommandGetSchema|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGetschema = function(value) {
  return jspb.Message.setWrapperField(this, 34, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGetschema = function() {
  return this.setGetschema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGetschema = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional CommandGetSchemaResponse getSchemaResponse = 35;
 * @return {?proto.pulsar.proto.CommandGetSchemaResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getGetschemaresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandGetSchemaResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetSchemaResponse, 35));
};


/**
 * @param {?proto.pulsar.proto.CommandGetSchemaResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGetschemaresponse = function(value) {
  return jspb.Message.setWrapperField(this, 35, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGetschemaresponse = function() {
  return this.setGetschemaresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGetschemaresponse = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional CommandAuthChallenge authChallenge = 36;
 * @return {?proto.pulsar.proto.CommandAuthChallenge}
 */
proto.pulsar.proto.BaseCommand.prototype.getAuthchallenge = function() {
  return /** @type{?proto.pulsar.proto.CommandAuthChallenge} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAuthChallenge, 36));
};


/**
 * @param {?proto.pulsar.proto.CommandAuthChallenge|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAuthchallenge = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAuthchallenge = function() {
  return this.setAuthchallenge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAuthchallenge = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional CommandAuthResponse authResponse = 37;
 * @return {?proto.pulsar.proto.CommandAuthResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getAuthresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandAuthResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAuthResponse, 37));
};


/**
 * @param {?proto.pulsar.proto.CommandAuthResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAuthresponse = function(value) {
  return jspb.Message.setWrapperField(this, 37, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAuthresponse = function() {
  return this.setAuthresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAuthresponse = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional CommandAckResponse ackResponse = 38;
 * @return {?proto.pulsar.proto.CommandAckResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getAckresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandAckResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAckResponse, 38));
};


/**
 * @param {?proto.pulsar.proto.CommandAckResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAckresponse = function(value) {
  return jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAckresponse = function() {
  return this.setAckresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAckresponse = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional CommandGetOrCreateSchema getOrCreateSchema = 39;
 * @return {?proto.pulsar.proto.CommandGetOrCreateSchema}
 */
proto.pulsar.proto.BaseCommand.prototype.getGetorcreateschema = function() {
  return /** @type{?proto.pulsar.proto.CommandGetOrCreateSchema} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetOrCreateSchema, 39));
};


/**
 * @param {?proto.pulsar.proto.CommandGetOrCreateSchema|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGetorcreateschema = function(value) {
  return jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGetorcreateschema = function() {
  return this.setGetorcreateschema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGetorcreateschema = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional CommandGetOrCreateSchemaResponse getOrCreateSchemaResponse = 40;
 * @return {?proto.pulsar.proto.CommandGetOrCreateSchemaResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getGetorcreateschemaresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandGetOrCreateSchemaResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandGetOrCreateSchemaResponse, 40));
};


/**
 * @param {?proto.pulsar.proto.CommandGetOrCreateSchemaResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setGetorcreateschemaresponse = function(value) {
  return jspb.Message.setWrapperField(this, 40, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearGetorcreateschemaresponse = function() {
  return this.setGetorcreateschemaresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasGetorcreateschemaresponse = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional CommandNewTxn newTxn = 50;
 * @return {?proto.pulsar.proto.CommandNewTxn}
 */
proto.pulsar.proto.BaseCommand.prototype.getNewtxn = function() {
  return /** @type{?proto.pulsar.proto.CommandNewTxn} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandNewTxn, 50));
};


/**
 * @param {?proto.pulsar.proto.CommandNewTxn|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setNewtxn = function(value) {
  return jspb.Message.setWrapperField(this, 50, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearNewtxn = function() {
  return this.setNewtxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasNewtxn = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional CommandNewTxnResponse newTxnResponse = 51;
 * @return {?proto.pulsar.proto.CommandNewTxnResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getNewtxnresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandNewTxnResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandNewTxnResponse, 51));
};


/**
 * @param {?proto.pulsar.proto.CommandNewTxnResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setNewtxnresponse = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearNewtxnresponse = function() {
  return this.setNewtxnresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasNewtxnresponse = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional CommandAddPartitionToTxn addPartitionToTxn = 52;
 * @return {?proto.pulsar.proto.CommandAddPartitionToTxn}
 */
proto.pulsar.proto.BaseCommand.prototype.getAddpartitiontotxn = function() {
  return /** @type{?proto.pulsar.proto.CommandAddPartitionToTxn} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAddPartitionToTxn, 52));
};


/**
 * @param {?proto.pulsar.proto.CommandAddPartitionToTxn|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAddpartitiontotxn = function(value) {
  return jspb.Message.setWrapperField(this, 52, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAddpartitiontotxn = function() {
  return this.setAddpartitiontotxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAddpartitiontotxn = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional CommandAddPartitionToTxnResponse addPartitionToTxnResponse = 53;
 * @return {?proto.pulsar.proto.CommandAddPartitionToTxnResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getAddpartitiontotxnresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandAddPartitionToTxnResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAddPartitionToTxnResponse, 53));
};


/**
 * @param {?proto.pulsar.proto.CommandAddPartitionToTxnResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAddpartitiontotxnresponse = function(value) {
  return jspb.Message.setWrapperField(this, 53, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAddpartitiontotxnresponse = function() {
  return this.setAddpartitiontotxnresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAddpartitiontotxnresponse = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional CommandAddSubscriptionToTxn addSubscriptionToTxn = 54;
 * @return {?proto.pulsar.proto.CommandAddSubscriptionToTxn}
 */
proto.pulsar.proto.BaseCommand.prototype.getAddsubscriptiontotxn = function() {
  return /** @type{?proto.pulsar.proto.CommandAddSubscriptionToTxn} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAddSubscriptionToTxn, 54));
};


/**
 * @param {?proto.pulsar.proto.CommandAddSubscriptionToTxn|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAddsubscriptiontotxn = function(value) {
  return jspb.Message.setWrapperField(this, 54, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAddsubscriptiontotxn = function() {
  return this.setAddsubscriptiontotxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAddsubscriptiontotxn = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional CommandAddSubscriptionToTxnResponse addSubscriptionToTxnResponse = 55;
 * @return {?proto.pulsar.proto.CommandAddSubscriptionToTxnResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getAddsubscriptiontotxnresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandAddSubscriptionToTxnResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandAddSubscriptionToTxnResponse, 55));
};


/**
 * @param {?proto.pulsar.proto.CommandAddSubscriptionToTxnResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setAddsubscriptiontotxnresponse = function(value) {
  return jspb.Message.setWrapperField(this, 55, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearAddsubscriptiontotxnresponse = function() {
  return this.setAddsubscriptiontotxnresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasAddsubscriptiontotxnresponse = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional CommandEndTxn endTxn = 56;
 * @return {?proto.pulsar.proto.CommandEndTxn}
 */
proto.pulsar.proto.BaseCommand.prototype.getEndtxn = function() {
  return /** @type{?proto.pulsar.proto.CommandEndTxn} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandEndTxn, 56));
};


/**
 * @param {?proto.pulsar.proto.CommandEndTxn|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setEndtxn = function(value) {
  return jspb.Message.setWrapperField(this, 56, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearEndtxn = function() {
  return this.setEndtxn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasEndtxn = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional CommandEndTxnResponse endTxnResponse = 57;
 * @return {?proto.pulsar.proto.CommandEndTxnResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getEndtxnresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandEndTxnResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandEndTxnResponse, 57));
};


/**
 * @param {?proto.pulsar.proto.CommandEndTxnResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setEndtxnresponse = function(value) {
  return jspb.Message.setWrapperField(this, 57, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearEndtxnresponse = function() {
  return this.setEndtxnresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasEndtxnresponse = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional CommandEndTxnOnPartition endTxnOnPartition = 58;
 * @return {?proto.pulsar.proto.CommandEndTxnOnPartition}
 */
proto.pulsar.proto.BaseCommand.prototype.getEndtxnonpartition = function() {
  return /** @type{?proto.pulsar.proto.CommandEndTxnOnPartition} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandEndTxnOnPartition, 58));
};


/**
 * @param {?proto.pulsar.proto.CommandEndTxnOnPartition|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setEndtxnonpartition = function(value) {
  return jspb.Message.setWrapperField(this, 58, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearEndtxnonpartition = function() {
  return this.setEndtxnonpartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasEndtxnonpartition = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional CommandEndTxnOnPartitionResponse endTxnOnPartitionResponse = 59;
 * @return {?proto.pulsar.proto.CommandEndTxnOnPartitionResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getEndtxnonpartitionresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandEndTxnOnPartitionResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandEndTxnOnPartitionResponse, 59));
};


/**
 * @param {?proto.pulsar.proto.CommandEndTxnOnPartitionResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setEndtxnonpartitionresponse = function(value) {
  return jspb.Message.setWrapperField(this, 59, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearEndtxnonpartitionresponse = function() {
  return this.setEndtxnonpartitionresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasEndtxnonpartitionresponse = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional CommandEndTxnOnSubscription endTxnOnSubscription = 60;
 * @return {?proto.pulsar.proto.CommandEndTxnOnSubscription}
 */
proto.pulsar.proto.BaseCommand.prototype.getEndtxnonsubscription = function() {
  return /** @type{?proto.pulsar.proto.CommandEndTxnOnSubscription} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandEndTxnOnSubscription, 60));
};


/**
 * @param {?proto.pulsar.proto.CommandEndTxnOnSubscription|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setEndtxnonsubscription = function(value) {
  return jspb.Message.setWrapperField(this, 60, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearEndtxnonsubscription = function() {
  return this.setEndtxnonsubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasEndtxnonsubscription = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional CommandEndTxnOnSubscriptionResponse endTxnOnSubscriptionResponse = 61;
 * @return {?proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse}
 */
proto.pulsar.proto.BaseCommand.prototype.getEndtxnonsubscriptionresponse = function() {
  return /** @type{?proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse, 61));
};


/**
 * @param {?proto.pulsar.proto.CommandEndTxnOnSubscriptionResponse|undefined} value
 * @return {!proto.pulsar.proto.BaseCommand} returns this
*/
proto.pulsar.proto.BaseCommand.prototype.setEndtxnonsubscriptionresponse = function(value) {
  return jspb.Message.setWrapperField(this, 61, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.BaseCommand} returns this
 */
proto.pulsar.proto.BaseCommand.prototype.clearEndtxnonsubscriptionresponse = function() {
  return this.setEndtxnonsubscriptionresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.BaseCommand.prototype.hasEndtxnonsubscriptionresponse = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * @enum {number}
 */
proto.pulsar.proto.CompressionType = {
  NONE: 0,
  LZ4: 1,
  ZLIB: 2,
  ZSTD: 3,
  SNAPPY: 4
};

/**
 * @enum {number}
 */
proto.pulsar.proto.ProducerAccessMode = {
  SHARED: 0,
  EXCLUSIVE: 1,
  WAITFOREXCLUSIVE: 2
};

/**
 * @enum {number}
 */
proto.pulsar.proto.ServerError = {
  UNKNOWNERROR: 0,
  METADATAERROR: 1,
  PERSISTENCEERROR: 2,
  AUTHENTICATIONERROR: 3,
  AUTHORIZATIONERROR: 4,
  CONSUMERBUSY: 5,
  SERVICENOTREADY: 6,
  PRODUCERBLOCKEDQUOTAEXCEEDEDERROR: 7,
  PRODUCERBLOCKEDQUOTAEXCEEDEDEXCEPTION: 8,
  CHECKSUMERROR: 9,
  UNSUPPORTEDVERSIONERROR: 10,
  TOPICNOTFOUND: 11,
  SUBSCRIPTIONNOTFOUND: 12,
  CONSUMERNOTFOUND: 13,
  TOOMANYREQUESTS: 14,
  TOPICTERMINATEDERROR: 15,
  PRODUCERBUSY: 16,
  INVALIDTOPICNAME: 17,
  INCOMPATIBLESCHEMA: 18,
  CONSUMERASSIGNERROR: 19,
  TRANSACTIONCOORDINATORNOTFOUND: 20,
  INVALIDTXNSTATUS: 21,
  NOTALLOWEDERROR: 22,
  TRANSACTIONCONFLICT: 23,
  TRANSACTIONNOTFOUND: 24,
  PRODUCERFENCED: 25
};

/**
 * @enum {number}
 */
proto.pulsar.proto.AuthMethod = {
  AUTHMETHODNONE: 0,
  AUTHMETHODYCAV1: 1,
  AUTHMETHODATHENS: 2
};

/**
 * @enum {number}
 */
proto.pulsar.proto.ProtocolVersion = {
  V0: 0,
  V1: 1,
  V2: 2,
  V3: 3,
  V4: 4,
  V5: 5,
  V6: 6,
  V7: 7,
  V8: 8,
  V9: 9,
  V10: 10,
  V11: 11,
  V12: 12,
  V13: 13,
  V14: 14,
  V15: 15,
  V16: 16,
  V17: 17
};

/**
 * @enum {number}
 */
proto.pulsar.proto.KeySharedMode = {
  AUTO_SPLIT: 0,
  STICKY: 1
};

/**
 * @enum {number}
 */
proto.pulsar.proto.TxnAction = {
  COMMIT: 0,
  ABORT: 1
};

goog.object.extend(exports, proto.pulsar.proto);
