'use client';

import { useScrollReveal } from '@/hooks/useScroll';
import styles from './TestimonialsSection.module.css';

/* 
  PLACEHOLDER: These are clearly placeholder testimonials for layout purposes.
  They must be replaced with genuine, permission-granted traveller stories.
  Do NOT publish these as real reviews.
*/
const testimonials = [
  {
    id: 'placeholder-1',
    quote: 'From the moment we landed, everything was taken care of. Our guide knew exactly when to speak and when to let us simply absorb the landscape. It was the most extraordinary week of our lives.',
    name: 'Placeholder — to be replaced',
    country: 'United Kingdom',
    journey: 'The Mara in Slow Motion',
  },
  {
    id: 'placeholder-2',
    quote: 'We wanted a honeymoon that was different from anything we had ever experienced. Kenya delivered beyond what we imagined. The safari was thrilling, the coast was paradise, and every lodge felt like a personal sanctuary.',
    name: 'Placeholder — to be replaced',
    country: 'United States',
    journey: 'Kenya for Two',
  },
  {
    id: 'placeholder-3',
    quote: 'Our children are still talking about it. The junior ranger programme, the elephant orphanage, the nights around the campfire — this was the trip that changed our family.',
    name: 'Placeholder — to be replaced',
    country: 'Germany',
    journey: 'The Family Safari',
  },
];

export default function TestimonialsSection() {
  const ref = useScrollReveal();

  return (
    <section className={`section section--lg ${styles.section}`} aria-label="Traveller Stories">
      <div className="container" ref={ref}>
        <div className={`reveal ${styles.header}`}>
          <p className="text-overline">Traveller Stories</p>
          <h2 className={styles.heading}>In Their Words</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <blockquote key={t.id} className={styles.card}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <footer className={styles.attribution}>
                <cite className={styles.name}>{t.name}</cite>
                <span className={styles.meta}>{t.country}</span>
                <span className={styles.journey}>{t.journey}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
