'use client';

import Image from 'next/image';
import { Compass, Shield, Users, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './WhyTravelSection.module.css';

const pillars = [
  {
    icon: Compass,
    title: 'Deeply Personal',
    description: 'Every journey begins with a conversation. Your guide, your lodge, your pace — all designed around you.',
  },
  {
    icon: Shield,
    title: 'On the Ground',
    description: 'We are based in Kenya. Our team, our guides, our relationships are here. Your journey is supported from within.',
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Our guides are not drivers. They are naturalists, storytellers and custodians of the landscapes they share with you.',
  },
  {
    icon: Heart,
    title: 'Responsible Travel',
    description: 'We work with conservancies and communities that protect the wild places you visit. Your presence matters.',
  },
];

export default function WhyTravelSection() {
  const ref = useScrollReveal();

  return (
    <section className={`section section--lg ${styles.section}`} aria-label="Why travel with us">
      <div className={styles.layout}>
        <div className={styles.imageCol}>
          <Image
            src="/images/why-travel.jpg"
            alt="Safari guide sharing knowledge about the African landscape"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </div>

        <div className={styles.contentCol} ref={ref}>
          <div className="reveal">
            <p className="text-overline">Why NARAP Tours & Travel</p>
            <h2 className={styles.heading}>
              Your Journey, <br />Our Craft
            </h2>
            <div className={styles.pillars}>
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
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
