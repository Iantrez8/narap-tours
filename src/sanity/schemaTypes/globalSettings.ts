import { defineField, defineType } from 'sanity';

export const globalSettingsType = defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'homeHeroHeadline',
      title: 'Home Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'homeHeroSubtitle',
      title: 'Home Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'homeHeroImage',
      title: 'Home Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone Number (WhatsApp)',
      type: 'string',
    }),
  ],
});
