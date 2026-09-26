'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.css';

const navItems = [
  { label: 'Journeys', href: '/journeys' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Homepage" onClick={closeMenu}>
            <span className={styles.logoMark}>S</span>
            <span className={styles.logoText}>Savanna & Co.</span>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link
              href="https://wa.me/254700000000"
              className={styles.whatsapp}
              aria-label="Contact us on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={16} />
            </Link>
            <Link href="/plan" className={`btn btn--primary btn--sm ${styles.cta}`}>
              Plan Your Journey
            </Link>
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          <Link
            href="/plan"
            className={`btn btn--primary btn--lg ${styles.mobileCta}`}
            onClick={closeMenu}
          >
            Plan Your Journey
          </Link>
          <Link
            href="https://wa.me/254700000000"
            className={styles.mobileWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <Phone size={16} />
            <span>Speak on WhatsApp</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
