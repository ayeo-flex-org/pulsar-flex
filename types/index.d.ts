export class Producer {
  constructor(config: ProducerConfig);
}

export class Consumer {
  constructor(config: ConsumerConfig);
}

export interface ConsumerConfig {
  discoveryServers: string[];
  topic: string;
  jwt?: string;
  subscription?: string;
  subType: subType;
  consumerName: string;
  readCompacted: false;
  receiveQueueSize: number;
  logLevel?: logLevel;
  logCreator?: logCreator;
}

export interface ProducerConfig {
  discoveryServers: string[];
  topic: string;
  producerAccessMode: producerAccessMode;
  jwt?: string;
  logLevel?: logLevel;
  logCreator?: logCreator;
}

export interface LogEntry {
  namespace: string;
  level: logLevel;
  label: string;
  log: LoggerEntryContent;
}

export interface LoggerEntryContent {
  readonly timestamp: string;
  readonly message: string;

  [key: string]: any;
}

export type logCreator = (logLevel: logLevel) => (entry: LogEntry) => void;

export enum logLevel {
  NOTHING = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  DEBUG = 4,
  TRACE = 5,
}

export enum producerAccessMode {
  Shared = 0,
  Exclusive = 1,
  WaitForExclusive = 2,
}

export enum subType {
  Exclusive = 0,
  Shared = 1,
  Failover = 2,
  Key_Shared = 3,
}
