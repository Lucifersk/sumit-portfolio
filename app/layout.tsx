import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumit Kumar — Software Engineer & Developer",
  description:
    "Portfolio of Sumit Kumar, a software engineer building polished web, mobile, and AI-powered products.",
  keywords: [
    "Sumit Kumar",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Portfolio",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
