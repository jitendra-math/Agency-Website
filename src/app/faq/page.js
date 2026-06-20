// src/app/faq/page.js

import FAQHero from "@/components/faq/FAQHero";
import FAQCategories from "@/components/faq/FAQCategories";
import FAQAccordion from "@/components/faq/FAQAccordion";
import WorkingWithUs from "@/components/faq/WorkingWithUs";
import CommonMisconceptions from "@/components/faq/CommonMisconceptions";
import ContactPrompt from "@/components/faq/ContactPrompt";
import FAQCTA from "@/components/faq/FAQCTA";

export const metadata = {
  title: "FAQ | JSS Originals",
  description:
    "Find answers to frequently asked questions about working with JSS Originals — web design, development, pricing, and process.",
};

export default function FAQPage() {
  return (
    <main>
      <FAQHero />
      <FAQCategories />
      <FAQAccordion />
      <WorkingWithUs />
      <CommonMisconceptions />
      <ContactPrompt />
      <FAQCTA />
    </main>
  );
}