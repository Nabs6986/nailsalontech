import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { getPost, getAllPostSlugs, getAllPosts } from "../_data/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://nailsalontech.com/blog/${slug}` },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="space-y-2 my-4 ml-1">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0 mt-2.5" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  function renderInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let partKey = 0;

    while (remaining.length > 0) {
      // Match bold text
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Match links [text](url)
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

      // Find the earliest match
      const boldIdx = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;
      const linkIdx = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;

      let earliest = -1;
      let type: "bold" | "link" | null = null;

      if (boldIdx >= 0 && (linkIdx < 0 || boldIdx <= linkIdx)) {
        earliest = boldIdx;
        type = "bold";
      } else if (linkIdx >= 0) {
        earliest = linkIdx;
        type = "link";
      }

      if (type === "bold" && boldMatch) {
        if (earliest > 0) {
          parts.push(<span key={partKey++}>{remaining.slice(0, earliest)}</span>);
        }
        parts.push(<strong key={partKey++} className="font-semibold text-slate-900">{boldMatch[1]}</strong>);
        remaining = remaining.slice(earliest + boldMatch[0].length);
      } else if (type === "link" && linkMatch) {
        if (earliest > 0) {
          parts.push(<span key={partKey++}>{remaining.slice(0, earliest)}</span>);
        }
        const href = linkMatch[2];
        const isInternal = href.startsWith("/");
        if (isInternal) {
          parts.push(
            <Link key={partKey++} href={href} className="text-brand-600 hover:underline">
              {linkMatch[1]}
            </Link>
          );
        } else {
          parts.push(
            <a key={partKey++} href={href} className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {linkMatch[1]}
            </a>
          );
        }
        remaining = remaining.slice(earliest + linkMatch[0].length);
      } else {
        parts.push(<span key={partKey++}>{remaining}</span>);
        remaining = "";
      }
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-slate-900 mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed === "---") {
      flushList();
      elements.push(<hr key={key++} className="my-8 border-slate-200" />);
    } else if (trimmed.startsWith("- **") || trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
    } else {
      flushList();
      elements.push(
        <p key={key++} className="text-slate-700 leading-relaxed my-4">
          {renderInline(trimmed)}
        </p>
      );
    }
  }

  flushList();
  return elements;
}

const categoryColors: Record<string, string> = {
  Guide: "bg-brand-100 text-brand-700",
  Pricing: "bg-amber-100 text-amber-700",
  "Complete Guide": "bg-indigo-100 text-indigo-700",
  Ranking: "bg-emerald-100 text-emerald-700",
  Alternatives: "bg-violet-100 text-violet-700",
  "Industry Trends": "bg-sky-100 text-sky-700",
  Operations: "bg-rose-100 text-rose-700",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const categoryColor = categoryColors[post.category] || "bg-slate-100 text-slate-700";

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        author={post.author.name}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        url={`https://nailsalontech.com/blog/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nailsalontech.com" },
          { name: "Blog", url: "https://nailsalontech.com/blog" },
          { name: post.title, url: `https://nailsalontech.com/blog/${slug}` },
        ]}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-brand-50 to-white pt-14 pb-10 border-b border-slate-100">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-slate-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600 line-clamp-1">{post.title}</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs font-semibold rounded-full px-3 py-1 ${categoryColor}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>By {post.author.name}</span>
              <span>Published {formatDate(post.publishedAt)}</span>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <span>Updated {formatDate(post.updatedAt)}</span>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-p:text-slate-700">
            {renderMarkdown(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-slate-100 text-slate-600 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {post.faqs.map(({ question, answer }) => (
                  <div key={question}>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {question}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Related Articles
            </h2>
            <div className="grid gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:shadow-sm transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs font-semibold rounded-full px-2 py-0.5 ${categoryColors[related.category] || "bg-slate-100 text-slate-700"}`}>
                      {related.category}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 mt-2 group-hover:text-brand-700 transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {related.readingTime} min read
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-2xl bg-brand-50 border border-brand-200 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Find the Right Software for Your Nail Salon
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Compare pricing, features, and real costs across every major platform. Our independent reviews help you make the best choice for your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/best/nail-salon-software"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                Best Nail Salon Software <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/pricing"
                className="btn-secondary flex items-center gap-2 text-sm"
              >
                Compare Pricing <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
