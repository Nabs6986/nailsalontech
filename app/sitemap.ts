import type { MetadataRoute } from "next";
import { getAllAlternativesSlugs } from "./alternatives/_data/alternatives";

const BASE_URL = "https://nailsalontech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-02-17");

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/how-we-review`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Guides
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/guides/best-nail-salon-software-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/about-this-site`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Reviews
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/reviews/glossgenius`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reviews/vagaro`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reviews/fresha`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reviews/square-appointments`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reviews/booksy`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reviews/acuity-scheduling`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Best Of
    { url: `${BASE_URL}/best`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/best/nail-salon-software`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/best/free-booking-software`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best/independent-nail-techs`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best/multi-location-salons`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Comparisons
    { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/compare/glossgenius-vs-vagaro`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/compare/fresha-vs-square`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/compare/vagaro-vs-booksy`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/compare/glossgenius-vs-square`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Blog
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/blog/how-to-choose-booking-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/hidden-fees-salon-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/independent-nail-tech-software-setup`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/booth-rental-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/reduce-no-shows`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Week 2 Comparisons
    { url: `${BASE_URL}/compare/booksy-vs-square`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // Alternatives
    { url: `${BASE_URL}/alternatives`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...getAllAlternativesSlugs().map((slug) => ({
      url: `${BASE_URL}/alternatives/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
