# Tech Stack

## Frontend
- **Framework:** React 18.3.1 (SPA, no SSR)
- **Bundler:** Vite 5.4.19
- **Routing:** Wouter 3.3.5
- **State/Data:** TanStack React Query 5.60.5
- **Styling:** Tailwind CSS 3.4.17 + custom CSS design system
- **UI Components:** Radix UI primitives + shadcn/ui
- **Animations:** Framer Motion 11.13.1
- **Icons:** Lucide React 0.453.0, React Icons 5.4.0
- **Forms:** React Hook Form 7.55 + Zod validation
- **Charts:** Recharts 2.15.4
- **Carousel:** Embla Carousel React 8.6.0

## Backend
- **Runtime:** Node.js (use LTS 22)
- **Framework:** Express 4.21.2
- **Language:** TypeScript 5.6.3
- **Validation:** Zod 3.24.2
- **Database:** Drizzle ORM 0.39.1 + Neon (PostgreSQL serverless)
- **Dev server:** tsx 4.19.1

## Build
- `npm run dev` - Development server (tsx + Vite)
- `npm run build` - Production build (Vite frontend + esbuild backend)
- `npm run start` - Serve production build
- `npm run check` - TypeScript type checking
- Default port: 5000

## Key Patterns
- Path alias `@/` maps to `client/src/`
- shadcn components in `client/src/components/ui/`
- Section components in `client/src/components/sections/`
- Pages in `client/src/pages/`
