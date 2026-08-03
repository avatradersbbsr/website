"use client";

import { useEffect, useState } from "react";
import { X, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "./ContactModalContext";
import EnquiryForm from "./EnquiryForm";
import { products } from "@/data/products";
import ProductImageWithFallback from "./ProductImageWithFallback";
import { cn } from "@/lib/utils";

// Filter products to show in the carousel (massage chairs only)
const carouselProducts = products.filter((p) => p.category === "massage-chairs").slice(0, 5);

export default function ContactPopupModal() {
  const { isOpen, productName, openModal, closeModal } = useContactModal();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Auto-play the carousel inside the modal
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % carouselProducts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Auto-open modal on website visit (only once per session)
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPromoPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        openModal();
        sessionStorage.setItem("hasSeenPromoPopup", "true");
      }, 3000); // 3 seconds delay after load
      return () => clearTimeout(timer);
    }
  }, [openModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-secondary-900/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-secondary-100 flex flex-col lg:flex-row z-10 max-h-[90vh] lg:max-h-[85vh]"
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-secondary-50 text-secondary-500 hover:bg-secondary-100 hover:text-secondary-800 transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Mobile-Only Top Slide Banner (Stunning Visual on Mobile) */}
          <div className="lg:hidden w-full bg-gradient-to-r from-primary-950 to-secondary-900 text-white p-5 flex items-center justify-between border-b border-secondary-800 relative overflow-hidden shrink-0 pr-14">
            <div className="absolute top-[-25%] right-[-10%] w-[60%] h-[120%] bg-accent/25 rounded-full blur-[40px] pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-0.5">
              <span className="inline-flex self-start items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/35 border border-accent/40 text-[9px] font-bold text-accent-100 uppercase tracking-widest">
                ★ Flagship Offer
              </span>
              <h4 className="font-display text-sm font-extrabold leading-tight mt-1.5">
                AVA Luxury Massage Chairs
              </h4>
              <p className="text-[10px] text-secondary-300">Book Showroom Trial in Bhubaneswar</p>
            </div>
            
            {/* Slide Image Preview on Right */}
            <div className="relative w-16 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-0.5 shrink-0 z-10">
              <ProductImageWithFallback
                src={carouselProducts[activeImageIdx].images[0]}
                alt={carouselProducts[activeImageIdx].name}
                category={carouselProducts[activeImageIdx].category}
                className="h-full w-full object-contain"
                priority={true}
              />
            </div>
          </div>

          {/* Left Side: Product Carousel (Visible on Desktop) */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-900 to-secondary-900 text-white flex-col justify-between p-8 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-primary-500/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Header info inside carousel side */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/25 border border-accent/30 text-xs font-bold text-accent-200 uppercase tracking-widest mb-4">
                <Sparkles className="h-3 w-3 fill-accent" /> AVA Flagship Experience
              </span>
              <h3 className="font-display text-3xl font-bold leading-tight">
                Try Our Luxury Chairs Before You Buy
              </h3>
              <p className="text-secondary-200 mt-2 text-sm max-w-sm">
                Get a premium, zero-gravity relaxation experience at our Bhubaneswar showroom. Book your trial slot now.
              </p>
            </div>

            {/* Image Slider Wrapper */}
            <div className="relative flex-1 w-full flex items-center justify-center py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImageIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full max-h-[300px] flex flex-col items-center justify-center"
                >
                  <div className="relative w-full h-[170px] bg-white/5 rounded-2xl p-1 flex items-center justify-center border border-white/10 shadow-inner">
                    <ProductImageWithFallback
                      src={carouselProducts[activeImageIdx].images[0]}
                      alt={carouselProducts[activeImageIdx].name}
                      category={carouselProducts[activeImageIdx].category}
                      className="h-full w-full object-contain p-1 max-h-[150px]"
                      priority={true}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-display font-bold text-base text-white line-clamp-1">
                      {carouselProducts[activeImageIdx].name}
                    </p>
                    <p className="text-gold text-xs font-semibold uppercase mt-0.5 tracking-wider">
                      Premium Showroom Pick
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Dots & Showroom Details */}
            <div className="relative z-10 border-t border-white/10 pt-4 flex flex-col gap-2.5">
              <div className="flex justify-center gap-2">
                {carouselProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      activeImageIdx === idx ? "w-6 bg-accent" : "w-1.5 bg-white/30"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-6 text-xs text-secondary-300 mt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-accent" /> Mon-Sat (10AM-9PM)
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" /> Puri Bypass Road
                </span>
              </div>
            </div>
          </div>

          {/* Right/Bottom Side: Contact Form */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col overflow-y-auto">
            <div className="mb-6">
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-secondary-900 leading-tight">
                {productName ? `Inquire About ${productName}` : "Book a Showroom Visit / Enquire"}
              </h2>
              <p className="text-secondary-400 text-xs sm:text-sm mt-1.5">
                Fill in the details below. Our team in Bhubaneswar will get in touch with you shortly.
              </p>
            </div>

            <div className="flex-1">
              <EnquiryForm productName={productName} compact={true} />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
