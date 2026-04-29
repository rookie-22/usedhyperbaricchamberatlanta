# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Static deliverable: `static-site/`

Self-contained, drag-and-drop static version of the Atlanta hyperbaric chamber landing page (no React, no build step). Drop the entire folder into Cloudflare Pages, Netlify, GitHub Pages, S3, or any static host.

- `index.html` — single self-contained page (Tailwind via CDN, Google Fonts, vanilla JS for sticky header / FAQ accordion / Formspree submit / toasts)
- `assets/` — 12 product images (jpeg/jpg/png)
- SEO files at root: `favicon.svg`, `opengraph.jpg`, `robots.txt`, `sitemap.xml`, `llms.txt`, `_headers`, `_redirects`
- Formspree form ID: `mvzdebgl`; alternate contact: linkedin.com/in/stevenstucker (in header-adjacent owner card, contact section, footer, AI quick-facts block, and Product/WebSite/FAQ JSON-LD)
- All 5 JSON-LD blocks (Product, FAQPage, WebSite, Place, BreadcrumbList) and the screen-reader AI quick-facts block from the React version are preserved.
