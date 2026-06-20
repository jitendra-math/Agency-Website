// src/app/faq/page.js

import FAQHero from "@/components/sections/faq/FAQHero";
import FAQCategories from "@/components/sections/faq/FAQCategories";
import FAQAccordion from "@/components/sections/faq/FAQAccordion";
import WorkingWithUs from "@/components/sections/faq/WorkingWithUs";
import CommonMisconceptions from "@/components/sections/faq/CommonMisconceptions";
import ContactPrompt from "@/components/sections/faq/ContactPrompt";
import FAQCTA from "@/components/sections/faq/FAQCTA";

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