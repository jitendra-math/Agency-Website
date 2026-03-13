// src/app/layout.js

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata = {
  title: "JSS Originals",
  description:
    "JSS Originals builds web platforms, SEO identity systems, and experimental digital projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <WhatsAppFloat />
      </body>
    </html>
  );
}