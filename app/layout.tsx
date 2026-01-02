import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import WaterRippleBackground from '@/components/WaterRippleBackground'

export const metadata: Metadata = {
  title: 'Resonance',
  description: 'Where narratives end, Resonance begins.',
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

