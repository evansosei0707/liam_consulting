export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  iconName:
    | "Users"
    | "Briefcase"
    | "GraduationCap"
    | "Lightbulb"
    | "Sparkles";
  image: string;
  color: string;
  gradient: string;
  offerings: { title: string; body: string }[];
  outcomes: string[];
  process: { step: string; title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "recruitment-support",
    title: "Recruitment Support",
    shortTitle: "Recruitment",
    tagline: "The right people, in the right roles — quickly and cost-effectively.",
    summary:
      "From job profiling to onboarding, we handle shortlisting, assessments, and reference checks to help you find the perfect fit for your team.",
    description:
      "Hiring the wrong person is expensive. We run a disciplined end-to-end recruitment process that combines a deep candidate network, structured screening, and post-placement follow-ups — so every hire sticks. Whether you're filling a single critical role or scaling a team across multiple locations, we move with speed without cutting corners on quality.",
    iconName: "Users",
    image: "/img/tech_guys.jpg",
    color: "blue",
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    offerings: [
      {
        title: "Job profiling & advertisement",
        body: "We craft role profiles that attract the right candidates and distribute across targeted channels.",
      },
      {
        title: "CV sourcing & initial screening",
        body: "Tap into 1,000+ candidates across industries, pre-screened for role-critical skills.",
      },
      {
        title: "Interview coordination & facilitation",
        body: "Structured interviews, scheduling, and panel support that respects everyone's time.",
      },
      {
        title: "Background checks & reference verification",
        body: "Comprehensive due diligence — employment history, credentials, and references.",
      },
      {
        title: "Post-placement follow-ups & onboarding",
        body: "We stay involved after day one to ensure smooth integration and lasting success.",
      },
    ],
    outcomes: [
      "Faster time-to-hire across roles",
      "Lower cost-per-hire and reduced turnover",
      "Pre-vetted talent with verified credentials",
      "Hiring you can defend — documented and compliant",
    ],
    process: [
      { step: "01", title: "Discover", body: "We listen. Understanding your role, culture, and success metrics." },
      { step: "02", title: "Source", body: "We activate our candidate network and run targeted outreach." },
      { step: "03", title: "Screen", body: "Structured assessments and interviews narrow the shortlist." },
      { step: "04", title: "Place", body: "Offer support, onboarding, and post-placement follow-ups." },
    ],
  },
  {
    slug: "hr-outsourcing",
    title: "HR Outsourcing",
    shortTitle: "HR Outsourcing",
    tagline: "Reduce admin burden. Stay compliant. Move faster.",
    summary:
      "We take the day-to-day HR operations off your plate — payroll, records, benefits, and policy — so you can focus on growing the business.",
    description:
      "Most growing businesses don't need a full in-house HR department — they need reliable HR execution. We become your outsourced HR team, handling everything from payroll to employee relations with the rigor of a Fortune 500 function and the responsiveness of a local partner. Full compliance with Ghanaian labor law. No surprises.",
    iconName: "Briefcase",
    image: "/img/corporate_workers.jpg",
    color: "violet",
    gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
    offerings: [
      {
        title: "Payroll management",
        body: "Accurate, on-time payroll runs with statutory deductions and payslip delivery.",
      },
      {
        title: "Employee records & compliance",
        body: "Digital employee files, contracts, and full compliance with labor laws.",
      },
      {
        title: "Benefits administration",
        body: "Structure, communicate, and administer benefits employees actually value.",
      },
      {
        title: "Employee relations & policy",
        body: "Policy implementation, grievance handling, and day-to-day employee support.",
      },
    ],
    outcomes: [
      "Reduced HR overhead and operational cost",
      "Full labor-law compliance, audit-ready",
      "Stronger employee experience and retention",
      "Leadership freed to focus on growth",
    ],
    process: [
      { step: "01", title: "Audit", body: "We review your current HR setup, policies, and risk exposure." },
      { step: "02", title: "Transition", body: "Seamless handover with zero disruption to employees." },
      { step: "03", title: "Operate", body: "We run the HR function — payroll, records, relations." },
      { step: "04", title: "Optimize", body: "Quarterly reviews to sharpen processes and reduce cost." },
    ],
  },
  {
    slug: "training-and-development",
    title: "Training & Development",
    shortTitle: "Training",
    tagline: "Build a competent, future-ready workforce.",
    summary:
      "Practical, hands-on training programs that elevate skills, leadership, and culture — designed around your team's real challenges.",
    description:
      "Training only works when it changes behavior. We design programs around the specific outcomes your business needs — not generic slideware. From soft skills and leadership to technical and compliance training, our sessions are built to transfer knowledge that sticks and translates directly to performance on the job.",
    iconName: "GraduationCap",
    image: "/img/factory_workers.jpg",
    color: "orange",
    gradient: "from-brand-accent/25 via-brand-accent/5 to-transparent",
    offerings: [
      {
        title: "Soft skills & leadership development",
        body: "Communication, management, and leadership programs for emerging and senior leaders.",
      },
      {
        title: "Technical & industry-specific training",
        body: "Role-specific upskilling tailored to your sector and technology stack.",
      },
      {
        title: "Team building & customer service",
        body: "Programs that strengthen collaboration and improve customer experience.",
      },
      {
        title: "Compliance & workplace safety",
        body: "HSE, ethics, and regulatory training that keeps your workforce protected and compliant.",
      },
    ],
    outcomes: [
      "Measurable skill uplift across teams",
      "Stronger internal leadership pipeline",
      "Better customer experience and retention",
      "Reduced compliance and safety incidents",
    ],
    process: [
      { step: "01", title: "Assess", body: "Skill gap analysis against your business goals." },
      { step: "02", title: "Design", body: "Custom curricula built around real scenarios." },
      { step: "03", title: "Deliver", body: "Engaging, hands-on facilitation — in-person or hybrid." },
      { step: "04", title: "Measure", body: "Post-training evaluation and ongoing coaching." },
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    shortTitle: "Advisory",
    tagline: "Strategy to help you overcome challenges and scale.",
    summary:
      "Expert guidance for organizational development, workforce planning, change management, and sustainable growth.",
    description:
      "Growth comes with complexity — new structures, new culture, new bottlenecks. We work alongside founders and leadership teams to diagnose what's actually holding the business back, and build practical plans to fix it. From HR audits to culture transformation, we bring outside perspective and disciplined execution.",
    iconName: "Lightbulb",
    image: "/img/mass-hire.png",
    color: "cyan",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    offerings: [
      {
        title: "Organizational development",
        body: "Structure, roles, and operating models that scale with the business.",
      },
      {
        title: "HR audits & workforce planning",
        body: "Strategic headcount planning and full diagnostic of your HR function.",
      },
      {
        title: "Change management & culture",
        body: "Leading teams through reorganization, M&A, or cultural transformation.",
      },
      {
        title: "SME growth & sustainability",
        body: "Practical strategies to help small and mid-sized businesses scale sustainably.",
      },
    ],
    outcomes: [
      "Clearer operating model and accountability",
      "Data-driven workforce decisions",
      "Smoother change, lower execution risk",
      "Sustainable growth trajectory",
    ],
    process: [
      { step: "01", title: "Diagnose", body: "Structured assessment of people, process, and performance." },
      { step: "02", title: "Strategize", body: "Co-create a prioritized, pragmatic action plan." },
      { step: "03", title: "Execute", body: "Hands-on implementation support with your team." },
      { step: "04", title: "Sustain", body: "Embed habits and metrics for lasting change." },
    ],
  },
  {
    slug: "cleaning-and-laundry",
    title: "Cleaning & Laundry Services",
    shortTitle: "Cleaning & Laundry",
    tagline: "Reliable hygiene for homes and businesses.",
    summary:
      "Residential and commercial cleaning, disinfection, and laundry services — delivered on time, every time.",
    description:
      "A clean environment isn't a nice-to-have — it directly shapes how employees, customers, and guests experience your space. Our cleaning and laundry teams are trained, vetted, and equipped to maintain the highest standards of hygiene for offices, residences, and specialist environments. Flexible schedules, transparent pricing, zero hassle.",
    iconName: "Sparkles",
    image: "/img/factory_worker1.png",
    color: "emerald",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    offerings: [
      {
        title: "Residential & commercial cleaning",
        body: "Regular and one-off cleaning for offices, homes, retail, and hospitality.",
      },
      {
        title: "Carpet cleaning & disinfection",
        body: "Deep carpet care and certified disinfection for sensitive environments.",
      },
      {
        title: "Wash-and-fold & dry cleaning",
        body: "Professional garment care for individuals and businesses at scale.",
      },
      {
        title: "Ironing, pickup & delivery",
        body: "Convenient end-to-end laundry with on-demand pickup and drop-off.",
      },
    ],
    outcomes: [
      "Healthier, more productive work environments",
      "Predictable schedules and pricing",
      "Trained, vetted, and insured teams",
      "Same-day and recurring service options",
    ],
    process: [
      { step: "01", title: "Plan", body: "Walkthrough, scoping, and schedule design." },
      { step: "02", title: "Onboard", body: "Dedicated team assignment and supply setup." },
      { step: "03", title: "Deliver", body: "Consistent service with quality checks." },
      { step: "04", title: "Review", body: "Ongoing feedback loop and adjustments." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
