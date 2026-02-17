import { AlertCircle } from "lucide-react";

export function AffiliateDisclosure() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-8 flex gap-3">
      <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">
        <strong>Affiliate Disclosure:</strong> NailSalonTech may earn a commission when you sign up for software through links on this page. Commissions do not influence our ratings or recommendations — our editorial team independently evaluates each platform based on features, pricing, and nail-salon fit.{" "}
        <a href="/about#affiliate-disclosure" className="underline hover:text-amber-900">
          Learn more about our editorial standards.
        </a>
      </p>
    </div>
  );
}
