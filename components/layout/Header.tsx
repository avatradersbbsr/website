"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

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
    <header className="sticky top-0 z-50 w-full glass shadow-soft">
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <AVALogo className="h-11 w-11" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-semibold text-secondary-700">
              AVA <span className="text-accent">Traders</span>
            </span>
            <span className="text-[11px] uppercase tracking-wide text-secondary-400 hidden sm:block">
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
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-secondary-600 hover:text-primary hover:bg-primary-50 transition-colors"
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Products <ChevronDown className="h-4 w-4" aria-hidden />
            </button>
            {megaOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[480px]">
                <div className="rounded-2xl bg-white shadow-card border border-secondary-100 p-6 grid grid-cols-1 gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products?category=${cat.slug}`}
                      className="rounded-xl p-3 hover:bg-primary-50 transition-colors group"
                    >
                      <p className="font-semibold text-sm text-secondary-700 group-hover:text-primary">
                        {cat.name}
                      </p>
                      <p className="text-xs text-secondary-400 mt-0.5 line-clamp-1">
                        {cat.description}
                      </p>
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="text-center mt-1 text-sm font-semibold text-primary hover:underline py-2"
                  >
                    View all products →
                  </Link>
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
            className="inline-flex items-center gap-2 rounded-full bg-secondary-700 text-white px-4 py-2.5 text-sm font-semibold hover:bg-secondary-600 transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </a>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-5 py-2.5 text-sm font-semibold shadow-glow hover:bg-primary-600 transition-colors"
          >
            Shop Products
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-secondary-700"
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
        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
        active ? "text-primary bg-primary-50" : "text-secondary-600 hover:text-primary hover:bg-primary-50"
      )}
    >
      {children}
    </Link>
  );
}
