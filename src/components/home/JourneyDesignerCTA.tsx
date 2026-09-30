'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './JourneyDesignerCTA.module.css';

export default function JourneyDesignerCTA() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Journey Designer">
      <div className={styles.bg}>
        <Image
          src="/images/journey-designer.jpg"
          alt="Vast African landscape at golden hour"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`} ref={ref}>
        <div className="reveal">
          <p className={styles.overline}>Journey Designer</p>
          <h2 className={styles.heading}>Tell Us How You<br />Want to Experience the World.</h2>
          <p className={styles.body}>
            Answer a few questions about your interests, travel style and companions.
            We will design a journey that feels like it was made only for you.
          </p>
          <div className={styles.actions}>
            <Link href="/plan" className="btn btn--light btn--lg">
              Design My Journey
            </Link>
            <Link href="/enquire" className={styles.secondary}>
              Or speak with a travel designer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
