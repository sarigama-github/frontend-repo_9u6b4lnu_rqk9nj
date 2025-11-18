import React from 'react'

const MapSection = () => {
  return (
    <section className="rounded-2xl overflow-hidden border border-amber-900/10 shadow-[0_10px_30px_rgba(80,20,20,0.08)]">
      <div className="h-56 sm:h-72 w-full">
        <iframe
          title="Studio Location"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.734651847694!2d72.8258!3d19.0748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90b5c8e6a2d%3A0x0!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1680000000000"
        />
      </div>
      <div className="bg-[#FFF9EF] p-4 sm:p-5 border-t border-amber-900/10">
        <p className="text-sm text-slate-700">
          Bandra West, Mumbai • India
        </p>
      </div>
    </section>
  )
}

export default MapSection
