"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    title: "The Hiring Scorecard That Saves Hours",
    category: "Recruitment Strategy",
    image: "https://picsum.photos/seed/blog-score/500/600",
  },
  {
    title: "Day-One Onboarding Checklist for Every Role",
    category: "Hiring Operations",
    image: "https://picsum.photos/seed/blog-onboard/500/600",
  },
  {
    title: "Sourcing Methods That Work in Competitive Markets",
    category: "Talent Acquisition",
    image: "https://picsum.photos/seed/blog-source/500/600",
  },
  {
    title: "Employer Branding That Attracts Better Applicants",
    category: "Employer Branding",
    image: "https://picsum.photos/seed/blog-brand/500/600",
  },
];

export default function Blog() {
  return (
    <section id="resources" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12 mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight max-w-sm"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Hiring Insights that Actually Help
          </h2>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed md:text-right">
            Practical guides on recruitment, onboarding, and building better
            teams.
          </p>
        </motion.div>

        {/* 4 Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group cursor-pointer"
            >
              {/* Tall image */}
              <div className="relative aspect-[5/6] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Category badge */}
              <div className="mt-4">
                <span className="inline-block rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-2.5 text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
