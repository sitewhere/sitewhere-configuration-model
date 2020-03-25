/**
 * Generic router configuration properties.
 */
export interface IGenericRouterConfiguration {
    type: string;
    configuration: any;
}
/**
 * Generic command destination configuration.
 */
export interface IGenericCommandDestinationConfiguration {
    id: string;
    type: string;
    configuration: any;
}
/**
 * Configuration elements for command delivery tenant engine.
 */
export interface ICommandDeliveryConfiguration {
    router: IGenericRouterConfiguration;
    commandDestinations: IGenericCommandDestinationConfiguration[];
}
