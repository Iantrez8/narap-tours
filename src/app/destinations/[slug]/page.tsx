import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { destinations, getDestinationBySlug } from '@/data/destinations';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return { title: 'Destination Not Found' };
  }

  return {
    title: destination.name,
    description: destination.tagline,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>Destination</p>
          <h1 className={styles.heroTitle}>{destination.name}</h1>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.contentInner}`}>
          <div className={styles.mainContent}>
            <p className={styles.lead}>{destination.tagline}</p>
            <p className={styles.body}>{destination.description}</p>
            
            <div className={styles.highlights}>
              <h2 className={styles.sectionTitle}>Key Details</h2>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Best Time to Visit</span>
                  <span className={styles.detailValue}>{destination.bestTime}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Recommended Duration</span>
                  <span className={styles.detailValue}>{destination.duration}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Travel Style</span>
                  <span className={styles.detailValue}>{destination.travelStyle}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Access</span>
                  <span className={styles.detailValue}>{destination.access}</span>
                </div>
              </div>
            </div>

            <div className={styles.wildlife}>
              <h2 className={styles.sectionTitle}>Notable Wildlife</h2>
              <ul className={styles.wildlifeList}>
                {destination.wildlife.map((animal) => (
                  <li key={animal} className={styles.wildlifeItem}>{animal}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Start Designing</h3>
              <p className={styles.sidebarDesc}>
                Incorporate {destination.name} into your custom Kenyan itinerary.
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
