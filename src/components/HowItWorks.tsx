"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    tag: "Recruitment",
    number: "01",
    title: "End-to-End Recruitment",
    description:
      "Full-cycle hiring support from sourcing to offer negotiation.",
    image: "https://picsum.photos/seed/svc-recruit/300/300",
  },
  {
    tag: "Talent Acquisition",
    number: "02",
    title: "Talent Sourcing & Shortlisting",
    description:
      "Curated candidate lists based on your role needs and culture fit.",
    image: "https://picsum.photos/seed/svc-talent/300/300",
  },
  {
    tag: "Hiring Operations",
    number: "03",
    title: "Interview & Assessment Support",
    description:
      "Screening calls, interview scheduling, and skill-based evaluation setup.",
    image: "https://picsum.photos/seed/svc-interview/300/300",
  },
  {
    tag: "Onboarding",
    number: "04",
    title: "Onboarding & New Hire Setup",
    description:
      "Structured onboarding flows, documentation, and first-week readiness.",
    image: "https://picsum.photos/seed/svc-onboard/300/300",
  },
  {
    tag: "HR Operations",
    number: "05",
    title: "HR Documentation & Compliance",
    description:
      "Contracts, policies, HR forms, and basic compliance guidance support.",
    image: "https://picsum.photos/seed/svc-hrdoc/300/300",
  },
  {
    tag: "Branding",
    number: "06",
    title: "Employer Branding Support",
    description:
      "Job post optimization, careers page content, and candidate experience upgrades.",
    image: "https://picsum.photos/seed/svc-brand/300/300",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — title left, description + button right */}
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
            Everything You Need to Build a Stronger Team
          </h2>
          <div className="md:text-right">
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Flexible services designed for fast-growing companies, busy HR
              teams, and high-volume hiring.
            </p>
            <Link
              href="#services"
              className="mt-4 inline-block rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              See All Services
            </Link>
          </div>
        </motion.div>

        {/* 2×3 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative rounded-2xl bg-brand-navy p-5 sm:p-6 flex flex-col justify-between min-h-[240px] overflow-hidden"
            >
              {/* Tag badge */}
              <div className="flex items-start justify-between">
                <span className="inline-block rounded-md bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {service.tag}
                </span>
              </div>

              {/* Tilted photo — positioned top-right */}
              <div className="absolute -top-2 right-4 w-[100px] h-[110px] sm:w-[110px] sm:h-[120px] rotate-6 rounded-xl overflow-hidden shadow-xl border-2 border-white/10 group-hover:rotate-3 transition-transform duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="110px"
                />
              </div>

              {/* Bottom content */}
              <div className="mt-auto">
                <p className="text-sm font-medium text-white/50">
                  {service.number}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
