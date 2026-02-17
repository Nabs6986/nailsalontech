"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navigation = [
  {
    label: "Reviews",
    href: "/reviews",
    children: [
      { label: "GlossGenius", href: "/reviews/glossgenius" },
      { label: "Vagaro", href: "/reviews/vagaro" },
      { label: "Fresha", href: "/reviews/fresha" },
      { label: "Square Appointments", href: "/reviews/square-appointments" },
      { label: "Booksy", href: "/reviews/booksy" },
      { label: "Acuity Scheduling", href: "/reviews/acuity-scheduling" },
    ],
  },
  {
    label: "Best Of",
    href: "/best",
    children: [
      { label: "Best Overall 2026", href: "/best/nail-salon-software" },
      { label: "Best Free Software", href: "/best/free-booking-software" },
      { label: "Best for Solo Techs", href: "/best/independent-nail-techs" },
      { label: "Best for Multi-Location", href: "/best/multi-location-salons" },
    ],
  },
  {
    label: "Compare",
    href: "/compare",
    children: [
      { label: "GlossGenius vs Vagaro", href: "/compare/glossgenius-vs-vagaro" },
      { label: "Fresha vs Square", href: "/compare/fresha-vs-square" },
      { label: "Vagaro vs Booksy", href: "/compare/vagaro-vs-booksy" },
      { label: "GlossGenius vs Square", href: "/compare/glossgenius-vs-square" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-brand-500" />
            <span className="text-lg font-bold text-slate-900">
              NailSalon<span className="text-brand-600">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute left-0 top-full mt-1 w-52 rounded-xl border border-slate-100 bg-white shadow-lg py-2 z-50"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/best/nail-salon-software" className="hidden sm:block btn-primary text-xs px-4 py-2">
              Find Best Software
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-6 py-1.5 text-sm text-slate-500 hover:text-brand-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
