import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/app/ui/Smooth";

const inter = JetBrains_Mono({ weight: ['200'], subsets: ['cyrillic', 'latin']});

export const metadata: Metadata = {
  title: "CHNG Rev",
  description: "Fukk shit make ur dreams come true",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <SmoothScrolling>
      <body className={inter.className}>{children}</body>
    </SmoothScrolling>
    </html>
  );
}
