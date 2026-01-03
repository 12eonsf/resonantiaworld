'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NovelModal from './NovelModal'
import ResonanceLogo from './ResonanceLogo'
import ResonanceSlogan from './ResonanceSlogan'

export default function Navigation() {
  const pathname = usePathname()
  const [isNovelModalOpen, setIsNovelModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        {/* Desktop Navigation */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Resonance Title */}
            <Link 
              href="/" 
              className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase glitch-text hover:opacity-80 transition-opacity"
              data-text="RESONANCE"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESONANCE
            </Link>
            
            {/* Desktop Navigation Links */}
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

        {/* Mobile Navigation - Three Rows */}
        <div className="md:hidden">
          {/* Row 1: Logo + Resonance */}
          <div className="flex items-center justify-center gap-2 px-4 py-2">
            <ResonanceLogo size={32} />
            <Link 
              href="/" 
              className="text-base font-light tracking-[0.3em] uppercase glitch-text hover:opacity-80 transition-opacity"
              data-text="RESONANCE"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESONANCE
            </Link>
          </div>

          {/* Row 2: Slogan */}
          <div className="flex items-center justify-center px-4 pb-2">
            <ResonanceSlogan className="text-xs font-mono tracking-wide text-white/60" />
          </div>

          {/* Row 3: Menu Icon */}
          <div className="flex items-center justify-center px-4 pb-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white transition-colors p-2 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                style={{ overflow: 'visible' }}
              >
                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isMobileMenuOpen ? "20" : "22"}
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fill="currentColor"
                  fontWeight="300"
                >
                  {isMobileMenuOpen ? '∞' : '≋'}
                </text>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                <Link
                  href="/journal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block nav-link-geek ${pathname === '/journal' ? 'border-white/40 bg-white/5' : ''}`}
                >
                  <span className="nav-prefix">&gt;</span>
                  <span className="nav-text">Journal</span>
                </Link>
                <button
                  onClick={() => {
                    setIsNovelModalOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left nav-link-geek"
                >
                  <span className="nav-prefix">&gt;</span>
                  <span className="nav-text">The Novel</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      <NovelModal 
        isOpen={isNovelModalOpen} 
        onClose={() => setIsNovelModalOpen(false)} 
      />
    </>
  )
}

