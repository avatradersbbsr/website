import type { Metadata } from "next";
import { ShieldCheck, Target, Eye, Award, Calendar, BadgePercent } from "lucide-react";
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
  { icon: Award, title: "Local Accountability", text: "You can walk into our showroom or call us directly. No call centres, no disappearing after checkout." },
];

const timeline = [
  { year: "2010", title: "Inception in Khorda", desc: "Started as a small proprietorship offering body massagers and basic health fitness equipment in Khorda, Odisha." },
  { year: "2015", title: "Portfolio Expansion", desc: "Introduced specialized foot massagers and target therapy devices to cater to rising wellness demands." },
  { year: "2020", title: "Dedicated Showroom", desc: "Relocated to a spacious dedicated showroom on Puri Bypass Road, Badagada, Bhubaneswar to allow customers to try before they buy." },
  { year: "2026", title: "Modern Premium Overhaul", desc: "Now Bhubaneswar's leading premium wellness retail showroom offering zero-gravity massage chairs and AI-powered massagers." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />

      {/* Split premium Hero banner */}
      <section className="bg-secondary-900 py-20 md:py-28 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[40%] h-[80%] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[60%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent tracking-wide uppercase">
              Our Legacy
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              A showroom built around trying things before you buy them
            </h1>
            <p className="mt-4 text-secondary-200 text-lg leading-relaxed max-w-xl">
              Since 2010, AVA Traders has helped the residents of Bhubaneswar find recovery and comfort in their daily routines.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="w-full aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
              <svg className="w-28 h-28 text-accent/30" viewBox="0 0 200 200">
                <path d="M 30 140 Q 55 160, 75 90 Q 85 55, 100 100 Q 115 145, 130 90 Q 145 40, 170 140" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="25" y1="100" x2="175" y2="85" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <circle cx="105" cy="72" r="6" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="section-y container-wide grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-secondary-500 leading-relaxed text-base">
          <h2 className="font-display text-3xl font-extrabold text-secondary-700">Our Story</h2>
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

        <div className="grid gap-6">
          <div className="rounded-2xl bg-white p-6 border border-secondary-100 shadow-soft hover-lift">
            <h3 className="flex items-center gap-2 font-display font-bold text-secondary-700 text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary">
                <Target className="h-4.5 w-4.5" />
              </span>
              Our Mission
            </h3>
            <p className="mt-3 text-sm text-secondary-400 leading-relaxed">
              To make genuine wellness and recovery equipment accessible to households across
              Odisha, backed by honest advice and support that doesn&apos;t end at the sale.
            </p>
          </div>
          
          <div className="rounded-2xl bg-white p-6 border border-secondary-100 shadow-soft hover-lift">
            <h3 className="flex items-center gap-2 font-display font-bold text-secondary-700 text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent">
                <Eye className="h-4.5 w-4.5" />
              </span>
              Our Vision
            </h3>
            <p className="mt-3 text-sm text-secondary-400 leading-relaxed">
              To be the most trusted name in health and wellness retail in Odisha — known as much
              for after-sales support as for the products on our floor.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="section-y bg-primary-50/30">
        <div className="container-wide">
          <SectionHeading eyebrow="Our Journey" title="The Story of Growth" />
          
          <div className="mt-16 relative max-w-4xl mx-auto">
            {/* Center Line for desktop, Left Line for mobile */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 timeline-line transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={item.year} className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline point */}
                  <div className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center h-5 w-5 rounded-full bg-accent border-[3px] border-white shadow-soft z-10" />
                  
                  {/* Timeline Card */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0 md:px-6">
                    <div className="rounded-2xl bg-white p-6 border border-secondary-100 shadow-soft hover-lift">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-accent mb-2">
                        <Calendar className="h-3 w-3" /> {item.year}
                      </span>
                      <h4 className="font-display font-bold text-secondary-700 text-lg">{item.title}</h4>
                      <p className="mt-2 text-sm text-secondary-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-y bg-white">
        <div className="container-wide">
          <SectionHeading eyebrow="What We Stand For" title="Our Core Values" />
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-canvas border border-secondary-100 p-8 hover-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display font-bold text-secondary-700 text-lg">{v.title}</h3>
                <p className="mt-3 text-sm text-secondary-400 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glassmorphic Stats Section */}
      <section className="section-y container-wide">
        <div className="rounded-3xl bg-secondary-900 px-8 py-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient(circle at 100% 0%, rgba(230,57,70,0.1), transparent 60%)" />
          
          <div className="relative z-10 grid sm:grid-cols-3 gap-8 text-center">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300">
              <p className="font-display text-4xl font-extrabold text-accent">15+</p>
              <p className="text-secondary-300 mt-2 text-sm font-semibold uppercase tracking-wider">Years of Trust</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300">
              <p className="font-display text-4xl font-extrabold text-primary-200">3</p>
              <p className="text-secondary-300 mt-2 text-sm font-semibold uppercase tracking-wider">Curated Categories</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300">
              <p className="font-display text-4xl font-extrabold text-primary-200">4.6★</p>
              <p className="text-secondary-300 mt-2 text-sm font-semibold uppercase tracking-wider">Google rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
