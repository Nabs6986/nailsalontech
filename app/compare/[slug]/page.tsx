import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight } from "lucide-react";
import { ComparisonSchema } from "@/components/schema/ComparisonSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import {
  getComparison,
  getAllComparisonSlugs,
} from "@/app/compare/_data/comparisons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getComparison(slug);
  if (!data) return {};

  return {
    title: data.title,
    description: data.metaDescription,
    alternates: {
      canonical: `https://nailsalontech.com/compare/${slug}`,
    },
  };
}

function FeatureCell({ value }: { value: string }) {
  const lower = value.toLowerCase();
  if (
    lower === "included" ||
    lower === "yes" ||
    lower.startsWith("included")
  ) {
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-700">
        <Check className="h-4 w-4 shrink-0" />
        {value}
      </span>
    );
  }
  if (
    lower === "not included" ||
    lower === "no" ||
    lower.startsWith("not included") ||
    lower.startsWith("no ")
  ) {
    return (
      <span className="inline-flex items-center gap-1.5 text-slate-400">
        <X className="h-4 w-4 shrink-0" />
        {value}
      </span>
    );
  }
  return <span>{value}</span>;
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getComparison(slug);
  if (!data) notFound();

  const { productA, productB, features, faqs, choiceCriteria, verdict } = data;

  const breadcrumbLabel = `${productA.name} vs ${productB.name}`;

  return (
    <>
      <ComparisonSchema
        products={[
          { name: productA.name, description: productA.description },
          { name: productB.name, description: productB.description },
        ]}
        url={`https://nailsalontech.com/compare/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nailsalontech.com" },
          { name: "Compare", url: "https://nailsalontech.com/compare" },
          {
            name: breadcrumbLabel,
            url: `https://nailsalontech.com/compare/${slug}`,
          },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <section className="bg-white border-b border-slate-100 pt-10 pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-4">
              <Link href="/" className="hover:text-slate-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/compare" className="hover:text-slate-600">
                Compare
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">{breadcrumbLabel}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              {data.headline}
            </h1>
            <p className="text-slate-600 text-lg">{data.subtitle}</p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Quick Answer */}
          <div className="card mb-8 bg-slate-50">
            <h2 className="font-bold text-slate-900 mb-3">Quick Answer</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="font-semibold text-slate-800 mb-2">
                  Choose {productA.name} if:
                </p>
                <ul className="space-y-1 text-slate-700">
                  {choiceCriteria.chooseA.map((reason) => (
                    <li key={reason} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="font-semibold text-slate-800 mb-2">
                  Choose {productB.name} if:
                </p>
                <ul className="space-y-1 text-slate-700">
                  {choiceCriteria.chooseB.map((reason) => (
                    <li key={reason} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-3 pr-4 font-semibold text-slate-700 w-48">
                      Feature
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">
                      {productA.name}
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">
                      {productB.name}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {features.map(({ name, productA: valA, productB: valB }) => (
                    <tr key={name} className="hover:bg-slate-50/50">
                      <td className="py-3 pr-4 text-slate-600 font-medium">
                        {name}
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        <FeatureCell value={valA} />
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        <FeatureCell value={valB} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verdict */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Our Verdict: {productA.name} vs {productB.name} for Nail Salons
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {verdict.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div
              className={`rounded-2xl bg-gradient-to-br ${productA.gradient} p-6 text-white text-center`}
            >
              <h3 className="font-bold text-lg mb-2">{productA.ctaLabel}</h3>
              <p className="text-white/80 text-sm mb-4">
                {productA.trialText}
              </p>
              <a
                href={productA.ctaUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-slate-800 text-sm hover:bg-slate-50 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div
              className={`rounded-2xl bg-gradient-to-br ${productB.gradient} p-6 text-white text-center`}
            >
              <h3 className="font-bold text-lg mb-2">{productB.ctaLabel}</h3>
              <p className="text-white/80 text-sm mb-4">
                {productB.trialText}
              </p>
              <a
                href={productB.ctaUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-slate-800 text-sm hover:bg-slate-50 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
