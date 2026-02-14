import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Moharnab Gogoi — Developer & Creator",
  description:
    "Portfolio of Moharnab Gogoi — a developer passionate about game development, web development, and building innovative digital experiences.",
  keywords: [
    "Moharnab Gogoi",
    "Developer",
    "Portfolio",
    "Web Development",
    "Game Development",
    "Next.js",
    "Unreal Engine",
    "Unity",
  ],
  openGraph: {
    title: "Moharnab Gogoi — Developer & Creator",
    description:
      "A developer passionate about game development, web development, and building innovative digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="font-sans antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
