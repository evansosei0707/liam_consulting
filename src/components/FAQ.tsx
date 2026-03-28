"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it typically take to fill a position?",
    answer:
      "On average, we fill positions within 2-4 weeks depending on the role's seniority and specialization. Our pre-vetted talent pool allows us to present qualified candidates faster than traditional recruitment methods.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across technology, healthcare, finance, manufacturing, and professional services. Our team includes recruiters with deep domain expertise in each of these sectors.",
  },
  {
    question: "Do you offer any guarantees on placements?",
    answer:
      "Yes, we offer a 90-day replacement guarantee on all permanent placements. If a hire doesn't work out within the first 90 days, we'll find a replacement at no additional cost.",
  },
  {
    question: "Can you help with both permanent and contract roles?",
    answer:
      "Absolutely. We provide full-time, part-time, contract, and temp-to-perm staffing solutions. Whatever your workforce needs, we can tailor a solution that fits.",
  },
  {
    question: "What makes TeamUp different from other recruitment agencies?",
    answer:
      "We take a partnership approach — not transactional. We invest time understanding your culture, values, and long-term goals, so every hire is a strategic fit, not just a skills match.",
  },
  {
    question: "How do you ensure cultural fit in your placements?",
    answer:
      "Beyond technical assessments, we conduct behavioral interviews, cultural alignment workshops with your team, and use psychometric tools to ensure candidates thrive in your specific environment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-brand-navy"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            FAQs
          </h2>
          <p className="mt-4 text-brand-muted">
            Everything you need to know about working with TeamUp.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="rounded-xl border border-brand-border bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-sm text-brand-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
