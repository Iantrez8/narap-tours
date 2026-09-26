'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedDestinations } from '@/data/destinations';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './DestinationsSection.module.css';

export default function DestinationsSection() {
  const destinations = getFeaturedDestinations();
  const ref = useScrollReveal();

  return (
    <section className={`section section--lg ${styles.section}`} aria-label="Kenya Destinations">
      <div className="container container--wide">
        <div className={styles.header} ref={ref}>
          <div className="reveal">
            <p className="text-overline">Destinations</p>
            <h2 className={styles.heading}>Where Kenya Takes You</h2>
          </div>
          <Link href="/destinations" className="btn btn--ghost">
            All Destinations
          </Link>
        </div>

        <div className={styles.grid}>
          {destinations.map((dest) => (
            <Link
              href={`/destinations/${dest.slug}`}
              key={dest.slug}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <Image
                  src={dest.cardImage}
                  alt={`${dest.name} — ${dest.tagline}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{dest.name}</h3>
                <p className={styles.cardTagline}>{dest.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
