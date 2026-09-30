'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.media}>
        {/* To use a video instead of an image, uncomment this video tag and delete the <Image /> tag below */}
        {/* <video src="/videos/hero-video.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Golden savannah landscape at dawn in the Maasai Mara, Kenya"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
          quality={85}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.overline}>NARAP Tours & Travel</p>
        <h1 className={styles.title}>
          Travel, Beyond<br />the Ordinary.
        </h1>
        <p className={styles.subtitle}>
          Private safaris, extraordinary stays and deeply personal journeys — designed around the way you want to experience the world.
        </p>
        <div className={styles.actions}>
          <Link href="/plan" className="btn btn--light btn--lg">
            Design My Journey
          </Link>
          <Link href="/journeys" className={styles.secondaryLink}>
            <span>Explore Destinations</span>
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
