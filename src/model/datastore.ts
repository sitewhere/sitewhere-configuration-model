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
export type IDatastoreDefinition =
  | IDatastoreDefinitionReference
  | IDatastoreDefinitionLocal;

/**
 * Common fields for PostgreSQL configuration.
 */
export interface PostgreSQLConfiguration {
  hostname: string;
  port: number;
  username: string;
  password: string;
  maxConnections: number;
}

/**
 * Configuration for postgres95 dialect.
 */
export interface Postgres95Configuration extends PostgreSQLConfiguration {}
