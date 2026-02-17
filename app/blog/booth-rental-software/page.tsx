import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Nail Salon Software for Booth Renters: What You Actually Need (2026)",
  description:
    "Independent nail tech renting a booth? Here's the minimal software stack you need, what you can skip, and how to compare real costs. Updated February 2026.",
  alternates: { canonical: "https://nailsalontech.com/blog/booth-rental-software" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nail Salon Software for Booth Renters: What You Actually Need",
  description:
    "Independent nail techs who rent a booth need far less software than a full salon. This guide covers the minimal feature set, real costs, and the best picks for 2026.",
  author: { "@type": "Organization", name: "NailSalonTech" },
  publisher: {
    "@type": "Organization",
    name: "NailSalonTech",
    url: "https://nailsalontech.com",
  },
  datePublished: "2026-02-16",
  dateModified: "2026-02-17",
  wordCount: 2200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What software do booth-renting nail techs actually need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Booth-renting nail techs need three core tools: online booking, payment processing, and client communication (reminders). Everything else — payroll, inventory management, staff scheduling, multi-location tools — is unnecessary overhead for a solo operator.",
      },
    },
    {
      "@type": "Question",
      name: "Is GlossGenius good for booth renters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GlossGenius's Standard plan at $24/month (annual) is purpose-built for solo beauty professionals. It includes online booking, automated reminders, payment processing at 2.6%, and client cards — exactly the core stack a booth renter needs. There are no hidden per-SMS fees or add-on costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can a booth renter use Square Appointments for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Square Appointments has a free plan for a single staff member with no monthly subscription fee. However, the payment processing rate on the free plan is 2.6% + $0.10 per transaction — which adds up. At $6,000/month in card revenue, you'd pay roughly $166/month in processing fees alone. The free plan also lacks automated reminders, which are critical for reducing no-shows.",
      },
    },
    {
      "@type": "Question",
      name: "What payment processing rate should booth renters look for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For booth renters processing $3,000–$10,000/month in card payments, target a rate under 2.75%. GlossGenius (2.6%), Vagaro (2.75%), and Square Plus/Premium plans (2.5% + $0.15) are all competitive. Fresha charges 0% commission but earns on Fresha Marketplace bookings. Square's free plan (2.6% + $0.10) has a per-transaction fee that hurts on smaller ticket sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Do booth renters need inventory management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most booth renters don't need dedicated inventory software. If your booth rental includes salon product access, you typically don't track it as business inventory. If you're purchasing your own supplies, a simple spreadsheet or a platform like Vagaro (which includes inventory) covers basic needs. GlossGenius and Booksy don't include inventory management — this isn't usually a deal-breaker for solo techs.",
      },
    },
    {
      "@type": "Question",
      name: "How much should a booth-renting nail tech budget for software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Budget $0–$30/month for your booking platform subscription, plus 2.5–2.75% of monthly card revenue for payment processing. For a tech doing $6,000/month in card sales, total software cost runs roughly $150–$195/month. That's 2.5–3.2% of revenue — a standard and acceptable overhead for the time saved on scheduling and no-show reduction.",
      },
    },
  ],
};

const softwareOptions = [
  {
    name: "GlossGenius",
    price: "$24/mo (annual)",
    processing: "2.6% flat",
    trialDays: 14,
    bestFor: "Polish and simplicity",
    highlights: [
      "Booking website included",
      "No per-SMS fees on reminders",
      "Flat 2.6% on all card types",
      "Client cards with nail notes & photos",
    ],
    link: "https://glossgenius.com",
    reviewLink: "/reviews/glossgenius",
  },
  {
    name: "Square Appointments",
    price: "Free – $29/mo",
    processing: "2.6% + $0.10 (free) / 2.5% + $0.15 (paid)",
    trialDays: 30,
    bestFor: "Zero-cost start",
    highlights: [
      "Free plan for solo techs",
      "Reminders on Plus plan ($29/mo)",
      "Square ecosystem (POS, invoices)",
      "No monthly fee on free plan",
    ],
    link: "https://squareup.com/us/en/appointments",
    reviewLink: "/reviews/square-appointments",
  },
  {
    name: "Booksy",
    price: "$29.99/mo",
    processing: "External (your Stripe account)",
    trialDays: 14,
    bestFor: "New client discovery",
    highlights: [
      "44M+ consumer marketplace",
      "No commission on marketplace bookings",
      "Your own Stripe rate (typically 2.7%)",
      "All features in one price",
    ],
    link: "https://booksy.com",
    reviewLink: "/reviews/booksy",
  },
  {
    name: "Fresha",
    price: "Free (0% commission)",
    processing: "2.19% + $0.20 (Fresha Pay)",
    trialDays: 0,
    bestFor: "Marketplace-first growth",
    highlights: [
      "No monthly subscription",
      "Commission-free bookings",
      "Large consumer marketplace",
      "Pay only when you process payments",
    ],
    link: "https://fresha.com",
    reviewLink: "/reviews/fresha",
  },
];

export default function BoothRentalSoftware() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-50 to-white pt-14 pb-10 border-b border-slate-100">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <nav className="text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-slate-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-slate-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-600">Booth Rental Software</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold bg-brand-100 text-brand-700 rounded-full px-3 py-1">
                🏠 Booth Renters
              </span>
              <span className="text-xs text-slate-400">February 2026 · 11 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Nail Salon Software for Booth Renters: What You Actually Need
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              You&apos;re renting a booth — not running a 10-person salon. Here&apos;s the lean software stack
              that independent nail techs actually need, what&apos;s genuinely optional, and how to avoid
              paying for features you&apos;ll never use.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <AffiliateDisclosure />

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-p:leading-relaxed prose-p:text-slate-700">

            <p className="text-lg text-slate-700 leading-relaxed">
              The nail salon software market is dominated by tools built for salon <em>owners</em> — people managing
              multiple staff, complex schedules, inventory rooms full of products, and payroll runs. If you rent a
              booth, you are not that person. You are a one-person business who needs to book clients, get paid,
              and send appointment reminders. Full stop.
            </p>

            <p className="text-slate-700 leading-relaxed">
              The problem is that most software comparison guides treat booth renters the same as salon owners.
              They recommend the same platforms, the same feature tiers, and the same price points. This guide
              doesn&apos;t do that. We&apos;re going to strip it down to exactly what you need as an independent nail tech
              renting a booth — and nothing more.
            </p>

            <h2>The Reality of Booth Rental</h2>

            <p className="text-slate-700 leading-relaxed">
              As a booth renter, you&apos;re an independent contractor. You pay the salon a weekly or monthly booth fee
              (typically $150–$500/week in most US markets), and in exchange you keep 100% of what you charge your
              clients. You set your own prices, your own hours, and your own policies.
            </p>

            <p className="text-slate-700 leading-relaxed">
              This model is increasingly popular: the Professional Beauty Association estimates that over 40% of nail
              technicians in the US work as independent contractors rather than employees. The flexibility is real —
              so is the administrative workload. You&apos;re now running a business, and that business needs systems.
            </p>

            <p className="text-slate-700 leading-relaxed">
              The good news: the systems a booth renter needs are dramatically simpler (and cheaper) than what
              full salons need. Let&apos;s define exactly what that looks like.
            </p>

            <h2>The Non-Negotiables: 3 Things Every Booth Renter Needs</h2>

            <h3>1. Online Booking</h3>

            <p className="text-slate-700 leading-relaxed">
              If clients can&apos;t book you online, you&apos;re leaving money on the table — period. Research consistently
              shows that over 60% of beauty service bookings now happen outside business hours, primarily through
              mobile devices. A client browsing Instagram at 11pm who wants to book you for Saturday shouldn&apos;t have
              to wait until morning.
            </p>

            <p className="text-slate-700 leading-relaxed">
              What &quot;online booking&quot; means in practice for a booth renter: a booking link you can share on Instagram,
              TikTok, and via text. Clients tap it, pick a service, pick a time, and confirm. You get notified.
              Done. You don&apos;t need a full website — just a professional-looking booking page (most platforms provide this).
            </p>

            <h3>2. Automated Appointment Reminders</h3>

            <p className="text-slate-700 leading-relaxed">
              No-shows are the silent killer of solo nail tech income. Industry data puts the average no-show
              rate in beauty services at 10–15% without reminders. Automated reminders (sent 48 hours and
              24 hours before appointments) reduce no-shows by an average of 38–50%. If you&apos;re doing 80 appointments
              a month, even a modest reduction from 12% to 6% saves you nearly 5 appointments — at $65 average,
              that&apos;s $325/month recovered.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Every platform listed in this guide offers automated reminders, but <strong>the pricing model matters</strong>.
              Some charge per SMS sent. Others include reminders in the monthly subscription. At scale, per-SMS
              models get expensive. GlossGenius includes unlimited SMS reminders in its Standard plan; Square
              Appointments charges for SMS on the free tier.
            </p>

            <h3>3. Integrated Payment Processing</h3>

            <p className="text-slate-700 leading-relaxed">
              You need to accept cards. Cash is declining across all service categories, and clients who prefer
              cash are increasingly rare among the demographic that books nail services online. More importantly,
              integrated payments (where the software handles booking <em>and</em> payment) unlock features like
              deposits, cancellation fees, and card-on-file — all of which protect your income as a solo tech.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Payment processing fees are the most significant ongoing software cost for booth renters.
              Most platforms charge 2.5–2.75% per card transaction. On $6,000/month in card revenue, that&apos;s
              $150–$165/month. On $10,000/month, it&apos;s $250–$275/month. Choosing the lowest processing rate
              matters more as your revenue grows.
            </p>

            <h2>What Booth Renters Can Skip</h2>

            <p className="text-slate-700 leading-relaxed">
              Here&apos;s the list of features you&apos;ll see advertised — and that you almost certainly don&apos;t need:
            </p>

            <ul>
              <li>
                <strong>Staff management / multi-calendar:</strong> You&apos;re the only staff member. Platforms that charge
                per-calendar or per-employee are charging you for features you&apos;ll never use.
              </li>
              <li>
                <strong>Payroll processing:</strong> As an independent contractor, you handle your own taxes (quarterly
                estimated payments, Schedule C). You don&apos;t run payroll for yourself through your booking software.
              </li>
              <li>
                <strong>Inventory management:</strong> Unless you&apos;re selling retail product from your booth, skip it.
                If your salon provides supplies or you purchase your own without tracking depletion by unit, a
                spreadsheet handles this fine.
              </li>
              <li>
                <strong>Multi-location management:</strong> You have one booth. You don&apos;t need enterprise multi-location tools.
              </li>
              <li>
                <strong>Advanced reporting suites:</strong> Useful for salon owners tracking staff productivity.
                For a booth renter, your bank statement and a simple spreadsheet tells you everything you need.
              </li>
              <li>
                <strong>Embedded POS hardware:</strong> Heavy POS systems designed to sit on a front desk are overkill.
                You need Tap to Pay on your phone or a simple card reader — not a full retail POS terminal.
              </li>
            </ul>

            <h2>Cost Comparison: What You&apos;ll Actually Pay</h2>

            <p className="text-slate-700 leading-relaxed">
              Let&apos;s compare the real monthly cost for a booth-renting nail tech processing $6,000/month in card
              payments (approximately 75–80 appointments at $75–$80 average):
            </p>
          </div>

          {/* Cost comparison table */}
          <div className="not-prose rounded-xl border border-slate-200 overflow-hidden my-8">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Platform</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Monthly Sub</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Processing ($6k)</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700 bg-brand-50">True Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">GlossGenius Standard</td>
                  <td className="py-3 px-4 text-slate-700">$24/mo (annual)</td>
                  <td className="py-3 px-4 text-slate-700">$156 (2.6%)</td>
                  <td className="py-3 px-4 font-semibold text-brand-700 bg-brand-50">$180/mo</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Square Free</td>
                  <td className="py-3 px-4 text-slate-700">$0/mo</td>
                  <td className="py-3 px-4 text-slate-700">$163 (2.6% + $0.10×75)</td>
                  <td className="py-3 px-4 font-semibold text-slate-900 bg-slate-50">$163/mo*</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Square Plus</td>
                  <td className="py-3 px-4 text-slate-700">$29/mo</td>
                  <td className="py-3 px-4 text-slate-700">$161 (2.5% + $0.15×75)</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">$190/mo</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Booksy</td>
                  <td className="py-3 px-4 text-slate-700">$29.99/mo</td>
                  <td className="py-3 px-4 text-slate-700">~$162 (Stripe ~2.7%)</td>
                  <td className="py-3 px-4 font-semibold text-slate-900 bg-slate-50">~$192/mo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-slate-900">Fresha</td>
                  <td className="py-3 px-4 text-slate-700">$0/mo</td>
                  <td className="py-3 px-4 text-slate-700">$146 (2.19% + $0.20×75)</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">$146/mo</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Vagaro (1 calendar)</td>
                  <td className="py-3 px-4 text-slate-700">$30/mo</td>
                  <td className="py-3 px-4 text-slate-700">$165 (2.75%)</td>
                  <td className="py-3 px-4 font-semibold text-slate-900">$195/mo</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-slate-50 px-4 py-3 text-xs text-slate-500 border-t border-slate-200">
              *Square Free plan lacks automated reminders — a meaningful trade-off. Processing estimates based on 75 transactions/month at $80 average. Prices verified February 2026.
            </div>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-p:leading-relaxed prose-p:text-slate-700">

            <p className="text-slate-700 leading-relaxed">
              The cost difference between the cheapest and most expensive options is roughly $50/month. That&apos;s
              meaningful — about $600/year. But the more important comparison is <em>value per dollar</em>, not just
              sticker price. Square Free looks cheapest, but loses reminders. Fresha is cheapest overall, but
              lacks depth for client management. GlossGenius costs slightly more but offers the best overall
              experience for solo techs.
            </p>

            <h2>Platform Deep Dives: The Best Options for Booth Renters</h2>

            <h3>GlossGenius — Best Overall for Booth Renters</h3>

            <p className="text-slate-700 leading-relaxed">
              GlossGenius is purpose-built for solo beauty professionals. The Standard plan at $24/month (annual billing)
              includes everything a booth renter actually needs: a booking website, client cards with nail history
              and photo storage, automated SMS + email reminders with no per-SMS fees, and payment processing at
              a flat 2.6% on all card types (no surcharge for Amex, Tap to Pay, or card-on-file).
            </p>

            <p className="text-slate-700 leading-relaxed">
              The client card system is genuinely useful for nail techs specifically — you can store gel vs. acrylic
              preference, nail shape notes, allergy information, reference photos, and product preferences. This
              is the kind of personalized detail that turns one-time clients into regulars.
            </p>

            <p className="text-slate-700 leading-relaxed">
              The main limitation: GlossGenius has no consumer marketplace. All your new clients have to come through
              your own marketing (Instagram, referrals, Google). If you&apos;re established with a solid book of regulars,
              this doesn&apos;t matter. If you&apos;re just starting out and need organic client discovery, pair GlossGenius
              with a free Fresha or Booksy listing.
            </p>

            <p className="text-slate-700 leading-relaxed">
              <strong>Best for:</strong> Established booth renters with existing client books who want the most
              professional-looking booking experience.
            </p>

            <h3>Square Appointments Free Plan — Best for True Budget Zero</h3>

            <p className="text-slate-700 leading-relaxed">
              Square&apos;s free plan is genuinely free — $0/month subscription for a single staff member. You get
              online booking, a basic booking page, and payment processing at 2.6% + $0.10 per transaction.
              If you&apos;re just launching your independent career and haven&apos;t built a client base yet, this is a
              sensible starting point.
            </p>

            <p className="text-slate-700 leading-relaxed">
              The critical limitation is automated reminders: <strong>Square Free does not include automated
              appointment reminders</strong>. That feature requires Square Appointments Plus at $29/month. Given
              that reminders are one of the most ROI-positive features in booking software, this is a real
              trade-off for budget-focused booth renters.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Square Plus at $29/month unlocks reminders, no-show protection (deposits and cancellation fees),
              and advanced reporting. At that price, it&apos;s competitive with GlossGenius but without the polish.
            </p>

            <p className="text-slate-700 leading-relaxed">
              <strong>Best for:</strong> New booth renters who want $0 startup costs and plan to upgrade once
              their client book is established.
            </p>

            <h3>Fresha — Best for Zero-Cost Marketplace Access</h3>

            <p className="text-slate-700 leading-relaxed">
              Fresha&apos;s model is genuinely different: no monthly subscription fee, ever. You pay 2.19% + $0.20
              per transaction when you process payments through Fresha Pay. New client bookings coming through the
              Fresha marketplace carry no commission fee.
            </p>

            <p className="text-slate-700 leading-relaxed">
              For a booth renter just starting out who needs both zero upfront cost <em>and</em> client discovery,
              Fresha is uniquely positioned. You get a real marketplace listing (Fresha has millions of consumers
              searching for beauty services) without paying a monthly fee or per-booking commission.
            </p>

            <p className="text-slate-700 leading-relaxed">
              The trade-offs: Fresha&apos;s client management features are less polished than GlossGenius. The client
              card system is functional but not as detailed. And Fresha&apos;s processing rate of 2.19% + $0.20
              is competitive on large tickets but slightly worse on small ones (break-even vs. GlossGenius at ~$27
              ticket size — not a factor for nail services averaging $65+).
            </p>

            <p className="text-slate-700 leading-relaxed">
              <strong>Best for:</strong> New booth renters who need client discovery and want zero monthly overhead.
            </p>

            <h3>Booksy — Best for Marketplace-Driven Client Acquisition</h3>

            <p className="text-slate-700 leading-relaxed">
              Booksy hosts over 44 million consumers who actively search for beauty appointments. At $29.99/month,
              you get a verified marketplace listing, all booking and reminder features included, and payment
              processing through your own Stripe account (typically 2.7% + $0.05 for Stripe).
            </p>

            <p className="text-slate-700 leading-relaxed">
              For booth renters who want new-client growth as their primary objective, Booksy&apos;s marketplace
              reach is hard to match. The no-commission model means every new client you attract through Booksy
              is 100% yours — no percentage cut taken per booking.
            </p>

            <p className="text-slate-70 leading-relaxed">
              <strong>Best for:</strong> Booth renters in competitive markets who need new client discovery
              as their primary growth channel.
            </p>

            <h2>The Features That Actually Move the Needle for Booth Renters</h2>

            <h3>Card-on-File and Deposits</h3>

            <p className="text-slate-700 leading-relaxed">
              Storing a client&apos;s card on file is one of the most impactful things a solo nail tech can do.
              It enables:
            </p>

            <ul>
              <li><strong>No-show fees:</strong> Charge a flat fee ($25–$50) automatically if a client doesn&apos;t show</li>
              <li><strong>Late cancellation fees:</strong> Charge a percentage of the service if cancelled within 24 hours</li>
              <li><strong>Deposits:</strong> Require partial payment upfront for longer services (full sets, nail art)</li>
              <li><strong>Faster checkout:</strong> Client walks out without stopping to pay — seamless experience</li>
            </ul>

            <p className="text-slate-700 leading-relaxed">
              GlossGenius and Square Appointments Plus both support card-on-file and deposits. This feature alone
              can recover significant revenue from no-shows, which at a 10% rate on 80 monthly appointments means
              you&apos;re eating 8 missed appointments per month.
            </p>

            <h3>Google Booking Integration</h3>

            <p className="text-slate-700 leading-relaxed">
              Most booking platforms now integrate with Google&apos;s Reserve with Google feature, which lets clients
              book appointments directly from your Google Business Profile. For a booth renter with a claimed
              Google Business listing, this is significant: someone searching &quot;nail tech near me&quot; can book
              you without ever visiting your booking page. GlossGenius, Square, Vagaro, and Fresha all support this.
            </p>

            <h3>Instagram and Facebook Booking Links</h3>

            <p className="text-slate-700 leading-relaxed">
              Most booking platforms let you add a booking button directly to your Instagram bio and Facebook
              page. For nail techs whose primary marketing is Instagram portfolio posts, this converts browsers
              into booked clients with one tap. Make sure whichever platform you choose has this integration —
              all of our top picks do.
            </p>

            <h2>Our Recommendation: GlossGenius for Most Booth Renters</h2>

            <p className="text-slate-700 leading-relaxed">
              If you already have a client base (or are building one through Instagram), <strong>GlossGenius Standard
              at $24/month is the best choice for most booth-renting nail techs</strong>. The flat 2.6% processing rate,
              polished booking experience, nail-specific client cards, and included reminders hit every
              non-negotiable without any of the bloat.
            </p>

            <p className="text-slate-700 leading-relaxed">
              If you&apos;re brand new and need to build a client base from scratch, start with <strong>Fresha</strong>
              (marketplace discovery, zero monthly fee) and migrate to GlossGenius once your book is established.
              That migration is free — GlossGenius will transfer your client data for you.
            </p>

            <p className="text-slate-700 leading-relaxed">
              If you&apos;re on a tight budget and need truly $0/month to start, <strong>Square Free</strong> works —
              but plan to upgrade to Plus ($29/month) once you have clients, specifically for automated reminders.
            </p>

          </div>

          {/* Software cards */}
          <div className="not-prose my-10">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Top Software Picks for Booth Renters</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {softwareOptions.map((opt) => (
                <div key={opt.name} className="card border border-slate-200 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-slate-900">{opt.name}</h3>
                    <span className="text-xs text-slate-500 bg-slate-100 rounded-full px-2.5 py-1">
                      {opt.bestFor}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 mb-1">
                    <span className="font-medium">Price:</span> {opt.price}
                  </div>
                  <div className="text-sm text-slate-600 mb-4">
                    <span className="font-medium">Processing:</span> {opt.processing}
                  </div>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {opt.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <a
                      href={opt.link}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="btn-primary text-sm py-2 flex items-center gap-1.5"
                    >
                      Try Free <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <Link
                      href={opt.reviewLink}
                      className="btn-secondary text-sm py-2"
                    >
                      Full Review
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
                <div key={name}>
                  <h3 className="font-semibold text-slate-900 mb-2">{name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related links */}
          <div className="border-t border-slate-100 pt-8">
            <p className="text-sm font-semibold text-slate-700 mb-3">Related Reading</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/blog/independent-nail-tech-software-setup"
                className="text-sm text-brand-600 hover:underline flex items-center gap-1"
              >
                Complete Software Setup for Solo Nail Techs <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/best/independent-nail-techs"
                className="text-sm text-brand-600 hover:underline flex items-center gap-1"
              >
                Best Software for Independent Nail Techs <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/blog/hidden-fees-salon-software"
                className="text-sm text-brand-600 hover:underline flex items-center gap-1"
              >
                Hidden Fees in Salon Software <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
