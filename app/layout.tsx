import type { Metadata } from "next";
import { Anek_Bangla, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

// Headings / prices / buttons
const display = Anek_Bangla({ subsets: ["bengali", "latin"], weight: ["500", "600", "700", "800"], variable: "--font-display" });
// Body text
const body = Noto_Sans_Bengali({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "5 Head Massage Gun LM-280",
  description: "৫ হেডের পাওয়ারফুল ম্যাসাজ গান — ক্যাশ অন ডেলিভারি",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
