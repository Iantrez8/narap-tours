import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturedJourneys from '@/components/home/FeaturedJourneys';
import DestinationsSection from '@/components/home/DestinationsSection';
import ExperiencesSection from '@/components/home/ExperiencesSection';
import WhyTravelSection from '@/components/home/WhyTravelSection';
import JourneyDesignerCTA from '@/components/home/JourneyDesignerCTA';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturedJourneys />
      <DestinationsSection />
      <ExperiencesSection />
      <WhyTravelSection />
      <JourneyDesignerCTA />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
