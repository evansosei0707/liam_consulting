"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clientCards = [
  {
    image: "https://picsum.photos/seed/cl-retail/200/200",
    value: "7-day",
    label: "hiring turnaround",
    company: "RetailNest",
  },
  {
    image: "https://picsum.photos/seed/cl-bright/200/200",
    value: "50+",
    label: "candidates screened per role",
    company: "BrightFoods",
  },
  {
    image: "https://picsum.photos/seed/cl-star/200/200",
    value: "85%",
    label: "Higher 90-day retention rate",
    company: "StarOrange",
  },
  {
    image: "https://picsum.photos/seed/cl-cloud/200/200",
    value: "48-hour",
    label: "onboarding setup",
    company: "CloudArc",
  },
  {
    image: "https://picsum.photos/seed/cl-nova/200/200",
    value: "24-hour",
    label: "interview scheduling",
    company: "NovaTech",
  },
  {
    image: "https://picsum.photos/seed/cl-medi/200/200",
    value: "35%",
    label: "Faster end-to-end time-to-hire",
    company: "Mediqore",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-brand-900/60 backdrop-blur-sm border border-white/[0.06] p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden relative"
        >
          {/* Inner glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/[0.06] rounded-full blur-[80px] pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
            >
              Our Past Clients
            </h2>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed md:text-right">
              Teams we&apos;ve supported across hiring, onboarding, and building
              stronger workforces.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {clientCards.map((card, i) => (
              <motion.div
                key={card.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group flex items-start gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3.5 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-20 w-20 sm:h-[88px] sm:w-[88px] shrink-0 rounded-xl overflow-hidden ring-1 ring-white/[0.08]">
                  <Image
                    src={card.image}
                    alt={card.company}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="88px"
                  />
                </div>

                <div className="flex flex-col justify-between min-h-[80px] sm:min-h-[88px] flex-1">
                  <div>
                    <p className="text-xl font-bold text-white leading-tight">
                      {card.value}
                    </p>
                    <p className="text-xs text-white/40 leading-snug mt-0.5">
                      {card.label}
                    </p>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <span className="text-[11px] font-medium text-white/30 tracking-wide uppercase">
                      {card.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
