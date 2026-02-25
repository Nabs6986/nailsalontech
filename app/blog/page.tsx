import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { getAllPosts } from "./_data/posts";

export const metadata: Metadata = {
  title: "Nail Salon Software Blog — Tips, Guides & Reviews",
  description: "Expert guides on nail salon booking software, pricing breakdowns, and tips for running a profitable nail business.",
  alternates: { canonical: "https://nailsalontech.com/blog" },
};

const categoryColors: Record<string, string> = {
  Guide: "bg-brand-100 text-brand-700",
  Pricing: "bg-amber-100 text-amber-700",
  "Complete Guide": "bg-indigo-100 text-indigo-700",
  Ranking: "bg-emerald-100 text-emerald-700",
  Alternatives: "bg-violet-100 text-violet-700",
  "Industry Trends": "bg-sky-100 text-sky-700",
  Operations: "bg-rose-100 text-rose-700",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const allPosts = getAllPosts().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nailsalontech.com" },
          { name: "Blog", url: "https://nailsalontech.com/blog" },
        ]}
      />
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100 pt-14 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">NailSalonTech Blog</h1>
          <p className="text-slate-600 text-lg">Expert guides, pricing breakdowns, and practical advice for nail technicians and salon owners.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6">
          {allPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card hover:border-brand-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {formatDate(post.publishedAt)} · {post.readingTime} min read
                    </span>
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
    </>
  );
}
