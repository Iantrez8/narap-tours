import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for NARAP Tours & Travel.',
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.date}>Last updated: September 2026</p>

        <div className={styles.content}>
          <p>
            Welcome to NARAP Tours & Travel. These Terms and Conditions govern your use of our website and services. By engaging with our website or booking a journey with us, you agree to be bound by these terms.
          </p>

          <h2>1. Booking & Payments</h2>
          <p>
            All bookings are subject to availability at the time of reservation. A deposit is required to secure your itinerary, with the balance due prior to your departure date. The exact payment schedule and cancellation policy will be outlined in your final booking agreement.
          </p>

          <h2>2. Cancellations & Refunds</h2>
          <p>
            If you wish to cancel your journey, you must notify us in writing. Cancellation fees are calculated based on the date we receive your written notification and will be detailed in your individual travel contract. We strongly recommend purchasing comprehensive travel insurance that includes cancellation coverage.
          </p>

          <h2>3. Passports & Visas</h2>
          <p>
            It is the responsibility of the traveler to ensure they have valid passports, visas, and necessary health documents (such as vaccination certificates) required for their destination. NARAP Tours & Travel cannot be held liable if a traveler is refused entry due to incorrect documentation.
          </p>

          <h2>4. Alterations to Itineraries</h2>
          <p>
            While every effort is made to adhere to your confirmed itinerary, NARAP Tours & Travel reserves the right to make changes due to unforeseen circumstances (e.g., extreme weather, road conditions, or safety concerns). Any alterations will be made with your best interest and safety in mind.
          </p>

          <h2>5. Liability</h2>
          <p>
            NARAP Tours & Travel acts only as an agent for the various independent suppliers that provide hotel accommodations, transportation, and other services connected with your journey. We are not liable for any injury, loss, damage, accident, delay, or irregularity caused by the defect of any vehicle or the negligence of any company or person engaged in conveying the passenger or carrying out the arrangements of the tour.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            The content, design, graphics, and other materials related to this website are protected under applicable copyrights and trademarks. You may not copy, reproduce, or distribute any content from our site without our prior written permission.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these terms, please contact us at <a href="mailto:info@naraptoursandtravel.com">info@naraptoursandtravel.com</a> or via WhatsApp at <Link href="https://wa.me/254743883119">+254 743 883 119</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
