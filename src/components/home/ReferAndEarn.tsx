'use client';

import Link from 'next/link';
import { Gift, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScroll';
import styles from './ReferAndEarn.module.css';

export default function ReferAndEarn() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Refer and Earn">
      <div className={`container ${styles.container}`} ref={ref}>
        <div className={`reveal ${styles.inner}`}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <Gift size={16} strokeWidth={2} />
              <span>Referral Program</span>
            </div>
            <h2 className={styles.heading}>
              Share the Adventure,<br />Earn Rewards.
            </h2>
            <p className={styles.body}>
              Know someone who deserves an extraordinary journey? Refer a friend to NARAP Tours & Travel and earn <strong>exclusive rewards and custom packages</strong> when they book. The more friends you share with, the more you earn.
            </p>
            <div className={styles.perks}>
              <div className={styles.perk}>
                <span className={styles.perkValue}>Exclusive</span>
                <span className={styles.perkLabel}>Rewards per referral</span>
              </div>
              <div className={styles.perkDivider} />
              <div className={styles.perk}>
                <span className={styles.perkValue}>Unlimited</span>
                <span className={styles.perkLabel}>Referrals you can make</span>
              </div>
              <div className={styles.perkDivider} />
              <div className={styles.perk}>
                <span className={styles.perkValue}>Instant</span>
                <span className={styles.perkLabel}>Link generation</span>
              </div>
            </div>
            <Link href="/referrals" className={styles.cta}>
              <span>Join the Referral Program</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className={styles.visual}>
            <div className={styles.giftCard}>
              <div className={styles.giftCardInner}>
                <div className={styles.giftIcon}>
                  <Gift size={32} strokeWidth={1.5} />
                </div>
                <div className={styles.giftText}>
                  <span className={styles.giftAmount}>Rewards</span>
                  <span className={styles.giftSub}>Custom Packages</span>
                </div>
                <div className={styles.giftFooter}>
                  <span>NARAP Tours & Travel</span>
                  <span>Referral Reward</span>
                </div>
              </div>
            </div>
            <div className={styles.floatingOrb1} aria-hidden="true" />
            <div className={styles.floatingOrb2} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
