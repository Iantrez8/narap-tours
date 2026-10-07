'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MapPin, MessageCircle, Mail } from 'lucide-react';
import styles from './Footer.module.css';
import { GlobalSettings } from '@/sanity/queries';

interface FooterProps {
  settings?: GlobalSettings;
}

const footerLinks = {
  explore: [
    { label: 'All Safaris', href: '/journeys' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Adventures', href: '/experiences' },
    { label: 'About NARAP', href: '/about' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

export default function Footer({ settings }: FooterProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Contact details — fall back to hardcoded values if CMS not yet configured
  const phone = settings?.contactPhone || '254737449129';
  const email = settings?.contactEmail || 'info@naraptours.com';
  const location = settings?.contactLocation || 'Wood Avenue Park Apartments, 5th floor, door 5';
  const whatsAppHref = `https://wa.me/${phone.replace(/\D/g, '')}`;

  // Social links
  const instagram = settings?.socialInstagram;
  const facebook = settings?.socialFacebook;
  const youtube = settings?.socialYouTube;
  const linkedin = settings?.socialLinkedIn;

  const hasSocials = instagram || facebook || youtube || linkedin;

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container container--wide ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>N</span>
              <div className={styles.logoTextGroup}>
                <span className={styles.logoText}>NARAP</span>
                <span className={styles.logoSub}>Tours &amp; Travel</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Extraordinary Journeys. Global Connections. Safaris, adventures,
              business travel and luxury escapes.
            </p>
          </div>

          <div className={styles.contactDetails}>
            <Link
              href="https://maps.google.com/maps?q=-1.29451322555542%2C36.785850524902344&z=17&hl=en"
              className={styles.mapButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.mapIconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.mapText}>
                <span className={styles.mapTitle}>View on Map</span>
                <span className={styles.mapSubtitle}>{location}</span>
              </div>
            </Link>

            <Link
              href={whatsAppHref}
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Link>

            <Link href={`mailto:${email}`} className={styles.contactLink}>
              <Mail size={18} /> {email}
            </Link>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Explore</h3>
              <ul className={styles.columnList}>
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Legal</h3>
              <ul className={styles.columnList}>
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} NARAP Tours &amp; Travel. All rights reserved.
          </p>
          {hasSocials ? (
            <div className={styles.social}>
              {instagram && (
                <Link href={instagram} className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              )}
              {facebook && (
                <Link href={facebook} className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              )}
              {youtube && (
                <Link href={youtube} className={styles.socialLink} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  YouTube
                </Link>
              )}
              {linkedin && (
                <Link href={linkedin} className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              )}
            </div>
          ) : (
            <div className={styles.social}>
              <Link href="#" className={styles.socialLink} aria-label="Instagram">
                Instagram
              </Link>
              <Link href="#" className={styles.socialLink} aria-label="LinkedIn">
                LinkedIn
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
