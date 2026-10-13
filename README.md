# R. Siraddeen — Founder Website

Marketing website and product landing page for **Freelance Agency CRM** (in active development at V20.7 for `crm.siraddeen.in`).

- **Production URL**: https://siraddeen.in/
- **Hosting**: Netlify (connected to GitHub)
- **Stack**: React 18, Vite 5 (multi-page entry), Tailwind CSS 3

## Public Pages

1. **Homepage** (`/`): Founder background, interactive screenshot demo frames, core features, honest status roadmap, other software projects, and pilot intake.
2. **For Freelance Agencies** (`/for-freelance-agencies/`): Deep dive into agency workflow pain points (lead capture, proposal kanban, itemized invoicing) and the pilot program.
3. **Building in Public** (`/building-in-public/`): Technical journal detailing verified architectural modules (pipeline, billing, workspace multi-tenancy, background queues, public API) and pre-launch status.
4. **404 Page** (`/404.html`): Branded error document returning HTTP 404 on unmatched paths with `noindex` directive and navigation recovery links.

## Local Development

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Form Handling

Pilot applications are handled via **Netlify Forms** (`name="pilot-interest"`):
- Pre-rendered static HTML form definition in entry pages for build-time detection.
- Accessible client-side React submission via URL-encoded `fetch` with field validation and honeypot spam protection.
- Accessible error handling with direct `mailto:` fallback to `siraddeen15@gmail.com`.

## Routing & SEO

- Multi-page HTML architecture produces direct indexable files in `dist/`.
- `netlify.toml` redirects unmatched paths to `/404.html` with an HTTP 404 status.
- Canonical HTTPS URLs declared on each indexable page.
- Structured data: Person, WebSite, and SoftwareApplication on the homepage; WebPage schema on subpages.
