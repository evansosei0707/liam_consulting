"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  { type: "image" as const, image: "https://picsum.photos/seed/ind-team-v2/600/500" },
  {
    type: "card-dark" as const,
    title: "Technology and SaaS",
    description: "Product, engineering, data, design, and customer teams for scaling companies.",
    stats: ["Shortlist in 10 days", "Up to 3 roles handled"],
  },
  {
    type: "card-light" as const,
    title: "Healthcare & Wellness",
    description: "Clinics, health brands, and service teams hiring reliable frontline talent.",
    stats: ["Faster hiring", "85% 90-day retention"],
  },
  {
    type: "card-light" as const,
    title: "Retail & E-Commerce",
    description: "Operations, support, warehouse, and store teams for growing retail brands.",
    stats: ["High-volume hiring support", "Onboarding pack 48 hours"],
  },
  {
    type: "card-light" as const,
    title: "Finance & Professional Services",
    description: "Analysts, admin, client services, and specialist roles with screening precision.",
    stats: ["Shortlist in 12 days", "Compliance docs 24 hours"],
  },
  {
    type: "card-light" as const,
    title: "Hospitality & Service Businesses",
    description: "Customer-facing, operations, and management hiring for service-led companies.",
    stats: ["7-days hiring turnaround", "Interview slots 24 hours"],
  },
];

export default function BuiltForTeams() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Built for Teams That are Scaling
          </h2>
          <p className="mt-4 text-sm text-white/40 leading-relaxed">
            From fast-moving startups to established companies, we support
            hiring across key industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              {item.type === "image" ? (
                <div className="relative rounded-2xl overflow-hidden h-full min-h-[280px] ring-1 ring-white/[0.06]">
                  <Image
                    src={item.image!}
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
                </div>
              ) : (
                <div
                  className={`group glow-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full min-h-[280px] transition-all duration-300 ${
                    item.type === "card-dark"
                      ? "bg-gradient-to-br from-brand-800 to-brand-900 border border-white/[0.06] hover:border-white/[0.12]"
                      : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1]"
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/40 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                    {item.stats!.map((stat, si) => (
                      <span
                        key={si}
                        className={`text-xs font-medium text-white/50 ${
                          si > 0 ? "border-l border-white/[0.08] pl-4" : ""
                        }`}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
