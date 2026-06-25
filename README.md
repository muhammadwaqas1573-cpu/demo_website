# FinovoHQ Website

A modern, premium single-page SaaS landing page for FinovoHQ — financial management for US trucking and logistics companies.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** — styling & responsive design
- **Framer Motion** — scroll reveals, counters, page loader
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy on Netlify

This project is configured for Netlify out of the box via `netlify.toml`.

### Option 1: Git-based deploy (recommended)

1. Push this repo to GitHub, GitLab, or Bitbucket.
2. In [Netlify](https://app.netlify.com), click **Add new site → Import an existing project**.
3. Connect your repo — Netlify will auto-detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.

### Option 2: Drag & drop

```bash
npm run build
```

Then drag the `dist` folder into the Netlify deploy drop zone.

### Option 3: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Sections

- Sticky navigation with mobile menu
- Hero with glassmorphism assessment form
- Services (6 cards)
- Why Choose Us with animated statistics
- How It Works process steps
- Testimonials
- CTA banner
- Contact information
- Footer with 4 columns

## Design

- Colors: Navy `#04152D`, Electric Blue `#2563EB`
- Font: Inter (Google Fonts)
- Fully responsive (mobile, tablet, desktop)
