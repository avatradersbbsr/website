import type { Metadata } from "next";
import LegalLayout from "@/components/shared/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "AVA Traders' policy on product returns, exchanges, and refunds.",
  alternates: { canonical: "/return-refund-policy" },
};

export default function ReturnRefundPage() {
  return (
    <LegalLayout title="Return & Refund Policy" updated="July 2026">
      <div>
        <h2>1. Eligibility for Returns</h2>
        <p>
          Products may be returned within 7 days of delivery if they arrive damaged, defective, or
          significantly different from what was ordered. The product must be unused, in its
          original packaging, with all accessories and documentation included.
        </p>
      </div>

      <div>
        <h2>2. Non-Returnable Situations</h2>
        <ul>
          <li>Change of mind after the product has been used or the packaging has been opened and the item is not defective.</li>
          <li>Damage caused by misuse, unauthorised repair, or normal wear and tear.</li>
          <li>Products purchased on clearance or marked as non-returnable at the time of sale.</li>
        </ul>
      </div>

      <div>
        <h2>3. How to Request a Return</h2>
        <p>
          Contact us at {siteConfig.contact.phonePrimary} or via WhatsApp within 7 days of delivery
          with your order details and a description or photo of the issue. Our team will guide you
          through the next steps.
        </p>
      </div>

      <div>
        <h2>4. Inspection Process</h2>
        <p>
          Once a return request is approved, the product will be collected or brought to our
          showroom for inspection. Refunds or exchanges are processed after the product passes
          this inspection.
        </p>
      </div>

      <div>
        <h2>5. Refunds</h2>
        <p>
          Approved refunds are issued to the original payment method within 7–10 business days
          after inspection is complete. For cash purchases made in-showroom, refunds may be issued
          via bank transfer.
        </p>
      </div>

      <div>
        <h2>6. Exchanges</h2>
        <p>
          If you would prefer an exchange instead of a refund — for example, moving to a different
          massage chair model — our team will help you find the right replacement and adjust
          pricing accordingly.
        </p>
      </div>

      <div>
        <h2>7. Warranty vs. Returns</h2>
        <p>
          Issues discovered after the 7-day return window are handled under the product&apos;s
          warranty terms rather than this return policy. See individual product pages for warranty
          duration.
        </p>
      </div>

      <div>
        <h2>8. Contact</h2>
        <p>
          For return or refund queries, reach us at {siteConfig.contact.email} or{" "}
          {siteConfig.contact.phonePrimary}.
        </p>
      </div>
    </LegalLayout>
  );
}
