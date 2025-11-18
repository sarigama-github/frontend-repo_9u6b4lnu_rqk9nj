import React from 'react'
import HeroBanner from './components/HeroBanner'
import ContactForm from './components/ContactForm'
import ContactSidebar from './components/ContactSidebar'
import MapSection from './components/MapSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B0A0A] via-[#3A0E0E] to-[#1B0707]">
      {/* subtle mandala background */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n  <defs>\n    <pattern id=\"dots\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"1\" cy=\"1\" r=\"1\" fill=\"#FDE68A\" opacity=\"0.6\"/>\n    </pattern>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#dots)\"/>\n</svg>\n        `)}`
      }} />

      <HeroBanner />

      {/* Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-10 pb-16">
        {/* Card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <ContactForm />
            <MapSection />
          </div>
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>

        {/* trust badges / motifs */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-90">
          {['Sherwanis','Lehengas','Sarees','Kurtas','Indo‑Western'].map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-full text-xs sm:text-sm tracking-wide border border-amber-400/40 text-amber-200 bg-amber-900/20 backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </main>

      {/* footer */}
      <footer className="relative z-10 border-t border-amber-900/20 bg-[#210909]/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <p className="text-center text-amber-100/80 text-sm">
            Crafted with love for tradition • Royal Ethnic House
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
