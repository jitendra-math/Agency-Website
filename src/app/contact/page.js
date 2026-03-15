// src/app/contact/page.js

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactIntro from "@/components/sections/contact/ContactIntro";
import ContactOptions from "@/components/sections/contact/ContactOptions";
import CollaborationSection from "@/components/sections/contact/CollaborationSection";
import WhatsAppCTA from "@/components/sections/contact/WhatsAppCTA";
import CollaborationNote from "@/components/sections/contact/CollaborationNote";
import ContactClosing from "@/components/sections/contact/ContactClosing";

export const metadata = {
  title: "Contact | JSS Originals",
  description:
    "Get in touch with JSS Originals. Start a conversation about web projects, digital identity systems, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactIntro />
      <ContactOptions />
      <CollaborationSection />
      <WhatsAppCTA />
      <CollaborationNote />
      <ContactClosing />
    </main>
  );
}
