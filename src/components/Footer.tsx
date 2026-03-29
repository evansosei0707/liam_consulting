"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Services: ["Recruitment Support", "HR Outsourcing", "Training & Development", "Laundry & Cleaning"],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Guides", "Webinars", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="relative bg-brand-950 border-t border-white/[0.04]">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-34 w-34 object-contain" />
            </Link>

            <p className="mt-4 text-sm text-white/30 leading-relaxed max-w-xs">
              Your Strategic HR Partner for Business Growth and Success.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/30 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Liam Consulting Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-xs text-white/20 hover:text-white/60 transition-colors"
                aria-label={`Follow us on ${social}`}
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
