import { IDatastoreDefinition } from "./datastore";

/**
 * Common fields for PostgreSQL configuration.
 */
export interface IDeviceManagementConfiguration {
  datastore: IDatastoreDefinition | null;
}
