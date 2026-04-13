"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import type { Service } from "@/lib/services";

export default function ServiceDetailCTA({ service }: { service: Service }) {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand-900/80 via-brand-900/40 to-brand-950/80 backdrop-blur-sm p-10 sm:p-14 md:p-16 overflow-hidden text-center"
        >
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.1] rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/[0.08] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.1] px-3 py-1 text-[11px] font-medium text-white/70 uppercase tracking-wider">
              Ready to move forward?
            </span>

            <h2
              className="mt-6 text-white font-bold leading-[1.05] tracking-tight max-w-3xl mx-auto"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              Let&apos;s get started with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent">
                {service.shortTitle}.
              </span>
            </h2>

            <p className="mt-5 text-base text-white/55 max-w-xl mx-auto leading-relaxed">
              Book a free consultation and we&apos;ll walk you through exactly
              how we&apos;d approach your needs &mdash; no obligation, no
              pressure.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Request {service.shortTitle}
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all"
              >
                Back to All Services
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-white/50">
              <span className="inline-flex items-center gap-2">
                <Phone size={13} className="text-brand-accent" />
                +233 (0) 20 901 3744
              </span>
              <span className="hidden sm:inline h-4 w-px bg-white/10" />
              <span className="inline-flex items-center gap-2">
                <Mail size={13} className="text-brand-accent" />
                info@liamconsultingltd.com
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
