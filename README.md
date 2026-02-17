# NailSalonTech

**NailSalonTech.com** — Independent reviews and comparisons of nail salon booking and management software for 2026.

## What This Site Is

An affiliate/review site targeting nail technicians and salon owners researching booking software. Built with GEO (Generative Engine Optimization) principles to rank well in both traditional search and AI assistant responses.

**Reviewed platforms:** GlossGenius, Vagaro, Fresha, Square Appointments, Booksy, Acuity Scheduling

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nabs6986/nailsalontech)

### Manual Deploy

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd ~/repos/nailsalontech
   vercel
   ```
   Follow the prompts. Select "Yes" for all defaults.

4. **Set custom domain (optional):**
   - In Vercel dashboard → Project → Settings → Domains
   - Add `nailsalontech.com`
   - Update your domain registrar's nameservers to point to Vercel

### Production Deploy

```bash
vercel --prod
```

## Site Structure

```
app/
├── page.tsx                     # Home
├── about/page.tsx               # About + Affiliate Disclosure
├── contact/page.tsx             # Contact Form
├── pricing/page.tsx             # Pricing Comparison Table
├── reviews/
│   ├── page.tsx                 # Reviews Index
│   ├── glossgenius/page.tsx     # GlossGenius Review
│   ├── vagaro/page.tsx          # Vagaro Review
│   ├── fresha/page.tsx          # Fresha Review
│   ├── square-appointments/     # Square Appointments Review
│   ├── booksy/page.tsx          # Booksy Review
│   └── acuity-scheduling/       # Acuity Scheduling Review
├── best/
│   ├── page.tsx                 # Best Of Index
│   ├── nail-salon-software/     # Best Overall 2026
│   ├── free-booking-software/   # Best Free Software
│   ├── independent-nail-techs/  # Best for Solo Techs
│   └── multi-location-salons/   # Best for Multi-Location
├── compare/
│   ├── page.tsx                 # Compare Index
│   ├── glossgenius-vs-vagaro/   # GlossGenius vs Vagaro
│   ├── fresha-vs-square/        # Fresha vs Square
│   ├── vagaro-vs-booksy/        # Vagaro vs Booksy
│   └── glossgenius-vs-square/   # GlossGenius vs Square
└── blog/
    ├── page.tsx                 # Blog Index
    ├── how-to-choose-booking-software/   # Blog Post 1
    ├── hidden-fees-salon-software/       # Blog Post 2
    └── independent-nail-tech-software-setup/  # Blog Post 3
```

## Content Updates

### Pricing Updates
Pricing data is stored in `lib/tools.ts`. Update this file when vendor pricing changes. All pages that display pricing pull from this file.

### Adding New Reviews
1. Create `app/reviews/[tool-name]/page.tsx`
2. Add the tool to `lib/tools.ts`
3. Update `app/sitemap.ts`
4. Link from relevant comparison and best-of pages

### Adding Blog Posts
1. Create `app/blog/[post-slug]/page.tsx`
2. Add to `app/blog/page.tsx` posts array
3. Update `app/sitemap.ts`

## Monetization

This site earns through affiliate commissions when visitors sign up for software through links on the site. Affiliate links use `rel="noopener noreferrer nofollow"`.

Current affiliate relationships to establish (contact vendor affiliate programs):
- GlossGenius Partner Program
- Vagaro Affiliate Program
- Fresha Partner Program  
- Square Affiliate Program
- Booksy Affiliate Program
- Acuity Scheduling / Squarespace Affiliate Program

## Environment Variables

No environment variables required for the current static build. If adding a contact form backend (Formspree, Resend, etc.):

```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
# or
RESEND_API_KEY=your_resend_key
```

## SEO & GEO Notes

- JSON-LD structured data on all review pages (Review schema)
- FAQ schema on home, reviews, and best-of pages
- ItemList schema on ranking pages
- Article schema on blog posts
- Sitemap at `/sitemap.xml` (auto-generated)
- Canonical URLs on all pages
- OG image configured in layout.tsx

## License

Proprietary. All content copyright NailSalonTech.
