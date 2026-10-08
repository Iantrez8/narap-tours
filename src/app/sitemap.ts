import { MetadataRoute } from 'next';
import { getSanityJourneys, getSanityDestinations, getSanityExperiences } from '@/sanity/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://naraptoursandtravel.com';

  // Fetch all dynamic content from Sanity
  const journeys = await getSanityJourneys();
  const destinations = await getSanityDestinations();
  const experiences = await getSanityExperiences();

  // Map dynamic routes
  const journeyUrls = journeys.map((journey) => ({
    url: `${baseUrl}/journeys/${journey.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const destinationUrls = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const experienceUrls = experiences.map((exp) => ({
    url: `${baseUrl}/experiences/${exp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/journeys',
    '/destinations',
    '/experiences',
    '/plan',
    '/referrals',
    '/journal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...staticRoutes, ...journeyUrls, ...destinationUrls, ...experienceUrls];
}
