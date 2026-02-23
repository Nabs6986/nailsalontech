import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Nail Salon Software Questions Answered",
  description:
    "Frequently asked questions about nail salon booking and management software. Get answers about pricing, features, payment processing, walk-in handling, and choosing the right platform for your salon.",
  alternates: { canonical: "https://nailsalontech.com/faq" },
};

const faqCategories = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What is nail salon software?",
        a: "Nail salon software is a booking and management platform designed to help nail technicians and salon owners run their businesses. It typically includes online appointment scheduling, client management, point-of-sale (POS) and payment processing, automated reminders, marketing tools, and reporting. Popular platforms include GlossGenius, Vagaro, Fresha, Square Appointments, Booksy, and Acuity Scheduling.",
      },
      {
        q: "Do I really need salon software, or can I use a paper appointment book?",
        a: "While a paper appointment book works for very small operations, salon software pays for itself through reduced no-shows (automated reminders cut no-shows by 30\u201350%), online booking that captures clients 24/7, integrated payment processing that speeds up checkout, and marketing automation that drives repeat visits. Most nail salon owners report saving 5\u201310 hours per week after switching to software.",
      },
      {
        q: "Can nail salon software handle both walk-ins and appointments?",
        a: "Yes. Most nail salon platforms support both scheduled appointments and walk-in clients. Vagaro and Square Appointments have dedicated walk-in modes that let you add clients to the queue without a prior booking. GlossGenius is more appointment-focused but handles same-day bookings easily. Look for a platform with a clear daily view that shows booked slots and open availability at a glance.",
      },
      {
        q: "How does NailSalonTech evaluate and rank salon software?",
        a: "NailSalonTech independently evaluates nail salon software using a nail-specific scoring framework. We create real accounts, set up simulated salons, test booking flows, process payments, and evaluate features like service menus, client nail cards, and marketing tools. No vendor pays for placement or higher rankings. See our How We Review page for the full methodology.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Costs",
    questions: [
      {
        q: "How much does nail salon software cost?",
        a: "Nail salon software ranges from free to $200+/month depending on the platform and features. Fresha is free with no subscription fee (they charge per transaction instead). Square Appointments offers a free plan for solo providers. GlossGenius starts at $24/month. Vagaro starts at $30/month for one user. Booksy starts at $29.99/month. Acuity Scheduling starts at $20/month. Always factor in payment processing fees when comparing costs.",
      },
      {
        q: "What payment processing fees should I expect?",
        a: "Payment processing fees typically range from 2.5% to 2.9% + $0.25\u2013$0.30 per transaction. GlossGenius charges 2.6% + $0.00 (no per-transaction fee). Square charges 2.6% + $0.10 for in-person and 2.9% + $0.30 for online. Fresha charges per-transaction fees since the software itself is free. Vagaro charges 2.75% for card-present transactions. These fees add up \u2014 for a salon doing $10,000/month in card payments, a 0.3% difference is $30/month.",
      },
      {
        q: "Are there hidden costs beyond the subscription price?",
        a: "Yes. Common hidden costs for nail salon software include: payment processing fees, SMS/text reminder charges (some platforms charge per message), premium features locked behind higher tiers, card reader hardware costs ($0\u2013$300), website hosting add-ons, and additional staff member fees. Fresha appears free but charges clients a booking fee. Always calculate your total monthly cost including transaction fees and add-ons.",
      },
      {
        q: "Is there a free nail salon software option?",
        a: "Yes. Fresha offers free salon software with no monthly subscription \u2014 they monetize through payment processing fees and optional paid features. Square Appointments has a free plan for individual providers. GlossGenius offers a 14-day free trial. Vagaro and Booksy offer free trial periods. For a solo nail tech on a tight budget, Square Appointments Free or Fresha are legitimate starting points.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Capabilities",
    questions: [
      {
        q: "Does nail salon software support service menus with add-ons?",
        a: "Yes. All major salon platforms let you create detailed service menus with categories (manicures, pedicures, nail art, waxing, etc.), individual pricing, duration settings, and add-on services. GlossGenius and Vagaro handle add-on services particularly well, letting clients select extras like gel removal, nail art, or paraffin treatment during the booking process. You can set different prices and durations for each add-on.",
      },
      {
        q: "Can the software send automated appointment reminders?",
        a: "Yes. Automated reminders are a core feature of every nail salon platform. Most send reminders via SMS and/or email at configurable intervals (typically 24 hours and 2 hours before the appointment). GlossGenius and Vagaro include SMS reminders in their subscription. Square Appointments sends email reminders for free and SMS for an additional fee. Automated reminders typically reduce no-shows by 30\u201350%.",
      },
      {
        q: "Does nail salon software include a point-of-sale (POS) system?",
        a: "Most platforms include built-in POS functionality. Square Appointments has the most robust POS system with support for retail product sales, tips, split payments, and inventory tracking. GlossGenius includes card processing with a sleek card reader. Vagaro offers a full POS with retail inventory. Fresha includes integrated payments. Booksy has a built-in checkout system. The POS quality varies \u2014 if you sell a lot of retail products, Square is the strongest choice.",
      },
      {
        q: "Can I track client nail preferences and allergy notes?",
        a: "Yes. Client management features in salon software allow you to store detailed profiles including nail preferences, past services, favorite colors, allergy information (important for acrylics and gel products), before/after photos, and personal notes. Vagaro has the most detailed client card system. GlossGenius stores client notes and service history. Square Appointments allows custom client fields for tracking preferences and allergies.",
      },
      {
        q: "Does nail salon software support online booking?",
        a: "Yes, online booking is a core feature of all nail salon platforms. Clients can book appointments through a branded booking page, your website (via an embeddable widget), Google Search and Maps integration, Instagram and Facebook booking buttons, or a client-facing mobile app. GlossGenius and Booksy have particularly polished client-facing booking experiences. Online booking typically increases bookings by 20\u201340% because clients can book outside business hours.",
      },
    ],
  },
  {
    id: "switching",
    title: "Switching & Migration",
    questions: [
      {
        q: "Can I switch salon software without losing my client data?",
        a: "Yes. Most salon platforms allow you to export client lists as CSV files, which can be imported into a new platform. Vagaro, Square, and GlossGenius all support client data import. You can typically transfer client names, contact info, and service history. Appointment history and detailed notes may require manual re-entry. Budget 1\u20132 weeks for migration and notify your clients about any booking link changes.",
      },
      {
        q: "How do I move my online reviews when switching platforms?",
        a: "Your Google Business Profile reviews stay with your Google listing regardless of which salon software you use \u2014 those are yours permanently. Reviews within a salon platform (like Booksy or Fresha in-app reviews) typically cannot be transferred. This is why we recommend building your review presence on Google rather than relying solely on platform-specific reviews.",
      },
      {
        q: "Will my clients need to rebook when I switch software?",
        a: "It depends on timing. Future appointments in your old system will not automatically transfer to the new platform. The best approach is to: export your upcoming appointments, manually enter them in the new system, send clients a new booking link, and set a clean cutover date. Most salon owners switch on a quiet day (like a Monday) and handle the transition in a few hours.",
      },
    ],
  },
  {
    id: "choosing",
    title: "Choosing the Right Software",
    questions: [
      {
        q: "What is the best nail salon software for a solo nail technician?",
        a: "For solo nail techs, GlossGenius ($24/month) and Square Appointments (free for one person) are the top picks. GlossGenius offers a beautiful booking experience, integrated payments, and a professional website. Square Appointments Free gives you online booking, a POS, and payment processing at no monthly cost. If budget is the top priority, start with Square free. If you want a more polished brand experience, go with GlossGenius.",
      },
      {
        q: "Which software is best for a multi-chair nail salon?",
        a: "For multi-chair salons with 3+ nail technicians, Vagaro is the strongest choice. It handles staff scheduling, individual booking calendars, commission tracking, payroll, and multi-room/chair management at $30/month + $10/additional staff. Square Appointments Plus ($29/month) is also strong for multi-staff salons. GlossGenius works but lacks some of the advanced staff management features larger salons need.",
      },
      {
        q: "How do I choose between GlossGenius and Vagaro?",
        a: "GlossGenius is best for solo nail techs and small salons who want a premium brand experience, beautiful booking page, and simple interface. Vagaro is best for multi-staff salons that need advanced scheduling, payroll, inventory management, and detailed reporting. GlossGenius charges $24\u2013$48/month with sleek simplicity. Vagaro charges $30/month + $10/staff but offers significantly more features for growing salons.",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Updates",
    questions: [
      {
        q: "What kind of customer support do salon software companies offer?",
        a: "Support varies by platform. GlossGenius offers in-app chat and email support. Vagaro provides phone, chat, and email support with a large help center. Square has phone and chat support plus an extensive knowledge base. Fresha offers email and chat support. Booksy provides in-app chat support. Response times range from minutes (chat) to 24\u201348 hours (email). Vagaro and Square generally have the fastest support response times.",
      },
      {
        q: "How do I get help setting up my salon software?",
        a: "Most platforms offer onboarding resources including: setup wizards that walk you through initial configuration, video tutorials for each feature, help center articles with step-by-step guides, and live chat or phone support for questions. Vagaro offers free onboarding assistance. GlossGenius has a guided setup flow. Square provides a dedicated setup guide. Most nail salon owners can complete initial setup in 1\u20133 hours.",
      },
    ],
  },
];

const allQuestions = faqCategories.flatMap((cat) => cat.questions);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQuestions.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white pt-16 pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-medium">FAQ</span>
          </nav>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Answers to common questions about nail salon booking software, pricing,
            payment processing, features, and choosing the right platform for your salon.
          </p>
        </div>
      </section>

      {/* Jump-to-section nav */}
      <section className="py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Jump to Section
            </h2>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{cat.title}</h2>
              <div className="space-y-4">
                {cat.questions.map((item, idx) => (
                  <div key={idx} className="card">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to find the right software for your salon?
          </h2>
          <p className="text-slate-600 mb-6">
            Read our in-depth reviews or learn more about how we evaluate nail salon
            software platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reviews"
              className="btn-primary"
            >
              Read Our Reviews
            </Link>
            <Link
              href="/how-we-review"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            >
              How We Review
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
            <Link href="/how-we-review" className="hover:text-brand-600">How We Review</Link>
            <Link href="/contact" className="hover:text-brand-600">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
