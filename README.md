# Founder page (React + Vite + Tailwind)

## Run locally
    npm install
    npm run dev

## Edit content
All text, links, and the sample board live in `src/site.js`. Change the product name there.

## Deploy on Netlify
1. Push this folder to a GitHub repo.
2. Netlify > Add new site > Import from Git. Build settings come from `netlify.toml` (build: `npm run build`, publish: `dist`).
3. Site settings > Domain management > Add `siraddeen.in`, then add the DNS records Netlify shows at your domain registrar.
