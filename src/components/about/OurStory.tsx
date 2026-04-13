"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Recruitment Support — the right people, in the right roles, fast.",
  "HR Outsourcing — reduced admin burden, full labor-law compliance.",
  "Training & Development — a competent, future-ready workforce.",
  "Business Advisory — strategy that helps you scale.",
  "Cleaning & Laundry — reliable hygiene for homes and businesses.",
];

export default function OurStory() {
  return (
    <section id="story" className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] aspect-[4/5]">
              <Image
                src="/img/corporate_workers.jpg"
                alt="Liam Consulting team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-6 glass rounded-2xl p-5 max-w-[230px] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
                2022
              </p>
              <p className="mt-1 text-xs text-white/50 leading-relaxed">
                The year we set out to rethink HR for Ghanaian businesses.
              </p>
            </motion.div>

            <div className="absolute -top-6 -left-4 sm:left-6 h-24 w-24 rounded-2xl bg-brand-accent/[0.08] border border-brand-accent/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-wider text-brand-accent font-semibold">Liam</p>
                <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">Consulting</p>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
              Our Story
            </span>

            <h2
              className="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)" }}
            >
              A trusted partner for growth &mdash;{" "}
              <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
                and excellence.
              </span>
            </h2>

            <p className="mt-6 text-[15px] text-white/55 leading-relaxed">
              We were established to deliver comprehensive HR and operational
              solutions tailored to the evolving needs of businesses across
              industries. Whether you&apos;re hiring top talent, outsourcing HR
              functions, developing staff skills, or seeking strategic guidance
              &mdash; our integrated approach equips your business with the human
              capital and operational tools needed to thrive in today&apos;s
              competitive landscape.
            </p>

            <ul className="mt-8 space-y-3">
              {pillars.map((p, i) => (
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
                  <span className="leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
