"use client";

import { motion } from "framer-motion";
import { Users, Building2, Share2, FileText } from "lucide-react";

const stats = [
  {
    icon: <Users size={20} />,
    value: "1,000+",
    label: "Candidates",
    sub: "A deep pool of job seekers across industries and roles.",
  },
  {
    icon: <Building2 size={20} />,
    value: "50+",
    label: "Employers",
    sub: "Businesses that trust us to find their next great hire.",
  },
  {
    icon: <FileText size={20} />,
    value: "10,000+",
    label: "Applications yearly",
    sub: "Processed, screened, and routed through our platform.",
  },
  {
    icon: <Share2 size={20} />,
    value: "500+",
    label: "Community followers",
    sub: "A growing presence across LinkedIn, X, Facebook & more.",
  },
];

export default function ByTheNumbers() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-brand-900/60 backdrop-blur-sm border border-white/[0.06] p-6 sm:p-8 md:p-10 lg:p-14 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-blue-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-brand-accent/[0.06] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
                By the Numbers
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.5rem)" }}
              >
                A growing network.{" "}
                <span className="text-white/50 font-bold">A track record you can rely on.</span>
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed md:text-right">
              Scale that lets us meet your recruitment and HR needs &mdash; from a
              single critical hire to organization-wide transformation.
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/60 group-hover:text-brand-accent group-hover:border-brand-accent/20 transition-all">
                  {s.icon}
                </div>
                <p className="mt-6 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent leading-none">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{s.label}</p>
                <p className="mt-1.5 text-xs text-white/40 leading-relaxed">
                  {s.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
