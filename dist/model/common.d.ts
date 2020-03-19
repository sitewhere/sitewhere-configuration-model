/**
 * Common MQTT connection information.
 */
export interface IMqttConnectionConfiguration {
    protocol: string;
    hostname: string;
    port: number;
    topic: string;
    numThreads: number;
    qos: string;
    trustStorePath: string;
    trustStorePassword: string;
    keyStorePath: string;
    keyStorePassword: string;
    username: string;
    password: string;
    clientId: string;
    cleanSession: boolean;
}
