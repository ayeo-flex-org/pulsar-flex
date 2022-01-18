  <br />
<h3 align="center">PulsarFlex</h3>

  <p align="center">
    Apache Pulsar® client for Node.js
    <br />
    <br /> 
    <a href="https://github.com/ayeo-flex/pulsar-flex/issues/new?assignees=&labels=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/ayeo-flex/pulsar-flex/issues/new?assignees=&labels=&template=feature_request.md&title=">Request Feature</a>
  </p>


- [About the project](#about)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)

## <a name="about"></a> About

PulsarFlex is a modern [Apache Pulsar](https://pulsar.apache.org/) client for Node.js.

It was developed because the dependency in the official c++ external libraries does not fit some use cases.

Supports all os platforms that can run nodejs.

### <a name="features"></a> Features

* Producer
  * Access Modes
    * Exclusive
    * Shared
  * Send types
    * Batch 
    * Single Message
  * Message Properties
  * Reconnection built in  
* Subscriptions
  * Subscription types
    * Exclusive
    * Fail over  
    * Shared
    * Key_Shared
  * Acks
    * Specific ack
    * Cumulative ack
    * Automatic ack  
    * Negative ack
  * Reconnection built in  
  * Check redelivery count, increases on redeliver in Shared and Key_Shared modes
* Authentication
  * JWT

### <a name="getting-started"></a> Getting Started

```sh
npm install pulsar-flex
```

#### <a name="usage"></a> Usage
```javascript
const { Producer, Consumer, logLevel } = require('pulsar-flex')

const producer = new Producer({
  topic: "persistent://public/default/my-topic",
  discoveryServers: ['pulsar-host:6650'],
  //If you dont provide any jwt token it will use no auth
  jwt: process.env.JWT_TOKEN,
  producerAccessMode: Producer.ACCESS_MODES.SHARED,
  logLevel: logLevel.INFO
  // you can also provide logCreator function
})

const consumer = new Consumer({
  topic: "persistent://public/default/my-topic",
  discoveryServers: ['pulsar-host:6650'],
  jwt: process.env.JWT_TOKEN,
  subType: Consumer.SUB_TYPES.EXCLUSIVE,
  consumerName: 'Consumer name',
  receiveQueueSize: 1000,
  logLevel: logLevel.INFO,
  // you can also provide logCreator function
})

const run = async () => {
  await producer.create();
  // you can also send single message using sendMessage function
  await producer.sendBatch({messages: [
    {
      properties: {pulsar: "flex"}, 
      payload: 'Ayeo' 
    },
    {
      properties: {pulsar: "flex"},
      payload: 'Ayeo'
    }
  ]});

  await consumer.subscribe();
  consumer.onStateChange({
    stateChangeHandler: ({previousState, newState}) => {
      console.log(`Consumer previous state ${previousState}.`)
      console.log(`Consumer new state ${newState}.`)
    }
  })
  await consumer.run({
    onMessage: async ({ ack, message, properties, redeliveryCount }) => {
      await ack(); // Default is individual ack
      // await ack({type: Consumer.ACK_TYPES.CUMULATIVE});
      console.log({
        message,
        properties,
        redeliveryCount,
      })
    }, autoAck: false, // specify true in order to use automaticAck
  });
}

run().catch(console.error)
```
## <a name="contributing"></a> Contributing

We would love to get help from the community in order to accelerate and expose the latest features of pulsar.

## <a name="license"></a> License
 MIT [LICENSE](https://github.com/ayeo-flex/pulsar-flex/blob/master/LICENSE) 
