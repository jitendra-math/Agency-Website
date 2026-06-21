// src/app/work/page.js

import WorkHero from "@/components/sections/work/WorkHero";
import WhatWeBuild from "@/components/sections/work/WhatWeBuild";
import OurApproach from "@/components/sections/work/OurApproach";
import ProjectTypes from "@/components/sections/work/ProjectTypes";
import WhyResultsMatter from "@/components/sections/work/WhyResultsMatter";
import FutureCaseStudies from "@/components/sections/work/FutureCaseStudies";
import WorkCTA from "@/components/sections/work/WorkCTA";

export const metadata = {
  title: "Work | JSS Originals",
  description:
    "Explore how JSS Originals builds premium digital experiences — from business websites to custom web applications designed for long-term growth.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <WhatWeBuild />
      <OurApproach />
      <ProjectTypes />
      <WhyResultsMatter />
      <FutureCaseStudies />
      <WorkCTA />
    </main>
  );
}