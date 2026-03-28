"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    type: "image",
    image: "https://picsum.photos/seed/industry-team/600/500",
  },
  {
    type: "card-dark",
    title: "Technology and SaaS",
    description:
      "Product, engineering, data, design, and customer teams for scaling companies.",
    stats: ["Shortlist in 10 days", "Up to 3 roles handled"],
  },
  {
    type: "card-light",
    title: "Healthcare & Wellness",
    description:
      "Clinics, health brands, and service teams hiring reliable frontline talent.",
    stats: ["Faster hiring", "85% 90-day retention"],
  },
  {
    type: "card-light",
    title: "Retail & E-Commerce",
    description:
      "Operations, support, warehouse, and store teams for growing retail brands.",
    stats: ["High-volume hiring support", "Onboarding pack 48 hours"],
  },
  {
    type: "card-light",
    title: "Finance & Professional Services",
    description:
      "Analysts, admin, client services, and specialist roles with screening precision.",
    stats: ["Shortlist in 12 days", "Compliance docs 24 hours"],
  },
  {
    type: "card-light",
    title: "Hospitality & Service Businesses",
    description:
      "Customer-facing, operations, and management hiring for service-led companies.",
    stats: ["7-days hiring turnaround", "Interview slots 24 hours"],
  },
];

export default function BuiltForTeams() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — centered */}
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
            Built for Teams That are Scaling
          </h2>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            From fast-moving startups to established companies, we support
            hiring across key industries.
          </p>
        </motion.div>

        {/* 2×3 Industry Grid */}
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
                /* Image card */
                <div className="relative rounded-2xl overflow-hidden h-full min-h-[280px]">
                  <Image
                    src={item.image!}
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                /* Content card */
                <div
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full min-h-[280px] ${
                    item.type === "card-dark"
                      ? "bg-brand-navy text-white"
                      : "bg-white border border-gray-200 text-gray-900"
                  }`}
                >
                  {/* Top: title + description */}
                  <div>
                    <h3
                      className={`text-lg font-semibold leading-snug ${
                        item.type === "card-dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        item.type === "card-dark"
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: stats row */}
                  <div
                    className={`mt-6 flex items-center gap-4 pt-4 border-t ${
                      item.type === "card-dark"
                        ? "border-white/15"
                        : "border-gray-100"
                    }`}
                  >
                    {item.stats!.map((stat, si) => (
                      <span
                        key={si}
                        className={`text-xs font-medium ${
                          item.type === "card-dark"
                            ? "text-white/80"
                            : "text-gray-600"
                        } ${
                          si > 0
                            ? item.type === "card-dark"
                              ? "border-l border-white/20 pl-4"
                              : "border-l border-gray-200 pl-4"
                            : ""
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
