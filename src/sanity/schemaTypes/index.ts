import { type SchemaTypeDefinition } from 'sanity';
import { destinationType } from './destination';
import { journeyType } from './journey';
import { experienceType } from './experience';
import { globalSettingsType } from './globalSettings';

export const schemaTypes: SchemaTypeDefinition[] = [
  destinationType,
  journeyType,
  experienceType,
  globalSettingsType,
];
