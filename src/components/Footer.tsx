import Link from "next/link";

const footerLinks = {
  Services: [
    "Talent Sourcing",
    "Employer Branding",
    "Onboarding",
    "HR Consulting",
  ],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Guides", "Webinars", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy">
                <span className="text-sm font-bold text-white">T</span>
              </div>
              <span className="text-xl font-bold text-brand-navy">TeamUp</span>
            </Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-xs">
              Your trusted partner for building exceptional teams. From first
              interview to first day.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold text-brand-navy">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-brand-muted hover:text-brand-navy transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} TeamUp. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-xs text-brand-muted hover:text-brand-navy transition-colors"
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
