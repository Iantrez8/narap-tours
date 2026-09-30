import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { Gift, Share2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Referrals & Partners',
  description: 'Join the NARAP Tours & Travel Referral Program. Share the luxury of extraordinary journeys and earn exclusive rewards.',
};

export default function ReferralsPage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1522881451255-f59ad836f363?w=1920&q=80"
          alt="Friends enjoying a safari sunset"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>Referral Program</p>
          <h1 className={styles.heroTitle}>Share the Experience</h1>
          <p className={styles.heroSubtitle}>
            Our best journeys are discovered through stories shared among friends. Invite them to experience Kenya with us and enjoy exclusive privileges.
          </p>
        </div>
      </section>

      <section className={`section ${styles.howItWorks}`}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.heading}>How It Works</h2>
            <p className={styles.subheading}>A seamless process designed to reward your loyalty.</p>
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <Share2 size={24} />
              </div>
              <h3 className={styles.stepTitle}>1. Share Your Link</h3>
              <p className={styles.stepDesc}>Register below to receive your personalized referral link. Share it with friends, family, or colleagues.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <Users size={24} />
              </div>
              <h3 className={styles.stepTitle}>2. They Book a Journey</h3>
              <p className={styles.stepDesc}>When your referral books a private safari, our expert designers ensure they receive the ultimate NARAP Tours & Travel treatment.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <Gift size={24} />
              </div>
              <h3 className={styles.stepTitle}>3. Earn Rewards</h3>
              <p className={styles.stepDesc}>Receive up to $500 in travel credit towards your next journey, or opt for an exclusive conservation donation in your name.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section--lg ${styles.formSection}`}>
        <div className={`container ${styles.formContainer}`}>
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>Join the Program</h2>
            <p className={styles.formBody}>
              Become an ambassador of authentic Kenyan luxury. Enter your details to get your unique sharing link.
            </p>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="ref-name" className="label">Full Name</label>
                <input type="text" id="ref-name" className="input" placeholder="Your name" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="ref-email" className="label">Email Address</label>
                <input type="email" id="ref-email" className="input" placeholder="you@example.com" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="ref-previous" className="label">Have you traveled with us before?</label>
                <select id="ref-previous" className="input">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button type="button" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
                Generate My Link
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
