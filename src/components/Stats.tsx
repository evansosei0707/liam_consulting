"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/lib/clients";

export default function Stats() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3.5 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-xl overflow-hidden ring-1 ring-white/[0.08] bg-white">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-1"
                    sizes="64px"
                  />
                </div>

                <span className="text-sm font-semibold text-white/70 group-hover:text-white leading-snug transition-colors">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
