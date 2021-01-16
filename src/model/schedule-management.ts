import { IDatastoreDefinition } from "./datastore";

/**
 * Configuration elements for schedule management tenant engine.
 */
export interface IScheduleManagementConfiguration {
  datastore: IDatastoreDefinition;
}
