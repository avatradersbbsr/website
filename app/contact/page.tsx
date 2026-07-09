import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import EnquiryForm from "@/components/shared/EnquiryForm";
import MapSection from "@/components/home/MapSection";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AVA Traders — call, WhatsApp, or visit our showroom on Puri Bypass Road, Badagada, Bhubaneswar.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact" }]} />

      <section className="bg-secondary-700 py-14">
        <div className="container-wide">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-300">Get in Touch</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-white">
            We&apos;re happy to help you choose right
          </h1>
          <p className="mt-2 text-secondary-300 max-w-xl">
            Call, WhatsApp, or drop by the showroom — whichever is easiest for you.
          </p>
        </div>
      </section>

      <section className="section-y container-wide grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 rounded-2xl border border-secondary-100 p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold text-secondary-700 mb-1">Send an Enquiry</h2>
          <p className="text-sm text-secondary-400 mb-6">
            Fill this out and our team will get back to you, usually within a few hours during business hours.
          </p>
          <EnquiryForm />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <a
            href={whatsappLink("Hi AVA Traders, I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-5 hover:bg-[#25D366]/15 transition-colors"
          >
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
            <div>
              <p className="font-semibold text-secondary-700">Chat on WhatsApp</p>
              <p className="text-sm text-secondary-400">Fastest way to reach us</p>
            </div>
          </a>

          <a
            href={telLink(siteConfig.contact.phonePrimary)}
            className="flex items-center gap-4 rounded-2xl border border-secondary-100 p-5 hover:border-primary transition-colors"
          >
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold text-secondary-700">{siteConfig.contact.phonePrimary}</p>
              <p className="text-sm text-secondary-400">{siteConfig.contact.phoneSecondary}</p>
            </div>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-4 rounded-2xl border border-secondary-100 p-5 hover:border-primary transition-colors"
          >
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <p className="font-semibold text-secondary-700">{siteConfig.contact.email}</p>
              <p className="text-sm text-secondary-400">We reply within one business day</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-secondary-100 p-5">
            <MapPin className="h-6 w-6 text-primary shrink-0" />
            <p className="text-sm text-secondary-600">{siteConfig.contact.address}</p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-secondary-100 p-5">
            <Clock className="h-6 w-6 text-primary shrink-0" />
            <div className="text-sm text-secondary-600">
              {siteConfig.contact.hours.map((h) => (
                <p key={h.day}>
                  <span className="font-medium">{h.day}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
