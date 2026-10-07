import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AIChat from '@/components/AIChat/AIChat';
import { getGlobalSettings } from '@/sanity/queries';
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
    template: '%s — NARAP Tours & Travel',
    default: 'NARAP Tours & Travel — Extraordinary Journeys. Global Connections.',
  },
  description:
    'Extraordinary Journeys. Global Connections. Safaris, adventures, business travel and luxury escapes through Kenya and beyond — designed around you.',
  metadataBase: new URL('https://naraptoursandtravel.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'NARAP Tours & Travel',
    title: 'NARAP Tours & Travel — Extraordinary Journeys. Global Connections.',
    description:
      'Safaris, adventures, business travel and luxury escapes — designed around you.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NARAP Tours & Travel — Extraordinary Journeys',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NARAP Tours & Travel — Extraordinary Journeys. Global Connections.',
    description:
      'Safaris, adventures, business travel and luxury escapes — designed around you.',
  },
  icons: {
    icon: '/images/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const settings = await getGlobalSettings();

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: 0, left: '-9999px' }}>
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer settings={settings} />
        <AIChat />
      </body>
    </html>
  );
}
