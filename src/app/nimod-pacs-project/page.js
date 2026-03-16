// src/app/nimod-pacs-project/page.js

import NimodHero from "@/components/sections/nimod/NimodHero";
import NimodOverview from "@/components/sections/nimod/NimodOverview";
import NimodScreenshots from "@/components/sections/nimod/NimodScreenshots";
import NimodFeatures from "@/components/sections/nimod/NimodFeatures";
import NimodTechStack from "@/components/sections/nimod/NimodTechStack";
import NimodProjectStructure from "@/components/sections/nimod/NimodProjectStructure";
import NimodCTA from "@/components/sections/nimod/NimodCTA";

export const metadata = {
  title: "Nimod PACS Website | JSS Originals",
  description:
    "Case study of the Nimod Cooperative Society website built by JSS Originals. A modern platform designed for rural financial services and cooperative initiatives.",
};

export default function NimodPacsProjectPage() {
  return (
    <main>
      <NimodHero />
      <NimodOverview />
      <NimodScreenshots />
      <NimodFeatures />
      <NimodTechStack />
      <NimodProjectStructure />
      <NimodCTA />
    </main>
  );
}
