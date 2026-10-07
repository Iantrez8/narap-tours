'use client';

import { useScrollReveal } from '@/hooks/useScroll';
import Image from 'next/image';
import styles from './IntroSection.module.css';
import { GlobalSettings } from '@/sanity/queries';

interface IntroSectionProps {
  settings?: GlobalSettings;
}

export default function IntroSection({ settings }: IntroSectionProps) {
  const ref = useScrollReveal();

  const overline = settings?.introOverline || "We Don't Sell Packages";
  const heading = settings?.introHeading || 'We Design Journeys.';
  const introImage = settings?.introImage || '/images/intro.jpg';

  // Default body paragraphs
  const defaultParagraphs = [
    'Every journey is personal. Your interests, your pace, your travel companions — they shape everything. We listen, then we design. From the reserves you visit to the lodges you sleep in, every detail is considered, every moment intentional.',
    'Whether it is your first adventure or your tenth, the world has something extraordinary waiting. Let us help you discover it.',
  ];

  const bodyParagraphs =
    settings?.introBody && settings.introBody.length > 0
      ? settings.introBody
      : defaultParagraphs;

  return (
    <section className={`section ${styles.intro}`} aria-label="Introduction">
      <div className={`container ${styles.inner}`} ref={ref}>
        <div className={`reveal ${styles.contentCol}`}>
          <p className="text-overline">{overline}</p>
          <div className={styles.divider} />
          <h2 className={styles.heading}>{heading}</h2>
          {bodyParagraphs.map((para, i) => (
            <p key={i} className={styles.body}>
              {para}
            </p>
          ))}
        </div>

        <div className={`reveal ${styles.imageCol}`} style={{ transitionDelay: '200ms' }}>
          <div className={styles.imageWrapper}>
            <Image
              src={introImage}
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
