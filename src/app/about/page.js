// src/app/about/page.js

import AboutHero from "@/components/sections/about/AboutHero";
import PhilosophySection from "@/components/sections/about/PhilosophySection";
import ProblemSection from "@/components/sections/about/ProblemSection";
import ThinkingSection from "@/components/sections/about/ThinkingSection";
import FounderSection from "@/components/sections/about/FounderSection";
import StandardsSection from "@/components/sections/about/StandardsSection";
import ProcessSection from "@/components/sections/about/ProcessSection";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata = {
  title: "About | JSS Originals",
  description:
    "Learn about JSS Originals — a digital projects lab exploring thoughtful ideas, web platforms, and meaningful internet experiments.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <PhilosophySection />
      <ProblemSection />
      <ThinkingSection />
      <FounderSection />
      <StandardsSection />
      <ProcessSection />
      <AboutCTA />
    </main>
  );
}