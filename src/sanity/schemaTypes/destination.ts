import { defineField, defineType } from 'sanity';

export const destinationType = defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'wildlife',
      title: 'Wildlife (Highlights)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bestTime',
      title: 'Best Time to Visit',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Recommended Duration',
      type: 'string',
    }),
    defineField({
      name: 'travelStyle',
      title: 'Travel Style',
      type: 'string',
    }),
    defineField({
      name: 'access',
      title: 'Access / Logistics',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured (Show on Homepage)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'cardImage',
    },
  },
});
