'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Gift, Share2, Users, Copy, Check } from 'lucide-react';

export default function ReferralsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [previous, setPrevious] = useState('yes');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!name || !email) return;
    
    // Create a simple referral code based on the user's name
    const code = name.toLowerCase().replace(/[^a-z0-9]/g, '') + Math.floor(Math.random() * 1000);
    
    // In production, you would want to save this to a database.
    // Since this is a static WhatsApp-driven CRM, we use the URL directly.
    // Use window.location.origin to get the current domain
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://narap-tours.vercel.app';
    const link = `${baseUrl}/plan?ref=${code}`;
    
    setGeneratedLink(link);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
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
              <p className={styles.stepDesc}>Receive exclusive rewards and custom packages towards your next journey, or opt for an exclusive conservation donation in your name.</p>
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
            
            {!generatedLink ? (
              <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
                <div className={styles.inputGroup}>
                  <label htmlFor="ref-name" className="label">Full Name</label>
                  <input 
                    type="text" 
                    id="ref-name" 
                    className="input" 
                    placeholder="Your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="ref-email" className="label">Email Address</label>
                  <input 
                    type="email" 
                    id="ref-email" 
                    className="input" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="ref-previous" className="label">Have you traveled with us before?</label>
                  <select 
                    id="ref-previous" 
                    className="input"
                    value={previous}
                    onChange={(e) => setPrevious(e.target.value)}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
                  Generate My Link
                </button>
              </form>
            ) : (
              <div className={styles.form} style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: 'var(--color-charcoal)', marginBottom: 'var(--space-2)' }}>
                    Your Link is Ready!
                  </h3>
                  <p style={{ color: 'var(--color-charcoal-light)', fontSize: 'var(--text-sm)' }}>
                    Share this link with your network. When they use it to plan a journey, we'll automatically track your referral.
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-8)' }}>
                  <input 
                    type="text" 
                    className="input" 
                    value={generatedLink} 
                    readOnly 
                    style={{ flex: 1, backgroundColor: 'var(--color-ivory)', color: 'var(--color-charcoal)' }}
                  />
                  <button 
                    onClick={handleCopy}
                    className="btn btn--primary" 
                    style={{ padding: '0 var(--space-4)' }}
                    aria-label="Copy to clipboard"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                
                <button 
                  onClick={() => setGeneratedLink('')}
                  className="btn btn--secondary"
                >
                  Generate Another Link
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
