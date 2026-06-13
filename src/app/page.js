// src/app/page.js

import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
// import ProjectsPreview from "@/components/sections/ProjectsPreview";
import PricingPlans from "@/components/sections/work/PricingPlans";
// import JoinUsCTA from "@/components/sections/JoinUsCTA";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <AboutPreview />

      <ServicesSection />

      <WhyChooseSection />

      {/* Add this back once you have strong case studies */}
      {/* <ProjectsPreview /> */}

      <PricingPlans />

      {/* Final conversion-focused CTA */}
      <FinalCTA />

      <ContactCTA />
    </>
  );
}