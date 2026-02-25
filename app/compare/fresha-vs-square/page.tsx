import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ComparisonSchema } from "@/components/schema/ComparisonSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Fresha vs Square Appointments 2026 — Nail Salon Comparison",
  description:
    "Fresha vs Square Appointments for nail salons. Free option vs marketplace platform. Pricing, features, and who should choose which. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/compare/fresha-vs-square" },
};

const rows = [
  { feature: "Starting price", fresha: "$19.95/mo", square: "$0/mo (solo)" },
  { feature: "Marketplace for new clients", fresha: "✅ Global (44M+ consumers)", square: "❌ None" },
  { feature: "Commission on bookings", fresha: "20% one-time on NEW marketplace clients", square: "None" },
  { feature: "Payment processing", fresha: "2.29% + $0.20 per transaction", square: "2.6% + $0.10 per transaction" },
  { feature: "Free tier", fresha: "❌ No (was free, now $19.95/mo)", square: "✅ Free forever for solo" },
  { feature: "Inventory management", fresha: "✅ Included", square: "✅ With Square Inventory" },
  { feature: "Loyalty programs", fresha: "✅ Included", square: "✅ With Square Loyalty" },
  { feature: "Automated reminders", fresha: "✅ Included", square: "✅ Included" },
  { feature: "No-show protection", fresha: "✅ Deposits + policies", square: "⚠️ Need Plus ($29/mo)" },
  { feature: "Free trial", fresha: "7 days (Team plan)", square: "Free forever (solo)" },
];

export default function FreshaVsSquare() {
  return (
    <>
      <ComparisonSchema
        products={[
          { name: "Fresha", description: "Marketplace-powered salon software with 2.29% payment processing, starting at $19.95/mo plus 20% new client marketplace fee" },
          { name: "Square Appointments", description: "Free booking software for solo nail techs with integrated Square ecosystem and 2.6% + $0.10 processing" },
        ]}
        url="https://nailsalontech.com/compare/fresha-vs-square"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nailsalontech.com" },
          { name: "Compare", url: "https://nailsalontech.com/compare" },
          { name: "Fresha vs Square Appointments", url: "https://nailsalontech.com/compare/fresha-vs-square" },
        ]}
      />
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-10 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/compare" className="hover:text-slate-600">Compare</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">Fresha vs Square</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Fresha vs Square Appointments 2026</h1>
          <p className="text-slate-600 text-lg">Marketplace platform vs free booking tool — which is right for your nail salon?</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <AffiliateDisclosure />

        <div className="card mb-8 bg-slate-50">
          <h2 className="font-bold text-slate-900 mb-3">⚡ Quick Answer</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white border border-rose-200 p-4">
              <p className="font-semibold text-rose-700 mb-2">Choose Fresha if:</p>
              <ul className="space-y-1 text-slate-700">
                {["You want new clients through marketplace discovery", "You&apos;re in a major city with Fresha marketplace activity", "You process high card volume (2.29% rate saves money)", "You need inventory + marketing in one platform"].map((r) => (
                  <li key={r} className="flex items-start gap-2"><Check className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />{r}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white border border-green-200 p-4">
              <p className="font-semibold text-green-700 mb-2">Choose Square Appointments if:</p>
              <ul className="space-y-1 text-slate-700">
                {["You want $0/month software cost", "You already use Square POS or ecosystem", "You&apos;re just starting out and building clientele", "You want no marketplace commission risk"].map((r) => (
                  <li key={r} className="flex items-start gap-2"><Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />{r}</li>
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
                  <th className="text-left py-3 px-4 font-semibold text-rose-700">Fresha</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Square Appointments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {rows.map(({ feature, fresha, square }) => (
                  <tr key={feature} className="hover:bg-slate-50/50">
                    <td className="py-3 pr-4 text-slate-600 font-medium">{feature}</td>
                    <td className="py-3 px-4 text-slate-700">{fresha}</td>
                    <td className="py-3 px-4 text-slate-700">{square}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The 20% Fresha Fee: Should It Scare You?</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Fresha&apos;s 20% marketplace commission on new clients is the most debated aspect of their pricing. Here&apos;s an honest breakdown:
            </p>
            <div className="rounded-xl bg-slate-50 p-5">
              <p className="font-semibold mb-3">Scenario: New client books a $70 nail appointment through Fresha marketplace</p>
              <ul className="space-y-2">
                <li>• Fresha takes $14 (20% one-time fee)</li>
                <li>• You receive $56 from that first appointment</li>
                <li>• Client comes back monthly for 12 months: $70 × 11 = $770 more (zero commission)</li>
                <li className="font-semibold text-green-700">• Lifetime value from one Fresha client: $56 + $770 = $826 for a $14 acquisition cost</li>
              </ul>
            </div>
            <p>
              The 20% is a client acquisition cost — similar to paying for Google Ads or referral incentives. The question is whether Fresha marketplace drives enough new client volume in your area to justify $19.95/month + the per-client fee vs. Square&apos;s $0/month with no new client discovery.
            </p>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Verdict</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>New nail techs building from scratch:</strong> Square Appointments free tier. Zero cost, full basic features, no marketplace commission risk.<br /><br />
            <strong>Established nail techs wanting new client growth:</strong> Fresha, especially in major metro areas where the marketplace is active. The 20% new-client fee is manageable given strong lifetime client value.<br /><br />
            <strong>The truth:</strong> These two platforms serve different needs. Square is a management tool; Fresha is a management tool + client acquisition engine. Your choice depends on whether new client discovery is a priority.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-brand-600 p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">Try Fresha</h3>
            <p className="text-rose-100 text-sm mb-4">Plans from $19.95/mo</p>
            <a href="https://fresha.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-rose-700 hover:bg-rose-50 text-sm">Start Free <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-2">Try Square Appointments</h3>
            <p className="text-slate-300 text-sm mb-4">Free forever for solo techs</p>
            <a href="https://squareup.com/us/en/appointments" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 font-semibold text-slate-800 hover:bg-slate-100 text-sm">Start Free <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
