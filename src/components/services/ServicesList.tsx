"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";

export default function ServicesList() {
  return (
    <section id="services-list" className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
              What We Do
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight max-w-xl"
              style={{ fontSize: "clamp(1.875rem, 3.8vw, 2.5rem)" }}
            >
              Five services.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
                One integrated partner.
              </span>
            </h2>
          </div>
          <p className="text-sm text-white/40 max-w-sm leading-relaxed md:text-right">
            Pick one, combine several, or let us handle the full stack &mdash;
            our services are designed to work together.
          </p>
        </motion.div>

        <div className="space-y-5">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="group"
            >
              <Link
                href={`/services/${service.slug}`}
                className="relative block rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] overflow-hidden transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.gradient} transition-opacity duration-700 pointer-events-none`}
                />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative lg:col-span-5 aspect-[16/10] lg:aspect-auto lg:min-h-[340px] [direction:ltr]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/40 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-950/70 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                        <span className="text-brand-accent">0{i + 1}</span>
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between [direction:ltr]">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/[0.08] text-white/70 group-hover:text-brand-accent group-hover:border-brand-accent/30 transition-all duration-500"
                        >
                          <ServiceIcon name={service.iconName} size={24} />
                        </div>

                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10 group-hover:rotate-[-45deg] transition-all duration-500">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl sm:text-[28px] font-bold text-white leading-tight tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-accent font-medium">
                        {service.tagline}
                      </p>
                      <p className="mt-4 text-[14px] text-white/55 leading-relaxed max-w-xl">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.offerings.slice(0, 4).map((o) => (
                        <span
                          key={o.title}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/55"
                        >
                          <Check size={11} className="text-brand-accent" />
                          {o.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
