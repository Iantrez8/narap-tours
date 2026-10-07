import { client } from './client';
import { Destination } from '../data/destinations';
import { Journey } from '../data/journeys';
import { Experience } from '../data/experiences';

const UNIVERSAL_PLACEHOLDER = '/images/final-cta.jpg';

// ── Types ──────────────────────────────────────────────────────────────────

export interface WhyTravelPillar {
  icon: string;
  title: string;
  description: string;
}

export interface GlobalSettings {
  // Site
  siteTitle?: string;
  siteTagline?: string;
  // Hero
  homeHeroHeadline?: string;
  homeHeroSubtitle?: string;
  homeHeroImage?: string;
  homeHeroPrimaryBtnText?: string;
  homeHeroSecondaryBtnText?: string;
  // Journeys Page Hero
  journeysHeroHeadline?: string;
  journeysHeroSubtitle?: string;
  journeysHeroImage?: string;
  // Intro
  introOverline?: string;
  introHeading?: string;
  introBody?: string[];
  introImage?: string;
  // Why Travel
  whyTravelOverline?: string;
  whyTravelHeading?: string;
  whyTravelImage?: string;
  whyTravelPillars?: WhyTravelPillar[];
  // Journey Designer CTA
  ctaOverline?: string;
  ctaHeading?: string;
  ctaBody?: string;
  ctaImage?: string;
  ctaPrimaryBtnText?: string;
  ctaSecondaryLinkText?: string;
  // Final CTA
  finalCtaHeading?: string;
  finalCtaBody?: string;
  finalCtaImage?: string;
  finalCtaPrimaryBtnText?: string;
  finalCtaSecondaryLinkText?: string;
  // Contact
  contactPhone?: string;
  contactEmail?: string;
  contactLocation?: string;
  contactOfficeHours?: string;
  // Social
  socialInstagram?: string;
  socialFacebook?: string;
  socialX?: string;
  socialYouTube?: string;
  socialLinkedIn?: string;
  socialTikTok?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  initials?: string;
  country?: string;
  journey?: string;
  quote: string;
  rating: number;
  photo?: string;
  featured: boolean;
  order?: number;
}

// ── Global Settings ────────────────────────────────────────────────────────

export async function getGlobalSettings(): Promise<GlobalSettings> {
  const query = `*[_type == "globalSettings"][0] {
    siteTitle,
    siteTagline,
    homeHeroHeadline,
    homeHeroSubtitle,
    "homeHeroImage": homeHeroImage.asset->url,
    homeHeroPrimaryBtnText,
    homeHeroSecondaryBtnText,
    journeysHeroHeadline,
    journeysHeroSubtitle,
    "journeysHeroImage": journeysHeroImage.asset->url,
    introOverline,
    introHeading,
    introBody,
    "introImage": introImage.asset->url,
    whyTravelOverline,
    whyTravelHeading,
    "whyTravelImage": whyTravelImage.asset->url,
    whyTravelPillars[] {
      icon,
      title,
      description
    },
    ctaOverline,
    ctaHeading,
    ctaBody,
    "ctaImage": ctaImage.asset->url,
    ctaPrimaryBtnText,
    ctaSecondaryLinkText,
    finalCtaHeading,
    finalCtaBody,
    "finalCtaImage": finalCtaImage.asset->url,
    finalCtaPrimaryBtnText,
    finalCtaSecondaryLinkText,
    contactPhone,
    contactEmail,
    contactLocation,
    contactOfficeHours,
    socialInstagram,
    socialFacebook,
    socialX,
    socialYouTube,
    socialLinkedIn,
    socialTikTok
  }`;

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return data || {};
  } catch (err) {
    console.error('Failed to fetch Global Settings from Sanity', err);
    return {};
  }
}

// ── Testimonials ───────────────────────────────────────────────────────────

export async function getSanityTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial"] | order(order asc, _createdAt asc) {
    _id,
    name,
    initials,
    country,
    journey,
    quote,
    rating,
    "photo": photo.asset->url,
    featured,
    order
  }`;

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return data || [];
  } catch (err) {
    console.error('Failed to fetch testimonials from Sanity', err);
    return [];
  }
}

export async function getFeaturedSanityTestimonials(): Promise<Testimonial[]> {
  const all = await getSanityTestimonials();
  return all.filter((t) => t.featured);
}

// ── Destinations ───────────────────────────────────────────────────────────

export async function getSanityDestinations(): Promise<Destination[]> {
  const query = `*[_type == "destination"] {
    "slug": slug.current,
    name,
    tagline,
    description,
    wildlife,
    bestTime,
    duration,
    travelStyle,
    access,
    featured,
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url
  }`;
  
  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return (data || []).map((d: any) => ({
      ...d,
      heroImage: d.heroImage || UNIVERSAL_PLACEHOLDER,
      cardImage: d.cardImage || UNIVERSAL_PLACEHOLDER
    }));
  } catch (err) {
    console.error("Failed to fetch from Sanity", err);
    return [];
  }
}

export async function getFeaturedSanityDestinations(): Promise<Destination[]> {
  const dests = await getSanityDestinations();
  return dests.filter((d) => d.featured);
}

export async function getSanityDestinationBySlug(slug: string): Promise<Destination | null> {
  const query = `*[_type == "destination" && slug.current == $slug][0] {
    "slug": slug.current,
    name,
    tagline,
    description,
    wildlife,
    bestTime,
    duration,
    travelStyle,
    access,
    featured,
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url
  }`;
  
  try {
    const data = await client.fetch(query, { slug }, { next: { revalidate: 0 } });
    if (!data) return null;
    
    return {
      ...data,
      heroImage: data.heroImage || UNIVERSAL_PLACEHOLDER,
      cardImage: data.cardImage || UNIVERSAL_PLACEHOLDER
    };
  } catch (err) {
    console.error("Failed to fetch destination by slug from Sanity", err);
    return null;
  }
}

// ── Journeys ───────────────────────────────────────────────────────────────

export async function getSanityJourneys(): Promise<Journey[]> {
  const query = `*[_type == "journey"] {
    "slug": slug.current,
    title,
    subtitle,
    duration,
    style,
    pace,
    transport,
    accommodation,
    startingPoint,
    idealFor,
    priceFrom,
    description,
    highlights,
    featured,
    inclusions,
    exclusions,
    "heroImage": coalesce(heroImage.asset->url, destinations[0]->heroImage.asset->url),
    "cardImage": coalesce(cardImage.asset->url, destinations[0]->cardImage.asset->url)
  }`;
  
  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return (data || []).map((j: any) => ({
      ...j,
      heroImage: j.heroImage || UNIVERSAL_PLACEHOLDER,
      cardImage: j.cardImage || UNIVERSAL_PLACEHOLDER
    }));
  } catch (err) {
    console.error("Failed to fetch from Sanity", err);
    return [];
  }
}

export async function getFeaturedSanityJourneys(): Promise<Journey[]> {
  const journeys = await getSanityJourneys();
  return journeys.filter((j) => j.featured);
}

export async function getSanityJourneyBySlug(slug: string): Promise<Journey | null> {
  const query = `*[_type == "journey" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    subtitle,
    duration,
    style,
    pace,
    transport,
    accommodation,
    startingPoint,
    idealFor,
    priceFrom,
    description,
    highlights,
    featured,
    itinerary[]{
      day,
      title,
      location,
      description,
      accommodation,
      activities,
      "image": image.asset->url
    },
    inclusions,
    exclusions,
    "heroImage": coalesce(heroImage.asset->url, destinations[0]->heroImage.asset->url),
    "cardImage": coalesce(cardImage.asset->url, destinations[0]->cardImage.asset->url)
  }`;
  
  try {
    const data = await client.fetch(query, { slug }, { next: { revalidate: 0 } });
    if (!data) return null;
    
    return {
      ...data,
      highlights: data.highlights || [],
      itinerary: (data.itinerary || []).map((day: any) => ({
        ...day,
        activities: day.activities || [],
        image: day.image || UNIVERSAL_PLACEHOLDER
      })),
      inclusions: data.inclusions || [],
      exclusions: data.exclusions || [],
      heroImage: data.heroImage || UNIVERSAL_PLACEHOLDER,
      cardImage: data.cardImage || UNIVERSAL_PLACEHOLDER
    };
  } catch (err) {
    console.error("Failed to fetch journey by slug from Sanity", err);
    return null;
  }
}

// ── Experiences ────────────────────────────────────────────────────────────

export async function getSanityExperiences(): Promise<Experience[]> {
  const query = `*[_type == "experience" && slug.current != "photography"] {
    "slug": slug.current,
    title,
    tagline,
    description,
    featured,
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url
  }`;
  
  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    return (data || []).map((e: any) => ({
      ...e,
      heroImage: e.heroImage || UNIVERSAL_PLACEHOLDER,
      cardImage: e.cardImage || UNIVERSAL_PLACEHOLDER
    }));
  } catch (err) {
    console.error("Failed to fetch from Sanity", err);
    return [];
  }
}

export async function getFeaturedSanityExperiences(): Promise<Experience[]> {
  const exps = await getSanityExperiences();
  return exps.filter((e) => e.featured);
}

export async function getSanityExperienceBySlug(slug: string): Promise<Experience | null> {
  const query = `*[_type == "experience" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    tagline,
    description,
    featured,
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url
  }`;
  
  try {
    const data = await client.fetch(query, { slug }, { next: { revalidate: 0 } });
    if (!data) return null;
    
    return {
      ...data,
      heroImage: data.heroImage || UNIVERSAL_PLACEHOLDER,
      cardImage: data.cardImage || UNIVERSAL_PLACEHOLDER
    };
  } catch (err) {
    console.error("Failed to fetch experience by slug from Sanity", err);
    return null;
  }
}
