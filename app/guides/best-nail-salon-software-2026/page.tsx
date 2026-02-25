import { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Star,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Lightbulb,
  Quote,
} from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { StarRating } from "@/components/StarRating";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

const baseUrl = "https://nailsalontech.com";

export const metadata: Metadata = {
  title:
    "Best Nail Salon Software 2026 — Expert Guide | NailSalonTech",
  description:
    "The 5 best nail salon software platforms in 2026, ranked by experts. Vagaro, GlossGenius, Mangomint, Boulevard, Square Appointments — with verified pricing, pros/cons, and honest verdicts.",
  alternates: {
    canonical: `${baseUrl}/guides/best-nail-salon-software-2026`,
  },
};

const tldrParagraph =
  "For most nail salons in 2026, Vagaro ($30/mo) is the best overall nail salon software thanks to its all-in-one booking, POS, payroll, and marketing suite. GlossGenius ($24/mo) is the sleekest option for independent nail techs. Mangomint ($165/mo) is the premium choice for high-end salons needing automation. Boulevard suits luxury multi-location salons, while Square Appointments (free for solos) is the best free option for nail techs just starting out.";

const howToChoose = [
  {
    title: "Match to your salon size",
    description:
      "Solo nail techs need simple booking and payments; mid-size salons need staff scheduling, payroll, and inventory; multi-location salons need enterprise reporting and centralized management.",
  },
  {
    title: "Prioritize online booking",
    description:
      "Over 70% of nail salon clients book online. Look for Instagram/Google integration, automated reminders, and a no-download booking experience for clients.",
  },
  {
    title: "Evaluate POS and payments",
    description:
      "Check payment processing rates (typically 2.5–2.75%), tip management, and whether the platform supports contactless payments, gift cards, and package sales.",
  },
  {
    title: "Check marketing features",
    description:
      "Built-in email/SMS marketing, automated review requests, and social media booking links can replace separate marketing tools and save $50–100/month.",
  },
  {
    title: "Calculate total cost of ownership",
    description:
      "Factor in monthly subscription, payment processing fees, add-ons (marketing, payroll, website), and hardware costs. Some platforms include features others charge extra for.",
  },
];

const citations = [
  {
    title: "Best Salon Software of 2026",
    url: "https://www.forbes.com/advisor/business/software/best-salon-software/",
    source: "Forbes Advisor",
  },
  {
    title: "Nail Salon Industry Statistics 2025",
    url: "https://www.ibisworld.com/united-states/market-research-reports/nail-salons-industry/",
    source: "IBISWorld",
  },
  {
    title: "Best Salon Booking Software",
    url: "https://www.g2.com/categories/salon-management",
    source: "G2",
  },
  {
    title: "Salon Software Reviews",
    url: "https://www.capterra.com/salon-software/",
    source: "Capterra",
  },
  {
    title: "Beauty Industry Technology Trends",
    url: "https://www.beautyindependent.com/",
    source: "Beauty Independent",
  },
];

const picks = [
  {
    rank: 1,
    badge: "Editor's Choice",
    name: "Vagaro",
    slug: "vagaro",
    rating: 4.7,
    price: "From $30/month",
    affiliateUrl: "https://www.vagaro.com/pro/free-trial",
    highlight:
      "Best overall — all-in-one booking, POS, payroll, and marketing in a single platform",
    bestFor: "Mid-size nail salons, multi-service businesses",
    pros: [
      "All-in-one: booking, POS, payroll, marketing",
      "Vagaro Marketplace for client discovery",
      "Custom branded app available",
      "Competitive payment processing (2.2%)",
    ],
    cons: [
      "Interface can feel cluttered",
      "Learning curve for full feature set",
    ],
    freeTrial: "Free trial available",
  },
  {
    rank: 2,
    badge: "Best for Solo Techs",
    name: "GlossGenius",
    slug: "glossgenius",
    rating: 4.6,
    price: "From $24/month",
    affiliateUrl: "https://www.glossgenius.com/",
    highlight:
      "Sleekest mobile-first platform with stunning client experience and instant setup",
    bestFor: "Independent nail techs, booth renters, mobile nail artists",
    pros: [
      "Beautiful, Instagram-worthy booking pages",
      "Setup in under 10 minutes",
      "Built-in website builder",
      "No-show protection with card-on-file",
    ],
    cons: ["Limited inventory management", "No payroll for teams"],
    freeTrial: "14-day free trial",
  },
  {
    rank: 3,
    badge: "Best Premium",
    name: "Mangomint",
    slug: "mangomint",
    rating: 4.8,
    price: "From $165/month",
    affiliateUrl: "https://www.mangomint.com/",
    highlight:
      "Most intelligent automation — smart scheduling, 2-way texting, and zero front-desk workflows",
    bestFor: "High-end nail salons, spas, premium multi-service businesses",
    pros: [
      "Best-in-class automation and smart scheduling",
      "Express booking (no account required)",
      "Built-in 2-way texting",
      "Open API for custom integrations",
    ],
    cons: ["Higher price point", "Overkill for solo techs"],
    freeTrial: "Free trial available",
  },
  {
    rank: 4,
    badge: "Best Luxury",
    name: "Boulevard",
    slug: "boulevard",
    rating: 4.5,
    price: "From $175/month",
    affiliateUrl: "https://www.joinblvd.com/",
    highlight:
      "Purpose-built for luxury salons with precision scheduling and client experience tools",
    bestFor: "Upscale multi-location nail salons and spas",
    pros: [
      "Precision scheduling minimizes gaps",
      "Duo bookings for couples/groups",
      "Client loyalty and membership tools",
      "Enterprise reporting for multi-location",
    ],
    cons: ["Premium pricing", "Longer onboarding process"],
    freeTrial: "Demo available",
  },
  {
    rank: 5,
    badge: "Best Free Option",
    name: "Square Appointments",
    slug: "square-appointments",
    rating: 4.3,
    price: "Free for individuals",
    affiliateUrl: "https://squareup.com/appointments",
    highlight:
      "Free plan for solo nail techs — real booking, payments, and a basic website at zero cost",
    bestFor: "Solo nail techs, new businesses, budget-conscious salons",
    pros: [
      "Free plan for individuals",
      "Integrated Square POS ecosystem",
      "Free online booking website",
      "No monthly commitment",
    ],
    cons: [
      "Higher processing fees (2.6% + 10¢)",
      "Basic feature set on free plan",
    ],
    freeTrial: "Free plan available",
  },
];

const faqs = [
  {
    question: "What is the best nail salon software in 2026?",
    answer:
      "Vagaro is the best overall nail salon software in 2026 for most salons, offering all-in-one booking, POS, payroll, and marketing starting at $30/month. GlossGenius ($24/mo) is best for solo nail techs. Mangomint ($165/mo) is the premium choice for high-end salons. Square Appointments is the best free option for individuals.",
  },
  {
    question: "How much does nail salon software cost?",
    answer:
      "Nail salon software typically costs $0–$175/month. Square Appointments is free for solo users. GlossGenius starts at $24/month. Vagaro starts at $30/month. Mangomint starts at $165/month. Boulevard starts at $175/month. Most platforms also charge payment processing fees of 2.2–2.75% per transaction.",
  },
  {
    question: "What features should nail salon software have?",
    answer:
      "Essential features include: online appointment booking, automated reminders (SMS/email), POS and payment processing, client profiles and history, staff scheduling, inventory tracking for nail products, and basic marketing tools. Premium features include payroll, loyalty programs, and multi-location management.",
  },
  {
    question: "Is there free nail salon booking software?",
    answer:
      "Yes — Square Appointments offers a genuinely free plan for individual nail techs that includes online booking, a basic website, client management, and payment processing (2.6% + 10¢ per transaction). It's the best free option, though you'll eventually outgrow it as your team expands.",
  },
  {
    question:
      "Can I switch nail salon software without losing client data?",
    answer:
      "Yes. Most platforms allow you to export client data, appointment history, and contact information as CSV files. Vagaro and Mangomint offer free migration assistance. Plan 1–2 weeks for the transition and run both systems in parallel during that time.",
  },
  {
    question:
      "Do I need separate POS hardware for nail salon software?",
    answer:
      "Most modern nail salon software works with an iPad or tablet as your POS. Vagaro and Square sell branded card readers ($49–$299). GlossGenius includes a free card reader. Mangomint and Boulevard work with various third-party payment terminals. You typically don't need a traditional POS register.",
  },
];

export default function BestNailSalonSoftwareGuidePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <ItemListSchema
        name="Best Nail Salon Software 2026"
        url={`${baseUrl}/guides/best-nail-salon-software-2026`}
        items={picks.map((pick) => ({
          name: pick.name,
          url: `${baseUrl}/reviews/${pick.slug}`,
          description: pick.highlight,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "Guides", url: `${baseUrl}/guides` },
          {
            name: "Best Nail Salon Software 2026",
            url: `${baseUrl}/guides/best-nail-salon-software-2026`,
          },
        ]}
      />

      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
              <Star className="h-3 w-3 fill-brand-500 text-brand-500" />{" "}
              Updated February 2026
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Best Nail Salon Software 2026
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We analyzed pricing, features, usability, and integrations across
              15+ platforms to bring you the 5 best nail salon software tools in
              2026. All pricing is current and verified.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-8 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-semibold text-brand-800 uppercase tracking-wide mb-2">
                  TL;DR — The Short Answer
                </h2>
                <p className="text-slate-800 leading-relaxed">
                  {tldrParagraph}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border border-slate-200">
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Platform
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Rating
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Starting Price
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {picks.map((p, i) => (
                    <tr
                      key={p.slug}
                      className={`border-b border-slate-100 ${i === 0 ? "bg-brand-50" : ""}`}
                    >
                      <td className="py-2.5 px-3 font-medium text-slate-900">
                        <Link
                          href={`/reviews/${p.slug}`}
                          className="hover:text-brand-600"
                        >
                          {p.name}
                        </Link>
                        {i === 0 && (
                          <span className="ml-2 text-xs text-brand-600 font-semibold">
                            ★ Top Pick
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">
                        {p.rating}/5
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">
                        {p.price.split(" ").slice(1).join(" ")}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {p.bestFor.split(",")[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-bold text-slate-900">
                How to Choose Nail Salon Software
              </h2>
            </div>
            <div className="space-y-4">
              {howToChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-8">
            {picks.map((pick) => (
              <div
                key={pick.slug}
                className={`rounded-2xl border p-8 ${pick.rank === 1 ? "border-brand-300 bg-brand-50 shadow-md" : "border-slate-200 bg-white shadow-sm"}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-slate-400">
                        #{pick.rank}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {pick.name}
                      </h2>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${pick.rank === 1 ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"}`}
                      >
                        {pick.badge}
                      </span>
                    </div>
                    <StarRating rating={pick.rating} />
                    <p className="mt-2 text-brand-700 font-semibold">
                      {pick.price}
                    </p>
                  </div>
                  <Link
                    href={pick.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-shrink-0 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors flex items-center gap-1.5"
                  >
                    Try Free <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <p className="text-slate-700 font-medium mb-4">
                  {pick.highlight}
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Best for:</strong> {pick.bestFor}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-2">
                      ✓ PROS
                    </p>
                    <ul className="space-y-1">
                      {pick.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-1.5 text-sm text-slate-700"
                        >
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-green-500" />{" "}
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 mb-2">
                      ✗ CONS
                    </p>
                    <ul className="space-y-1">
                      {pick.cons.map((con) => (
                        <li
                          key={con}
                          className="text-sm text-slate-600 flex items-start gap-1.5"
                        >
                          <span className="text-red-400 mt-0.5">—</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/reviews/${pick.slug}`}
                    className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    Full {pick.name} review{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-xs text-slate-400">|</span>
                  <span className="text-xs text-slate-500">
                    {pick.freeTrial}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-12 border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white group"
                >
                  <summary className="cursor-pointer p-5 font-semibold text-slate-900 hover:text-brand-700 list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform text-lg">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-4 w-4 text-slate-500" />
              <h2 className="text-lg font-semibold text-slate-900">
                Sources & Further Reading
              </h2>
            </div>
            <ol className="space-y-2 list-decimal list-inside">
              {citations.map((cite) => (
                <li key={cite.url} className="text-sm text-slate-600">
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-700 underline"
                  >
                    {cite.title}
                  </a>{" "}
                  — {cite.source}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-slate-50 py-12 border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              More Recommendations
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/best/independent-nail-techs"
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">
                  Best for Solo Nail Techs
                </h3>
                <p className="text-sm text-slate-500">
                  Affordable platforms for independent nail technicians.
                </p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">
                  View picks <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/reviews"
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">
                  All Software Reviews
                </h3>
                <p className="text-sm text-slate-500">
                  In-depth reviews of every nail salon platform we cover.
                </p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">
                  Browse reviews <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
