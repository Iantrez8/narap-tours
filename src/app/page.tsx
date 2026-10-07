import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturedJourneys from '@/components/home/FeaturedJourneys';
import DestinationsSection from '@/components/home/DestinationsSection';
import ExperiencesSection from '@/components/home/ExperiencesSection';
import WhyTravelSection from '@/components/home/WhyTravelSection';
import JourneyDesignerCTA from '@/components/home/JourneyDesignerCTA';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ReferAndEarn from '@/components/home/ReferAndEarn';
import FinalCTA from '@/components/home/FinalCTA';
import {
  getFeaturedSanityDestinations,
  getFeaturedSanityJourneys,
  getFeaturedSanityExperiences,
  getFeaturedSanityTestimonials,
  getGlobalSettings,
} from '@/sanity/queries';

export default async function HomePage() {
  const [destinations, journeys, experiences, testimonials, settings] = await Promise.all([
    getFeaturedSanityDestinations(),
    getFeaturedSanityJourneys(),
    getFeaturedSanityExperiences(),
    getFeaturedSanityTestimonials(),
    getGlobalSettings(),
  ]);

  return (
    <>
      <HeroSection settings={settings} />
      <IntroSection settings={settings} />
      <FeaturedJourneys journeys={journeys} />
      <DestinationsSection destinations={destinations} />
      <ExperiencesSection experiences={experiences} />
      <WhyTravelSection settings={settings} />
      <JourneyDesignerCTA settings={settings} />
      <TestimonialsSection testimonials={testimonials} />
      <ReferAndEarn />
      <FinalCTA settings={settings} />
    </>
  );
}
