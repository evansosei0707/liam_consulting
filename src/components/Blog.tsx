"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    title: "The Hiring Scorecard That Saves Hours",
    category: "Recruitment Strategy",
    image: "https://picsum.photos/seed/blog-score-v2/500/600",
  },
  {
    title: "Day-One Onboarding Checklist for Every Role",
    category: "Hiring Operations",
    image: "https://picsum.photos/seed/blog-onboard-v2/500/600",
  },
  {
    title: "Sourcing Methods That Work in Competitive Markets",
    category: "Talent Acquisition",
    image: "https://picsum.photos/seed/blog-source-v2/500/600",
  },
  {
    title: "Employer Branding That Attracts Better Applicants",
    category: "Employer Branding",
    image: "https://picsum.photos/seed/blog-brand-v2/500/600",
  },
];

export default function Blog() {
  return (
    <section id="resources" className="relative bg-brand-950 py-20 md:py-28">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12 mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-sm tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Hiring Insights that Actually Help
          </h2>
          <p className="text-sm text-white/40 max-w-xs leading-relaxed md:text-right">
            Practical guides on recruitment, onboarding, and building better
            teams.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[5/6] rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="mt-4">
                <span className="inline-block rounded-md bg-white/[0.06] border border-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/50 uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <h3 className="mt-2.5 text-[15px] font-semibold text-white/90 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
