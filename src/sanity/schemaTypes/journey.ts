import { defineField, defineType } from 'sanity';

export const journeyType = defineType({
  name: 'journey',
  title: 'Journey',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (e.g. "7 Nights")',
      type: 'string',
    }),
    defineField({
      name: 'style',
      title: 'Style (e.g. "Private Journey")',
      type: 'string',
    }),
    defineField({
      name: 'pace',
      title: 'Pace',
      type: 'string',
    }),
    defineField({
      name: 'transport',
      title: 'Transport',
      type: 'string',
    }),
    defineField({
      name: 'accommodation',
      title: 'Accommodation Style',
      type: 'string',
    }),
    defineField({
      name: 'startingPoint',
      title: 'Starting Point',
      type: 'string',
    }),
    defineField({
      name: 'idealFor',
      title: 'Ideal For',
      type: 'string',
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price From',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'destinations',
      title: 'Destinations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'destination' }] }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured (Show on Homepage)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary Days',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', type: 'number', title: 'Day Number' },
            { name: 'title', type: 'string', title: 'Day Title' },
            { name: 'location', type: 'string', title: 'Location' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'accommodation', type: 'string', title: 'Accommodation' },
            { name: 'activities', type: 'array', of: [{ type: 'string' }], title: 'Activities' },
            { name: 'image', type: 'image', title: 'Day Image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'exclusions',
      title: 'Exclusions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'cardImage',
    },
  },
});
