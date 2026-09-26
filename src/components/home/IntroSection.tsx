'use client';

import { useScrollReveal } from '@/hooks/useScroll';
import styles from './IntroSection.module.css';

export default function IntroSection() {
  const ref = useScrollReveal();

  return (
    <section className={`section section--lg ${styles.intro}`} aria-label="Introduction">
      <div className={`container ${styles.inner}`} ref={ref}>
        <div className="reveal">
          <p className="text-overline">We Don&apos;t Sell Packages</p>
          <div className={styles.divider} />
          <h2 className={styles.heading}>We Design Journeys.</h2>
          <p className={styles.body}>
            Every Kenya safari is personal. Your interests, your pace, your travel
            companions — they shape everything. We listen, then we design. From the
            reserves you visit to the lodges you sleep in, every detail is considered,
            every moment intentional.
          </p>
          <p className={styles.body}>
            Whether it is your first safari or your tenth, Kenya has something extraordinary
            waiting. Let us help you discover it.
          </p>
        </div>
      </div>
    </section>
  );
}
