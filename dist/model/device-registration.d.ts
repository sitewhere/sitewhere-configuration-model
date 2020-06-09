/**
 * Default settings for auto registration device assignments.
 */
export interface IAssignmentDefaults {
    defaultDeviceTypeToken: string | null;
    defaultCustomerToken: string | null;
    defaultAreaToken: string | null;
}
/**
 * Configuration elements for device registration tenant engine.
 */
export interface IDeviceRegistrationConfiguration {
    allowNewDevices: boolean;
    assignmentDefaults: IAssignmentDefaults;
}
