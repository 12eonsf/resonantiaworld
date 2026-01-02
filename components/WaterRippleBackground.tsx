'use client'

export default function WaterRippleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 water-ripple-bg overflow-hidden">
      {/* Additional ripple layers */}
      <div className="ripple-layer-1"></div>
      <div className="ripple-layer-2"></div>
      <div className="ripple-layer-3"></div>
    </div>
  )
}

