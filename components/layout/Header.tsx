"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Armchair, Activity, HeartPulse } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { siteConfig, telLink } from "@/lib/site-config";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "massage-chairs": Armchair,
  "leg-massagers": Activity,
  "health-care-products": HeartPulse,
};
export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full glass-premium shadow-soft border-b border-primary-50">
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpeg"
            alt="AVA Traders Logo"
            width={44}
            height={44}
            className="rounded-full object-cover border border-secondary-100 hover:scale-105 transition-transform duration-300"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold text-primary">
              AVA <span className="text-accent">Traders</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-gold-600 hidden sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
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
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px]"
                >
                  <div className="rounded-2xl bg-white shadow-card border border-primary-50 p-6">
                    <div className="grid grid-cols-3 gap-4">
                      {categories.map((cat) => {
                        const Icon = categoryIcons[cat.slug] || Armchair;
                        return (
                          <Link
                            key={cat.slug}
                            href={`/products?category=${cat.slug}`}
                            className="flex flex-col gap-3 rounded-xl p-4 border border-secondary-50 hover:border-gold-300 hover:bg-gold-50/20 transition-all duration-300 group"
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
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
                </motion.div>
              )}
            </AnimatePresence>
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
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary-700 text-secondary-700 px-4 py-2 text-sm font-bold hover:bg-secondary-700 hover:text-white hover:border-secondary-700 transition-all duration-300"
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

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden p-2.5 rounded-xl text-secondary-700 hover:bg-secondary-50 transition-colors"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {open && (
          <>
             {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-secondary-900 lg:hidden"
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-xs sm:max-w-sm bg-white shadow-card p-6 flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-secondary-100">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo.jpeg"
                    alt="AVA Traders Logo"
                    width={36}
                    height={36}
                    className="rounded-full object-cover border border-secondary-100"
                  />
                  <span className="font-display font-bold text-lg text-primary">
                    AVA <span className="text-accent">Traders</span>
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl text-secondary-500 hover:bg-secondary-50 hover:text-secondary-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-1 py-6 flex-1">
                <Link
                  href="/"
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-bold transition-all",
                    pathname === "/" ? "bg-primary-50 text-primary" : "text-secondary-600 hover:bg-secondary-50"
                  )}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>

                {/* Collapsible Categories Section */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-secondary-600 hover:bg-secondary-50 text-left transition-colors"
                  >
                    <span>Products</span>
                    <ChevronDown className={cn("h-5 w-5 transition-transform text-secondary-400", mobileCategoriesOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {mobileCategoriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 flex flex-col gap-1 overflow-hidden"
                      >
                        {categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products?category=${cat.slug}`}
                            className="px-4 py-2.5 rounded-lg text-sm font-semibold text-secondary-500 hover:text-primary hover:bg-primary-50 transition-all"
                            onClick={() => setOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="px-4 py-2.5 rounded-lg text-sm font-bold text-accent hover:underline"
                          onClick={() => setOpen(false)}
                        >
                          View All Products →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-bold transition-all",
                    pathname === "/about" ? "bg-primary-50 text-primary" : "text-secondary-600 hover:bg-secondary-50"
                  )}
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-bold transition-all",
                    pathname === "/contact" ? "bg-primary-50 text-primary" : "text-secondary-600 hover:bg-secondary-50"
                  )}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile Drawer Footer Actions */}
              <div className="pt-6 border-t border-secondary-100 flex flex-col gap-3">
                <a
                  href={telLink(siteConfig.contact.phonePrimary)}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-secondary-750 py-3 text-sm font-bold text-secondary-700 hover:bg-secondary-50 transition-all"
                >
                  <Phone className="h-4 w-4" /> Call Showroom
                </a>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent text-white py-3.5 text-sm font-bold shadow-glow-accent hover:bg-accent-600 transition-all"
                  onClick={() => setOpen(false)}
                >
                  Shop Products
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-bold transition-colors",
        active ? "text-primary bg-primary-50" : "text-secondary-600 hover:text-primary hover:bg-primary-50"
      )}
    >
      {children}
    </Link>
  );
}
