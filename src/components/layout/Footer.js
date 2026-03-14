// src/components/layout/Footer.js

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-14">

        {/* Brand */}
        <div className="max-w-md">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            JSS Originals
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Digital projects lab building modern web platforms,
            SEO identity systems, and experimental internet initiatives.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 space-y-4 text-sm">

          <div>
            <p className="text-neutral-500">WhatsApp</p>

            <a
              href="https://wa.me/919549626202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 hover:text-blue-600"
            >
              +91 9549626202
            </a>
          </div>

          <div>
            <p className="text-neutral-500">Email</p>

            <a
              href="mailto:contact@jssoriginals.in"
              className="text-neutral-900 dark:text-neutral-100 hover:text-blue-600"
            >
              contact@jssoriginals.in
            </a>
          </div>

        </div>

        {/* Founder */}
        <div className="mt-10 text-sm">
          <p className="text-neutral-500">Founder</p>

          <a
            href="https://jitubanna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-neutral-100 hover:text-blue-600"
          >
            Know about the founder
          </a>

          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            me@jitubanna.com
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

        {/* Bottom */}
        <div className="mt-6 text-xs text-neutral-500">
          © {year} JSS Originals. All rights reserved.
        </div>

      </div>
    </footer>
  );
}