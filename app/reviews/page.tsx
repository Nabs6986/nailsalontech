import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Nail Salon Software Reviews 2026 — All 6 Platforms Reviewed",
  description: "Independent reviews of GlossGenius, Vagaro, Fresha, Square Appointments, Booksy, and Acuity Scheduling for nail salons. Real pricing, honest pros & cons.",
  alternates: { canonical: "https://nailsalontech.com/reviews" },
};

export default function ReviewsIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-14 pb-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Nail Salon Software Reviews 2026</h1>
          <p className="text-slate-600 text-lg">Independent, in-depth reviews of every major nail salon booking platform. Real pricing, real testing, no paid placements.</p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, idx) => (
            <Link key={tool.id} href={tool.href} className="group card hover:border-brand-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  {idx === 0 && <span className="text-xs font-semibold bg-brand-100 text-brand-700 rounded-full px-2.5 py-0.5 mb-1.5 inline-block">#1 Pick</span>}
                  {tool.badge && idx !== 0 && <span className="text-xs font-semibold bg-amber-100 text-amber-700 rounded-full px-2.5 py-0.5 mb-1.5 inline-block">{tool.badge}</span>}
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors">{tool.name}</h2>
                </div>
                <span className="text-sm font-semibold bg-slate-100 text-slate-700 rounded-lg px-3 py-1 ml-2 whitespace-nowrap">{tool.startingPrice}</span>
              </div>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">{tool.tagline}</p>
              <StarRating rating={tool.rating} size="sm" />
              <p className="text-xs text-slate-500 mt-2">{tool.reviewCount.toLocaleString()} reviews · {tool.freeTrial}</p>
              <div className="mt-4 flex items-center text-brand-600 text-sm font-medium">
                Read full review <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
