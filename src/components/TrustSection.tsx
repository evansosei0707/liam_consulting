"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    number: "01",
    quote:
      "TeamUp understood our culture from day one. They didn\u2019t just send resumes \u2014 they sent people who fit. Our retention has never been better.",
    name: "Juliana Lim",
    role: "People Ops Lead",
    company: "CloudArc",
    avatar: "https://picsum.photos/seed/avatar-juliana/100/100",
  },
  {
    number: "02",
    quote:
      "TeamUp made our hiring process feel organized and calm. The shortlist quality was strong, timelines were clear, and updates were consistent. The onboarding checklist helped new hires start smoothly and become productive faster.",
    name: "Sam de Carlo",
    role: "Founder",
    company: "RetailNest",
    avatar: "https://picsum.photos/seed/avatar-sam/100/100",
  },
  {
    number: "03",
    quote:
      "We needed to hire fast without compromising on quality. TeamUp delivered exactly that \u2014 structured, transparent, and genuinely supportive throughout.",
    name: "Regina Winston",
    role: "Operations Manager",
    company: "Mediqore",
    avatar: "https://picsum.photos/seed/avatar-regina/100/100",
  },
];

export default function TrustSection() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setActive((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Teams Trust TeamUp to Deliver
          </h2>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Honest feedback from founders and HR leads who needed hiring to move
            faster.
          </p>
        </motion.div>

        {/* Testimonial cards carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.number}
                  className={`relative rounded-2xl border-2 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 min-h-[320px] ${
                    isActive
                      ? "border-blue-200 bg-white shadow-sm"
                      : "border-gray-100 bg-gray-50/50"
                  }`}
                >
                  {/* Number */}
                  <p
                    className={`text-sm font-medium ${
                      isActive ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {t.number}
                  </p>

                  {/* Quote — only fully visible on active card */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="my-6 text-base sm:text-lg font-medium text-gray-900 leading-relaxed"
                      >
                        &ldquo; {t.quote} &rdquo;
                      </motion.blockquote>
                    )}
                  </AnimatePresence>

                  {/* Bottom: avatar + info + nav */}
                  <div className="mt-auto flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                      )}
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            isActive ? "text-gray-900" : "text-gray-500"
                          }`}
                        >
                          {t.name}
                        </p>
                        <p
                          className={`text-xs ${
                            isActive ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {t.role} &mdash;{" "}
                          <span className="font-semibold">{t.company}</span>
                        </p>
                      </div>
                    </div>

                    {/* Navigation arrows — only on active card */}
                    {isActive && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={prev}
                          aria-label="Previous testimonial"
                          className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={next}
                          aria-label="Next testimonial"
                          className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
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
