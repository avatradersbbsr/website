import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="container-wide">
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-secondary-700 via-primary-700 to-secondary-700 px-5 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden relative">
        {/* Decorative accent orb */}
        <div className="absolute -right-10 -top-10 h-64 w-64 bg-accent/15 rounded-full blur-2xl" aria-hidden />
        <div className="absolute -left-20 -bottom-20 h-48 w-48 bg-primary-300/10 rounded-full blur-2xl" aria-hidden />

        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-balance">
            Not sure which product fits your needs?
          </h2>
          <p className="mt-3 text-secondary-300">
            Tell us a bit about who it&apos;s for — our team will recommend the right model
            over a quick WhatsApp chat or call.
          </p>
        </div>
        <div className="relative z-10 flex flex-wrap gap-4">
          <a
            href={whatsappLink("Hi AVA Traders, I need help choosing the right product.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3.5 font-semibold hover:bg-accent-500 transition-colors shadow-glow-accent"
          >
            Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
}
