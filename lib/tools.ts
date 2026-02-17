export interface Tool {
  id: string;
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  priceNote: string;
  bestFor: string;
  href: string;
  affiliateHref: string;
  pros: string[];
  cons: string[];
  paymentProcessing: string;
  freeTrial: string;
  color: string;
  badge?: string;
}

export const tools: Tool[] = [
  {
    id: "glossgenius",
    name: "GlossGenius",
    tagline: "Sleek, all-in-one salon software built for beauty pros",
    rating: 4.7,
    reviewCount: 2300,
    startingPrice: "$24/mo",
    priceNote: "Standard plan, billed annually",
    bestFor: "Independent nail techs & small salons wanting an elegant client experience",
    href: "/reviews/glossgenius",
    affiliateHref: "https://glossgenius.com",
    pros: [
      "Flat 2.6% payment rate — no hidden per-transaction fees",
      "Beautiful booking website included",
      "Built-in client messaging & automated reminders",
      "Same-day payouts (Mon–Thu)",
      "AI marketing assistant (Gold/Platinum plans)",
    ],
    cons: [
      "No marketplace for new client discovery",
      "Limited integrations vs competitors",
      "Higher price on Platinum plan ($148/mo)",
    ],
    paymentProcessing: "2.6% flat rate, all card types",
    freeTrial: "14-day free trial, no credit card required",
    color: "brand",
    badge: "Editor's Pick",
  },
  {
    id: "vagaro",
    name: "Vagaro",
    tagline: "Feature-rich salon & spa software with built-in marketplace",
    rating: 4.5,
    reviewCount: 5100,
    startingPrice: "$30/mo",
    priceNote: "1 bookable calendar, billed monthly",
    bestFor: "Multi-staff salons wanting marketplace exposure and comprehensive features",
    href: "/reviews/vagaro",
    affiliateHref: "https://vagaro.com",
    pros: [
      "Listed on Vagaro Marketplace for free client discovery",
      "No fees on online bookings — you keep 100%",
      "Loyalty programs, memberships, gift cards included",
      "1,000 free email marketing messages/month",
      "30-day free trial",
    ],
    cons: [
      "Price rises quickly with more staff ($10/calendar/month extra)",
      "Interface can feel overwhelming for solo techs",
      "SMS marketing is a paid add-on",
    ],
    paymentProcessing: "2.75% per swipe",
    freeTrial: "30-day free trial",
    color: "navy",
  },
  {
    id: "fresha",
    name: "Fresha",
    tagline: "Subscription-based software with commission on new marketplace clients",
    rating: 4.4,
    reviewCount: 3800,
    startingPrice: "$19.95/mo",
    priceNote: "Individual plan (new clients from marketplace: 20% one-time fee)",
    bestFor: "Salons wanting to attract new clients through the Fresha marketplace",
    href: "/reviews/fresha",
    affiliateHref: "https://fresha.com",
    pros: [
      "Powerful global marketplace with 44M+ consumers",
      "No fee on returning client bookings",
      "Automated marketing campaigns included",
      "Inventory management built in",
      "Strong reporting tools",
    ],
    cons: [
      "20% one-time commission on each new marketplace client (minimum $6)",
      "Payment processing required for deposits/no-show protection",
      "SMS costs extra after allowance",
    ],
    paymentProcessing: "2.29% + $0.20 per transaction",
    freeTrial: "7-day free trial (Team plan)",
    color: "rose",
  },
  {
    id: "square-appointments",
    name: "Square Appointments",
    tagline: "Free booking software backed by Square's payment ecosystem",
    rating: 4.3,
    reviewCount: 8200,
    startingPrice: "Free",
    priceNote: "Solo plan free; Plus $29/mo, Premium $69/mo",
    bestFor: "Solo nail techs starting out who want zero monthly software costs",
    href: "/reviews/square-appointments",
    affiliateHref: "https://squareup.com/us/en/appointments",
    pros: [
      "Genuinely free for solo professionals",
      "Integrates with entire Square ecosystem (POS, payroll, inventory)",
      "No booking fees taken",
      "Strong reporting and analytics",
    ],
    cons: [
      "2.6% + $0.10 payment processing on free plan (no way around it)",
      "Limited nail-specific features vs dedicated salon tools",
      "Advanced features require $29–$69/mo upgrade",
    ],
    paymentProcessing: "2.6% + $0.10 per tap/dip/swipe",
    freeTrial: "Free forever for solo (Plus/Premium have 30-day trial)",
    color: "success",
    badge: "Best Free Option",
  },
  {
    id: "booksy",
    name: "Booksy",
    tagline: "Popular booking app with massive consumer marketplace",
    rating: 4.4,
    reviewCount: 4600,
    startingPrice: "$29.99/mo",
    priceNote: "+$20/mo per additional team member",
    bestFor: "Nail techs who want visibility in a large consumer marketplace",
    href: "/reviews/booksy",
    affiliateHref: "https://booksy.com",
    pros: [
      "310,000+ beauty pros on the platform globally",
      "44M+ consumers searching for appointments",
      "All features included in one flat price",
      "No-show protection with deposits",
      "14-day free trial",
    ],
    cons: [
      "Payment processing fees not included",
      "Multi-staff pricing adds up quickly ($20 per person)",
      "Less refined UI compared to GlossGenius",
    ],
    paymentProcessing: "Separate payment processor required (fees vary)",
    freeTrial: "14-day free trial",
    color: "warning",
  },
  {
    id: "acuity-scheduling",
    name: "Acuity Scheduling",
    tagline: "Squarespace-owned scheduling tool with powerful customization",
    rating: 4.2,
    reviewCount: 3100,
    startingPrice: "$16/mo",
    priceNote: "Emerging plan, billed annually ($20/mo monthly)",
    bestFor: "Nail techs who already use Squarespace or need flexible intake forms",
    href: "/reviews/acuity-scheduling",
    affiliateHref: "https://acuityscheduling.com",
    pros: [
      "Most affordable starting price for full booking software",
      "Intake forms capture client nail preferences pre-appointment",
      "Zapier/API integration with thousands of tools",
      "Seamless Squarespace website embedding",
    ],
    cons: [
      "Not built specifically for beauty/nail salons",
      "No built-in payment processing (uses Stripe/Square/PayPal)",
      "Limited marketing tools vs salon-specific platforms",
      "Growing plan ($34/mo monthly) needed for multiple staff",
    ],
    paymentProcessing: "Integrates with Stripe (2.9% + $0.30), Square, PayPal",
    freeTrial: "7-day free trial",
    color: "info",
  },
];

export function getToolById(id: string) {
  return tools.find((t) => t.id === id);
}
