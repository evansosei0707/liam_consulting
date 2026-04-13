"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building,
  Rocket,
  HeartHandshake,
  Landmark,
  Factory,
  UserSearch,
} from "lucide-react";

const audiences = [
  { icon: <Building size={18} />, label: "SMEs", desc: "Small & mid-sized businesses" },
  { icon: <Building size={18} />, label: "Corporations", desc: "Large enterprise teams" },
  { icon: <Rocket size={18} />, label: "Startups", desc: "Early & growth-stage" },
  { icon: <HeartHandshake size={18} />, label: "NGOs", desc: "Mission-driven organizations" },
  { icon: <Landmark size={18} />, label: "Public Sector", desc: "Government institutions" },
  { icon: <Factory size={18} />, label: "Manufacturing", desc: "Industrial & production firms" },
  { icon: <UserSearch size={18} />, label: "Job Seekers", desc: "Career opportunity builders" },
];

const industries = [
  { name: "Technology", pct: 15 },
  { name: "FMCG & Retail", pct: 15 },
  { name: "Manufacturing & Warehousing", pct: 10 },
  { name: "Banking, Finance & Insurance", pct: 8 },
  { name: "IT & Telecoms", pct: 7 },
  { name: "Hospitality & Hotel", pct: 5 },
  { name: "Real Estate", pct: 5 },
  { name: "Security", pct: 5 },
  { name: "Tourism & Travels", pct: 3.5 },
  { name: "Education", pct: 3.5 },
  { name: "Mining, Energy & Metals", pct: 3 },
  { name: "Logistics & Shipping", pct: 2 },
  { name: "Healthcare", pct: 2 },
  { name: "Construction", pct: 2 },
];

export default function WhoWeServe() {
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
            Who We Serve
          </span>
          <h2
            className="mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.5rem)" }}
          >
            Talent solutions for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent">
              every industry.
            </span>
          </h2>
          <p className="mt-4 text-sm text-white/50 leading-relaxed">
            From SMEs to large corporations, startups to NGOs, public institutions
            to manufacturing firms &mdash; our solutions are tailored to the
            specific HR and operational needs of each group.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Audience chips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/[0.08] rounded-full blur-[70px] pointer-events-none" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Who we work with
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              Seven audiences. One integrated approach.
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {audiences.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="group flex items-center gap-3 rounded-xl bg-white/[0.02] border border-white/[0.05] px-3 py-2.5 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent border border-brand-accent/15 shrink-0">
                    {a.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-white leading-tight">
                      {a.label}
                    </p>
                    <p className="text-[11px] text-white/40 truncate">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industries chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-brand-accent/[0.07] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Sector Coverage
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Industries we source for.
                </h3>
              </div>
              <p className="text-[11px] text-white/30 max-w-[150px] text-right hidden sm:block">
                % of placements by industry
              </p>
            </div>

            <div className="relative space-y-2.5">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[12px] text-white/60 w-[160px] shrink-0 truncate">
                    {ind.name}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(ind.pct / 15) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.04, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-white/50 w-10 text-right shrink-0">
                    {ind.pct}%
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
