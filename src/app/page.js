// src/app/page.js

import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import JoinUsCTA from "@/components/sections/JoinUsCTA";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <JoinUsCTA />
      <ContactCTA />
    </>
  );
}