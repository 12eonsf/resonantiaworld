'use client'

import { useState } from 'react'
import ResonanceLogo from '@/components/ResonanceLogo'
import ResonanceSlogan from '@/components/ResonanceSlogan'
import Link from 'next/link'
import NovelModal from '@/components/NovelModal'

export default function Home() {
  const [isNovelModalOpen, setIsNovelModalOpen] = useState(false)
  return (
    <div className="h-screen w-screen max-h-screen max-w-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative water-ripple-bg" style={{ height: '100vh' }}>
      {/* Additional ripple layers */}
      <div className="ripple-layer-1"></div>
      <div className="ripple-layer-2"></div>
      <div className="ripple-layer-3"></div>
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 py-2 w-full max-w-full relative z-10">
        {/* Logo - top center */}
        <div className="text-white flex-shrink-0">
          <ResonanceLogo size={80} />
        </div>

        {/* Title - RESONANCE with glitch drift shadow */}
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] uppercase glitch-text flex-shrink-0 max-w-full overflow-hidden"
          data-text="RESONANCE"
        >
          RESONANCE
        </h1>

        {/* Slogan component */}
        <div className="mt-1 flex-shrink-0 max-w-full overflow-hidden">
          <ResonanceSlogan className="text-xs sm:text-sm font-mono tracking-wide" />
        </div>

        {/* Navigation Links - Journal and The Novel */}
        <nav className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 flex-shrink-0">
          <Link 
            href="/journal" 
            className="nav-link-geek"
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
        </nav>
      </div>
      
      <NovelModal 
        isOpen={isNovelModalOpen} 
        onClose={() => setIsNovelModalOpen(false)} 
      />
    </div>
  )
}

