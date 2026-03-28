"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const logos = [
  "M7",
  "Logoipsum",
  "Delta",
  "Curve",
  "Logoipsum",
  "Arc",
  "Slash",
  "Logoipsum",
];

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* ── Top hero: centered text ── */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
        {/* Badge */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <span className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-700">
            Build High-Fit Teams
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mt-8 font-bold leading-[1.1] text-gray-900"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
        >
          Find the Right People Faster.
          <br />
          Keep Them Longer.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-5 text-base text-gray-500 max-w-lg mx-auto leading-relaxed"
        >
          TeamUp helps you hire for fit and support onboarding so teams stay
          engaged after day one.
        </motion.p>

        {/* CTA */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
          <Link
            href="#contact"
            className="mt-8 inline-block rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Get Hiring Support
          </Link>
        </motion.div>
      </div>

      {/* ── Testimonial row: two images + quote card ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 rounded-2xl overflow-hidden h-auto md:h-[340px]">
          {/* Left image */}
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="https://picsum.photos/seed/hero-left/600/450"
              alt="Team meeting in a modern office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Center quote card */}
          <div className="bg-gray-100 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-[15px] sm:text-base font-medium text-gray-900 leading-relaxed">
                &ldquo; TeamUp efficiently managed hiring across locations.
                Scheduling, screening, and documentation ran smoothly, and new
                hires arrived better prepared. &rdquo;
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900">
                Regina Winston
              </p>
              <p className="text-sm text-gray-500">
                Operations Manager &mdash;{" "}
                <span className="font-semibold text-gray-900">Mediqore</span>
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="https://picsum.photos/seed/hero-right/600/450"
              alt="Professional holding a tablet in an office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </motion.div>

      {/* ── Trust line ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 md:mt-16 text-center px-4"
      >
        <p className="text-sm text-gray-500 leading-relaxed">
          Trusted by companies improving{" "}
          <span className="font-semibold text-gray-900">retention</span>
          <br className="sm:hidden" /> and ramp time.
        </p>
      </motion.div>

      {/* ── Logo strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 bg-gray-100 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl py-5">
          <div className="flex items-center gap-12 md:gap-16 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text-base font-bold text-gray-400 select-none shrink-0 tracking-wide"
              >
                {name === "Logoipsum" ? (
                  <span className="flex items-center gap-1.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-50">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                      <circle cx="10" cy="10" r="3" fill="currentColor" />
                    </svg>
                    Logoipsum
                  </span>
                ) : name === "M7" ? (
                  <span className="text-xl font-black tracking-tighter">M7</span>
                ) : name === "Delta" ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-50">
                    <path d="M12 3L22 21H2L12 3Z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ) : name === "Curve" ? (
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="opacity-50">
                    <path d="M2 18C8 2 20 2 26 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ) : name === "Arc" ? (
                  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" className="opacity-50">
                    <path d="M2 18C2 8 8 2 13 2C18 2 24 8 24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : name === "Slash" ? (
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="opacity-50">
                    <path d="M15 2L5 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <span>{name}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
