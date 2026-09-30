import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSanityDestinations } from '@/sanity/queries';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Destinations',
  description: 'Explore our most extraordinary destinations around the world. Each destination is a world of its own.',
};

export default async function DestinationsPage() {
  const destinations = await getSanityDestinations();
  
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1535941339077-2dd1c7963fc8?w=1920&q=80"
          alt="Vast landscape"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>Global Destinations</p>
          <h1 className={styles.heroTitle}>Where Will You Go?</h1>
          <p className={styles.heroSubtitle}>
            From the great savannahs to the ocean coasts — each destination has a story to tell.
          </p>
        </div>
      </section>

      <section className={`section section--lg ${styles.listing}`}>
        <div className="container container--wide">
          <div className={styles.grid}>
            {destinations.map((dest, index) => (
              <Link
                href={`/destinations/${dest.slug}`}
                key={dest.slug}
                className={`${styles.card} ${index < 2 ? styles.cardWide : ''}`}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={dest.cardImage}
                    alt={`${dest.name} — ${dest.tagline}`}
                    fill
                    sizes={index < 2
                      ? '(max-width: 768px) 100vw, 50vw'
                      : '(max-width: 768px) 100vw, 33vw'
                    }
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardName}>{dest.name}</h2>
                  <p className={styles.cardTagline}>{dest.tagline}</p>
                  <div className={styles.cardMeta}>
                    <span>{dest.duration}</span>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{dest.bestTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
