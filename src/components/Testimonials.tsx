"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="about" className="relative bg-brand-950 py-20 md:py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12 mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-md tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Real Hiring Wins, Real Business Impact
          </h2>
          <p className="text-sm text-white/40 max-w-sm leading-relaxed md:text-right">
            See how Liam Consulting helped teams reduce hiring time and improve onboarding
            outcomes.
          </p>
        </motion.div>

        {/* Case Study 1: CloudArc */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr_240px] gap-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-brand-900/40"
        >
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[240px]">
            <Image
              src="/img/scale.png"
              alt="Customer support team at CloudArc"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-900/30 hidden md:block" />
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between border-x border-white/[0.04]">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Scaling Customer Support Team
              </h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed max-w-md">
                Built a support team from scratch with role mapping, fast
                sourcing, and onboarding playbooks.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">CloudArc</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["2035", "Technology", "SaaS"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/40 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-800 to-brand-900 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-white">12</p>
              <p className="mt-1 text-sm text-white/50">Hires in 6 weeks</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <Plus size={16} className="text-blue-400/60 mb-2" />
              <p className="text-sm text-white/50 leading-relaxed">
                Faster ramp-up through structured onboarding
              </p>
            </div>
          </div>
        </motion.div>

        {/* Case Study 2: RetailNest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_240px_280px] gap-0 rounded-2xl overflow-hidden border border-white/[0.06] bg-brand-900/40"
        >
          <div className="p-6 sm:p-8 flex flex-col justify-between border-r border-white/[0.04]">
            <div>
              <h3 className="text-xl font-semibold text-white">
                High-Volume Operations Hiring
              </h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed max-w-md">
                Streamlined hiring pipeline and documentation for multiple
                operational roles across locations.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">RetailNest</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["2035", "Retail", "E-Commerce"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/40 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-white">35%</p>
              <p className="mt-1 text-sm text-white/70">faster time-to-hire</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <Plus size={16} className="text-white/50 mb-2" />
              <p className="text-sm text-white/70 leading-relaxed">
                Improved candidate show-up rate with better scheduling flow
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-auto min-h-[240px]">
            <Image
              src="/img/mass-hire.png"
              alt="Warehouse operations team at RetailNest"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 280px"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-900/20 hidden md:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
