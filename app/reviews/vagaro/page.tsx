import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Vagaro Review 2026 — Pricing, Features & Verdict for Nail Salons",
  description:
    "Honest Vagaro review for nail salons. Pricing starts at $30/mo per calendar. Features, hidden fees, pros & cons for nail technicians. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/reviews/vagaro" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Vagaro Review for Nail Salons",
  reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5" },
  author: { "@type": "Organization", name: "NailSalonTech" },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "Vagaro",
    url: "https://vagaro.com",
    offers: { "@type": "Offer", priceCurrency: "USD", price: "30", unitCode: "MON" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-02-17",
};

export default function VagaroReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-slate-50">
        <section className="bg-white border-b border-slate-100 pt-10 pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/reviews" className="hover:text-slate-600">Reviews</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Vagaro</span>
            </nav>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <span className="text-xs text-slate-400 mb-1 block">Updated Feb 2026</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Vagaro Review 2026</h1>
                <p className="text-slate-600 text-lg max-w-xl">Feature-rich salon software with a built-in marketplace — but does pricing add up?</p>
                <div className="mt-4 flex items-center gap-4">
                  <StarRating rating={4.5} size="lg" />
                  <span className="text-sm text-slate-500">4.5/5 — Very Good</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://vagaro.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex items-center gap-2">
                  Try Vagaro Free <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-xs text-slate-400 text-center">30-day free trial</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          <div className="card mb-8 border-navy-200 bg-navy-50/20">
            <h2 className="text-lg font-bold text-slate-900 mb-3">⚡ Quick Verdict</h2>
            <p className="text-slate-700 leading-relaxed">
              Vagaro is the best nail salon software for multi-staff salons that want marketplace visibility. The free Vagaro Marketplace listing gets your salon in front of clients actively searching for nail services. The $30/month entry price is fair, but costs escalate quickly with multiple staff ($10/calendar/month extra). For a 3-tech salon, you&apos;re at $50/month before add-ons. The 30-day free trial is one of the most generous in the industry.
            </p>
          </div>

          {/* Pricing */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Vagaro Pricing (2026)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-3 font-semibold text-slate-700">Calendars</th>
                    <th className="text-right py-3 font-semibold text-slate-700">Monthly Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    ["1 bookable calendar", "$30/mo"],
                    ["2 bookable calendars", "$40/mo"],
                    ["3 bookable calendars", "$50/mo"],
                    ["4 bookable calendars", "$60/mo"],
                    ["5 bookable calendars", "$70/mo"],
                    ["6 bookable calendars", "$80/mo"],
                    ["7 bookable calendars", "$85/mo"],
                  ].map(([calendars, price]) => (
                    <tr key={calendars} className="hover:bg-slate-50">
                      <td className="py-3 text-slate-700">{calendars}</td>
                      <td className="py-3 text-right font-semibold text-slate-900">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600 space-y-2">
              <p><strong>Payment Processing:</strong> 2.75% per swipe/tap/dip</p>
              <p><strong>SMS/Text Marketing:</strong> Paid add-on (pricing varies)</p>
              <p><strong>Email Marketing:</strong> 1,000 free emails/month included; paid beyond that</p>
              <p><strong>Branded App:</strong> Paid add-on</p>
            </div>
          </div>

          {/* Features */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Key Features for Nail Salons</h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Vagaro Marketplace</h3>
                <p>Your salon is listed for free on the Vagaro consumer marketplace where clients search for beauty services. You keep 100% of booking revenue — Vagaro takes $0 commission on marketplace bookings. This is a significant advantage over Fresha&apos;s 20% new client fee.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Loyalty Programs & Gift Cards</h3>
                <p>Vagaro includes loyalty point programs and digital gift cards in all plans — features that GlossGenius Standard and Acuity don&apos;t include. For nail salons trying to build repeat business, these tools drive significant revenue.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Inventory Management</h3>
                <p>Track gel colors, nail polish stock, acrylic powder, and other supplies directly in Vagaro. Set low-stock alerts and manage supplier orders. This is rare among booking-first platforms and genuinely useful for stocked nail salons.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Memberships & Packages</h3>
                <p>Sell nail care memberships (e.g., &quot;Unlimited gel manicures — $99/month&quot;) and service packages (e.g., &quot;5 pedicures for $200&quot;). Memberships create predictable recurring revenue, which is increasingly popular with nail clients.</p>
              </div>
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">✅ Pros</h2>
              <ul className="space-y-2.5">
                {[
                  "Free marketplace listing — no commission on bookings",
                  "No contracts or cancellation fees",
                  "1,000 free email marketing messages/month",
                  "Loyalty programs and gift cards included",
                  "Inventory management for nail products",
                  "Memberships and package deals built-in",
                  "30-day free trial — longest in the industry",
                  "Live phone support 24/7",
                ].map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">❌ Cons</h2>
              <ul className="space-y-2.5">
                {[
                  "Price rises quickly with more staff ($10/calendar/mo)",
                  "SMS marketing is a paid add-on",
                  "Interface feels dated compared to GlossGenius",
                  "Payment processing (2.75%) slightly higher than GlossGenius",
                  "Branded app requires additional monthly fee",
                  "Can feel overwhelming for solo nail techs",
                ].map((con) => (
                  <li key={con} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" /> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best For */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who Is Vagaro Best For?</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Multi-staff nail salons (2–7 techs)</strong> who want a comprehensive platform with marketplace exposure and loyalty tools.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Salons selling retail nail products</strong> who need built-in inventory management.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Techs who want to attract new clients</strong> through the Vagaro marketplace without paying per-client fees.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Solo nail techs</strong> — the interface and feature set may be overkill; consider GlossGenius Standard instead.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Budget-conscious salons</strong> — add-ons like SMS marketing and branded apps inflate the monthly cost significantly.</div></div>
            </div>
          </div>

          {/* FAQ */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Vagaro FAQs</h2>
            <div className="space-y-5">
              {[
                { q: "Does Vagaro take a percentage of bookings?", a: "No. Vagaro charges zero commission on bookings — whether clients book through your website, the Vagaro marketplace, Instagram, or Facebook. You keep 100% of your service revenue. You only pay the 2.75% card processing fee when clients pay by card." },
                { q: "How much does Vagaro cost for a 3-person nail salon?", a: "A 3-person nail salon pays $50/month (3 bookable calendars at $30/$40/$50 scale). Add payment processing (2.75% of card volume) and any add-ons like SMS marketing or a branded app. Real cost for a 3-tech salon doing $15,000/month in card revenue: approximately $50 subscription + $413 processing = ~$463/month total." },
                { q: "Can I try Vagaro for free?", a: "Yes. Vagaro offers a 30-day free trial with access to all features except email marketing, text marketing, and the branded app. No credit card required to start the trial." },
                { q: "Does Vagaro work for independent nail techs?", a: "Yes, but it may be more feature-rich than you need. The 1-calendar plan at $30/month includes all core features. If simplicity and aesthetics matter more to you, GlossGenius is a better fit for solos." },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-navy-700 to-navy-800 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Try Vagaro?</h2>
            <p className="text-navy-200 mb-6 max-w-lg mx-auto">30-day free trial, no credit card required. Access all features and see if Vagaro fits your nail salon workflow.</p>
            <a href="https://vagaro.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-navy-700 hover:bg-navy-50 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 text-sm text-slate-600">
            <p className="font-semibold mb-3">Compare Vagaro:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare/glossgenius-vs-vagaro" className="text-brand-600 hover:underline">Vagaro vs GlossGenius →</Link>
              <Link href="/compare/vagaro-vs-booksy" className="text-brand-600 hover:underline">Vagaro vs Booksy →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
