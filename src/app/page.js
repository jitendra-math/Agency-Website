// src/app/page.js

import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
// import ProjectsPreview from "@/components/sections/ProjectsPreview";
import PricingPlans from "@/components/sections/work/PricingPlans";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <AboutPreview />

      <ServicesSection />

      <WhyChooseSection />

      {/* Re-enable this once you have strong case studies */}
      {/* <ProjectsPreview /> */}

      <PricingPlans />

      {/* Final conversion-focused CTA */}
      <FinalCTA />
    </>
  );
}