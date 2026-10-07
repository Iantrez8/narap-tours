'use client';

import { useState, useCallback, type FormEvent, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import styles from './page.module.css';

interface FormData {
  motivation: string[];
  otherMotivation: string;
  destination: string;
  otherDestination: string;
  experiences: string[];
  travellers: string;
  dates: string;
  duration: string;
  budget: string;
  message: string;
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  referralCode: string;
}

const motivations = [
  { value: 'honeymoon', label: 'Honeymoon', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&q=70' },
  { value: 'wildlife', label: 'Wildlife', image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=400&q=70' },
  { value: 'family', label: 'Family', image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&q=70' },
  { value: 'photography', label: 'Photography', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=70' },
  { value: 'adventure', label: 'Adventure', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&q=70' },
  { value: 'celebration', label: 'Celebration', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&q=70' },
  { value: 'corporate', label: 'Corporate', image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=400&q=70' },
  { value: 'first-safari', label: 'First Safari', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=70' },
  { value: 'other', label: 'Other', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=70' },
];

const experienceOptions = [
  'Wildlife Safari', 'Beach & Coast', 'Culture & Communities', 'Mountains & Trekking',
  'Wellness & Spa', 'Educational & School Trips', 'Sports & Athletics', 'Photography',
];

const destinationOptions = ['Maasai Mara', 'Amboseli', 'Samburu', 'Lake Nakuru', 'Tsavo', 'Diani Beach', 'Multiple Destinations', 'Other'];

const travellerOptions = ['Solo', 'Couple', 'Family', 'Friends', 'Corporate Group', 'School Group', 'Sports Team'];
const durationOptions = ['3–5 Nights', '6–8 Nights', '9–12 Nights', '13+ Nights', 'Not sure'];
const budgetOptions = [
  'Under $3,000 per person',
  '$3,000 – $5,000 per person',
  '$5,000 – $8,000 per person',
  '$8,000 – $12,000 per person',
  '$12,000+ per person',
  'Flexible / Not sure',
];

const totalSteps = 8;

function PlanForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    motivation: [],
    otherMotivation: '',
    destination: '',
    otherDestination: '',
    experiences: [],
    travellers: '',
    dates: '',
    duration: '',
    budget: '',
    message: '',
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    referralCode: '',
  });

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (ref) {
      setFormData(prev => ({ ...prev, referralCode: ref }));
    }
  }, [searchParams]);

  const updateField = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleMotivation = useCallback((mot: string) => {
    setFormData((prev) => ({
      ...prev,
      motivation: prev.motivation.includes(mot)
        ? prev.motivation.filter((m) => m !== mot)
        : [...prev.motivation, mot],
    }));
  }, []);

  const toggleExperience = useCallback((exp: string) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.includes(exp)
        ? prev.experiences.filter((e) => e !== exp)
        : [...prev.experiences, exp],
    }));
  }, []);

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return formData.motivation.length > 0 && (!formData.motivation.includes('other') || formData.otherMotivation.trim() !== '');
      case 2: return formData.destination !== '' && (formData.destination !== 'Other' || formData.otherDestination.trim() !== '');
      case 3: return formData.experiences.length > 0;
      case 4: return formData.travellers !== '';
      case 5: return formData.duration !== '';
      case 6: return formData.budget !== '';
      case 7: return true;
      case 8: return formData.name !== '' && formData.email !== '';
      default: return false;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Build the WhatsApp message
    const mots = formData.motivation.length > 0 
      ? formData.motivation.map(m => m === 'other' ? formData.otherMotivation : m).join(', ') 
      : 'None specified';
    const dest = formData.destination === 'Other' ? formData.otherDestination : formData.destination;
    const exps = formData.experiences.length > 0 ? formData.experiences.join(', ') : 'None specified';
    const refText = formData.referralCode ? `\n*Referred By:* ${formData.referralCode}` : '';
    
    const messageText = `Hello NARAP Tours! I would like to plan a journey.${refText}

*Client Details:*
Name: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp || 'Not provided'}
Country: ${formData.country || 'Not provided'}

*Journey Preferences:*
Motivation: ${mots}
Destination: ${dest}
Experiences: ${exps}
Travellers: ${formData.travellers}
Duration: ${formData.duration}
Travel Dates: ${formData.dates || 'Not provided'}
Budget: ${formData.budget}

*Additional Details:*
${formData.message || 'None'}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/254737449129?text=${encodedMessage}`;
    
    // Redirect the user in the same tab to avoid pop-up blockers
    window.location.href = whatsappUrl;
    
    // Show success state on the website
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successIcon}>
            <Check size={32} />
          </div>
          <h1 className={styles.successTitle}>Your Journey Begins Here</h1>
          <p className={styles.successBody}>
            Thank you for sharing your travel vision with us. One of our travel designers
            will be in touch within 24 hours to begin shaping your journey.
          </p>
          <div className={styles.successActions}>
            <Link href="/" className="btn btn--primary btn--lg">
              Return Home
            </Link>
            <Link
              href="https://wa.me/254737449129"
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Speak on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        {/* Progress */}
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${(step / totalSteps) * 100}%` }}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.stepContent}>
            {/* Step 1: Motivation */}
            {step === 1 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 1 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>What kind of journey are you looking for?</h1>
                <p className={styles.stepHint}>Select all that apply.</p>
                <div className={styles.optionGrid}>
                  {motivations.map((m) => (
                    <button
                      key={m.value}
                      type="button"
                      className={`${styles.imageOption} ${formData.motivation.includes(m.value) ? styles.imageOptionSelected : ''}`}
                      onClick={() => toggleMotivation(m.value)}
                    >
                      <div className={styles.imageOptionImg}>
                        <Image
                          src={m.image}
                          alt={m.label}
                          fill
                          sizes="200px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <span className={styles.imageOptionLabel}>{m.label}</span>
                    </button>
                  ))}
                </div>
                {formData.motivation.includes('other') && (
                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <label htmlFor="plan-other-motivation" className="label">Please specify your journey type</label>
                    <input
                      type="text"
                      id="plan-other-motivation"
                      className="input"
                      placeholder="e.g., Wellness Retreat, Birding Safari..."
                      value={formData.otherMotivation}
                      onChange={(e) => updateField('otherMotivation', e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Destination */}
            {step === 2 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 2 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>Where would you like to explore?</h1>
                <div className={styles.radioGrid}>
                  {destinationOptions.map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`${styles.radioOption} ${formData.destination === d ? styles.radioOptionSelected : ''}`}
                      onClick={() => updateField('destination', d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                {formData.destination === 'Other' && (
                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <label htmlFor="plan-other-destination" className="label">Please specify your destination</label>
                    <input
                      type="text"
                      id="plan-other-destination"
                      className="input"
                      placeholder="e.g., South Africa, Italy..."
                      value={formData.otherDestination}
                      onChange={(e) => updateField('otherDestination', e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Experiences */}
            {step === 3 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 3 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>What would you like to experience?</h1>
                <p className={styles.stepHint}>Select all that interest you.</p>
                <div className={styles.tagGrid}>
                  {experienceOptions.map((exp) => (
                    <button
                      key={exp}
                      type="button"
                      className={`${styles.tagOption} ${formData.experiences.includes(exp) ? styles.tagOptionSelected : ''}`}
                      onClick={() => toggleExperience(exp)}
                    >
                      {exp}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Travellers */}
            {step === 4 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 4 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>Who is travelling?</h1>
                <div className={styles.radioGrid}>
                  {travellerOptions.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`${styles.radioOption} ${formData.travellers === t ? styles.radioOptionSelected : ''}`}
                      onClick={() => updateField('travellers', t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Duration */}
            {step === 5 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 5 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>How long would you like to stay?</h1>
                <div className={styles.radioGrid}>
                  {durationOptions.map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`${styles.radioOption} ${formData.duration === d ? styles.radioOptionSelected : ''}`}
                      onClick={() => updateField('duration', d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Budget */}
            {step === 6 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 6 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>What is your approximate budget?</h1>
                <div className={styles.radioGrid}>
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`${styles.radioOption} ${formData.budget === b ? styles.radioOptionSelected : ''}`}
                      onClick={() => updateField('budget', b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 7: Additional */}
            {step === 7 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 7 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>Tell us anything else about your journey.</h1>
                <p className={styles.stepHint}>
                  Special occasions, dietary requirements, accessibility needs, travel dates, or anything else that matters to you.
                </p>
                <label htmlFor="plan-dates" className="label">Approximate Travel Dates</label>
                <input
                  type="text"
                  id="plan-dates"
                  className="input"
                  placeholder="e.g. March 2025, Flexible"
                  value={formData.dates}
                  onChange={(e) => updateField('dates', e.target.value)}
                />
                <div style={{ marginTop: 'var(--space-4)' }}>
                  <label htmlFor="plan-message" className="label">Additional Details</label>
                  <textarea
                    id="plan-message"
                    className="textarea"
                    placeholder="Tell us about your ideal journey..."
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 8: Contact */}
            {step === 8 && (
              <div className={styles.step}>
                <p className={styles.stepLabel}>Step 8 of {totalSteps}</p>
                <h1 className={styles.stepTitle}>Almost there. How can we reach you?</h1>
                <div className={styles.inputGrid}>
                  <div>
                    <label htmlFor="plan-name" className="label">Full Name *</label>
                    <input
                      type="text"
                      id="plan-name"
                      className="input"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="plan-email" className="label">Email *</label>
                    <input
                      type="email"
                      id="plan-email"
                      className="input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="plan-whatsapp" className="label">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="plan-whatsapp"
                      className="input"
                      placeholder="+1 234 567 8900"
                      value={formData.whatsapp}
                      onChange={(e) => updateField('whatsapp', e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="plan-country" className="label">Country</label>
                    <input
                      type="text"
                      id="plan-country"
                      className="input"
                      placeholder="Your country"
                      value={formData.country}
                      onChange={(e) => updateField('country', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className={styles.nav}>
            {step > 1 && (
              <button
                type="button"
                className="btn btn--secondary"
                onClick={() => setStep((s) => s - 1)}
              >
                <ArrowLeft size={16} /> Back
              </button>
            )}
            <div style={{ flex: 1 }} />
            {step < totalSteps ? (
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
              >
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn--primary btn--lg"
                disabled={!canProceed()}
              >
                Submit My Journey
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <Suspense fallback={
      <div className={styles.page}>
        <div style={{ padding: 'var(--space-20)', textAlign: 'center', fontFamily: 'var(--font-sans)', color: 'var(--color-charcoal)' }}>
          Loading...
        </div>
      </div>
    }>
      <PlanForm />
    </Suspense>
  );
}
