"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-brand-navy overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
            {/* ── Left column: heading + image ── */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <h2
                className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
              >
                Need Hiring Support This Month?
              </h2>

              {/* Photo — bottom of left column */}
              <div className="hidden lg:block mt-12 relative w-[200px] h-[200px] rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/cta-woman/400/400"
                  alt="HR professional ready to help"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>

            {/* ── Right column: form ── */}
            <div className="p-8 sm:p-10 lg:p-12 lg:pl-4">
              <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-lg">
                Tell us what roles you&apos;re hiring for, and we&apos;ll send a
                tailored quote and timeline within 24–48 hours.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    aria-label="Full Name"
                    className="w-full rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    aria-label="Work Email"
                    className="w-full rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                {/* Row 2: Company */}
                <input
                  type="text"
                  placeholder="Company Name"
                  aria-label="Company Name"
                  className="w-full rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />

                {/* Row 3: Hiring Need + Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <select
                      aria-label="Choose your Hiring Need"
                      defaultValue=""
                      className="w-full appearance-none rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="" disabled>
                        Choose your Hiring Need
                      </option>
                      <option value="recruitment">Full-Cycle Recruitment</option>
                      <option value="sourcing">Talent Sourcing</option>
                      <option value="onboarding">Onboarding Support</option>
                      <option value="hr-consulting">HR Consulting</option>
                      <option value="employer-branding">Employer Branding</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                    />
                  </div>
                  <div className="relative">
                    <select
                      aria-label="Choose the Industry"
                      defaultValue=""
                      className="w-full appearance-none rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="" disabled>
                        Choose the Industry
                      </option>
                      <option value="tech">Technology & SaaS</option>
                      <option value="healthcare">Healthcare & Wellness</option>
                      <option value="retail">Retail & E-Commerce</option>
                      <option value="finance">Finance & Professional Services</option>
                      <option value="hospitality">Hospitality & Services</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Row 4: Roles textarea */}
                <textarea
                  placeholder="Role(s) You're Hiring For"
                  aria-label="Roles you are hiring for"
                  rows={3}
                  className="w-full rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />

                {/* Row 5: Timeline */}
                <div className="relative">
                  <select
                    aria-label="Timeline"
                    defaultValue=""
                    className="w-full appearance-none rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="" disabled>
                      Timeline
                    </option>
                    <option value="asap">ASAP</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                  />
                </div>

                {/* Row 6: Notes textarea */}
                <textarea
                  placeholder="Notes (Optional)"
                  aria-label="Additional notes"
                  rows={3}
                  className="w-full rounded-lg bg-white/[0.08] border border-white/[0.12] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-white py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
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
