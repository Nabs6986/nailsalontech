import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const baseUrl = "https://nailsalontech.com";

export const metadata: Metadata = {
  title: "About This Site | NailSalonTech",
  description:
    "Learn about NailSalonTech — how we review nail salon management software, our editorial methodology, and our commitment to independent, honest recommendations.",
  alternates: { canonical: `${baseUrl}/about-this-site` },
};

export default function AboutThisSitePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "About This Site", url: `${baseUrl}/about-this-site` },
        ]}
      />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About NailSalonTech
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Independent reviews and comparisons of nail salon management
              software — built to help salon owners and nail technicians make
              informed technology decisions.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What We Do
              </h2>
              <p className="text-slate-600 leading-relaxed">
                NailSalonTech provides in-depth reviews, head-to-head
                comparisons, and buying guides for nail salon management
                software. We cover platforms like Vagaro, GlossGenius,
                Mangomint, Boulevard, Square Appointments, and more —
                evaluating each on features, pricing, ease of use, and
                real-world fit for different salon types.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Our Methodology
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every review on NailSalonTech is based on hands-on testing,
                feature analysis, and conversations with salon owners. We
                evaluate each platform across five dimensions:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-slate-800 min-w-[140px]">
                    Ease of Use
                  </span>
                  <span>
                    Interface clarity, learning curve, and day-to-day workflow
                    efficiency
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-slate-800 min-w-[140px]">
                    Features
                  </span>
                  <span>
                    Booking, POS, scheduling, inventory, marketing, and client
                    management tools
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-slate-800 min-w-[140px]">
                    Value for Money
                  </span>
                  <span>
                    Pricing relative to feature set and comparable platforms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-slate-800 min-w-[140px]">
                    Support
                  </span>
                  <span>
                    Response times, knowledge base quality, and onboarding
                    assistance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-slate-800 min-w-[140px]">
                    Mobile App
                  </span>
                  <span>
                    Feature parity, reliability, and real-world usability for
                    salon professionals
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Editorial Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                NailSalonTech earns revenue through affiliate partnerships with
                some of the software vendors we review. When you click a link
                and sign up, we may receive a commission. This never influences
                our ratings, rankings, or editorial opinions — every review is
                written independently. We disclose affiliate relationships on
                every page that contains affiliate links.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Update Schedule
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Individual reviews are updated monthly as vendors release new
                features and pricing changes. Our ranked guides and comparison
                pages are refreshed quarterly. All pages display the date of
                their last update.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Get in Touch
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Have a question, correction, or suggestion?{" "}
                <Link
                  href="/contact"
                  className="text-brand-600 hover:text-brand-700 underline"
                >
                  Contact us
                </Link>
                . We read every message and respond within 48 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
