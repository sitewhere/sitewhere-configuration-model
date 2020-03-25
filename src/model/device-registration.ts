/**
 * Default settings for auto registration device assignments.
 */
export interface IAssignmentDefaults {
  useDefaultDeviceType: boolean;
  defaultDeviceTypeToken: string;
  useDefaultCustomer: boolean;
  defaultCustomerToken: string;
  useDefaultArea: boolean;
  defaultAreaToken: string;
}

/**
 * Configuration elements for device registration tenant engine.
 */
export interface IDeviceRegistrationConfiguration {
  allowNewDevices: boolean;
  assignmentDefaults: IAssignmentDefaults;
}
