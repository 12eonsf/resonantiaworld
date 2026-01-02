'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/journal" 
              className="text-sm font-light tracking-wide hover:text-white/80 transition-colors"
            >
              Journal
            </Link>
            <Link 
              href="/the-novel" 
              className="text-sm font-light tracking-wide hover:text-white/80 transition-colors"
            >
              The Novel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

