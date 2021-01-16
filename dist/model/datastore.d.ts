/**
 * Datastore definition that references a global configuration.
 */
export interface IDatastoreDefinitionReference {
    reference: string;
}
/**
 * Datastore definition defined locally.
 */
export interface IDatastoreDefinitionLocal {
    type: string;
    configuration: any;
}
/**
 * Generic declaration for a datastore definition.
 */
export declare type IDatastoreDefinition = IDatastoreDefinitionReference | IDatastoreDefinitionLocal;
/**
 * Common fields for PostgreSQL client connection.
 */
export interface IPostgreSQLConfiguration {
    hostname: string;
    port: number;
    username: string;
    password: string;
    maxConnections: number;
}
/**
 * Configuration for postgres95 dialect.
 */
export interface IPostgres95Configuration extends IPostgreSQLConfiguration {
}
/**
 * Configuration for Warp 10 client connection.
 */
export interface IWarp10Configuration {
    hostname: string;
    port: number;
    application: string;
    tokenSecret: string;
}
/**
 * Configuration for InfluxDB client connection.
 */
export interface IInfluxDBConfiguration {
    hostname: string;
    port: number;
    databaseName: string;
}
