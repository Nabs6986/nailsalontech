import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "GlossGenius vs Vagaro 2026 — Which Is Better for Nail Salons?",
  description:
    "GlossGenius vs Vagaro comparison for nail salons. Pricing, features, payment processing, and who should choose which. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/compare/glossgenius-vs-vagaro" },
};

const comparisonRows = [
  { feature: "Starting price", glossgenius: "$24/mo (annual)", vagaro: "$30/mo" },
  { feature: "Payment processing", glossgenius: "2.6% flat", vagaro: "2.75% per swipe" },
  { feature: "Free trial", glossgenius: "14 days", vagaro: "30 days" },
  { feature: "Consumer marketplace", glossgenius: "❌ None", vagaro: "✅ Free listing" },
  { feature: "Commission on bookings", glossgenius: "None", vagaro: "None" },
  { feature: "Client cards / nail history", glossgenius: "✅ Included", vagaro: "✅ Included" },
  { feature: "Loyalty programs", glossgenius: "❌ Not included", vagaro: "✅ Included" },
  { feature: "Inventory management", glossgenius: "❌ Not included", vagaro: "✅ Included" },
  { feature: "AI marketing tools", glossgenius: "✅ Gold/Platinum", vagaro: "❌ Limited" },
  { feature: "SMS reminders", glossgenius: "✅ Included all plans", vagaro: "✅ Included" },
  { feature: "Same-day payouts", glossgenius: "✅ Mon–Thu", vagaro: "Varies by processor" },
  { feature: "Multi-staff support", glossgenius: "✅ All plans", vagaro: "✅ All plans" },
  { feature: "Booking website quality", glossgenius: "⭐⭐⭐⭐⭐ Premium", vagaro: "⭐⭐⭐⭐ Good" },
  { feature: "Setup complexity", glossgenius: "Very easy", vagaro: "Moderate" },
];

export default function GlossGeniusVsVagaro() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-10 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/compare" className="hover:text-slate-600">Compare</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">GlossGenius vs Vagaro</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            GlossGenius vs Vagaro 2026: Which Is Better for Nail Salons?
          </h1>
          <p className="text-slate-600 text-lg">Both are excellent nail salon platforms — here&apos;s how to choose between them.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <AffiliateDisclosure />

        {/* Quick Answer */}
        <div className="card mb-8 bg-brand-50/30 border-brand-200">
          <h2 className="font-bold text-slate-900 mb-3">⚡ Quick Answer</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="rounded-xl bg-white border border-brand-100 p-4">
              <p className="font-semibold text-brand-700 mb-2">Choose GlossGenius if:</p>
              <ul className="space-y-1">
                {["You want the most polished client booking experience", "You prefer flat 2.6% payment processing", "You want AI marketing tools", "You&apos;re a solo tech or small team (1–3 staff)", "Premium brand aesthetic matters to you"].map((r) => (
                  <li key={r} className="flex items-start gap-2"><Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-4">
              <p className="font-semibold text-navy-700 mb-2">Choose Vagaro if:</p>
              <ul className="space-y-1">
                {["You want free marketplace exposure for new clients", "You need loyalty programs and gift cards", "You need inventory management for nail products", "You have 3+ staff with complex scheduling", "You want the longest free trial (30 days)"].map((r) => (
                  <li key={r} className="flex items-start gap-2"><Check className="h-4 w-4 text-navy-500 shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-3 pr-4 font-semibold text-slate-700 w-44">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-700">GlossGenius</th>
                  <th className="text-left py-3 px-4 font-semibold text-navy-700">Vagaro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {comparisonRows.map(({ feature, glossgenius, vagaro }) => (
                  <tr key={feature} className="hover:bg-slate-50/50">
                    <td className="py-3 pr-4 text-slate-600 font-medium">{feature}</td>
                    <td className="py-3 px-4 text-slate-700">{glossgenius}</td>
                    <td className="py-3 px-4 text-slate-700">{vagaro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Deep Dive */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Pricing: True Monthly Cost Comparison</h2>
          <p className="text-sm text-slate-700 mb-4 leading-relaxed">
            For a solo nail tech processing $6,000/month in card revenue (approx. 100 transactions at $60 average):
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-brand-50 border border-brand-200 p-4 text-sm">
              <p className="font-semibold text-brand-800 mb-3">GlossGenius Standard</p>
              <div className="space-y-1.5 text-slate-700">
                <div className="flex justify-between"><span>Subscription:</span><span>$24/mo</span></div>
                <div className="flex justify-between"><span>Payment processing (2.6%):</span><span>$156/mo</span></div>
                <div className="flex justify-between font-semibold border-t border-brand-200 pt-2 mt-2"><span>Total monthly:</span><span className="text-brand-700">$180/mo</span></div>
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm">
              <p className="font-semibold text-navy-800 mb-3">Vagaro (1 calendar)</p>
              <div className="space-y-1.5 text-slate-700">
                <div className="flex justify-between"><span>Subscription:</span><span>$30/mo</span></div>
                <div className="flex justify-between"><span>Payment processing (2.75%):</span><span>$165/mo</span></div>
                <div className="flex justify-between font-semibold border-t border-slate-200 pt-2 mt-2"><span>Total monthly:</span><span className="text-navy-700">$195/mo</span></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3">* Assumes 100 transactions at $60 average. Add-ons not included.</p>
        </div>

        {/* Verdict */}
        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Verdict</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>GlossGenius wins for most solo nail techs.</strong> The combination of a polished booking website, flat 2.6% payment processing, client nail cards, and $24/month starting price makes it the better value for the majority of nail technicians. The AI tools on the Gold plan are genuinely useful once your business is established.
            </p>
            <p>
              <strong>Vagaro wins when you need more.</strong> If you want free marketplace exposure for attracting new clients, need loyalty programs and gift cards, or are managing 3+ staff with complex scheduling, Vagaro&apos;s feature set justifies the slightly higher price. The 30-day free trial is the best in the industry for thorough evaluation.
            </p>
            <p>
              <strong>The bottom line:</strong> Solo nail tech → GlossGenius Standard. Multi-staff salon with growth focus → Vagaro.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">Try GlossGenius</h3>
            <p className="text-brand-100 text-sm mb-4">14-day free trial, no credit card</p>
            <a href="https://glossgenius.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-brand-700 hover:bg-brand-50 text-sm transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">Try Vagaro</h3>
            <p className="text-navy-200 text-sm mb-4">30-day free trial, no credit card</p>
            <a href="https://vagaro.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-navy-700 hover:bg-navy-50 text-sm transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
