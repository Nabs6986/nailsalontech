export interface SoftwareRecommendation {
  name: string;
  slug: string;
  price: string;
  rating: number;
  badge: string;
  reason: string;
  highlights: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Audience {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: string[];
  mustHaveFeatures: string[];
  topPick: SoftwareRecommendation;
  recommendations: SoftwareRecommendation[];
  faqs: FAQ[];
}

export const audiences: Audience[] = [
  {
    slug: "solo-nail-techs",
    name: "Solo Nail Technicians",
    shortName: "Solo Nail Techs",
    metaTitle:
      "Best Software for Solo Nail Techs 2026 — Booking, Payments & Client Management",
    metaDescription:
      "Best nail salon software for solo nail technicians in 2026. Compare GlossGenius, Square Appointments, and Booksy for independent one-person operations. Real pricing and features.",
    heroHeadline: "Best Nail Salon Software for Solo Techs",
    heroSubheadline:
      "You handle everything yourself — clients, bookings, payments, marketing. Your software should make that easier, not harder. Here are the platforms built for one-person nail businesses.",
    painPoints: [
      "Juggling bookings via text, DMs, and phone calls wastes hours every week",
      "No-shows hit harder when every appointment slot counts",
      "Paying for multi-staff features you will never use",
      "Need a professional online presence without web design skills",
      "Tracking client nail preferences and history across appointments",
    ],
    mustHaveFeatures: [
      "Online booking page clients can access 24/7",
      "Automated SMS and email reminders to cut no-shows",
      "Simple payment processing with no hidden fees",
      "Client cards for nail history, preferences, and photos",
      "Affordable pricing designed for a single operator",
    ],
    topPick: {
      name: "GlossGenius",
      slug: "glossgenius",
      price: "$24/mo",
      rating: 4.7,
      badge: "Best for Solo Techs",
      reason:
        "GlossGenius is purpose-built for individual beauty professionals. The Standard plan at $24/month gives you a polished booking website, client cards with nail history and photo storage, automated reminders, and flat 2.6% payment processing. No features locked behind team tiers.",
      highlights: [
        "Elegant booking website included — no design skills needed",
        "Client cards with nail history, photos, and preferences",
        "Flat 2.6% payment rate on all card types",
        "Same-day payouts Monday through Thursday",
        "14-day free trial, no credit card required",
      ],
    },
    recommendations: [
      {
        name: "GlossGenius",
        slug: "glossgenius",
        price: "$24/mo",
        rating: 4.7,
        badge: "Best Overall",
        reason:
          "Purpose-built for individual beauty professionals with an elegant booking experience and flat-rate payments.",
        highlights: [
          "Beautiful booking website included",
          "Client cards with nail history and photos",
          "Flat 2.6% payment processing",
          "Same-day payouts Mon-Thu",
          "14-day free trial",
        ],
      },
      {
        name: "Square Appointments",
        slug: "square-appointments",
        price: "Free",
        rating: 4.3,
        badge: "Best Free Option",
        reason:
          "Genuinely $0/month for solo professionals. Only pay 2.6% + $0.10 per card transaction. Perfect for techs just starting out.",
        highlights: [
          "$0/month forever for solo techs",
          "Unlimited appointments and booking types",
          "Automated reminders included",
          "Full Square ecosystem integration",
          "No commitment required",
        ],
      },
      {
        name: "Booksy",
        slug: "booksy",
        price: "$29.99/mo",
        rating: 4.4,
        badge: "Best for Client Discovery",
        reason:
          "Flat pricing with all features included and marketplace access to 44M+ consumers searching for beauty services.",
        highlights: [
          "44M+ consumer marketplace at zero commission",
          "All features included in one price",
          "No-show protection with deposits",
          "Commission-free marketplace bookings",
          "14-day free trial",
        ],
      },
      {
        name: "Acuity Scheduling",
        slug: "acuity-scheduling",
        price: "$16/mo",
        rating: 4.2,
        badge: "Most Affordable",
        reason:
          "Lowest starting price of any paid platform at $16/month with powerful intake forms for capturing nail preferences.",
        highlights: [
          "Starting at $16/mo with annual billing",
          "Best client intake forms for nail preferences",
          "Zapier integration with 5,000+ apps",
          "Native Squarespace embedding",
          "7-day free trial",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need salon software if I only have a few clients?",
        answer:
          "Yes. Even with 10-20 clients, booking software eliminates phone and text scheduling, sends automatic reminders to reduce no-shows, and processes payments professionally. Square Appointments is free for solo techs, so there is no cost barrier.",
      },
      {
        question:
          "What is the best free booking software for a solo nail tech?",
        answer:
          "Square Appointments is the only genuinely free option with no monthly fee and no trial expiration. You pay only 2.6% + $0.10 per card transaction. It includes online booking, automated reminders, and the full Square payment ecosystem.",
      },
      {
        question:
          "Is GlossGenius worth $24/month for a solo nail technician?",
        answer:
          "For most solo techs doing 15+ appointments per week, yes. The flat 2.6% payment rate, premium booking website, and client card system with nail history and photo storage provide real value that generic tools cannot match. The 14-day free trial lets you test before committing.",
      },
    ],
  },
  {
    slug: "nail-salons",
    name: "Nail Salons",
    shortName: "Nail Salons",
    metaTitle:
      "Best Software for Nail Salons 2026 — Multi-Staff Booking & Management",
    metaDescription:
      "Best nail salon software for multi-staff nail salons in 2026. Compare Vagaro, GlossGenius, and Fresha for team scheduling, inventory, and client management. Real pricing.",
    heroHeadline: "Best Software for Nail Salons",
    heroSubheadline:
      "Running a multi-staff nail salon means coordinating schedules, managing inventory, and keeping clients coming back. These platforms handle the complexity so you can focus on growing your business.",
    painPoints: [
      "Coordinating schedules across multiple nail technicians",
      "Tracking nail product inventory and reorder points",
      "Managing per-staff pricing and commission structures",
      "Building client loyalty and repeat bookings",
      "Scaling software costs as the team grows",
    ],
    mustHaveFeatures: [
      "Multi-staff calendar with individual tech scheduling",
      "Inventory management for nail products and supplies",
      "Loyalty programs, gift cards, and memberships",
      "Staff performance reporting and commission tracking",
      "Online booking with technician selection",
    ],
    topPick: {
      name: "Vagaro",
      slug: "vagaro",
      price: "$30/mo",
      rating: 4.5,
      badge: "Best for Nail Salons",
      reason:
        "Vagaro is the strongest all-around choice for multi-staff nail salons. The $30/month base includes a free marketplace listing, loyalty programs, gift cards, memberships, inventory management, and 24/7 live phone support. Per-calendar pricing ($10 extra per staff) keeps costs predictable.",
      highlights: [
        "Free Vagaro marketplace listing for new client discovery",
        "Loyalty programs, gift cards, and memberships built in",
        "Inventory management for nail products",
        "Staff scheduling with individual calendars",
        "30-day free trial with 24/7 support",
      ],
    },
    recommendations: [
      {
        name: "Vagaro",
        slug: "vagaro",
        price: "$30/mo",
        rating: 4.5,
        badge: "Best Overall for Salons",
        reason:
          "The most complete feature set for multi-staff nail salons with marketplace exposure, loyalty tools, and inventory management.",
        highlights: [
          "Free marketplace listing with zero commission",
          "Loyalty programs and gift cards built in",
          "Inventory management for nail products",
          "1,000 free email marketing messages/month",
          "30-day free trial",
        ],
      },
      {
        name: "GlossGenius",
        slug: "glossgenius",
        price: "$24/mo",
        rating: 4.7,
        badge: "Best Client Experience",
        reason:
          "Premium booking experience and flat 2.6% payment rate make it ideal for salons focused on high-end client experiences.",
        highlights: [
          "Best-in-class booking website design",
          "Flat 2.6% payments on all card types",
          "Client cards with nail history and photos",
          "AI marketing tools on Gold and Platinum plans",
          "14-day free trial",
        ],
      },
      {
        name: "Fresha",
        slug: "fresha",
        price: "$19.95/mo",
        rating: 4.4,
        badge: "Best Marketplace",
        reason:
          "Lowest payment processing rate at 2.29% + $0.20 and the most powerful global consumer marketplace for new client acquisition.",
        highlights: [
          "44M+ consumers on global marketplace",
          "Lowest payment processing rate: 2.29% + $0.20",
          "Automated marketing campaigns included",
          "Inventory and reporting tools",
          "20% one-time fee only on new marketplace clients",
        ],
      },
      {
        name: "Booksy",
        slug: "booksy",
        price: "$29.99/mo",
        rating: 4.4,
        badge: "Best Flat Pricing",
        reason:
          "All features included at one flat price with a massive consumer marketplace and no per-booking commissions.",
        highlights: [
          "All features in one price — no tiers",
          "310,000+ beauty pros on platform",
          "44M+ consumers searching for bookings",
          "No-show protection with deposits",
          "14-day free trial",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does salon software cost for a 5-person nail salon?",
        answer:
          "Costs vary by platform. Vagaro would be $30 + $40 (4 extra calendars at $10 each) = $70/month. Booksy would be $29.99 + $80 (4 additional users at $20 each) = $109.99/month. GlossGenius Gold plan at $48/month covers up to 3 team members. For a 5-person team, Vagaro typically offers the best value.",
      },
      {
        question: "Can multiple nail techs each manage their own bookings?",
        answer:
          "Yes. Vagaro, GlossGenius, Fresha, and Booksy all support individual tech calendars where each nail technician can manage their own schedule, see their own clients, and track their performance. Clients can book directly with their preferred tech.",
      },
      {
        question: "Which software is best for tracking nail product inventory?",
        answer:
          "Vagaro and Fresha have the strongest built-in inventory management for nail salons. Both track stock levels, set reorder alerts, and generate product usage reports. Vagaro also includes purchase order management.",
      },
    ],
  },
  {
    slug: "day-spas",
    name: "Day Spas with Nail Services",
    shortName: "Day Spas",
    metaTitle:
      "Best Nail Salon Software for Day Spas 2026 — Multi-Service Booking & Management",
    metaDescription:
      "Best nail salon software for day spas offering nail services in 2026. Compare Vagaro, Fresha, and GlossGenius for multi-service scheduling, packages, and spa management.",
    heroHeadline: "Best Nail Software for Day Spas",
    heroSubheadline:
      "Day spas offering nail services alongside massage, facials, and body treatments need software that handles multi-service bookings and package deals. These platforms manage the full spa experience.",
    painPoints: [
      "Coordinating nail appointments alongside massage, facial, and body treatment schedules",
      "Creating and managing multi-service spa packages that include nails",
      "Different pricing structures for nail services vs. other spa treatments",
      "Training staff across varied service menus and booking flows",
      "Upselling nail add-ons during spa package bookings",
    ],
    mustHaveFeatures: [
      "Multi-service booking with different appointment durations",
      "Package and bundle creation across service categories",
      "Room and resource scheduling alongside staff calendars",
      "Membership programs for recurring spa and nail clients",
      "Gift card and voucher management",
    ],
    topPick: {
      name: "Vagaro",
      slug: "vagaro",
      price: "$30/mo",
      rating: 4.5,
      badge: "Best for Day Spas",
      reason:
        "Vagaro handles multi-service spas better than any other platform we reviewed. Its package builder lets you combine nail services with massage, facials, and body treatments into spa packages. Room scheduling, membership management, and multi-category service menus make it the clear choice for spas.",
      highlights: [
        "Multi-service packages combining nails with other spa treatments",
        "Room and resource scheduling for spa suites",
        "Membership and loyalty programs for recurring clients",
        "Gift card management across all service categories",
        "30-day free trial with full feature access",
      ],
    },
    recommendations: [
      {
        name: "Vagaro",
        slug: "vagaro",
        price: "$30/mo",
        rating: 4.5,
        badge: "Best for Day Spas",
        reason:
          "The most complete multi-service spa management platform with packages, room scheduling, and memberships.",
        highlights: [
          "Multi-service package builder",
          "Room and resource scheduling",
          "Membership and loyalty programs",
          "Inventory management across categories",
          "30-day free trial",
        ],
      },
      {
        name: "Fresha",
        slug: "fresha",
        price: "$19.95/mo",
        rating: 4.4,
        badge: "Best Marketplace for Spas",
        reason:
          "Strong global marketplace presence drives new spa clients, with flexible multi-service booking and the lowest payment processing rate.",
        highlights: [
          "44M+ consumers on global marketplace",
          "Multi-category service menu support",
          "Lowest payment rate: 2.29% + $0.20",
          "Automated marketing campaigns",
          "Inventory tracking across product lines",
        ],
      },
      {
        name: "GlossGenius",
        slug: "glossgenius",
        price: "$24/mo",
        rating: 4.7,
        badge: "Best Premium Experience",
        reason:
          "Delivers a luxury booking experience that matches the premium feel of day spas, with elegant client-facing pages.",
        highlights: [
          "Premium booking website design",
          "Client cards with service history across categories",
          "Flat 2.6% payment processing",
          "AI marketing tools on higher plans",
          "14-day free trial",
        ],
      },
      {
        name: "Booksy",
        slug: "booksy",
        price: "$29.99/mo",
        rating: 4.4,
        badge: "Best All-Inclusive Pricing",
        reason:
          "Transparent flat pricing with all features included and strong marketplace for multi-service discovery.",
        highlights: [
          "All features included in one flat price",
          "Multi-service booking support",
          "44M+ consumer marketplace",
          "No-show protection with deposits",
          "14-day free trial",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Can nail salon software handle multi-service spa packages?",
        answer:
          "Yes. Vagaro and Fresha both support multi-service packages that combine nail services with massage, facials, and other spa treatments. Vagaro has the most flexible package builder, letting you set different durations, prices, and staff assignments per service within a package.",
      },
      {
        question:
          "Do I need separate software for nails vs. other spa services?",
        answer:
          "No. Vagaro, Fresha, and Booksy all support multiple service categories within a single account. You can manage nail technicians, massage therapists, and estheticians from one dashboard with separate calendars, service menus, and pricing for each.",
      },
      {
        question:
          "Which software handles spa room scheduling for nail stations?",
        answer:
          "Vagaro has the most robust room and resource scheduling, letting you assign nail stations, spa rooms, and equipment to specific appointments. This prevents double-booking when multiple services share physical spaces.",
      },
    ],
  },
  {
    slug: "mobile-nail-techs",
    name: "Mobile Nail Technicians",
    shortName: "Mobile Nail Techs",
    metaTitle:
      "Best Software for Mobile Nail Techs 2026 — On-the-Go Booking & Payments",
    metaDescription:
      "Best nail salon software for mobile nail technicians in 2026. Compare GlossGenius, Square Appointments, and Booksy for on-the-go booking, mobile payments, and client management.",
    heroHeadline: "Best Software for Mobile Nail Techs",
    heroSubheadline:
      "You bring the nail salon to your clients. Your software needs to work from anywhere — booking, payments, client records, all from your phone. These platforms are built for techs on the move.",
    painPoints: [
      "Processing payments at client locations without reliable card readers",
      "Managing a schedule that changes based on travel zones and availability",
      "Keeping client records accessible from your phone between appointments",
      "Collecting deposits to protect against last-minute cancellations",
      "Maintaining a professional online presence without a physical salon",
    ],
    mustHaveFeatures: [
      "Fully functional mobile app for booking and payments",
      "Tap to Pay and mobile card reader support",
      "Travel zone or service area configuration",
      "Deposit collection and no-show protection",
      "Client records accessible offline or on mobile",
    ],
    topPick: {
      name: "GlossGenius",
      slug: "glossgenius",
      price: "$24/mo",
      rating: 4.7,
      badge: "Best for Mobile Techs",
      reason:
        "GlossGenius has the best mobile experience of any platform we tested. Tap to Pay works at the flat 2.6% rate (no surcharge), the mobile app handles all booking and client management, and the polished booking website gives you a professional online presence without needing a physical location.",
      highlights: [
        "Tap to Pay at flat 2.6% — no mobile surcharge",
        "Full-featured mobile app for booking and payments",
        "Professional booking website replaces a physical storefront",
        "Client cards accessible on your phone between appointments",
        "Same-day payouts Monday through Thursday",
      ],
    },
    recommendations: [
      {
        name: "GlossGenius",
        slug: "glossgenius",
        price: "$24/mo",
        rating: 4.7,
        badge: "Best Mobile Experience",
        reason:
          "Best-in-class mobile app with Tap to Pay at flat rate and a booking website that serves as your digital storefront.",
        highlights: [
          "Tap to Pay at flat 2.6% rate",
          "Full mobile app for all operations",
          "Professional booking website included",
          "Client cards with photos on mobile",
          "14-day free trial",
        ],
      },
      {
        name: "Square Appointments",
        slug: "square-appointments",
        price: "Free",
        rating: 4.3,
        badge: "Best Free Mobile Option",
        reason:
          "Free plan with the most reliable mobile payment hardware ecosystem. Square readers work everywhere.",
        highlights: [
          "$0/month for solo mobile techs",
          "Most reliable mobile card readers on the market",
          "Tap to Pay on iPhone and Android",
          "Automated reminders included",
          "Full Square hardware ecosystem",
        ],
      },
      {
        name: "Booksy",
        slug: "booksy",
        price: "$29.99/mo",
        rating: 4.4,
        badge: "Best Marketplace for Mobile",
        reason:
          "Marketplace exposure helps mobile techs get discovered by clients in their service area.",
        highlights: [
          "44M+ consumers searching by location",
          "All features in one flat price",
          "Mobile app with full booking management",
          "No-show protection with deposits",
          "14-day free trial",
        ],
      },
      {
        name: "Acuity Scheduling",
        slug: "acuity-scheduling",
        price: "$16/mo",
        rating: 4.2,
        badge: "Most Customizable",
        reason:
          "Powerful intake forms let mobile techs collect service details, nail preferences, and location info before each appointment.",
        highlights: [
          "Custom intake forms for location and preferences",
          "Starting at $16/mo with annual billing",
          "Zapier integration for automated workflows",
          "Squarespace website embedding",
          "7-day free trial",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What is the best way to accept payments as a mobile nail tech?",
        answer:
          "GlossGenius Tap to Pay processes cards at a flat 2.6% with no mobile surcharge. Square Appointments offers free Tap to Pay on iPhone at 2.6% + $0.10. Both work without a separate card reader. For the most reliable hardware, Square's mobile card readers are the industry standard.",
      },
      {
        question: "Can I collect deposits from clients before traveling to them?",
        answer:
          "Yes. GlossGenius, Booksy, and Square Appointments (Plus plan) all support deposit collection at the time of booking. This protects mobile techs from no-shows and last-minute cancellations that waste travel time.",
      },
      {
        question:
          "Do I need different software as a mobile tech vs. a salon tech?",
        answer:
          "Not necessarily. The same platforms work for both. As a mobile tech, prioritize the mobile app experience, Tap to Pay capability, and booking website quality since you do not have a physical storefront. GlossGenius and Square Appointments excel in all three areas.",
      },
    ],
  },
  {
    slug: "nail-salon-franchises",
    name: "Nail Salon Franchises",
    shortName: "Nail Salon Franchises",
    metaTitle:
      "Best Software for Nail Salon Franchises 2026 — Multi-Location Management",
    metaDescription:
      "Best nail salon software for franchises and multi-location nail salons in 2026. Compare Vagaro, Fresha, and Booksy for centralized reporting, brand consistency, and scalable pricing.",
    heroHeadline: "Best Software for Nail Salon Franchises",
    heroSubheadline:
      "Managing multiple nail salon locations demands centralized control with local flexibility. These platforms offer multi-location dashboards, brand consistency tools, and scalable pricing for franchise operations.",
    painPoints: [
      "Maintaining brand consistency across multiple locations",
      "Centralized reporting across all franchise locations",
      "Managing different staff rosters and schedules per location",
      "Scaling software costs predictably as new locations open",
      "Onboarding new franchise locations quickly with standardized setup",
    ],
    mustHaveFeatures: [
      "Multi-location dashboard with centralized reporting",
      "Brand-consistent booking pages across all locations",
      "Per-location staff management and scheduling",
      "Consolidated and per-location financial reporting",
      "Scalable pricing that works for 3, 10, or 50 locations",
    ],
    topPick: {
      name: "Vagaro",
      slug: "vagaro",
      price: "$30/mo per location",
      rating: 4.5,
      badge: "Best for Franchises",
      reason:
        "Vagaro is the only platform we reviewed with true multi-location management designed for franchise operations. Centralized reporting, per-location staff calendars, marketplace listings for each location, and predictable per-calendar pricing make it the clear winner for franchise nail salons.",
      highlights: [
        "Multi-location dashboard with centralized reporting",
        "Individual marketplace listings per location",
        "Per-location staff calendars and scheduling",
        "Loyalty programs that work across locations",
        "Predictable per-calendar pricing as you scale",
      ],
    },
    recommendations: [
      {
        name: "Vagaro",
        slug: "vagaro",
        price: "$30/mo per location",
        rating: 4.5,
        badge: "Best for Franchises",
        reason:
          "True multi-location management with centralized reporting, per-location setup, and scalable pricing.",
        highlights: [
          "Multi-location dashboard and reporting",
          "Per-location marketplace listings",
          "Cross-location loyalty programs",
          "Predictable per-calendar pricing",
          "30-day free trial",
        ],
      },
      {
        name: "Fresha",
        slug: "fresha",
        price: "$19.95/mo per location",
        rating: 4.4,
        badge: "Best Marketplace for Multi-Location",
        reason:
          "Global marketplace presence for each location with the lowest payment processing rate for high-volume franchise operations.",
        highlights: [
          "Individual marketplace listing per location",
          "Lowest processing rate: 2.29% + $0.20",
          "Centralized and per-location reporting",
          "Automated marketing per location",
          "Inventory tracking across locations",
        ],
      },
      {
        name: "Booksy",
        slug: "booksy",
        price: "$29.99/mo per location",
        rating: 4.4,
        badge: "Best Consumer Discovery",
        reason:
          "Massive consumer marketplace gives each franchise location independent visibility to 44M+ consumers.",
        highlights: [
          "44M+ consumers searching by location",
          "All features included per location",
          "Individual profiles per franchise unit",
          "No-show protection at every location",
          "14-day free trial per location",
        ],
      },
      {
        name: "GlossGenius",
        slug: "glossgenius",
        price: "$24/mo",
        rating: 4.7,
        badge: "Best Brand Presentation",
        reason:
          "Premium booking pages ensure brand consistency across locations, ideal for franchise brands focused on upscale client experience.",
        highlights: [
          "Elegant, consistent booking experience",
          "Flat 2.6% payment rate across all locations",
          "Client cards with full service history",
          "AI marketing tools on higher plans",
          "14-day free trial",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Which software handles multi-location nail salon management best?",
        answer:
          "Vagaro has the most complete multi-location management features, including a centralized dashboard, per-location reporting, cross-location loyalty programs, and individual marketplace listings for each franchise location. Fresha also supports multi-location setups with centralized reporting.",
      },
      {
        question:
          "How much does salon software cost for a 5-location nail salon franchise?",
        answer:
          "Assuming 4 nail techs per location: Vagaro would be approximately $30 + $30 (3 extra calendars) = $60 per location, or $300/month total. Fresha would be approximately $19.95 per location base plus staff costs. Booksy would be $29.99 + $60 (3 extra users) = $89.99 per location, or $449.95/month total. Vagaro typically offers the best value at scale.",
      },
      {
        question: "Can franchise owners see reports across all locations?",
        answer:
          "Yes. Vagaro and Fresha both offer centralized dashboards where franchise owners can view revenue, bookings, and staff performance across all locations from a single login. You can also drill down into individual location reports.",
      },
    ],
  },
];

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}

export function getAllAudienceSlugs(): string[] {
  return audiences.map((a) => a.slug);
}
