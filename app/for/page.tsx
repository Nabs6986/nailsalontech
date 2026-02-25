import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { audiences } from "./_data/audiences";

export const metadata: Metadata = {
  title: "Best Nail Salon Software By Business Type 2026 — Find Your Fit",
  description:
    "Find the best nail salon software for your specific business type. Guides for solo nail techs, nail salons, day spas, mobile techs, and franchise operations. Real recommendations based on real needs.",
  alternates: { canonical: "https://nailsalontech.com/for" },
};

const audienceCards: {
  slug: string;
  label: string;
  description: string;
  topPick: string;
  topPickPrice: string;
}[] = audiences.map((a) => ({
  slug: a.slug,
  label: a.name,
  description: a.heroSubheadline,
  topPick: a.topPick.name,
  topPickPrice: a.topPick.price,
}));

export default function ForIndex() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nailsalontech.com" },
          { name: "Software By Audience", url: "https://nailsalontech.com/for" },
        ]}
      />
      <ItemListSchema
        name="Best Nail Salon Software By Business Type 2026"
        url="https://nailsalontech.com/for"
        items={audiences.map((a) => ({
          name: `Best Software for ${a.shortName}`,
          url: `https://nailsalontech.com/for/${a.slug}`,
          description: a.metaDescription,
        }))}
      />

      <div className="min-h-screen bg-slate-50">
        <section className="bg-white border-b border-slate-100 pt-14 pb-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Best Nail Salon Software By Business Type
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              Different nail businesses have different software needs. A solo mobile tech and a 10-location franchise need very different tools. Find the right software for your specific situation.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6">
            {audienceCards.map((card) => (
              <Link
                key={card.slug}
                href={`/for/${card.slug}`}
                className="group card hover:border-brand-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                      {card.label}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-3">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold bg-brand-100 text-brand-700 rounded-full px-2.5 py-0.5">
                        Top Pick: {card.topPick}
                      </span>
                      <span>{card.topPickPrice}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-brand-600 text-sm font-medium shrink-0 mt-1">
                    View Guide <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-center">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Not sure which category fits?
            </h2>
            <p className="text-sm text-slate-600 mb-4 max-w-lg mx-auto">
              Our overall ranking compares all 6 platforms side by side with detailed scoring across every feature category.
            </p>
            <Link
              href="/best/nail-salon-software"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              See Overall Rankings <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
