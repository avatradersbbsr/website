import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-300 border-t border-primary-950">
      <div className="container-wide py-10 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="AVA Traders Logo"
              width={40}
              height={40}
              className="rounded-full object-cover border border-secondary-800"
            />
            <span className="font-display text-lg font-bold text-white">
              AVA Traders
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-secondary-300">
            {siteConfig.tagline}. Bhubaneswar&apos;s trusted showroom for massage chairs, leg
            massagers and health care products since 2010.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <SocialIcon href={siteConfig.contact.social.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={siteConfig.contact.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={siteConfig.contact.social.youtube} label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wide uppercase">
            Shop by Category
          </h3>
          <ul className="space-y-2.5 text-sm">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products?category=${cat.slug}`} className="text-secondary-300 hover:text-white transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wide uppercase">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="text-secondary-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/products" className="text-secondary-300 hover:text-white transition-colors">All Products</Link></li>
            <li><Link href="/contact" className="text-secondary-300 hover:text-white transition-colors">Contact Us</Link></li>
            {siteConfig.legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-secondary-300 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 pt-4 md:pt-0 border-t border-secondary-800/60 md:border-t-0">
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wide uppercase">
            Visit or Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-300" aria-hidden />
              <span className="text-secondary-300">{siteConfig.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent-300" aria-hidden />
              <a href={telLink(siteConfig.contact.phonePrimary)} className="text-secondary-300 hover:text-accent-300">
                {siteConfig.contact.phonePrimary}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent-300" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary-300 hover:text-accent-300">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent-300" aria-hidden />
              <span className="text-secondary-300">
                {siteConfig.contact.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-950">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary-400">
          <p>© {new Date().getFullYear()} AVA Traders. All rights reserved. GSTIN: {siteConfig.contact.gstin}</p>
          <p>Designed &amp; built for a premium wellness retail experience.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-850/50 text-secondary-400 hover:bg-gold hover:text-secondary-900 transition-colors duration-300"
    >
      {children}
    </a>
  );
}
