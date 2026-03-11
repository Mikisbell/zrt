import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { CookieConsent } from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'ONG ZRT - Reforestación y Conservación Ambiental',
  description:
    'Organización No Gubernamental ZRT dedicada a la reforestación, conservación ambiental y sensibilización pública en Perú.',
  keywords: [
    'reforestación',
    'conservación ambiental',
    'ONG',
    'Perú',
    'donaciones',
    'medio ambiente',
  ],
  authors: [{ name: 'ONG ZRT' }],
  openGraph: {
    title: 'ONG ZRT - Reforestación y Conservación Ambiental',
    description:
      'Únete a nuestra misión de reforestar y conservar el medio ambiente en Perú.',
    type: 'website',
    locale: 'es_PE',
    siteName: 'ONG ZRT',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ONG ZRT - Reforestación y Conservación Ambiental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONG ZRT - Reforestación y Conservación Ambiental',
    description:
      'Únete a nuestra misión de reforestar y conservar el medio ambiente en Perú.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased overflow-x-hidden">
        <Analytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
