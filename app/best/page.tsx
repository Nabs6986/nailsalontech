import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Nail Salon Software Guides 2026 — By Category",
  description: "Best-of guides for nail salon software by use case: best overall, best free, best for solo techs, best for multi-location salons.",
  alternates: { canonical: "https://nailsalontech.com/best" },
};

const guides = [
  { title: "Best Nail Salon Software 2026", desc: "Our overall ranking of all 6 platforms, tested and rated for nail technicians.", href: "/best/nail-salon-software", icon: "🏆" },
  { title: "Best Free Nail Salon Booking Software", desc: "Zero-cost options for nail techs. What's actually free vs 'free but...'", href: "/best/free-booking-software", icon: "🆓" },
  { title: "Best for Independent Nail Techs", desc: "Software picks for solo nail techs in suites, booths, or home studios.", href: "/best/independent-nail-techs", icon: "💅" },
  { title: "Best for Multi-Location Salons", desc: "Software that scales across 2+ locations with unified reporting.", href: "/best/multi-location-salons", icon: "🏢" },
];

export default function BestIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-14 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Best Of Guides</h1>
          <p className="text-slate-600 text-lg">Curated software recommendations for every type of nail salon situation.</p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="group card hover:border-brand-200 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">{guide.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{guide.desc}</p>
              <div className="flex items-center text-brand-600 text-sm font-medium">
                Read guide <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
