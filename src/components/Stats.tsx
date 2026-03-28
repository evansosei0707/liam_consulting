"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clientCards = [
  {
    image: "https://picsum.photos/seed/client-retail/200/200",
    value: "7-day",
    label: "hiring turnaround",
    company: "RetailNest",
    logo: "shopping-bag",
  },
  {
    image: "https://picsum.photos/seed/client-bright/200/200",
    value: "50+",
    label: "candidates screened per role",
    company: "BrightFoods",
    logo: "leaf",
  },
  {
    image: "https://picsum.photos/seed/client-star/200/200",
    value: "85%",
    label: "Higher 90-day retention rate",
    company: "StarOrange",
    logo: "triangle",
  },
  {
    image: "https://picsum.photos/seed/client-cloud/200/200",
    value: "48-hour",
    label: "onboarding setup",
    company: "CloudArc",
    logo: "cloud",
  },
  {
    image: "https://picsum.photos/seed/client-nova/200/200",
    value: "24-hour",
    label: "interview scheduling",
    company: "NovaTech",
    logo: "circle",
  },
  {
    image: "https://picsum.photos/seed/client-medi/200/200",
    value: "35%",
    label: "Faster end-to-end time-to-hire",
    company: "Mediqore",
    logo: "m",
  },
];

function CompanyLogo({ type, name }: { type: string; name: string }) {
  const iconClass = "w-4 h-4 opacity-70";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
      {type === "shopping-bag" && (
        <svg className={iconClass} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="12" height="10" rx="1" />
          <path d="M5 5V3a3 3 0 0 1 6 0v2" />
        </svg>
      )}
      {type === "leaf" && (
        <svg className={iconClass} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 14C4 14 4 8 10 2c0 6-1 8-6 12z" />
          <path d="M4 14c3-3 6-4 10-4" />
        </svg>
      )}
      {type === "triangle" && (
        <svg className={iconClass} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2L14 14H2L8 2z" />
        </svg>
      )}
      {type === "cloud" && (
        <svg className={iconClass} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12a3 3 0 0 1-.5-5.96A4.5 4.5 0 0 1 12.5 7 3 3 0 0 1 12 12H4z" />
        </svg>
      )}
      {type === "circle" && (
        <svg className={iconClass} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="6" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
        </svg>
      )}
      {type === "m" && (
        <svg className={iconClass} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2 12V4l4 5 4-5v8" />
        </svg>
      )}
      {name}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-brand-navy p-6 sm:p-8 md:p-10 lg:p-12"
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 md:mb-10">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
            >
              Our Past Clients
            </h2>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed md:text-right">
              Teams we&apos;ve supported across hiring, onboarding, and building
              stronger workforces.
            </p>
          </div>

          {/* Client cards grid — 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {clientCards.map((card, i) => (
              <motion.div
                key={card.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 rounded-xl bg-white/[0.06] border border-white/[0.08] p-3 sm:p-4"
              >
                {/* Thumbnail */}
                <div className="relative h-20 w-20 sm:h-[88px] sm:w-[88px] shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.company}
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between min-h-[80px] sm:min-h-[88px] flex-1">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {card.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-snug mt-0.5">
                      {card.label}
                    </p>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <CompanyLogo type={card.logo} name={card.company} />
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
