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
