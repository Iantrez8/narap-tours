'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.media}>
        <Image
          src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=80"
          alt="Golden savannah landscape at dawn in the Maasai Mara, Kenya"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={85}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.overline}>Private Safaris & Luxury Journeys</p>
        <h1 className={styles.title}>
          Kenya, Beyond<br />the Ordinary.
        </h1>
        <p className={styles.subtitle}>
          Private journeys through Kenya&apos;s wild landscapes, extraordinary stays
          and unforgettable moments — designed around you.
        </p>
        <div className={styles.actions}>
          <Link href="/plan" className="btn btn--light btn--lg">
            Design My Journey
          </Link>
          <Link href="/journeys" className={styles.secondaryLink}>
            <span>Explore Kenya</span>
            <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
