import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "GlossGenius Review 2026 — Pricing, Features & Verdict for Nail Salons",
  description:
    "In-depth GlossGenius review for nail salons. Real pricing ($24–$148/mo), features, pros & cons, and who it's best for. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/reviews/glossgenius" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "GlossGenius Review for Nail Salons",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
  },
  author: { "@type": "Organization", name: "NailSalonTech" },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "GlossGenius",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://glossgenius.com",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "24",
      highPrice: "168",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "24",
        unitText: "MONTH",
      },
    },
    description:
      "GlossGenius is an all-in-one salon and spa management software designed for beauty professionals, featuring online booking, payment processing, client management, and marketing tools.",
  },
  reviewBody:
    "GlossGenius earns our top spot for nail salons thanks to its elegant client-facing booking experience, flat 2.6% payment processing rate, and nail-specific features like client cards and before/after photo storage. The platform is purpose-built for beauty professionals, and it shows.",
  datePublished: "2026-02-01",
  dateModified: "2026-02-17",
};

const scores = [
  { category: "Ease of Use", score: 5.0 },
  { category: "Nail-Specific Features", score: 4.5 },
  { category: "Payment Processing", score: 4.8 },
  { category: "Marketing Tools", score: 4.6 },
  { category: "Client Experience", score: 5.0 },
  { category: "Pricing Value", score: 4.3 },
  { category: "Customer Support", score: 4.6 },
];

const pros = [
  "Flat 2.6% payment processing — no surcharge for card type, Tap to Pay, or card-on-file",
  "Gorgeous booking website included — looks more premium than competitors",
  "Client cards with nail history, photos, and appointment notes",
  "Same-day payouts Monday–Thursday (instant payouts available 24/7 for +1.8%)",
  "Free data transfer from any previous software",
  "Built-in automated reminders (SMS + email) included in all plans",
  "AI Growth Analyst and AI Marketing Assistant on Gold/Platinum",
  "No long-term contracts — cancel anytime",
];

const cons = [
  "No consumer marketplace — you can't attract brand-new clients through GlossGenius itself",
  "Integrations limited compared to Vagaro or Acuity",
  "Payroll is a paid add-on (not included in base plans)",
  "No inventory management for nail product tracking",
  "Platinum plan ($148/mo) is expensive for a solo tech",
];

export default function GlossGeniusReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Breadcrumb + Hero */}
        <section className="bg-white border-b border-slate-100 pt-10 pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/reviews" className="hover:text-slate-600">Reviews</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">GlossGenius</span>
            </nav>

            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                    Editor&apos;s #1 Pick
                  </span>
                  <span className="text-xs text-slate-400">Updated Feb 2026</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
                  GlossGenius Review 2026
                </h1>
                <p className="text-slate-600 text-lg max-w-xl">
                  The most elegant nail salon booking software — is it worth the price?
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <StarRating rating={4.7} size="lg" />
                  <span className="text-sm text-slate-500">4.7/5 — Excellent</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://glossgenius.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-primary flex items-center gap-2"
                >
                  Try GlossGenius Free <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-xs text-slate-400 text-center">14-day free trial, no credit card</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          {/* Quick Verdict */}
          <div className="card mb-8 border-brand-200 bg-brand-50/30">
            <h2 className="text-lg font-bold text-slate-900 mb-3">⚡ Quick Verdict</h2>
            <p className="text-slate-700 leading-relaxed">
              GlossGenius is our top nail salon software pick for 2026. Its flat 2.6% payment rate means no surprise fees, and the client booking experience is the most polished we&apos;ve tested. The Standard plan at $24/month (annual) is excellent value for solo techs. The Gold plan ($48/mo) unlocks AI tools and is worth it once you&apos;re processing $3,000+/month. The main limitation is no marketplace for attracting new clients — if discovery is your primary goal, consider Fresha or Vagaro alongside.
            </p>
          </div>

          {/* Score Breakdown */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Score Breakdown</h2>
            <div className="space-y-4">
              {scores.map(({ category, score }) => (
                <div key={category} className="flex items-center gap-4">
                  <div className="w-44 text-sm text-slate-700 font-medium">{category}</div>
                  <div className="flex-1 bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-brand-500 rounded-full h-2 transition-all"
                      style={{ width: `${(score / 5) * 100}%` }}
                    />
                  </div>
                  <div className="w-8 text-sm font-semibold text-slate-900">{score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">GlossGenius Pricing (2026)</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {[
                {
                  name: "Standard",
                  annual: "$24/mo",
                  monthly: "$28/mo",
                  highlight: false,
                  features: [
                    "Online booking website",
                    "Client cards & history",
                    "Automated reminders",
                    "Payment processing (2.6%)",
                    "Basic reports",
                  ],
                },
                {
                  name: "Gold",
                  annual: "$48/mo",
                  monthly: "$56/mo",
                  highlight: true,
                  features: [
                    "Everything in Standard",
                    "AI Growth Analyst",
                    "AI Marketing Assistant",
                    "Advanced analytics",
                    "Priority support",
                  ],
                },
                {
                  name: "Platinum",
                  annual: "$148/mo",
                  monthly: "$168/mo",
                  highlight: false,
                  features: [
                    "Everything in Gold",
                    "Full AI Suite",
                    "Advanced customization",
                    "Multi-location",
                    "White-glove onboarding",
                  ],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-xl border p-5 ${
                    plan.highlight
                      ? "border-brand-300 bg-brand-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.highlight && (
                    <span className="text-xs font-semibold text-brand-700 bg-brand-100 rounded-full px-2.5 py-0.5 mb-2 inline-block">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <div className="text-2xl font-bold text-brand-600 mb-0.5">{plan.annual}</div>
                  <div className="text-xs text-slate-500 mb-4">billed annually ({plan.monthly} monthly)</div>
                  <ul className="space-y-1.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              <strong>Payment Processing:</strong> Flat 2.6% on all card types. No extra charges for Tap to Pay, card-on-file, or manual entry. Instant payouts available 24/7 for an additional 1.8% fee. Same-day payouts free Monday–Thursday.
            </div>
          </div>

          {/* Features */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Key Features for Nail Salons</h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm">
              <h3 className="text-base font-semibold text-slate-900">Online Booking Website</h3>
              <p>
                GlossGenius builds you a complete booking website — not just a widget you embed elsewhere.
                The site is mobile-responsive, login-free for clients (they book in 2 taps), and can
                showcase your nail portfolio with before/after photos. Compared to competitors, the GlossGenius
                booking page looks genuinely premium — important for nail techs who rely on aesthetic appeal.
              </p>

              <h3 className="text-base font-semibold text-slate-900">Client Cards & Nail History</h3>
              <p>
                Every client gets a digital card with full appointment history, service notes, product
                preferences, and photo storage. For nail techs, this means you can note gel vs. acrylic
                preferences, allergy information, nail shape requests, and reference photos — all in one place.
              </p>

              <h3 className="text-base font-semibold text-slate-900">Automated Reminders</h3>
              <p>
                GlossGenius sends automated SMS and email reminders at configurable intervals (e.g., 48 hours
                and 24 hours before appointment). Clients can confirm directly from the reminder. All included
                in the Standard plan with no per-SMS fees.
              </p>

              <h3 className="text-base font-semibold text-slate-900">Google Booking Integration</h3>
              <p>
                Clients can book appointments directly through Google Search and Google Maps, powered by
                Google&apos;s Reserve with Google feature. This is increasingly important for local SEO — clients
                who search &quot;nail salon near me&quot; can book you without ever leaving Google.
              </p>

              <h3 className="text-base font-semibold text-slate-900">AI Tools (Gold/Platinum)</h3>
              <p>
                The Gold plan introduces the AI Growth Analyst, which surfaces revenue opportunities (e.g., &quot;15
                clients haven&apos;t booked in 6 weeks — send a re-engagement offer&quot;) and the AI Marketing Assistant
                for auto-generating email campaigns. In testing, these tools genuinely surfaced actionable insights.
              </p>
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">✅ Pros</h2>
              <ul className="space-y-2.5">
                {pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">❌ Cons</h2>
              <ul className="space-y-2.5">
                {cons.map((con) => (
                  <li key={con} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best For */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who Is GlossGenius Best For?</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <strong>Solo nail techs</strong> who want a polished, professional booking experience without IT overhead.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <strong>Nail salons with 1–5 staff</strong> who want to streamline scheduling, reminders, and payments in one tool.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <strong>Techs who process significant card volume</strong> — the flat 2.6% rate saves money vs per-transaction fee models.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">❌</span>
                <div>
                  <strong>Salons who need client discovery</strong> — GlossGenius has no marketplace; consider adding Fresha or Booksy for new client acquisition.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">❌</span>
                <div>
                  <strong>Large salons needing inventory management</strong> — GlossGenius doesn&apos;t track product stock levels.
                </div>
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Integrations</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {["Google Calendar", "Apple Calendar", "Google Booking (Reserve with Google)", "Instagram", "Facebook", "Stripe Payouts"].map((integration) => (
                <div key={integration} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-brand-500 shrink-0" />
                  {integration}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Note: GlossGenius does not natively integrate with Zapier or open APIs. This is the main integration limitation compared to Acuity Scheduling or Vagaro.
            </p>
          </div>

          {/* FAQ */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">GlossGenius FAQs</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Does GlossGenius charge a percentage of bookings?",
                  a: "No. GlossGenius charges a flat monthly subscription and a 2.6% payment processing fee when clients pay by card. They do not take any percentage of your booking revenue.",
                },
                {
                  q: "Can I switch to GlossGenius from another platform?",
                  a: "Yes. GlossGenius offers a free data transfer service — fill out a form and their team migrates your appointments, client information, and service menu from virtually any platform. Most migrations complete within 24–48 hours.",
                },
                {
                  q: "Does GlossGenius work for multiple nail techs?",
                  a: "Yes. GlossGenius supports multiple service providers on all plans. You can manage separate calendars, service menus, and payouts for each team member. The Gold and Platinum plans add staff performance reporting.",
                },
                {
                  q: "What payment methods does GlossGenius accept?",
                  a: "GlossGenius processes all major credit and debit cards (Visa, Mastercard, Amex, Discover) at a flat 2.6% rate. Tap to Pay on iPhone is also supported. Cash payments can be logged manually.",
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-navy-700 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Our Verdict: GlossGenius Gets a Strong Recommend</h2>
            <p className="text-brand-100 mb-6 max-w-lg mx-auto">
              For nail techs who want a polished, professional platform without hidden fees, GlossGenius
              is the best overall choice in 2026. Start with the Standard plan and upgrade when you need the AI tools.
            </p>
            <a
              href="https://glossgenius.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Start Your Free 14-Day Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Compare Links */}
          <div className="mt-8 text-sm text-slate-600">
            <p className="font-semibold mb-3">Compare GlossGenius to competitors:</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/compare/glossgenius-vs-vagaro" className="text-brand-600 hover:underline">
                GlossGenius vs Vagaro →
              </Link>
              <Link href="/compare/glossgenius-vs-square" className="text-brand-600 hover:underline">
                GlossGenius vs Square Appointments →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
