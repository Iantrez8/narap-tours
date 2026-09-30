'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Start planning">
      <div className={styles.bg}>
        <Image
          src="/images/final-cta.jpg"
          alt="Sunset over the African savannah"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`} ref={ref}>
        <div className="reveal">
          <h2 className={styles.heading}>Your Next Journey<br />Is Waiting.</h2>
          <p className={styles.body}>Tell us how you want to experience the world.</p>
          <div className={styles.actions}>
            <Link href="/plan" className="btn btn--light btn--lg">
              Design My Journey
            </Link>
            <Link href="/enquire" className={styles.secondary}>
              Speak With a Travel Designer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
