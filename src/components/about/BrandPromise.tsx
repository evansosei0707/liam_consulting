"use client";

import { motion } from "framer-motion";

const promises = [
  {
    title: "The right people.",
    body: "We understand that having the right people in the right roles is essential to growing your business.",
  },
  {
    title: "Nationwide reach.",
    body: "We specialize in managing recruitment across the country — ensuring access to top talent wherever you are.",
  },
  {
    title: "Lasting alignment.",
    body: "We know how critical it is to align the right candidate with the right role for long-term success.",
  },
  {
    title: "Expert guidance.",
    body: "We offer expert advisory to help your business operate more efficiently and achieve better results.",
  },
];

export default function BrandPromise() {
  return (
    <section className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
              Our Brand Promise
            </span>
            <h2
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              Wherever you are in Ghana,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-brand-accent bg-clip-text text-transparent">
                we deliver the best HR services.
              </span>
            </h2>
            <p className="mt-5 text-sm text-white/45 leading-relaxed max-w-md">
              Four commitments we make to every employer and every candidate we
              work with &mdash; the quiet standards behind everything we do.
            </p>
          </motion.div>

          {/* Numbered grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {promises.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-6 -right-2 text-[110px] font-black leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none pointer-events-none">
                  0{i + 1}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold">
                      {i + 1}
                    </span>
                    <h3 className="text-[15px] font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-white/55 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
