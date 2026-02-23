import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Review Nail Salon Software",
  description:
    "Learn how NailSalonTech independently evaluates nail salon booking and management software. Our 5-step testing process, scoring criteria, and editorial standards explained.",
  alternates: { canonical: "https://nailsalontech.com/how-we-review" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Review Nail Salon Software",
  url: "https://nailsalontech.com/how-we-review",
  description:
    "NailSalonTech's methodology for independently evaluating nail salon booking and management software platforms.",
  publisher: {
    "@type": "Organization",
    name: "NailSalonTech",
    url: "https://nailsalontech.com",
  },
};

const steps = [
  {
    number: "01",
    title: "Account Setup & Salon Configuration",
    desc: "We create real accounts on every platform we review. We set up a simulated nail salon with realistic service menus (manicures, pedicures, gel, acrylics, nail art), pricing, staff members, and business hours to evaluate the onboarding experience from a nail salon owner's perspective.",
  },
  {
    number: "02",
    title: "Client Booking Flow Testing",
    desc: "We go through the complete client-facing booking experience on desktop and mobile. We test service selection, add-on options, nail technician selection, date/time picking, and confirmation. We note every friction point that could cause a potential client to abandon the booking process.",
  },
  {
    number: "03",
    title: "Payment & POS Evaluation",
    desc: "We verify payment processing setup, test card-present and card-not-present transactions, evaluate tipping flows, test split payments, and calculate the true per-transaction cost. We assess whether the POS supports retail product sales and inventory tracking for nail polish and supplies.",
  },
  {
    number: "04",
    title: "Nail-Specific Feature Assessment",
    desc: "We specifically evaluate features that matter to nail salons: client nail cards and preference tracking, before/after photo storage, service duration management for gel and acrylic sets, allergy and sensitivity notes, walk-in queue management, and nail product inventory tracking.",
  },
  {
    number: "05",
    title: "Total Cost of Ownership Calculation",
    desc: "We verify all pricing directly from vendor websites and calculate the real monthly cost including subscription fees, payment processing fees (per $10,000 in monthly revenue), SMS charges, card reader hardware, additional staff fees, and premium feature add-ons. We note the date of price verification.",
  },
];

const criteria = [
  {
    name: "Ease of Use",
    weight: "20%",
    desc: "Interface design, learning curve, setup speed, and daily usability. We assess the experience for both tech-savvy salon owners and nail techs who prefer simplicity. A great salon platform should be learnable in under an hour.",
  },
  {
    name: "Appointment & Walk-in Management",
    weight: "20%",
    desc: "Online booking quality, calendar management, staff scheduling, walk-in queue handling, waitlist features, and automated reminders. This is the core function of salon software and we weight it accordingly.",
  },
  {
    name: "POS & Payment Processing",
    weight: "20%",
    desc: "Card processing reliability, transaction fees, tipping experience, split payments, retail product sales, and hardware quality. We calculate effective payment costs on $5,000 and $10,000 in monthly card volume to provide realistic fee comparisons.",
  },
  {
    name: "Client Management & Marketing",
    weight: "15%",
    desc: "Client profiles, service history tracking, nail preference notes, allergy records, automated marketing campaigns, review collection, loyalty programs, and social media integration. These features drive repeat business and client retention.",
  },
  {
    name: "Support & Reliability",
    weight: "15%",
    desc: "Customer support channels and response times, platform uptime reliability, mobile app quality for owners and staff, help documentation, and onboarding resources. Salon software must work reliably during peak booking hours.",
  },
  {
    name: "Value for Money",
    weight: "10%",
    desc: "Features delivered relative to total cost of ownership. We assess whether the pricing is fair for a nail salon specifically, comparing per-feature cost across platforms at equivalent functionality levels.",
  },
];

export default function HowWeReviewPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white pt-16 pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-medium">How We Review</span>
          </nav>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            How We Review Nail Salon Software
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every review on NailSalonTech follows a rigorous, consistent evaluation process
            built specifically for the nail salon industry. Here is exactly how we test,
            score, and rank nail salon platforms.
          </p>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Our 5-Step Evaluation Process
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="card">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold text-sm">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Scoring Criteria & Weights
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Each platform receives a score from 1 to 5 in six categories. The weighted
            average produces the overall rating. Weights reflect what matters most to nail
            salon owners choosing booking and management software.
          </p>
          <div className="space-y-4">
            {criteria.map((item) => (
              <div key={item.name} className="card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-bold text-brand-700">
                    {item.weight}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Cadence, Editorial Independence, Corrections */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Update Cadence</h2>
            <p className="text-slate-600 leading-relaxed">
              We re-evaluate every reviewed platform at least twice per year. Pricing and
              payment processing fees are verified quarterly. When a platform announces a
              major feature update or pricing change, we update the relevant review within
              two weeks. Every review displays the date it was last verified so you know how
              current the information is.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Editorial Independence
            </h2>
            <p className="text-slate-600 leading-relaxed">
              NailSalonTech is reader-supported through affiliate commissions. When you click
              a link to a software vendor and sign up, we may earn a referral fee at no cost
              to you. Affiliate relationships never influence our ratings, rankings, or
              editorial verdicts. We apply the same evaluation criteria to every platform
              regardless of whether we have an affiliate relationship with the vendor. Our
              top-ranked platform is chosen because it best serves nail salon owners, not
              because of commission rates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Corrections & Feedback
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you spot an error in our pricing data, feature descriptions, or any other
              factual claim, please email us at{" "}
              <a
                href="mailto:hello@nailsalontech.com"
                className="text-brand-600 hover:text-brand-700 underline"
              >
                hello@nailsalontech.com
              </a>
              . We investigate every correction request and update our content within 48
              hours when an error is confirmed. Accuracy is the foundation of our
              credibility.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            See our methodology in action
          </h2>
          <p className="text-slate-600 mb-6">
            Read our in-depth reviews to see how we apply this evaluation framework to real
            nail salon software platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reviews"
              className="btn-primary"
            >
              Read Our Reviews
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <Link href="/reviews" className="hover:text-brand-600">Reviews</Link>
            <Link href="/about" className="hover:text-brand-600">About</Link>
            <Link href="/faq" className="hover:text-brand-600">FAQ</Link>
            <Link href="/contact" className="hover:text-brand-600">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
