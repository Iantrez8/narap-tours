import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getSanityExperiences, getSanityExperienceBySlug } from '@/sanity/queries';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const experiences = await getSanityExperiences();
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = await getSanityExperienceBySlug(slug);

  if (!experience) {
    return { title: 'Experience Not Found' };
  }

  return {
    title: experience.title,
    description: experience.tagline,
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const experience = await getSanityExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={experience.heroImage}
          alt={experience.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>Experience</p>
          <h1 className={styles.heroTitle}>{experience.title}</h1>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.contentInner}`}>
          <div className={styles.mainContent}>
            <p className={styles.lead}>{experience.tagline}</p>
            <p className={styles.body}>{experience.description}</p>
          </div>
          
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Start Designing</h3>
              <p className={styles.sidebarDesc}>
                Incorporate {experience.title} into your custom Kenyan itinerary.
              </p>
              <Link href="/plan" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                Plan Your Journey
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
