// src/components/layout/Footer.js

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        mt-20 border-t border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-neutral-950
      "
    >
      <div
        className="
          mx-auto max-w-6xl px-4 py-10
          flex flex-col gap-8
        "
      >
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            JSS Originals
          </h2>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
            Digital projects lab focused on building web platforms,
            SEO identity systems, and experimental internet projects.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/"
            className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600"
          >
            Projects
          </Link>

          <Link
            href="/join"
            className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600"
          >
            Join Us
          </Link>

          <Link
            href="/contact"
            className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Bottom */}
        <div className="text-xs text-neutral-500 dark:text-neutral-400">
          © {year} JSS Originals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}