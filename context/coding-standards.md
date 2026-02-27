# Coding Standards

## File Naming
- Components: kebab-case (`final-cta.tsx`, `risk-reversal.tsx`)
- Pages: kebab-case matching the route concept (`landing.tsx`, `ai-pilot-scorecard.tsx`)
- Utilities: camelCase (`queryClient.ts`, `utils.ts`)

## Component Patterns
- Functional components with arrow functions or function declarations
- Props typed inline or with separate interface
- Use `@/` path alias for imports from `client/src/`
- Framer Motion for scroll-triggered animations
- Tailwind for all styling - no CSS modules or styled-components

## State & Data
- React Query for server state (API calls)
- React state for local UI state
- Zod for form validation (shared between client and server)

## Error Handling
- Express error middleware in `server/index.ts` (JSON format)
- Zod validation errors return 400 with error details
- Server errors return 500 with generic message

## Existing Conventions to Follow
- Section components export a default function
- Multiple variants of sections exist (e.g., `problem.tsx`, `problem-new.tsx`, `problem-fixed.tsx`) - only one is used at a time in the landing page
- Interactive tools/calculators get their own page and route
