export interface Journey {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  style: string;
  pace: string;
  transport: string;
  accommodation: string;
  startingPoint: string;
  idealFor: string;
  priceFrom: string;
  heroImage: string;
  cardImage: string;
  description: string;
  highlights: string[];
  destinations: string[];
  featured: boolean;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  accommodation: string;
  activities: string[];
  image: string;
}

/* 
  PLACEHOLDER DATA — structured for easy replacement 
  with real business content from CMS (Phase 2).
  Images use Unsplash for development only.
*/

export const journeys: Journey[] = [
  {
    slug: 'bali-beyond',
    title: 'Bali & Beyond',
    subtitle: 'A spiritual and tropical awakening in the heart of Indonesia.',
    duration: '12 Nights',
    style: 'Private Journey',
    pace: 'Balanced',
    transport: 'Private SUV, Boat',
    accommodation: 'Luxury Villas, Jungle Retreat',
    startingPoint: 'Denpasar',
    idealFor: 'Couples, Wellness Seekers',
    priceFrom: 'From $4,200 per person',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    description: 'Immerse yourself in the spirituality, culture, and natural beauty of Bali. From the emerald rice terraces of Ubud to the pristine beaches of Seminyak, this journey balances deep relaxation with authentic cultural encounters.',
    highlights: [
      'Private water purification ceremony',
      'Sunrise volcano trek',
      'Exclusive villa stays with private pools',
      'Balinese cooking masterclass',
      'Island hopping to Nusa Penida'
    ],
    destinations: ['bali-indonesia'],
    featured: true,
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    slug: 'parisian-romance',
    title: 'Parisian Romance',
    subtitle: 'The city of light, designed for two.',
    duration: '5 Nights',
    style: 'City Break',
    pace: 'Relaxed',
    transport: 'Private Chauffeur',
    accommodation: '5-Star Boutique Hotel',
    startingPoint: 'Paris',
    idealFor: 'Couples, Anniversaries',
    priceFrom: 'From $3,500 per person',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e907a5ea82c?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1502602898657-3e907a5ea82c?w=800&q=80',
    description: 'Experience Paris beyond the tourist trail. This intimate journey unlocks exclusive access to the city\'s most romantic corners, finest dining, and hidden art collections.',
    highlights: [
      'Private after-hours Louvre tour',
      'Michelin-starred dining experiences',
      'Seine river cruise at twilight',
      'Perfume making workshop',
      'Champagne tasting in a historic cellar'
    ],
    destinations: ['paris-france'],
    featured: true,
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    slug: 'mara-in-slow-motion',
    title: 'The Mara in Slow Motion',
    subtitle: 'Seven nights of unhurried wilderness in the world\'s greatest game reserve.',
    duration: '7 Nights',
    style: 'Private Journey',
    pace: 'Relaxed',
    transport: 'Private 4x4, Light Aircraft',
    accommodation: 'Luxury Tented Camp, Lodge',
    startingPoint: 'Nairobi',
    idealFor: 'Couples, Wildlife Enthusiasts',
    priceFrom: 'From $4,850 per person',
    heroImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80',
    description: 'Leave the pace of daily life behind. This journey invites you to settle into the rhythm of the Mara — morning game drives at first light, afternoons watching elephants from your veranda, evenings by the fire under an African sky.',
    highlights: [
      'Private game drives at sunrise and sunset',
      'Bush breakfast in the savannah',
      'Optional hot-air balloon safari',
      'Walking safari with Maasai guides',
      'Exclusive camp with panoramic Mara views',
    ],
    destinations: ['nairobi', 'maasai-mara'],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nairobi',
        location: 'Nairobi',
        description: 'Arrive at Jomo Kenyatta International Airport. Your private transfer takes you to a boutique hotel in the Karen neighbourhood, once home to Karen Blixen. Rest, acclimatize, and prepare for the journey ahead.',
        accommodation: 'Boutique Hotel, Karen',
        activities: ['Airport transfer', 'Welcome briefing', 'Evening at leisure'],
        image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&q=80',
      },
      {
        day: 2,
        title: 'Into the Mara',
        location: 'Maasai Mara',
        description: 'A morning flight over the Great Rift Valley delivers you to the Maasai Mara. Touch down on a remote airstrip where your guide awaits. Your first game drive begins immediately — this is the Mara welcoming you.',
        accommodation: 'Luxury Tented Camp',
        activities: ['Light aircraft to Mara', 'Afternoon game drive', 'Sundowner in the bush'],
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      },
      {
        day: 3,
        title: 'First Light',
        location: 'Maasai Mara',
        description: 'Wake before dawn for your first sunrise drive. The Mara at first light is extraordinary — predators returning from the hunt, herds moving across golden grassland, the sky turning from indigo to amber.',
        accommodation: 'Luxury Tented Camp',
        activities: ['Sunrise game drive', 'Bush breakfast', 'Afternoon at leisure', 'Evening game drive'],
        image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963fc8?w=800&q=80',
      },
      {
        day: 4,
        title: 'Into the Wild',
        location: 'Maasai Mara',
        description: 'A full day in the reserve. Follow the Mara River where crocodiles sun themselves on the banks. Search for leopard in the riverine forest. Watch hippos at their afternoon bath.',
        accommodation: 'Luxury Tented Camp',
        activities: ['Full-day game drive', 'Picnic lunch by the Mara River', 'Big cat tracking'],
        image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
      },
      {
        day: 5,
        title: 'The Balloon Morning',
        location: 'Maasai Mara',
        description: 'Rise in darkness for an optional hot-air balloon flight over the Mara. Drift silently above the savannah as the sun paints the sky. Descend to a champagne breakfast in the bush.',
        accommodation: 'Luxury Tented Camp',
        activities: ['Optional balloon safari', 'Champagne bush breakfast', 'Afternoon walking safari'],
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      },
      {
        day: 6,
        title: 'Maasai Encounter',
        location: 'Maasai Mara',
        description: 'Visit a Maasai community to understand the ancient culture that has coexisted with wildlife for centuries. Afternoon game drive searching for the elusive cheetah in the open grasslands.',
        accommodation: 'Luxury Tented Camp',
        activities: ['Maasai community visit', 'Cultural exchange', 'Afternoon game drive'],
        image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
      },
      {
        day: 7,
        title: 'The Final Dawn',
        location: 'Maasai Mara',
        description: 'One last sunrise. One last game drive. The Mara has a way of saving its finest moments for the end. Return to camp for a late breakfast and pack your memories.',
        accommodation: 'Luxury Tented Camp',
        activities: ['Final sunrise game drive', 'Late breakfast', 'Leisure at camp'],
        image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80',
      },
      {
        day: 8,
        title: 'Departure',
        location: 'Nairobi',
        description: 'Fly back to Nairobi where a private transfer takes you to the airport. Your Kenya journey ends — but the Mara stays with you.',
        accommodation: '',
        activities: ['Flight to Nairobi', 'Airport transfer', 'Departure'],
        image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&q=80',
      },
    ],
    inclusions: [
      'All domestic flights (Nairobi – Mara – Nairobi)',
      'Private 4x4 safari vehicle and guide',
      'All accommodation on full board basis',
      'All conservancy and park fees',
      'Guided walking safari',
      'Maasai community visit',
      'All transfers',
      'Flying Doctors emergency evacuation cover',
    ],
    exclusions: [
      'International flights',
      'Travel and medical insurance',
      'Visa fees',
      'Hot-air balloon safari (optional, from $450)',
      'Gratuities',
      'Personal expenses',
      'Beverages (premium wines and spirits)',
    ],
  },
  {
    slug: 'kenyas-great-migration',
    title: 'Kenya\'s Great Migration',
    subtitle: 'Witness the greatest wildlife spectacle on Earth, from the front row.',
    duration: '9 Nights',
    style: 'Private Journey',
    pace: 'Active',
    transport: 'Light Aircraft, Private 4x4',
    accommodation: 'Luxury Mobile Camp, Lodge',
    startingPoint: 'Nairobi',
    idealFor: 'Wildlife & Photography',
    priceFrom: 'From $7,200 per person',
    heroImage: 'https://images.unsplash.com/photo-1534177616064-ef1082c8f840?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1534177616064-ef1082c8f840?w=800&q=80',
    description: 'Two million wildebeest. Hundreds of thousands of zebra. Predators in pursuit. The Great Migration is not a single event — it is a year-round movement of life across the Serengeti-Mara ecosystem. This journey places you in its path.',
    highlights: [
      'Front-row seats to the migration river crossings',
      'Exclusive mobile camp following the herds',
      'Big cat tracking with specialist guides',
      'Aerial perspective via light aircraft',
      'Photography-focused game drives',
    ],
    destinations: ['nairobi', 'maasai-mara'],
    featured: true,
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    slug: 'amboseli-escape',
    title: 'The Amboseli Escape',
    subtitle: 'Elephants at the foot of Kilimanjaro. A landscape like no other.',
    duration: '5 Nights',
    style: 'Private Journey',
    pace: 'Gentle',
    transport: 'Private 4x4',
    accommodation: 'Luxury Lodge',
    startingPoint: 'Nairobi',
    idealFor: 'Couples, First Safari',
    priceFrom: 'From $3,200 per person',
    heroImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80',
    description: 'Amboseli is where elephants walk against the backdrop of Africa\'s highest mountain. This short, intimate journey is ideal for those seeking a first safari or a peaceful escape into one of Kenya\'s most photogenic landscapes.',
    highlights: [
      'Elephant herds against Mount Kilimanjaro',
      'Sunrise game drives in Amboseli',
      'Sundowner with mountain views',
      'Maasai cultural encounter',
      'Optional day trip to Chyulu Hills',
    ],
    destinations: ['nairobi', 'amboseli'],
    featured: true,
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    slug: 'kenya-for-two',
    title: 'Kenya for Two',
    subtitle: 'A honeymoon journey through wild landscapes and coastal serenity.',
    duration: '10 Nights',
    style: 'Honeymoon',
    pace: 'Relaxed',
    transport: 'Light Aircraft, Private 4x4',
    accommodation: 'Luxury Lodge, Beach Villa',
    startingPoint: 'Nairobi',
    idealFor: 'Honeymoon, Couples',
    priceFrom: 'From $6,800 per person',
    heroImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    description: 'Begin with the wild heart of Kenya. End on the white sand of the coast. This journey is designed for two — private game drives, intimate lodges, candlelit dinners under the stars, and days spent doing absolutely nothing on the Indian Ocean.',
    highlights: [
      'Private safari in the Maasai Mara',
      'Candlelit bush dinner',
      'Beach villa on the Kenyan coast',
      'Dhow cruise at sunset',
      'Couples\' spa experience',
    ],
    destinations: ['nairobi', 'maasai-mara', 'diani'],
    featured: true,
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    slug: 'family-safari',
    title: 'The Family Safari',
    subtitle: 'Adventures shared. Memories made together. Africa, as a family.',
    duration: '8 Nights',
    style: 'Family Journey',
    pace: 'Balanced',
    transport: 'Private 4x4, Light Aircraft',
    accommodation: 'Family Lodge, Tented Camp',
    startingPoint: 'Nairobi',
    idealFor: 'Families with Children',
    priceFrom: 'From $3,950 per person',
    heroImage: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&q=80',
    description: 'Kenya is one of the world\'s greatest classrooms. This journey is built for families — engaging guides who connect with children, accommodations that welcome young adventurers, and experiences that bring generations together.',
    highlights: [
      'Child-friendly game drives',
      'Junior ranger programme',
      'Visit to elephant orphanage',
      'Beach days on the coast',
      'Family bush cooking class',
    ],
    destinations: ['nairobi', 'amboseli', 'maasai-mara'],
    featured: false,
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    slug: 'photographers-kenya',
    title: 'The Photographer\'s Kenya',
    subtitle: 'Light, landscape and wildlife — framed by a professional guide.',
    duration: '10 Nights',
    style: 'Photography Journey',
    pace: 'Active',
    transport: 'Private 4x4 (modified for photography)',
    accommodation: 'Lodge, Tented Camp',
    startingPoint: 'Nairobi',
    idealFor: 'Photographers, Solo Travellers',
    priceFrom: 'From $5,600 per person',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    description: 'This is not a standard safari with photo stops. This is a photography expedition — designed around golden hour, built for patience, and guided by someone who understands light, behaviour and composition in the African wild.',
    highlights: [
      'Modified 4x4 with photography hides',
      'Expert wildlife photography guide',
      'Golden hour drives (sunrise and sunset)',
      'Remote private conservancies',
      'Post-processing workshop at camp',
    ],
    destinations: ['nairobi', 'samburu', 'maasai-mara', 'lake-nakuru'],
    featured: false,
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
];

export function getJourneyBySlug(slug: string): Journey | undefined {
  return journeys.find((j) => j.slug === slug);
}

export function getFeaturedJourneys(): Journey[] {
  return journeys.filter((j) => j.featured);
}
