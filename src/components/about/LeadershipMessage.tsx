"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function LeadershipMessage() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />
      <div className="absolute top-10 right-10 w-[380px] h-[380px] bg-violet-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[320px] h-[320px] bg-brand-accent/[0.05] rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/[0.06] bg-brand-900/50 backdrop-blur-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Portrait */}
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-[560px]">
              <Image
                src="/img/William_Annor_profile.jpeg"
                alt="William Annor — CEO, Liam Consulting Limited"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-950 via-brand-950/20 to-transparent" />

              {/* Name tag */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto">
                <div className="glass rounded-2xl px-5 py-4 inline-block">
                  <p className="text-base font-bold text-white leading-tight">
                    William Annor
                  </p>
                  <p className="text-[11px] text-brand-accent uppercase tracking-wider font-semibold mt-0.5">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative">
              <div className="absolute top-8 right-8 text-brand-accent/20">
                <Quote size={80} strokeWidth={1} />
              </div>

              <span className="relative inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider w-fit">
                A message from our founder
              </span>

              <h2
                className="relative mt-5 text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-[1.2] tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)" }}
              >
                &ldquo;We built Liam to be the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-brand-accent bg-clip-text text-transparent">
                  partner we wish every business had
                </span>
                {" "}when hiring and growing a team.&rdquo;
              </h2>

              <p className="relative mt-6 text-[15px] text-white/55 leading-relaxed">
                When we started Liam Consulting in 2022, we saw companies across
                Ghana struggling to match the right talent to the right roles
                &mdash; and talented professionals struggling to find where they
                belonged. Our work is to close that gap, efficiently and with
                integrity. Every placement, every outsourced function, every
                training session is a step toward stronger teams and stronger
                businesses.
              </p>

              <div className="relative mt-7 flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-brand-accent/30">
                  <Image
                    src="/img/William_Annor_profile.jpeg"
                    alt=""
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">William Annor</p>
                  <p className="text-xs text-white/45">
                    CEO &mdash; Liam Consulting Limited
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
