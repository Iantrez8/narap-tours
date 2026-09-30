'use client';

import { useScrollReveal } from '@/hooks/useScroll';
import Image from 'next/image';
import styles from './IntroSection.module.css';

export default function IntroSection() {
  const ref = useScrollReveal();

  return (
    <section className={`section ${styles.intro}`} aria-label="Introduction">
      <div className={`container ${styles.inner}`} ref={ref}>
        <div className={`reveal ${styles.contentCol}`}>
          <p className="text-overline">We Don&apos;t Sell Packages</p>
          <div className={styles.divider} />
          <h2 className={styles.heading}>We Design Journeys.</h2>
          <p className={styles.body}>
            Every journey is personal. Your interests, your pace, your travel
            companions — they shape everything. We listen, then we design. From the
            reserves you visit to the lodges you sleep in, every detail is considered,
            every moment intentional.
          </p>
          <p className={styles.body}>
            Whether it is your first adventure or your tenth, the world has something extraordinary
            waiting. Let us help you discover it.
          </p>
        </div>
        
        <div className={`reveal ${styles.imageCol}`} style={{ transitionDelay: '200ms' }}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/intro.jpg"
              alt="Elephants walking in the Maasai Mara"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
