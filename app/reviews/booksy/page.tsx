import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Booksy Review 2026 — Nail Salon Booking Software Pricing & Features",
  description:
    "Booksy review for nail salons. $29.99/mo for all features, +$20/mo per team member. 310,000 beauty pros, 44M+ consumers. Real pros & cons. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/reviews/booksy" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Booksy Review for Nail Salons",
  reviewRating: { "@type": "Rating", ratingValue: "4.4", bestRating: "5" },
  author: { "@type": "Organization", name: "NailSalonTech" },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "Booksy",
    url: "https://booksy.com",
    offers: { "@type": "Offer", priceCurrency: "USD", price: "29.99", unitCode: "MON" },
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

export default function BooksyReview() {
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
              <span className="text-slate-600">Booksy</span>
            </nav>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <span className="text-xs text-slate-400 mb-1 block">Updated Feb 2026</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Booksy Review 2026</h1>
                <p className="text-slate-600 text-lg max-w-xl">Popular beauty marketplace with 44M+ consumers — flat $29.99/mo, all features included.</p>
                <div className="mt-4 flex items-center gap-4">
                  <StarRating rating={4.4} size="lg" />
                  <span className="text-sm text-slate-500">4.4/5 — Very Good</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://booksy.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex items-center gap-2">
                  Try Booksy Free <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-xs text-slate-400 text-center">14-day free trial, no credit card</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          <div className="card mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">⚡ Quick Verdict</h2>
            <p className="text-slate-700 leading-relaxed">
              Booksy stands out for its massive consumer marketplace — 310,000 beauty pros and 44 million consumers use the platform globally. The flat $29.99/month pricing model (with all features included) is transparent and predictable. The main caveat: payment processing is separate, adding another vendor relationship and fees. For nail techs who want marketplace visibility without commission fees on bookings, Booksy is a strong contender alongside Vagaro.
            </p>
          </div>

          {/* Pricing */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Booksy Pricing (2026)</h2>
            <div className="rounded-xl border border-brand-200 bg-brand-50 p-5 mb-5">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-slate-900">$29.99</span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">All features included for 1 user. No hidden feature tiers.</p>
              <div className="text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
                <strong>Additional team members:</strong> +$20/month per person
                <br />
                <span className="text-xs text-amber-600">A 3-tech salon pays $29.99 + $20 + $20 = $69.99/month before payment processing</span>
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700 space-y-2">
              <p><strong>Payment Processing:</strong> Not included — use your own processor (Stripe: 2.9% + $0.30, or others)</p>
              <p><strong>Marketplace Listing:</strong> Included — no commission on bookings from Booksy marketplace</p>
              <p><strong>Contract:</strong> Monthly, cancel anytime</p>
              <p><strong>Free Trial:</strong> 14 days, no credit card required</p>
            </div>
          </div>

          {/* Features */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Key Features for Nail Salons</h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Booksy Marketplace</h3>
                <p>Your nail salon is listed on Booksy.com and the Booksy app, where 44 million consumers actively search for beauty appointments. Unlike Fresha, Booksy charges zero commission on marketplace bookings — your listing is included in the $29.99 monthly fee. Booksy reports that pros on their platform see an average 20% increase in bookings per client.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">No-Show Protection</h3>
                <p>Booksy allows you to require deposits and set cancellation policies. Clients must provide payment info to book, and Booksy enforces your no-show fee automatically. This is particularly valuable for nail salons where no-shows cost you both time and product materials.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Built-In Marketing Tools</h3>
                <p>Booksy includes automated marketing campaigns, review request messages, and client retention tools. You can send promotional messages and re-engagement campaigns to dormant clients. Automated appointment reminders are included and reduce no-shows by an average 25% according to Booksy data.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Calendar & Scheduling</h3>
                <p>The calendar is fully customizable — set your hours, block time, manage multiple services with custom durations, and control who can book you. Clients see real-time availability. Multi-staff booking lets clients book with a specific nail tech if you have a team.</p>
              </div>
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">✅ Pros</h2>
              <ul className="space-y-2.5">
                {["All features included for one flat price", "310,000+ beauty pros on the platform", "44M+ consumers actively booking", "No commission on marketplace bookings", "No-show protection with deposits", "14-day free trial, no credit card", "Built-in marketing and retention tools", "Monthly billing, cancel anytime"].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">❌ Cons</h2>
              <ul className="space-y-2.5">
                {["Payment processing is separate (adds another vendor + fees)", "Multi-staff pricing adds up fast (+$20/tech)", "No built-in POS terminal system", "No inventory management for nail products", "UI less polished than GlossGenius", "No nail-specific client cards"].map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700"><X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who Is Booksy Best For?</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Solo nail techs who want marketplace discovery</strong> without paying per-client commission fees.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Small salons (1–3 techs)</strong> who want simple flat-rate pricing with no feature tiers to navigate.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Techs dealing with chronic no-shows</strong> — Booksy&apos;s no-show protection is easy to set up and enforce.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Larger salons with 5+ staff</strong> — at $20/additional user, costs escalate: a 6-tech salon pays $129.99/month before processing fees.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Salons needing POS and inventory management</strong> — consider Square Appointments or Vagaro instead.</div></div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Booksy FAQs</h2>
            <div className="space-y-5">
              {[
                { q: "Does Booksy take a commission on bookings?", a: "No. Booksy does not take any commission on bookings made through their marketplace or your personal booking link. You pay a flat $29.99/month subscription (plus $20/month per additional team member) and keep 100% of your service revenue." },
                { q: "How much does Booksy cost for a 2-person nail salon?", a: "For a 2-person nail salon, Booksy costs $29.99 + $20 = $49.99/month. You also need to set up a separate payment processor (such as Stripe at 2.9% + $0.30 per transaction). A 2-tech salon processing $10,000/month in card revenue would pay approximately $50 + $320 processing = ~$370/month total." },
                { q: "Does Booksy have a free plan?", a: "No permanent free plan. Booksy offers a 14-day free trial with no credit card required — you get access to all features during the trial. After 14 days, the plan is $29.99/month." },
                { q: "What payment processors work with Booksy?", a: "Booksy integrates with Stripe for card processing. You can also use Square hardware for in-person payments. Booksy does not have a proprietary payment processor — you maintain your own payment processing account separately." },
              ].map(({ q, a }) => (
                <div key={q}><h3 className="font-semibold text-slate-900 mb-2">{q}</h3><p className="text-sm text-slate-600 leading-relaxed">{a}</p></div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Try Booksy Free for 14 Days</h2>
            <p className="text-amber-100 mb-6 max-w-lg mx-auto">All features included. No credit card required. Join 310,000+ beauty pros on the Booksy platform.</p>
            <a href="https://booksy.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-amber-700 hover:bg-amber-50 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 text-sm">
            <p className="font-semibold text-slate-700 mb-3">Compare Booksy:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare/vagaro-vs-booksy" className="text-brand-600 hover:underline">Booksy vs Vagaro →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
