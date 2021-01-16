import { IDatastoreDefinition } from "./datastore";
/**
 * Configuration elements for device management tenant engine.
 */
export interface IDeviceManagementConfiguration {
    datastore: IDatastoreDefinition;
}
