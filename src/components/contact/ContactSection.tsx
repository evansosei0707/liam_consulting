"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const contactItems = [
  {
    icon: <MapPin size={18} />,
    label: "Visit our office",
    primary: "Adenta, Accra",
    sub: "Ghana",
  },
  {
    icon: <Phone size={18} />,
    label: "Call us",
    primary: "+233 (0) 20 901 3744",
    sub: "+233 (0) 30 397 3418",
  },
  {
    icon: <Mail size={18} />,
    label: "Email us",
    primary: "info@liamconsultingltd.com",
    sub: "We reply within 1 business day",
  },
  {
    icon: <Clock size={18} />,
    label: "Working hours",
    primary: "Mon – Fri · 8:00 – 17:00",
    sub: "Sat · 9:00 – 13:00 (by appointment)",
  },
];

const socials = [
  { icon: <Facebook size={15} />, label: "Facebook", href: "#" },
  { icon: <Instagram size={15} />, label: "Instagram", href: "#" },
  { icon: <Linkedin size={15} />, label: "LinkedIn", href: "#" },
  { icon: <Twitter size={15} />, label: "X / Twitter", href: "#" },
];

const subjects = [
  "Recruitment Support",
  "HR Outsourcing",
  "Training & Development",
  "Business Advisory",
  "Cleaning & Laundry",
  "General enquiry",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section id="contact" className="relative bg-brand-950 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl border border-white/[0.06] bg-brand-900/50 backdrop-blur-sm p-6 md:p-8 lg:p-10 relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/[0.08] rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-52 h-52 bg-brand-accent/[0.06] rounded-full blur-[90px] pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
                Contact Details
              </span>
              <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                Reach out, any way you like.
              </h2>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">
                Prefer the phone? Like email? Want to drop by? Here&apos;s how to
                find us.
              </p>

              <div className="mt-8 space-y-3">
                {contactItems.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="group flex items-start gap-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-brand-accent shrink-0 group-hover:scale-105 transition-transform">
                      {c.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
                        {c.label}
                      </p>
                      <p className="text-sm text-white font-semibold mt-1 break-words">
                        {c.primary}
                      </p>
                      <p className="text-xs text-white/45 mt-0.5">{c.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
                  Follow us
                </p>
                <div className="mt-3 flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                  <span className="ml-2 text-xs text-white/35">@liamconsult_ltd</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-violet-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/60 uppercase tracking-wider">
                Send a Message
              </span>
              <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                Tell us a little about your needs.
              </h2>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">
                Fill the form and we&apos;ll be in touch to schedule a free
                consultation.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 rounded-2xl border border-brand-accent/30 bg-brand-accent/[0.06] p-8 text-center"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message received.</h3>
                  <p className="mt-2 text-sm text-white/55 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. A member of our team will get back
                    to you within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs text-brand-accent hover:text-brand-accent-hover font-semibold"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full name" required>
                      <input
                        required
                        type="text"
                        placeholder="Ama Mensah"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        type="text"
                        placeholder="Your organization"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Email address" required>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel"
                        placeholder="+233 20 000 0000"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <Field label="What can we help with?" required>
                    <select required className="form-input" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Your message" required>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us a bit about your project, timeline, and goals…"
                      className="form-input resize-none"
                    />
                  </Field>

                  <div className="flex items-start gap-2 text-xs text-white/40">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-0.5 accent-brand-accent"
                    />
                    <label htmlFor="consent" className="leading-relaxed">
                      I agree to be contacted by Liam Consulting regarding my
                      enquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-magnetic group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="h-3.5 w-3.5 rounded-full border-2 border-brand-950/30 border-t-brand-950 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          color: #fff;
          transition: all 0.2s;
          outline: none;
        }
        :global(.form-input::placeholder) {
          color: rgba(255, 255, 255, 0.3);
        }
        :global(.form-input:hover) {
          border-color: rgba(255, 255, 255, 0.14);
        }
        :global(.form-input:focus) {
          border-color: rgba(232, 145, 58, 0.5);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 0 3px rgba(232, 145, 58, 0.08);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1.5">
        {label}
        {required && <span className="text-brand-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
