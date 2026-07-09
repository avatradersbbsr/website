import type { Metadata } from "next";
import LegalLayout from "@/components/shared/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AVA Traders collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 2026">
      <div>
        <h2>1. Introduction</h2>
        <p>
          AVA Traders (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates this website and our
          showroom at {siteConfig.contact.address}. This Privacy Policy explains what information
          we collect when you use our website or interact with us, and how that information is used.
        </p>
      </div>

      <div>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Contact details you submit through enquiry forms — name, phone number, email address, and message content.</li>
          <li>Communication records when you contact us via phone, WhatsApp, or email.</li>
          <li>Basic usage data such as pages visited and browser type, collected through standard analytics tools.</li>
        </ul>
      </div>

      <div>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To respond to product enquiries and callback requests.</li>
          <li>To process orders, arrange delivery, and provide after-sales support.</li>
          <li>To improve our website and product catalogue based on usage patterns.</li>
          <li>We do not sell or rent your personal information to third parties.</li>
        </ul>
      </div>

      <div>
        <h2>4. WhatsApp and Phone Communication</h2>
        <p>
          When you contact us via WhatsApp or phone, standard terms of those platforms and your
          telecom provider apply. We use the number you contact us from solely to respond to your
          enquiry and provide order updates, unless you ask us not to.
        </p>
      </div>

      <div>
        <h2>5. Data Retention</h2>
        <p>
          We retain enquiry and order-related information for as long as necessary to fulfil the
          purpose it was collected for, and as required by applicable Indian law for record-keeping.
        </p>
      </div>

      <div>
        <h2>6. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of the personal information we hold
          about you by contacting us at {siteConfig.contact.email} or {siteConfig.contact.phonePrimary}.
        </p>
      </div>

      <div>
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated revision date.
        </p>
      </div>

      <div>
        <h2>8. Contact Us</h2>
        <p>
          For any privacy-related questions, reach us at {siteConfig.contact.email} or visit our
          showroom at {siteConfig.contact.address}.
        </p>
      </div>
    </LegalLayout>
  );
}
