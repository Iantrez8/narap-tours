import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSanityJourneys, getSanityJourneyBySlug } from '@/sanity/queries';
import { MapPin, Clock, Users, Compass, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export async function generateStaticParams() {
  const journeys = await getSanityJourneys();
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const journey = await getSanityJourneyBySlug(slug);
  if (!journey) return { title: 'Journey Not Found' };
  return {
    title: journey.title,
    description: journey.subtitle,
    openGraph: {
      title: `${journey.title} — NARAP Tours & Travel`,
      description: journey.subtitle,
      images: [{ url: journey.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function JourneyDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const journey = await getSanityJourneyBySlug(slug);
  if (!journey) notFound();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <Image
          src={journey.heroImage}
          alt={`${journey.title} — ${journey.subtitle}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={85}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroMeta}>
            <span>{journey.duration}</span>
            <span className={styles.dot} aria-hidden="true" />
            <span>{journey.style}</span>
          </div>
          <h1 className={styles.heroTitle}>{journey.title}</h1>
          <p className={styles.heroSubtitle}>{journey.subtitle}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`section ${styles.intro}`}>
        <div className={`container ${styles.introInner}`}>
          <div className={styles.introText}>
            <p className={styles.introBody}>{journey.description}</p>
            {journey.highlights.length > 0 && (
              <div className={styles.highlights}>
                <h2 className={styles.highlightsTitle}>Highlights</h2>
                <ul className={styles.highlightsList}>
                  {journey.highlights.map((h, i) => (
                    <li key={i} className={styles.highlightItem}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className={styles.glance}>
            <h2 className={styles.glanceTitle}>At a Glance</h2>
            <div className={styles.glanceGrid}>
              <div className={styles.glanceItem}>
                <Clock size={16} strokeWidth={1.5} />
                <div>
                  <span className={styles.glanceLabel}>Duration</span>
                  <span className={styles.glanceValue}>{journey.duration}</span>
                </div>
              </div>
              <div className={styles.glanceItem}>
                <Compass size={16} strokeWidth={1.5} />
                <div>
                  <span className={styles.glanceLabel}>Style</span>
                  <span className={styles.glanceValue}>{journey.style}</span>
                </div>
              </div>
              <div className={styles.glanceItem}>
                <MapPin size={16} strokeWidth={1.5} />
                <div>
                  <span className={styles.glanceLabel}>Starting Point</span>
                  <span className={styles.glanceValue}>{journey.startingPoint}</span>
                </div>
              </div>
              <div className={styles.glanceItem}>
                <Users size={16} strokeWidth={1.5} />
                <div>
                  <span className={styles.glanceLabel}>Ideal For</span>
                  <span className={styles.glanceValue}>{journey.idealFor}</span>
                </div>
              </div>
            </div>


            <div className={styles.glanceActions}>
              <Link href="/plan" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                Design This Journey
              </Link>
              <Link href="/enquire" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Speak With a Travel Designer
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Itinerary */}
      {journey.itinerary.length > 0 && (
        <section className={`section section--lg ${styles.itinerary}`}>
          <div className="container">
            <p className="text-overline">Day by Day</p>
            <h2 className={styles.itineraryTitle}>Your Journey</h2>

            <div className={styles.timeline}>
              {journey.itinerary.map((day) => (
                <div key={day.day} className={styles.timelineDay}>
                  <div className={styles.timelineImage}>
                    <Image
                      src={day.image}
                      alt={`Day ${day.day} — ${day.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineDayLabel}>Day {String(day.day).padStart(2, '0')}</span>
                    <h3 className={styles.timelineDayTitle}>{day.title}</h3>
                    <p className={styles.timelineLocation}>{day.location}</p>
                    <p className={styles.timelineDesc}>{day.description}</p>
                    {day.accommodation && (
                      <p className={styles.timelineAccom}>
                        <span className={styles.timelineAccomLabel}>Stay</span> {day.accommodation}
                      </p>
                    )}
                    {day.activities.length > 0 && (
                      <div className={styles.timelineActivities}>
                        {day.activities.map((a, i) => (
                          <span key={i} className={styles.activityTag}>{a}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inclusions / Exclusions */}
      {(journey.inclusions.length > 0 || journey.exclusions.length > 0) && (
        <section className={`section ${styles.details}`}>
          <div className={`container ${styles.detailsGrid}`}>
            {journey.inclusions.length > 0 && (
              <div>
                <h2 className={styles.detailsTitle}>Included</h2>
                <ul className={styles.detailsList}>
                  {journey.inclusions.map((item, i) => (
                    <li key={i} className={styles.detailsItem}>
                      <span className={styles.checkmark} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {journey.exclusions.length > 0 && (
              <div>
                <h2 className={styles.detailsTitle}>Not Included</h2>
                <ul className={styles.detailsList}>
                  {journey.exclusions.map((item, i) => (
                    <li key={i} className={styles.detailsItem}>
                      <span className={styles.dashmark} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBg}>
          <Image
            src={journey.heroImage}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <h2 className={styles.ctaTitle}>Ready to Begin?</h2>
          <p className={styles.ctaBody}>
            This journey is a starting point. We can refine every detail around your dates,
            preferences and budget.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/plan" className="btn btn--light btn--lg">
              Design This Journey
            </Link>
            <Link
              href="https://wa.me/254737449129"
              className={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Speak on WhatsApp <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
