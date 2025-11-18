import React, { useState } from 'react'
import { Upload, ChevronDown } from 'lucide-react'

const fieldBase = 'block w-full rounded-xl border border-amber-900/20 bg-amber-50/70 focus:bg-white/90 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 text-slate-800 placeholder:opacity-60 transition shadow-sm'

const ContactForm = () => {
  const [fileName, setFileName] = useState('')

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_10px_30px_rgba(80,20,20,0.15)] border border-amber-900/10 p-6 sm:p-8">
      <h2 className="text-2xl font-serif text-amber-900">Send us a message</h2>
      <p className="text-slate-600 mt-1 text-sm">We typically respond within 24 hours. For urgent queries, use WhatsApp.</p>

      <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="text-sm text-amber-900/90">Full Name</label>
          <input type="text" className={`${fieldBase} mt-1 px-4 py-3`} placeholder="e.g., Aisha Kapoor" />
        </div>
        <div>
          <label className="text-sm text-amber-900/90">Email</label>
          <input type="email" className={`${fieldBase} mt-1 px-4 py-3`} placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm text-amber-900/90">Phone Number</label>
          <input type="tel" className={`${fieldBase} mt-1 px-4 py-3`} placeholder="+91 98XX-XXXXXX" />
        </div>
        <div>
          <label className="text-sm text-amber-900/90">Order Number (optional)</label>
          <input type="text" className={`${fieldBase} mt-1 px-4 py-3`} placeholder="#ORD-12345" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-amber-900/90">Inquiry Type</label>
          <div className="relative mt-1">
            <select className={`${fieldBase} appearance-none mt-0 px-4 py-3 pr-10`} defaultValue="Product Inquiry">
              <option>Product Inquiry</option>
              <option>Size Guide Help</option>
              <option>Custom Order</option>
              <option>Bulk Order</option>
              <option>Return/Exchange</option>
              <option>Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-800/70" size={18} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-amber-900/90">Message</label>
          <textarea rows={5} className={`${fieldBase} mt-1 px-4 py-3 resize-y`} placeholder="Tell us more about your query, sizes, timelines, or customization preferences..." />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm text-amber-900/90">Upload Image (optional)</label>
          <div className="mt-1">
            <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-amber-900/20 bg-amber-50/70 hover:bg-amber-50 transition cursor-pointer">
              <Upload className="text-amber-900/80" size={18} />
              <span className="text-sm text-slate-700">
                {fileName || 'Attach a reference image or design inspiration'}
              </span>
              <input type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 font-medium shadow-[0_10px_20px_rgba(120,50,10,0.25)] hover:from-amber-700 hover:to-amber-800 hover:shadow-[0_14px_30px_rgba(120,50,10,0.35)] transition-all">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
