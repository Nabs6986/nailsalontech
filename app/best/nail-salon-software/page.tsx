import type { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Best Nail Salon Software 2026 — Top 6 Platforms Ranked & Reviewed",
  description:
    "Best nail salon software of 2026. GlossGenius is our top pick. Compare all 6 platforms by features, pricing, and nail-specific fit. Independent expert rankings.",
  alternates: { canonical: "https://nailsalontech.com/best/nail-salon-software" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Nail Salon Software 2026",
  description: "Top-ranked nail salon booking and management software platforms for 2026",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "GlossGenius", url: "https://nailsalontech.com/reviews/glossgenius" },
    { "@type": "ListItem", position: 2, name: "Vagaro", url: "https://nailsalontech.com/reviews/vagaro" },
    { "@type": "ListItem", position: 3, name: "Fresha", url: "https://nailsalontech.com/reviews/fresha" },
    { "@type": "ListItem", position: 4, name: "Square Appointments", url: "https://nailsalontech.com/reviews/square-appointments" },
    { "@type": "ListItem", position: 5, name: "Booksy", url: "https://nailsalontech.com/reviews/booksy" },
    { "@type": "ListItem", position: 6, name: "Acuity Scheduling", url: "https://nailsalontech.com/reviews/acuity-scheduling" },
  ],
};

const picks = [
  {
    rank: 1,
    name: "GlossGenius",
    badge: "Best Overall",
    rating: 4.7,
    price: "From $24/mo (annual)",
    href: "/reviews/glossgenius",
    affiliateHref: "https://glossgenius.com",
    summary: "GlossGenius is our top overall pick for nail salons in 2026. Its flat 2.6% payment rate, polished booking website, and client card system make it the best all-in-one solution for most nail technicians — solo or with a small team.",
    bestFor: "Solo nail techs and small salons who want a premium, nail-specific experience",
    highlights: ["Flat 2.6% payment processing, all card types", "Beautiful client-facing booking website", "Client cards with nail history and photo storage", "Same-day payouts Mon–Thu", "14-day free trial"],
  },
  {
    rank: 2,
    name: "Vagaro",
    badge: "Best for Multi-Staff",
    rating: 4.5,
    price: "From $30/mo",
    href: "/reviews/vagaro",
    affiliateHref: "https://vagaro.com",
    summary: "Vagaro earns the #2 spot for its combination of marketplace exposure (at zero commission), comprehensive features (loyalty, inventory, memberships), and 30-day free trial. The $30/month entry price scales predictably with team size.",
    bestFor: "Multi-staff nail salons wanting marketplace visibility + loyalty tools",
    highlights: ["Free marketplace listing — $0 commission on bookings", "Loyalty programs and gift cards built in", "Inventory management for nail products", "30-day free trial", "Live phone support 24/7"],
  },
  {
    rank: 3,
    name: "Fresha",
    badge: "Best Marketplace",
    rating: 4.4,
    price: "From $19.95/mo + 20% new client fee",
    href: "/reviews/fresha",
    affiliateHref: "https://fresha.com",
    summary: "Fresha has the most powerful consumer marketplace globally (44M+ consumers) and the lowest payment processing rate (2.29% + $0.20). The 20% new-client marketplace commission is a one-time cost per client — and the ROI is strong if Fresha is popular in your area.",
    bestFor: "Salons in major markets wanting aggressive new-client acquisition through marketplace",
    highlights: ["44M+ consumers on global marketplace", "Lowest payment processing: 2.29% + $0.20", "20% one-time fee only on new marketplace clients", "Automated marketing campaigns included", "Strong inventory and reporting tools"],
  },
  {
    rank: 4,
    name: "Square Appointments",
    badge: "Best Free Option",
    rating: 4.3,
    price: "Free (solo) / $29/mo (Plus)",
    href: "/reviews/square-appointments",
    affiliateHref: "https://squareup.com/us/en/appointments",
    summary: "Square Appointments is the only genuinely free nail salon booking software. Solo techs pay $0/month and only 2.6% + $0.10 per card transaction. Perfect for new nail techs building their clientele, or anyone already using the Square ecosystem.",
    bestFor: "New nail techs, Square ecosystem users, and anyone who wants zero monthly overhead",
    highlights: ["$0/month for solo professionals", "No booking fees ever", "Deep Square ecosystem integration", "Trusted payment brand clients recognize", "30-day trial on paid plans"],
  },
  {
    rank: 5,
    name: "Booksy",
    badge: "Best Consumer Discovery",
    rating: 4.4,
    price: "$29.99/mo + $20/additional user",
    href: "/reviews/booksy",
    affiliateHref: "https://booksy.com",
    summary: "Booksy&apos;s 44 million consumer base and commission-free marketplace model make it compelling for nail techs focused on client acquisition. The all-features-included pricing is transparent, and no-show protection is easy to set up.",
    bestFor: "Nail techs who want marketplace discovery without per-client commission fees",
    highlights: ["310,000+ beauty pros on platform", "44M+ consumers searching for bookings", "All features included — no tiers to navigate", "Commission-free marketplace bookings", "14-day free trial"],
  },
  {
    rank: 6,
    name: "Acuity Scheduling",
    badge: "Most Affordable",
    rating: 4.2,
    price: "From $16/mo (annual)",
    href: "/reviews/acuity-scheduling",
    affiliateHref: "https://acuityscheduling.com",
    summary: "Acuity Scheduling offers the lowest starting price of any paid platform and the most powerful intake form system for capturing nail preferences. Best for Squarespace users and tech-savvy nail techs who want flexible workflow automation.",
    bestFor: "Squarespace users, nail tech workshop hosts, and tech-forward solo operators",
    highlights: ["Starting at $16/mo (annual billing)", "Best client intake forms for nail preferences", "Zapier integration with 5,000+ apps", "Native Squarespace embedding", "7-day free trial"],
  },
];

export default function BestNailSalonSoftware() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-slate-50">
        <section className="bg-white border-b border-slate-100 pt-10 pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-4">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/best" className="hover:text-slate-600">Best Of</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Best Nail Salon Software 2026</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Best Nail Salon Software 2026
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              We tested every major platform and ranked the 6 best nail salon booking and management tools for 2026. Real pricing, hands-on testing, nail-specific evaluation.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>🔄 Updated February 2026</span>
              <span>✅ 6 platforms tested</span>
              <span>🚫 No paid placements</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          {/* Quick Answer Box */}
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-5 mb-10">
            <h2 className="font-bold text-slate-900 mb-3">⚡ Quick Answer: What&apos;s the Best Nail Salon Software?</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>Best overall:</strong> GlossGenius ($24/mo) — best booking experience + flat 2.6% payments</li>
              <li><strong>Best for multi-staff salons:</strong> Vagaro ($30/mo) — marketplace + loyalty + inventory</li>
              <li><strong>Best free option:</strong> Square Appointments ($0/mo) — genuinely free for solo techs</li>
              <li><strong>Best marketplace discovery:</strong> Fresha ($19.95/mo + 20% new client fee) or Booksy ($29.99/mo)</li>
              <li><strong>Most affordable paid option:</strong> Acuity Scheduling ($16/mo annual)</li>
            </ul>
          </div>

          {/* Ranked List */}
          <div className="space-y-8">
            {picks.map((pick) => (
              <div key={pick.name} className={`card ${pick.rank === 1 ? "border-brand-200 bg-brand-50/20" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-black text-slate-300">#{pick.rank}</span>
                      <span className="text-xs font-semibold bg-brand-100 text-brand-700 rounded-full px-2.5 py-0.5">{pick.badge}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{pick.name}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <StarRating rating={pick.rating} size="sm" />
                      <span className="text-sm text-slate-500">{pick.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href={pick.affiliateHref} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex items-center gap-2 text-sm">
                      Try Free <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <Link href={pick.href} className="btn-secondary text-sm text-center">
                      Full Review
                    </Link>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-4">{pick.summary}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Why We Recommend It</p>
                    <ul className="space-y-1.5">
                      {pick.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />{h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Best For</p>
                    <p className="text-sm text-slate-700">{pick.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="card mt-10">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: "What software do most professional nail salons use?", a: "In the US, Vagaro and GlossGenius are the most widely used dedicated nail salon platforms. Square Appointments has broad adoption due to its free tier. Fresha and Booksy have growing market share in urban markets. Acuity Scheduling is popular among tech-savvy independent nail techs with Squarespace websites." },
                { q: "Can nail salon software help reduce no-shows?", a: "Yes. All six platforms we reviewed include automated appointment reminders via SMS and/or email. According to platform data, automated reminders reduce no-shows by 25–73%. Booksy reports a 25% drop in no-shows and cancellations. GlossGenius reports similar outcomes. For persistent no-shows, Square Plus and Booksy both support requiring a card on file and charging no-show fees." },
                { q: "Do I need nail salon software if I only have a few clients?", a: "Even with a small client base, booking software saves time and looks professional. The free Square Appointments plan is worthwhile even for techs with 10–20 clients — it eliminates phone/text scheduling, sends automatic reminders, and processes payments. As your business grows, you can upgrade to a paid plan with more features." },
                { q: "What's the most important feature in nail salon software?", a: "For most nail techs, the most important features are: (1) automated appointment reminders to reduce no-shows, (2) online booking so clients can self-schedule 24/7, (3) payment processing that's reliable and affordable, and (4) client records where you can track nail history, preferences, and photos. GlossGenius excels at all four." },
              ].map(({ q, a }) => (
                <div key={q}><h3 className="font-semibold text-slate-900 mb-2">{q}</h3><p className="text-sm text-slate-600 leading-relaxed">{a}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
