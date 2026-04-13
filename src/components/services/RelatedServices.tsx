"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";

export default function RelatedServices({ services }: { services: Service[] }) {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
              Explore More
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
            >
              Related services.
            </h2>
          </div>
          <Link
            href="/services"
            className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all w-fit"
          >
            View All Services
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group glow-border block h-full rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-11 w-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:text-brand-accent group-hover:border-brand-accent/20 transition-all duration-300">
                    <ServiceIcon name={s.iconName} size={20} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/30 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300"
                  />
                </div>

                <h3 className="mt-6 text-[15px] font-semibold text-white leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">
                  {s.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
