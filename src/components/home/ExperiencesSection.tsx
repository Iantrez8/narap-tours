'use client';

import Link from 'next/link';
import Image from 'next/image';
// Import removed
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './ExperiencesSection.module.css';

import { Experience } from '@/data/experiences';

interface ExperiencesSectionProps {
  experiences: Experience[];
}

export default function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  const ref = useScrollReveal();

  return (
    <section className={`section section--lg ${styles.section}`} aria-label="Experiences">
      <div className="container container--wide">
        <div className={styles.header} ref={ref}>
          <div className="reveal">
            <p className="text-overline">Experiences</p>
            <h2 className={styles.heading}>How You Experience the World</h2>
          </div>
          <Link href="/experiences" className="btn btn--ghost">
            All Experiences
          </Link>
        </div>

        <div className={styles.scroll}>
          {experiences.map((exp) => (
            <Link
              href={`/experiences/${exp.slug}`}
              key={exp.slug}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <Image
                  src={exp.cardImage}
                  alt={`${exp.title} — ${exp.tagline}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardTagline}>{exp.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
