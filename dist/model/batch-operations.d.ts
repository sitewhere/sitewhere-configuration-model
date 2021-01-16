import { IDatastoreDefinition } from "./datastore";
/**
 * Configuration for batch operations manager.
 */
export interface IBatchOperationManagerConfiguration {
    throttleDelayMs: number;
}
/**
 * Configuration elements for batch operations tenant engine.
 */
export interface IBatchOperationsConfiguration {
    datastore: IDatastoreDefinition;
    batchOperationManager: IBatchOperationManagerConfiguration;
}
