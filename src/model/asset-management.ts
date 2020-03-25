import { IDatastoreDefinition } from "./datastore";

/**
 * Configuration elements for asset management tenant engine.
 */
export interface IAssetManagementConfiguration {
  datastore: IDatastoreDefinition;
}
