import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, HelpCircle, Trophy } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { audiences, getAudienceBySlug, getAllAudienceSlugs } from "../_data/audiences";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAudienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);
  if (!audience) return {};

  return {
    title: audience.metaTitle,
    description: audience.metaDescription,
    alternates: { canonical: `https://nailsalontech.com/for/${slug}` },
  };
}

export default async function AudiencePage({ params }: PageProps) {
  const { slug } = await params;
  const audience = getAudienceBySlug(slug);
  if (!audience) notFound();

  const otherAudiences = audiences.filter((a) => a.slug !== slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nailsalontech.com" },
          { name: "Software By Audience", url: "https://nailsalontech.com/for" },
          { name: audience.shortName, url: `https://nailsalontech.com/for/${slug}` },
        ]}
      />
      <ItemListSchema
        name={`Best Nail Salon Software for ${audience.shortName} 2026`}
        url={`https://nailsalontech.com/for/${slug}`}
        items={audience.recommendations.map((rec) => ({
          name: rec.name,
          url: `https://nailsalontech.com/reviews/${rec.slug}`,
          description: rec.reason,
        }))}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-100 pt-10 pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-4">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/for" className="hover:text-slate-600">Software By Audience</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">{audience.shortName}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              {audience.heroHeadline}
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              {audience.heroSubheadline}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>Updated February 2026</span>
              <span>{audience.recommendations.length} platforms compared</span>
              <span>No paid placements</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Top Pick Callout */}
          <div className="rounded-xl border-2 border-brand-200 bg-brand-50/30 p-6 mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-5 w-5 text-brand-600" />
              <h2 className="text-lg font-bold text-slate-900">
                Our Top Pick: {audience.topPick.name}
              </h2>
              <span className="text-xs font-semibold bg-brand-100 text-brand-700 rounded-full px-2.5 py-0.5">
                {audience.topPick.badge}
              </span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              {audience.topPick.reason}
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-4">
              {audience.topPick.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/reviews/${audience.topPick.slug}`}
                className="btn-primary flex items-center gap-2 text-sm"
              >
                Read Full Review <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <span className="inline-flex items-center text-sm text-slate-500 font-medium">
                {audience.topPick.price} &middot; {audience.topPick.rating}/5 rating
              </span>
            </div>
          </div>

          {/* Pain Points */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Challenges {audience.name} Face
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              We evaluated every platform specifically for how well it addresses these common pain points:
            </p>
            <ul className="space-y-2">
              {audience.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0 mt-1.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Must-Have Features */}
          <div className="card mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Must-Have Features for {audience.shortName}
            </h2>
            <ul className="space-y-2">
              {audience.mustHaveFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* All Recommendations */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Best Software for {audience.shortName} — Ranked
          </h2>
          <div className="space-y-6 mb-10">
            {audience.recommendations.map((rec, idx) => (
              <div
                key={rec.slug}
                className={`card ${idx === 0 ? "border-brand-200 bg-brand-50/20" : ""}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-black text-slate-300">#{idx + 1}</span>
                      <span className="text-xs font-semibold bg-brand-100 text-brand-700 rounded-full px-2.5 py-0.5">
                        {rec.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{rec.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm font-semibold text-brand-600">{rec.rating}/5</span>
                      <span className="text-sm text-slate-500">{rec.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/reviews/${rec.slug}`}
                      className="btn-primary flex items-center gap-2 text-sm"
                    >
                      Full Review <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-4">{rec.reason}</p>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Key Highlights
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {rec.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="card mb-10">
            <div className="flex items-center gap-2 mb-5">
              <HelpCircle className="h-5 w-5 text-slate-400" />
              <h2 className="text-xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-5">
              {audience.faqs.map(({ question, answer }) => (
                <div key={question}>
                  <h3 className="font-semibold text-slate-900 mb-2">{question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Links to Other Audiences */}
          <div className="card">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Software Guides for Other Business Types
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {otherAudiences.map((other) => (
                <Link
                  key={other.slug}
                  href={`/for/${other.slug}`}
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 hover:border-brand-200 hover:bg-brand-50/30 transition-colors group"
                >
                  <span className="font-medium group-hover:text-brand-700 transition-colors">
                    {other.name}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
