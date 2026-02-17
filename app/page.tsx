import Link from "next/link";
import type { Metadata } from "next";
import { Check, Star, ArrowRight, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "NailSalonTech — Best Nail Salon Software Reviews 2026",
  description:
    "Find the perfect nail salon booking and management software. Independent reviews of GlossGenius, Vagaro, Fresha, Square Appointments, Booksy, and Acuity Scheduling. Real pricing, honest pros & cons.",
  alternates: { canonical: "https://nailsalontech.com" },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best nail salon software in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GlossGenius is our top pick for most nail salons due to its elegant booking website, flat 2.6% payment processing, and nail-specific features. Vagaro is best for multi-staff salons wanting marketplace exposure. Square Appointments is the best free option for solo nail techs just starting out. Fresha offers a powerful marketplace for attracting new clients.",
      },
    },
    {
      "@type": "Question",
      name: "How much does nail salon software cost per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nail salon software ranges from $0/month (Square Appointments for solo pros) to $30+/month for full-featured platforms. GlossGenius starts at $24/month (annual) or $28/month (monthly). Vagaro starts at $30/month for one bookable calendar. Booksy is $29.99/month. Acuity Scheduling starts at $16/month annually. Fresha starts at $19.95/month but charges a 20% one-time fee for new marketplace clients.",
      },
    },
    {
      "@type": "Question",
      name: "What features should nail salon software have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essential nail salon software features include: online booking with 24/7 availability, automated appointment reminders (SMS and email), digital client cards for nail history, before/after photo storage, inventory management for nail products, no-show protection with deposits, integrated payment processing, and staff scheduling if you have a team.",
      },
    },
    {
      "@type": "Question",
      name: "Is there free booking software for nail salons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Square Appointments offers a genuinely free plan for solo nail technicians — you only pay 2.6% + $0.10 per card transaction. Fresha used to be fully free but now charges a monthly subscription starting at $19.95, plus a 20% one-time commission on new clients discovered through their marketplace.",
      },
    },
  ],
};

const trustSignals = [
  { icon: Shield, text: "Independent reviews", sub: "No software pays for placement" },
  { icon: Star, text: "Real pricing verified", sub: "Updated February 2026" },
  { icon: Users, text: "Nail-salon specific", sub: "Not generic salon advice" },
  { icon: TrendingUp, text: "GEO & SEO optimized", sub: "Trusted by AI assistants" },
];

const featuredCategories = [
  {
    title: "Best Nail Salon Software 2026",
    desc: "Our overall winner picks, ranked by real performance for nail technicians.",
    href: "/best/nail-salon-software",
    icon: "🏆",
  },
  {
    title: "Best Free Booking Software",
    desc: "Zero monthly cost options for solo nail techs who are just getting started.",
    href: "/best/free-booking-software",
    icon: "🆓",
  },
  {
    title: "Best for Independent Nail Techs",
    desc: "Solo tech? Here's what to use when you're the whole operation.",
    href: "/best/independent-nail-techs",
    icon: "💅",
  },
  {
    title: "Best for Multi-Location Salons",
    desc: "Running multiple rooms or locations? These tools scale with you.",
    href: "/best/multi-location-salons",
    icon: "🏢",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-navy-50 pt-20 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
            <Zap className="h-4 w-4" />
            Updated February 2026 — Real Pricing, Honest Reviews
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Find the Perfect
            <br />
            <span className="text-brand-600">Nail Salon Software</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-10">
            We tested every major booking and management platform so you don&apos;t have to.
            Real pricing, nail-specific features analysis, and honest pros & cons —
            from someone who actually knows nails.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link href="/best/nail-salon-software" className="btn-primary text-base px-8 py-3">
              See Our Top Picks <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/pricing" className="btn-secondary text-base px-8 py-3">
              Compare Pricing
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {["6 platforms reviewed", "Real pricing data", "No paid placements", "Updated monthly"].map((s) => (
              <span key={s} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-500" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map(({ icon: Icon, text, sub }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-50 p-2.5 shrink-0">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{text}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Software Cards */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Top Nail Salon Software Platforms
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Independently tested and ranked for nail technicians and salon owners.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, idx) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="group card hover:border-brand-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      {idx === 0 && (
                        <span className="text-xs font-semibold bg-brand-100 text-brand-700 rounded-full px-2.5 py-0.5">
                          #1 Pick
                        </span>
                      )}
                      {tool.badge && idx !== 0 && (
                        <span className="text-xs font-semibold bg-amber-100 text-amber-700 rounded-full px-2.5 py-0.5">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-brand-600 transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-600 rounded-lg px-2.5 py-1 font-semibold whitespace-nowrap ml-2">
                    {tool.startingPrice}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{tool.tagline}</p>
                <StarRating rating={tool.rating} size="sm" />
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-700">Best for:</span> {tool.bestFor.split(" ").slice(0, 7).join(" ")}...
                  </p>
                </div>
                <div className="mt-3 flex items-center text-brand-600 text-sm font-medium">
                  Read full review <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Of Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Find the Right Fit for Your Salon
            </h2>
            <p className="text-slate-600">Curated recommendations by salon type and situation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-brand-200 hover:bg-brand-50 transition-all"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-700">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
                <div className="mt-4 text-brand-600 text-sm font-medium flex items-center">
                  Read guide <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Quick Pricing Comparison</h2>
            <p className="text-slate-600">All prices verified as of February 2026.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-5 py-3.5 font-semibold text-slate-700">Software</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-slate-700">Starting Price</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-slate-700">Payment Fees</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-slate-700">Best For</th>
                  <th className="px-5 py-3.5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {tools.map((tool) => (
                  <tr key={tool.id} className="hover:bg-brand-50/30 transition-colors">
                    <td className="px-5 py-4 font-semibold text-slate-900">{tool.name}</td>
                    <td className="px-5 py-4 text-slate-700">
                      <div>{tool.startingPrice}</div>
                      <div className="text-xs text-slate-400">{tool.priceNote}</div>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{tool.paymentProcessing}</td>
                    <td className="px-5 py-4 text-slate-600 max-w-xs">{tool.bestFor.split("&")[0].trim()}</td>
                    <td className="px-5 py-4">
                      <Link
                        href={tool.href}
                        className="text-brand-600 font-medium hover:underline text-xs whitespace-nowrap"
                      >
                        Full review →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <Link href="/pricing" className="btn-secondary">
              See Full Pricing Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the best nail salon software in 2026?",
                a: "GlossGenius is our top pick for most nail salons — it offers an elegant booking website, flat 2.6% payment processing, and a client-friendly experience. For multi-staff salons, Vagaro offers more features and marketplace exposure. If cost is the primary concern, Square Appointments is genuinely free for solo techs.",
              },
              {
                q: "How much does nail salon booking software cost?",
                a: "Plans range from $0/month (Square Appointments solo plan) to $168/month (GlossGenius Platinum). Most nail techs spend $24–$30/month. Don't forget to factor in payment processing fees (typically 2.6–2.75% per transaction) which can add $50–$200/month depending on volume.",
              },
              {
                q: "Do nail salon apps charge booking fees?",
                a: "Most dedicated salon platforms do not charge per-booking fees — you pay a flat monthly subscription. Fresha is the exception: they charge a 20% one-time commission (minimum $6) when a brand-new client finds you through their marketplace. Returning clients book fee-free on all platforms.",
              },
              {
                q: "Can I switch nail salon software without losing my client data?",
                a: "Yes. All major platforms (GlossGenius, Vagaro, Fresha, Square) offer free data migration or allow you to import client lists via CSV. GlossGenius specifically offers white-glove free data transfer from any software. Most migrations take 24–48 hours.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-semibold text-slate-900 mb-3">{q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-brand-600 to-navy-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which software is right for you?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Read our detailed best-of guide — we break down each option by salon size,
            budget, and what matters most for nail-specific workflows.
          </p>
          <Link
            href="/best/nail-salon-software"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
          >
            See Best Nail Salon Software 2026 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
