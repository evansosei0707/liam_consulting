"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    number: "01",
    quote:
      "Liam Consulting understood our culture from day one. They didn\u2019t just send resumes \u2014 they sent people who fit. Our retention has never been better.",
    name: "Juliana Lim",
    role: "People Ops Lead",
    company: "CloudArc",
    avatar: "https://picsum.photos/seed/av-juliana/100/100",
  },
  {
    number: "02",
    quote:
      "Liam Consulting made our hiring process feel organized and calm. The shortlist quality was strong, timelines were clear, and updates were consistent. The onboarding checklist helped new hires start smoothly and become productive faster.",
    name: "Sam de Carlo",
    role: "Founder",
    company: "RetailNest",
    avatar: "https://picsum.photos/seed/av-sam/100/100",
  },
  {
    number: "03",
    quote:
      "We needed to hire fast without compromising on quality. Liam Consulting delivered exactly that \u2014 structured, transparent, and genuinely supportive throughout.",
    name: "Regina Winston",
    role: "Operations Manager",
    company: "Mediqore",
    avatar: "https://picsum.photos/seed/av-regina/100/100",
  },
];

export default function TrustSection() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setActive((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Subtle glow behind center card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Teams Trust Liam Consulting to Deliver
          </h2>
          <p className="mt-4 text-sm text-white/40 leading-relaxed">
            Honest feedback from founders and HR leads who needed hiring to move
            faster.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-3">
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.number}
                  onClick={() => setActive(i)}
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 min-h-[320px] cursor-pointer ${
                    isActive
                      ? "bg-brand-900/60 border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.06)]"
                      : "bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04]"
                  }`}
                >
                  <p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-blue-400" : "text-white/20"
                    }`}
                  >
                    {t.number}
                  </p>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="my-6 text-base sm:text-lg font-medium text-white/90 leading-relaxed"
                      >
                        &ldquo; {t.quote} &rdquo;
                      </motion.blockquote>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-blue-500/20 shrink-0"
                        >
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </motion.div>
                      )}
                      <div>
                        <p className={`text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-white/40"}`}>
                          {t.name}
                        </p>
                        <p className={`text-xs transition-colors ${isActive ? "text-white/50" : "text-white/25"}`}>
                          {t.role} &mdash;{" "}
                          <span className="font-semibold">{t.company}</span>
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); prev(); }}
                          aria-label="Previous testimonial"
                          className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); next(); }}
                          aria-label="Next testimonial"
                          className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
