"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand-900/80 via-brand-900/40 to-brand-950/80 backdrop-blur-sm p-8 sm:p-12 md:p-16 overflow-hidden text-center"
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

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.1] px-3 py-1 text-[11px] font-medium text-white/70 uppercase tracking-wider">
              Let&apos;s build together
            </span>

            <h2
              className="mt-6 text-white font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Empower your team.{" "}
              <span className="block mt-1 bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent">
                Embrace diversity. Hire with Liam.
              </span>
            </h2>

            <p className="mt-6 text-base text-white/55 max-w-xl mx-auto leading-relaxed">
              Your trusted partner for growth and excellence. Let&apos;s talk
              about what your team needs next.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/#services"
                className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all"
              >
                See Our Services
              </Link>
            </div>

            <div className="mt-12 pt-10 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center">
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-brand-accent">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
                    Visit
                  </p>
                  <p className="text-sm text-white/80 mt-0.5">Adenta, Accra — Ghana</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-brand-accent">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
                    Call
                  </p>
                  <p className="text-sm text-white/80 mt-0.5">
                    +233 (0) 20 901 3744
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-brand-accent">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
                    Email
                  </p>
                  <p className="text-sm text-white/80 mt-0.5 break-all">
                    info@liamconsultingltd.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
