'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { GlobalSettings } from '@/sanity/queries';

interface HeroSectionProps {
  settings?: GlobalSettings;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const headline = settings?.homeHeroHeadline || 'Travel, Beyond\nthe Ordinary.';
  const subtitle =
    settings?.homeHeroSubtitle ||
    'Private safaris, extraordinary stays and deeply personal journeys — designed around the way you want to experience the world.';
  const heroBg = settings?.homeHeroImage || '/images/hero-bg.jpg';
  const primaryBtn = settings?.homeHeroPrimaryBtnText || 'Design My Journey';
  const secondaryBtn = settings?.homeHeroSecondaryBtnText || 'Explore Destinations';

  // Split headline on newlines for the <br /> rendering
  const headlineParts = headline.split('\n');

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.media}>
        {/* To use a video instead of an image, uncomment this video tag and delete the <Image /> tag below */}
        {/* <video src="/videos/hero-video.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
        <Image
          src={heroBg}
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
        <p className={styles.overline}>NARAP Tours &amp; Travel</p>
        <h1 className={styles.title}>
          {headlineParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < headlineParts.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Link href="/plan" className="btn btn--light btn--lg">
            {primaryBtn}
          </Link>
          <Link href="/journeys" className={styles.secondaryLink}>
            <span>{secondaryBtn}</span>
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
