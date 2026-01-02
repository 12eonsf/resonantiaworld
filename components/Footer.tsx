'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a 
              href="https://resonantiaworld.substack.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all font-mono text-xs border border-white/20 px-3 py-1.5 hover:border-white/40 hover:bg-white/5 group"
              aria-label="Substack"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-white/40 group-hover:text-white/60">[</span>
                <span>Substack</span>
                <span className="text-white/40 group-hover:text-white/60">]</span>
                <span className="text-white/40 group-hover:text-white/60 ml-1">→</span>
              </span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-white/40 font-light">
              © Resonantia.World 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

