// src/components/t&c/TermsOfServiceContent.js

"use client";

export default function TermsOfServiceContent() {
  const currentYear = new Date().getFullYear();
  const effectiveDate = "April 1, 2025";
  const lastUpdated = "April 1, 2025";
  const version = "2.1";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-white dark:bg-neutral-950/90 p-6 sm:p-10 md:p-12 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm transition-colors duration-300">
        
        {/* Header – premium, clean */}
        <div className="text-center border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <div className="text-2xl font-semibold tracking-tight text-black dark:text-white">
            JSS Originals
          </div>
          <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <a
              href="mailto:contact@jssoriginals.in"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              contact@jssoriginals.in
            </a>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
            <a
              href="tel:+919549626202"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              +91 9549626202
            </a>
          </div>
        </div>

        {/* Title Block */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white">
            Terms of Service
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Web Development, Design & Digital Services
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-neutral-500 dark:text-neutral-500">
            <span>Effective: {effectiveDate}</span>
            <span>•</span>
            <span>Last Updated: {lastUpdated}</span>
            <span>•</span>
            <span>Version {version}</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base">

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              These Terms of Service (“Terms”) constitute a legally binding agreement between
              <span className="font-medium text-black dark:text-white"> JSS Originals </span>
              (“Service Provider”, “we”, “us”) and the individual or entity (“Client”, “you”)
              engaging our services. By proceeding with an invoice payment, advance fee, or instructing us to commence work,
              you explicitly acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>

          {/* 2. Scope of Services */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              2. Scope of Services
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              We will perform the digital services described in the mutually agreed written proposal, quotation, or invoice.
              Services may include website design, UI/UX design, front‑end/back‑end development, CMS integration, e‑commerce setup,
              and performance optimisation.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify mt-2">
              <span className="font-medium text-black dark:text-white">Third‑Party Costs:</span> Unless expressly stated otherwise in
              our quotation, you are solely responsible for all third‑party expenses including (but not limited to) domain registration,
              web hosting (e.g., Vercel, AWS, Netlify), API subscriptions, premium plugins, stock assets, and any recurring software fees.
            </p>
          </section>

          {/* 3. Client Responsibilities */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              3. Client Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <li>Provide all necessary content (text, images, branding guidelines) in a timely manner.</li>
              <li>Ensure you own all rights or have obtained permission for any materials you submit.</li>
              <li>Grant us access to required systems, platforms, or credentials as needed.</li>
              <li>Review deliverables, provide feedback, and approve milestones within agreed timeframes.</li>
              <li>Cooperate in good faith to enable successful project completion.</li>
            </ul>
          </section>

          {/* 4. Project Inactivity */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              4. Project Inactivity
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              If you fail to provide required information, approvals, or feedback within fourteen (14) calendar days of our written request,
              we reserve the right to pause the project. Inactivity exceeding thirty (30) consecutive days may result in project closure.
              In such event, you will be invoiced for all work completed up to the closure date, and any outstanding balance will become
              immediately due.
            </p>
          </section>

          {/* 5. Timeline & Communication */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              5. Timeline & Communication
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              Estimated delivery dates are provided in good faith and depend on timely cooperation from you. Our standard working hours
              are Monday to Friday, 10:00 AM to 6:00 PM IST (Indian Standard Time). Response times may be slower during weekends,
              public holidays, and after‑hours. Urgent requests outside business hours may be subject to additional fees.
            </p>
          </section>

          {/* 6. Payment Terms */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              6. Payment Terms
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify mb-2">
              Work will not commence until the requested advance payment is received. All advance payments are non‑refundable, as they
              secure dedicated production scheduling and reserve our team’s capacity for your project. This reservation prevents us from
              accepting other work during that period.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <li>Final deliverables, code transfer, or website deployment will be withheld until full payment is cleared.</li>
              <li>Late payments may result in suspension of services or project delays.</li>
              <li>
                Quoted prices exclude all applicable taxes (including Goods and Services Tax (GST) where required by law) unless
                explicitly stated otherwise. You are responsible for any taxes due.
              </li>
            </ul>
          </section>

          {/* 7. Revisions & Scope Changes */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              7. Revisions & Scope Changes
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              The number of included revisions is specified in your approved proposal or quotation. Any work that materially changes
              the agreed functionality, design direction, or technical requirements will be treated as out‑of‑scope and billed at our
              standard hourly rate. Websites are developed for modern browsers (latest versions of Chrome, Safari, Edge, Firefox)
              and modern mobile devices; compatibility with legacy browsers (e.g., Internet Explorer) is not guaranteed.
            </p>
          </section>

          {/* 8. Post‑Launch Support & Warranty */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              8. Post‑Launch Support & Warranty
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              We provide a complimentary bug‑fixing period of fourteen (14) days following final launch, covering technical defects
              directly related to the original scope. This warranty does not cover new feature requests, third‑party software failures,
              hosting environment changes, or modifications made by you after launch. Ongoing support beyond this period requires a
              separate maintenance contract or will be billed hourly.
            </p>
          </section>

          {/* 9. Intellectual Property */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              9. Intellectual Property
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              Ownership of the final, custom‑developed deliverables (design, front‑end/back‑end code) transfers to you only after full
              payment has been received. We retain all rights to our pre‑existing tools, frameworks, reusable code libraries, methodologies,
              and internal systems used during project execution.
            </p>
          </section>

          {/* 10. Portfolio Rights */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              10. Portfolio Rights
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              Unless otherwise agreed in writing (including via an executed Non‑Disclosure Agreement), we reserve the right to display
              the completed work, design assets, and project descriptions in our portfolio, case studies, and marketing materials.
              We will never disclose your confidential business information without explicit written consent.
            </p>
          </section>

          {/* 11. Confidentiality (new separate section) */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              11. Confidentiality
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              Both parties agree to treat as confidential all non‑public information disclosed during the project, including business
              strategies, client data, proprietary code, and internal processes. Neither party shall disclose such information to third
              parties without prior written consent, except as required by law or for the purpose of performing these Terms.
            </p>
          </section>

          {/* 12. Third‑Party Services */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              12. Third‑Party Services
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              Our work may integrate with or rely upon third‑party platforms and services, including (but not limited to) hosting providers,
              domain registrars, API vendors, payment gateways, analytics providers, and content delivery networks. We are not responsible
              for outages, service changes, price increases, policy modifications, or any disruptions caused by these third parties.
              Your use of such services remains subject to their respective terms and conditions.
            </p>
          </section>

          {/* 13. SEO & Security Disclaimer */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              13. SEO & Security Disclaimer
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              While we follow modern development and standard on‑page SEO best practices, search engine algorithms are controlled
              exclusively by independent third parties (e.g., Google, Bing) and may change without notice. We do not guarantee specific
              rankings, traffic volume, or positions. After final handover, you are responsible for safeguarding your login credentials
              and for any security breaches, malware, or data loss resulting from your own actions, third‑party interventions, or server
              compromises.
            </p>
          </section>

          {/* 14. Limitation of Liability */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              14. Limitation of Liability
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages, including lost profits, data loss, or business interruption. Our total liability shall never exceed
              the total fees paid by you to us for the specific project giving rise to the claim.
            </p>
          </section>

          {/* 15. Termination */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              15. Termination
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              Either party may terminate these Terms with written notice. Upon termination, you shall pay for all work completed up
              to the effective termination date. Advance payments already used to reserve capacity and perform work are non‑refundable.
            </p>
          </section>

          {/* 16. Force Majeure */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              16. Force Majeure
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              Neither party shall be liable for delays or failure to perform caused by events beyond reasonable control, including
              natural disasters, internet or hosting outages, governmental actions, labour disputes, pandemics, or similar unforeseen
              circumstances.
            </p>
          </section>

          {/* 17. Severability (new) */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              17. Severability
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue
              in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it enforceable
              while preserving the original intent.
            </p>
          </section>

          {/* 18. Governing Law */}
          <section>
            <h2 className="text-base font-semibold text-black dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
              18. Governing Law
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              These Terms shall be governed by the laws of India. Any disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the courts located in Rajasthan, India.
            </p>
          </section>

          {/* 19. Digital Acceptance */}
          <div className="mt-10 p-5 bg-neutral-50 dark:bg-neutral-900/40 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-base font-semibold text-black dark:text-white mb-2">
              Digital Acceptance
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              This document is an electronic record. By proceeding with an advance payment, signing up for our services, or otherwise
              instructing JSS Originals to begin work, you formally acknowledge that you have read, understood, and agree to be bound
              by these <strong>Terms of Service</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center text-xs text-neutral-500 dark:text-neutral-500">
          <p>© {currentYear} JSS Originals. All rights reserved.</p>
          <p className="mt-1">Document Version: {version}</p>
        </div>
      </div>
    </div>
  );
}