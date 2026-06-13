// src/app/terms/page.js

import TermsOfServiceContent from "@/components/t&c/TermsOfServiceContent";

export const metadata = {
  title: "Terms of Service | JSS Originals",
  description:
    "Read the Terms of Service for JSS Originals — web development, design, and digital services for businesses that think long-term.",
};

export default function TermsPage() {
  return (
    <main>
      <TermsOfServiceContent />
    </main>
  );
}