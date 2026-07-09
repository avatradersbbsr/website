import type { Metadata } from "next";
import LegalLayout from "@/components/shared/LegalLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the AVA Traders website and purchasing our products.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="July 2026">
      <div>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing this website or placing an enquiry or order with AVA Traders, you agree to
          the terms outlined here. If you do not agree, please do not use this website.
        </p>
      </div>

      <div>
        <h2>2. Product Information</h2>
        <p>
          We make every effort to display accurate product descriptions, specifications, and
          pricing. Actual product colour or minor design details may vary slightly from
          representative images. In case of any discrepancy, the product on display at our
          showroom is considered authoritative.
        </p>
      </div>

      <div>
        <h2>3. Pricing</h2>
        <p>
          Prices listed are in Indian Rupees (INR) and inclusive of applicable taxes unless stated
          otherwise. MRP and offer prices are subject to change without prior notice. The price
          confirmed at the time of order placement will apply.
        </p>
      </div>

      <div>
        <h2>4. Orders and Enquiries</h2>
        <p>
          Submitting an enquiry through this website does not constitute a confirmed order. Orders
          are confirmed only after our team verifies stock availability and you agree to the final
          price and delivery terms over call or WhatsApp.
        </p>
      </div>

      <div>
        <h2>5. Warranty</h2>
        <p>
          Warranty periods vary by product and are listed on individual product pages. Warranty
          covers manufacturing defects only and does not cover damage from misuse, unauthorised
          repair, or normal wear and tear.
        </p>
      </div>

      <div>
        <h2>6. Limitation of Liability</h2>
        <p>
          AVA Traders is not liable for indirect or consequential damages arising from the use of
          our products beyond the remedies available under the applicable warranty and consumer
          protection laws of India.
        </p>
      </div>

      <div>
        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by the laws of India, and any disputes shall be subject to the
          jurisdiction of the courts in Bhubaneswar, Odisha.
        </p>
      </div>

      <div>
        <h2>8. Contact</h2>
        <p>
          Questions about these terms can be directed to {siteConfig.contact.email} or{" "}
          {siteConfig.contact.phonePrimary}.
        </p>
      </div>
    </LegalLayout>
  );
}
