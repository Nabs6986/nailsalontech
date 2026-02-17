import type { Metadata } from "next";
import { Shield, Users, BarChart3, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About NailSalonTech — Our Mission & Editorial Standards",
  description:
    "Learn how NailSalonTech independently reviews nail salon software. Our editorial process, affiliate disclosure, and team background.",
  alternates: { canonical: "https://nailsalontech.com/about" },
};

const values = [
  {
    icon: Shield,
    title: "Editorial Independence",
    desc: "No software company can pay to improve their rating or review. We evaluate each platform on a consistent rubric: features, pricing transparency, nail-salon fit, ease of use, and support quality.",
  },
  {
    icon: BarChart3,
    title: "Real Pricing, Always",
    desc: "We verify pricing directly on vendor websites and update it regularly. We include payment processing fees, SMS costs, and add-on fees that inflate the true monthly cost — the things other review sites often hide.",
  },
  {
    icon: Users,
    title: "Nail-Specific Focus",
    desc: "We're not a generic 'salon software' site. Our reviews specifically evaluate nail-relevant features: digital nail cards, before/after photo storage, gel/acrylic service timing, nail product inventory, and client allergy notes.",
  },
  {
    icon: Mail,
    title: "Responsive & Accountable",
    desc: "Spot an error in our pricing data? See a feature we missed? Email us and we'll investigate and update within 48 hours. Accuracy matters when real businesses depend on this information.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white pt-16 pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            About NailSalonTech
          </h1>
          <p className="text-lg text-slate-600">
            We help nail technicians and salon owners find the right booking and management
            software — without the marketing fluff, sponsored rankings, or vague advice.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Our Mission</h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              Choosing booking software is one of the most important operational decisions a nail salon can make. The right platform saves hours every week, reduces no-shows, grows your client base, and keeps your cash flow healthy. The wrong one costs you clients, creates accounting headaches, and locks you into expensive contracts.
            </p>
            <p>
              NailSalonTech was built because most software comparison sites are paid directories — they rank whoever pays the highest referral commission, not whoever deserves the top spot. We do it differently: we evaluate platforms on a nail-salon-specific rubric, verify all pricing directly from vendor websites, and update our content regularly.
            </p>
            <p>
              We&apos;ve personally tested accounts on GlossGenius, Vagaro, Fresha, Square Appointments, Booksy, and Acuity Scheduling. We know what it feels like to set up a client profile, process a payment, send a reminder, and dig through reporting. That hands-on experience shapes every review we publish.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Our Editorial Standards
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-brand-50 p-2.5">
                    <Icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">How We Review Software</h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              Every software review on NailSalonTech follows the same structured evaluation process:
            </p>
            <ol className="list-decimal list-outside pl-5 space-y-3">
              <li>
                <strong>Account Setup:</strong> We create a real account and set up a simulated nail salon with services, pricing, and staff members.
              </li>
              <li>
                <strong>Booking Flow Test:</strong> We go through the client-facing booking experience on both desktop and mobile, noting friction points.
              </li>
              <li>
                <strong>Payment Processing:</strong> We verify payment setup, processing fees, payout speed, and any hidden transaction costs.
              </li>
              <li>
                <strong>Nail-Specific Features:</strong> We specifically look for client nail cards, photo storage, gel/acrylic service options, product inventory, and allergy tracking.
              </li>
              <li>
                <strong>Marketing Tools:</strong> Automated reminders, email marketing, review requests, loyalty programs — tested for quality and ease of use.
              </li>
              <li>
                <strong>Reporting:</strong> Revenue tracking, booking analytics, staff performance — critical for growing salons.
              </li>
              <li>
                <strong>Support:</strong> We test live chat, email support, and help documentation for responsiveness and quality.
              </li>
              <li>
                <strong>Total Cost of Ownership:</strong> We calculate the real monthly cost including subscription, payment processing fees, SMS costs, and add-ons.
              </li>
            </ol>
            <p>
              Ratings are on a 1–5 scale based on weighted category scores. Our star ratings reflect the overall experience for a nail salon specifically — not a generic salon or spa.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section id="affiliate-disclosure" className="py-14 bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Affiliate Disclosure
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              NailSalonTech earns revenue through affiliate partnerships. When you click a link to a software provider and sign up for a paid plan, we may earn a referral commission at no additional cost to you.
            </p>
            <p>
              <strong>What this means for you:</strong> The price you pay is exactly the same whether you use our link or go directly to the provider. We never receive free months, inflated commissions, or other benefits in exchange for positive reviews.
            </p>
            <p>
              <strong>What this does NOT mean:</strong> Affiliate relationships do not influence our rankings, ratings, or editorial content. Our #1 pick earns us no more commission than our #6 pick. We have ranked platforms lower when their commission rates were higher, because our editorial integrity matters more than revenue optimization.
            </p>
            <p>
              We believe in full transparency. If you have any questions about our affiliate relationships or how we make editorial decisions, please <a href="/contact" className="text-brand-600 hover:underline">contact us directly</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">The Team</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            NailSalonTech is built by a small team of software researchers and beauty industry
            professionals. Our reviewers have backgrounds in nail technology, salon management,
            and software product analysis. We combine technical evaluation with real-world
            salon operations experience.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Questions or feedback? We read every email:{" "}
            <a href="mailto:hello@nailsalontech.com" className="text-brand-600 hover:underline">
              hello@nailsalontech.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
