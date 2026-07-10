"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-card hover:bg-primary-600 transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <a
        href={telLink(siteConfig.contact.phonePrimary)}
        aria-label="Call AVA Traders"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-card hover:bg-primary-600 transition-colors"
      >
        <Phone className="h-6 w-6" />
      </a>

      <a
        href={whatsappLink("Hi AVA Traders, I'd like to know more about your products.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AVA Traders on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card hover:brightness-95 transition-all animate-float"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.15.35-.371.523-.556.174-.185.232-.317.35-.529.116-.198.06-.371-.037-.52-.098-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.03 3.1 4.92 4.223 2.89 1.124 2.89.75 3.41.703.52-.05 1.694-.693 1.933-1.363.24-.669.24-1.239.169-1.363-.074-.124-.272-.198-.57-.347zM12.023 22.5h-.005a10.435 10.435 0 01-5.32-1.456l-.382-.227-3.955 1.038 1.06-3.85-.25-.394A10.44 10.44 0 011.5 12.023C1.495 6.211 6.211 1.495 12.024 1.5c2.786.001 5.408 1.086 7.379 3.058a10.35 10.35 0 013.05 7.377c-.005 5.813-4.72 10.53-10.43 10.565z" />
    </svg>
  );
}
