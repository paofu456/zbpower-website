# ZBPOWER Website

Company website for Shenzhen ZBPOWER Technology Co., Ltd., built with Astro, Tailwind CSS and TypeScript.

## Development

```bash
npm ci --include=optional
npm run dev
npm run build
npm run verify
```

## Deployment

The site is configured as a static Cloudflare Worker in `wrangler.json`. The production branch is `main`; pushes to that branch trigger Cloudflare Workers Builds.

## Content

- Public company facts and contact details: `src/data/company.json`
- Product platform content: `src/content/products/`
- Public media: `public/media/`

Private source materials and working notes are excluded from this repository.
