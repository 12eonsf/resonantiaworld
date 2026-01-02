'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NovelModal from './NovelModal'

export default function Navigation() {
  const pathname = usePathname()
  const [isNovelModalOpen, setIsNovelModalOpen] = useState(false)
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Resonance Title */}
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase glitch-text hover:opacity-80 transition-opacity"
              data-text="RESONANCE"
            >
              RESONANCE
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Link 
                href="/journal" 
                className={`nav-link-geek ${pathname === '/journal' ? 'border-white/40 bg-white/5' : ''}`}
              >
                <span className="nav-prefix">&gt;</span>
                <span className="nav-text">Journal</span>
              </Link>
              <span className="nav-separator">|</span>
              <button 
                onClick={() => setIsNovelModalOpen(true)}
                className="nav-link-geek"
              >
                <span className="nav-prefix">&gt;</span>
                <span className="nav-text">The Novel</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <NovelModal 
        isOpen={isNovelModalOpen} 
        onClose={() => setIsNovelModalOpen(false)} 
      />
    </>
  )
}

