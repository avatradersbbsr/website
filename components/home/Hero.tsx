import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Award, HeartHandshake, CheckCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary-900 py-24 lg:py-32">
      {/* Decorative Brand SVG background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E2A78" stopOpacity="1" />
              <stop offset="100%" stopColor="#0D1440" stopOpacity="1" />
            </radialGradient>
          </defs>
          <path d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" fill="url(#grad1)" />
        </svg>
      </div>

      {/* Modern ambient lighting */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-primary/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left copy column */}
        <div className="lg:col-span-7 flex flex-col items-start animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold text-accent tracking-wide uppercase backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-accent text-accent animate-pulse" /> Bhubaneswar&apos;s Premium Wellness Showroom
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight text-balance">
            Elevate your recovery.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary-200 to-accent bg-[length:200%_auto] animate-shimmer">
              Reclaim your energy.
            </span>
          </h1>

          <p className="mt-6 text-secondary-200 text-lg sm:text-xl leading-relaxed max-w-xl text-balance">
            Experience Odisha&apos;s finest collection of zero-gravity massage chairs, 3D leg massagers, and targeted therapy devices. Tested by experts, backed by direct local warranty.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-8 py-4 font-bold shadow-glow-accent hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Collection <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={whatsappLink("Hi AVA Traders, I'd like to book a showroom visit to try your products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Book Showroom Trial
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 w-full border-t border-white/10 pt-8 text-white/80">
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-accent">15+ Yrs</span>
              <span className="text-xs text-secondary-300 uppercase tracking-wider font-medium">Showroom Legacy</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-primary-200">22+</span>
              <span className="text-xs text-secondary-300 uppercase tracking-wider font-medium">Premium Models</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-primary-200">4.6★</span>
              <span className="text-xs text-secondary-300 uppercase tracking-wider font-medium">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Right graphical composition column */}
        <div className="lg:col-span-5 relative lg:block flex items-center justify-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] mx-auto">
            {/* Background glowing card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-800/40 via-secondary-700/50 to-secondary-900/80 border border-white/10 shadow-card backdrop-blur-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-radial-gradient(circle at 100% 0%, rgba(230,57,70,0.15), transparent 70%)" />
              <div className="absolute inset-0 bg-radial-gradient(circle at 0% 100%, rgba(30,42,120,0.25), transparent 70%)" />
            </div>

            {/* Overlapping glass stat panel 1 */}
            <div className="absolute top-10 left-2 sm:-left-6 rounded-2xl bg-white/10 border border-white/20 p-4 shadow-card backdrop-blur-xl animate-float flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-glow-accent">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] uppercase font-semibold text-secondary-300 tracking-wider">Showroom Tested</p>
                <p className="text-xs font-bold text-white">100% Verified Quality</p>
              </div>
            </div>

            {/* Overlapping glass stat panel 2 */}
            <div className="absolute bottom-16 right-2 sm:-right-6 rounded-2xl bg-white/10 border border-white/20 p-4 shadow-card backdrop-blur-xl animate-float [animation-delay:2s] flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] uppercase font-semibold text-secondary-300 tracking-wider">After-Sales</p>
                <p className="text-xs font-bold text-white">Direct Local Support</p>
              </div>
            </div>

            {/* Center piece circle illustration placeholder / graphics overlay */}
            <div className="absolute inset-12 rounded-full border border-white/10 bg-gradient-to-tr from-secondary-900 to-primary-950 flex flex-col items-center justify-center text-center p-6 shadow-glow">
              <svg className="w-16 h-16 mb-3 animate-pulse" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.6" />
                <path
                  d="M 35,142 C 35,142 55,50 78,50 C 100,50 90,140 100,140 C 110,140 100,50 122,50 C 145,50 165,142 165,142"
                  stroke="#ffffff"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 15,108 C 50,96 100,78 185,82 C 100,73 50,88 15,100 Z"
                  fill="#E5191C"
                />
                <line x1="100" y1="140" x2="100" y2="76" stroke="#E5191C" strokeWidth="12" strokeLinecap="round" />
                <circle cx="100" cy="62" r="10" fill="#E5191C" />
              </svg>
              <h3 className="font-display font-bold text-white text-lg leading-tight">AVA Traders</h3>
              <p className="text-xs text-secondary-300 mt-1 uppercase tracking-wider font-semibold">ESTD. 2010</p>
              <div className="mt-4 flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <CheckCircle className="h-3 w-3 text-accent" />
                <span className="text-[10px] text-white font-medium uppercase tracking-wide">Authorized Dealer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
