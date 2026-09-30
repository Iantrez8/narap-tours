import { createClient } from 'next-sanity';

import { destinations } from '../src/data/destinations';
import { journeys } from '../src/data/journeys';
import { experiences } from '../src/data/experiences';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1z2013w5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skoAk32nKK1F8CauAQRr3fla8Quu4txbwui0JZIEJQLLsUJ4ed8KGftFX1pjHWxKsvtTOxv1FPckn2kxGhGAOLyw7M8V2kSQUt0nVlxPKUjSCsKF1BXgqErdP2AU0RNBBxdGg9GpFuEp5w51Pm4C0wriQbAkOUuhyhM6NL1cHLvtfrX9MT13',
});

async function uploadImage(url: string) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const buffer = await res.arrayBuffer();
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: url.split('?')[0].split('/').pop() + '.jpg',
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err: any) {
    console.error(`Failed to upload image from ${url}`, err.message);
    return null;
  }
}

async function seedImages() {
  console.log('Starting Image Seeder... This will safely patch existing records without overwriting your text changes.');

  // EXPERIENCES
  console.log('\n--- Patching Experiences ---');
  for (const exp of experiences) {
    console.log(`Processing: ${exp.title}`);
    const docId = `experience-${exp.slug}`;
    const updates: any = {};
    if (exp.heroImage) {
      const img = await uploadImage(exp.heroImage);
      if (img) updates.heroImage = img;
    }
    if (exp.cardImage) {
      const img = await uploadImage(exp.cardImage);
      if (img) updates.cardImage = img;
    }
    
    if (Object.keys(updates).length > 0) {
      await client.patch(docId).set(updates).commit();
      console.log(`✅ Updated images for ${exp.title}`);
    }
  }

  // DESTINATIONS
  console.log('\n--- Patching Destinations ---');
  for (const dest of destinations) {
    console.log(`Processing: ${dest.name}`);
    const docId = `destination-${dest.slug}`;
    const updates: any = {};
    if (dest.heroImage) {
      const img = await uploadImage(dest.heroImage);
      if (img) updates.heroImage = img;
    }
    if (dest.cardImage) {
      const img = await uploadImage(dest.cardImage);
      if (img) updates.cardImage = img;
    }
    
    if (Object.keys(updates).length > 0) {
      await client.patch(docId).set(updates).commit();
      console.log(`✅ Updated images for ${dest.name}`);
    }
  }

  // JOURNEYS
  console.log('\n--- Patching Journeys ---');
  for (const journey of journeys) {
    console.log(`Processing: ${journey.title}`);
    const docId = `journey-${journey.slug}`;
    const updates: any = {};
    if (journey.heroImage) {
      const img = await uploadImage(journey.heroImage);
      if (img) updates.heroImage = img;
    }
    if (journey.cardImage) {
      const img = await uploadImage(journey.cardImage);
      if (img) updates.cardImage = img;
    }
    
    if (Object.keys(updates).length > 0) {
      await client.patch(docId).set(updates).commit();
      console.log(`✅ Updated images for ${journey.title}`);
    }
  }

  console.log('\n🎉 All images have been successfully uploaded and linked!');
}

seedImages().catch(console.error);
