'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NovelModal from './NovelModal'

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex items-center gap-1 sm:gap-2">
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

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
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

