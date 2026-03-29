"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, Target, Sparkles } from "lucide-react";

const services = [
  {
    tag: "Recruitment",
    number: "01",
    title: "Find the right Candidate/Fit",
    description: "Access top-tier talent with our extensive database and quick turnaround time.",
    icon: <Users size={100} strokeWidth={0.8} />,
  },
  {
    tag: "HR Outsourcing",
    number: "02",
    title: "Focus on what Matters",
    description: "Outsource HR functions and let us handle the rest transparently.",
    icon: <Target size={100} strokeWidth={0.8} />,
  },
  {
    tag: "Consulting",
    number: "03",
    title: "Drive Excellence",
    description: "Expert Consulting, Training and Verification to elevate your organization.",
    icon: <Briefcase size={100} strokeWidth={0.8} />,
  },
  {
    tag: "Services",
    number: "04",
    title: "Professional Cleaning Services",
    description: "Experts in Residential and Commercial Laundry and Disinfection Services etc.",
    icon: <Sparkles size={100} strokeWidth={0.8} />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

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
            We Focus On Helping You
          </h2>
          <div className="md:text-right">
            <p className="text-sm text-white/40 max-w-sm leading-relaxed">
              We are your trusted partner for growth and excellence.
            </p>
            <Link
              href="#services"
              className="btn-magnetic mt-4 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_24px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              See All Services
            </Link>
          </div>
        </motion.div>

        {/* 2x2 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative rounded-2xl bg-brand-800/50 border border-white/[0.06] p-5 sm:p-6 flex flex-col justify-between min-h-[250px] overflow-hidden hover:border-white/[0.12] hover:bg-brand-800/70 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.04] rounded-full blur-[40px] group-hover:bg-blue-500/[0.08] transition-colors duration-500 pointer-events-none" />

              {/* Tag */}
              <div className="flex items-start justify-between relative z-10">
                <span className="inline-block rounded-md bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
                  {service.tag}
                </span>
              </div>

              {/* Huge Icon */}
              <div className="absolute top-2 right-4 text-white/10 group-hover:text-blue-400 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 pointer-events-none drop-shadow-2xl">
                {service.icon}
              </div>

              {/* Bottom */}
              <div className="mt-auto relative z-10">
                <p className="text-sm font-medium text-white/20">{service.number}</p>
                <h3 className="mt-1 text-base font-semibold text-white leading-snug">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/40 leading-relaxed">
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
