"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="10" r="2.5" />
        <path d="M15 8h2M15 12h2" />
        <path d="M5 21c1-3 3-5 6-5s4 2 5 5" />
      </svg>
    ),
    title: "Quality-First, Curated Shortlists",
    description:
      "We focus on fit, not volume, so you interview better candidates faster.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
        <path d="M19.5 4.5l1 1M4.5 19.5l-1 1" />
      </svg>
    ),
    title: "Fast Turnaround, Always Updated",
    description:
      "Clear timelines, weekly progress updates, and a predictable hiring workflow.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20c0-4 3-7 7-7s7 3 7 7" />
        <path d="M8 3c-1 1-1.5 2-1 3M16 3c1 1 1.5 2 1 3" />
      </svg>
    ),
    title: "Human-Centered Onboarding",
    description:
      "We help new hires feel ready, welcomed, and productive from day one.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path d="M2 20c0-3 2-5 5-5M22 20c0-3-2-5-5-5" />
        <path d="M12 11v4M10 13h4" />
      </svg>
    ),
    title: "Flexible for Teams of Any Size",
    description:
      "We focus on fit, not volume, so you interview better candidates faster.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight max-w-md"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Hiring Should Feel Clear, Not Chaotic
          </h2>
          <p className="text-sm text-gray-500 max-w-sm leading-relaxed md:text-right">
            We combine structured process, market insight, and hands-on support
            so you hire confidently.
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-2xl border border-gray-200 p-6 flex flex-col"
            >
              {/* Icon */}
              <div className="h-11 w-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-800 mb-8">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
