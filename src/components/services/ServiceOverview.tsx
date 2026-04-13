"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/services";

export default function ServiceOverview({ service }: { service: Service }) {
  return (
    <section id="overview" className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
              Overview
            </span>
            <h2
              className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
            >
              Built around outcomes,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
                not activity.
              </span>
            </h2>
            <p className="mt-6 text-[15px] text-white/55 leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Outcomes card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 md:p-8 overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-accent/[0.08] rounded-full blur-[90px] pointer-events-none" />

            <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              What you walk away with
            </p>
            <h3 className="relative mt-2 text-xl font-bold text-white">
              Outcomes we deliver
            </h3>

            <ul className="relative mt-6 space-y-3">
              {service.outcomes.map((o, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-accent shrink-0 mt-0.5"
                    strokeWidth={2.2}
                  />
                  <span className="leading-relaxed">{o}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
