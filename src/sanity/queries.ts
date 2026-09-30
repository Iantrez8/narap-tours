import { client } from './client';
import { Destination } from '../data/destinations';
import { Journey } from '../data/journeys';
import { Experience } from '../data/experiences';

const UNIVERSAL_PLACEHOLDER = '/images/final-cta.jpg';

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
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url
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
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url
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

export async function getSanityExperiences(): Promise<Experience[]> {
  const query = `*[_type == "experience"] {
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
