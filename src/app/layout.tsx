import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s — Savanna & Co. | Luxury Kenya Safaris',
    default: 'Savanna & Co. — Luxury Kenya Safaris & Private Journeys',
  },
  description:
    'Private safaris and luxury journeys through Kenya — designed around you. Explore the Maasai Mara, Amboseli, Samburu and Kenya\'s coast with a personal travel designer.',
  metadataBase: new URL('https://savannaandco.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Savanna & Co.',
    title: 'Savanna & Co. — Luxury Kenya Safaris & Private Journeys',
    description:
      'Private safaris and luxury journeys through Kenya — designed around you.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Savanna & Co. — Luxury Kenya Safaris',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savanna & Co. — Luxury Kenya Safaris & Private Journeys',
    description:
      'Private safaris and luxury journeys through Kenya — designed around you.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: 0, left: '-9999px' }}>
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
