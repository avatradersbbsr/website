import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";
import { categories } from "@/data/categories";

function AVALogoFooter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.2" />
      <path
        d="M 30 140 Q 55 160, 75 90 Q 85 55, 100 100 Q 115 145, 130 90 Q 145 40, 170 140"
        stroke="#A1A9DF"
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

export default function Footer() {
  return (
    <footer className="bg-secondary-700 text-secondary-100">
      <div className="container-wide py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <AVALogoFooter className="h-10 w-10" />
            <span className="font-display text-lg font-semibold text-white">
              AVA Traders
            </span>
          </Link>
          <p className="mt-4 text-sm text-secondary-300 leading-relaxed">
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
          <h3 className="font-display text-sm font-semibold text-white mb-4 tracking-wide uppercase">
            Shop by Category
          </h3>
          <ul className="space-y-2.5 text-sm">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products?category=${cat.slug}`} className="text-secondary-300 hover:text-accent-300 transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white mb-4 tracking-wide uppercase">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="text-secondary-300 hover:text-accent-300 transition-colors">About Us</Link></li>
            <li><Link href="/products" className="text-secondary-300 hover:text-accent-300 transition-colors">All Products</Link></li>
            <li><Link href="/contact" className="text-secondary-300 hover:text-accent-300 transition-colors">Contact Us</Link></li>
            {siteConfig.legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-secondary-300 hover:text-accent-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white mb-4 tracking-wide uppercase">
            Visit or Contact
          </h3>
          <ul className="space-y-3 text-sm text-secondary-300">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-400" aria-hidden />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent-400" aria-hidden />
              <a href={telLink(siteConfig.contact.phonePrimary)} className="hover:text-accent-300">
                {siteConfig.contact.phonePrimary}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent-400" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent-300">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent-400" aria-hidden />
              <span>
                {siteConfig.contact.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-600">
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
      className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-600 text-secondary-200 hover:bg-accent hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
