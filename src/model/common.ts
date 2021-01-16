/**
 * Fields used to connect to an MQTT broker.
 */
export interface IMqttConnectionFields {
  protocol: string;
  hostname: string;
  port: number;
  clientId: string;
  cleanSession: boolean;
}

/**
 * Fields used to establish secure connection to MQTT broker.
 */
export interface IMqttSecurityFields {
  trustStorePath: string;
  trustStorePassword: string;
  keyStorePath: string;
  keyStorePassword: string;
  username: string;
  password: string;
}

/**
 * Provides common connection and security information agents which use MQTT.
 */
export interface IMqttConfiguration
  extends IMqttConnectionFields,
    IMqttSecurityFields {}

/**
 * Common base for scripted components.
 */
export interface IScriptedComponentConfiguration {
  scriptId: string;
}
