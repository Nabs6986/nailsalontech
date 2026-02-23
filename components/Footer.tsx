import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-brand-400" />
              <span className="text-white font-bold">NailSalonTech</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Independent reviews of nail salon software. We help nail technicians and salon owners find the right tools to grow their business.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Software Reviews</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews/glossgenius" className="hover:text-white transition-colors">GlossGenius</Link></li>
              <li><Link href="/reviews/vagaro" className="hover:text-white transition-colors">Vagaro</Link></li>
              <li><Link href="/reviews/fresha" className="hover:text-white transition-colors">Fresha</Link></li>
              <li><Link href="/reviews/square-appointments" className="hover:text-white transition-colors">Square Appointments</Link></li>
              <li><Link href="/reviews/booksy" className="hover:text-white transition-colors">Booksy</Link></li>
              <li><Link href="/reviews/acuity-scheduling" className="hover:text-white transition-colors">Acuity Scheduling</Link></li>
            </ul>
          </div>

          {/* Best Of */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Best Of Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/best/nail-salon-software" className="hover:text-white transition-colors">Best Overall 2026</Link></li>
              <li><Link href="/best/free-booking-software" className="hover:text-white transition-colors">Best Free Software</Link></li>
              <li><Link href="/best/independent-nail-techs" className="hover:text-white transition-colors">Best for Solo Techs</Link></li>
              <li><Link href="/best/multi-location-salons" className="hover:text-white transition-colors">Best for Multi-Location</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Comparison</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/how-we-review" className="hover:text-white transition-colors">How We Review</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/about#affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">© {new Date().getFullYear()} NailSalonTech. All rights reserved.</p>
          <p className="text-xs text-center max-w-lg">
            <strong className="text-slate-300">Affiliate Disclosure:</strong> NailSalonTech may earn a commission when you sign up for software through our links. This never affects our reviews — we only recommend tools we&apos;d use ourselves.
          </p>
        </div>
      </div>
    </footer>
  );
}
