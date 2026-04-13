"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

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

export default function ContactHero() {
  return (
    <section className="relative bg-brand-950 overflow-hidden grain pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/4 w-[420px] h-[420px] bg-blue-500/[0.08] rounded-full blur-[130px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[340px] h-[340px] bg-brand-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <MessageCircle size={12} className="text-blue-400" />
            Get in Touch
          </span>
        </motion.div>

        <h1
          className="mt-8 text-white leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
        >
          <AnimatedHeading text="Let's start a" className="block font-bold" />
          <AnimatedHeading
            text="conversation."
            className="block font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-7 text-base sm:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you&apos;re hiring, outsourcing HR, or exploring advisory
          support &mdash; our team usually replies within one business day.
        </motion.p>
      </div>
    </section>
  );
}
