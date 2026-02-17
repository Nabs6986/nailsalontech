import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nail Salon Software Comparisons 2026 — Side-by-Side Analysis",
  description: "Head-to-head comparisons of nail salon booking platforms. GlossGenius vs Vagaro, Fresha vs Square, Vagaro vs Booksy, and more.",
  alternates: { canonical: "https://nailsalontech.com/compare" },
};

const comparisons = [
  { title: "GlossGenius vs Vagaro", desc: "Premium nail software head-to-head. Which wins for solo techs vs multi-staff salons?", href: "/compare/glossgenius-vs-vagaro" },
  { title: "Fresha vs Square Appointments", desc: "Marketplace platform vs free booking tool. Is the 20% commission worth it?", href: "/compare/fresha-vs-square" },
  { title: "Vagaro vs Booksy", desc: "Two commission-free marketplace platforms compared. Which serves nail techs better?", href: "/compare/vagaro-vs-booksy" },
  { title: "GlossGenius vs Square Appointments", desc: "$24/month vs free. Is GlossGenius worth the subscription for nail techs?", href: "/compare/glossgenius-vs-square" },
];

export default function CompareIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-14 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Nail Salon Software Comparisons</h1>
          <p className="text-slate-600 text-lg">Side-by-side comparisons to help you choose between the top nail salon platforms.</p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {comparisons.map((comp) => (
            <Link key={comp.href} href={comp.href} className="group card hover:border-brand-200 hover:shadow-lg transition-all">
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">{comp.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{comp.desc}</p>
              <div className="flex items-center text-brand-600 text-sm font-medium">
                Compare now <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
