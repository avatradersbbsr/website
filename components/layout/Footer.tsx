import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import { categories } from "@/data/categories";

function AVALogoFooter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.6" />
      
      {/* AIA peaks in white/silver */}
      <path
        d="M 35,142 C 35,142 55,50 78,50 C 100,50 90,140 100,140 C 110,140 100,50 122,50 C 145,50 165,142 165,142"
        stroke="#ffffff"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Red Cross Swoosh */}
      <path
        d="M 15,108 C 50,96 100,78 185,82 C 100,73 50,88 15,100 Z"
        fill="#E5191C"
      />
      
      {/* Red "I" vertical stroke */}
      <line x1="100" y1="140" x2="100" y2="76" stroke="#E5191C" strokeWidth="12" strokeLinecap="round" />
      
      {/* Red dot above "I" */}
      <circle cx="100" cy="62" r="10" fill="#E5191C" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-300 border-t border-primary-950">
      <div className="container-wide py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <AVALogoFooter className="h-10 w-10" />
            <span className="font-display text-lg font-bold text-white">
              AVA Traders
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-secondary-400">
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
                <Link href={`/products?category=${cat.slug}`} className="hover:text-gold-400 transition-colors">
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
            <li><Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-gold-400 transition-colors">All Products</Link></li>
            <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
            {siteConfig.legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold text-white mb-4 tracking-wide uppercase">
            Visit or Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
              <span className="text-secondary-400">{siteConfig.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
              <a href={telLink(siteConfig.contact.phonePrimary)} className="text-secondary-400 hover:text-gold-400">
                {siteConfig.contact.phonePrimary}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary-400 hover:text-gold-400">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold-400" aria-hidden />
              <span className="text-secondary-400">
                {siteConfig.contact.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-950">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary-500">
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
