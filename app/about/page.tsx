import type { Metadata } from "next";
import { ShieldCheck, Target, Eye, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AVA Traders has been Bhubaneswar's showroom for massage chairs, leg massagers and health care products since 2010. Learn our story, mission and values.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: ShieldCheck, title: "Honest Recommendations", text: "We'd rather sell you the right product at a lower price than the most expensive one that doesn't fit your needs." },
  { icon: Target, title: "Long-Term Reliability", text: "We stock devices we're confident will hold up to daily use — and we stand behind them after the sale." },
  { icon: HeartHandshake, title: "Local Accountability", text: "You can walk into our showroom or call us directly. No call centres, no disappearing after checkout." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />

      <section className="bg-secondary-700 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/30 to-transparent" aria-hidden />
        <div className="container-wide relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-300">About AVA Traders</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white max-w-2xl">
            A showroom built around trying things before you buy them
          </h1>
        </div>
      </section>

      <section className="section-y container-wide grid lg:grid-cols-2 gap-12 items-start">
        <div className="prose-none space-y-4 text-secondary-500 leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-secondary-700">Our Story</h2>
          <p>
            AVA Traders started in 2010 as a proprietorship dealing in body massagers and basic
            fitness equipment in Khorda, Odisha. Over the years, as demand grew for full-body
            massage chairs and more specialised wellness devices, we moved into a dedicated
            showroom on Puri Bypass Road in Badagada, Bhubaneswar, where customers could see and
            test products in person rather than choosing blind from a catalogue.
          </p>
          <p>
            Today, our showroom carries massage chairs, leg massagers, and a comprehensive range
            of health care products. What hasn&apos;t changed is our approach: we&apos;d rather
            spend twenty extra minutes with a customer explaining the difference between two
            chairs than sell the wrong one and deal with a return.
          </p>
        </div>

        <div className="space-y-4 text-secondary-500 leading-relaxed">
          <div className="rounded-2xl bg-primary-50 p-6 border border-primary-100">
            <h3 className="flex items-center gap-2 font-display font-bold text-secondary-700">
              <Target className="h-5 w-5 text-primary" /> Our Mission
            </h3>
            <p className="mt-2 text-sm">
              To make genuine wellness and recovery equipment accessible to households across
              Odisha, backed by honest advice and support that doesn&apos;t end at the sale.
            </p>
          </div>
          <div className="rounded-2xl bg-accent-50 p-6 border border-accent-100">
            <h3 className="flex items-center gap-2 font-display font-bold text-secondary-700">
              <Eye className="h-5 w-5 text-accent" /> Our Vision
            </h3>
            <p className="mt-2 text-sm">
              To be the most trusted name in health and wellness retail in Odisha — known as much
              for after-sales support as for the products on our floor.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-wide">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-secondary-100 p-6 hover:border-primary-200 hover:shadow-soft transition-all duration-300">
                <v.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display font-bold text-secondary-700">{v.title}</h3>
                <p className="mt-2 text-sm text-secondary-400 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y container-wide">
        <SectionHeading
          eyebrow="Our Showroom"
          title="See it, sit in it, decide with confidence"
          description={`Our showroom at ${siteConfig.contact.address} displays every major category we sell — from full-body massage chairs to health care devices.`}
        />
        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-2xl bg-canvas p-6 border border-secondary-50">
            <p className="font-display text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-secondary-400 mt-1">Years in business</p>
          </div>
          <div className="rounded-2xl bg-canvas p-6 border border-secondary-50">
            <p className="font-display text-3xl font-bold text-primary">3</p>
            <p className="text-sm text-secondary-400 mt-1">Product categories</p>
          </div>
          <div className="rounded-2xl bg-canvas p-6 border border-secondary-50">
            <p className="font-display text-3xl font-bold text-primary">4.6★</p>
            <p className="text-sm text-secondary-400 mt-1">Google rating</p>
          </div>
        </div>
      </section>
    </>
  );
}
