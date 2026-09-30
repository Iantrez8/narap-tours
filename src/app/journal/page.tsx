import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Stories, guides, and insights from the African bush.',
};

const articles = [
  {
    title: 'The Great Migration: A Timing Guide',
    excerpt: 'Understanding the rhythms of nature to plan your perfect Maasai Mara safari.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    category: 'Wildlife',
    date: 'August 12, 2024'
  },
  {
    title: 'Conservation in Action',
    excerpt: 'How community-led conservancies are changing the future of Kenyan wildlife.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80',
    category: 'Conservation',
    date: 'July 28, 2024'
  },
  {
    title: 'Packing for a Luxury Safari',
    excerpt: 'What to bring and what to leave behind for your journey to the savannah.',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
    category: 'Travel Advice',
    date: 'June 15, 2024'
  }
];

export default function JournalPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>The Journal</p>
          <h1 className={styles.heroTitle}>Notes from the Field</h1>
          <p className={styles.heroSubtitle}>
            Stories, insights, and inspiration from the African bush.
          </p>
        </div>
      </section>

      <section className={`section ${styles.listing}`}>
        <div className="container">
          <div className={styles.grid}>
            {articles.map((article, index) => (
              <article key={index} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span>{article.category}</span>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{article.date}</span>
                  </div>
                  <h2 className={styles.cardTitle}>
                    <Link href="#" className={styles.cardLink}>{article.title}</Link>
                  </h2>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
