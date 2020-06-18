import { IMqttConfiguration } from "./common";
/**
 * Outbound connector generic configuration.
 */
export interface IOutboundConnectorGenericConfiguration {
    id: string;
    type: string;
    configuration: any;
}
/**
 * Configuration elements for outbound connectors tenant engine.
 */
export interface IOutboundConnectorsConfiguration {
    outboundConnectors: IOutboundConnectorGenericConfiguration[];
}
/**
 * Configuration for MQTT outbound connector.
 */
export interface IMqttOutboundConnectorConfiguration extends IMqttConfiguration {
    outboundTopic: string;
}
