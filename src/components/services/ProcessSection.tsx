"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={20} />,
    step: "01",
    title: "Discovery Call",
    body: "We listen first. A short, no-pressure conversation to understand your goals, constraints, and success metrics.",
  },
  {
    icon: <Search size={20} />,
    step: "02",
    title: "Scope & Proposal",
    body: "We map the work, timeline, and investment — clearly, in writing. No hidden fees. No surprises.",
  },
  {
    icon: <Settings size={20} />,
    step: "03",
    title: "Execution",
    body: "We get to work. Dedicated team assigned. Weekly check-ins. Transparent communication throughout.",
  },
  {
    icon: <TrendingUp size={20} />,
    step: "04",
    title: "Review & Grow",
    body: "We measure outcomes together and adjust. Every engagement ends with you better equipped than before.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
            How We Work
          </span>
          <h2
            className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            A process built on clarity.
          </h2>
          <p className="mt-4 text-sm text-white/45 leading-relaxed">
            Four steps. No jargon. Every engagement follows the same disciplined
            path, tailored to your specific needs.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="relative flex lg:flex-col items-start gap-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 h-full">
                  {/* Step circle */}
                  <div className="relative shrink-0">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                      {s.icon}
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-950 border border-white/10 text-[10px] font-bold text-white/70">
                      {s.step}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-[13px] text-white/50 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
