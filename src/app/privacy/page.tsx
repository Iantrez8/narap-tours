import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for NARAP Tours & Travel.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.date}>Last updated: September 2026</p>

        <div className={styles.content}>
          <p>
            At NARAP Tours & Travel (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. This may include:
          </p>
          <ul>
            <li><strong>Personal Details:</strong> Name, email address, phone number (including WhatsApp), and country of residence.</li>
            <li><strong>Travel Preferences:</strong> Destinations, dates, budget, accommodations, and special requirements.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the personal information collected via our website for a variety of business purposes, including:
          </p>
          <ul>
            <li>To facilitate the creation of customized travel itineraries.</li>
            <li>To respond to your inquiries and offer customer support.</li>
            <li>To send administrative information to you, such as updates to our terms, conditions, and policies.</li>
            <li>To request feedback and contact you about your use of our website.</li>
          </ul>

          <h2>3. Will Your Information Be Shared?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. When booking a journey, your necessary details may be shared with trusted third-party partners (e.g., lodges, camps, airlines, and local guides) exclusively for the purpose of fulfilling your itinerary.
          </p>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar tracking technologies to access or store information. You can set your browser to refuse all or some browser cookies, but this may affect how the website functions for you.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet can be guaranteed to be 100% secure.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at <a href="mailto:info@naraptoursandtravel.com">info@naraptoursandtravel.com</a> or contact us via WhatsApp at <Link href="https://wa.me/254743883119">+254 743 883 119</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
