import React from 'react'
import { Phone, Mail, Clock8, MessageCircle } from 'lucide-react'

const ContactSidebar = () => {
  return (
    <aside className="bg-[#FFF9EF] rounded-2xl border border-amber-900/10 p-6 sm:p-7 shadow-[0_10px_30px_rgba(80,20,20,0.08)]">
      <h3 className="text-xl font-serif text-amber-900 mb-4">We're available</h3>

      <div className="space-y-4">
        <a href="https://wa.me/919999999999" target="_blank" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:shadow-md transition">
            <MessageCircle size={18} />
          </div>
          <div>
            <p className="text-sm text-slate-600">WhatsApp</p>
            <p className="text-amber-900 font-medium">+91 99999 99999</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-sm text-slate-600">Email</p>
            <p className="text-amber-900 font-medium">care@royaletnichouse.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-sm text-slate-600">Phone</p>
            <p className="text-amber-900 font-medium">+91 22 4000 0000</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
            <Clock8 size={18} />
          </div>
          <div>
            <p className="text-sm text-slate-600">Working Hours</p>
            <p className="text-amber-900 font-medium">Mon–Sat, 10:00 AM – 7:00 PM IST</p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-900/10">
        <p className="text-sm text-slate-700">
          Visit our flagship studio for bespoke sherwanis, lehengas, sarees, kurtas and Indo‑Western couture.
        </p>
      </div>
    </aside>
  )
}

export default ContactSidebar
