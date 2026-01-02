'use client'

import { useEffect, useState } from 'react'

interface ResonanceSloganProps {
  text?: string
  revealDuration?: number // milliseconds
  holdDuration?: number
  dissolveDuration?: number
  frameInterval?: number // milliseconds between updates
  className?: string
}

/**
 * ResonanceSlogan
 * 
 * Text that cycles through: garbled → resolved → readable → dissolving → garbled
 * Creates a sense of meaning emerging and then decohering.
 * 
 * Algorithm:
 * - Progress-based reveal from left to right
 * - Each character resolves proportionally to progress
 * - Spaces remain spaces
 * - Uses custom glyph set for garbled state
 */
export default function ResonanceSlogan({
  text = 'Where narratives end, Resonance begins.',
  revealDuration = 1800,
  holdDuration = 2000,
  dissolveDuration = 1200,
  frameInterval = 30,
  className = '',
}: ResonanceSloganProps) {
  const [displayText, setDisplayText] = useState<string>('')
  const [cycleProgress, setCycleProgress] = useState(0)

  // Custom glyph set for garbled state
  const glyphs = '░▒▓█<>/\\|@#$%&*+-=[]{}()?~`^'

  // Get a random glyph
  const getRandomGlyph = (): string => {
    return glyphs[Math.floor(Math.random() * glyphs.length)]
  }

  // Generate garbled version of text
  const generateGarbled = (targetText: string, progress: number): string => {
    return targetText
      .split('')
      .map((char, index) => {
        // Spaces always remain spaces
        if (char === ' ') return ' '
        
        // Calculate if this character should be resolved based on progress
        const charProgress = index / targetText.length
        
        // During reveal: resolve left to right
        // During dissolve: reverse the process
        const shouldResolve = charProgress <= progress
        
        return shouldResolve ? char : getRandomGlyph()
      })
      .join('')
  }

  useEffect(() => {
    const totalCycleDuration = revealDuration + holdDuration + dissolveDuration
    let animationFrame: number
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      
      const elapsed = timestamp - startTime
      const cyclePosition = elapsed % totalCycleDuration
      
      let progress = 0
      let currentText = ''

      if (cyclePosition < revealDuration) {
        // Reveal phase: 0 to 1
        progress = cyclePosition / revealDuration
        currentText = generateGarbled(text, progress)
      } else if (cyclePosition < revealDuration + holdDuration) {
        // Hold phase: fully resolved
        progress = 1
        currentText = text
      } else {
        // Dissolve phase: 1 to 0
        const dissolveElapsed = cyclePosition - (revealDuration + holdDuration)
        progress = 1 - (dissolveElapsed / dissolveDuration)
        currentText = generateGarbled(text, progress)
      }

      setDisplayText(currentText)
      setCycleProgress(progress)

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [text, revealDuration, holdDuration, dissolveDuration])

  return (
    <div className={className}>
      {displayText}
    </div>
  )
}

