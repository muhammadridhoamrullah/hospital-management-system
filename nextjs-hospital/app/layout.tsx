import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { archivo } from "../db/utils/font";

export const metadata: Metadata = {
  title: "Hospital Management System",
  description: "A comprehensive hospital management system built with Next.js",
  icons: {
    icon: "hospitalLogo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  );
}
