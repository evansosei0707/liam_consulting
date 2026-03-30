"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, Target, Megaphone, Lightbulb, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Users size={24} />,
    title: "Recruitment Support",
    description: "Access top-tier talent with our extensive database and quick turnaround time.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "HR Outsourcing & Consulting",
    description: "Outsource HR functions and let us handle the rest transparently.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Training & Development",
    description: "Expert Training and Verification to elevate your organization's skills.",
  },
  {
    icon: <Target size={24} />,
    title: "Business Branding",
    description: "Enhance your business presence and build a compelling employer brand.",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to drive your business growth.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Business Advisory",
    description: "Expert consulting and strategic guidance for organizational success.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Laundry & Cleaning",
    description: "Experts in Residential and Commercial Laundry and Disinfection Services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-md tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)" }}
          >
            Our Expertise
          </h2>
          <p className="text-sm text-white/40 max-w-sm leading-relaxed md:text-right">
            Our integrated approach ensures your business has the human capital
            and operational tools needed to thrive.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group glow-border rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 flex flex-col hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Icon */}
              <div className="h-11 w-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:text-blue-400 group-hover:border-blue-400/20 transition-all duration-300 mb-8">
                {service.icon}
              </div>

              <h3 className="text-[15px] font-semibold text-white leading-snug">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
