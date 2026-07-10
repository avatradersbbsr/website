import Link from "next/link";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary-700">
      {/* Logo-inspired wave motif */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -100 400 Q 150 550, 300 250 Q 400 50, 500 300 Q 600 500, 750 200 Q 900 -50, 1100 300 Q 1200 450, 1350 200"
          stroke="#1E2A78"
          strokeWidth="160"
          fill="none"
        />
        <line x1="-100" y1="300" x2="1350" y2="250" stroke="#E63946" strokeWidth="40" opacity="0.5" />
      </svg>

      {/* Accent glow orbs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" aria-hidden />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl" aria-hidden />

      <div className="container-wide relative z-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-primary-200 tracking-wide uppercase backdrop-blur-sm border border-white/10">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> Bhubaneswar&apos;s Wellness Showroom Since 2010
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white leading-[1.1] text-balance">
            Recovery, built into
            <br />
            <span className="text-accent">your everyday</span> routine.
          </h1>

          <p className="mt-6 text-secondary-200 text-lg leading-relaxed max-w-lg">
            Massage chairs, leg massagers and health care products —
            chosen, tested and stocked at our Bhubaneswar showroom, backed by a
            team you can actually call.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3.5 font-semibold shadow-glow-accent hover:bg-accent-500 transition-colors"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink("Hi AVA Traders, I'd like some help choosing a product.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-secondary-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-300" /> Showroom-tested products
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-300" /> Local after-sales support
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent-300" /> 4.6★ rated showroom
            </span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-700/60 via-secondary-600 to-secondary-800 border border-white/10 shadow-card flex items-center justify-center overflow-hidden">
            {/* Decorative accent arc */}
            <div className="absolute -top-20 -right-20 w-80 h-80 border-[3px] border-accent/20 rounded-full" aria-hidden />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 border-[2px] border-primary-300/15 rounded-full" aria-hidden />

            <div className="text-center px-8 relative z-10">
              <p className="font-display text-6xl font-bold text-accent">15+</p>
              <p className="text-secondary-300 mt-2 text-sm uppercase tracking-wide">
                Years serving Bhubaneswar
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                <StatTile value="22+" label="Products in catalogue" />
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
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
      <p className="text-2xl font-display font-bold text-white">{value}</p>
      <p className="text-xs text-secondary-300 mt-1">{label}</p>
    </div>
  );
}
