// src/app/about/page.js

import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import WhatWeBuild from "@/components/sections/about/WhatWeBuild";
import Philosophy from "@/components/sections/about/Philosophy";
import ProjectApproach from "@/components/sections/about/ProjectApproach";
import FounderSection from "@/components/sections/about/FounderSection";
import FutureVision from "@/components/sections/about/FutureVision";
import ClosingStatement from "@/components/sections/about/ClosingStatement";

export const metadata = {
  title: "About | JSS Originals",
  description:
    "Learn about JSS Originals — a digital projects lab exploring thoughtful ideas, web platforms, and meaningful internet experiments.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <WhatWeBuild />
      <Philosophy />
      <ProjectApproach />
      <FounderSection />
      <FutureVision />
      <ClosingStatement />
    </main>
  );
}
