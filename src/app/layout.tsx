import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
