"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";
import { formatINR } from "@/lib/utils";

interface StickyMobileEnquiryProps {
  name: string;
  price: number;
}

export default function StickyMobileEnquiry({ name, price }: StickyMobileEnquiryProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 border-t border-secondary-100 p-4 shadow-card backdrop-blur-md animate-fade-up">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-secondary-400 truncate">{name}</p>
          <p className="text-sm font-extrabold text-secondary-700 mt-0.5">{formatINR(price)}</p>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={telLink(siteConfig.contact.phonePrimary)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-700 text-white shadow-soft hover:bg-secondary-600 transition-colors"
            aria-label="Call Now"
          >
            <Phone className="h-4 w-4" />
          </a>
          
          <a
            href={whatsappLink(`Hi, I'm interested in the ${name} (${formatINR(price)}). Please share more details.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-xs font-bold shadow-soft hover:brightness-95 transition-all"
          >
            <MessageCircle className="h-4 w-4" /> Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
