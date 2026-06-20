// src/app/contact/page.js

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactMethods from "@/components/sections/contact/ContactMethods";
import WhyChooseUs from "@/components/sections/contact/WhyChooseUs";
import AvailabilityNotice from "@/components/sections/contact/AvailabilityNotice";
import ProjectInquiryForm from "@/components/sections/contact/ProjectInquiryForm";
import ProcessTimeline from "@/components/sections/contact/ProcessTimeline";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";
import ContactCTA from "@/components/sections/contact/ContactCTA";

export const metadata = {
  title: "Contact | JSS Originals",
  description:
    "Get in touch with JSS Originals for premium web development, design, and digital strategy services. Let's build something worth remembering.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactMethods />
      <WhyChooseUs />
      <AvailabilityNotice />
      <ProjectInquiryForm />
      <ProcessTimeline />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}