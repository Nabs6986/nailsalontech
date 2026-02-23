import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, ExternalLink, AlertTriangle } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Fresha Review 2026 — Pricing, Marketplace Fee & Verdict for Nail Salons",
  description:
    "Honest Fresha review for nail salons. No longer free — starts at $19.95/mo plus 20% marketplace commission on new clients. Real pricing, pros & cons. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/reviews/fresha" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Fresha Review for Nail Salons",
  reviewRating: { "@type": "Rating", ratingValue: "4.4", bestRating: "5" },
  author: { "@type": "Organization", name: "NailSalonTech" },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "Fresha",
    url: "https://fresha.com",
    offers: { "@type": "Offer", priceCurrency: "USD", price: "19.95", unitCode: "MON" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-02-17",
};

export default function FreshaReview() {
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
              <span className="text-slate-600">Fresha</span>
            </nav>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <span className="text-xs text-slate-400 mb-1 block">Updated Feb 2026</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Fresha Review 2026</h1>
                <p className="text-slate-600 text-lg max-w-xl">Powerful marketplace software — but understand the 20% new client fee before signing up.</p>
                <div className="mt-4 flex items-center gap-4">
                  <StarRating rating={4.4} size="lg" />
                  <span className="text-sm text-slate-500">4.4/5 — Very Good</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://fresha.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex items-center gap-2">
                  Try Fresha <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-xs text-slate-400 text-center">Plans from $19.95/mo</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          {/* Important Warning */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-8 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 text-sm mb-1">⚠️ Key Pricing Change: Fresha Is No Longer Free</p>
              <p className="text-sm text-amber-700">
                Fresha introduced paid subscriptions in 2025. The Independent plan starts at $19.95/month. Additionally, they charge a <strong>20% one-time commission (minimum $6)</strong> for each new client who discovers your salon through the Fresha marketplace. Returning client bookings remain free of commission.
              </p>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">⚡ Quick Verdict</h2>
            <p className="text-slate-700 leading-relaxed">
              Fresha is best for nail salons in locations with strong Fresha marketplace activity — cities where clients actively use Fresha to find beauty services. The 20% new-client fee sounds steep, but you only pay it once per new client — then they&apos;re yours forever. For salons in smaller markets, Vagaro&apos;s commission-free marketplace may be a better fit. Fresha&apos;s automation tools and reporting are genuinely excellent.
            </p>
          </div>

          {/* Pricing Breakdown */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Fresha Pricing (2026)</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {[
                {
                  name: "Independent",
                  price: "$19.95/mo",
                  desc: "1 bookable user",
                  features: ["Online booking", "Payment processing", "Client management", "Automated reminders", "Basic reports"],
                },
                {
                  name: "Team",
                  price: "Custom",
                  desc: "Multiple staff — contact Fresha",
                  features: ["Everything in Independent", "Multi-user calendar", "Commission tracking", "Timesheets (clock in/out)", "Advanced team management"],
                },
              ].map((plan) => (
                <div key={plan.name} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">{plan.name}</h3>
                  <div className="text-2xl font-bold text-brand-600 my-1">{plan.price}</div>
                  <div className="text-xs text-slate-500 mb-4">{plan.desc}</div>
                  <ul className="space-y-1.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-slate-700 space-y-2">
              <p><strong className="text-amber-800">Marketplace Fee:</strong> 20% one-time commission (minimum $6) for each new client who finds your salon via the Fresha marketplace. Only applies once per client — all future bookings from that client are fee-free.</p>
              <p><strong>Payment Processing:</strong> 2.29% + $0.20 per transaction (lowest rate among the platforms we reviewed)</p>
              <p><strong>SMS:</strong> A monthly allowance is included; additional SMS is pay-as-you-go</p>
              <p><strong>Email:</strong> A free allowance included; pay-as-you-go beyond that</p>
            </div>
          </div>

          {/* Marketplace Math */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">The Marketplace Math: Is 20% Worth It?</h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Let&apos;s say a new client books a $60 gel manicure through Fresha&apos;s marketplace. Fresha takes $12 (20%) from that booking — paid once. If that client comes back monthly for a year, you&apos;ve made $720 from a $12 acquisition cost. That&apos;s a 60:1 return on that single commission.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              The math works in your favor when client lifetime value is high — which it is for nail salons with sticky clientele. The risk is if your market has low Fresha usage, meaning few new clients through the marketplace, making you pay $19.95/month for a platform that doesn&apos;t deliver the new client flow you expected.
            </p>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">✅ Pros</h2>
              <ul className="space-y-2.5">
                {["Global marketplace with 44M+ consumers", "Lowest payment processing rate (2.29% + $0.20)", "No commission on returning client bookings", "Automated marketing campaigns included", "Inventory management built in", "Strong reporting and business analytics", "No long-term contracts"].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">❌ Cons</h2>
              <ul className="space-y-2.5">
                {["20% one-time fee on new marketplace clients (min $6)", "No longer free — $19.95/mo minimum", "SMS overages can add up", "Marketplace less active in smaller US markets", "Team plan pricing not transparent upfront"].map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who Is Fresha Best For?</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Salons in major metros</strong> where Fresha marketplace has strong consumer adoption (NYC, LA, London, etc.).</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Growth-focused nail salons</strong> who want to acquire new clients at scale through marketplace discovery.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Salons prioritizing low payment processing fees</strong> — 2.29% + $0.20 is the best rate among our reviewed platforms.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Solo techs in smaller markets</strong> where Fresha consumer usage is limited — the marketplace value won&apos;t justify the subscription.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Established salons with fully booked calendars</strong> — you&apos;re paying for marketplace new-client discovery you don&apos;t need.</div></div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Fresha FAQs</h2>
            <div className="space-y-5">
              {[
                { q: "Is Fresha free for nail salons?", a: "No. As of 2025, Fresha charges a monthly subscription starting at $19.95 for the Independent plan. They also charge a 20% one-time commission (minimum $6) when a new client discovers your business through the Fresha marketplace. Returning client bookings are always free of commission." },
                { q: "How does Fresha's 20% marketplace fee work?", a: "When a brand-new client (one who has never booked with you before) finds your salon through the Fresha marketplace and books their first appointment, Fresha takes a 20% commission from that booking amount, with a minimum of $6. Every subsequent booking from that same client is commission-free, regardless of how they book." },
                { q: "Can I use Fresha without the marketplace?", a: "Yes. You can use Fresha purely for booking management, client communications, and payments without activating the marketplace listing. You would then avoid the 20% new-client fee entirely, paying only the $19.95/month subscription and 2.29% + $0.20 payment processing." },
                { q: "Does Fresha have inventory management for nail products?", a: "Yes. Fresha includes inventory management for tracking product stock — useful for nail salons tracking gel colors, polish inventory, and nail supply stock levels. You can set low-stock alerts and manage supplier information." },
              ].map(({ q, a }) => (
                <div key={q}><h3 className="font-semibold text-slate-900 mb-2">{q}</h3><p className="text-sm text-slate-600 leading-relaxed">{a}</p></div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-rose-600 to-brand-600 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Explore Fresha for Your Nail Salon</h2>
            <p className="text-rose-100 mb-6 max-w-lg mx-auto">Try Fresha free and see if the marketplace generates enough new clients for your area.</p>
            <a href="https://fresha.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-rose-700 hover:bg-rose-50 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 text-sm">
            <p className="font-semibold text-slate-700 mb-3">Compare Fresha:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare/fresha-vs-square" className="text-brand-600 hover:underline">Fresha vs Square Appointments →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
