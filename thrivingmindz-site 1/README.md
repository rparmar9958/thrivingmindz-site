# ThrivingMindz.org — Deployment Guide

## 🚀 Getting Live in 30 Minutes

### Prerequisites
- Node.js 18+ installed
- GitHub account
- Vercel account (free at vercel.com)
- Domain: thrivingmindz.org (you already own this)

---

### Step 1: Set Up Locally

```bash
# Clone or copy this project folder
cd thrivingmindz-site

# Install dependencies
npm install

# Run locally to test
npm run dev
# → Visit http://localhost:3000
```

### Step 2: Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial ThrivingMindz site launch"

# Create repo on github.com/[your-username]/thrivingmindz-site
# Then push
git remote add origin https://github.com/[your-username]/thrivingmindz-site.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `thrivingmindz-site` repository
4. Vercel auto-detects Next.js — click "Deploy"
5. Wait ~60 seconds. Your site is now live at `thrivingmindz-site.vercel.app`

### Step 4: Connect Custom Domain

1. In Vercel dashboard → your project → Settings → Domains
2. Add `thrivingmindz.org`
3. Vercel will give you DNS records (usually nameservers or CNAME)
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Update DNS to point to Vercel
6. Wait 5-30 minutes for DNS propagation
7. Vercel auto-provisions SSL (HTTPS)

### Step 5: Set Up Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://thrivingmindz.org`
3. Verify via DNS TXT record (add to your domain registrar)
4. Submit sitemap: `https://thrivingmindz.org/sitemap.xml`
5. Google will start indexing your pages within 1-4 weeks

### Step 6: Set Up Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for thrivingmindz.org
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to `app/layout.js` (Google Analytics script tag)

### Step 7: Apply for Google Ad Grant

1. Register at [google.com/nonprofits](https://www.google.com/nonprofits/)
2. Verify your 501(c)(3) status (EIN: 84-1820560)
3. Apply for Google Ad Grant — **$10,000/month in free Google Ads**
4. Use keywords from our SEO strategy to drive traffic

---

## 📁 Project Structure

```
thrivingmindz-site/
├── app/
│   ├── layout.js          # Root layout with SEO metadata + structured data
│   ├── page.js            # Home page (Frisco-first messaging)
│   ├── globals.css        # Global styles
│   ├── sitemap.js         # Dynamic sitemap for Google
│   ├── robots.js          # Robots.txt
│   ├── blog/
│   │   ├── page.js        # Blog listing page
│   │   └── [slug]/
│   │       ├── page.js    # Dynamic blog post (SEO metadata per post)
│   │       └── BlogPostClient.js
│   ├── programs/           # TODO: Programs page
│   ├── events/             # TODO: Events page
│   ├── involved/           # TODO: Get Involved page
│   └── contact/            # TODO: Contact page
├── components/
│   ├── Nav.js             # Navigation
│   ├── Footer.js          # Footer with crisis resources
│   └── RegisterModal.js   # Registration flow (student/pro/parent/school)
├── content/
│   └── blog/
│       └── posts.js       # All blog posts + expansion zones data
├── package.json
├── next.config.js
└── README.md
```

## 🎯 Frisco-First Expansion Strategy

| Phase | Area | Timeline | Districts |
|-------|------|----------|-----------|
| 1 | Frisco + Prosper | Months 1-3 | Frisco ISD, Prosper ISD |
| 2 | Collin County | Months 4-6 | + McKinney, Allen, Plano, Celina |
| 3 | North DFW | Months 7-9 | + Little Elm, Denton, Lewisville, The Colony |
| 4 | Full DFW | Months 10-12 | + Dallas, Fort Worth, Richardson, Garland, Arlington |

## 📝 SEO Content Calendar

- **Week 1**: Publish "Free Mental Health Resources for Teens in Frisco & DFW"
- **Week 2**: Publish "How to Deal with Depression as a Teenager"
- **Week 3**: Publish "How to Help a Friend with Depression"
- **Week 4**: Publish "5 Signs Your Teen Has Anxiety" + "School Mental Health Careers"
- **Ongoing**: 2-4 new posts per month, each generating 10-15 social media pieces

## 🔧 Future Additions

- [ ] Stripe donation integration (recurring giving)
- [ ] Supabase database for registration storage
- [ ] Automated welcome emails via Mailchimp
- [ ] Event RSVP system
- [ ] Self-assessment tools (PHQ-9, GAD-7 for teens)
- [ ] AI chat resource finder (leveraging ThrivingCare tech)
- [ ] Programs, Events, Get Involved, Contact pages
- [ ] Google Business Profile for local SEO

## 📞 Contact

- Email: thrivingmindz@gmail.com
- Phone: (214) 529-6208
- Instagram: @thrivingmindz
- EIN: 84-1820560
