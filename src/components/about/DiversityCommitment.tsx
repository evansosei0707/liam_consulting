"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wallet, Users2 } from "lucide-react";

const qualifications = [
  { label: "Bachelor", pct: 40 },
  { label: "High School", pct: 15 },
  { label: "Masters", pct: 10 },
  { label: "Diploma", pct: 10 },
  { label: "HND", pct: 8 },
  { label: "Others", pct: 8 },
  { label: "PhD", pct: 5 },
  { label: "Vocational", pct: 4 },
];

const ages = [
  { label: "20–30", pct: 54 },
  { label: "31–40", pct: 36 },
  { label: "16–19", pct: 8 },
  { label: "41–50", pct: 6 },
  { label: "51–60", pct: 2 },
];

export default function DiversityCommitment() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
            A Diverse, Qualified Talent Pool
          </span>
          <h2
            className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.5rem)" }}
          >
            Building an{" "}
            <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
              inclusive
            </span>{" "}
            job market.
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed">
            We&apos;re committed to diversity and inclusion &mdash; connecting
            employers with a gender-balanced, multi-generational, and multi-skilled
            talent pool that reflects the Ghana of today.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Gender card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/[0.08] rounded-full blur-[70px] pointer-events-none" />

            <div className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              <Users2 size={14} className="text-brand-accent" />
              Applicants by Gender
            </div>

            <div className="relative mt-8 flex items-center justify-center">
              {/* Donut */}
              <svg viewBox="0 0 120 120" className="w-44 h-44 -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="14"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#genderGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 50}
                  initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 50 * 0.35 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
                />
                <defs>
                  <linearGradient id="genderGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <p className="text-3xl font-bold text-white leading-none">65%</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">Male</p>
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-2 gap-2 text-center">
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] py-2.5">
                <p className="text-xs text-white/40">Male</p>
                <p className="text-base font-bold text-blue-300">65%</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] py-2.5">
                <p className="text-xs text-white/40">Female</p>
                <p className="text-base font-bold text-brand-accent">35%</p>
              </div>
            </div>

            <p className="relative mt-5 text-[12px] text-white/45 leading-relaxed">
              We actively promote workplace equality and equal opportunity hiring.
            </p>
          </motion.div>

          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-accent/[0.07] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              <GraduationCap size={14} className="text-brand-accent" />
              Qualifications
            </div>
            <h3 className="relative mt-3 text-lg font-bold text-white leading-snug">
              From vocational to PhD &mdash; skilled at every level.
            </h3>

            <div className="relative mt-6 space-y-2.5">
              {qualifications.map((q, i) => (
                <div key={q.label} className="flex items-center gap-3">
                  <span className="text-[12px] text-white/55 w-[90px] shrink-0">{q.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(q.pct / 40) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-white/50 w-8 text-right shrink-0">
                    {q.pct}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Age + Salary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-5"
          >
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7 relative overflow-hidden">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-violet-500/[0.08] rounded-full blur-[70px] pointer-events-none" />

              <div className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                <Users2 size={14} className="text-brand-accent" />
                Age Profile
              </div>
              <p className="relative mt-2 text-[13px] text-white/50 leading-relaxed">
                Next-gen talent, ready to build.
              </p>
              <div className="relative mt-4 space-y-2">
                {ages.map((a, i) => (
                  <div key={a.label} className="flex items-center gap-3">
                    <span className="text-[11px] text-white/55 w-[50px] shrink-0">{a.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(a.pct / 54) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-accent to-violet-400"
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-white/50 w-8 text-right shrink-0">
                      {a.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/[0.08] rounded-full blur-[70px] pointer-events-none" />

              <div className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                <Wallet size={14} className="text-brand-accent" />
                Flexible Salary Expectations
              </div>
              <p className="relative mt-3 text-2xl font-bold text-white leading-tight">
                From <span className="text-brand-accent">GH₵2k</span> to{" "}
                <span className="text-brand-accent">GH₵15k+</span>
              </p>
              <p className="relative mt-2 text-[12px] text-white/45 leading-relaxed">
                Candidates at every budget &mdash; majority open to salaries up to
                GH₵4,000. Attract the right talent, at the right value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
