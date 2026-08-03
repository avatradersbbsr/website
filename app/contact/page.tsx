"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/shared/EnquiryForm";
import MapSection from "@/components/home/MapSection";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact" }]} />

      {/* Overlapping Hero Banner */}
      <section className="bg-secondary-900 pt-20 pb-28 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(circle at 100% 0%, rgba(230,57,70,0.1), transparent 60%)" />
        <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent tracking-wide uppercase">
              Support Center
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              We&apos;re happy to help you choose right
            </h1>
            <p className="mt-4 text-secondary-200 text-base sm:text-lg max-w-lg">
              Call, WhatsApp, or drop by the showroom — whichever is easiest for you. Try out any massage chair or massager in person.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Cards Grid */}
      <section className="container-wide relative z-20 -mt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Overlapping Glassmorphic Enquiry Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-secondary-100 p-8 shadow-card hover:border-primary-100 transition-all duration-300 animate-scale-in">
            <h2 className="font-display text-2xl font-bold text-secondary-700 mb-1">Send an Enquiry</h2>
            <p className="text-sm text-secondary-400 mb-6">
              Fill this out and our team will get back to you, usually within a few hours during business hours.
            </p>
            <EnquiryForm />
          </div>

          {/* Interactive Action Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 animate-slide-in-right">
            
            {/* WhatsApp Card */}
            <a
              href={whatsappLink("Hi AVA Traders, I have a question about your products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl bg-white border border-secondary-100 p-6 shadow-soft hover-lift hover:border-green-200 hover:shadow-card group transition-all duration-300"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-bold text-secondary-700 group-hover:text-primary transition-colors">Chat on WhatsApp</p>
                <p className="text-xs text-secondary-400 mt-0.5">Fastest way to get pricing & brochures</p>
              </div>
              <ArrowRight className="h-4 w-4 text-secondary-300 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Call Card */}
            <a
              href={telLink(siteConfig.contact.phonePrimary)}
              className="flex items-center gap-5 rounded-2xl bg-white border border-secondary-100 p-6 shadow-soft hover-lift hover:border-primary-200 hover:shadow-card group transition-all duration-300"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Phone className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-bold text-secondary-700 group-hover:text-primary transition-colors">Call Showroom</p>
                <p className="text-xs text-secondary-400 mt-0.5">{siteConfig.contact.phonePrimary} / {siteConfig.contact.phoneSecondary}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-secondary-300 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-5 rounded-2xl bg-white border border-secondary-100 p-6 shadow-soft hover-lift hover:border-primary-200 hover:shadow-card group transition-all duration-300"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-bold text-secondary-700 group-hover:text-primary transition-colors">Email Us</p>
                <p className="text-xs text-secondary-400 mt-0.5">{siteConfig.contact.email}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-secondary-300 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Address Info */}
            <div className="flex items-start gap-5 rounded-2xl bg-canvas border border-secondary-100 p-6 shadow-soft hover-lift">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-secondary-700">Showroom Address</p>
                <p className="text-sm text-secondary-400 mt-1 leading-relaxed">{siteConfig.contact.address}</p>
              </div>
            </div>

            {/* Clock Info */}
            <div className="flex items-start gap-5 rounded-2xl bg-canvas border border-secondary-100 p-6 shadow-soft hover-lift">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-secondary-700">Business Hours</p>
                <div className="text-sm text-secondary-400 mt-1 space-y-0.5">
                  {siteConfig.contact.hours.map((h) => (
                    <p key={h.day}>
                      <span className="font-medium">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
