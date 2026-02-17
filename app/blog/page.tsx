import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nail Salon Software Blog — Tips, Guides & Reviews",
  description: "Expert guides on nail salon booking software, pricing breakdowns, and tips for running a profitable nail business.",
  alternates: { canonical: "https://nailsalontech.com/blog" },
};

const posts = [
  {
    title: "How to Choose Booking Software for Your Nail Salon in 2026",
    excerpt: "A complete guide to choosing nail salon booking software. What features matter, pricing traps to avoid, and how to match software to your salon type.",
    href: "/blog/how-to-choose-booking-software",
    date: "February 10, 2026",
    readTime: "12 min",
    tag: "Guide",
    tagColor: "brand",
  },
  {
    title: "Hidden Fees in Salon Software: What to Watch For in 2026",
    excerpt: "The subscription price is just the beginning. Payment processing, SMS overages, marketplace commissions, and add-ons — here's the full picture.",
    href: "/blog/hidden-fees-salon-software",
    date: "February 12, 2026",
    readTime: "10 min",
    tag: "Pricing",
    tagColor: "amber",
  },
  {
    title: "Going Independent: Complete Software Setup for Solo Nail Techs",
    excerpt: "Step-by-step setup guide for independent nail techs. Booking, payments, marketing, accounting — everything you need from Day 1.",
    href: "/blog/independent-nail-tech-software-setup",
    date: "February 14, 2026",
    readTime: "14 min",
    tag: "Complete Guide",
    tagColor: "navy",
  },
];

const tagColors: Record<string, string> = {
  brand: "bg-brand-100 text-brand-700",
  amber: "bg-amber-100 text-amber-700",
  navy: "bg-indigo-100 text-indigo-700",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-14 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">NailSalonTech Blog</h1>
          <p className="text-slate-600 text-lg">Expert guides, pricing breakdowns, and practical advice for nail technicians and salon owners.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="group card hover:border-brand-200 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${tagColors[post.tagColor]}`}>{post.tag}</span>
                    <span className="text-xs text-slate-400">{post.date} · {post.readTime} read</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-brand-600 text-sm font-medium">
                Read article <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
