"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand-900/80 via-brand-900/40 to-brand-950/80 backdrop-blur-sm p-10 sm:p-14 md:p-20 overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.1] rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.1] px-3 py-1 text-[11px] font-medium text-white/70 uppercase tracking-wider">
                Ready when you are
              </span>
              <h2
                className="mt-5 text-white font-bold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
              >
                Not sure which service fits?{" "}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent">
                  Let&apos;s figure it out together.
                </span>
              </h2>
              <p className="mt-5 text-base text-white/55 max-w-xl leading-relaxed">
                Book a free 30-minute consultation. We&apos;ll listen, ask the
                right questions, and tell you honestly what we can &mdash; and
                can&apos;t &mdash; help with.
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/contact"
                className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Book Consultation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
