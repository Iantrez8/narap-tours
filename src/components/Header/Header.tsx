'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Safaris',
    href: '/journeys',
  },
  {
    label: 'Adventures',
    href: '/experiences',
  },
  {
    label: 'Destinations',
    href: '/destinations',
    dropdown: [
      { label: 'Maasai Mara', href: '/destinations/maasai-mara', description: 'Endless golden grasslands' },
      { label: 'Amboseli', href: '/destinations/amboseli', description: 'Africa\'s iconic mountain backdrop' },
      { label: 'Samburu', href: '/destinations/samburu', description: 'The untamed wild north' },
      { label: 'Tsavo', href: '/destinations/tsavo', description: 'Two parks, one wilderness' },
      { label: 'Lake Nakuru', href: '/destinations/lake-nakuru', description: 'Rift Valley jewel' },
      { label: 'Diani Beach', href: '/destinations/diani', description: 'White sand & turquoise water' },
      { label: 'Lamu', href: '/destinations/lamu', description: 'Where time forgot to hurry' },
      { label: 'View All Destinations', href: '/destinations', description: 'Explore every destination' },
    ],
  },
  { label: 'Business Travel', href: '/journal' },
  { label: 'About', href: '/about' },
  { label: 'Referrals', href: '/referrals' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setMobileExpandedItem(null);
  }, []);

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const toggleMobileExpand = useCallback((label: string) => {
    setMobileExpandedItem(prev => prev === label ? null : label);
  }, []);

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.headerOpen : ''}`}
        role="banner"
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Homepage" onClick={closeMenu}>
            <span className={styles.logoMark}>N</span>
            <div className={styles.logoTextGroup}>
              <span className={styles.logoText}>NARAP</span>
              <span className={styles.logoSub}>Tours &amp; Travel</span>
            </div>
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.href + item.label}
                className={styles.navItem}
                onMouseEnter={() => item.dropdown ? handleDropdownEnter(item.label) : undefined}
                onMouseLeave={item.dropdown ? handleDropdownLeave : undefined}
              >
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${item.dropdown ? styles.navLinkWithDropdown : ''}`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={12} className={`${styles.chevron} ${activeDropdown === item.label ? styles.chevronOpen : ''}`} />}
                </Link>

                {item.dropdown && (
                  <div
                    className={`${styles.dropdown} ${activeDropdown === item.label ? styles.dropdownOpen : ''}`}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className={styles.dropdownInner}>
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={styles.dropdownLink}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className={styles.dropdownLinkTitle}>{sub.label}</span>
                          {sub.description && (
                            <span className={styles.dropdownLinkDesc}>{sub.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link
              href="https://wa.me/254737449129"
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
            <div key={item.href + item.label} className={styles.mobileNavGroup}>
              {item.dropdown ? (
                <>
                  <button
                    className={styles.mobileNavLink}
                    onClick={() => toggleMobileExpand(item.label)}
                    aria-expanded={mobileExpandedItem === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`${styles.mobileChevron} ${mobileExpandedItem === item.label ? styles.mobileChevronOpen : ''}`}
                    />
                  </button>
                  <div
                    className={`${styles.mobileSubMenu} ${mobileExpandedItem === item.label ? styles.mobileSubMenuOpen : ''}`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.mobileSubLink}
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
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
            href="https://wa.me/254737449129"
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
