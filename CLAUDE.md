# Cyberaktive Website

Cyberaktive's marketing and tools website - a full-stack React SPA with Express backend serving landing pages, interactive calculators, and AI consulting tool pages for legal and property management industries.

## Rules

1. Read files before changing them - understand existing code first
2. One change at a time - implement, test, commit
3. Never declare a task complete without testing (run dev server, verify in browser)
4. Diagnose bugs before fixing - add logging first, read output, then fix
5. All files go in THIS project directory - never clone/save elsewhere
6. Use existing design system (Tailwind + Radix/shadcn + Framer Motion)
7. Match existing component patterns in `client/src/components/sections/`
8. Keep Express routes in `server/routes.ts` - don't create new route files
9. Test responsive layouts at mobile and desktop breakpoints
10. No em dashes in any generated copy or content

## Commands

- `/prime` - Load session context and status
- `/sesh` - End-of-session close-out
- `/audit` - Code health check
- `/spec` - Create feature specification before building
- `/build-asset-cyberaktive` - Build production tool page from asset brief

## Context Files

| File | Read When |
|------|-----------|
| `context/tech-stack.md` | Setting up dev environment or adding dependencies |
| `context/api-reference.md` | Adding or modifying API endpoints |
| `context/site-structure.md` | Adding pages, changing navigation, or routing |
| `context/coding-standards.md` | Writing new components or reviewing code |
| `context/decisions.md` | Before re-asking a question that may be settled |
| `STATUS.md` | At session start (loaded by /prime) |
| `TODO.md` | When prioritizing work |

## Status

Project initialized. YouTube video showcase section in progress (started Feb 25).
