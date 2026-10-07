import { defineField, defineType } from 'sanity';

export const globalSettingsType = defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: '🏔 Hero Section' },
    { name: 'intro', title: '📖 Intro Section' },
    { name: 'whyTravel', title: '✅ Why Travel With Us' },
    { name: 'journeyDesignerCTA', title: '🗺 Journey Designer CTA' },
    { name: 'finalCTA', title: '🏁 Final CTA Section' },
    { name: 'contact', title: '📞 Contact & Location' },
    { name: 'social', title: '📱 Social Media' },
    { name: 'site', title: '🌐 Site Info' },
    { name: 'journeysHero', title: '🗺 Journeys Page Hero' },
  ],
  fields: [
    // ── Site Info ──────────────────────────────────────
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      group: 'site',
    }),
    defineField({
      name: 'siteTagline',
      title: 'Site Tagline (for meta descriptions)',
      type: 'string',
      group: 'site',
    }),

    // ── Hero Section ───────────────────────────────────
    defineField({
      name: 'homeHeroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline shown on the homepage hero. e.g. "Travel, Beyond the Ordinary."',
      group: 'hero',
    }),
    defineField({
      name: 'homeHeroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Supporting text shown under the hero headline.',
      group: 'hero',
    }),
    defineField({
      name: 'homeHeroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'homeHeroPrimaryBtnText',
      title: 'Hero Primary Button Text',
      type: 'string',
      initialValue: 'Design My Journey',
      group: 'hero',
    }),
    defineField({
      name: 'homeHeroSecondaryBtnText',
      title: 'Hero Secondary Link Text',
      type: 'string',
      initialValue: 'Explore Destinations',
      group: 'hero',
    }),

    // ── Journeys Page Hero ─────────────────────────────
    defineField({
      name: 'journeysHeroHeadline',
      title: 'Journeys Hero Headline',
      type: 'string',
      initialValue: 'Every Journey, Designed for You',
      group: 'journeysHero',
    }),
    defineField({
      name: 'journeysHeroSubtitle',
      title: 'Journeys Hero Subtitle',
      type: 'text',
      initialValue: 'No fixed itineraries. No group schedules. Just the world, your way.',
      group: 'journeysHero',
    }),
    defineField({
      name: 'journeysHeroImage',
      title: 'Journeys Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'journeysHero',
    }),

    // ── Intro Section ──────────────────────────────────
    defineField({
      name: 'introOverline',
      title: 'Intro Overline',
      type: 'string',
      initialValue: "We Don't Sell Packages",
      group: 'intro',
    }),
    defineField({
      name: 'introHeading',
      title: 'Intro Heading',
      type: 'string',
      initialValue: 'We Design Journeys.',
      group: 'intro',
    }),
    defineField({
      name: 'introBody',
      title: 'Intro Body Text',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Each item is a paragraph.',
      group: 'intro',
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Image',
      type: 'image',
      options: { hotspot: true },
      group: 'intro',
    }),

    // ── Why Travel With Us ─────────────────────────────
    defineField({
      name: 'whyTravelOverline',
      title: 'Why Travel — Overline',
      type: 'string',
      initialValue: 'Why NARAP Tours & Travel',
      group: 'whyTravel',
    }),
    defineField({
      name: 'whyTravelHeading',
      title: 'Why Travel — Heading',
      type: 'string',
      initialValue: 'Your Journey, Our Craft',
      group: 'whyTravel',
    }),
    defineField({
      name: 'whyTravelImage',
      title: 'Why Travel — Side Image',
      type: 'image',
      options: { hotspot: true },
      group: 'whyTravel',
    }),
    defineField({
      name: 'whyTravelPillars',
      title: 'Why Travel — Pillars',
      description: 'The 4 value pillars shown in the "Why Travel With Us" section.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Icon Name', description: 'One of: Compass, Shield, Users, Heart, Star, Globe, Map, Camera' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      group: 'whyTravel',
    }),

    // ── Journey Designer CTA ───────────────────────────
    defineField({
      name: 'ctaOverline',
      title: 'Journey Designer CTA — Overline',
      type: 'string',
      initialValue: 'Journey Designer',
      group: 'journeyDesignerCTA',
    }),
    defineField({
      name: 'ctaHeading',
      title: 'Journey Designer CTA — Heading',
      type: 'string',
      initialValue: 'Tell Us How You Want to Experience the World.',
      group: 'journeyDesignerCTA',
    }),
    defineField({
      name: 'ctaBody',
      title: 'Journey Designer CTA — Body Text',
      type: 'text',
      group: 'journeyDesignerCTA',
    }),
    defineField({
      name: 'ctaImage',
      title: 'Journey Designer CTA — Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'journeyDesignerCTA',
    }),
    defineField({
      name: 'ctaPrimaryBtnText',
      title: 'Journey Designer CTA — Primary Button Text',
      type: 'string',
      initialValue: 'Design My Journey',
      group: 'journeyDesignerCTA',
    }),
    defineField({
      name: 'ctaSecondaryLinkText',
      title: 'Journey Designer CTA — Secondary Link Text',
      type: 'string',
      initialValue: 'Or speak with a travel designer',
      group: 'journeyDesignerCTA',
    }),

    // ── Final CTA Section ──────────────────────────────
    defineField({
      name: 'finalCtaHeading',
      title: 'Final CTA — Heading',
      type: 'string',
      initialValue: 'Your Next Journey Is Waiting.',
      group: 'finalCTA',
    }),
    defineField({
      name: 'finalCtaBody',
      title: 'Final CTA — Body',
      type: 'string',
      initialValue: 'Tell us how you want to experience the world.',
      group: 'finalCTA',
    }),
    defineField({
      name: 'finalCtaImage',
      title: 'Final CTA — Background Image',
      type: 'image',
      options: { hotspot: true },
      group: 'finalCTA',
    }),
    defineField({
      name: 'finalCtaPrimaryBtnText',
      title: 'Final CTA — Primary Button Text',
      type: 'string',
      initialValue: 'Design My Journey',
      group: 'finalCTA',
    }),
    defineField({
      name: 'finalCtaSecondaryLinkText',
      title: 'Final CTA — Secondary Link Text',
      type: 'string',
      initialValue: 'Speak With a Travel Designer',
      group: 'finalCTA',
    }),

    // ── Contact & Location ─────────────────────────────
    defineField({
      name: 'contactPhone',
      title: 'Phone Number (WhatsApp)',
      type: 'string',
      description: 'Include country code, e.g. +254712345678',
      group: 'contact',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email Address',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactLocation',
      title: 'Physical Location / Address',
      type: 'string',
      description: 'e.g. Nairobi, Kenya',
      group: 'contact',
    }),
    defineField({
      name: 'contactOfficeHours',
      title: 'Office Hours',
      type: 'string',
      description: 'e.g. Mon – Fri, 8am – 6pm EAT',
      group: 'contact',
    }),

    // ── Social Media ───────────────────────────────────
    defineField({
      name: 'socialInstagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'socialFacebook',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'socialX',
      title: 'X (Twitter) URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'socialYouTube',
      title: 'YouTube URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'socialLinkedIn',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'socialTikTok',
      title: 'TikTok URL',
      type: 'url',
      group: 'social',
    }),
  ],
});
