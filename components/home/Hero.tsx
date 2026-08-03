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
    image: "/images/products/massage-chairs/am-999/1.png",
    price: "₹2,45,000",
    slug: "am-999-luxury-premium"
  },
  {
    name: "A-710-2 Classic Premium 4D Massage Chair",
    image: "/images/products/massage-chairs/a-710-2-classic-premium-4d/1.jpg",
    price: "₹2,80,000",
    slug: "a-710-2-classic-premium-4d"
  },
  {
    name: "Z-91 Ultra Luxury Massage Chair",
    image: "/images/products/massage-chairs/z-91-ultra-luxury/1.jpg",
    price: "₹2,20,000",
    slug: "z-91-ultra-luxury"
  },
  {
    name: "RC-2 Economic Premium Massage Chair",
    image: "/images/products/massage-chairs/rc-2-economic-premium/1.jpg",
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
    <section className="relative overflow-hidden bg-secondary-900 py-10 lg:py-14">
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

      {/* Category selector row at the top */}
      <div className="container-wide relative z-10 mb-6 animate-fade-in">
        <div className="flex flex-wrap items-center justify-center gap-4 py-3 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-4xl mx-auto">
          <span className="text-xs font-semibold text-secondary-300 uppercase tracking-widest mr-2">Categories:</span>
          <Link
            href="/products?category=massage-chairs"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:shadow-glow-accent transition-all duration-300"
          >
            <Armchair className="h-4.5 w-4.5 text-accent" /> Massage Chairs
          </Link>
          <Link
            href="/products?category=leg-massagers"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:shadow-glow-accent transition-all duration-300"
          >
            <Activity className="h-4.5 w-4.5 text-accent" /> Leg Massagers
          </Link>
          <Link
            href="/products?category=health-care-products"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:shadow-glow-accent transition-all duration-300"
          >
            <HeartPulse className="h-4.5 w-4.5 text-accent" /> Health Care
          </Link>
        </div>
      </div>

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left copy column */}
        <div className="lg:col-span-5 flex flex-col items-start animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold text-accent tracking-wide uppercase backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-accent text-accent animate-pulse" /> Bhubaneswar&apos;s Premium Wellness Showroom
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-5xl font-display font-extrabold text-white leading-[1.05] tracking-tight text-balance">
            Bhubaneswar&apos;s Finest
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary-200 to-accent bg-[length:200%_auto] animate-shimmer">
              Luxury Massage Chairs.
            </span>
          </h1>

          <p className="mt-3 text-secondary-200 text-sm sm:text-base leading-relaxed max-w-xl text-balance">
            Discover Odisha&apos;s ultimate collection of premium 3D/4D zero-gravity massage chairs, wellness equipment, and elite body massagers. Visit our Puri Bypass Road showroom for a free trial.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              href="/products?category=massage-chairs"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-8 py-4 font-bold shadow-glow-accent hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Massage Chairs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/20 text-white px-8 py-4 font-bold hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center"
            >
              Book Showroom Trial
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-6 w-full border-t border-white/10 pt-4 text-white/80">
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-accent">
                <CountUp end={15} suffix="+ Yrs" />
              </span>
              <span className="text-xs text-secondary-300 uppercase tracking-wider font-medium">Showroom Legacy</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-primary-200">
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
        <div className="lg:col-span-7 relative flex items-center justify-center mt-10 lg:mt-0 animate-fade-in [animation-delay:200ms]">
          <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[500px] aspect-[4/5] mx-auto">
            {/* Background glowing card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-800/40 via-secondary-700/50 to-secondary-900/80 border border-white/10 shadow-card backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient(circle at 100% 0%, rgba(230,57,70,0.15), transparent 70%)" />
              <div className="absolute inset-0 bg-radial-gradient(circle at 0% 100%, rgba(30,42,120,0.25), transparent 70%)" />
            </div>

            {/* Overlapping glass stat panel 1 */}
            <div className="absolute top-6 left-2 sm:-left-6 rounded-2xl bg-white/10 border border-white/20 p-3 shadow-card backdrop-blur-xl animate-float flex items-center gap-3 z-20">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-white shadow-glow-accent">
                <Award className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] uppercase font-semibold text-secondary-300 tracking-wider">Showroom Tested</p>
                <p className="text-[11px] font-bold text-white">100% Verified Quality</p>
              </div>
            </div>

            {/* Overlapping glass stat panel 2 */}
            <div className="absolute bottom-12 right-2 sm:-right-6 rounded-2xl bg-white/10 border border-white/20 p-3 shadow-card backdrop-blur-xl animate-float [animation-delay:2s] flex items-center gap-3 z-20">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                <HeartHandshake className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] uppercase font-semibold text-secondary-300 tracking-wider">After-Sales</p>
                <p className="text-[11px] font-bold text-white">Direct Local Support</p>
              </div>
            </div>

            {/* Carousel Inner Enclosure */}
            <div className="absolute inset-4 rounded-2xl bg-secondary-950/80 border border-white/5 flex flex-col justify-between p-4 overflow-hidden z-10">
              {/* Slide image area */}
              <Link 
                href={`/products/${heroChairs[activeSlide].slug}`}
                className="relative flex-1 w-full flex items-center justify-center bg-white rounded-xl overflow-hidden group shadow-inner"
              >
                {/* Floating model tag */}
                <div className="absolute top-3 left-3 bg-secondary-900/90 border border-white/10 rounded-full px-3 py-1 text-[9px] font-bold text-accent uppercase tracking-wider backdrop-blur-sm z-30">
                  Featured Chair
                </div>
                
                {/* Floating price */}
                <div className="absolute bottom-3 right-3 bg-primary text-white rounded-full px-3 py-1 text-xs font-bold shadow-glow z-30">
                  {heroChairs[activeSlide].price}
                </div>

                <ProductImageWithFallback
                  src={heroChairs[activeSlide].image}
                  alt={heroChairs[activeSlide].name}
                  category="massage-chairs"
                  className="h-full w-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  priority={true}
                />
              </Link>

              {/* Slide controls and title */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-white text-xs sm:text-sm leading-tight truncate max-w-[80%]">
                    {heroChairs[activeSlide].name}
                  </h3>
                  <Link 
                    href={`/products/${heroChairs[activeSlide].slug}`}
                    className="text-[11px] font-semibold text-accent hover:underline flex items-center gap-0.5 shrink-0"
                  >
                    View <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-1">
                  {heroChairs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        activeSlide === idx ? "w-6 bg-accent" : "w-1.5 bg-white/20"
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
