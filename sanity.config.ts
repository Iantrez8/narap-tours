import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1z2013w5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'NARAP Tours & Travel Studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton for Global Settings
            S.listItem()
              .title('Global Settings')
              .id('globalSettings')
              .child(
                S.document()
                  .schemaType('globalSettings')
                  .documentId('globalSettings')
              ),
            S.divider(),
            // Regular document types
            S.documentTypeListItem('destination').title('Destinations'),
            S.documentTypeListItem('journey').title('Journeys'),
            S.documentTypeListItem('experience').title('Experiences'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
          ]),
    }),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
});
