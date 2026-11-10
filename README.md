# REDLINE PAGES — Starter Website

A responsive, dark editorial landing page for an independent Indian motorcycle publication.

## What's included
- `index.html` — homepage structure and metadata
- `styles.css` — responsive editorial design
- `script.js` — story cards, category filters, mobile navigation and demo newsletter form

## Run locally
Open `index.html` in a browser. For a local server, run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy free with Cloudflare Pages
1. Create a GitHub repository and upload these three files.
2. In Cloudflare, open Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Choose no framework / static HTML. Leave build command empty; set output directory to `/`.
5. Deploy.

## Before public launch
- Confirm brand name, trademark and domain availability. The name in this starter is a working brand direction, not legal clearance.
- Replace demo article cards with researched, fact-checked articles.
- Replace placeholder imagery with original, licensed or properly permissioned images.
- Connect a real newsletter provider before collecting emails. The current form does not store or transmit addresses.
- Add privacy, editorial policy, contact details and image credits.
- Add real article pages, sitemap.xml, robots.txt, Open Graph images and analytics.

## Editorial principles
- Attribute facts and quote sources.
- Verify prices, specifications, launch dates and availability against manufacturer or primary sources.
- Label opinions, first-hand riding impressions and sponsored content clearly.
- Never publish AI-generated claims without human verification.
