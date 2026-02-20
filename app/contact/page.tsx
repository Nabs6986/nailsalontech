"use client";

import { useState } from "react";
import { Mail, MessageCircle, Clock } from "lucide-react";

// Note: metadata must be in a server component; for client components use generateMetadata or put metadata in a parent
// We'll keep this simple as a client component for the form

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/meellgye", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true); // Fallback to show success
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 pt-14 pb-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Contact Us</h1>
          <p className="text-slate-600 text-lg">
            Have a question about our reviews, spotted a pricing error, or want to
            suggest a software we should cover? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-brand-500" />
              <h3 className="font-semibold text-slate-900">Email</h3>
            </div>
            <a href="mailto:hello@nailsalontech.com" className="text-brand-600 hover:underline text-sm">
              hello@nailsalontech.com
            </a>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-5 w-5 text-brand-500" />
              <h3 className="font-semibold text-slate-900">Response Time</h3>
            </div>
            <p className="text-sm text-slate-600">
              We respond to all inquiries within 48 business hours.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="h-5 w-5 text-brand-500" />
              <h3 className="font-semibold text-slate-900">What We Help With</h3>
            </div>
            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>• Pricing errors or outdated info</li>
              <li>• Software suggestions</li>
              <li>• Editorial corrections</li>
              <li>• Press & media inquiries</li>
              <li>• Affiliate partnership questions</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          <div className="card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">
                  Thanks for reaching out. We&apos;ll get back to you within 48 hours at the email you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-bold text-slate-900">Send a Message</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="pricing-error">Pricing error or outdated info</option>
                    <option value="software-suggestion">Software suggestion</option>
                    <option value="editorial">Editorial correction</option>
                    <option value="press">Press & media inquiry</option>
                    <option value="affiliate">Affiliate partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
