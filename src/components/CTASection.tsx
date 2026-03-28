"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const inputClass =
  "w-full rounded-xl bg-white/[0.05] border border-white/[0.08] px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/20 transition-all duration-200";

const selectClass =
  "w-full appearance-none rounded-xl bg-white/[0.05] border border-white/[0.08] px-4 py-3.5 text-sm text-white/30 focus:outline-none focus:border-blue-500/30 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/20 transition-all duration-200";

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-brand-950 py-20 md:py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-brand-900/60 backdrop-blur-sm border border-white/[0.06] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
            {/* Left column */}
            <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/[0.04] to-transparent pointer-events-none rounded-bl-3xl" />

              <h2
                className="relative text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
              >
                Need Hiring Support This Month?
              </h2>

              <div className="hidden lg:block mt-12 relative w-[200px] h-[220px] rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl shadow-black/20">
                <Image
                  src="https://picsum.photos/seed/cta-woman-v2/400/440"
                  alt="HR professional ready to help"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
              </div>
            </div>

            {/* Right column — form */}
            <div className="p-8 sm:p-10 lg:p-12 lg:pl-4">
              <p className="text-sm text-white/40 leading-relaxed mb-7 max-w-lg">
                Tell us what roles you&apos;re hiring for, and we&apos;ll send a
                tailored quote and timeline within 24–48 hours.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Full Name" aria-label="Full Name" className={inputClass} />
                  <input type="email" placeholder="Work Email" aria-label="Work Email" className={inputClass} />
                </div>

                <input type="text" placeholder="Company Name" aria-label="Company Name" className={inputClass} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <select aria-label="Choose your Hiring Need" defaultValue="" className={selectClass}>
                      <option value="" disabled>Choose your Hiring Need</option>
                      <option value="recruitment">Full-Cycle Recruitment</option>
                      <option value="sourcing">Talent Sourcing</option>
                      <option value="onboarding">Onboarding Support</option>
                      <option value="hr-consulting">HR Consulting</option>
                      <option value="employer-branding">Employer Branding</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select aria-label="Choose the Industry" defaultValue="" className={selectClass}>
                      <option value="" disabled>Choose the Industry</option>
                      <option value="tech">Technology & SaaS</option>
                      <option value="healthcare">Healthcare & Wellness</option>
                      <option value="retail">Retail & E-Commerce</option>
                      <option value="finance">Finance & Professional Services</option>
                      <option value="hospitality">Hospitality & Services</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                  </div>
                </div>

                <textarea
                  placeholder="Role(s) You're Hiring For"
                  aria-label="Roles you are hiring for"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                <div className="relative">
                  <select aria-label="Timeline" defaultValue="" className={selectClass}>
                    <option value="" disabled>Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                </div>

                <textarea
                  placeholder="Notes (Optional)"
                  aria-label="Additional notes"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="btn-magnetic w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
                >
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
