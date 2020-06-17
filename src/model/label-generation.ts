/**
 * Label generator generic configuration.
 */
export interface ILabelGeneratorGenericConfiguration {
  id: string;
  name: string;
  type: string;
  configuration: any;
}

/**
 * Label generator manager configuration.
 */
export interface ILabelGenerationManagerConfiguration { }

/**
 * Configuration elements for label generation tenant engine.
 */
export interface ILabelGenerationConfiguration {
  manager: ILabelGenerationManagerConfiguration;
  generators: ILabelGeneratorGenericConfiguration[];
}

/**
 * Configuration for QR Code label generator.
 */
export interface IQrCodeGeneratorConfiguration {
  width: number;
  height: number;
  foregroundColor: string;
  backgroundColor: string;
}