import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Resonance',
  description: 'Where narratives end, Resonance begins.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="flex flex-col h-full max-h-screen overflow-hidden">
        <main className="flex-1 min-h-0 max-h-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

