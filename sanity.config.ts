import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1z2013w5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'NARAP Tours & Travel Studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
