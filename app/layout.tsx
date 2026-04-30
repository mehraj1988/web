import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { basePath } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Mehraj Shaikh | AI Video & Creative Technologist Portfolio",
  description:
    "Premium portfolio for Mehraj Shaikh, Senior Creative Technologist specializing in AI video, generative content, production leadership and workflow systems.",
  keywords: [
    "Mehraj Shaikh",
    "AI Video",
    "Creative Technologist",
    "Generative Content Producer",
    "Senior Manager AI Videos",
    "AI Video Production Lead",
    "Mumbai",
  ],
  authors: [{ name: "Mehraj Shaikh" }],
  creator: "Mehraj Shaikh",
  openGraph: {
    title: "Mehraj Shaikh | Frame by frame, prompt by prompt.",
    description:
      "A creative technologist’s portfolio of AI video, production leadership and the systems behind them.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${basePath}/images/hero-character.png`,
        width: 1200,
        height: 900,
        alt: "Mehraj Shaikh AI video portfolio visual motif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehraj Shaikh | AI Video & Generative Content",
    description:
      "Senior Creative Technologist portfolio for AI video and generative content leadership roles.",
    images: [`${basePath}/images/hero-character.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-navy">{children}</body>
    </html>
  );
}
