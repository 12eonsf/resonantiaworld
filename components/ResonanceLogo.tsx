'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface ResonanceLogoProps {
  size?: number
  className?: string
}

/**
 * ResonanceLogo
 * 
 * Three overlapping equilateral triangles rotating at different speeds.
 * Creates a sense of structural drift, not decorative spinning.
 * 
 * Geometry:
 * - Equilateral triangle: height = side * sqrt(3) / 2
 * - All triangles share the same center (SVG origin)
 * - Stroke only, no fill
 */
export default function ResonanceLogo({ size = 120, className = '' }: ResonanceLogoProps) {
  // Triangle sizes (side lengths)
  const triangleSizes = useMemo(() => [size * 0.8, size * 0.6, size * 0.4], [size])
  
  // Calculate triangle points for equilateral triangle
  // Center at origin (0,0), pointing up
  // For equilateral triangle: height = side * sqrt(3) / 2
  // Centroid is at 1/3 of height from base, so:
  // - Top vertex: (0, -2h/3)
  // - Bottom left: (-s/2, h/3)
  // - Bottom right: (s/2, h/3)
  const getTrianglePoints = (sideLength: number): string => {
    const height = (sideLength * Math.sqrt(3)) / 2
    const halfSide = sideLength / 2
    
    // Top vertex (pointing up)
    const topX = 0
    const topY = -(height * 2) / 3
    
    // Bottom left vertex
    const bottomLeftX = -halfSide
    const bottomLeftY = height / 3
    
    // Bottom right vertex
    const bottomRightX = halfSide
    const bottomRightY = height / 3
    
    return `${topX},${topY} ${bottomLeftX},${bottomLeftY} ${bottomRightX},${bottomRightY}`
  }

  // Rotation durations (slower = more structural drift feeling)
  const durations = [12, 18, 24] // seconds per full rotation
  
  // Initial rotation offsets (degrees)
  const initialRotations = [0, 60, 120]

  // Rich color spectrum gradients - blue, green, cyan, purple, red, yellow, orange
  const gradients = [
    { 
      id: 'gradient-1', 
      colors: ['#88b8d8', '#88c8d8', '#88d8b8', '#d8d888', '#d8c888', '#d8b888'], // Blue → Cyan → Green → Yellow → Light Orange → Orange
      angle: 45
    },
    { 
      id: 'gradient-2', 
      colors: ['#b8a8d8', '#a8a8d8', '#88c8d8', '#d88888', '#d8a888', '#b8a8d8'], // Purple → Light Purple → Cyan → Red → Orange → Purple
      angle: 135
    },
    { 
      id: 'gradient-3', 
      colors: ['#88d8b8', '#88c8d8', '#88b8d8', '#a8b8d8', '#d8d888', '#d8a888'], // Green → Cyan → Blue → Light Blue → Yellow → Orange
      angle: 225
    },
  ]

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`${-size/2} ${-size/2} ${size} ${size}`}
      className={className}
      style={{ overflow: 'visible' }}
      animate={{
        x: [0, 1, -1, 0.5, -0.5, 0],
        y: [0, -0.5, 0.5, -1, 1, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <defs>
        {/* Define rich color spectrum gradients for each triangle */}
        {gradients.map((gradient, idx) => (
          <linearGradient 
            key={gradient.id} 
            id={gradient.id} 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={gradient.colors[0]} stopOpacity="0.6" />
            <stop offset="20%" stopColor={gradient.colors[1]} stopOpacity="0.55" />
            <stop offset="40%" stopColor={gradient.colors[2]} stopOpacity="0.5" />
            <stop offset="60%" stopColor={gradient.colors[3]} stopOpacity="0.55" />
            <stop offset="80%" stopColor={gradient.colors[4]} stopOpacity="0.6" />
            <stop offset="100%" stopColor={gradient.colors[5]} stopOpacity="0.6" />
          </linearGradient>
        ))}
        
        {/* Subtle glow filter - minimal and restrained */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Very subtle background glow */}
        <filter id="glow-subtle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
          </feMerge>
        </filter>
      </defs>

      {/* Three triangles with different sizes, rotation speeds, and cyberpunk gradients */}
      {triangleSizes.map((sideLength, index) => {
        const points = getTrianglePoints(sideLength)
        const gradientId = gradients[index].id
        
        return (
          <g key={index}>
            {/* Very subtle background glow layer */}
            <motion.polygon
              points={points}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              opacity="0.15"
              filter="url(#glow-subtle)"
              initial={{ rotate: initialRotations[index] }}
              animate={{ rotate: initialRotations[index] + 360 }}
              transition={{
                duration: durations[index],
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ transformOrigin: 'center center' }}
            />
            {/* Main triangle with subtle gradient */}
            <motion.polygon
              points={points}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1.2"
              filter="url(#glow)"
              initial={{ rotate: initialRotations[index] }}
              animate={{ rotate: initialRotations[index] + 360 }}
              transition={{
                duration: durations[index],
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ transformOrigin: 'center center' }}
            />
          </g>
        )
      })}
    </motion.svg>
  )
}

