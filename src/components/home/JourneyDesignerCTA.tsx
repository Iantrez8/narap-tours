'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './JourneyDesignerCTA.module.css';
import { GlobalSettings } from '@/sanity/queries';

interface JourneyDesignerCTAProps {
  settings?: GlobalSettings;
}

export default function JourneyDesignerCTA({ settings }: JourneyDesignerCTAProps) {
  const ref = useScrollReveal();

  const overline = settings?.ctaOverline || 'Journey Designer';
  const heading =
    settings?.ctaHeading || 'Tell Us How You\nWant to Experience the World.';
  const body =
    settings?.ctaBody ||
    'Answer a few questions about your interests, travel style and companions. We will design a journey that feels like it was made only for you.';
  const bgImage = settings?.ctaImage || '/images/journey-designer.jpg';
  const primaryBtn = settings?.ctaPrimaryBtnText || 'Design My Journey';
  const secondaryLink = settings?.ctaSecondaryLinkText || 'Or speak with a travel designer';

  const headingParts = heading.split('\n');

  return (
    <section className={styles.section} aria-label="Journey Designer">
      <div className={styles.bg}>
        <Image
          src={bgImage}
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
          <p className={styles.overline}>{overline}</p>
          <h2 className={styles.heading}>
            {headingParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < headingParts.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className={styles.body}>{body}</p>
          <div className={styles.actions}>
            <Link href="/plan" className="btn btn--light btn--lg">
              {primaryBtn}
            </Link>
            <Link href="/enquire" className={styles.secondary}>
              {secondaryLink}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
