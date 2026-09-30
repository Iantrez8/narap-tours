import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSanityJourneys } from '@/sanity/queries';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Journeys',
  description: 'Explore curated private safaris and luxury journeys around the world. Each journey is designed around you.',
};

export default async function JourneysPage() {
  const journeys = await getSanityJourneys();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
          alt="Safari vehicle moving through the African savannah"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>Private Journeys</p>
          <h1 className={styles.heroTitle}>Every Journey, Designed for You</h1>
          <p className={styles.heroSubtitle}>
            No fixed itineraries. No group schedules. Just the world, your way.
          </p>
        </div>
      </section>

      {/* Journey listing */}
      <section className={`section section--lg ${styles.listing}`}>
        <div className="container container--wide">
          <div className={styles.grid}>
            {journeys.map((journey) => (
              <Link
                href={`/journeys/${journey.slug}`}
                key={journey.slug}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={journey.cardImage}
                    alt={`${journey.title} — ${journey.subtitle}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span>{journey.duration}</span>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{journey.style}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{journey.title}</h2>
                  <p className={styles.cardSubtitle}>{journey.subtitle}</p>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.ctaTitle}>Something Different in Mind?</h2>
          <p className={styles.ctaBody}>
            Every journey can be customized. Tell us what you are looking for and we will design it.
          </p>
          <Link href="/plan" className="btn btn--primary btn--lg">
            Design My Journey
          </Link>
        </div>
      </section>
    </>
  );
}
