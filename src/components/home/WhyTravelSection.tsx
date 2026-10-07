'use client';

import Image from 'next/image';
import { Compass, Shield, Users, Heart, Star, Globe, Map, Camera, LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './WhyTravelSection.module.css';
import { GlobalSettings, WhyTravelPillar } from '@/sanity/queries';

interface WhyTravelSectionProps {
  settings?: GlobalSettings;
}

// Map of Sanity icon names → Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Compass,
  Shield,
  Users,
  Heart,
  Star,
  Globe,
  Map,
  Camera,
};

const DEFAULT_PILLARS: WhyTravelPillar[] = [
  {
    icon: 'Compass',
    title: 'Deeply Personal',
    description:
      'Every journey begins with a conversation. Your guide, your lodge, your pace — all designed around you.',
  },
  {
    icon: 'Shield',
    title: 'On the Ground',
    description:
      'We are based in Kenya. Our team, our guides, our relationships are here. Your journey is supported from within.',
  },
  {
    icon: 'Users',
    title: 'Expert Guides',
    description:
      'Our guides are not drivers. They are naturalists, storytellers and custodians of the landscapes they share with you.',
  },
  {
    icon: 'Heart',
    title: 'Responsible Travel',
    description:
      'We work with conservancies and communities that protect the wild places you visit. Your presence matters.',
  },
];

export default function WhyTravelSection({ settings }: WhyTravelSectionProps) {
  const ref = useScrollReveal();

  const overline = settings?.whyTravelOverline || 'Why NARAP Tours & Travel';
  const heading = settings?.whyTravelHeading || 'Your Journey, Our Craft';
  const image = settings?.whyTravelImage || '/images/why-travel.jpg';
  const pillars =
    settings?.whyTravelPillars && settings.whyTravelPillars.length > 0
      ? settings.whyTravelPillars
      : DEFAULT_PILLARS;

  return (
    <section
      className={`section section--lg ${styles.section}`}
      aria-label="Why travel with us"
    >
      <div className={styles.layout}>
        <div className={styles.imageCol}>
          <Image
            src={image}
            alt="Safari guide sharing knowledge about the African landscape"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </div>

        <div className={styles.contentCol} ref={ref}>
          <div className="reveal">
            <p className="text-overline">{overline}</p>
            <h2 className={styles.heading}>
              {heading.split(',').map((part, i, arr) => (
                <span key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && ','}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className={styles.pillars}>
              {pillars.map((pillar) => {
                const IconComponent = ICON_MAP[pillar.icon] || Compass;
                return (
                  <div key={pillar.title} className={styles.pillar}>
                    <div className={styles.pillarIcon}>
                      <IconComponent size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                      <p className={styles.pillarDesc}>{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
