import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TeamUp | Find the Right People Faster. Keep Them Longer.",
  description:
    "TeamUp is your trusted HR & Recruitment partner. From talent sourcing to onboarding, we help you build stronger teams with confidence.",
  keywords: [
    "HR",
    "recruitment",
    "talent sourcing",
    "employer branding",
    "onboarding",
    "hiring",
  ],
  openGraph: {
    title: "TeamUp | Find the Right People Faster. Keep Them Longer.",
    description:
      "Your trusted HR & Recruitment partner for building exceptional teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans bg-brand-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
