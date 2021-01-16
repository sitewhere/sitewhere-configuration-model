import { IMqttConfiguration } from "./common";
/**
 * Generic router configuration properties.
 */
export interface IRouterGenericConfiguration {
    type: string;
    configuration: any;
}
/**
 * Single device type mapping of device token to destination.
 */
export interface IDeviceTypeMapping {
    deviceTypeToken: string;
    destinationId: string;
}
/**
 * Configuration for device type mapping router.
 */
export interface IDeviceTypeMappingRouterConfiguration {
    mappings: IDeviceTypeMapping[];
    defaultDestination: string;
}
/** Parameter extractor information */
export interface IParameterExtractorGenericConfiguration {
    type: string;
    configuration: any;
}
/**
 * Generic command destination configuration.
 */
export interface ICommandDestinationGenericConfiguration {
    id: string;
    type: string;
    parameterExtractor: IParameterExtractorGenericConfiguration;
    configuration: any;
}
/**
 * Configuration elements for command delivery tenant engine.
 */
export interface ICommandDeliveryConfiguration {
    router: IRouterGenericConfiguration;
    commandDestinations: ICommandDestinationGenericConfiguration[];
}
/**
 * Configuration for CoAP commmand destination.
 */
export interface ICoapCommandDestinationConfiguration {
}
/**
 * Configuration for MQTT command destination.
 */
export interface IMqttCommandDestinationConfiguration extends IMqttConfiguration {
}
/**
 * Configuration for default MQTT parameter extractor.
 */
export interface IDefaultMqttParameterExtractorConfiguration {
    commandTopicExpression: string;
    systemTopicExpression: string;
}
/**
 * Configuration for CoAP metadata parameter extractor.
 */
export interface IMetadataCoapParameterExtractorConfiguration {
    hostnameMetadataField: string;
    portMetadataField: string;
    urlMetadataField: string;
    methodMetadataField: string;
}
