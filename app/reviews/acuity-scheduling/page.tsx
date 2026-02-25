import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ReviewSchema } from "@/components/schema/ReviewSchema";
import { SoftwareApplicationSchema } from "@/components/schema/SoftwareApplicationSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Acuity Scheduling Review 2026 — Nail Salon Features & Pricing",
  description:
    "Acuity Scheduling review for nail salons. Starting at $16/mo annually. Features, pros & cons for nail technicians. How it compares to salon-specific tools. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/reviews/acuity-scheduling" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Acuity Scheduling Review for Nail Salons",
  reviewRating: { "@type": "Rating", ratingValue: "4.2", bestRating: "5" },
  author: { "@type": "Organization", name: "NailSalonTech" },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "Acuity Scheduling",
    url: "https://acuityscheduling.com",
    offers: { "@type": "Offer", priceCurrency: "USD", price: "16", unitCode: "MON" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      reviewCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-02-17",
};

export default function AcuitySchedulingReview() {
  return (
    <>
      <ReviewSchema
        name="Acuity Scheduling Review for Nail Salons"
        reviewBody="Acuity Scheduling is the most affordable paid option at $16/month annually, and it's excellent for nail techs who already use Squarespace. The intake form system is genuinely useful for capturing nail preferences."
        ratingValue={4.2}
        softwareName="Acuity Scheduling"
        softwareUrl="https://acuityscheduling.com"
        price="$16"
      />
      <SoftwareApplicationSchema
        name="Acuity Scheduling"
        description="Affordable scheduling software with powerful client intake forms, Squarespace integration, and Zapier connectivity for nail salons."
        rating={4.2}
        price="$16"
        url="https://nailsalontech.com/reviews/acuity-scheduling"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nailsalontech.com" },
          { name: "Reviews", url: "https://nailsalontech.com/reviews" },
          { name: "Acuity Scheduling", url: "https://nailsalontech.com/reviews/acuity-scheduling" },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-slate-50">
        <section className="bg-white border-b border-slate-100 pt-10 pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/reviews" className="hover:text-slate-600">Reviews</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Acuity Scheduling</span>
            </nav>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <span className="text-xs text-slate-400 mb-1 block">Updated Feb 2026</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Acuity Scheduling Review 2026</h1>
                <p className="text-slate-600 text-lg max-w-xl">Most affordable starting price, but not specifically built for nail salons. Here&apos;s what you get.</p>
                <div className="mt-4 flex items-center gap-4">
                  <StarRating rating={4.2} size="lg" />
                  <span className="text-sm text-slate-500">4.2/5 — Good</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://acuityscheduling.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex items-center gap-2">
                  Try Acuity Free <ExternalLink className="h-4 w-4" />
                </a>
                <p className="text-xs text-slate-400 text-center">7-day free trial</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          <div className="card mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-3">⚡ Quick Verdict</h2>
            <p className="text-slate-700 leading-relaxed">
              Acuity Scheduling (owned by Squarespace) is the most affordable paid option at $16/month annually, and it&apos;s excellent for nail techs who already use Squarespace for their website. The intake form system — where clients can fill out nail preference surveys before their appointment — is genuinely useful. However, Acuity lacks nail-specific features, marketplace discovery, and built-in payment processing that dedicated salon tools offer. Best for tech-savvy solo techs who prioritize customization over nail-specific functionality.
            </p>
          </div>

          {/* Pricing */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Acuity Scheduling Pricing (2026)</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {[
                { name: "Emerging", annualPrice: "$16/mo", monthlyPrice: "$20/mo", users: "1 user", features: ["Online booking", "Unlimited services", "Email reminders", "Client self-scheduling", "Basic intake forms"] },
                { name: "Growing", annualPrice: "$27/mo", monthlyPrice: "$34/mo", users: "Up to 6 users", highlight: true, features: ["Everything in Emerging", "SMS/text reminders", "Multi-location", "Reporting & analytics", "Remove Acuity branding"] },
                { name: "Powerhouse", annualPrice: "$49/mo", monthlyPrice: "$61/mo", users: "Up to 36 users", features: ["Everything in Growing", "Advanced API access", "Multiple time zones", "HIPAA compliance (add-on)", "Custom CSS"] },
              ].map((plan) => (
                <div key={plan.name} className={`rounded-xl border p-5 ${plan.highlight ? "border-brand-300 bg-brand-50" : "border-slate-200 bg-white"}`}>
                  {plan.highlight && <span className="text-xs font-semibold text-brand-700 bg-brand-100 rounded-full px-2.5 py-0.5 mb-2 inline-block">Best for Small Salons</span>}
                  <h3 className="font-bold text-slate-900">{plan.name}</h3>
                  <div className="text-xl font-bold text-brand-600 my-1">{plan.annualPrice} <span className="text-sm font-normal text-slate-400">annual</span></div>
                  <div className="text-xs text-slate-500 mb-1">{plan.monthlyPrice} if billed monthly</div>
                  <div className="text-xs text-slate-500 mb-4">{plan.users}</div>
                  <ul className="space-y-1.5">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />{f}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600 space-y-2">
              <p><strong>Payment Processing:</strong> Not built-in — integrates with Stripe (2.9% + $0.30), Square, or PayPal</p>
              <p><strong>SMS Reminders:</strong> Included in Growing and Powerhouse plans only</p>
              <p><strong>Free Trial:</strong> 7 days on any plan</p>
              <p><strong>Squarespace Integration:</strong> Native — embeds directly into any Squarespace website</p>
            </div>
          </div>

          {/* Features for Nail Salons */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Key Features for Nail Salons</h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Client Intake Forms</h3>
                <p>Acuity&apos;s intake form system is the most powerful among the platforms we reviewed. You can create custom forms that clients complete when booking — capturing nail shape preferences, gel vs. acrylic choice, allergy information, reference photo links, and any other pre-appointment data. This is genuinely useful for nail technicians who need client preferences before an appointment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Scheduling Flexibility</h3>
                <p>Acuity offers granular scheduling control: buffer times between appointments, prep/cleanup time, class scheduling for nail art workshops, group bookings, and subscription packages. You can set complex availability rules that most simpler tools don&apos;t support.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Zapier & API Integration</h3>
                <p>Acuity connects to 5,000+ apps via Zapier — enabling automated workflows like adding new clients to a CRM, sending follow-up emails through Mailchimp, or creating invoices in QuickBooks. For nail techs who run a more sophisticated business operation, this integration depth is valuable.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Squarespace Website Integration</h3>
                <p>If your nail salon website is on Squarespace, Acuity embeds natively with no widget code. Clients book without leaving your site, which improves conversion rates. For Squarespace users, this tight integration is a compelling reason to choose Acuity over competitors.</p>
              </div>
            </div>
          </div>

          {/* Pros/Cons */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">✅ Pros</h2>
              <ul className="space-y-2.5">
                {["Lowest starting price ($16/mo annual) among paid platforms", "Best client intake form system for capturing nail preferences", "Zapier integration with 5,000+ apps", "Seamless Squarespace website embedding", "Group class scheduling for nail art workshops", "Flexible availability and buffer time controls", "7-day free trial"].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2 className="text-lg font-bold text-slate-900 mb-4">❌ Cons</h2>
              <ul className="space-y-2.5">
                {["Not built for nail/beauty salons — no nail-specific features", "No built-in payment processing (requires Stripe/Square setup)", "No consumer marketplace for new client discovery", "SMS reminders only on Growing plan and above", "No loyalty programs or gift cards", "No nail product inventory management", "Less intuitive for non-technical nail techs"].map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700"><X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who Is Acuity Best For?</h2>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Squarespace website users</strong> who want native booking integration without leaving their existing website ecosystem.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Solo nail techs who run nail art workshops</strong> or group classes alongside regular nail appointments.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">✅</span><div><strong>Tech-forward nail techs</strong> who want Zapier automations, CRM integrations, and flexible workflow tools.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Nail techs who want salon-specific features</strong> — client nail cards, marketplace discovery, built-in POS. Use GlossGenius or Vagaro instead.</div></div>
              <div className="flex items-start gap-3"><span className="text-xl">❌</span><div><strong>Non-technical salon owners</strong> who want something that just works out of the box — the setup complexity is higher than GlossGenius or Booksy.</div></div>
            </div>
          </div>

          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Acuity Scheduling FAQs</h2>
            <div className="space-y-5">
              {[
                { q: "Is Acuity Scheduling owned by Squarespace?", a: "Yes. Squarespace acquired Acuity Scheduling in 2019. The two products share login credentials and integrate natively. If you have a Squarespace website, you can embed your Acuity booking calendar directly into any page without writing code." },
                { q: "Does Acuity Scheduling have built-in payment processing?", a: "No. Acuity integrates with Stripe, Square, and PayPal for payment processing, but you must set up your own account with one of these processors. Stripe charges 2.9% + $0.30 per transaction. This adds an extra setup step compared to GlossGenius or Fresha, which have built-in payment systems." },
                { q: "Can I use Acuity Scheduling for a nail salon with multiple staff?", a: "Yes. The Growing plan ($27/month annually) supports up to 6 users with separate calendars and availability. The Powerhouse plan supports up to 36 users. Multi-staff coordination is fully supported, though Acuity lacks nail-specific staff features like commission tracking that Vagaro offers." },
                { q: "What is the difference between Acuity and GlossGenius for nail salons?", a: "GlossGenius is purpose-built for beauty professionals with nail-specific client cards, a polished booking website, built-in payment processing at 2.6%, and same-day payouts. Acuity Scheduling is a general scheduling tool with more flexibility and integrations but no nail-specific features, no built-in payments, and less polish. For most nail techs, GlossGenius is the better fit. Choose Acuity if you need Squarespace integration or advanced Zapier workflows." },
              ].map(({ q, a }) => (
                <div key={q}><h3 className="font-semibold text-slate-900 mb-2">{q}</h3><p className="text-sm text-slate-600 leading-relaxed">{a}</p></div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Try Acuity Scheduling Free</h2>
            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">7-day free trial on any plan. See if the flexibility and Squarespace integration work for your nail salon.</p>
            <a href="https://acuityscheduling.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
