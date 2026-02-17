import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Nail Salon Software Pricing Comparison 2026 — All Plans Compared",
  description:
    "Side-by-side pricing comparison of GlossGenius, Vagaro, Fresha, Square Appointments, Booksy, and Acuity Scheduling. Real prices, payment fees, and true monthly costs.",
  alternates: { canonical: "https://nailsalontech.com/pricing" },
};

const pricingData = [
  {
    name: "GlossGenius",
    href: "/reviews/glossgenius",
    affiliateHref: "https://glossgenius.com",
    plans: [
      { name: "Standard", price: "$24/mo", note: "annual ($28 monthly)" },
      { name: "Gold", price: "$48/mo", note: "annual ($56 monthly)" },
      { name: "Platinum", price: "$148/mo", note: "annual ($168 monthly)" },
    ],
    paymentFee: "2.6% flat, all card types",
    smsCost: "Included in plan",
    marketplaceFee: "None",
    contractFee: "None",
    setupFee: "None",
    freeTrial: "14 days",
    highlight: true,
    features: {
      onlineBooking: true,
      reminders: true,
      loyalty: false,
      inventory: false,
      multiStaff: true,
      marketplace: false,
      pos: true,
      reports: true,
    },
  },
  {
    name: "Vagaro",
    href: "/reviews/vagaro",
    affiliateHref: "https://vagaro.com",
    plans: [
      { name: "1 Calendar", price: "$30/mo", note: "billed monthly" },
      { name: "2 Calendars", price: "$40/mo", note: "billed monthly" },
      { name: "3 Calendars", price: "$50/mo", note: "billed monthly" },
      { name: "4+ Calendars", price: "+$10/cal", note: "up to $85/mo for 7" },
    ],
    paymentFee: "2.75% per swipe",
    smsCost: "Paid add-on (text marketing)",
    marketplaceFee: "None (free marketplace listing)",
    contractFee: "None",
    setupFee: "None",
    freeTrial: "30 days",
    highlight: false,
    features: {
      onlineBooking: true,
      reminders: true,
      loyalty: true,
      inventory: true,
      multiStaff: true,
      marketplace: true,
      pos: true,
      reports: true,
    },
  },
  {
    name: "Fresha",
    href: "/reviews/fresha",
    affiliateHref: "https://fresha.com",
    plans: [
      { name: "Independent", price: "$19.95/mo", note: "1 bookable user" },
      { name: "Team", price: "Custom", note: "contact for quote" },
    ],
    paymentFee: "2.29% + $0.20 per transaction",
    smsCost: "Pay-as-you-go after allowance",
    marketplaceFee: "20% one-time fee per NEW marketplace client (min. $6)",
    contractFee: "None",
    setupFee: "None",
    freeTrial: "7 days (Team plan)",
    highlight: false,
    features: {
      onlineBooking: true,
      reminders: true,
      loyalty: true,
      inventory: true,
      multiStaff: true,
      marketplace: true,
      pos: true,
      reports: true,
    },
  },
  {
    name: "Square Appointments",
    href: "/reviews/square-appointments",
    affiliateHref: "https://squareup.com/us/en/appointments",
    plans: [
      { name: "Free (Solo)", price: "$0/mo", note: "1 location, unlimited staff" },
      { name: "Plus", price: "$29/mo", note: "per location" },
      { name: "Premium", price: "$69/mo", note: "per location" },
    ],
    paymentFee: "2.6% + $0.10 per tap/dip/swipe",
    smsCost: "Included (automated reminders)",
    marketplaceFee: "None",
    contractFee: "None",
    setupFee: "None",
    freeTrial: "Free forever (solo); 30-day trial for Plus/Premium",
    highlight: false,
    features: {
      onlineBooking: true,
      reminders: true,
      loyalty: true,
      inventory: true,
      multiStaff: true,
      marketplace: false,
      pos: true,
      reports: true,
    },
  },
  {
    name: "Booksy",
    href: "/reviews/booksy",
    affiliateHref: "https://booksy.com",
    plans: [
      { name: "Boost", price: "$29.99/mo", note: "all features included" },
      { name: "Additional users", price: "+$20/mo", note: "per team member" },
    ],
    paymentFee: "Separate processor (e.g., Stripe: 2.9% + $0.30)",
    smsCost: "Included (reminders only)",
    marketplaceFee: "None (marketplace listing included)",
    contractFee: "None",
    setupFee: "None",
    freeTrial: "14 days",
    highlight: false,
    features: {
      onlineBooking: true,
      reminders: true,
      loyalty: true,
      inventory: false,
      multiStaff: true,
      marketplace: true,
      pos: false,
      reports: true,
    },
  },
  {
    name: "Acuity Scheduling",
    href: "/reviews/acuity-scheduling",
    affiliateHref: "https://acuityscheduling.com",
    plans: [
      { name: "Emerging", price: "$16/mo", note: "annual ($20/mo monthly), 1 user" },
      { name: "Growing", price: "$27/mo", note: "annual ($34/mo monthly), 6 users" },
      { name: "Powerhouse", price: "$49/mo", note: "annual ($61/mo monthly), 36 users" },
    ],
    paymentFee: "Stripe 2.9% + $0.30 (or Square/PayPal)",
    smsCost: "Included in Growing/Powerhouse",
    marketplaceFee: "None",
    contractFee: "None",
    setupFee: "None",
    freeTrial: "7 days",
    highlight: false,
    features: {
      onlineBooking: true,
      reminders: true,
      loyalty: false,
      inventory: false,
      multiStaff: true,
      marketplace: false,
      pos: false,
      reports: false,
    },
  },
];

const featureKeys: { key: keyof typeof pricingData[0]["features"]; label: string }[] = [
  { key: "onlineBooking", label: "Online Booking" },
  { key: "reminders", label: "Auto Reminders" },
  { key: "loyalty", label: "Loyalty Programs" },
  { key: "inventory", label: "Inventory Management" },
  { key: "multiStaff", label: "Multi-Staff" },
  { key: "marketplace", label: "Client Marketplace" },
  { key: "pos", label: "Built-in POS" },
  { key: "reports", label: "Revenue Reports" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 pt-14 pb-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Nail Salon Software Pricing Comparison 2026
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real pricing verified directly from vendor websites. Includes payment processing fees, SMS costs, and marketplace commissions — the true cost of each platform.
          </p>
          <p className="text-sm text-slate-400 mt-3">Updated February 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <AffiliateDisclosure />

        {/* Plans Comparison */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Subscription Plans</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left px-5 py-4 font-semibold text-slate-700">Software</th>
                <th className="text-left px-5 py-4 font-semibold text-slate-700">Plans & Pricing</th>
                <th className="text-left px-5 py-4 font-semibold text-slate-700">Payment Processing</th>
                <th className="text-left px-5 py-4 font-semibold text-slate-700">Marketplace Fee</th>
                <th className="text-left px-5 py-4 font-semibold text-slate-700">Free Trial</th>
                <th className="px-5 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {pricingData.map((tool) => (
                <tr
                  key={tool.name}
                  className={tool.highlight ? "bg-brand-50/40" : "hover:bg-slate-50/80 transition-colors"}
                >
                  <td className="px-5 py-5 font-bold text-slate-900 align-top">
                    {tool.name}
                    {tool.highlight && (
                      <span className="ml-2 text-xs bg-brand-100 text-brand-700 rounded-full px-2 py-0.5 font-medium">
                        #1 Pick
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-5 align-top">
                    <ul className="space-y-1.5">
                      {tool.plans.map((p) => (
                        <li key={p.name}>
                          <span className="font-semibold text-slate-900">{p.price}</span>
                          <span className="text-slate-500 ml-1">— {p.name}</span>
                          <span className="text-xs text-slate-400 block">{p.note}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-5 text-slate-600 align-top">{tool.paymentFee}</td>
                  <td className="px-5 py-5 text-slate-600 align-top text-xs leading-relaxed">{tool.marketplaceFee}</td>
                  <td className="px-5 py-5 text-slate-600 align-top">{tool.freeTrial}</td>
                  <td className="px-5 py-5 align-top">
                    <div className="flex flex-col gap-2">
                      <Link href={tool.href} className="text-brand-600 text-xs font-medium hover:underline whitespace-nowrap">
                        Read review →
                      </Link>
                      <a
                        href={tool.affiliateHref}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-xs bg-brand-600 text-white rounded-lg px-3 py-1.5 text-center hover:bg-brand-700 transition-colors whitespace-nowrap"
                      >
                        Try Free
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Features Comparison */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left px-5 py-3.5 font-semibold text-slate-700 w-44">Feature</th>
                {pricingData.map((t) => (
                  <th key={t.name} className="text-center px-3 py-3.5 font-semibold text-slate-700">
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {featureKeys.map(({ key, label }) => (
                <tr key={key} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-3.5 text-slate-700 font-medium">{label}</td>
                  {pricingData.map((t) => (
                    <td key={t.name} className="px-3 py-3.5 text-center">
                      {t.features[key] ? (
                        <Check className="h-4 w-4 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-slate-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* True Cost Analysis */}
        <div className="card mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            True Monthly Cost for a Solo Nail Tech (Processing $5,000/month)
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Subscription cost alone is misleading. Here&apos;s the real total for a solo nail tech processing $5,000/month in card transactions:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-2.5 font-semibold text-slate-700">Software</th>
                  <th className="text-right py-2.5 font-semibold text-slate-700">Subscription</th>
                  <th className="text-right py-2.5 font-semibold text-slate-700">Processing Fees</th>
                  <th className="text-right py-2.5 font-semibold text-slate-700">
                    <span className="text-brand-600">True Monthly Cost</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr>
                  <td className="py-3 font-semibold">GlossGenius Standard</td>
                  <td className="py-3 text-right text-slate-600">$24</td>
                  <td className="py-3 text-right text-slate-600">$130 (2.6%)</td>
                  <td className="py-3 text-right font-bold text-slate-900">$154</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Square Appointments Free</td>
                  <td className="py-3 text-right text-slate-600">$0</td>
                  <td className="py-3 text-right text-slate-600">$135 (2.6% + $0.10)</td>
                  <td className="py-3 text-right font-bold text-slate-900">~$135</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Vagaro (1 calendar)</td>
                  <td className="py-3 text-right text-slate-600">$30</td>
                  <td className="py-3 text-right text-slate-600">$138 (2.75%)</td>
                  <td className="py-3 text-right font-bold text-slate-900">$168</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Fresha Independent</td>
                  <td className="py-3 text-right text-slate-600">$19.95</td>
                  <td className="py-3 text-right text-slate-600">$115 (2.29% + $0.20)</td>
                  <td className="py-3 text-right font-bold text-slate-900">$135 + marketplace fees</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Booksy</td>
                  <td className="py-3 text-right text-slate-600">$29.99</td>
                  <td className="py-3 text-right text-slate-600">$150 (est. Stripe 2.9% + $0.30)</td>
                  <td className="py-3 text-right font-bold text-slate-900">~$180</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Acuity Emerging</td>
                  <td className="py-3 text-right text-slate-600">$16</td>
                  <td className="py-3 text-right text-slate-600">$150 (Stripe 2.9% + $0.30)</td>
                  <td className="py-3 text-right font-bold text-slate-900">$166</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4">
            * Assumes 100 transactions at $50 average. Marketplace fees, SMS overages, and add-ons not included. Processing estimates vary by card type and method.
          </p>
        </div>

        {/* FAQ */}
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Pricing FAQs</h2>
          <div className="space-y-5">
            {[
              {
                q: "Does Vagaro charge a percentage of bookings?",
                a: "No. Vagaro charges a flat monthly subscription starting at $30/month for one bookable calendar. They do not take a percentage of your booking revenue. You only pay standard payment processing fees (2.75%) when clients pay by card.",
              },
              {
                q: "Is Fresha actually free?",
                a: "Fresha is no longer fully free. As of 2025, they charge a monthly subscription starting at $19.95 for the Independent (solo) plan. They also charge a 20% one-time commission (minimum $6) for each new client who discovers your business through their marketplace. Returning client bookings have no fee.",
              },
              {
                q: "Which nail salon software has the cheapest payment processing?",
                a: "Fresha has the lowest payment processing rate at 2.29% + $0.20 per transaction. GlossGenius and Square both charge 2.6%, while Vagaro charges 2.75%. If you're processing high volumes, the difference matters: on $10,000/month, Fresha saves ~$31 vs GlossGenius just in processing fees.",
              },
              {
                q: "Are there any nail salon software options with no monthly fee?",
                a: "Square Appointments is genuinely free for solo nail technicians — $0/month with no booking fees. You only pay 2.6% + $0.10 when processing card payments. This is the best option if you're just starting out and want to test the waters before committing to a monthly subscription.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
