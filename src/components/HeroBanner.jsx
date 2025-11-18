import React from 'react'

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Textile gradient base */}
      <div className="relative h-[280px] sm:h-[360px] bg-gradient-to-br from-[#4A0E0E] via-[#6E1B1B] to-[#2C0A0A]">
        {/* Zari shimmer overlay */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #FFD166 0px, #FFD166 1px, transparent 1px, transparent 6px)`
        }} />
        {/* Paisley motif pattern */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen" style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"320\" viewBox=\"0 0 320 320\">\n  <defs>\n    <radialGradient id=\"g\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n      <stop offset=\"0%\" stop-color=\"#FFE8A3\" stop-opacity=\"0.7\"/>\n      <stop offset=\"100%\" stop-color=\"#FFE8A3\" stop-opacity=\"0\"/>\n    </radialGradient>\n  </defs>\n  <g fill=\"url(#g)\" transform=\"translate(20,20)\">\n    <path d=\"M80 20c40 0 80 30 80 80s-40 100-100 100S0 150 0 100 40 20 80 20z\" opacity=\"0.25\"/>\n    <circle cx=\"220\" cy=\"60\" r=\"40\" opacity=\"0.2\"/>\n    <path d=\"M220 180c30 0 60 20 60 50s-30 60-60 60-50-20-50-50 20-60 50-60z\" opacity=\"0.18\"/>\n  </g>\n</svg>\n          `)}`
        }} />

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.35em] text-[12px] sm:text-xs text-amber-200/80 mb-3">Customer Care</p>
            <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-amber-50 drop-shadow-md">
              We’re here to assist with your perfect ethnic look
            </h1>
            <p className="mt-4 text-amber-100/80 text-sm sm:text-base">
              From bespoke tailoring to size guidance and swift exchanges — reach out and we’ll take care of it.
            </p>
          </div>
        </div>
      </div>
      {/* Soft ivory curve separator */}
      <div className="h-8 sm:h-12 bg-gradient-to-b from-amber-50 to-amber-100/70" />
    </section>
  )
}

export default HeroBanner
