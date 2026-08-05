"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star, Award, HeartHandshake, Armchair, HeartPulse, Activity } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";
import { useContactModal } from "@/components/shared/ContactModalContext";

function CountUp({ end, duration = 1500, decimals = 0, suffix = "" }: { end: number; duration?: number; decimals?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const heroChairs = [
  {
    name: "AM-999 Luxury Premium Massage Chair",
    image: "/images/products/massage-chairs/am-999-luxury-premium/1.jpeg",
    price: "₹2,45,000",
    slug: "am-999-luxury-premium"
  },
  {
    name: "A-710-2 Classic Premium 4D Massage Chair",
    image: "/images/products/massage-chairs/a-710-2-classic-premium-4d/1.jpeg",
    price: "₹2,80,000",
    slug: "a-710-2-classic-premium-4d"
  },
  {
    name: "Z-91 Ultra Luxury Massage Chair",
    image: "/images/products/massage-chairs/z-91-ultra-luxury/1.jpeg",
    price: "₹2,20,000",
    slug: "z-91-ultra-luxury"
  },
  {
    name: "RC-2 Economic Premium Massage Chair",
    image: "/images/products/massage-chairs/rc-2-economic-premium/1.jpeg",
    price: "₹1,25,000",
    slug: "rc-2-economic-premium"
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { openModal } = useContactModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroChairs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary-900 pt-6 pb-8 lg:pt-8 lg:pb-10">
      {/* Decorative Brand SVG background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#322A90" stopOpacity="1" />
              <stop offset="100%" stopColor="#0D1440" stopOpacity="1" />
            </radialGradient>
          </defs>
          <path d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" fill="url(#grad1)" />
        </svg>
      </div>

      {/* Modern ambient lighting */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-primary/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left copy column */}
        <div className="lg:col-span-5 flex flex-col items-start animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-[11px] font-semibold text-accent tracking-wide uppercase backdrop-blur-md">
            <Star className="h-3 w-3 fill-accent text-accent animate-pulse" /> Bhubaneswar&apos;s Premium Wellness Showroom
          </div>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-display font-extrabold text-white leading-[1.1] tracking-tight text-balance">
            Bhubaneswar&apos;s Finest
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary-200 to-accent bg-[length:200%_auto] animate-shimmer">
              Luxury Massage Chairs.
            </span>
          </h1>

          <p className="mt-2.5 text-secondary-200 text-sm leading-relaxed max-w-xl text-balance">
            Discover Odisha&apos;s ultimate collection of premium 3D/4D zero-gravity massage chairs, wellness equipment, and elite body massagers. Visit our Puri Bypass Road showroom for a free trial.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link
              href="/products?category=massage-chairs"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-bold shadow-glow-accent hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Massage Chairs <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/20 text-white px-6 py-3 text-sm font-bold hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Book Showroom Trial
            </button>
          </div>

          {/* Premium Trust Highlights */}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-semibold text-secondary-300">
            <span className="flex items-center gap-1">
              <span className="text-accent text-[12px]">★</span> Showroom Tested Quality
            </span>
            <span className="flex items-center gap-1">
              <span className="text-accent text-[12px]">✓</span> Direct Local Support & Service
            </span>
            <span className="flex items-center gap-1">
              <span className="text-accent text-[12px]">🚚</span> Safe Odisha-Wide Shipping
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-4 w-full border-t border-white/10 pt-3.5 text-white/80">
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-xl sm:text-2xl font-bold text-accent">
                <CountUp end={15} suffix="+ Yrs" />
              </span>
              <span className="text-[10px] text-secondary-300 uppercase tracking-wider font-semibold">Showroom Legacy</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-xl sm:text-2xl font-bold text-primary-200">
                <CountUp end={22} suffix="+" />
              </span>
              <span className="text-xs text-secondary-300 uppercase tracking-wider font-medium">Premium Models</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-primary-200">
                <CountUp end={4.6} decimals={1} suffix="★" />
              </span>
              <span className="text-xs text-secondary-300 uppercase tracking-wider font-medium">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Right graphical composition column - interactive product carousel */}
        <div className="lg:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0 animate-fade-in [animation-delay:200ms]">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[320px] xl:max-w-[360px] aspect-[3/4] mx-auto">
            {/* Background glowing card */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-800/60 via-secondary-700/70 to-secondary-900 border border-white/10 shadow-glow overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
            </div>

            {/* Carousel Inner */}
            <div className="absolute inset-3 rounded-xl flex flex-col justify-between overflow-hidden z-10">
              {/* Slide image area */}
              <div className="relative flex-1 w-full rounded-lg overflow-hidden group bg-gradient-to-b from-white/95 to-secondary-100/80">
                {heroChairs.map((slide, idx) => (
                  <Link
                    key={idx}
                    href={`/products/${slide.slug}`}
                    className={cn(
                      "absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out p-3",
                      activeSlide === idx 
                        ? "opacity-100 scale-100 pointer-events-auto z-10" 
                        : "opacity-0 scale-95 pointer-events-none z-0"
                    )}
                  >
                    {/* Floating price */}
                    <div className="absolute bottom-2 right-2 bg-accent text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold shadow-glow-accent z-30">
                      {slide.price}
                    </div>

                    <ProductImageWithFallback
                      src={slide.image}
                      alt={slide.name}
                      category="massage-chairs"
                      className="h-full w-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                      priority={true}
                      unoptimized={true}
                    />
                  </Link>
                ))}
              </div>

              {/* Slide info bar */}
              <div className="mt-2.5 flex items-center justify-between px-1">
                <h3 className="font-display font-bold text-white text-[11px] sm:text-xs leading-tight truncate max-w-[75%]">
                  {heroChairs[activeSlide].name}
                </h3>
                <Link 
                  href={`/products/${heroChairs[activeSlide].slug}`}
                  className="text-[10px] font-semibold text-accent hover:underline flex items-center gap-0.5 shrink-0"
                >
                  View <ArrowRight className="h-2.5 w-2.5" />
                </Link>
              </div>
              
              {/* Dots */}
              <div className="flex justify-center gap-1.5 mt-1.5 pb-1">
                {heroChairs.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      activeSlide === idx ? "w-5 bg-accent" : "w-1.5 bg-white/25"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
