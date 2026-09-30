'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
// Import removed
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './DestinationsSection.module.css';

import { Destination } from '@/data/destinations';

interface DestinationsSectionProps {
  destinations: Destination[];
}

export default function DestinationsSection({ destinations }: DestinationsSectionProps) {
  const ref = useScrollReveal();

  return (
    <section className={`section section--lg ${styles.section}`} aria-label="Global Destinations">
      <div className="container" ref={ref}>
        <div className="reveal">
          <p className="text-overline">Iconic Locations</p>
          <h2 className={styles.heading}>The Global Collection</h2>
        </div>
      </div>

      <div className={styles.editorialList}>
        {destinations.map((dest, index) => (
          <div key={dest.slug} className={styles.editorialRow}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src={dest.cardImage}
                  alt={`${dest.name} — ${dest.tagline}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className={styles.contentCol}>
              <div className={styles.contentInner}>
                <p className={styles.eyebrow}>
                  0{index + 1} / DESTINATION
                </p>
                <h3 className={styles.destName}>{dest.name}</h3>
                <p className={styles.destDesc}>{dest.tagline}</p>
                
                <Link href={`/destinations/${dest.slug}`} className={styles.exploreLink}>
                  Explore destination <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container" style={{ textAlign: 'center', marginTop: 'var(--space-16)' }}>
        <Link href="/destinations" className="btn btn--secondary">
          View All Destinations
        </Link>
      </div>
    </section>
  );
}
