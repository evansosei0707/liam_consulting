"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative bg-brand-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
              Find Us
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
            >
              Visit our Accra office.
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/LIAM+CONSULTING+LIMITED/@5.7189893,-0.1379419,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all w-fit"
          >
            <Navigation size={14} />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-2 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          {/* Map frame */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[16/8] bg-brand-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.8283580959874!2d-0.13794187760176882!3d5.718989256774307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83001b6b7afd%3A0xd3c6317b3fc228b8!2sLIAM%20CONSULTING%20LIMITED!5e0!3m2!1sen!2sgh!4v1776099994482!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Liam Consulting Limited — office location"
              className="absolute inset-0 w-full h-full"
            />

            {/* Floating address chip */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm pointer-events-none">
              <div className="glass rounded-2xl p-4 pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-accent/15 border border-brand-accent/25 text-brand-accent shrink-0">
                    <MapPin size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white leading-tight">
                      Liam Consulting Limited
                    </p>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      Adenta, Accra &mdash; Ghana
                    </p>
                    <p className="text-[11px] text-white/40 mt-1">
                      Mon – Fri · 8:00 – 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
