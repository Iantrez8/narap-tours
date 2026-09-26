import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  journeys: [
    { label: 'All Journeys', href: '/journeys' },
    { label: 'Private Safari', href: '/journeys/mara-in-slow-motion' },
    { label: 'Honeymoon', href: '/journeys/kenya-for-two' },
    { label: 'Family Safari', href: '/journeys/family-safari' },
    { label: 'Photography', href: '/journeys/photographers-kenya' },
  ],
  destinations: [
    { label: 'Maasai Mara', href: '/destinations/maasai-mara' },
    { label: 'Amboseli', href: '/destinations/amboseli' },
    { label: 'Samburu', href: '/destinations/samburu' },
    { label: 'Diani', href: '/destinations/diani' },
    { label: 'Lamu', href: '/destinations/lamu' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Responsible Travel', href: '/responsible-travel' },
    { label: 'Partners', href: '/partners' },
    { label: 'Corporate Travel', href: '/corporate' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cancellation Policy', href: '/cancellation' },
    { label: 'Partner Terms', href: '/partner-terms' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container container--wide ${styles.inner}`}>
        {/* Top section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>S</span>
              <span className={styles.logoText}>Savanna & Co.</span>
            </div>
            <p className={styles.tagline}>
              Private journeys through Kenya&apos;s wild landscapes, extraordinary
              stays and unforgettable moments — designed around you.
            </p>
            <div className={styles.contact}>
              <Link
                href="https://wa.me/254700000000"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp <ArrowUpRight size={14} />
              </Link>
              {/* PLACEHOLDER: Replace with real email */}
              <Link href="mailto:hello@savannaandco.com" className={styles.contactLink}>
                hello@savannaandco.com <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Journeys</h3>
              <ul className={styles.columnList}>
                {footerLinks.journeys.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Destinations</h3>
              <ul className={styles.columnList}>
                {footerLinks.destinations.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.columnList}>
                {footerLinks.company.map((link) => (
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

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Savanna & Co. All rights reserved.
          </p>
          {/* PLACEHOLDER: Add real social links when available */}
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
