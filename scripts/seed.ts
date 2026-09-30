import { createClient } from 'next-sanity';
import { destinations } from '../src/data/destinations';
import { journeys } from '../src/data/journeys';
import { experiences } from '../src/data/experiences';

// You will provide the token and I will inject it here to run the script
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1z2013w5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skoAk32nKK1F8CauAQRr3fla8Quu4txbwui0JZIEJQLLsUJ4ed8KGftFX1pjHWxKsvtTOxv1FPckn2kxGhGAOLyw7M8V2kSQUt0nVlxPKUjSCsKF1BXgqErdP2AU0RNBBxdGg9GpFuEp5w51Pm4C0wriQbAkOUuhyhM6NL1cHLvtfrX9MT13', // This requires an editor token
});

async function seed() {
  console.log('Seeding Destinations...');
  for (const dest of destinations) {
    const doc = {
      _type: 'destination',
      _id: `destination-${dest.slug}`,
      name: dest.name,
      slug: { _type: 'slug', current: dest.slug },
      tagline: dest.tagline,
      description: dest.description,
      wildlife: dest.wildlife,
      bestTime: dest.bestTime,
      duration: dest.duration,
      travelStyle: dest.travelStyle,
      access: dest.access,
      featured: dest.featured,
    };
    await client.createOrReplace(doc);
    console.log(`Created destination: ${dest.name}`);
  }

  console.log('Seeding Experiences...');
  for (const exp of experiences) {
    const doc = {
      _type: 'experience',
      _id: `experience-${exp.slug}`,
      title: exp.title,
      slug: { _type: 'slug', current: exp.slug },
      tagline: exp.tagline,
      description: exp.description,
      featured: exp.featured,
    };
    await client.createOrReplace(doc);
    console.log(`Created experience: ${exp.title}`);
  }

  console.log('Seeding Journeys...');
  for (const journey of journeys) {
    const doc = {
      _type: 'journey',
      _id: `journey-${journey.slug}`,
      title: journey.title,
      slug: { _type: 'slug', current: journey.slug },
      subtitle: journey.subtitle,
      duration: journey.duration,
      style: journey.style,
      pace: journey.pace,
      transport: journey.transport,
      accommodation: journey.accommodation,
      startingPoint: journey.startingPoint,
      idealFor: journey.idealFor,
      priceFrom: journey.priceFrom,
      description: journey.description,
      highlights: journey.highlights,
      featured: journey.featured,
      inclusions: journey.inclusions,
      exclusions: journey.exclusions,
    };
    await client.createOrReplace(doc);
    console.log(`Created journey: ${journey.title}`);
  }
  
  console.log('Done!');
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
