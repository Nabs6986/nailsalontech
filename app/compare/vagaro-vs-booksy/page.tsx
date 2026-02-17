import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Vagaro vs Booksy 2026 — Best Nail Salon Marketplace Software?",
  description:
    "Vagaro vs Booksy for nail salons. Both offer commission-free marketplace listings. Pricing, features, and key differences compared. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/compare/vagaro-vs-booksy" },
};

const rows = [
  { feature: "Starting price", vagaro: "$30/mo (1 calendar)", booksy: "$29.99/mo (all features)" },
  { feature: "Additional staff", vagaro: "+$10/calendar/mo", booksy: "+$20/user/mo" },
  { feature: "Payment processing", vagaro: "2.75% (Vagaro Payments)", booksy: "Separate processor (Stripe, etc.)" },
  { feature: "Marketplace commission", vagaro: "None (you keep 100%)", booksy: "None (you keep 100%)" },
  { feature: "Marketplace size", vagaro: "Vagaro marketplace (large US reach)", booksy: "44M+ consumers globally" },
  { feature: "Loyalty programs", vagaro: "✅ Included", booksy: "✅ Included" },
  { feature: "Inventory management", vagaro: "✅ Included", booksy: "❌ Not included" },
  { feature: "Gift cards", vagaro: "✅ Included", booksy: "✅ Included" },
  { feature: "Memberships", vagaro: "✅ Included", booksy: "✅ Included" },
  { feature: "Built-in POS", vagaro: "✅ Yes", booksy: "❌ No (use separate)" },
  { feature: "Free trial", vagaro: "30 days", booksy: "14 days" },
  { feature: "Email marketing", vagaro: "1,000 free/mo included", booksy: "✅ Included (campaigns)" },
];

export default function VagaroVsBooksy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-10 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/compare" className="hover:text-slate-600">Compare</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">Vagaro vs Booksy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Vagaro vs Booksy 2026 for Nail Salons</h1>
          <p className="text-slate-600 text-lg">Two marketplace-powered platforms, both commission-free. Which serves nail techs better?</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <AffiliateDisclosure />

        <div className="card mb-8 bg-slate-50">
          <h2 className="font-bold text-slate-900 mb-3">⚡ Quick Answer</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white border border-navy-200 p-4">
              <p className="font-semibold text-navy-700 mb-2">Choose Vagaro if:</p>
              <ul className="space-y-1 text-slate-700">
                {["You need inventory management for nail products", "You want a built-in POS system", "You need more than 1,000 email sends/month free", "You want a 30-day free trial to thoroughly evaluate"].map((r) => (
                  <li key={r} className="flex items-start gap-2"><Check className="h-4 w-4 text-navy-500 shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-amber-200 p-4">
              <p className="font-semibold text-amber-700 mb-2">Choose Booksy if:</p>
              <ul className="space-y-1 text-slate-700">
                {["You want the largest beauty-focused consumer marketplace", "You prefer transparent all-features pricing (no tiers)", "You don&apos;t need inventory management", "You process payments through your own Stripe account"].map((r) => (
                  <li key={r} className="flex items-start gap-2"><Check className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-3 pr-4 font-semibold text-slate-700 w-48">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-navy-700">Vagaro</th>
                  <th className="text-left py-3 px-4 font-semibold text-amber-700">Booksy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {rows.map(({ feature, vagaro, booksy }) => (
                  <tr key={feature} className="hover:bg-slate-50/50">
                    <td className="py-3 pr-4 text-slate-600 font-medium">{feature}</td>
                    <td className="py-3 px-4 text-slate-700">{vagaro}</td>
                    <td className="py-3 px-4 text-slate-700">{booksy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Multi-Staff Pricing Comparison</h2>
          <p className="text-sm text-slate-700 mb-4">Where Vagaro and Booksy diverge most significantly:</p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="font-semibold mb-3 text-navy-800">Vagaro (per calendar)</p>
              <div className="space-y-1.5 text-slate-700">
                <div className="flex justify-between"><span>1 tech:</span><span>$30/mo</span></div>
                <div className="flex justify-between"><span>2 techs:</span><span>$40/mo</span></div>
                <div className="flex justify-between"><span>3 techs:</span><span>$50/mo</span></div>
                <div className="flex justify-between"><span>5 techs:</span><span>$70/mo</span></div>
              </div>
            </div>
            <div className="rounded-xl bg-amber-50 p-4">
              <p className="font-semibold mb-3 text-amber-800">Booksy (+$20/user)</p>
              <div className="space-y-1.5 text-slate-700">
                <div className="flex justify-between"><span>1 tech:</span><span>$29.99/mo</span></div>
                <div className="flex justify-between"><span>2 techs:</span><span>$49.99/mo</span></div>
                <div className="flex justify-between"><span>3 techs:</span><span>$69.99/mo</span></div>
                <div className="flex justify-between"><span>5 techs:</span><span>$109.99/mo</span></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3">Vagaro is more cost-effective for larger teams. Booksy is comparable for 1–2 techs.</p>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Verdict: Vagaro vs Booksy for Nail Salons</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>Both platforms are excellent choices</strong> for nail techs who want marketplace visibility without commission fees. The key differentiators are feature depth and team size pricing.
            </p>
            <p>
              <strong>Vagaro edges ahead for most nail salons</strong> due to inventory management (crucial for salons tracking gel polish and nail products), built-in POS, lower per-tech cost for teams of 3+, and the 30-day trial. The 2.75% payment processing is slightly higher than using Stripe directly through Booksy (2.9% + $0.30 can be cheaper for low-transaction-count salons).
            </p>
            <p>
              <strong>Booksy is better if</strong> transparent all-features pricing with no tier confusion matters to you, or if the Booksy consumer marketplace has stronger adoption in your specific metro area (check the app before committing).
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">Try Vagaro</h3>
            <p className="text-navy-200 text-sm mb-4">30-day free trial</p>
            <a href="https://vagaro.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-navy-700 text-sm hover:bg-navy-50"><span>Start Trial</span><ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">Try Booksy</h3>
            <p className="text-amber-100 text-sm mb-4">14-day free trial</p>
            <a href="https://booksy.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-amber-700 text-sm hover:bg-amber-50"><span>Start Trial</span><ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
