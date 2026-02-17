import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, ExternalLink } from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Booksy vs Square Appointments 2026 — Which Is Better for Nail Salons?",
  description:
    "Booksy ($29.99/mo) vs Square Appointments (free–$69/mo) for nail salons. Feature comparison, pricing breakdown, and who each is best for. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/compare/booksy-vs-square" },
};

const comparisonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Booksy vs Square Appointments 2026 for Nail Salons",
  description:
    "In-depth comparison of Booksy and Square Appointments for nail salons and independent nail technicians. Pricing, features, and best-fit recommendations.",
  author: { "@type": "Organization", name: "NailSalonTech" },
  publisher: {
    "@type": "Organization",
    name: "NailSalonTech",
    url: "https://nailsalontech.com",
  },
  datePublished: "2026-02-19",
  dateModified: "2026-02-19",
};

const rows = [
  {
    feature: "Starting price",
    booksy: "$29.99/mo (all features)",
    square: "Free (1 staff, limited) / $29/mo Plus",
  },
  {
    feature: "Additional staff",
    booksy: "+$20/user/mo",
    square: "$29/mo (2–5 staff) / $69/mo (6–10 staff)",
  },
  {
    feature: "Payment processing",
    booksy: "External via Stripe (~2.7% + $0.05)",
    square: "2.6% + $0.10 (free) / 2.5% + $0.15 (paid)",
  },
  {
    feature: "Consumer marketplace",
    booksy: "✅ 44M+ consumers globally",
    square: "❌ No marketplace",
  },
  {
    feature: "Marketplace commission",
    booksy: "0% — you keep 100%",
    square: "N/A",
  },
  {
    feature: "Automated reminders",
    booksy: "✅ Included (all plans)",
    square: "❌ Free plan / ✅ Plus + Premium",
  },
  {
    feature: "No-show protection",
    booksy: "✅ Deposits, cancellation fees",
    square: "✅ Plus + Premium only",
  },
  {
    feature: "Client cards / profiles",
    booksy: "✅ Included",
    square: "✅ Included",
  },
  {
    feature: "Online booking widget",
    booksy: "✅ Included",
    square: "✅ Included",
  },
  {
    feature: "Instagram / Facebook booking",
    booksy: "✅ Booksy booking link",
    square: "✅ Instagram booking",
  },
  {
    feature: "Google Reserve with Google",
    booksy: "✅ Included",
    square: "✅ Included",
  },
  {
    feature: "Gift cards",
    booksy: "✅ Included",
    square: "✅ Plus + Premium",
  },
  {
    feature: "Memberships / packages",
    booksy: "✅ Included",
    square: "✅ Plus + Premium",
  },
  {
    feature: "Loyalty programs",
    booksy: "✅ Included",
    square: "✅ Square Loyalty (add-on cost)",
  },
  {
    feature: "Inventory management",
    booksy: "❌ Not included",
    square: "✅ Square for Retail add-on",
  },
  {
    feature: "Email marketing",
    booksy: "✅ Campaigns included",
    square: "✅ Square Marketing (add-on cost)",
  },
  {
    feature: "SMS marketing",
    booksy: "✅ Included",
    square: "✅ Square Marketing (add-on cost)",
  },
  {
    feature: "Hardware / POS",
    booksy: "❌ No proprietary hardware",
    square: "✅ Full POS ecosystem",
  },
  {
    feature: "Payroll",
    booksy: "❌ Not included",
    square: "✅ Square Payroll (add-on $35+/mo)",
  },
  {
    feature: "Free trial",
    booksy: "14 days",
    square: "30 days (Plus/Premium)",
  },
  {
    feature: "Contract required",
    booksy: "No — month-to-month",
    square: "No — month-to-month",
  },
];

export default function BooksyVsSquare() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero */}
        <section className="bg-white border-b border-slate-100 pt-10 pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-4">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/compare" className="hover:text-slate-600">Compare</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Booksy vs Square Appointments</span>
            </nav>
            <div className="mb-2">
              <span className="text-xs text-slate-400">Updated February 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Booksy vs Square Appointments 2026 for Nail Salons
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              A marketplace-first platform vs. a flexible free-to-start system. Both are popular
              with nail techs — but they serve very different business stages. Here&apos;s how to pick.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <AffiliateDisclosure />

          {/* Quick Verdict */}
          <div className="card mb-8 bg-slate-50">
            <h2 className="font-bold text-slate-900 mb-3">⚡ Quick Answer</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white border border-amber-200 p-4">
                <p className="font-semibold text-amber-700 mb-2">Choose Booksy if:</p>
                <ul className="space-y-1.5 text-slate-700">
                  {[
                    "You want access to 44M+ consumers searching for nail services",
                    "You need all features without worrying about plan tiers",
                    "You already have a Stripe account and prefer controlling your own payment processing",
                    "You're a booth renter focused on new client growth",
                    "You run email and SMS campaigns from within your booking tool",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-white border border-brand-200 p-4">
                <p className="font-semibold text-brand-700 mb-2">Choose Square if:</p>
                <ul className="space-y-1.5 text-slate-700">
                  {[
                    "You want $0/month to start with a professional booking system",
                    "You need a full POS system with hardware (retail product sales, front desk)",
                    "You're a salon owner who needs payroll, inventory, or multi-staff management",
                    "You value the deeper Square ecosystem (invoicing, Square Capital, etc.)",
                    "You need a 30-day free trial to properly evaluate the platform",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature table */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-3 pr-4 font-semibold text-slate-700 w-48">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-amber-700">Booksy</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-700">Square Appointments</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {rows.map((row) => (
                    <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 pr-4 text-slate-700 font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-slate-600">{row.booksy}</td>
                      <td className="py-3 px-4 text-slate-600">{row.square}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              Pricing verified February 2026. Always confirm current pricing on vendor websites before purchasing.
            </p>
          </div>

          {/* Pricing breakdown */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Pricing Breakdown</h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Booksy */}
              <div>
                <h3 className="font-bold text-amber-700 mb-3">Booksy Pricing</h3>
                <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-4 mb-3">
                  <div className="text-2xl font-bold text-slate-900 mb-0.5">$29.99/mo</div>
                  <div className="text-sm text-slate-600 mb-3">All features included · No plan tiers</div>
                  <ul className="space-y-1.5">
                    {[
                      "Unlimited bookings",
                      "Consumer marketplace listing (44M+ users)",
                      "Automated reminders (SMS + email)",
                      "No-show protection & deposits",
                      "Gift cards, memberships, loyalty",
                      "Email + SMS marketing campaigns",
                      "Multi-staff (1st tech included, +$20/user)",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-sm text-slate-600">
                  <strong>Payment processing:</strong> Booksy uses Stripe as the processor. Stripe&apos;s standard rate
                  is 2.7% + $0.05 for card-present. You set up and control your own Stripe account — Booksy
                  does not take a percentage of your revenue.
                </div>
              </div>

              {/* Square */}
              <div>
                <h3 className="font-bold text-brand-700 mb-3">Square Appointments Pricing</h3>
                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-lg font-bold text-slate-900 mb-0.5">Free</div>
                    <div className="text-sm text-slate-500 mb-2">Solo tech, 1 location</div>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Online booking</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Basic client profiles</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />No automated reminders</li>
                      <li className="flex items-start gap-2"><X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />No no-show protection</li>
                      <li className="text-xs text-slate-500 ml-6">Processing: 2.6% + $0.10/transaction</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-brand-200 bg-brand-50/30 p-4">
                    <div className="text-lg font-bold text-slate-900 mb-0.5">Plus — $29/mo</div>
                    <div className="text-sm text-slate-500 mb-2">Up to 5 staff, 1 location</div>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />Automated reminders</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />No-show protection & deposits</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />Gift cards & memberships</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />Advanced reporting</li>
                      <li className="text-xs text-slate-500 ml-6">Processing: 2.5% + $0.15/transaction</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-lg font-bold text-slate-900 mb-0.5">Premium — $69/mo</div>
                    <div className="text-sm text-slate-500 mb-2">6–10 staff, 1 location</div>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Everything in Plus</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Custom permissions</li>
                      <li className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />Priority support</li>
                      <li className="text-xs text-slate-500 ml-6">Processing: 2.5% + $0.15/transaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Real cost table */}
            <h3 className="font-bold text-slate-900 mb-3">Real Monthly Cost at Different Revenue Levels</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2.5 px-3 font-semibold text-slate-700">Monthly Revenue</th>
                    <th className="text-left py-2.5 px-3 font-semibold text-amber-700">Booksy Total</th>
                    <th className="text-left py-2.5 px-3 font-semibold text-slate-600">Square Free Total</th>
                    <th className="text-left py-2.5 px-3 font-semibold text-brand-700">Square Plus Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      rev: "$3,000",
                      booksy: "$111 ($30 + $81)",
                      free: "$89 ($0 + $89)*",
                      plus: "$118 ($29 + $89)",
                    },
                    {
                      rev: "$6,000",
                      booksy: "$192 ($30 + $162)",
                      free: "$163 ($0 + $163)*",
                      plus: "$188 ($29 + $159)",
                    },
                    {
                      rev: "$10,000",
                      booksy: "$300 ($30 + $270)",
                      free: "$268 ($0 + $268)*",
                      plus: "$294 ($29 + $265)",
                    },
                    {
                      rev: "$15,000",
                      booksy: "$435 ($30 + $405)",
                      free: "$398 ($0 + $398)*",
                      plus: "$404 ($29 + $375)",
                    },
                  ].map((r) => (
                    <tr key={r.rev} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-3 font-semibold text-slate-900">{r.rev}</td>
                      <td className="py-2.5 px-3 text-amber-700 font-medium">{r.booksy}</td>
                      <td className="py-2.5 px-3 text-slate-600">{r.free}</td>
                      <td className="py-2.5 px-3 text-brand-700 font-medium">{r.plus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              *Square Free lacks automated reminders — a feature that typically saves 5–8% of appointment revenue from no-shows.
              Booksy processing via Stripe at 2.7%. Square Plus at 2.5% + $0.15 (estimated 120 transactions/month at $10k).
              All estimates — actual fees vary by card type and transaction mix.
            </p>
          </div>

          {/* Deep dive: Booksy */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Booksy Deep Dive: The Marketplace Advantage
            </h2>
            <div className="prose prose-sm prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed">
              <p>
                Booksy launched in 2014 and has grown to serve over 60,000 business partners globally, with
                a consumer app that hosts more than 44 million registered users actively searching for beauty
                appointments. For nail salon context: when someone in your city opens the Booksy app and
                searches &quot;nail salon near me,&quot; your profile can appear. No advertising spend required.
              </p>

              <p>
                This is Booksy&apos;s primary differentiator. <strong>Square Appointments has no equivalent consumer
                marketplace.</strong> Square is not a place where people discover new nail salons — it&apos;s a tool
                for managing bookings from your existing audience. If client discovery is a priority, Booksy
                has a structural advantage that Square simply cannot match.
              </p>

              <p>
                Critically, Booksy charges <strong>zero commission</strong> on marketplace bookings. This isn&apos;t
                universal in the industry — some platforms charge 20–30% on marketplace-generated appointments.
                At $29.99/month, you get unlimited marketplace exposure with no per-booking cut taken. A Booksy
                client who books monthly for 12 months generates zero additional platform fees beyond the flat subscription.
              </p>

              <h3>Booksy&apos;s Pricing Transparency</h3>
              <p>
                Unlike Square&apos;s tiered model, Booksy charges one price for all features. There&apos;s no
                &quot;you need to upgrade to access reminders&quot; or &quot;gift cards are Plus only.&quot; At $29.99/month,
                you get automated SMS and email reminders, no-show protection with deposits, gift cards,
                memberships, loyalty rewards, email campaigns, and marketplace access — all of it.
              </p>

              <p>
                For a solo nail tech, this simplicity is meaningful. You know exactly what you&apos;re getting and
                exactly what it costs. There are no unexpected plan upgrades triggered by needing a specific feature.
              </p>

              <h3>Booksy&apos;s Limitations</h3>
              <p>
                Booksy doesn&apos;t include inventory management — relevant if you sell retail nail products from
                your space. Payment processing is external through Stripe, which means you&apos;re setting up a
                separate Stripe account rather than having an integrated processor. For most nail techs, Stripe
                is straightforward, but it&apos;s an extra setup step compared to GlossGenius or Square&apos;s native
                processing.
              </p>

              <p>
                Booksy also doesn&apos;t offer proprietary hardware. If you want a physical card reader, you&apos;re
                using Stripe&apos;s hardware (which is excellent, but requires a separate purchase of ~$49–$99).
              </p>
            </div>

            <div className="mt-5">
              <a
                href="https://booksy.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                Try Booksy Free for 14 Days <ExternalLink className="h-4 w-4" />
              </a>
              <Link href="/reviews/booksy" className="ml-3 text-sm text-brand-600 hover:underline">
                Full Booksy Review →
              </Link>
            </div>
          </div>

          {/* Deep dive: Square */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Square Appointments Deep Dive: The Ecosystem Play
            </h2>
            <div className="prose prose-sm prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed">
              <p>
                Square Appointments is part of the broader Square ecosystem — which includes Square POS,
                Square Payroll, Square Marketing, Square Loyalty, Square Capital (business loans), Square
                Invoices, and more. For nail salons that sell retail products, need payroll for employees,
                or want integrated business financing, this ecosystem has real value that Booksy can&apos;t replicate.
              </p>

              <p>
                The free plan is genuinely functional for a solo nail tech who just needs basic booking — but
                it&apos;s stripped down in ways that matter. <strong>Automated appointment reminders are not available
                on the free plan.</strong> For nail salons, reminders are not optional — industry data shows they
                reduce no-shows by 38–50%, and no-shows are the number one driver of lost revenue for solo techs.
              </p>

              <p>
                The practical advice: if you&apos;re using Square Appointments, use the Plus plan at $29/month.
                The free plan is a starting point, not a long-term solution for a professional nail tech. The
                additional $29/month pays for itself multiple times over if it prevents even two no-shows per month.
              </p>

              <h3>Square&apos;s Unique Advantages</h3>
              <p>
                <strong>Hardware ecosystem:</strong> Square offers the most extensive lineup of payment hardware
                in the industry — from the free magstripe reader to the Square Terminal ($299) to the Square
                Register ($799). For established nail salons with a front desk and retail display, Square&apos;s
                hardware options are unmatched.
              </p>

              <p>
                <strong>Multi-staff scaling:</strong> Square Appointments scales from free (1 staff) to
                Plus ($29/month for 2–5 staff) to Premium ($69/month for 6–10 staff). For growing salons with
                an employee roster, this clear progression is appealing. Booksy charges $20/additional user —
                cheaper at 1–2 staff, more expensive at 4+ staff versus Square Plus.
              </p>

              <p>
                <strong>Square Capital:</strong> After 3+ months of payment history, Square may offer business
                loans repaid through a percentage of daily Square payments. For salons looking to invest in
                equipment or expansion, this embedded financing can be valuable.
              </p>

              <h3>The No-Marketplace Trade-Off</h3>
              <p>
                Square Appointments requires you to bring your own audience. Your booking page lives at a
                square.site URL or embedded on your own website, but Square doesn&apos;t market your salon to
                consumers searching for nail services. <strong>Every new client has to come through your own
                marketing</strong> — Instagram, TikTok, Google Business, referrals. For established salons
                with strong organic reach, this isn&apos;t a problem. For new independent techs building a client
                base, it&apos;s a meaningful gap.
              </p>
            </div>

            <div className="mt-5">
              <a
                href="https://squareup.com/us/en/appointments"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                Try Square Appointments Free <ExternalLink className="h-4 w-4" />
              </a>
              <Link href="/reviews/square-appointments" className="ml-3 text-sm text-brand-600 hover:underline">
                Full Square Review →
              </Link>
            </div>
          </div>

          {/* Who wins for each use case */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              Who Wins by Nail Tech Business Type
            </h2>
            <div className="space-y-5">
              {[
                {
                  type: "New booth renter building a client base",
                  winner: "Booksy",
                  reason:
                    "The Booksy marketplace gives you organic client discovery that Square simply doesn't offer. At $29.99/month, you also get reminders and no-show protection from day one — no plan upgrades needed. The marketplace exposure can generate enough new clients in the first 2–3 months to pay for years of subscription.",
                },
                {
                  type: "Established booth renter with a full client book",
                  winner: "Tie (slight edge: GlossGenius)",
                  reason:
                    "If your client book is full, marketplace discovery matters less. Both Booksy and Square Plus are solid choices. We'd actually recommend GlossGenius here — it's polished, includes better client cards, and has a flat processing rate. If you're committed to one of these two, Booksy is slightly ahead for its reminder-inclusive pricing.",
                },
                {
                  type: "Solo nail tech starting from $0",
                  winner: "Square Free (then upgrade)",
                  reason:
                    "If budget is the constraint, Square Free's $0/month subscription is genuinely functional. You won't have reminders, but you can start booking clients immediately. Plan to upgrade to Square Plus ($29/month) within 60–90 days once revenue justifies it.",
                },
                {
                  type: "Small salon with 2–4 nail techs",
                  winner: "Square Plus",
                  reason:
                    "Square Plus at $29/month covers 2–5 staff, includes reminders and no-show protection, and integrates with Square POS for retail sales. Booksy would cost $29.99 + $20/additional tech — $69.99+ for 3 techs vs. Square's flat $29.",
                },
                {
                  type: "Established salon with 6+ staff",
                  winner: "Square Premium or Vagaro",
                  reason:
                    "Square Premium at $69/month covers up to 10 staff. Booksy becomes expensive at scale ($29.99 + $20× employees). At this level, Vagaro ($30 base + $10/calendar) often becomes more cost-effective and includes inventory management.",
                },
                {
                  type: "Nail tech who sells retail product",
                  winner: "Square",
                  reason:
                    "Square's POS and inventory systems are purpose-built for retail. Booksy has no inventory management. If retail product sales are a meaningful part of your revenue, Square's ecosystem has no competition here.",
                },
              ].map(({ type, winner, reason }) => (
                <div key={type} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-slate-900 text-sm">{type}</h3>
                    <span className="text-xs font-bold bg-brand-100 text-brand-700 rounded-full px-2.5 py-1 shrink-0">
                      {winner}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict */}
          <div className="rounded-2xl bg-gradient-to-r from-slate-800 to-navy-900 p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-3">The Verdict</h2>
            <p className="text-slate-300 mb-5 leading-relaxed">
              <strong className="text-white">Booksy wins for booth renters and new independents</strong> who
              need client discovery. At $29.99/month with all features included and a 44M-consumer marketplace,
              it&apos;s structured for exactly this use case.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              <strong className="text-white">Square wins for established salons, multi-staff teams, and retail sellers</strong>{" "}
              who need the broader ecosystem — POS hardware, payroll, inventory, and Square Capital. The
              free plan is the best starting point in the market if budget is the primary constraint.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://booksy.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 font-semibold text-white hover:bg-amber-400 transition-colors text-sm"
              >
                Try Booksy Free <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://squareup.com/us/en/appointments"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-slate-900 hover:bg-slate-100 transition-colors text-sm"
              >
                Try Square Free <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Related comparisons */}
          <div className="text-sm text-slate-600">
            <p className="font-semibold mb-3">Compare other platforms:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/compare/vagaro-vs-booksy" className="text-brand-600 hover:underline">
                Vagaro vs Booksy →
              </Link>
              <Link href="/compare/fresha-vs-square" className="text-brand-600 hover:underline">
                Fresha vs Square Appointments →
              </Link>
              <Link href="/compare/glossgenius-vs-square" className="text-brand-600 hover:underline">
                GlossGenius vs Square →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
