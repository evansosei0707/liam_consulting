"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/services";

export default function ServiceOfferings({ service }: { service: Service }) {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-violet-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
            What&apos;s Included
          </span>
          <h2
            className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Everything you get with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
              {service.shortTitle}
            </span>
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed">
            A comprehensive scope of work, delivered end-to-end by a dedicated
            team.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group glow-border relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-6 -right-2 text-[110px] font-black leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none">
                0{i + 1}
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-[15px] font-semibold text-white leading-snug">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                  {o.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
