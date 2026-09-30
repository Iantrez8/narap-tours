export interface Experience {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  featured: boolean;
}

export const experiences: Experience[] = [
  {
    slug: 'big-five-safari',
    title: 'Big Five Safari',
    tagline: 'The original safari — tracking Africa\'s most iconic wildlife.',
    description: 'Kenya remains one of the finest places on earth to see the Big Five — lion, leopard, elephant, buffalo and rhinoceros — in truly wild landscapes.',
    heroImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80',
    featured: true,
  },
  {
    slug: 'great-migration',
    title: 'Great Migration',
    tagline: 'Two million animals. One extraordinary journey.',
    description: 'Every year, the largest terrestrial migration on Earth crosses into the Maasai Mara. Witness river crossings, predator hunts, and the sheer scale of nature\'s most powerful movement.',
    heroImage: 'https://images.unsplash.com/photo-1534177616064-ef1082c8f840?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1534177616064-ef1082c8f840?w=800&q=80',
    featured: true,
  },
  {
    slug: 'photography',
    title: 'Photography',
    tagline: 'Light, landscape and wildlife — captured by experts.',
    description: 'Specialist photography safaris with modified vehicles, expert guides who understand light and animal behaviour, and itineraries designed around the golden hours.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    featured: true,
  },
  {
    slug: 'walking-safari',
    title: 'Walking Safari',
    tagline: 'On foot. At the pace of the wild.',
    description: 'Leave the vehicle behind and step into the landscape. Walking safaris offer an intimate, sensory experience — tracking footprints, identifying birdsong, and understanding the bush from ground level.',
    heroImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
    featured: false,
  },
  {
    slug: 'hot-air-balloon',
    title: 'Hot-Air Balloon',
    tagline: 'Drift above the Mara at first light.',
    description: 'Rise before dawn and float silently over the savannah as the sun paints the sky. A hot-air balloon safari offers a perspective of the Maasai Mara that few experiences can match.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    featured: true,
  },
  {
    slug: 'cultural-experiences',
    title: 'Cultural Experiences',
    tagline: 'The people behind the landscape.',
    description: 'Kenya\'s cultural fabric is as diverse as its wildlife. Visit Maasai communities, explore Swahili coastal towns, and connect with the human stories that make Kenya what it is.',
    heroImage: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80',
    featured: false,
  },
  {
    slug: 'conservation',
    title: 'Conservation',
    tagline: 'Travel that protects what it celebrates.',
    description: 'Join conservation projects, visit sanctuaries and reserves where your presence directly supports wildlife protection, and learn from the people dedicating their lives to Kenya\'s natural heritage.',
    heroImage: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963fc8?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963fc8?w=800&q=80',
    featured: false,
  },
  {
    slug: 'beach-escape',
    title: 'Beach Escape',
    tagline: 'The Indian Ocean awaits.',
    description: 'After the adventure of safari, Kenya\'s coast offers white sand beaches, warm turquoise waters, and a Swahili culture that has welcomed travellers for centuries. Diani, Lamu and Watamu each offer a distinct coastal experience.',
    heroImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    featured: true,
  },
  {
    slug: 'family-adventures',
    title: 'Family Adventures',
    tagline: 'Africa, together.',
    description: 'Safari is one of the most rewarding family experiences imaginable. Child-friendly guides, engaging programmes, and accommodations that welcome young adventurers make Kenya an extraordinary family destination.',
    heroImage: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&q=80',
    featured: false,
  },
  {
    slug: 'educational-travel',
    title: 'Educational Travel & School Excursions',
    tagline: 'The world\'s greatest classroom.',
    description: 'Tailored logistical planning for student field trips, geography/science camps, and curricular outdoor learning. We facilitate immersive educational experiences that connect students directly with ecosystems, conservation efforts, and local communities.',
    heroImage: 'https://images.unsplash.com/photo-1522881451255-f59ad836f363?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1522881451255-f59ad836f363?w=800&q=80',
    featured: false,
  },
  {
    slug: 'athletic-mobility',
    title: 'Athletic & Sports Mobility',
    tagline: 'Performance at altitude.',
    description: 'Specialized transport, gear management, and accommodation coordination for training camps, regional tournaments, and visiting elite runners or teams. Experience Kenya\'s renowned high-altitude training environments with seamless logistical support.',
    heroImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80',
    cardImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    featured: false,
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getFeaturedExperiences(): Experience[] {
  return experiences.filter((e) => e.featured);
}
