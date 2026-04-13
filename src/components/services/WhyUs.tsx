"use client";

import { motion } from "framer-motion";
import { Shield, Zap, HeartHandshake, Globe2 } from "lucide-react";

const reasons = [
  {
    icon: <Zap size={20} />,
    title: "Speed without shortcuts",
    body: "We move fast — but every shortlist, hire, and policy is built on disciplined process and real due diligence.",
  },
  {
    icon: <Shield size={20} />,
    title: "Fully compliant, always",
    body: "Everything we do is aligned with Ghanaian labor law and international best practice. Audit-ready by default.",
  },
  {
    icon: <Globe2 size={20} />,
    title: "Nationwide coverage",
    body: "Wherever you are in Ghana — and beyond — we meet you where your business operates.",
  },
  {
    icon: <HeartHandshake size={20} />,
    title: "A true partner",
    body: "We win when you win. Every engagement is designed around outcomes, not hours billed.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
              Why Liam
            </span>
            <h2
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              The difference is in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent">
                how we work.
              </span>
            </h2>
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-md">
              Anyone can promise results. We&apos;ve built a practice around the
              operational habits that actually deliver them &mdash; and we&apos;ve
              been doing it since 2022.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Metric value="1,000+" label="Candidates" />
              <Metric value="50+" label="Employers" />
              <Metric value="10k+" label="Applications / yr" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group glow-border rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="h-11 w-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:text-brand-accent group-hover:border-brand-accent/20 transition-all duration-300">
                  {r.icon}
                </div>
                <h3 className="mt-6 text-[15px] font-semibold text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">
                  {r.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center">
      <p className="text-lg sm:text-xl font-bold text-white leading-none">
        {value}
      </p>
      <p className="mt-1 text-[10px] text-white/40 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
