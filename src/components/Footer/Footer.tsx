import Link from 'next/link';
import { ArrowUpRight, MapPin, MessageCircle, Mail } from 'lucide-react';
import styles from './Footer.module.css';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container container--wide ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>N</span>
              <div className={styles.logoTextGroup}>
                <span className={styles.logoText}>NARAP</span>
                <span className={styles.logoSub}>Tours & Travel</span>
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
                <span className={styles.mapSubtitle}>Wood Avenue Park Apartments<br/>5th floor, door 5</span>
              </div>
            </Link>

            <Link
              href="https://wa.me/254737449129"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Link>
            
            <Link href="mailto:info@naraptoursandtravel.com" className={styles.contactLink}>
              <Mail size={18} /> info@naraptoursandtravel.com
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
            &copy; {currentYear} NARAP Tours & Travel. All rights reserved.
          </p>
          <div className={styles.social}>
            <Link href="#" className={styles.socialLink} aria-label="Instagram">
              Instagram
            </Link>
            <Link href="#" className={styles.socialLink} aria-label="LinkedIn">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
