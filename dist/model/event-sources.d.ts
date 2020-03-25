import { IMqttConnectionConfiguration } from "./common";
/** Event decoder information */
export interface IEventDecoder {
    type: string;
    configuration: any;
}
/**
 * Format used to store event source data in a generic format.
 */
export interface IEventSourceGenericConfiguration {
    id: string;
    type: string;
    decoder: IEventDecoder;
    configuration: any;
}
/**
 * Configuration elements for event sources tenant engine.
 */
export interface IEventSourcesConfiguration {
    eventSources: IEventSourceGenericConfiguration[];
}
/**
 * Configuration for ActiveMQ broker event source.
 */
export interface IActiveMqBrokerConfiguration {
    brokerName: string;
    transportUri: string;
    queueName: string;
    numConsumers: number;
}
/**
 * Configuration for ActiveMQ client event source.
 */
export interface IActiveMqClientConfiguration {
    remoteUri: string;
    queueName: string;
    numConsumers: number;
}
/**
 * Configuration for CoAP server event source.
 */
export interface ICoapServerConfiguration {
    port: number;
}
/**
 * Configuration for Azure Event Hub event source.
 */
export interface IEventHubConfiguration {
    consumerGroupName: string;
    namespaceName: string;
    eventHubName: string;
    sasKeyName: string;
    sasKey: string;
    storageConnectionString: string;
    storageContainerName: string;
    hostNamePrefix: string;
}
/**
 * Configuration for MQTT event source.
 */
export interface IMqttEventSourceConfiguration extends IMqttConnectionConfiguration {
}
/**
 * Configuration for RabbitMQ event source.
 */
export interface IRabbitMqConfiguration {
    connectionUri: string;
    queueName: string;
    numConsumers: number;
    reconnectInterval: number;
    durable: boolean;
}
