import { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowLeft, Star, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getAlternativesPage, getAllAlternativesSlugs } from "../_data/alternatives";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

const SITE_URL = "https://nailsalontech.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAlternativesSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativesPage(slug);
  if (!page) return { title: "Not Found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${SITE_URL}/alternatives/${slug}` },
  };
}

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params;
  const page = getAlternativesPage(slug);
  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Alternatives", url: `${SITE_URL}/alternatives` },
          { name: page.heroTitle, url: `${SITE_URL}/alternatives/${slug}` },
        ]}
      />
      <ItemListSchema
        name={page.heroTitle}
        url={`${SITE_URL}/alternatives/${slug}`}
        items={page.alternatives.map((alt) => ({
          name: alt.name,
          url: alt.website,
          description: alt.tagline,
        }))}
      />
      <FAQSchema faqs={page.faqs} />
      <main className="min-h-screen">
        <div className="bg-slate-50 border-b border-slate-100 py-3">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/alternatives"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Alternatives
            </Link>
          </div>
        </div>
        <section className="bg-gradient-to-b from-brand-50 to-white pt-10 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {page.heroTitle}
            </h1>
            <p className="text-lg text-slate-600">{page.heroDescription}</p>
          </div>
        </section>
        <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Why People Switch from {page.productName}
            </h2>
            <ol className="space-y-3">
              {page.whySwitch.map((reason, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Top {page.alternatives.length} {page.productName} Alternatives
            </h2>
            <div className="space-y-6">
              {page.alternatives.map((alt, index) => (
                <div
                  key={alt.slug}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-brand-600">
                          #{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {alt.name}
                        </h3>
                      </div>
                      <p className="text-slate-600">{alt.tagline}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`h-4 w-4 ${
                            s <= Math.floor(alt.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                      <span className="text-sm font-semibold text-slate-700 ml-1">
                        {alt.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <span className="text-slate-600">
                      <strong>Price:</strong> {alt.priceRange}
                    </span>
                  </div>
                  <div className="rounded-lg bg-brand-50 border border-brand-100 p-3 mb-4">
                    <p className="text-sm text-brand-800">
                      <strong>Key differentiator:</strong>{" "}
                      {alt.keyDifferentiator}
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-800 mb-2">
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {alt.pros.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-800 mb-2">
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {alt.cons.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <X className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a
                    href={alt.website}
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Visit {alt.name}{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {page.comparisonHeaders.map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold text-slate-700"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-slate-100"
                    >
                      <td className="px-4 py-3 font-medium text-slate-800">
                        {row.feature}
                      </td>
                      {row.values.map((val, i) => (
                        <td key={i} className="px-4 py-3 text-slate-600">
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <X className="h-4 w-4 text-red-400" />
                            )
                          ) : (
                            val
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-white"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl">
                    {faq.question}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">
                      &#9660;
                    </span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
