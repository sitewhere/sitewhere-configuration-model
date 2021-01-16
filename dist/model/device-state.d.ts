import { IDatastoreDefinition } from "./datastore";
/**
 * Configuration elements for device state tenant engine.
 */
export interface IDeviceStateConfiguration {
    datastore: IDatastoreDefinition;
}
