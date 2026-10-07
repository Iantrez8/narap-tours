'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './FinalCTA.module.css';
import { GlobalSettings } from '@/sanity/queries';

interface FinalCTAProps {
  settings?: GlobalSettings;
}

export default function FinalCTA({ settings }: FinalCTAProps) {
  const ref = useScrollReveal();

  const heading = settings?.finalCtaHeading || 'Your Next Journey\nIs Waiting.';
  const body = settings?.finalCtaBody || 'Tell us how you want to experience the world.';
  const bgImage = settings?.finalCtaImage || '/images/final-cta.jpg';
  const primaryBtn = settings?.finalCtaPrimaryBtnText || 'Design My Journey';
  const secondaryLink =
    settings?.finalCtaSecondaryLinkText || 'Speak With a Travel Designer';

  const headingParts = heading.split('\n');

  return (
    <section className={styles.section} aria-label="Start planning">
      <div className={styles.bg}>
        <Image
          src={bgImage}
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
