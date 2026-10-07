import { type SchemaTypeDefinition } from 'sanity';
import { destinationType } from './destination';
import { journeyType } from './journey';
import { experienceType } from './experience';
import { globalSettingsType } from './globalSettings';
import { testimonialType } from './testimonial';

export const schemaTypes: SchemaTypeDefinition[] = [
  globalSettingsType,
  destinationType,
  journeyType,
  experienceType,
  testimonialType,
];
