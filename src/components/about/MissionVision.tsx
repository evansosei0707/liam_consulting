"use client";

import { motion } from "framer-motion";
import { Flag, Eye } from "lucide-react";

const cards = [
  {
    icon: <Flag size={22} strokeWidth={2.2} />,
    label: "Mission",
    title: "Dependable HR, delivered with care.",
    body: "To deliver dependable HR solutions that streamline recruitment and staff management, while bridging job seekers with meaningful career opportunities.",
    accent: "from-blue-500/20 to-blue-500/[0.02]",
    ring: "ring-blue-400/20",
    iconColor: "text-blue-300",
  },
  {
    icon: <Eye size={22} strokeWidth={2.2} />,
    label: "Vision",
    title: "The trusted partner for employers in Ghana — and beyond.",
    body: "To redefine recruitment and HR management through innovative, forward-thinking solutions that empower both businesses and the people who power them.",
    accent: "from-brand-accent/20 to-brand-accent/[0.02]",
    ring: "ring-brand-accent/20",
    iconColor: "text-brand-accent",
  },
];

export default function MissionVision() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
            Values &amp; Commitment
          </span>
          <h2
            className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            What drives us, every day.
          </h2>
          <p className="mt-4 text-sm text-white/45 leading-relaxed">
            Two commitments guide every engagement, every hire, and every client
            relationship we build.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] transition-all duration-500`}
            >
              <div
                className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${c.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/[0.08] ring-1 ${c.ring} ${c.iconColor}`}
                >
                  {c.icon}
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  {c.label}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white leading-snug">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm text-white/55 leading-relaxed">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
