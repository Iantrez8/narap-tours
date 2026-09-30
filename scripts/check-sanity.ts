import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '1z2013w5',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function main() {
  const dests = await client.fetch(`*[_type == "destination"] { "slug": slug.current, featured, "heroImage": heroImage.asset->url, "cardImage": cardImage.asset->url }`);
  console.log("Destinations:", JSON.stringify(dests, null, 2));
  
  const journeys = await client.fetch(`*[_type == "journey"] { "slug": slug.current, featured, "heroImage": heroImage.asset->url, "cardImage": cardImage.asset->url }`);
  console.log("Journeys:", JSON.stringify(journeys, null, 2));

  const exps = await client.fetch(`*[_type == "experience"] { "slug": slug.current, featured, "heroImage": heroImage.asset->url, "cardImage": cardImage.asset->url }`);
  console.log("Experiences:", JSON.stringify(exps, null, 2));
}

main().catch(console.error);
