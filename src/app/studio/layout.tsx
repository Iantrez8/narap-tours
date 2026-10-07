import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Sanity Studio',
  description: 'Content Management Studio',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        html, body {
          overflow: hidden !important;
          overscroll-behavior: none;
          -webkit-font-smoothing: antialiased;
        }
        #main-content {
          height: 100dvh;
          width: 100dvw;
          overflow: hidden;
        }
      `}</style>
      {children}
    </>
  );
}
