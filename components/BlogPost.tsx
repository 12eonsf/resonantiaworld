'use client'

import Image from 'next/image'

interface BlogPostProps {
  coverImage: string
  title: string
  subtitle: string
  author: string
  date: string
  content: string
}

// Function to render text with "Resonance" (book title, capitalized) in italics
const renderWithItalicResonance = (text: string) => {
  // Only match "Resonance" with capital R (book title), not lowercase "resonance"
  const parts = text.split(/(Resonance)/g)
  return parts.map((part, index) => {
    if (part === 'Resonance') {
      return <em key={index} className="italic">{part}</em>
    }
    return <span key={index}>{part}</span>
  })
}

export default function BlogPost({
  coverImage,
  title,
  subtitle,
  author,
  date,
  content,
}: BlogPostProps) {
  return (
    <article className="blog-post">
      {/* Cover Image */}
      <div className="mb-12">
        <div className="w-full h-64 md:h-96 relative overflow-hidden border border-white/10">
          {coverImage && coverImage !== '/placeholder-cover.jpg' ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02))] bg-[length:20px_20px]"></div>
              <span className="text-white/20 font-mono text-xs md:text-sm relative z-10">[Cover Image Placeholder]</span>
            </div>
          )}
        </div>
      </div>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/70 font-light mb-8 italic leading-relaxed">
          {subtitle}
        </p>
        <div className="flex items-center gap-4 text-xs md:text-sm text-white/50 font-mono mb-6">
          <span className="text-white/40">By</span>
          <span>{author}</span>
          <span className="text-white/20">|</span>
          <span>{date}</span>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"></div>
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {content.split('\n\n').map((paragraph, index) => {
          if (!paragraph.trim()) return null
          return (
            <p
              key={index}
              className="mb-6 text-white/90 leading-relaxed font-light text-base md:text-lg blog-post-text"
            >
              {renderWithItalicResonance(paragraph.trim())}
            </p>
          )
        })}
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-white/10">
        <div className="flex items-center gap-4 text-xs text-white/30 font-mono">
          <span className="text-white/20">—</span>
          <span>End of post</span>
          <span className="text-white/20">—</span>
        </div>
      </footer>
    </article>
  )
}

