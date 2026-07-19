"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star, Award, HeartHandshake, Armchair, HeartPulse, Activity } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import ProductImageWithFallback from "@/components/shared/ProductImageWithFallback";

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

function Counter({ target, duration = 1200, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, Math.floor(duration / end));
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

function DecimalCounter({ target, duration = 1200, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.floor(target * 10);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, Math.floor(duration / end));
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{(count / 10).toFixed(1)}{suffix}</span>;
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroChairs.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-950 to-secondary-900 pt-3 pb-6 lg:pt-12 lg:pb-20 border-b border-primary-950">
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
      <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] bg-accent/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Category selector row at the top (Desktop Only) */}
      <div className="container-wide relative z-10 mb-6 lg:mb-8 hidden md:block animate-fade-in">
        <div className="flex flex-wrap items-center justify-center gap-3 py-2 px-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto">
          <span className="text-[10px] font-extrabold text-secondary-300 uppercase tracking-widest mr-2">Top Categories:</span>
          <Link
            href="/products?category=massage-chairs"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-white/5 border border-white/5 hover:bg-accent hover:border-accent hover:shadow-glow-accent transition-all duration-300"
          >
            <Armchair className="h-3.5 w-3.5 text-accent" /> Massage Chairs
          </Link>
          <Link
            href="/products?category=leg-massagers"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-white/5 border border-white/5 hover:bg-accent hover:border-accent hover:shadow-glow-accent transition-all duration-300"
          >
            <Activity className="h-3.5 w-3.5 text-accent" /> Leg Massagers
          </Link>
          <Link
            href="/products?category=health-care-products"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-white/5 border border-white/5 hover:bg-accent hover:border-accent hover:shadow-glow-accent transition-all duration-300"
          >
            <HeartPulse className="h-3.5 w-3.5 text-accent" /> Health Care Products
          </Link>
        </div>
      </div>

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-5 lg:gap-12 items-center">
        {/* Left copy column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-gold-500/30 px-3 py-0.5 sm:py-1 text-[8px] sm:text-[11px] font-bold text-gold-300 tracking-wider uppercase backdrop-blur-md shadow-glow-gold/10">
            <Star className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 fill-gold text-gold animate-pulse" /> AVA Traders — Premium Showroom
          </div>

          <h1 className="mt-2.5 sm:mt-4 text-2xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight text-balance">
            Elevate your recovery.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-200 to-gold bg-[length:200%_auto] animate-shimmer">
              Reclaim your energy.
            </span>
          </h1>

          <p className="mt-2 sm:mt-4 text-secondary-200 text-[11px] sm:text-base lg:text-lg leading-relaxed max-w-xl text-balance">
            Experience Odisha&apos;s finest collection of zero-gravity massage chairs, 3D leg massagers, and targeted therapy devices. Tested by experts, backed by direct local warranty from AVA Traders.
          </p>

          <div className="mt-3.5 sm:mt-5 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full max-w-md lg:max-w-none">
            <Link
              href="/products"
              className="group inline-flex flex-1 sm:flex-initial items-center justify-center gap-1 sm:gap-2 rounded-full bg-accent text-white px-4 sm:px-7 py-2 sm:py-3 text-[10px] sm:text-sm font-bold shadow-glow-accent hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Explore Models <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={whatsappLink("Hi AVA Traders, I'd like to book a showroom visit to try your products.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1 sm:gap-2 rounded-full bg-white/5 border border-white/20 text-white px-4 sm:px-7 py-2 sm:py-3 text-[10px] sm:text-sm font-bold hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm text-center"
            >
              Book Trial
            </a>
          </div>

          <div className="mt-5 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 w-full border-t border-white/10 pt-4 sm:pt-5 text-white/80">
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-sm sm:text-xl lg:text-2xl font-black text-gold-400">
                <Counter target={15} suffix="+" /> Yrs
              </span>
              <span className="text-[7px] sm:text-[10px] text-secondary-300 uppercase tracking-wider font-bold">Showroom Legacy</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-sm sm:text-xl lg:text-2xl font-black text-gold-400">
                <Counter target={22} suffix="+" /> Models
              </span>
              <span className="text-[7px] sm:text-[10px] text-secondary-300 uppercase tracking-wider font-bold">Tested & Ready</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-sm sm:text-xl lg:text-2xl font-black text-gold-400">
                <DecimalCounter target={4.8} suffix="★" /> Rating
              </span>
              <span className="text-[7px] sm:text-[10px] text-secondary-300 uppercase tracking-wider font-bold">Bhubaneswar Trust</span>
            </div>
          </div>
        </div>

        {/* Right graphical composition column - interactive product carousel */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-3 lg:mt-0 animate-fade-in [animation-delay:200ms]">
          <div className="relative w-full max-w-[215px] sm:max-w-[420px] aspect-square sm:aspect-[4/5] mx-auto">
            {/* Background glowing card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-850 via-secondary-800 to-secondary-900 border border-gold-500/20 shadow-glow-gold/20 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient(circle at 100% 0%, rgba(197,168,128,0.15), transparent 70%)" />
              <div className="absolute inset-0 bg-radial-gradient(circle at 0% 100%, rgba(30,42,120,0.25), transparent 70%)" />
            </div>

            {/* Overlapping glass stat panel 1 (Desktop Only) */}
            <div className="absolute top-6 -left-6 rounded-2xl bg-white/10 border border-gold-500/20 p-3 shadow-glow-gold/10 backdrop-blur-xl animate-float hidden sm:flex items-center gap-3 z-20">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold text-primary-950 shadow-glow-gold">
                <Award className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] uppercase font-semibold text-gold-300 tracking-wider">Showroom Tested</p>
                <p className="text-[11px] font-bold text-white">100% Verified Quality</p>
              </div>
            </div>

            {/* Overlapping glass stat panel 2 (Desktop Only) */}
            <div className="absolute bottom-12 -right-6 rounded-2xl bg-white/10 border border-gold-500/20 p-3 shadow-glow-gold/10 backdrop-blur-xl animate-float [animation-delay:2s] hidden sm:flex items-center gap-3 z-20">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white shadow-glow">
                <HeartHandshake className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] uppercase font-semibold text-gold-300 tracking-wider">After-Sales</p>
                <p className="text-[11px] font-bold text-white">Direct Local Support</p>
              </div>
            </div>

            {/* Carousel Inner Enclosure */}
            <div className="absolute inset-1.5 sm:inset-4 rounded-2xl bg-secondary-950/90 border border-gold-500/10 flex flex-col justify-between p-2 sm:p-4 overflow-hidden z-10">
              {/* Slide image area */}
              <Link 
                href={`/products/${heroChairs[activeSlide].slug}`}
                className="relative h-[72%] w-full bg-gradient-to-b from-white to-secondary-50 rounded-xl overflow-hidden group shadow-glow-gold/10 flex items-center justify-center border border-gold-500/20"
              >
                {/* Floating model tag */}
                <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-secondary-900/90 border border-gold-500/30 rounded-full px-1.5 py-0.5 sm:px-3 sm:py-1 text-[7px] sm:text-[9px] font-bold text-gold uppercase tracking-wider backdrop-blur-sm z-30">
                  Featured
                </div>
                
                {/* Floating price */}
                <div className="absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 bg-gold text-primary-950 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-black shadow-glow z-30">
                  {heroChairs[activeSlide].price}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 0.95, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="relative w-full h-full p-2 sm:p-6 flex items-center justify-center"
                  >
                    <ProductImageWithFallback
                      src={heroChairs[activeSlide].image}
                      alt={heroChairs[activeSlide].name}
                      category="massage-chairs"
                      priority
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </AnimatePresence>
              </Link>

              {/* Slide controls and title */}
              <div className="flex flex-col gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-white text-[10px] sm:text-sm leading-tight truncate max-w-[80%]">
                    {heroChairs[activeSlide].name}
                  </h3>
                  <Link 
                    href={`/products/${heroChairs[activeSlide].slug}`}
                    className="text-[9px] sm:text-[11px] font-semibold text-gold hover:underline flex items-center gap-0.5 shrink-0"
                  >
                    View <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </Link>
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                  {heroChairs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={cn(
                        "h-1 sm:h-1.5 rounded-full transition-all duration-300",
                        activeSlide === idx ? "w-4 sm:w-6 bg-gold" : "w-1 sm:w-1.5 bg-white/20"
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
