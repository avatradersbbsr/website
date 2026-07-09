import type { Metadata } from "next";
import LegalLayout from "@/components/shared/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Delivery areas, timelines, and charges for orders placed with AVA Traders.",
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <LegalLayout title="Shipping Policy" updated="July 2026">
      <div>
        <h2>1. Delivery Areas</h2>
        <p>
          We deliver across Bhubaneswar and can arrange delivery to other parts of Odisha through
          our logistics partners. For locations outside Odisha, please contact us to confirm
          feasibility before placing an order.
        </p>
      </div>

      <div>
        <h2>2. Delivery Timelines</h2>
        <ul>
          <li>Within Bhubaneswar: typically 1–3 business days from order confirmation.</li>
          <li>Rest of Odisha: typically 3–7 business days depending on location and courier availability.</li>
          <li>Large items such as massage chairs may require additional time for assembly-ready dispatch.</li>
        </ul>
      </div>

      <div>
        <h2>3. Shipping Charges</h2>
        <p>
          Shipping charges depend on product size, weight, and delivery location. Charges, if any,
          will be communicated clearly before your order is confirmed — there are no hidden fees
          added after checkout.
        </p>
      </div>

      <div>
        <h2>4. In-Home Delivery for Massage Chairs</h2>
        <p>
          For massage chairs and large equipment, our team coordinates a delivery slot in advance
          and can assist with basic in-home setup and a walkthrough of the controls upon request.
        </p>
      </div>

      <div>
        <h2>5. Order Tracking</h2>
        <p>
          Once your order is dispatched, our team will share tracking details or keep you updated
          directly via call or WhatsApp, depending on the courier used.
        </p>
      </div>

      <div>
        <h2>6. Delays</h2>
        <p>
          While we aim to meet the timelines above, delivery may occasionally be delayed due to
          weather, courier disruptions, or high demand. We will proactively inform you of any
          significant delay to your order.
        </p>
      </div>

      <div>
        <h2>7. Contact</h2>
        <p>
          For delivery-related questions, reach us at {siteConfig.contact.phonePrimary} or{" "}
          {siteConfig.contact.email}.
        </p>
      </div>
    </LegalLayout>
  );
}
