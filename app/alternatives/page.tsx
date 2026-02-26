import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllAlternativesPages } from "./_data/alternatives";

export const metadata: Metadata = {
  title: "Nail Salon Software Alternatives 2026",
  description:
    "Find the best alternatives to popular nail salon booking and management software.",
  alternates: { canonical: "https://nailsalontech.com/alternatives" },
};

export default function AlternativesIndexPage() {
  const pages = getAllAlternativesPages();
  return (
    <>
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Nail Salon Software Alternatives
            </h1>
            <p className="text-lg text-slate-600">
              Thinking about switching? Compare the best alternatives to popular
              nail salon management platforms.
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="space-y-4">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/alternatives/${page.slug}`}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-brand-200 hover:shadow-md transition-all group"
              >
                <div>
                  <h2 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">
                    {page.heroTitle}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {page.alternatives.length} alternatives compared
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 group-hover:text-brand-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
