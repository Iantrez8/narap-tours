'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
// Import removed
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './FeaturedJourneys.module.css';

import { Journey } from '@/data/journeys';

interface FeaturedJourneysProps {
  journeys: Journey[];
}

export default function FeaturedJourneys({ journeys }: FeaturedJourneysProps) {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.section}`} aria-label="Featured Journeys">
      <div className="container container--wide">
        <div className={styles.header} ref={ref}>
          <div className="reveal">
            <p className="text-overline">Curated Journeys</p>
            <h2 className={styles.heading}>Designed for You</h2>
          </div>
          <Link href="/journeys" className="btn btn--ghost">
            All Journeys
          </Link>
        </div>

        <div className={styles.grid}>
          {journeys.slice(0, 4).map((journey, index) => (
            <Link
              href={`/journeys/${journey.slug}`}
              key={journey.slug}
              className={`${styles.card} ${index === 0 ? styles.cardLarge : ''}`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={journey.cardImage}
                  alt={`${journey.title} — ${journey.subtitle}`}
                  fill
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 30vw'}
                  style={{ objectFit: 'cover' }}
                  quality={95}
                  loading="lazy"
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardDuration}>{journey.duration}</span>
                  <span className={styles.cardDot} aria-hidden="true" />
                  <span className={styles.cardStyle}>{journey.style}</span>
                </div>
                <h3 className={styles.cardTitle}>{journey.title}</h3>
                <p className={styles.cardSubtitle}>{journey.subtitle}</p>
                {journey.priceFrom && (
                  <p style={{ marginTop: '0.5rem', marginBottom: '0.75rem', fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                    {journey.priceFrom}
                  </p>
                )}
                <span className={styles.cardCta}>
                  Explore Journey <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
