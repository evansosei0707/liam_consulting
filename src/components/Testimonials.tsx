"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header — title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12 mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight max-w-md"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Real Hiring Wins, Real Business Impact
          </h2>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed md:text-right">
            See how TeamUp helped teams reduce hiring time and improve onboarding
            outcomes.
          </p>
        </motion.div>

        {/* ── Case Study 1: CloudArc ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr_240px] gap-0 rounded-2xl overflow-hidden border border-gray-200"
        >
          {/* Left image */}
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[240px]">
            <Image
              src="https://picsum.photos/seed/case-cloud/500/500"
              alt="Customer support team at CloudArc"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>

          {/* Center content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Scaling Customer Support Team
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-md">
                Built a support team from scratch with role mapping, fast
                sourcing, and onboarding playbooks.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900">CloudArc</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["2035", "Technology", "SaaS"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right stat block — dark navy */}
          <div className="bg-brand-navy p-6 sm:p-8 flex flex-col justify-between text-white">
            <div>
              <p className="text-4xl sm:text-5xl font-bold">12</p>
              <p className="mt-1 text-sm text-white/70">Hires in 6 weeks</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/15">
              <Plus size={16} className="text-white/60 mb-2" />
              <p className="text-sm text-white/70 leading-relaxed">
                Faster ramp-up through structured onboarding
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Case Study 2: RetailNest ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_240px_280px] gap-0 rounded-2xl overflow-hidden border border-gray-200"
        >
          {/* Left content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                High-Volume Operations Hiring
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-md">
                Streamlined hiring pipeline and documentation for multiple
                operational roles across locations.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900">RetailNest</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["2035", "Retail", "E-Commerce"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center stat block — blue accent */}
          <div className="bg-[#3B6FC1] p-6 sm:p-8 flex flex-col justify-between text-white">
            <div>
              <p className="text-4xl sm:text-5xl font-bold">35%</p>
              <p className="mt-1 text-sm text-white/80">faster time-to-hire</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <Plus size={16} className="text-white/60 mb-2" />
              <p className="text-sm text-white/80 leading-relaxed">
                Improved candidate show-up rate with better scheduling flow
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[240px]">
            <Image
              src="https://picsum.photos/seed/case-retail/500/500"
              alt="Warehouse operations team at RetailNest"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
