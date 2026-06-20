// src/app/pricing/page.js

import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPhilosophy from "@/components/sections/pricing/PricingPhilosophy";
import PricingPackages from "@/components/sections/pricing/PricingPackages";
import FeatureComparison from "@/components/sections/pricing/FeatureComparison";
import WhatsIncluded from "@/components/sections/pricing/WhatsIncluded";
import CustomSolutions from "@/components/sections/pricing/CustomSolutions";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import PricingCTA from "@/components/sections/pricing/PricingCTA";

export const metadata = {
  title: "Pricing | JSS Originals",
  description:
    "Explore investment options for premium web design, development and digital solutions. Custom packages tailored to your business goals.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingPhilosophy />
      <PricingPackages />
      <FeatureComparison />
      <WhatsIncluded />
      <CustomSolutions />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}