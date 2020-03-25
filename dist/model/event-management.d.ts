import { IDatastoreDefinition } from "./datastore";
/**
 * Configuration elements for event management tenant engine.
 */
export interface IEventManagementConfiguration {
    datastore: IDatastoreDefinition;
}
