"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const logos = [
  "MTN",
  "PwC",
  "Nestle",
  "KPMG",
  "Ecobank",
  "AngloGold Ashanti",
  "MainOne",
  "MTN",
  "PwC",
  "Nestle",
  "KPMG",
  "Ecobank",
  "AngloGold Ashanti",
  "MainOne",
];

const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      variants={wordReveal}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ perspective: "600px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordChild}
          className="inline-block mr-[0.3em]"
          style={{ transformOrigin: "bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-brand-950 overflow-hidden grain">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.07] rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ── Main hero content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Strategic HR & Operations Partner
          </span>
        </motion.div>

        {/* Heading */}
        <h1 className="mt-8 text-white leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          <AnimatedHeading text="Transforming HR" className="block font-bold" />
          <AnimatedHeading
            text="One Business at a Time."
            className="block font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent"
          />
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed"
        >
          Your Strategic HR Partner for Business Growth and Success. Our integrated approach to HR and operations ensures your business thrives.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#contact"
            className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#about"
            className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* ── Testimonial row ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* Left image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[300px]">
            <Image
              src="/handshake.jpeg"
              alt="Team meeting in a modern office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
          </div>

          {/* Center quote card */}
          <div className="bg-brand-900/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between border-x border-white/[0.04]">
            <p className="text-[15px] sm:text-base font-medium text-white/90 leading-relaxed">
              &ldquo; Liam Consulting efficiently managed hiring across locations.
              Scheduling, screening, and documentation ran smoothly, and new
              hires arrived better prepared. &rdquo;
            </p>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-sm font-semibold text-white">
                William Smith
              </p>
              <p className="text-xs text-white/50">
                CEO &mdash;{" "}
                <span className="font-semibold text-white/70">Liam Consulting</span>
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[300px]">
            <Image
              src="/worker.png"
              alt="Professional holding a tablet in an office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* ── Trust line ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="relative z-10 text-center px-4 pb-8"
      >
        <p className="text-sm text-white/40">
          Your trusted partner for{" "}
          <span className="font-semibold text-white/70">growth</span> and
          excellence.
        </p>
      </motion.div>

      {/* ── Logo strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="relative z-10 border-t border-white/[0.04] bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl py-5 overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
            {logos.map((name, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-white/20 select-none shrink-0 tracking-wider uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
