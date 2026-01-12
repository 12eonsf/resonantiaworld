import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import WaterRippleBackground from '@/components/WaterRippleBackground'

export const metadata: Metadata = {
  title: 'Resonance',
  description: 'Where narratives end, Resonance begins.',
  keywords: 'Resonance, sci-fi, novel, literature',
  authors: [{ name: 'S.C. Yue' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Resonance',
    description: 'Where narratives end, Resonance begins.',
    url: 'https://resonantia.world',
    siteName: 'Resonance',
    images: [
      {
        url: 'https://resonantia.world/resonance-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Resonance',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resonance',
    description: 'Where narratives end, Resonance begins.',
    images: ['https://resonantia.world/resonance-cover.jpg'],
  },
  alternates: {
    canonical: 'https://resonantia.world',
  },
  other: {
    'og:image:secure_url': 'https://resonantia.world/resonance-cover.jpg',
    'og:image:url': 'https://resonantia.world/resonance-cover.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 如果将来需要，可以添加网站验证
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Security and compatibility meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* WeChat specific meta tags */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden relative">
        <WaterRippleBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

