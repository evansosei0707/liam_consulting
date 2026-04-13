"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";

export default function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <section className="relative bg-brand-950 overflow-hidden grain pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.08] rounded-full blur-[130px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-brand-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>All Services</span>
          </Link>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/[0.08] text-brand-accent ring-1 ring-brand-accent/20">
                <ServiceIcon name={service.iconName} size={24} />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1.5 text-[11px] font-medium text-white/60 uppercase tracking-wider">
                Service
              </span>
            </div>

            <h1
              className="mt-7 text-white font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              {service.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl font-medium bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent max-w-xl">
              {service.tagline}
            </p>

            <p className="mt-6 text-base text-white/55 leading-relaxed max-w-xl">
              {service.summary}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
              >
                Request This Service
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#overview"
                className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] aspect-[4/5] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/20 to-transparent`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-overlay`} />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-semibold">
                    Liam Consulting
                  </p>
                  <p className="text-sm font-bold text-white mt-1 leading-tight">
                    {service.shortTitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
