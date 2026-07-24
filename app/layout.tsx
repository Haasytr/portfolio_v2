import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinicius Santos — Full-Stack Engineer",
  description:
    "Portfolio of Vinicius Santos, a full-stack engineer building fast, clear, and intentional digital products.",
  openGraph: {
    title: "Vinicius Santos — Full-Stack Engineer",
    description: "I build digital products that feel unmistakably right.",
    images: ["https://portfolio-beige-omega.vercel.app/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinicius Santos — Full-Stack Engineer",
    description: "I build digital products that feel unmistakably right.",
    images: ["https://portfolio-beige-omega.vercel.app/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
