"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
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

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-brand-950 overflow-hidden grain pt-32 pb-20">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-blue-500/[0.08] rounded-full blur-[130px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-violet-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <Sparkles size={12} className="text-brand-accent" />
            Our Services
          </span>
        </motion.div>

        <h1
          className="mt-8 text-white leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
        >
          <AnimatedHeading text="Solutions that help" className="block font-bold" />
          <AnimatedHeading
            text="your business thrive."
            className="block font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-7 text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed"
        >
          Five integrated services. One partner. From recruitment and HR
          outsourcing to training, advisory, and facility support &mdash; we
          handle the operational weight so you can focus on what&apos;s next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#services-list"
            className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            Explore Services
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
          >
            Talk to Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
