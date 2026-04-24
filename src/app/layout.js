// src/app/layout.js

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL("https://jssoriginals.com"),
  title: {
    default: "JSS Originals | Premium Web Design, Development & Digital Solutions",
    template: "%s | JSS Originals",
  },
  description:
    "JSS Originals builds modern websites, SEO-friendly digital experiences, and brand-focused web platforms for businesses that want to stand out and convert better.",
  applicationName: "JSS Originals",
  authors: [{ name: "JSS Originals" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "technology",
  keywords: [
    "JSS Originals",
    "web design",
    "web development",
    "SEO friendly websites",
    "business website development",
    "landing page design",
    "responsive website",
    "digital agency",
    "Next.js developer",
    "website for business",
    "brand identity",
    "digital solutions",
  ],
  alternates: {
    canonical: "https://jssoriginals.com",
    languages: {
      "en-IN": "https://jssoriginals.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://jssoriginals.com",
    siteName: "JSS Originals",
    title: "JSS Originals | Premium Web Design, Development & Digital Solutions",
    description:
      "Modern websites, strong branding, and SEO-ready digital experiences for growing businesses.",
    locale: "en_IN",
    images: [
      {
        url: "https://i.ibb.co/V5SPYvL/jss-design-canvas-export-2026-04-24-T200718-851.png",
        width: 1200,
        height: 630,
        alt: "JSS Originals preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSS Originals | Premium Web Design, Development & Digital Solutions",
    description:
      "Modern websites, strong branding, and SEO-ready digital experiences for growing businesses.",
    images: [
      "https://i.ibb.co/V5SPYvL/jss-design-canvas-export-2026-04-24-T200718-851.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "PUT_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}