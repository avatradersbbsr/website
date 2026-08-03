// AVA TRADERS — FINAL PRODUCT CATALOG
// 26 products across 3 categories: Massage Chairs, Leg Massagers, Health Care Products
import { Product } from "@/types/product";

export const products: Product[] = [
  // ═══════════════════════════════════════════════
  // MASSAGE CHAIRS (10 products)
  // ═══════════════════════════════════════════════
  {
    id: "a-710-2-classic-premium-4d",
    slug: "a-710-2-classic-premium-4d",
    name: "A-710-2 Classic Premium 4D Massage Chair",
    category: "massage-chairs",
    shortDescription: "Flagship 4D massage chair with 135cm S+L rail, 23 auto programs, graphene shawl heating, and 7-inch TFT color screen.",
    description: [
      "The A-710-2 Classic Premium 4D Massage Chair represents the ultimate in therapeutic home recovery. Driven by AI massage robots with 1.5-21cm width and 12cm depth adjustments, it mimics human hand massage techniques to deliver precise deep-tissue relief.",
      "Equipped with a 135cm S+L-track long rail, it covers your back from the neck down to the thighs. A unique graphene heated shawl assembly with a wormwood herb medicine bag provides targeted hot compress therapy for shoulders, back, waist, and abdomen.",
      "Complete with 23 automatic programs, 3D digital audio, wireless charging, and a 20cm stretch footrest featuring calf kneading and foot roller scraping, the A-710-2 brings showroom-quality therapy directly to your space."
    ],
    images: [
      "/images/products/massage-chairs/a-710-2-classic-premium-4d/1.jpg",
      "/images/products/massage-chairs/a-710-2-classic-premium-4d/2.jpg",
      "/images/products/massage-chairs/a-710-2-classic-premium-4d/3.jpg"
    ],
    mrp: 435000,
    price: 280000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "AI massage robots with 135cm S+L shape long rail tracking",
      "23 types of automatic massage programs (AI intelligent, exclusive, relaxing)",
      "Shawl hot compress with graphene heating and wormwood herb medicine bag",
      "7-inch TFT colored touchscreen controller and armrest shortcut keys",
      "Leg and foot massage with calf kneading and foot roller scraping",
      "3D digital audio and mobile phone wireless charging function",
      "20cm stretch range footrest for height adjustment"
    ],
    specifications: [
      { label: "Model", value: "A710-2" },
      { label: "Track Type", value: "135cm S+L Shape Long Rail" },
      { label: "AI Robot Adjustment", value: "1.5-21cm width, 12cm depth" },
      { label: "Power", value: "220W, 110-240V~ 50/60Hz" },
      { label: "Noise Level", value: "≤60dB" },
      { label: "Safety Structure", value: "Class I" },
      { label: "Dimensions (Reclined)", value: "1760 x 850 x 880 mm" },
      { label: "Weight (G.W)", value: "153.5 kg" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Shawl hot compress warms chest and abdomen for deep relaxation",
      "Ankle stretching and calf kneading relieve severe lower leg fatigue",
      "23 auto programs provide customized relief for white-collar workers and athletes"
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
      metaDescription: "Classic premium 4D massage chair with 135cm S+L rail, graphene shawl heating, 23 auto programs, and wireless charging. Visit AVA Traders showroom."
    }
  },
  {
    id: "z-91-ultra-luxury",
    slug: "z-91-ultra-luxury",
    name: "Z-91 Ultra Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Ultra luxury full-body massage chair with 7-inch PAD touch screen, 24 auto programs, 10 valves 42 airbags, and wireless charging.",
    description: [
      "The Z-91 Ultra Luxury Massage Chair is a high-class home therapy solution. It features an integrated SL track rail from neck to thigh and a 2D massage hand system with automatic shoulder detection, delivering precise neck and shoulder rubs.",
      "The Z-91 is equipped with 10 valves and 42 airbags for complete body wrapping, and 24V carbon fiber heating on the backrest and footrest. Control is effortless via the 7-inch PAD touch screen, rotating navigation buttons, or intelligent voice commands.",
      "The footrest uses leg electric telescopic technology to auto-detect height, offering a dedicated knee massage, 24 airbags for leg kneading, and a closed foot massage with 3 groups of rollers. The premium PU cover features 5 years hydrolysis resistance."
    ],
    images: [
      "/images/products/massage-chairs/z-91-ultra-luxury/1.jpg",
      "/images/products/massage-chairs/z-91-ultra-luxury/2.jpg",
      "/images/products/massage-chairs/z-91-ultra-luxury/3.jpg"
    ],
    mrp: 350000,
    price: 220000,
    availability: "limited-stock",
    warranty: "3 Years (2 Year Comprehensive + 1 Year Motor)",
    features: [
      "Integrated SL track rail and automatic shoulder detection",
      "9 manual modes and 24 automatic modes",
      "10 valves with 42 airbags wrapping shoulders, armrests, and footrest",
      "7-inch PAD touch screen, rotating controls, and intelligent voice control",
      "Electric telescopic leg rest with dedicated knee massage and foot rollers",
      "24V safe voltage with carbon fiber heating on back and legs",
      "Wireless charging on armrest and PU with 5 years hydrolysis resistance"
    ],
    specifications: [
      { label: "Model", value: "Z91 (High Class)" },
      { label: "Track Type", value: "Integrated SL Track" },
      { label: "Airbags & Valves", value: "10 Valves, 42 Airbags" },
      { label: "Control Interface", value: "7\" Touch PAD & Voice Control" },
      { label: "Power & Voltage", value: "180W, 220V" },
      { label: "Dimensions", value: "1870 x 750 x 840 mm" },
      { label: "Weight (G.W/N.W)", value: "125 kg / 110 kg" },
      { label: "Material", value: "Anti-hydrolysis PU (5 Years Resistance)" },
      { label: "Warranty", value: "3 Years (2 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Automatic shoulder detection customizes neck massages",
      "Dedicated electric knee massage helps reduce joint pain",
      "5 years hydrolysis resistant PU ensures long-term cover durability"
    ],
    faqs: [
      { question: "What makes the Z-91 'Ultra Luxury'?", answer: "The Z-91 features 24 automatic modes, 10 valves, 42 airbags, a 7-inch touch PAD, and an electric telescopic leg rest with dedicated knee massage — commercial-grade details built for the home." },
      { question: "Can I try the Z-91 at the showroom?", answer: "Yes, the Z-91 is on display at our Puri Bypass Road showroom. We recommend calling ahead as it's a limited-stock model." },
      { question: "Is installation included?", answer: "Yes, for Bhubaneswar deliveries, our team handles complete setup and provides a walkthrough of all features including voice control setup." }
    ],
    bestSeller: false,
    featured: true,
    seo: {
      metaTitle: "Z-91 Ultra Luxury Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "High-class massage chair with 7-inch PAD screen, voice control, 24 auto programs, and knee massage. Shop at AVA Traders showroom."
    }
  },
  {
    id: "z-90-economic-premium-ultra-luxury",
    slug: "z-90-economic-premium-ultra-luxury",
    name: "Z-90 Economic Premium Ultra Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Economic premium ultra luxury massage chair with 7-inch PAD touch screen, 20 auto programs, and 24V graphene heating.",
    description: [
      "The Z-90 Economic Premium Ultra Luxury Massage Chair represents the perfect bridge between cost and luxury. Equipped with a 2D massage hand system and automatic shoulder detection, it adjusts dynamically to neck and shoulder heights.",
      "Featuring an integrated SL track rail from neck to thigh, the Z-90 offers 20 automatic programs and 9 manual modes. Microfiber far-infrared graphene heating provides constant temperature warming on the waist and backrest to promote muscle relief.",
      "The chair includes 15 valves with 54 airbags for full body wrapping, 4 valves with 8 airbags in the armrests, and wireless charging. The footrest has a knee massage function, electronic stretching, 34 footrest airbags, and 3 groups of sole rollers."
    ],
    images: [
      "/images/products/z-90-economic-premium/1.jpg",
      "/images/products/z-90-economic-premium/2.jpg",
      "/images/products/z-90-economic-premium/3.jpg"
    ],
    mrp: 305000,
    price: 195000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "Integrated SL track rail and automatic shoulder detection",
      "9 manual modes and 20 automatic massage programs",
      "15 valves with 54 airbags for comprehensive full-body wrapping",
      "7-inch PAD touch screen and rotating navigation control buttons",
      "Electric telescopic leg rest with electronic stretching and sole rollers",
      "24V graphene heating on waist and seat side (constant temperature)",
      "Wireless charging on armrests and 5 years hydrolysis resistant PU"
    ],
    specifications: [
      { label: "Model", value: "Z90 (High Class)" },
      { label: "Track Type", value: "Integrated SL Track" },
      { label: "Airbags & Valves", value: "15 Valves, 54 Airbags" },
      { label: "Control Interface", value: "7\" PAD Touch Screen" },
      { label: "Power & Voltage", value: "160W, 220V" },
      { label: "Dimensions", value: "1970 x 760 x 850 mm" },
      { label: "Weight (G.W/N.W)", value: "120 kg / 105 kg" },
      { label: "Material", value: "Anti-hydrolysis PU (5 Years Resistance)" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "20 automatic programs provide customized relief for all family members",
      "Graphene constant temperature heating speeds back and waist recovery",
      "54 wrapping airbags mimic professional therapist pressure"
    ],
    faqs: [
      { question: "How does the Z-90 compare to the Z-91?", answer: "The Z-90 offers 20 auto programs and 54 airbags (compared to Z-91's 24 programs and 42 airbags) and shares the 7-inch touch PAD controller, but does not include voice control and electric telescopic knee massage." },
      { question: "Can I try the Z-90 before buying?", answer: "Yes, it's on display at our showroom. Visit us at Puri Bypass Road, Bhubaneswar." },
      { question: "Do you offer EMI options?", answer: "We can assist with financing options. Please contact us on WhatsApp or call for details on available EMI plans." }
    ],
    bestSeller: true,
    featured: true,
    seo: {
      metaTitle: "Z-90 Economic Premium Ultra Luxury Massage Chair | AVA Traders",
      metaDescription: "Economic premium ultra luxury massage chair with 7-inch PAD touch screen, 20 auto programs, 54 airbags, and zero gravity. Shop at AVA Traders Bhubaneswar."
    }
  },
  {
    id: "a-372-2-premium-ultra-luxury",
    slug: "a-372-2-premium-ultra-luxury",
    name: "A-372-2 Premium Ultra Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Air suspension 3D massage chair with 9 techniques, 17 voice commands, and graphene waist/leg heating.",
    description: [
      "The A-372-2 Premium Ultra Luxury Massage Chair features an Air Suspension 3D Massage Manipulator. Designed to penetrate up to 12cm deep into the fascia layer, the rollers feature a 10.5cm forward stretch and a 3-21cm width adjustment.",
      "The integrated SL extra long guide rail supports 9 distinct massage techniques (Knead, Tap, Knock, Shiatsu, Knead & Tap, 4D Knead, 4D Tap, 4D Knead & Tap, 4D Shiatsu) with 5 adjustable speeds, 3 widths, and 5 strength levels.",
      "It features a 17-command voice control system, sleep music surround speakers, a 7-inch touch screen, and armrest controls. Complete with graphene waist and leg heating, whole-body airbags, palm magnetic therapy, and a 16cm extendable calf rest."
    ],
    images: [
      "/images/products/massage-chairs/a-372-2-premium-ultra-luxury/1.jpg",
      "/images/products/massage-chairs/a-372-2-premium-ultra-luxury/2.jpg",
      "/images/products/massage-chairs/a-372-2-premium-ultra-luxury/3.jpg"
    ],
    mrp: 305000,
    price: 190000,
    availability: "in-stock",
    warranty: "3 Years (2 Year Comprehensive + 1 Year Motor)",
    features: [
      "Air Suspension 3D Massage Manipulator with 12cm depth",
      "9 advanced massage techniques (standard and 4D controls)",
      "Voice control with 17 commands and sleep music speakers",
      "7-inch touch screen controller and armrest shortcut keys",
      "Graphene waist and leg heating for constant temperature compress",
      "Whole body soft pressure airbags and palm magnetic therapy",
      "Extendable calf rest (up to 16cm range) and sole rollers"
    ],
    specifications: [
      { label: "Model", value: "A372-2" },
      { label: "Roller Technology", value: "Air Suspension 3D Manipulator" },
      { label: "Track Type", value: "SL Extra Long Guide Rail" },
      { label: "Massage Customization", value: "5 Speed, 3 Width, 5 Strength levels" },
      { label: "Power", value: "100W, 220-240V~ 50Hz/60Hz" },
      { label: "Noise Level", value: "≤60dB" },
      { label: "Weight (G.W/N.W)", value: "105 kg / 89 kg" },
      { label: "Dimensions (Reclined)", value: "1807 x 760 x 830 mm" },
      { label: "Warranty", value: "3 Years (2 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "12cm roller penetration delivers deep-tissue relief to spinal fascia",
      "17-command voice control offers complete hands-free operation",
      "Graphene thermostatic heat compress relieves waist and lower leg cramps"
    ],
    faqs: [
      { question: "What is the Air Suspension Manipulator?", answer: "It is a flexible 3D massage head system that uses air suspension principles to regulate roller pressure against your body curve, providing deep massage without pain." },
      { question: "Is the A-372-2 suitable for elderly users?", answer: "Yes, it features gentle automatic body curve detection and 5-levels of adjustable intensity, making it very comfortable and safe for elderly users." },
      { question: "How much space does it need?", answer: "The A-372-2 reclines to a length of 1807mm. Our delivery team handles all setup and clearance requirements." }
    ],
    bestSeller: false,
    featured: true,
    seo: {
      metaTitle: "A-372-2 Premium Ultra Luxury Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Air suspension 3D massage chair with 9 techniques, 17 voice commands, graphene waist/leg heating, and touch screen. Shop at AVA Traders showroom."
    }
  },
  {
    id: "z-plus-100-premium-luxury",
    slug: "z-plus-100-premium-luxury",
    name: "Z+100 Premium Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Premium luxury massage chair with 3D SL-track, 12 auto modes, voice control, and far-infrared waist heating.",
    description: [
      "The Z+100 Premium Luxury Massage Chair (Z100 model) is designed with intelligent muted massage hands that move up and down, offering knead and flap functions. Its SL curved rail perfectly fits the spine from head to thigh.",
      "The Z+100 features 12 automatic modes, 3 memory modes, and 17 voice control commands for complete hands-free operation. Adopting far-infrared microfiber heating, it delivers constant temperature warming to prevent waist muscle strain.",
      "With full-body airbag wrapping (34 airbags total), 3D digital audio on the upper armrests, sole rollers, calftrest kneading, and a 3.5-inch color remote control, the Z+100 provides a quiet and deeply relaxing home therapy session."
    ],
    images: [
      "/images/products/massage-chairs/z-plus-100-premium-luxury/1.jpg",
      "/images/products/massage-chairs/z-plus-100-premium-luxury/2.jpg",
      "/images/products/massage-chairs/z-plus-100-premium-luxury/3.jpg"
    ],
    mrp: 290000,
    price: 175000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "SL curved rail technology from head to thigh",
      "12 automatic massage modes and 3 memory modes",
      "Voice control with detector inside left side speaker",
      "Full body airbag compression system (34 airbags)",
      "Far-infrared microfiber waist heating (muscle strain prevention)",
      "3D digital music speakers and 3.5-inch TFT color remote",
      "Sole roller and calftrest kneading massage"
    ],
    specifications: [
      { label: "Model", value: "Z100" },
      { label: "Track Type", value: "SL Curved Guide Rail" },
      { label: "Airbag Count", value: "34 Airbags (with 3 strength levels)" },
      { label: "Automatic Programs", value: "12 Auto Modes" },
      { label: "Heat Therapy", value: "Far-Infrared Microfiber (Waist)" },
      { label: "Power & Voltage", value: "150W, 220V-240V~ 50/60Hz" },
      { label: "Safety Design", value: "Class I" },
      { label: "Control System", value: "3.5\" TFT Color Remote & Voice" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "12 auto modes (including lady, worker, and easy-sleep) cover all profiles",
      "Far-infrared heating warms deep back muscles to relieve fatigue",
      "Muted rollers ensure a peaceful massage session without loud motor noise"
    ],
    faqs: [
      { question: "What voice commands does the Z+100 support?", answer: "It supports commands like 'Hi, what's up?', 'massage on', 'easy-sleep', 'hip shaping', and 'waist care' for complete hands-free navigation." },
      { question: "Does it work on Indian voltage?", answer: "Yes, the Z+100 supports standard 220V-240V Indian power supply with Class I safety design." },
      { question: "How heavy is the Z+100?", answer: "The chair is built in a solid all-in-one package. Our delivery team handles all setup and positioning in your room." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Z+100 Premium Luxury Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Premium luxury Z100 massage chair with SL curved rail, 12 auto modes, voice control, and far-infrared waist heating. Shop at AVA Traders showroom."
    }
  },
  {
    id: "a-321-19-premium-luxury",
    slug: "a-321-19-premium-luxury",
    name: "A-321-19 Premium Luxury Massage Chair",
    category: "massage-chairs",
    shortDescription: "Premium luxury massage chair with 135cm SL guide rail, 8 auto programs, leg kneading, and voice control.",
    description: [
      "The A-321-19 Premium Luxury Massage Chair is an advanced home wellness system featuring an intelligent mechanical massage hand system. It collects curve data on the back to imitate professional finger pressing, kneading, and tapping.",
      "Equipped with a super long 135cm SL-shape guide rail and zero-gravity recline, it distributes body pressure evenly to achieve full relaxation. The zero-space design slides forward to require only 5cm of clearance from the wall.",
      "The A-321-19 includes 8 automatic programs, 28 air bags, leg kneading, palm magnetic therapy, carbon fiber back heating, and wireless Bluetooth music speakers."
    ],
    images: [
      "/images/products/massage-chairs/a-321-19-premium-luxury/1.jpg",
      "/images/products/massage-chairs/a-321-19-premium-luxury/2.jpg",
      "/images/products/massage-chairs/a-321-19-premium-luxury/3.jpg"
    ],
    mrp: 280000,
    price: 170000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "135cm SL-shape curved guide rail tracking",
      "Intelligent mechanical massage hands (kneading, tapping, finger press)",
      "8 kinds of automatic massage programs (Back & Waist, Vertebral, Traction, etc.)",
      "Intelligent voice control recognition and shortcut button",
      "Zero gravity recline and 5cm space-saving wall slide",
      "Leg kneading function and 20cm leg stretch adjustment",
      "Carbon fiber back heating (40°C - 50°C) and palm magnetic therapy"
    ],
    specifications: [
      { label: "Model", value: "A321-19" },
      { label: "Track Type", value: "135cm SL-Shape Curved Rail" },
      { label: "Airbag Count", value: "28 Airbags (with 3 intensity levels)" },
      { label: "Automatic Programs", value: "8 Auto Programs" },
      { label: "Control Interface", value: "Voice Control & LCD Color Remote" },
      { label: "Power & Voltage", value: "150W, 110-240V~ 50/60Hz" },
      { label: "Dimensions (Reclined)", value: "1740 x 760 x 710 mm" },
      { label: "Weight (G.W/N.W)", value: "115 kg / 95 kg" },
      { label: "Safety Design", value: "Class I" },
      { label: "Noise Level", value: "≤60dB" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "5cm zero-space wall slide saves space in small rooms",
      "Leg kneading and spring foot retraction adapts to all user heights",
      "Carbon fiber heating penetrates deep tissue to relieve lumbar pain"
    ],
    faqs: [
      { question: "Is the A-321-19 covered under warranty?", answer: "Yes, it comes with a 2-year warranty (1 Year Comprehensive + 1 Year Motor) backed by local showroom support." },
      { question: "Can I see the A-321-19 in person before buying?", answer: "Yes, you can test it at our Bhubaneswar showroom." },
      { question: "What is the leg kneading function?", answer: "It uses specialized compression wrappers to gently squeeze and knead calves, reducing stiffness from long hours of standing." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "A-321-19 Premium Luxury Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Premium luxury A321-19 massage chair with SL curved rail, 8 auto modes, voice control, and leg kneading. Shop at AVA Traders showroom."
    }
  },
  {
    id: "rc-1-economic",
    slug: "rc-1-economic",
    name: "RC-1 Economic Massage Chair",
    category: "massage-chairs",
    shortDescription: "Economic full-body massage chair with 18 auto programs, bionic manipulator, zero gravity and SL rail.",
    description: [
      "The RC-1 Economic Massage Chair is a smart upgrade for budget-conscious buyers. It features an intelligent AI bionic manipulator that offers 3 frequency regulations, 3 massage strengths, and 8 massage techniques to relieve systemic soreness.",
      "Equipped with an extended SL rail that follows the spine from head to toe, the RC-1 provides zero-gravity recline to make you feel like you are sleeping on the clouds. The handrail linkage and leg airbags ensure full-body wrapping.",
      "Designed to save space (requires only 15cm from the wall), it includes bluetooth music, a USB charging port, heating function, and a large screen touchscreen controller. Best of all, it offers free installation out of the box."
    ],
    images: [
      "/images/products/massage-chairs/rc-1-economic/1.jpg",
      "/images/products/massage-chairs/rc-1-economic/2.jpg",
      "/images/products/massage-chairs/rc-1-economic/3.jpg"
    ],
    mrp: 116000,
    price: 75000,
    availability: "in-stock",
    warranty: "1 Year Comprehensive",
    features: [
      "Extended SL rail tracking from head to toe",
      "AI bionic manipulator (3 speeds, 3 strengths, 8 techniques)",
      "18 kinds of automatic programs for comfort and convenience",
      "Zero gravity function for weightless recline (cloud sleep)",
      "Large screen control, USB port, and Bluetooth music",
      "Heating function, handrail linkage, and leg airbags wrapping",
      "Space-saving design (requires only 15cm from wall)"
    ],
    specifications: [
      { label: "Track Type", value: "Extended SL-Track" },
      { label: "Programs", value: "18 Auto Programs" },
      { label: "Manipulator Adjustment", value: "3 Frequency, 3 Strength, 8 Techniques" },
      { label: "Recline Angle", value: "Zero Gravity Position" },
      { label: "Power", value: "180W, 220V" },
      { label: "Wall Clearance", value: "15 cm Space Saving" },
      { label: "Installation", value: "Free Installation Out of Box" },
      { label: "Warranty", value: "1 Year Comprehensive" }
    ],
    benefits: [
      "18 auto programs provide complete convenience for everyday relief",
      "Space-saving design fits in compact rooms needing only 15cm wall gap",
      "Free out-of-box setup means no technical installation hassle"
    ],
    faqs: [
      { question: "Is the RC-1 suitable for daily use?", answer: "Yes, the RC-1 is designed for daily 20-30 minute sessions. The auto timer and overheat protection ensure safe operation." },
      { question: "Can it fit in a small room?", answer: "The RC-1 features a space-saving design that requires only 15cm of clearance from the wall when reclined." },
      { question: "What is the out-of-box setup?", answer: "The RC-1 arrives as an all-in-one package. Our team delivers it and simply slides it out of the box — no complex assembly is needed." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "RC-1 Economic Massage Chair | Affordable Massage Chair | AVA Traders",
      metaDescription: "Affordable full-body massage chair with 18 auto programs, AI manipulator, extended SL rail, and zero gravity. Shop at AVA Traders Bhubaneswar."
    }
  },
  {
    id: "rc-2-economic-premium",
    slug: "rc-2-economic-premium",
    name: "RC-2 Economic Premium Massage Chair",
    category: "massage-chairs",
    shortDescription: "Economic premium massage chair with waist/back hot compress, 360° airbag wrap, and high leg care system.",
    description: [
      "The RC-2 Economic Premium Massage Chair (RC-02 model) is designed to offer maximum value with premium features. It features a constant temperature hot compress for the waist and back, providing deep warming and relaxation in cold weather.",
      "Equipped with a 360° full-body airbag wrap, it delivers a human-like pinching and kneading sensation across the shoulders, arms, hips, and calves. The new high leg care system includes calf rollers, leg retraction, and foot airbags with sole scraping.",
      "Control is simple via the extra-large screen controller with 6 automatic programs. Featuring zero gravity mode, immersive Bluetooth music surround, and all-in-one free installation out of the box, it is the best value upgrade in our showroom."
    ],
    images: [
      "/images/products/massage-chairs/rc-2-economic-premium/1.jpg",
      "/images/products/massage-chairs/rc-2-economic-premium/2.jpg",
      "/images/products/massage-chairs/rc-2-economic-premium/3.jpg"
    ],
    mrp: 200000,
    price: 125000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "Waist and back hot compress (constant temp, overheat protection)",
      "360° full-body airbag wrap (shoulders, arms, hips, calves, feet)",
      "High leg care system with calf rollers, heel rubbing, and sole scraping",
      "Extra-large screen controller and 6 automatic programs",
      "Zero gravity mode for a floating relaxation experience",
      "Immersive Bluetooth music surround speakers",
      "All-in-one free installation out of the box"
    ],
    specifications: [
      { label: "Model", value: "RC-02" },
      { label: "Airbags", value: "360° Full Body Wrap (with Knee Airbags)" },
      { label: "Heat Therapy", value: "Waist and Back Hot Compress" },
      { label: "Leg Care", value: "Calf Rollers + Leg side rubbing + Sole Scraping" },
      { label: "Programs", value: "6 Auto Programs" },
      { label: "Installation", value: "All-in-one Free Installation" },
      { label: "Power", value: "220V, 220W" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Constant temperature compress relieves chronic lower back soreness",
      "High leg adjustment and leg retraction fits tall and short users perfectly",
      "Pre-assembled out of the box design makes installation instant"
    ],
    faqs: [
      { question: "What's the difference between RC-1 and RC-2?", answer: "The RC-2 (RC-02 model) adds 360° airbag wrapping (including knee coverage), dedicated calf rollers, constant temperature back heating, and a larger screen controller." },
      { question: "Is delivery free in Bhubaneswar?", answer: "Delivery charges vary by location. Please contact us on WhatsApp for a delivery and setup quote to your address." },
      { question: "Can I pay in instalments?", answer: "We can assist with financing options. Please contact us for details on available EMI plans." }
    ],
    bestSeller: true,
    featured: false,
    seo: {
      metaTitle: "RC-2 Economic Premium Massage Chair | Best Value | AVA Traders",
      metaDescription: "Economic premium RC-02 massage chair with 360° airbag wrap, back hot compress, calf rollers, and zero gravity. Shop at AVA Traders Bhubaneswar."
    }
  },

  {
    id: "elite-classic",
    slug: "elite-classic",
    name: "Elite Classic Massage Chair",
    category: "massage-chairs",
    shortDescription: "Elite classic full-body massage chair with 135cm SL guide rail, 8 auto programs, leg kneading, and voice control.",
    description: [
      "The Elite Classic Massage Chair is a premium home wellness system designed to deliver high-quality therapeutic relief. It features an intelligent mechanical massage hand system that adapts to your back curve, imitating professional finger pressing, kneading, and tapping.",
      "Equipped with a long 135cm SL-shape guide rail and zero-gravity recline, it distributes body pressure evenly to achieve full relaxation. Its space-saving design slides forward to require minimal clearance from the wall.",
      "Featuring 8 automatic programs, 28 air bags, leg kneading, palm magnetic therapy, carbon fiber back heating, and wireless Bluetooth music speakers."
    ],
    images: [
      "/images/products/massage-chairs/elite-classic/1.png"
    ],
    mrp: 290000,
    price: 185000,
    availability: "in-stock",
    warranty: "2 Years (1 Year Comprehensive + 1 Year Motor)",
    features: [
      "135cm SL-shape curved guide rail tracking",
      "Intelligent mechanical massage hands (kneading, tapping, finger press)",
      "8 kinds of automatic massage programs (Back & Waist, Vertebral, Traction, etc.)",
      "Intelligent voice control recognition and shortcut button",
      "Zero gravity recline and space-saving wall slide",
      "Leg kneading function and 20cm leg stretch adjustment",
      "Carbon fiber back heating (40°C - 50°C) and palm magnetic therapy"
    ],
    specifications: [
      { label: "Model", value: "Elite Classic" },
      { label: "Track Type", value: "135cm SL-Shape Curved Rail" },
      { label: "Airbag Count", value: "28 Airbags (with 3 intensity levels)" },
      { label: "Automatic Programs", value: "8 Auto Programs" },
      { label: "Control Interface", value: "Voice Control & LCD Color Remote" },
      { label: "Power & Voltage", value: "150W, 110-240V~ 50/60Hz" },
      { label: "Weight (G.W/N.W)", value: "115 kg / 95 kg" },
      { label: "Warranty", value: "2 Years (1 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Zero-space wall slide saves space in small rooms",
      "Leg kneading and spring foot retraction adapts to all user heights",
      "Carbon fiber heating penetrates deep tissue to relieve lumbar pain"
    ],
    faqs: [
      { question: "Is the Elite Classic covered under warranty?", answer: "Yes, it comes with a 2-year warranty (1 Year Comprehensive + 1 Year Motor) backed by local showroom support." },
      { question: "Can I see the Elite Classic in person before buying?", answer: "Yes, you can test it at our showroom in Bhubaneswar." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Elite Classic Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Premium Elite Classic massage chair with SL curved rail, 8 auto modes, voice control, and leg kneading. Shop at AVA Traders showroom."
    }
  },
  {
    id: "am-999-luxury-premium",
    slug: "am-999-luxury-premium",
    name: "AM-999 Luxury Premium Massage Chair",
    category: "massage-chairs",
    shortDescription: "Futuristic luxury premium massage chair with 135cm S+L rail, 23 auto programs, graphene shawl heating, and 7-inch TFT color screen.",
    description: [
      "The AM-999 Luxury Premium Massage Chair represents the ultimate in therapeutic home recovery. Driven by AI massage robots with 1.5-21cm width and 12cm depth adjustments, it mimics human hand massage techniques to deliver precise deep-tissue relief.",
      "Equipped with a 135cm S+L-track long rail, it covers your back from the neck down to the thighs. A unique graphene heated shawl assembly provides targeted hot compress therapy for shoulders, back, waist, and abdomen.",
      "Complete with 23 automatic programs, 3D digital audio, wireless charging, and a 20cm stretch footrest featuring calf kneading, foot roller scraping, and ankle stretching, the AM-999 brings showroom-quality therapy directly to your space."
    ],
    images: [
      "/images/products/massage-chairs/am-999/1.png"
    ],
    mrp: 395000,
    price: 245000,
    availability: "in-stock",
    warranty: "3 Years (2 Year Comprehensive + 1 Year Motor)",
    features: [
      "AI massage robots with 135cm S+L shape long rail tracking",
      "23 types of automatic massage programs (AI intelligent, exclusive, relaxing, overall)",
      "Shawl hot compress with graphene heating assembly",
      "7-inch TFT colored touchscreen controller and armrest shortcut keys",
      "Leg and foot massage with calf kneading, foot roller scraping, and ankle stretching",
      "3D digital audio and mobile phone wireless charging function",
      "20cm stretch range footrest for height adjustment"
    ],
    specifications: [
      { label: "Model", value: "AM-999" },
      { label: "Track Type", value: "135cm S+L Shape Long Rail" },
      { label: "AI Robot Adjustment", value: "1.5-21cm width, 12cm depth" },
      { label: "Power & Voltage", value: "110-240V~ 50/60Hz" },
      { label: "Noise Level", value: "≤60dB" },
      { label: "Rated Time", value: "20 minutes" },
      { label: "Dimensions", value: "1760 x 850 x 1230 mm" },
      { label: "Warranty", value: "3 Years (2 Year Comprehensive + 1 Year Motor)" }
    ],
    benefits: [
      "Shawl hot compress warms chest and abdomen for deep relaxation",
      "Ankle stretching and calf kneading relieve severe lower leg fatigue",
      "23 auto programs provide customized relief for all family profiles"
    ],
    faqs: [
      { question: "What makes the AM-999 'Luxury Premium'?", answer: "The AM-999 features 23 automatic modes, a 7-inch touch TFT screen, graphene shawl heating, and a 20cm stretch footrest featuring calf kneading and ankle stretching — details built for absolute home therapy." },
      { question: "Can I try the AM-999 at the showroom?", answer: "Yes, the AM-999 is on display at our showroom. We recommend calling ahead to confirm availability." }
    ],
    bestSeller: false,
    featured: true,
    seo: {
      metaTitle: "AM-999 Luxury Premium Massage Chair | Buy in Bhubaneswar | AVA Traders",
      metaDescription: "Premium massage chair with 135cm S+L rail, graphene shawl heating, 23 auto programs, and 7-inch touchscreen. Shop at AVA Traders showroom."
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
      "/images/products/leg-massagers/kiyo-416-classic-premium/1.jpg",
      "/images/products/leg-massagers/kiyo-416-classic-premium/2.jpg",
      "/images/products/leg-massagers/kiyo-416-classic-premium/3.jpg",
      "/images/products/leg-massagers/kiyo-416-classic-premium/4.jpg"
    ],
    mrp: 62500,
    price: 37500,
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
      "/images/products/leg-massagers/entuit-ultra-premium/1.jpg",
      "/images/products/leg-massagers/entuit-ultra-premium/2.jpg",
      "/images/products/leg-massagers/entuit-ultra-premium/3.jpg"
    ],
    mrp: 57000,
    price: 35000,
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
      "/images/products/detachable-premium/1.jpg",
      "/images/products/detachable-premium/2.jpg",
      "/images/products/detachable-premium/3.jpg"
    ],
    mrp: 51900,
    price: 33500,
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
      "/images/products/leg-massagers/pedizen-economic-premium/1.jpg",
      "/images/products/leg-massagers/pedizen-economic-premium/2.jpg",
      "/images/products/leg-massagers/pedizen-economic-premium/3.jpg"
    ],
    mrp: 43500,
    price: 27500,
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
      "/images/products/leg-massagers/kiyo-premium-classic-economic/1.jpg",
      "/images/products/leg-massagers/kiyo-premium-classic-economic/2.jpg",
      "/images/products/leg-massagers/kiyo-premium-classic-economic/3.jpg"
    ],
    mrp: 27500,
    price: 17500,
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
      "/images/products/leg-massagers/hattho-economic/1.jpg",
      "/images/products/leg-massagers/hattho-economic/2.jpg",
      "/images/products/leg-massagers/hattho-economic/3.jpg"
    ],
    mrp: 25000,
    price: 15500,
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
  // HEALTH CARE PRODUCTS (10 products)
  // ═══════════════════════════════════════════════
  {
    id: "healthmate",
    slug: "healthmate",
    name: "Healthmate",
    category: "health-care-products",
    shortDescription: "Premium Healthmate healthcare therapy device for pain management, muscle rehabilitation and recovery at home.",
    description: [
      "The Healthmate Healthcare Device brings premium clinical-grade physiotherapy and relaxation technology into your home. Using a combination of heat, percussion and micro-current stimulation, it assists with pain management, muscle rehabilitation and post-injury recovery.",
      "Designed for reliable daily care, this device includes multiple treatment modes for different conditions — chronic pain, sports injuries, post-surgery recovery and everyday muscle stiffness.",
      "Every unit sold by AVA Traders is checked at our showroom before dispatch, and our team is available on call or WhatsApp for support after your purchase."
    ],
    images: [
      "/images/products/health-care-products/healthmate/1.jpg",
      "/images/products/health-care-products/healthmate/2.jpg",
      "/images/products/health-care-products/healthmate/3.jpg",
      "/images/products/health-care-products/healthmate/4.jpg",
      "/images/products/health-care-products/healthmate/5.jpg",
      "/images/products/health-care-products/healthmate/6.jpg",
      "/images/products/health-care-products/healthmate/7.jpg"
    ],
    mrp: 59500,
    price: 37500,
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
      { label: "Model", value: "Healthmate" },
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
      { question: "Is it safe for elderly users?", answer: "Yes, with the lowest intensity setting and shorter sessions. We recommend supervised use for the first few sessions." }
    ],
    bestSeller: false,
    featured: false,
    seo: {
      metaTitle: "Healthmate Healthcare Device | Home Therapy | AVA Traders",
      metaDescription: "Healthmate healthcare device for pain management, muscle rehabilitation and post-injury recovery at home. Shop at AVA Traders, Bhubaneswar."
    }
  },
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
      "/images/products/health-care-products/teppid-back-massager/1.jpg",
      "/images/products/health-care-products/teppid-back-massager/2.jpg",
      "/images/products/health-care-products/teppid-back-massager/3.jpg"
    ],
    mrp: 7999,
    price: 4999,
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
      "/images/products/health-care-products/knee-massager/1.jpg",
      "/images/products/health-care-products/knee-massager/2.jpg",
      "/images/products/health-care-products/knee-massager/3.jpg",
      "/images/products/health-care-products/knee-massager/4.jpg",
      "/images/products/health-care-products/knee-massager/5.jpg",
      "/images/products/health-care-products/knee-massager/6.jpg"
    ],
    mrp: 6099,
    price: 3750,
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
      "/images/products/health-care-products/neck-shoulder-massager/1.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/2.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/3.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/4.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/5.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/6.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/7.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/8.jpg",
      "/images/products/health-care-products/neck-shoulder-massager/9.jpg"
    ],
    mrp: 3899,
    price: 2499,
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
      "/images/products/health-care-products/scalp-massager/1.jpg",
      "/images/products/health-care-products/scalp-massager/2.webp",
      "/images/products/health-care-products/scalp-massager/3.jpg",
      "/images/products/health-care-products/scalp-massager/4.jpg",
      "/images/products/health-care-products/scalp-massager/5.jpg",
      "/images/products/health-care-products/scalp-massager/6.jpg"
    ],
    mrp: 1599,
    price: 999,
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
      "/images/products/health-care-products/facial-gun/1.jpg",
      "/images/products/health-care-products/facial-gun/2.jpg",
      "/images/products/health-care-products/facial-gun/3.jpg"
    ],
    mrp: 1999,
    price: 1250,
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
      "/images/products/health-care-products/massage-gun/1.jpg",
      "/images/products/health-care-products/massage-gun/2.jpg",
      "/images/products/health-care-products/massage-gun/3.jpg"
    ],
    mrp: 3999,
    price: 2499,
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
      "/images/products/health-care-products/sauna-steam-bath/1.jpg",
      "/images/products/health-care-products/sauna-steam-bath/2.jpg",
      "/images/products/health-care-products/sauna-steam-bath/3.jpg"
    ],
    mrp: 13900,
    price: 8500,
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
      "/images/products/health-care-products/hpm-physiotherapy/1.jpg",
      "/images/products/health-care-products/hpm-physiotherapy/2.jpg",
      "/images/products/health-care-products/hpm-physiotherapy/3.jpg"
    ],
    mrp: 23999,
    price: 14999,
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
      "/images/products/health-care-products/foldable-intelligent-sole-massager/1.jpg",
      "/images/products/health-care-products/foldable-intelligent-sole-massager/2.jpg",
      "/images/products/health-care-products/foldable-intelligent-sole-massager/3.jpg"
    ],
    mrp: 19500,
    price: 12500,
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

// Override warranties dynamically based on category
products.forEach((p) => {
  if (p.category === "massage-chairs") {
    p.warranty = "6 Years (1 Year Comprehensive + 5 Years Motor)";
  } else if (p.category === "leg-massagers") {
    p.warranty = "3 Years (1 Year Comprehensive + 2 Years Motor)";
  } else if (p.category === "health-care-products") {
    p.warranty = "1 Year Brand Warranty";
  }
});

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
