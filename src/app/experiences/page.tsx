import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { experiences } from '@/data/experiences';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'Discover how to experience Kenya — from Big Five safaris and the Great Migration to hot-air balloons and beach escapes.',
};

export default function ExperiencesPage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Hot air balloon over the African savannah"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>Experiences</p>
          <h1 className={styles.heroTitle}>How You Experience Kenya</h1>
          <p className={styles.heroSubtitle}>
            Safari is more than game drives. Kenya offers a depth of experience that rewards every kind of traveller.
          </p>
        </div>
      </section>

      <section className={`section section--lg ${styles.listing}`}>
        <div className="container container--wide">
          <div className={styles.grid}>
            {experiences.map((exp) => (
              <Link
                href={`/experiences/${exp.slug}`}
                key={exp.slug}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={exp.cardImage}
                    alt={`${exp.title} — ${exp.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{exp.title}</h2>
                  <p className={styles.cardTagline}>{exp.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
