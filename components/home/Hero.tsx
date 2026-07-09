import Link from "next/link";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary-700">
      {/* Signature recline-arc motif: echoes the zero-gravity recline curve of a massage chair */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -100 500 C 250 620, 500 180, 900 260 C 1100 300, 1200 200, 1350 220"
          stroke="#1A8E3E"
          strokeWidth="140"
          fill="none"
        />
      </svg>

      <div className="container-wide relative z-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-primary-200 tracking-wide uppercase">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> Bhubaneswar&apos;s Wellness Showroom Since 2010
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.4rem] font-display font-semibold text-white leading-[1.1] text-balance">
            Recovery, built into
            <br />
            <span className="text-primary-300">your everyday</span> routine.
          </h1>

          <p className="mt-6 text-secondary-200 text-lg leading-relaxed max-w-lg">
            Massage chairs, foot massagers, massage guns and fitness equipment —
            chosen, tested and stocked at our Bhubaneswar showroom, backed by a
            team you can actually call.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-6 py-3.5 font-semibold shadow-glow hover:bg-primary-600 transition-colors"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink("Hi AVA Traders, I'd like some help choosing a product.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-secondary-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-300" /> Showroom-tested products
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-300" /> Local after-sales support
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-300" /> 4.6★ rated showroom
            </span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-900/40 via-secondary-600 to-secondary-800 border border-white/10 shadow-card flex items-center justify-center">
            <div className="text-center px-8">
              <p className="font-display text-6xl font-semibold text-primary-300">15+</p>
              <p className="text-secondary-300 mt-2 text-sm uppercase tracking-wide">
                Years serving Bhubaneswar
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                <StatTile value="36+" label="Products in catalogue" />
                <StatTile value="4.6★" label="Google rating" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <p className="text-2xl font-display font-semibold text-white">{value}</p>
      <p className="text-xs text-secondary-300 mt-1">{label}</p>
    </div>
  );
}
