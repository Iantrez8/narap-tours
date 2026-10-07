'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScroll';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';
import styles from './TestimonialsSection.module.css';
import { Testimonial } from '@/sanity/queries';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

/* 
  PLACEHOLDER: If no testimonials have been added in the Sanity studio yet,
  these placeholders are shown. Replace them with real traveller stories
  via the Sanity Studio → Testimonials section.
*/
const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    _id: 'placeholder-1',
    quote:
      'From the moment we landed, everything was taken care of. Our guide knew exactly when to speak and when to let us simply absorb the landscape. It was the most extraordinary week of our lives.',
    name: 'Placeholder — to be replaced',
    country: 'United Kingdom',
    journey: 'The Mara in Slow Motion',
    rating: 5,
    initials: 'SR',
    featured: true,
  },
  {
    _id: 'placeholder-2',
    quote:
      'We wanted a honeymoon that was different from anything we had ever experienced. Kenya delivered beyond what we imagined. The safari was thrilling, the coast was paradise, and every lodge felt like a personal sanctuary.',
    name: 'Placeholder — to be replaced',
    country: 'United States',
    journey: 'Kenya for Two',
    rating: 5,
    initials: 'JM',
    featured: true,
  },
  {
    _id: 'placeholder-3',
    quote:
      'Our children are still talking about it. The junior ranger programme, the elephant orphanage, the nights around the campfire — this was the trip that changed our family.',
    name: 'Placeholder — to be replaced',
    country: 'Germany',
    journey: 'The Family Safari',
    rating: 5,
    initials: 'KW',
    featured: true,
  },
  {
    _id: 'placeholder-4',
    quote:
      'I have been on safaris before, but nothing prepared me for the intimacy of a NARAP journey. Watching a leopard at sunset from our private veranda was pure magic.',
    name: 'Placeholder — to be replaced',
    country: 'Canada',
    journey: 'Wild & Untamed',
    rating: 5,
    initials: 'DP',
    featured: true,
  },
  {
    _id: 'placeholder-5',
    quote:
      'The attention to detail was remarkable. From the bush breakfast overlooking the plains to the surprise sundowner on the escarpment — every moment felt curated just for us.',
    name: 'Placeholder — to be replaced',
    country: 'Australia',
    journey: 'Great Rift Explorer',
    rating: 5,
    initials: 'LH',
    featured: true,
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? 'currentColor' : 'none'}
          strokeWidth={i < rating ? 0 : 1.5}
          className={i < rating ? styles.starFilled : styles.starEmpty}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const ref = useScrollReveal();

  // Use Sanity data if available and non-empty, otherwise fall back to placeholders
  const data =
    testimonials && testimonials.length > 0 ? testimonials : PLACEHOLDER_TESTIMONIALS;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, data.length - visibleCount);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    intervalRef.current = setInterval(goNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, goNext]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      className={`section section--lg ${styles.section}`}
      aria-label="Traveller Stories"
    >
      <div className="container" ref={ref}>
        <div className={`reveal ${styles.header}`}>
          <p className="text-overline">Traveller Stories</p>
          <h2 className={styles.heading}>In Their Words</h2>
          <p className={styles.subtitle}>
            Hear from those who have journeyed with us across Kenya and beyond.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            <div
              ref={trackRef}
              className={styles.track}
              style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}
            >
              {data.map((t, i) => {
                const displayInitials = t.initials || getInitials(t.name);
                return (
                  <blockquote
                    key={t._id}
                    className={styles.card}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className={styles.cardTop}>
                      <div className={styles.quoteIcon} aria-hidden="true">
                        <Quote size={20} />
                      </div>
                      <StarRating rating={t.rating} />
                    </div>

                    <p className={styles.quote}>{t.quote}</p>

                    <footer className={styles.attribution}>
                      <div className={styles.avatar}>
                        {t.photo ? (
                          <Image
                            src={t.photo}
                            alt={t.name}
                            width={40}
                            height={40}
                            style={{ objectFit: 'cover', borderRadius: '50%' }}
                          />
                        ) : (
                          <span className={styles.initials}>{displayInitials}</span>
                        )}
                      </div>
                      <div className={styles.authorInfo}>
                        <cite className={styles.name}>{t.name}</cite>
                        {t.country && <span className={styles.meta}>{t.country}</span>}
                        {t.journey && <span className={styles.journey}>{t.journey}</span>}
                      </div>
                    </footer>
                  </blockquote>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navRow}>
            <div className={styles.dots}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => {
                    goTo(i);
                    handleInteraction();
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className={styles.arrows}>
              <button
                className={styles.arrowBtn}
                onClick={() => {
                  goPrev();
                  handleInteraction();
                }}
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className={styles.arrowBtn}
                onClick={() => {
                  goNext();
                  handleInteraction();
                }}
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
