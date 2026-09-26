export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  wildlife: string[];
  bestTime: string;
  duration: string;
  travelStyle: string;
  access: string;
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    slug: 'maasai-mara',
    name: 'Maasai Mara',
    tagline: 'Where the wild still writes the story.',
    description: 'The Maasai Mara is not just a reserve — it is the heartbeat of Kenyan safari. Endless golden grasslands, the greatest concentration of predators in Africa, and the annual Great Migration make this one of the most extraordinary wildlife destinations on Earth.',
    heroImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80',
    wildlife: ['Lion', 'Leopard', 'Elephant', 'Buffalo', 'Wildebeest', 'Cheetah', 'Hippo', 'Zebra'],
    bestTime: 'July – October (Migration), Year-round',
    duration: '3 – 5 Nights recommended',
    travelStyle: 'Fly-in or Road Safari',
    access: 'Daily flights from Nairobi (45 min) or road transfer (5–6 hours)',
    featured: true,
  },
  {
    slug: 'amboseli',
    name: 'Amboseli',
    tagline: 'Elephants beneath the mountain.',
    description: 'Amboseli is defined by one of the most iconic views in Africa — vast herds of elephants moving across dried lake beds, with the snow-capped peak of Mount Kilimanjaro rising behind them. It is a photographer\'s paradise and a place of profound calm.',
    heroImage: 'https://images.unsplash.com/photo-1612456225458-5c3aa4e1a4e3?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1612456225458-5c3aa4e1a4e3?w=800&q=80',
    wildlife: ['Elephant', 'Lion', 'Cheetah', 'Giraffe', 'Hippo', 'Flamingo'],
    bestTime: 'June – October, January – February',
    duration: '2 – 3 Nights recommended',
    travelStyle: 'Road Safari or Fly-in',
    access: 'Road from Nairobi (4 hours) or charter flight (40 min)',
    featured: true,
  },
  {
    slug: 'samburu',
    name: 'Samburu',
    tagline: 'The wild north. Untamed and unforgettable.',
    description: 'Samburu is Kenya\'s wild frontier — rugged, remote, and home to species found nowhere else in the country. Reticulated giraffe, Grevy\'s zebra and the Samburu Special Five make this a safari destination for those who want something different.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    wildlife: ['Reticulated Giraffe', 'Grevy\'s Zebra', 'Gerenuk', 'Beisa Oryx', 'Somali Ostrich', 'Leopard', 'Lion', 'Elephant'],
    bestTime: 'June – October, January – February',
    duration: '2 – 4 Nights recommended',
    travelStyle: 'Fly-in Safari',
    access: 'Daily flights from Nairobi (1 hour)',
    featured: true,
  },
  {
    slug: 'tsavo',
    name: 'Tsavo',
    tagline: 'Two parks. One untamed wilderness.',
    description: 'Tsavo East and Tsavo West together form one of the largest wildlife sanctuaries in the world. Red elephants dusted by the famous laterite soil, volcanic landscapes, natural springs and vast open spaces define this enormous wilderness.',
    heroImage: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963fc8?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963fc8?w=800&q=80',
    wildlife: ['Elephant', 'Lion', 'Leopard', 'Buffalo', 'Rhino', 'Hippo'],
    bestTime: 'June – October',
    duration: '2 – 3 Nights recommended',
    travelStyle: 'Road Safari',
    access: 'Road from Mombasa (3 hours) or Nairobi (5 hours)',
    featured: false,
  },
  {
    slug: 'lake-nakuru',
    name: 'Lake Nakuru',
    tagline: 'Flamingos, rhinos and forest.',
    description: 'Lake Nakuru National Park is a compact jewel in Kenya\'s Rift Valley. Once famous for its millions of flamingos, the park remains one of the best places in Kenya to see both black and white rhinoceros at close range.',
    heroImage: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80',
    wildlife: ['Rhino', 'Flamingo', 'Lion', 'Leopard', 'Buffalo', 'Rothschild Giraffe'],
    bestTime: 'Year-round',
    duration: '1 – 2 Nights recommended',
    travelStyle: 'Road Safari',
    access: 'Road from Nairobi (2.5 hours)',
    featured: false,
  },
  {
    slug: 'lake-naivasha',
    name: 'Lake Naivasha',
    tagline: 'A freshwater sanctuary in the Rift.',
    description: 'Lake Naivasha offers a different kind of Kenya — boat rides past hippos, walking safaris on Crescent Island where giraffe and zebra roam freely, and the dramatic gorge of Hell\'s Gate carved through volcanic rock.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    wildlife: ['Hippo', 'Giraffe', 'Zebra', 'Buffalo', 'Fish Eagle', 'Pelican'],
    bestTime: 'Year-round',
    duration: '1 – 2 Nights recommended',
    travelStyle: 'Road Safari',
    access: 'Road from Nairobi (1.5 hours)',
    featured: false,
  },
  {
    slug: 'mount-kenya',
    name: 'Mount Kenya',
    tagline: 'Africa\'s second summit, wrapped in forest.',
    description: 'Mount Kenya is a UNESCO World Heritage Site and Africa\'s second-highest mountain. The journey through its equatorial forests reveals bamboo thickets, colobus monkeys, elephants in the mist, and eventually, the alpine zone above the clouds.',
    heroImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
    wildlife: ['Elephant', 'Buffalo', 'Colobus Monkey', 'Giant Forest Hog', 'Mountain Bongo'],
    bestTime: 'January – February, July – October',
    duration: '2 – 5 Nights recommended',
    travelStyle: 'Adventure, Trekking',
    access: 'Road from Nairobi (3–4 hours)',
    featured: false,
  },
  {
    slug: 'nairobi',
    name: 'Nairobi',
    tagline: 'The city that starts every journey.',
    description: 'Nairobi is the only capital city in the world with a national park within its borders. Beyond the gateway role, Nairobi offers world-class dining, the Karen Blixen Museum, Giraffe Centre, elephant orphanage, and a creative African art scene.',
    heroImage: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&q=80',
    wildlife: ['Lion', 'Giraffe', 'Rhino', 'Zebra', 'Buffalo'],
    bestTime: 'Year-round',
    duration: '1 – 2 Nights recommended',
    travelStyle: 'Urban, Cultural',
    access: 'Jomo Kenyatta International Airport',
    featured: false,
  },
  {
    slug: 'diani',
    name: 'Diani',
    tagline: 'White sand. Turquoise water. Indian Ocean peace.',
    description: 'Diani Beach is Kenya\'s premier coastal destination — powdery white sand, warm turquoise water, and coconut palms swaying in the ocean breeze. It is the ideal place to unwind after safari, or to extend a honeymoon into barefoot luxury.',
    heroImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    wildlife: ['Colobus Monkey', 'Whale Shark (seasonal)', 'Dolphins', 'Sea Turtle'],
    bestTime: 'October – March, June – September',
    duration: '3 – 5 Nights recommended',
    travelStyle: 'Beach, Relaxation',
    access: 'Flight from Nairobi to Ukunda (1 hour)',
    featured: true,
  },
  {
    slug: 'lamu',
    name: 'Lamu',
    tagline: 'Where time forgot to hurry.',
    description: 'Lamu is a UNESCO World Heritage island town — a labyrinth of narrow coral stone streets, ornately carved wooden doors, and the sound of the dhow sail. No cars. No hurry. Just the oldest living Swahili town on the East African coast.',
    heroImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    wildlife: ['Dolphins', 'Sea Turtle', 'Tropical Fish'],
    bestTime: 'Year-round (dry season: June – October)',
    duration: '3 – 5 Nights recommended',
    travelStyle: 'Cultural, Beach',
    access: 'Daily flights from Nairobi (1.5 hours)',
    featured: false,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}
