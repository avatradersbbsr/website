import type { Metadata } from "next";
import LegalLayout from "@/components/shared/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers regarding product use, health claims, and website content.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" updated="July 2026">
      <div>
        <h2>1. Not Medical Advice</h2>
        <p>
          Massage chairs, massagers, and fitness equipment sold by AVA Traders are wellness
          products intended for general relaxation and muscle relief. They are not medical devices
          and are not intended to diagnose, treat, cure, or prevent any medical condition. Please
          consult a qualified healthcare professional before use if you are pregnant, have a
          pre-existing medical condition, a pacemaker, or any injury that may be affected by
          massage or vibration therapy.
        </p>
      </div>

      <div>
        <h2>2. Product Images</h2>
        <p>
          Product images used across this website are representative and intended to illustrate
          the general appearance and features of each product. Actual colour, texture, or minor
          design details may vary. Please visit our showroom to view the exact unit before
          purchase where possible.
        </p>
      </div>

      <div>
        <h2>3. Results May Vary</h2>
        <p>
          Any benefits described for our products — such as improved circulation or reduced muscle
          tension — reflect general, commonly reported effects of this category of product and may
          vary from person to person. We do not guarantee specific outcomes.
        </p>
      </div>

      <div>
        <h2>4. Third-Party Links</h2>
        <p>
          This website may link to third-party platforms such as WhatsApp, Google Maps, or social
          media. We are not responsible for the content, privacy practices, or terms of those
          third-party platforms.
        </p>
      </div>

      <div>
        <h2>5. Accuracy of Information</h2>
        <p>
          While we make every effort to keep product specifications, pricing, and availability
          accurate and up to date, errors may occasionally occur. We reserve the right to correct
          any such errors and will inform you before completing an order affected by one.
        </p>
      </div>

      <div>
        <h2>6. Contact</h2>
        <p>
          For any questions about this disclaimer, contact us at {siteConfig.contact.email} or
          visit our showroom at {siteConfig.contact.address}.
        </p>
      </div>
    </LegalLayout>
  );
}
