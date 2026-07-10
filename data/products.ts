// AVA TRADERS — FINAL PRODUCT CATALOG
// 22 products across 3 categories: Massage Chairs, Leg Massagers, Health Care Products
import { Product } from "@/types/product";

export const products: Product[] = [
  // ═══════════════════════════════════════════════
  // MASSAGE CHAIRS (7 products)
  // ═══════════════════════════════════════════════
  {
    id: "a-710-2-classic-premium-4d",
    slug: "a-710-2-classic-premium-4d",
    name: "A-710-2 Classic Premium 4D Massage Chair",
    category: "massage-chairs",
    shortDescription: "Classic premium 4D massage chair with full-body airbag compression, zero-gravity recline and heat therapy.",
    description: [
      "The A-710-2 Classic Premium 4D Massage Chair is a flagship model in AVA Traders' massage chair range, combining advanced 4D roller technology with a classic design that fits seamlessly into any living room or office.",
      "Equipped with L-track rollers that follow the natural curve of your spine from neck to glutes, this chair delivers precise, deep-tissue massage tailored to your body shape. The zero-gravity recline distributes your weight evenly, reducing spinal pressure while the built-in heat therapy soothes tense lower back muscles.",
      "Every unit sold by AVA Traders is inspected at our Bhubaneswar showroom before dispatch. Our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/a-710-2-classic-premium-4d-1.jpg",
      "/images/products/a-710-2-classic-premium-4d-2.jpg",
      "/images/products/a-710-2-classic-premium-4d-3.jpg"
    ],
    mrp: 285000,
    price: 199000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "4D L-track rollers follow the natural curve of your spine from neck to glutes",
      "Zero-gravity recline distributes body weight evenly to reduce spinal pressure",
      "Full-body airbag compression across shoulders, arms, hips, calves and feet",
      "Built-in heat therapy on lower back for deep muscle relaxation",
      "Bluetooth speakers and touchscreen remote with 8 preset programs",
      "Space-saving design — requires only 5 cm from wall"
    ],
    specifications: [
      { label: "Track Type", value: "4D L-Track" },
      { label: "Recline Angle", value: "Up to 170°" },
      { label: "Airbags", value: "56" },
      { label: "Heat Therapy", value: "Lower back, dual heat pads" },
      { label: "Power", value: "220V, 280W" },
      { label: "Dimensions (Reclined)", value: "195 x 80 x 75 cm" },
      { label: "Weight Capacity", value: "150 kg" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Relieves chronic back and shoulder pain with precision 4D rollers",
      "Improves blood circulation after long work hours",
      "Reduces daily stress with guided relaxation programs"
    ],
    faqs: [
      { question: "Is the A-710-2 covered under warranty?", answer: "Yes, it comes with a 2-year warranty (1 Year Comprehensive + 1 Year Motor). AVA Traders also provides local after-sales support from our Bhubaneswar showroom." },
      { question: "Can I see the A-710-2 in person before buying?", answer: "Yes, this product is on display at our Puri Bypass Road showroom in Bhubaneswar. We recommend a quick call or WhatsApp message to confirm current stock before visiting." },
      { question: "Do you offer home delivery for the A-710-2?", answer: "Yes, we deliver across Bhubaneswar and can arrange shipping to other parts of Odisha. Contact us on WhatsApp for delivery timelines and charges to your location." }
    ],
    bestSeller: true,
    featured: true,
    seo: {
      metaTitle: "A-710-2 Classic Premium 4D Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Classic premium 4D massage chair with full-body airbag compression, zero-gravity recline and heat therapy. Shop at AVA Traders, Bhubaneswar — showroom visit, WhatsApp enquiry and home delivery available."
    }
  },
  {
    id: "z-91-ultra-luxury",
    slug: "z-91-ultra-luxury",
    name: "Z-91 Ultra Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Ultra luxury full-body massage chair with AI body scanning, voice control and dual-track roller system.",
    description: [
      "The Z-91 Ultra Luxury Massage Chair represents the pinnacle of home wellness technology. Featuring an AI-powered body scanning system that automatically adjusts roller position and intensity to your body shape, every massage session feels custom-tailored.",
      "With voice control, dual-track rollers that simultaneously work your back and legs, and a premium Bluetooth sound system built into the headrest, the Z-91 transforms your daily recovery into a luxury experience.",
      "Every unit sold by AVA Traders is inspected at our Bhubaneswar showroom before dispatch. Our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/z-91-ultra-luxury-1.jpg",
      "/images/products/z-91-ultra-luxury-2.jpg",
      "/images/products/z-91-ultra-luxury-3.jpg"
    ],
    mrp: 450000,
    price: 349000,
    availability: "limited-stock",
    warranty: "3 Years (2 Year Comprehensive + 1 Year Motor)",
    features: [
      "AI body scanning automatically adjusts roller position and intensity",
      "Voice control for hands-free operation",
      "Dual-track roller system works back and legs simultaneously",
      "Premium Bluetooth sound system built into headrest",
      "Chromotherapy LED mood lighting",
      "Zero-gravity and zero-wall space-saving design",
      "12 automatic programs + manual mode"
    ],
    specifications: [
      { label: "Track Type", value: "Dual SL+Leg Track" },
      { label: "Roller Technology", value: "AI 4D with body scan" },
      { label: "Airbags", value: "72" },
      { label: "Heat Therapy", value: "Full back + calves" },
      { label: "Power", value: "220V, 350W" },
      { label: "Dimensions (Reclined)", value: "205 x 85 x 80 cm" },
      { label: "Weight Capacity", value: "150 kg" },
      { label: "Warranty", value: "3 Years (2 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "AI body scanning ensures every massage targets your specific pain points",
      "Voice control makes operation effortless for elderly users",
      "Chromotherapy enhances relaxation through light therapy"
    ],
    faqs: [
      { question: "What makes the Z-91 'Ultra Luxury'?", answer: "The Z-91 features AI body scanning, voice control, chromotherapy lighting, and a dual-track system — technology typically found only in commercial-grade chairs, brought into a home format." },
      { question: "Can I try the Z-91 at the showroom?", answer: "Yes, the Z-91 is on display at our Puri Bypass Road showroom. We recommend calling ahead as it's a limited-stock model." },
      { question: "Is installation included?", answer: "Yes, for Bhubaneswar deliveries, our team handles complete setup and provides a walkthrough of all features including voice control setup." }
    ],
    bestSeller: false,
    featured: true,
    seo: {
      metaTitle: "Z-91 Ultra Luxury Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Ultra luxury massage chair with AI body scanning, voice control and dual-track roller system. Shop at AVA Traders, Bhubaneswar — showroom visit and home delivery available."
    }
  },
  {
    id: "z-90-economic-premium-ultra-luxury",
    slug: "z-90-economic-premium-ultra-luxury",
    name: "Z-90 Economic Premium Ultra Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "The best of ultra luxury features at an accessible price — 4D rollers, zero gravity and full-body airbags.",
    description: [
      "The Z-90 brings ultra luxury massage chair features into a more accessible price bracket without cutting corners on performance. With 4D L-track rollers, zero-gravity recline and full-body airbag compression, it delivers a comprehensive massage experience.",
      "Designed for families who want premium quality without the premium price tag, the Z-90 includes heat therapy, Bluetooth connectivity and 10 preset programs that cover everything from gentle relaxation to deep tissue recovery.",
      "Every unit sold by AVA Traders is inspected at our Bhubaneswar showroom before dispatch. Our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/z-90-economic-premium-1.jpg",
      "/images/products/z-90-economic-premium-2.jpg",
      "/images/products/z-90-economic-premium-3.jpg"
    ],
    mrp: 320000,
    price: 235000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "4D L-track rollers for full spine coverage",
      "Zero-gravity recline for optimal weight distribution",
      "Full-body airbag compression — 48 airbags total",
      "Heat therapy on lower back and calves",
      "Bluetooth speakers with wireless connectivity",
      "10 preset massage programs",
      "Space-saving wall-hugger design"
    ],
    specifications: [
      { label: "Track Type", value: "4D L-Track" },
      { label: "Recline Angle", value: "Up to 170°" },
      { label: "Airbags", value: "48" },
      { label: "Heat Therapy", value: "Lower back + calves" },
      { label: "Power", value: "220V, 260W" },
      { label: "Dimensions (Reclined)", value: "198 x 78 x 72 cm" },
      { label: "Weight Capacity", value: "130 kg" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Ultra luxury features at an economic price point",
      "Full-body coverage from neck to feet",
      "Space-saving design fits in compact living rooms"
    ],
    faqs: [
      { question: "How does the Z-90 compare to the Z-91?", answer: "The Z-90 offers most of the Z-91's features (4D rollers, zero gravity, heat therapy) at a lower price, but without AI body scanning and voice control. It's the ideal choice if you want premium performance on a budget." },
      { question: "Can I try the Z-90 before buying?", answer: "Yes, it's on display at our showroom. Visit us at Puri Bypass Road, Bhubaneswar." },
      { question: "Do you offer EMI options?", answer: "We can assist with financing options. Please contact us on WhatsApp or call for details on available EMI plans." }
    ],
    bestSeller: true,
    featured: true,
    seo: {
      metaTitle: "Z-90 Economic Premium Ultra Luxury Massage Chair | AVA Traders Bhubaneswar",
      metaDescription: "Ultra luxury features at an accessible price — 4D rollers, zero gravity and full-body airbags. Shop the Z-90 at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "a-372-2-premium-ultra-luxury",
    slug: "a-372-2-premium-ultra-luxury",
    name: "A-372-2 Premium Ultra Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Premium ultra luxury massage chair with SL-track, Thai stretch massage and calf kneading system.",
    description: [
      "The A-372-2 Premium Ultra Luxury Massage Chair combines sophisticated engineering with plush comfort. Its SL-track system ensures rollers reach from your neck all the way down to your hamstrings, while the Thai stretch function gently elongates your spine.",
      "The built-in calf kneading system, combined with heated foot rollers, makes this chair especially popular with professionals who spend long hours standing or sitting. Airbag compression across shoulders, arms and hips completes the full-body experience.",
      "Every unit sold by AVA Traders is inspected at our Bhubaneswar showroom before dispatch. Our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/a-372-2-premium-ultra-luxury-1.jpg",
      "/images/products/a-372-2-premium-ultra-luxury-2.jpg",
      "/images/products/a-372-2-premium-ultra-luxury-3.jpg"
    ],
    mrp: 395000,
    price: 299000,
    availability: "in-stock",
    warranty: "3 Years (2 Year Comprehensive + 1 Year Motor)",
    features: [
      "SL-track rollers from neck to hamstrings",
      "Thai stretch massage function for spinal elongation",
      "Calf kneading system with heated foot rollers",
      "Full-body airbag compression — 60 airbags",
      "Automatic body shape detection",
      "3D surround sound Bluetooth speakers",
      "USB charging port on armrest"
    ],
    specifications: [
      { label: "Track Type", value: "SL-Track (135 cm)" },
      { label: "Roller Technology", value: "3D/4D hybrid" },
      { label: "Airbags", value: "60" },
      { label: "Heat Therapy", value: "Lumbar + foot rollers" },
      { label: "Power", value: "220V, 300W" },
      { label: "Dimensions (Reclined)", value: "200 x 82 x 78 cm" },
      { label: "Weight Capacity", value: "140 kg" },
      { label: "Warranty", value: "3 Years (2 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Thai stretch helps relieve compressed discs and stiff joints",
      "Heated foot rollers improve circulation in cold weather",
      "Ideal for professionals with sedentary or standing jobs"
    ],
    faqs: [
      { question: "What is the Thai stretch function?", answer: "The chair gently stretches your body by holding your legs and shoulders while the backrest reclines, simulating the elongation movements of a traditional Thai massage." },
      { question: "Is the A-372-2 suitable for elderly users?", answer: "Yes, its gentle modes and auto body detection make it safe and comfortable for elderly users. We recommend trying it at our showroom first." },
      { question: "How much space does it need?", answer: "The A-372-2 needs approximately 1 metre of clearance behind when fully reclined. Our team can assess your space during a call." }
    ],
    bestSeller: false,
    featured: true,
    seo: {
      metaTitle: "A-372-2 Premium Ultra Luxury Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Premium ultra luxury massage chair with SL-track, Thai stretch massage and calf kneading system. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "z-plus-100-premium-luxury",
    slug: "z-plus-100-premium-luxury",
    name: "Z+100 Premium Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Premium luxury massage chair with 3D SL-track, zero-gravity recline and full-body heated airbag system.",
    description: [
      "The Z+100 Premium Luxury Massage Chair strikes the perfect balance between advanced technology and everyday usability. Its 3D SL-track system adapts to your spine's natural curvature while the heated airbag system delivers warmth precisely where tension builds up.",
      "With zero-gravity recline, Bluetooth audio and 8 preset programs ranging from gentle relaxation to deep-tissue intensity, the Z+100 suits everyone from desk workers to active retirees seeking daily relief.",
      "Every unit sold by AVA Traders is inspected at our Bhubaneswar showroom before dispatch. Our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/z-plus-100-premium-luxury-1.jpg",
      "/images/products/z-plus-100-premium-luxury-2.jpg",
      "/images/products/z-plus-100-premium-luxury-3.jpg"
    ],
    mrp: 345000,
    price: 259000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "3D SL-track roller system adapts to spinal curvature",
      "Zero-gravity recline with one-touch operation",
      "Full-body heated airbag system — 52 airbags",
      "Bluetooth audio and built-in speakers",
      "8 preset programs from gentle to deep-tissue",
      "Extendable footrest fits heights up to 6'2\"",
      "Auto power-off timer for safety"
    ],
    specifications: [
      { label: "Track Type", value: "3D SL-Track" },
      { label: "Recline Angle", value: "Up to 170°" },
      { label: "Airbags", value: "52" },
      { label: "Heat Therapy", value: "Lumbar + shoulder pads" },
      { label: "Power", value: "220V, 270W" },
      { label: "Dimensions (Reclined)", value: "200 x 80 x 76 cm" },
      { label: "Weight Capacity", value: "140 kg" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Heated airbags target tension in shoulders and lower back simultaneously",
      "Extendable footrest accommodates taller users",
      "Auto power-off prevents overuse for elderly users"
    ],
    faqs: [
      { question: "What's the difference between 3D and 4D track?", answer: "3D rollers move in three directions (up-down, left-right, in-out), while 4D adds a speed variation dimension. The Z+100's 3D system provides excellent massage depth at a slightly lower price point than 4D models." },
      { question: "Does it work on Indian voltage?", answer: "Yes, all our massage chairs are designed for 220V Indian power supply with appropriate surge protection." },
      { question: "How heavy is the Z+100?", answer: "The chair weighs approximately 95 kg. Our delivery team handles all the lifting and setup." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Z+100 Premium Luxury Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Premium luxury massage chair with 3D SL-track, zero-gravity recline and full-body heated airbag system. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "rc-1-economic",
    slug: "rc-1-economic",
    name: "RC-1 Economic Massage Chair",
    category: "massage-chairs",
    shortDescription: "Affordable full-body massage chair with 2D rollers, zero-gravity recline and basic airbag system.",
    description: [
      "The RC-1 Economic Massage Chair makes the benefits of a full-body massage chair accessible to budget-conscious families. With 2D roller technology, zero-gravity recline and a basic airbag system covering shoulders and calves, it delivers effective daily relief at a fraction of the cost of premium models.",
      "Ideal as a first massage chair for families, the RC-1 includes 6 preset programs and manual mode, an extendable footrest, and a simple remote control that even elderly users find intuitive.",
      "Every unit sold by AVA Traders is inspected at our Bhubaneswar showroom before dispatch. Our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/rc-1-economic-1.jpg",
      "/images/products/rc-1-economic-2.jpg",
      "/images/products/rc-1-economic-3.jpg"
    ],
    mrp: 95000,
    price: 69999,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "2D S-track rollers for neck-to-lower-back massage",
      "Zero-gravity recline position",
      "Basic airbag compression on shoulders and calves",
      "6 preset programs + manual adjustment",
      "Extendable footrest for different heights",
      "Simple one-button remote control"
    ],
    specifications: [
      { label: "Track Type", value: "2D S-Track" },
      { label: "Recline Angle", value: "Up to 155°" },
      { label: "Airbags", value: "24" },
      { label: "Heat Therapy", value: "Lower back" },
      { label: "Power", value: "220V, 180W" },
      { label: "Dimensions (Reclined)", value: "185 x 75 x 70 cm" },
      { label: "Weight Capacity", value: "120 kg" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "Entry-level pricing makes massage chairs accessible to more families",
      "Simple controls are ideal for elderly users",
      "Compact size fits in smaller living rooms"
    ],
    faqs: [
      { question: "Is the RC-1 suitable for daily use?", answer: "Yes, the RC-1 is designed for daily 20-30 minute sessions. The auto power-off ensures the chair doesn't overheat." },
      { question: "Can it fit in a small room?", answer: "The RC-1 has a compact footprint and needs about 60 cm of clearance behind it when reclined — smaller than most premium chairs." },
      { question: "What's the weight limit?", answer: "The RC-1 supports users up to 120 kg." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "RC-1 Economic Massage Chair | Affordable Massage Chair in Bhubaneswar | AVA Traders",
      metaDescription: "Affordable full-body massage chair with 2D rollers, zero-gravity recline and basic airbag system. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "rc-2-economic-premium",
    slug: "rc-2-economic-premium",
    name: "RC-2 Economic Premium Massage Chair",
    category: "massage-chairs",
    shortDescription: "Economic premium massage chair with 3D rollers, enhanced airbag system and heat therapy — the smart upgrade from the RC-1.",
    description: [
      "The RC-2 Economic Premium Massage Chair is the perfect step-up from entry-level models. It upgrades to 3D roller technology, adds a more comprehensive airbag system covering arms and hips, and includes enhanced heat therapy across the lower back and calves.",
      "For families who want noticeably better massage quality without jumping to the ultra luxury price range, the RC-2 delivers the best value-for-money in our catalogue.",
      "Every unit sold by AVA Traders is inspected at our Bhubaneswar showroom before dispatch. Our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/rc-2-economic-premium-1.jpg",
      "/images/products/rc-2-economic-premium-2.jpg",
      "/images/products/rc-2-economic-premium-3.jpg"
    ],
    mrp: 145000,
    price: 109000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "3D SL-track roller technology",
      "Enhanced airbag system — 36 airbags covering arms, hips, shoulders and calves",
      "Heat therapy on lower back and calves",
      "Zero-gravity recline with smooth electric motor",
      "8 preset programs + full manual control",
      "Bluetooth speaker system"
    ],
    specifications: [
      { label: "Track Type", value: "3D SL-Track" },
      { label: "Recline Angle", value: "Up to 165°" },
      { label: "Airbags", value: "36" },
      { label: "Heat Therapy", value: "Lower back + calves" },
      { label: "Power", value: "220V, 220W" },
      { label: "Dimensions (Reclined)", value: "190 x 78 x 72 cm" },
      { label: "Weight Capacity", value: "130 kg" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "3D rollers provide noticeably deeper massage than 2D models",
      "Excellent value — premium features at an economic price",
      "Bluetooth speakers let you listen to music during sessions"
    ],
    faqs: [
      { question: "What's the difference between RC-1 and RC-2?", answer: "The RC-2 upgrades to 3D rollers (vs 2D), has 36 airbags (vs 24), adds heat therapy on calves, includes Bluetooth speakers, and has 8 programs (vs 6). It's a significant upgrade for moderate extra investment." },
      { question: "Is delivery free in Bhubaneswar?", answer: "Delivery charges vary by location. Please contact us on WhatsApp for a delivery quote to your address." },
      { question: "Can I pay in instalments?", answer: "We can assist with financing options. Please contact us for available EMI plans." }
    ],
    bestSeller: true,
    featured: false,
    seo: {
      metaTitle: "RC-2 Economic Premium Massage Chair | Best Value in Bhubaneswar | AVA Traders",
      metaDescription: "Economic premium massage chair with 3D rollers, enhanced airbag system and heat therapy. Shop at AVA Traders, Bhubaneswar — best value for money."
    }
  },

  // ═══════════════════════════════════════════════
  // LEG MASSAGERS (6 products)
  // ═══════════════════════════════════════════════
  {
    id: "kiyo-416-classic-premium",
    slug: "kiyo-416-classic-premium",
    name: "Kiyo-416 Classic Premium Leg Massager",
    category: "leg-massagers",
    shortDescription: "Classic premium leg massager with air compression, heat therapy and kneading for calves, ankles and feet.",
    description: [
      "The Kiyo-416 Classic Premium Leg Massager delivers professional-grade relief for tired, swollen legs. With multi-layered air compression, targeted kneading rollers and soothing heat therapy, it covers your calves, ankles and feet in a single session.",
      "Designed for professionals who spend long hours on their feet — doctors, teachers, shop owners — the Kiyo-416 includes 6 intensity levels and 4 massage modes so you can customise the experience to your comfort level.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/kiyo-416-classic-premium-1.jpg",
      "/images/products/kiyo-416-classic-premium-2.jpg",
      "/images/products/kiyo-416-classic-premium-3.jpg"
    ],
    mrp: 32000,
    price: 24999,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "Multi-layered air compression for calves, ankles and feet",
      "Kneading rollers target deep tissue in calves",
      "Built-in heat therapy for improved circulation",
      "6 intensity levels from gentle to firm",
      "4 massage modes — auto, pulse, wave, compress",
      "Easy-clean detachable fabric liners"
    ],
    specifications: [
      { label: "Coverage", value: "Calves, ankles and feet" },
      { label: "Airbags", value: "16" },
      { label: "Heat Therapy", value: "Yes — calves" },
      { label: "Intensity Levels", value: "6" },
      { label: "Power", value: "220V, 80W" },
      { label: "Weight", value: "8.5 kg" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "Relieves leg swelling after long hours of standing or sitting",
      "Heat therapy improves blood circulation in lower legs",
      "Detachable liners make cleaning simple and hygienic"
    ],
    faqs: [
      { question: "Can I use it if I have varicose veins?", answer: "We recommend consulting your doctor before use if you have varicose veins or any circulatory condition. The gentle mode may be suitable, but medical advice should come first." },
      { question: "How long should I use it per session?", answer: "We recommend 15-20 minute sessions, 2-3 times per day. The auto timer will switch off after 20 minutes." },
      { question: "Is it noisy?", answer: "The Kiyo-416 operates at around 50 dB — quieter than a normal conversation. It's comfortable to use while watching TV." }
    ],
    bestSeller: true,
    featured: true,
    seo: {
      metaTitle: "Kiyo-416 Classic Premium Leg Massager | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Classic premium leg massager with air compression, heat therapy and kneading for calves, ankles and feet. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "entuit-ultra-premium",
    slug: "entuit-ultra-premium",
    name: "Entuit Ultra Premium Leg Massager",
    category: "leg-massagers",
    shortDescription: "Ultra premium leg massager with full-leg coverage, 3D kneading, vibration and infrared heat therapy.",
    description: [
      "The Entuit Ultra Premium Leg Massager is the most advanced leg massager in AVA Traders' catalogue. With full-leg coverage from thighs to toes, it combines 3D kneading, vibration massage and infrared heat therapy for comprehensive leg recovery.",
      "The touch-screen remote and wireless design make it convenient to use anywhere in your home. With 8 massage modes and 10 intensity levels, it adapts to athletes recovering from training, elderly users managing circulation, and everyone in between.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/entuit-ultra-premium-1.jpg",
      "/images/products/entuit-ultra-premium-2.jpg",
      "/images/products/entuit-ultra-premium-3.jpg"
    ],
    mrp: 48000,
    price: 37999,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "Full-leg coverage — thighs, knees, calves, ankles and feet",
      "3D kneading rollers with vibration massage",
      "Infrared heat therapy for deep tissue warming",
      "8 massage modes with 10 intensity levels",
      "Touch-screen wireless remote control",
      "Adjustable leg width to fit different body types",
      "Premium breathable fabric with removable covers"
    ],
    specifications: [
      { label: "Coverage", value: "Thighs to toes (full leg)" },
      { label: "Airbags", value: "24" },
      { label: "Heat Therapy", value: "Infrared — calves and feet" },
      { label: "Intensity Levels", value: "10" },
      { label: "Power", value: "220V, 120W" },
      { label: "Weight", value: "12 kg" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "Full-leg coverage means thighs and knees also get relief",
      "Infrared heat penetrates deeper than standard heating pads",
      "Adjustable width makes it suitable for all body types"
    ],
    faqs: [
      { question: "Does it cover the thighs?", answer: "Yes, the Entuit is one of the few leg massagers that covers from thighs all the way to toes, making it a true full-leg solution." },
      { question: "Is infrared heat safe?", answer: "Yes, far-infrared heat is widely used in physiotherapy and is considered safe for home use. It penetrates deeper than standard heating elements." },
      { question: "Can two people use it at the same time?", answer: "No, it's a single-user device. However, sessions are just 15-20 minutes, so family members can take turns easily." }
    ],
    bestSeller: false,
    featured: true,
    seo: {
      metaTitle: "Entuit Ultra Premium Leg Massager | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Ultra premium leg massager with full-leg coverage, 3D kneading, vibration and infrared heat therapy. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "detachable-premium-leg-massager",
    slug: "detachable-premium-leg-massager",
    name: "Detachable Premium Leg Massager",
    category: "leg-massagers",
    shortDescription: "Premium detachable leg massager with modular design — use on calves, feet or both independently.",
    description: [
      "The Detachable Premium Leg Massager introduces a modular concept to leg massage. The calf and foot units can separate and work independently, allowing you to focus on one area or combine them for full lower-leg treatment.",
      "This flexibility makes it ideal for households where different family members have different needs — one can use the foot unit while another uses the calf section. Both units feature air compression, kneading and heat therapy.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/detachable-premium-1.jpg",
      "/images/products/detachable-premium-2.jpg",
      "/images/products/detachable-premium-3.jpg"
    ],
    mrp: 28000,
    price: 21999,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "Modular detachable design — calf and foot units work independently",
      "Air compression with kneading on both units",
      "Heat therapy on foot unit",
      "5 intensity levels per unit",
      "Compact storage — units stack neatly",
      "LED control panel on each unit"
    ],
    specifications: [
      { label: "Coverage", value: "Calves and feet (modular)" },
      { label: "Airbags", value: "12 per unit (24 total)" },
      { label: "Heat Therapy", value: "Foot unit" },
      { label: "Intensity Levels", value: "5" },
      { label: "Power", value: "220V, 90W" },
      { label: "Weight", value: "7 kg (total)" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "Modular design lets family members use different units simultaneously",
      "Compact when detached — easy to store in small spaces",
      "Great for targeted relief on just feet or just calves"
    ],
    faqs: [
      { question: "Can both units be used by different people at the same time?", answer: "Yes, that's the beauty of the modular design. The calf and foot units work independently with their own controls." },
      { question: "Is it easy to attach and detach?", answer: "Yes, the units connect with a simple click-lock mechanism. No tools required." },
      { question: "Does each unit have its own power cord?", answer: "Yes, each unit has its own power supply so they can be used independently anywhere in your home." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Detachable Premium Leg Massager | Modular Design | AVA Traders Bhubaneswar",
      metaDescription: "Premium detachable leg massager with modular design — use on calves, feet or both independently. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "pedizen-economic-premium",
    slug: "pedizen-economic-premium",
    name: "Pedizen Economic Premium Leg Massager",
    category: "leg-massagers",
    shortDescription: "Economic premium leg massager with air compression and heat therapy — excellent value for daily calf and foot relief.",
    description: [
      "The Pedizen Economic Premium Leg Massager delivers reliable calf and foot massage at a price point that makes it an easy decision for budget-conscious buyers. Air compression bags wrap around your calves and feet while gentle heat therapy improves circulation.",
      "With 4 massage modes and 3 intensity levels, the Pedizen covers the essentials without unnecessary complexity. It's our most popular leg massager for first-time buyers and gift purchases.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/pedizen-economic-premium-1.jpg",
      "/images/products/pedizen-economic-premium-2.jpg",
      "/images/products/pedizen-economic-premium-3.jpg"
    ],
    mrp: 18000,
    price: 13999,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "Air compression for calves and feet",
      "Built-in heat therapy",
      "4 massage modes — auto, pulse, wave, squeeze",
      "3 intensity levels",
      "15-minute auto shut-off for safety",
      "Compact and lightweight design"
    ],
    specifications: [
      { label: "Coverage", value: "Calves and feet" },
      { label: "Airbags", value: "12" },
      { label: "Heat Therapy", value: "Yes — feet" },
      { label: "Intensity Levels", value: "3" },
      { label: "Power", value: "220V, 60W" },
      { label: "Weight", value: "6 kg" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "Affordable entry point for leg massage at home",
      "Simple controls suit elderly and first-time users",
      "Lightweight enough to move between rooms easily"
    ],
    faqs: [
      { question: "Is this suitable as a gift?", answer: "Absolutely — the Pedizen is our most gifted leg massager, especially for parents and grandparents. It's simple to use and provides immediate relief." },
      { question: "Can it fit larger calves?", answer: "The Pedizen fits calves up to 50 cm circumference. If you have larger calves, consider the Entuit Ultra Premium which has adjustable width." },
      { question: "How noisy is it?", answer: "It operates at about 45 dB — very quiet. You can comfortably use it while watching TV or reading." }
    ],
    bestSeller: true,
    featured: false,
    seo: {
      metaTitle: "Pedizen Economic Premium Leg Massager | Affordable Leg Massager | AVA Traders",
      metaDescription: "Economic premium leg massager with air compression and heat therapy — excellent value for daily calf and foot relief. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "kiyo-premium-classic-economic",
    slug: "kiyo-premium-classic-economic",
    name: "Kiyo Premium Classic Economic Leg Massager",
    category: "leg-massagers",
    shortDescription: "Classic economic leg massager with air compression and vibration — simple, effective daily relief for calves and feet.",
    description: [
      "The Kiyo Premium Classic Economic Leg Massager offers the essential features of the Kiyo range at a budget-friendly price. Air compression combined with vibration massage provides effective relief for tired calves and feet without the complexity of premium models.",
      "Its classic design and straightforward controls make it ideal for elderly users or anyone who wants a reliable, no-fuss leg massager for daily use.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/kiyo-premium-classic-economic-1.jpg",
      "/images/products/kiyo-premium-classic-economic-2.jpg",
      "/images/products/kiyo-premium-classic-economic-3.jpg"
    ],
    mrp: 15000,
    price: 10999,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "Air compression massage for calves and feet",
      "Vibration massage for surface-level relief",
      "3 intensity levels",
      "3 massage modes",
      "15-minute auto shut-off",
      "Lightweight and portable design"
    ],
    specifications: [
      { label: "Coverage", value: "Calves and feet" },
      { label: "Airbags", value: "8" },
      { label: "Heat Therapy", value: "No" },
      { label: "Intensity Levels", value: "3" },
      { label: "Power", value: "220V, 50W" },
      { label: "Weight", value: "5 kg" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "Budget-friendly entry into the Kiyo leg massager range",
      "Simple 3-button operation — perfect for elderly users",
      "Light enough to carry between rooms"
    ],
    faqs: [
      { question: "Does it have heat therapy?", answer: "No, the Kiyo Premium Classic Economic does not include heat. If you need heat therapy, consider the Kiyo-416 Classic Premium or the Pedizen." },
      { question: "What's the difference between this and the Kiyo-416?", answer: "The Kiyo-416 adds heat therapy, kneading rollers, more airbags (16 vs 8) and more intensity levels (6 vs 3). This model is the budget-friendly option with essential features." },
      { question: "Can I use it on a sofa?", answer: "Yes, it works on the floor or on a sofa. Just make sure it's on a stable, flat surface." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Kiyo Premium Classic Economic Leg Massager | Budget Leg Massager | AVA Traders",
      metaDescription: "Classic economic leg massager with air compression and vibration. Simple, effective daily relief. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "hattho-economic",
    slug: "hattho-economic",
    name: "Hattho Economic Leg Massager",
    category: "leg-massagers",
    shortDescription: "Entry-level economic leg massager with basic air compression — affordable daily relief for tired feet and calves.",
    description: [
      "The Hattho Economic Leg Massager is the most affordable option in our leg massager range. With basic air compression covering feet and lower calves, it provides gentle relief after a long day — perfect for first-time users or as a thoughtful, budget-friendly gift.",
      "Its compact design takes up minimal space and weighs just 4 kg, making it easy to move around the house. Simple one-button controls mean anyone can use it right out of the box.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/hattho-economic-1.jpg",
      "/images/products/hattho-economic-2.jpg",
      "/images/products/hattho-economic-3.jpg"
    ],
    mrp: 8000,
    price: 5999,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "Basic air compression for feet and lower calves",
      "2 intensity levels — gentle and firm",
      "One-button operation",
      "Compact and lightweight — just 4 kg",
      "15-minute auto shut-off",
      "Easy-clean removable fabric"
    ],
    specifications: [
      { label: "Coverage", value: "Feet and lower calves" },
      { label: "Airbags", value: "6" },
      { label: "Heat Therapy", value: "No" },
      { label: "Intensity Levels", value: "2" },
      { label: "Power", value: "220V, 40W" },
      { label: "Weight", value: "4 kg" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Most affordable leg massager in the catalogue",
      "One-button operation makes it accessible to everyone",
      "Weighs just 4 kg — carry it anywhere in the house"
    ],
    faqs: [
      { question: "Is this good enough for daily use?", answer: "Yes, for basic foot and lower calf relief, the Hattho works well for daily 15-minute sessions. For deeper massage or full-calf coverage, consider the Pedizen or Kiyo-416." },
      { question: "Is it a good gift for parents?", answer: "Yes — its simplicity and affordability make it one of our most popular gift choices, especially for elderly parents who want gentle foot relief." },
      { question: "Does it come with a warranty?", answer: "Yes, it comes with a 6-month warranty. AVA Traders handles all warranty claims locally." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Hattho Economic Leg Massager | Most Affordable Leg Massager | AVA Traders",
      metaDescription: "Entry-level economic leg massager with basic air compression — affordable daily relief for tired feet and calves. Shop at AVA Traders, Bhubaneswar."
    }
  },

  // ═══════════════════════════════════════════════
  // HEALTH CARE PRODUCTS (9 products)
  // ═══════════════════════════════════════════════
  {
    id: "teppid-back-massager",
    slug: "teppid-back-massager",
    name: "Teppid Back Massager",
    category: "health-care-products",
    shortDescription: "Electric back massager with shiatsu kneading nodes, heat therapy and adjustable straps for use on chairs.",
    description: [
      "The Teppid Back Massager brings shiatsu-quality back massage to your existing chair or car seat. With rotating kneading nodes that mimic the thumbs of a professional masseuse, plus soothing infrared heat, it targets tension across your upper and lower back.",
      "Adjustable straps let you secure it to any chair, office seat or car headrest. The 15-minute auto shut-off ensures safe use even if you doze off during a session.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/teppid-back-massager-1.jpg",
      "/images/products/teppid-back-massager-2.jpg",
      "/images/products/teppid-back-massager-3.jpg"
    ],
    mrp: 5500,
    price: 3999,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "Shiatsu kneading nodes with bi-directional rotation",
      "Infrared heat therapy for deeper relief",
      "Adjustable straps fit office chairs, recliners and car seats",
      "3 speed levels and 3 massage zones",
      "15-minute auto shut-off for safety",
      "Lightweight and portable — use at home, office or in the car"
    ],
    specifications: [
      { label: "Massage Type", value: "Shiatsu kneading" },
      { label: "Heat Therapy", value: "Infrared" },
      { label: "Speed Levels", value: "3" },
      { label: "Power", value: "12V DC adapter (included) + car adapter" },
      { label: "Weight", value: "2.5 kg" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Use it on any chair — no need for a dedicated massage chair",
      "Car adapter lets you enjoy back massage during long drives",
      "Infrared heat improves blood flow to tight muscles"
    ],
    faqs: [
      { question: "Can I use it in my car?", answer: "Yes, the Teppid Back Massager comes with a car adapter so you can use it during commutes or long drives." },
      { question: "Is it safe to use with heat therapy?", answer: "Yes, the infrared heat is mild and the 15-minute auto shut-off prevents overheating." },
      { question: "Will it fit my office chair?", answer: "Yes, the adjustable straps fit most standard office chairs, dining chairs and car seats." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Teppid Back Massager | Portable Shiatsu Back Massager | AVA Traders",
      metaDescription: "Electric back massager with shiatsu kneading nodes, heat therapy and adjustable straps. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "knee-massager",
    slug: "knee-massager",
    name: "Knee Massager",
    category: "health-care-products",
    shortDescription: "Heated knee massager with vibration and infrared therapy for joint pain, arthritis and post-exercise recovery.",
    description: [
      "The Knee Massager combines targeted vibration massage with infrared heat therapy to relieve knee joint pain, stiffness and swelling. Its wrap-around design secures comfortably around the knee, allowing hands-free operation while you rest, read or watch TV.",
      "Especially popular among elderly users managing arthritis and fitness enthusiasts recovering from workouts, this massager includes 3 heat levels and 3 vibration intensities for personalised relief.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/knee-massager-1.jpg",
      "/images/products/knee-massager-2.jpg",
      "/images/products/knee-massager-3.jpg"
    ],
    mrp: 4500,
    price: 3299,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "Wrap-around design for secure, hands-free use",
      "Infrared heat therapy with 3 temperature levels",
      "Vibration massage with 3 intensity levels",
      "Rechargeable battery — cordless operation",
      "Fits knees, elbows and shoulders",
      "15-minute auto shut-off"
    ],
    specifications: [
      { label: "Massage Type", value: "Vibration + infrared heat" },
      { label: "Battery", value: "Rechargeable lithium-ion (2-3 hours use)" },
      { label: "Heat Levels", value: "3 (40°C / 45°C / 50°C)" },
      { label: "Weight", value: "0.8 kg" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Provides targeted relief for arthritic knee pain",
      "Cordless design allows use while moving around",
      "Also works on elbows and shoulders for versatile relief"
    ],
    faqs: [
      { question: "Can I use it on joints other than the knee?", answer: "Yes, the wrap-around design fits elbows and shoulders too, making it versatile for different types of joint pain." },
      { question: "Is it suitable for arthritis?", answer: "Many of our customers with arthritis report significant relief. However, we recommend consulting your doctor for severe conditions." },
      { question: "How long does the battery last?", answer: "A full charge provides 2-3 hours of use, which is equivalent to 6-10 sessions." }
    ],
    bestSeller: true,
    featured: false,
    seo: {
      metaTitle: "Knee Massager | Heated Knee Massager for Joint Pain | AVA Traders",
      metaDescription: "Heated knee massager with vibration and infrared therapy for joint pain, arthritis and post-exercise recovery. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "neck-shoulder-massager",
    slug: "neck-shoulder-massager",
    name: "Neck & Shoulder Massager",
    category: "health-care-products",
    shortDescription: "U-shaped neck and shoulder massager with deep shiatsu kneading, heat therapy and adjustable intensity.",
    description: [
      "The Neck & Shoulder Massager targets the most common pain points from desk work, driving and screen time. Its U-shaped design wraps comfortably around your neck and shoulders, with deep shiatsu kneading nodes that work out tension and knots.",
      "Built-in heat therapy adds warmth to the massage, improving blood flow and muscle relaxation. With adjustable intensity and bi-directional rotation, you can customise every session.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for setup guidance and warranty support after your purchase."
    ],
    images: [
      "/images/products/neck-shoulder-massager-1.jpg",
      "/images/products/neck-shoulder-massager-2.jpg",
      "/images/products/neck-shoulder-massager-3.jpg"
    ],
    mrp: 4000,
    price: 2999,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "U-shaped ergonomic design for neck and shoulders",
      "Deep shiatsu kneading with bi-directional rotation",
      "Built-in heat therapy",
      "3 speed levels",
      "Comfortable leatherette finish",
      "Can also be used on lower back, legs and waist"
    ],
    specifications: [
      { label: "Massage Type", value: "Shiatsu kneading" },
      { label: "Heat Therapy", value: "Yes" },
      { label: "Speed Levels", value: "3" },
      { label: "Power", value: "220V AC adapter" },
      { label: "Weight", value: "1.8 kg" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Relieves neck and shoulder stiffness from desk work",
      "Bi-directional kneading mimics professional massage techniques",
      "Versatile — use on neck, shoulders, back, waist or legs"
    ],
    faqs: [
      { question: "Can I use it while working at my desk?", answer: "Yes, the U-shaped design sits comfortably on your shoulders while you work. Just set a low intensity for background relief." },
      { question: "Is it safe to use the heat function daily?", answer: "Yes, the heat is mild (around 40-45°C) and the 15-minute auto shut-off prevents overuse." },
      { question: "Can I use it on my lower back?", answer: "Yes, the flexible design allows you to position it on your lower back, waist or even legs for targeted massage." }
    ],
    bestSeller: false,
    featured: true,
    seo: {
      metaTitle: "Neck & Shoulder Massager | Shiatsu Kneading Massager | AVA Traders",
      metaDescription: "U-shaped neck and shoulder massager with deep shiatsu kneading, heat therapy and adjustable intensity. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "scalp-massager",
    slug: "scalp-massager",
    name: "Scalp Massager",
    category: "health-care-products",
    shortDescription: "Electric scalp massager with silicone massage heads for relaxation, stress relief and improved scalp circulation.",
    description: [
      "The Scalp Massager uses gentle, rotating silicone heads to massage your scalp, relieving tension headaches, reducing stress and improving blood circulation to the scalp. It's the perfect way to unwind after a long day.",
      "Waterproof and rechargeable, it can be used in the shower or bath for an even more relaxing experience. The 4 interchangeable massage heads cater to different preferences — from gentle surface massage to deeper pressure.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for support after your purchase."
    ],
    images: [
      "/images/products/scalp-massager-1.jpg",
      "/images/products/scalp-massager-2.jpg",
      "/images/products/scalp-massager-3.jpg"
    ],
    mrp: 2500,
    price: 1799,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "Rotating silicone massage heads — gentle on scalp",
      "4 interchangeable head attachments",
      "IPX7 waterproof — safe in shower and bath",
      "Rechargeable battery — up to 4 hours use per charge",
      "2 rotation modes — clockwise and bi-directional",
      "Lightweight handheld design"
    ],
    specifications: [
      { label: "Massage Type", value: "Rotating silicone nodes" },
      { label: "Waterproof Rating", value: "IPX7" },
      { label: "Battery", value: "Rechargeable (4 hours)" },
      { label: "Attachments", value: "4 interchangeable heads" },
      { label: "Weight", value: "350g" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Relieves tension headaches and daily stress",
      "Improves blood circulation to the scalp",
      "Waterproof design for use during shower routines"
    ],
    faqs: [
      { question: "Can I use it in the shower?", answer: "Yes, it's IPX7 waterproof and designed for use in the shower or bath." },
      { question: "Is it suitable for all hair types?", answer: "Yes, the silicone massage heads work safely on all hair types and lengths." },
      { question: "How do I clean it?", answer: "Simply rinse the massage heads under running water. The silicone attachments can be removed for thorough cleaning." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Scalp Massager | Electric Scalp Massager for Relaxation | AVA Traders",
      metaDescription: "Electric scalp massager with silicone massage heads for relaxation, stress relief and improved circulation. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "facial-gun",
    slug: "facial-gun",
    name: "Facial Gun",
    category: "health-care-products",
    shortDescription: "Compact facial massage gun for face lifting, skin toning, micro-vibration therapy and anti-ageing care.",
    description: [
      "The Facial Gun delivers precise micro-vibrations to facial muscles, promoting blood circulation, reducing puffiness and enhancing skin absorption of serums and creams. Its compact design and gentle intensity make it safe and effective for daily skincare routines.",
      "With 4 interchangeable heads designed for different facial zones — forehead, cheeks, jawline, under-eye — it offers a spa-quality facial massage experience at home.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for support after your purchase."
    ],
    images: [
      "/images/products/facial-gun-1.jpg",
      "/images/products/facial-gun-2.jpg",
      "/images/products/facial-gun-3.jpg"
    ],
    mrp: 3500,
    price: 2499,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "Micro-vibration therapy for facial muscles",
      "4 interchangeable heads for different facial zones",
      "3 intensity levels — gentle, medium, firm",
      "USB-C rechargeable — 3 hours per charge",
      "Compact design fits in a makeup bag",
      "LED battery indicator"
    ],
    specifications: [
      { label: "Massage Type", value: "Micro-vibration" },
      { label: "Heads", value: "4 interchangeable" },
      { label: "Intensity Levels", value: "3" },
      { label: "Battery", value: "USB-C rechargeable (3 hours)" },
      { label: "Weight", value: "180g" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Promotes blood circulation for healthier-looking skin",
      "Enhances absorption of serums and moisturisers",
      "Reduces facial puffiness and under-eye bags"
    ],
    faqs: [
      { question: "Can I use it with serums?", answer: "Yes, applying your serum first and then using the facial gun helps the product absorb deeper into your skin." },
      { question: "Is it safe for sensitive skin?", answer: "Yes, start with the lowest intensity level and use the flat head attachment for gentle, even pressure." },
      { question: "How often should I use it?", answer: "We recommend 5-10 minutes per session, 3-4 times per week for best results." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Facial Gun | Facial Massage Gun for Skin Toning | AVA Traders",
      metaDescription: "Compact facial massage gun for face lifting, skin toning and anti-ageing care. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "massage-gun",
    slug: "massage-gun",
    name: "Massage Gun",
    category: "health-care-products",
    shortDescription: "Percussion therapy massage gun with deep tissue relief, 6 speed levels and 4 interchangeable heads.",
    description: [
      "The Massage Gun delivers rapid percussion therapy to sore muscles, breaking up tension, improving blood flow and speeding up recovery. With 6 speed levels and 4 interchangeable heads, it adapts to everything from gentle warm-up routines to intense post-workout deep tissue treatment.",
      "Popular with gym-goers, athletes and anyone dealing with muscle stiffness from desk work, this massage gun packs serious power into a portable, rechargeable design that fits in your gym bag.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for support after your purchase."
    ],
    images: [
      "/images/products/massage-gun-1.jpg",
      "/images/products/massage-gun-2.jpg",
      "/images/products/massage-gun-3.jpg"
    ],
    mrp: 6000,
    price: 4299,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "Percussion therapy with up to 3200 RPM",
      "6 adjustable speed levels",
      "4 interchangeable heads — round, flat, bullet, fork",
      "Brushless motor — quiet operation (under 50 dB)",
      "Rechargeable battery — 6 hours per charge",
      "Ergonomic grip for easy self-massage"
    ],
    specifications: [
      { label: "Percussion Speed", value: "1200-3200 RPM" },
      { label: "Stroke Depth", value: "12mm" },
      { label: "Speed Levels", value: "6" },
      { label: "Heads", value: "4 interchangeable" },
      { label: "Battery", value: "Rechargeable (6 hours)" },
      { label: "Noise Level", value: "Under 50 dB" },
      { label: "Weight", value: "800g" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Speeds up muscle recovery after workouts",
      "Breaks up tension and muscle knots from desk work",
      "Quiet brushless motor allows use in office or shared spaces"
    ],
    faqs: [
      { question: "Is it too powerful for home use?", answer: "No — the 6 speed levels let you start gentle (1200 RPM) and increase only as needed. Lower speeds are perfect for everyday use." },
      { question: "Which head should I use?", answer: "Round head for large muscle groups, flat for chest and back, bullet for trigger points, fork for spine-adjacent muscles. We provide a guide with every unit." },
      { question: "How does it compare to a massage chair?", answer: "A massage gun is portable and targets specific muscles, while a massage chair provides full-body relaxation. Many customers use both." }
    ],
    bestSeller: true,
    featured: true,
    seo: {
      metaTitle: "Massage Gun | Percussion Therapy Massage Gun | AVA Traders",
      metaDescription: "Percussion therapy massage gun with deep tissue relief, 6 speed levels and 4 interchangeable heads. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "sauna-steam-bath",
    slug: "sauna-steam-bath",
    name: "Sauna Steam Bath",
    category: "health-care-products",
    shortDescription: "Portable home sauna steam bath for detoxification, muscle relaxation and improved skin health.",
    description: [
      "The Sauna Steam Bath brings the relaxation of a professional steam sauna into your home. The portable, foldable design sets up in minutes and creates a personal steam enclosure that promotes sweating, detoxification and deep muscle relaxation.",
      "With adjustable temperature controls and a timer, you can customise sessions from a gentle 15-minute warm-up to an intense 30-minute detox. The included foldable chair and foot mat complete the spa-at-home experience.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for support after your purchase."
    ],
    images: [
      "/images/products/sauna-steam-bath-1.jpg",
      "/images/products/sauna-steam-bath-2.jpg",
      "/images/products/sauna-steam-bath-3.jpg"
    ],
    mrp: 8000,
    price: 5999,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "Portable foldable design — sets up in 3 minutes",
      "Adjustable temperature control (up to 50°C)",
      "30-minute timer with auto shut-off",
      "Includes foldable chair and foot mat",
      "2-litre water tank for extended sessions",
      "Zip-close enclosure retains steam efficiently"
    ],
    specifications: [
      { label: "Type", value: "Portable steam sauna" },
      { label: "Temperature Range", value: "35°C to 50°C" },
      { label: "Tank Capacity", value: "2 litres" },
      { label: "Power", value: "220V, 850W" },
      { label: "Dimensions (Open)", value: "80 x 80 x 100 cm" },
      { label: "Weight", value: "3.5 kg (folded)" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Promotes sweating and natural detoxification",
      "Relaxes muscles and relieves joint stiffness",
      "Portable design means no permanent installation needed"
    ],
    faqs: [
      { question: "Is it safe to use at home?", answer: "Yes, with proper use following the included instructions. The auto shut-off ensures safety. We recommend staying hydrated during and after sessions." },
      { question: "How much water does it use?", answer: "A 2-litre tank provides approximately 30-40 minutes of continuous steam. Refill as needed for longer sessions." },
      { question: "Can I fold it for storage?", answer: "Yes, the entire unit folds flat and can be stored in a closet or under a bed." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Sauna Steam Bath | Portable Home Sauna | AVA Traders",
      metaDescription: "Portable home sauna steam bath for detoxification, muscle relaxation and improved skin health. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "hpm-physiotherapy",
    slug: "hpm-physiotherapy",
    name: "HPM Physiotherapy Device",
    category: "health-care-products",
    shortDescription: "HPM physiotherapy device for pain management, muscle rehabilitation and post-injury recovery at home.",
    description: [
      "The HPM Physiotherapy Device brings clinical-grade physiotherapy technology into your home. Using a combination of heat, percussion and micro-current stimulation, it assists with pain management, muscle rehabilitation and post-injury recovery.",
      "Designed in consultation with physiotherapy professionals, this device includes multiple treatment modes for different conditions — chronic pain, sports injuries, post-surgery recovery and everyday muscle stiffness.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for support after your purchase."
    ],
    images: [
      "/images/products/hpm-physiotherapy-1.jpg",
      "/images/products/hpm-physiotherapy-2.jpg",
      "/images/products/hpm-physiotherapy-3.jpg"
    ],
    mrp: 12000,
    price: 8999,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "Combined heat, percussion and micro-current therapy",
      "Multiple treatment modes for different conditions",
      "Adjustable intensity for safe, personalised use",
      "Rechargeable battery — 4 hours per charge",
      "Portable design — use at home, office or gym",
      "LED display with treatment timer"
    ],
    specifications: [
      { label: "Therapy Types", value: "Heat + percussion + micro-current" },
      { label: "Treatment Modes", value: "6 preset + manual" },
      { label: "Battery", value: "Rechargeable (4 hours)" },
      { label: "Weight", value: "1.2 kg" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "Clinical-grade physiotherapy technology for home use",
      "Multiple treatment modes address different pain conditions",
      "Portable enough to carry to the office or gym"
    ],
    faqs: [
      { question: "Do I need a prescription to use it?", answer: "No prescription is needed for home use, but we recommend consulting your doctor or physiotherapist if you have specific medical conditions." },
      { question: "Can it replace physiotherapy sessions?", answer: "It complements professional physiotherapy but shouldn't replace it for serious conditions. Many users find it helpful for maintenance between clinic visits." },
      { question: "Is it safe for elderly users?", answer: "Yes, with the lowest intensity setting and shorter sessions. We recommend supervised use for the first few sessions." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "HPM Physiotherapy Device | Home Physiotherapy | AVA Traders",
      metaDescription: "HPM physiotherapy device for pain management, muscle rehabilitation and post-injury recovery at home. Shop at AVA Traders, Bhubaneswar."
    }
  },
  {
    id: "foldable-intelligent-sole-massager",
    slug: "foldable-intelligent-sole-massager",
    name: "Foldable Intelligent Sole Massager",
    category: "health-care-products",
    shortDescription: "Foldable EMS sole massager with intelligent foot pad, multiple modes and portable design for on-the-go relief.",
    description: [
      "The Foldable Intelligent Sole Massager uses EMS (Electrical Muscle Stimulation) technology through a thin, foldable foot pad to stimulate acupressure points on the soles of your feet. It promotes circulation, relieves foot fatigue and supports overall well-being through reflexology principles.",
      "Its ultra-slim foldable design makes it the most portable massager in our catalogue — fold it, slip it into a bag and use it at your desk, on a flight, or at home on the couch.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for support after your purchase."
    ],
    images: [
      "/images/products/foldable-intelligent-sole-massager-1.jpg",
      "/images/products/foldable-intelligent-sole-massager-2.jpg",
      "/images/products/foldable-intelligent-sole-massager-3.jpg"
    ],
    mrp: 3500,
    price: 2499,
    availability: "in-stock",
    warranty: "6 Months",
    features: [
      "EMS technology stimulates acupressure points on soles",
      "Ultra-slim foldable design — fits in a bag",
      "6 massage modes with 9 intensity levels",
      "USB-C rechargeable — 2 hours per charge",
      "LED display with mode indicator",
      "Non-slip surface for safe use"
    ],
    specifications: [
      { label: "Technology", value: "EMS (Electrical Muscle Stimulation)" },
      { label: "Modes", value: "6 massage modes" },
      { label: "Intensity Levels", value: "9" },
      { label: "Battery", value: "USB-C rechargeable (2 hours)" },
      { label: "Dimensions (Folded)", value: "16 x 14 x 3 cm" },
      { label: "Weight", value: "280g" },
      { label: "Warranty", value: "6 Months" }
    ],
    benefits: [
      "Most portable massager — use anywhere, anytime",
      "EMS technology stimulates foot reflexology points",
      "Foldable design makes it ideal for travel"
    ],
    faqs: [
      { question: "What does EMS feel like?", answer: "EMS feels like a tingling or pulsing sensation on the soles of your feet. Start with the lowest intensity and gradually increase as you get comfortable." },
      { question: "Is it safe for people with pacemakers?", answer: "No, EMS devices should not be used by people with pacemakers or other implanted electronic devices. Please consult your doctor." },
      { question: "Can I use it at my office desk?", answer: "Yes! That's one of the best use cases. Place it under your desk and enjoy a subtle foot massage while working." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Foldable Intelligent Sole Massager | Portable EMS Foot Massager | AVA Traders",
      metaDescription: "Foldable EMS sole massager with intelligent foot pad, multiple modes and portable design. Shop at AVA Traders, Bhubaneswar."
    }
  }
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getBestSellers() {
  return products.filter((p) => p.bestSeller);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
}
