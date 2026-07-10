"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Armchair, Activity, HeartPulse } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "massage-chairs": Armchair,
  "leg-massagers": Activity,
  "health-care-products": HeartPulse,
};

function AVALogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="none" stroke="#1E2A78" strokeWidth="1.5" opacity="0.3" />
      <path
        d="M 30 140 Q 55 160, 75 90 Q 85 55, 100 100 Q 115 145, 130 90 Q 145 40, 170 140"
        stroke="#1E2A78"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="25" y1="100" x2="175" y2="85" stroke="#E63946" strokeWidth="5" strokeLinecap="round" />
      <circle cx="105" cy="72" r="5" fill="#E63946" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full glass-premium shadow-soft border-b border-primary-50">
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <AVALogo className="h-11 w-11 hover:scale-105 transition-transform" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold text-primary">
              AVA <span className="text-accent">Traders</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-secondary-400 hidden sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-secondary-600 hover:text-primary hover:bg-primary-50 transition-colors"
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Products <ChevronDown className={cn("h-4 w-4 transition-transform", megaOpen && "rotate-180")} aria-hidden />
            </button>
            {megaOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px]">
                <div className="rounded-2xl bg-white shadow-card border border-primary-50 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {categories.map((cat) => {
                      const Icon = categoryIcons[cat.slug] || Armchair;
                      return (
                        <Link
                          key={cat.slug}
                          href={`/products?category=${cat.slug}`}
                          className="flex flex-col gap-3 rounded-xl p-4 border border-secondary-50 hover:border-primary-100 hover:bg-primary-50/30 transition-all duration-300 group"
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="font-bold text-sm text-secondary-700 group-hover:text-primary transition-colors">
                              {cat.name}
                            </p>
                            <p className="text-xs text-secondary-400 mt-1 line-clamp-2 leading-relaxed">
                              {cat.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-secondary-50 flex items-center justify-between">
                    <p className="text-xs text-secondary-400">Discover Bhubaneswar&apos;s best recovery tools.</p>
                    <Link
                      href="/products"
                      className="text-xs font-bold text-accent hover:text-accent-600 hover:underline flex items-center gap-1"
                    >
                      View all products →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink href="/about" active={pathname === "/about"}>
            About Us
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telLink(siteConfig.contact.phonePrimary)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary-700 text-secondary-700 px-4 py-2 text-sm font-bold hover:bg-secondary-700 hover:text-white transition-all duration-300"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </a>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-sm font-bold shadow-glow-accent hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            Shop Products
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-secondary-700 hover:bg-secondary-50"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-secondary-100 bg-white">
          <nav className="container-wide flex flex-col py-4 gap-1" aria-label="Mobile">
            <Link href="/" className="px-3 py-2.5 rounded-lg hover:bg-primary-50 font-medium" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="px-3 py-2.5 rounded-lg hover:bg-primary-50 font-medium" onClick={() => setOpen(false)}>
              Products
            </Link>
            <div className="pl-6 flex flex-col gap-1 border-l ml-3 border-secondary-100">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  className="px-3 py-1.5 rounded-lg text-sm text-secondary-500 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link href="/about" className="px-3 py-2.5 rounded-lg hover:bg-primary-50 font-medium" onClick={() => setOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="px-3 py-2.5 rounded-lg hover:bg-primary-50 font-medium" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a
              href={telLink(siteConfig.contact.phonePrimary)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-5 py-3 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
        active ? "text-primary bg-primary-50" : "text-secondary-600 hover:text-primary hover:bg-primary-50"
      )}
    >
      {children}
    </Link>
  );
}
