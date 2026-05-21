# FUEGO ERRANTE — Official Website

Ultra-premium single-page official website and merch store for the Latin Rock Cowboy band FUEGO ERRANTE, blending western rock with Colombian roots (cumbia, bullarengue) and social activism.

## Run & Operate

- `pnpm --filter @workspace/fuego-errante run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion
- Fonts: Rye (headings), Special Elite (body) — via Google Fonts
- UI: shadcn/ui components, Radix UI
- Routing: wouter (single-page, single route)
- No backend required — all state is client-side

## Where things live

- `artifacts/fuego-errante/src/pages/Home.tsx` — main single-page layout (all 5 sections)
- `artifacts/fuego-errante/src/components/` — Nav, Hero, Band, Merch, Tour, Footer, CartDrawer, TicketModal
- `artifacts/fuego-errante/src/context/CartContext.tsx` — shopping cart global state
- `artifacts/fuego-errante/src/index.css` — brand theme, Google Fonts imports, CSS variables
- `attached_assets/` — reference design images and brand manual PDF

## Brand Colors

- `#1A1A1A` Black Polvo — background
- `#A31621` Rojo Fuego — primary accent, buttons, glows
- `#EAE0D5` Blanco Sucio — main text
- `#B0813D` Dorado Bronce — subtitles, borders, price tags

## Product

5 immersive sections on a single scrollable page:
1. **Hero (The Horizon)** — cinematic landing with dust particle animation, red horizon glow, CTA buttons
2. **La Manada** — band member cards with hover-reveal quotes and AI-generated portraits
3. **El Almacén Errante** — premium merch store with cart drawer (Chaqueta, Sombrero, Botas, Guitarra, Souvenirs)
4. **Ruta de Fuego Tour** — countdown timer to next show + tour dates table with ticket purchase modal
5. **El Pacto** — newsletter signup + social links footer

## User preferences

- Language: Spanish UI copy throughout
- Brand-strict: Always use exact hex colors (#1A1A1A, #A31621, #EAE0D5, #B0813D)
- Typography: Rye for headings, Special Elite for body/nav
- No emojis in UI
- Dark theme only

## Gotchas

- Google Fonts `@import url(...)` MUST be the very first line in `index.css` — PostCSS fails silently otherwise
- All cart and ticket state is local React state (no backend)
- Images generated via AI and embedded directly — no external placeholder services

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
