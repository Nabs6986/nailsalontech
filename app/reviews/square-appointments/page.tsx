import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Square Appointments Review 2026 — Free Nail Salon Booking Software",
  description:
    "Square Appointments review for nail salons. Genuinely free for solo techs. Pricing, features, and who it's best for. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/reviews/square-appointments" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Square Appointments Review for Nail Salons",
  reviewRating: { "@type": "Rating", ratingValue: "4.3", bestRating: "5" },
  author: { "@type": "Organization", name: "NailSalonTech" },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "Square Appointments",
    url: "https://squareup.com/us/en/appointments",
    offers: { "@type": "Offer", priceCurrency: "USD", price: "0" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-02-17",
};

export default function SquareAppointmentsReview() {
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
              <span className="text-slate-600">Square Appointments</span>
            </nav>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Best Free Option</span>
                  <span className="text-xs text-slate-400">Updated Feb 2026</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Square Appointments Review 2026</h1>
                <p className="text-slate-600 text-lg max-w-xl">The best free booking software for solo nail technicians — no monthly fee, ever.</p>
                <div className="mt-4 flex items-center gap-4">
                  <StarRating rating={4.3} size="lg" />
                  <span className="text-sm text-slate-500">4.3/5 — Good</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://squareup.com/us/en/appointments" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex items-center gap-2">
                  Start Free <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-xs text-slate-400 text-center">Free forever for solo techs</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          <div className="card mb-8 bg-green-50/30 border-green-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">⚡ Quick Verdict</h2>
            <p className="text-slate-700 leading-relaxed">
              Square Appointments is genuinely free for solo nail techs — no monthly subscription, no booking fees, no trial that expires. You only pay 2.6% + $0.10 when clients pay by card. It&apos;s deeply integrated with the Square ecosystem (POS, payroll, loyalty, inventory) which is a major advantage if you already use Square. The trade-off: it&apos;s not built specifically for nail salons, lacking features like nail-specific client cards and the polished booking aesthetic of GlossGenius.
            </p>
          </div>

          {/* Pricing */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Square Appointments Pricing (2026)</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {[
                { name: "Free", price: "$0/mo", desc: "Solo professionals", features: ["Online booking site", "Unlimited calendars", "Appointment reminders", "Customer directory", "Basic reports"], highlight: false },
                { name: "Plus", price: "$29/mo", desc: "Per location", features: ["Everything in Free", "Cancellation policy & no-show fees", "Multi-staff booking", "Waitlist management", "Custom intake forms"], highlight: true },
                { name: "Premium", price: "$69/mo", desc: "Per location", features: ["Everything in Plus", "Future bookings report", "Service cost tracking", "Resource management", "Priority support"], highlight: false },
              ].map((plan) => (
                <div key={plan.name} className={`rounded-xl border p-5 ${plan.highlight ? "border-green-300 bg-green-50" : "border-slate-200 bg-white"}`}>
                  {plan.highlight && <span className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2.5 py-0.5 mb-2 inline-block">Best Value</span>}
                  <h3 className="font-bold text-slate-900">{plan.name}</h3>
                  <div className="text-2xl font-bold text-slate-900 my-1">{plan.price}</div>
                  <div className="text-xs text-slate-500 mb-4">{plan.desc}</div>
                  <ul className="space-y-1.5">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{f}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600 space-y-2">
              <p><strong>Payment Processing:</strong> 2.6% + $0.10 per tap/dip/swipe on all plans (same rate regardless of card type)</p>
              <p><strong>Keyed-in transactions:</strong> 3.5% + $0.15</p>
              <p><strong>No booking fees, no setup fees, no cancellation fees</strong></p>
            </div>
          </div>

          {/* Features */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Key Features for Nail Salons</h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Square Ecosystem Integration</h3>
                <p>Square Appointments integrates seamlessly with Square POS, Square Payroll, Square Marketing, Square Loyalty, and Square Inventory. If you already sell nail products at a counter or track inventory, this full suite is hard to beat. No third-party integrations required.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Online Booking Widget</h3>
                <p>Clients can book from your website (embedded widget), Google Search, Instagram, and Facebook. The booking flow is clean and mobile-optimized. The Free plan supports unlimited appointment types and service menu customization.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Automated Reminders</h3>
                <p>Appointment reminders via SMS and email are included on all plans. Clients receive reminders at configurable intervals before their nail appointment. Confirmation and cancellation handling is automated.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">No-Show Protection (Plus+)</h3>
                <p>The Plus plan ($29/mo) adds the ability to require a card on file and charge no-show or late cancellation fees. For nail techs dealing with chronic no-shows, this feature alone may justify the upgrade cost.</p>
              </div>
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">✅ Pros</h2>
              <ul className="space-y-2.5">
                {["Genuinely free forever for solo nail techs", "No booking fees on any plan", "Deep Square ecosystem integration (POS, payroll, loyalty)", "Unlimited staff calendars on all plans", "Clean, easy setup in under 30 minutes", "Strong brand recognition — clients trust Square payments", "No-show fees on Plus plan"].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">❌ Cons</h2>
              <ul className="space-y-2.5">
                {["Not specifically built for nail salons", "No nail-specific client cards or photo storage (vs. GlossGenius)", "No consumer marketplace for new client discovery", "2.6% + $0.10 payment fee is non-negotiable on all plans", "Limited marketing tools vs. Vagaro or Fresha", "Less aesthetically polished booking page"].map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700"><X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who Is Square Appointments Best For?</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>New nail techs just starting out</strong> who want zero monthly overhead while building their clientele.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Existing Square users</strong> who already use Square POS, payroll, or loyalty — the unified ecosystem is very convenient.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Techs who sell nail products retail</strong> — Square Inventory integrates directly with Appointments.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Nail techs who want a premium, nail-specific booking experience</strong> — look at GlossGenius instead.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Salons who want marketplace exposure for new clients</strong> — Square has no consumer directory for discovery.</div></div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Square Appointments FAQs</h2>
            <div className="space-y-5">
              {[
                { q: "Is Square Appointments really free?", a: "Yes. The Free plan for solo professionals has no monthly subscription fee and no booking fees. You only pay 2.6% + $0.10 when a client pays by card. There&apos;s no catch — Square makes money on payment processing, so they subsidize the booking software." },
                { q: "What is the difference between Square Free and Square Plus?", a: "The Free plan covers solo techs needing basic booking. Square Plus ($29/mo) adds cancellation/no-show fees (require card on file), multi-staff booking coordination, and waitlist management. If you have chronic no-shows, the Plus plan pays for itself quickly." },
                { q: "Does Square Appointments work for a nail salon with 3 technicians?", a: "Yes. Square Appointments supports unlimited staff calendars on all plans, including Free. Each tech can have their own bookable calendar, services, and availability. For 3 techs who need multi-staff coordination features (booking multiple techs for one client, etc.), upgrade to Plus at $29/month." },
                { q: "Can I use Square Appointments without Square hardware?", a: "Yes. You can use Square Appointments without any Square hardware — clients can pay via card-on-file online, through a link, or via the Square app on your phone. If you want in-person card processing, Square offers free card readers and POS hardware at various price points." },
              ].map(({ q, a }) => (
                <div key={q}><h3 className="font-semibold text-slate-900 mb-2">{q}</h3><p className="text-sm text-slate-600 leading-relaxed">{a}</p></div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Start Free with Square Appointments</h2>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">No monthly fee, no trial expiration, no credit card required. Set up your nail salon booking in 30 minutes.</p>
            <a href="https://squareup.com/us/en/appointments" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-slate-800 hover:bg-slate-100 transition-colors">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 text-sm">
            <p className="font-semibold text-slate-700 mb-3">Compare Square Appointments:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare/fresha-vs-square" className="text-brand-600 hover:underline">Fresha vs Square →</Link>
              <Link href="/compare/glossgenius-vs-square" className="text-brand-600 hover:underline">GlossGenius vs Square →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
