import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = JetBrains_Mono({ weight: ['400'], subsets: ['cyrillic', 'latin']});

export const metadata: Metadata = {
  title: "CHNG Rev",
  description: "Fukk shit make ur dreams come true",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
