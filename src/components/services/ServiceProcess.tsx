"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/services";

export default function ServiceProcess({ service }: { service: Service }) {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
            How It Works
          </span>
          <h2
            className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            A clear path,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
              from day one to delivery.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 relative">
          {/* Vertical connector on mobile, horizontal on desktop */}
          <div className="hidden lg:block absolute top-[42px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="relative inline-flex h-[72px] w-[72px] items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/0 border border-brand-accent/20" />
                  <span className="relative text-xl font-bold bg-gradient-to-br from-brand-accent to-brand-accent-hover bg-clip-text text-transparent">
                    {p.step}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] text-white/50 leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
