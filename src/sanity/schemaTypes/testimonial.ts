import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Traveller Name',
      type: 'string',
      description: 'The full name of the traveller (with their permission).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Initials (for avatar)',
      type: 'string',
      description: 'e.g. "SR" — shown in the avatar circle.',
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Where the traveller is from, e.g. "United Kingdom".',
    }),
    defineField({
      name: 'journey',
      title: 'Journey Name',
      type: 'string',
      description: 'The journey they took, e.g. "The Mara in Slow Motion".',
    }),
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      description: 'The full testimonial text. Use their own words.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating (out of 5)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5).integer(),
    }),
    defineField({
      name: 'photo',
      title: 'Traveller Photo (optional)',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload a photo of the traveller (with permission). If left empty, initials will be used.',
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Leave blank to use creation order.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'journey',
      media: 'photo',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
