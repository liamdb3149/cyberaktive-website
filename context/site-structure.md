# Site Structure

## Pages & Routes

| Route | Page Component | Description |
|-------|---------------|-------------|
| `/` | `landing.tsx` | Main landing page - hero, urgency ticker, service cards, CTA sections |
| `/ai-consulting-development-legal` | `home.tsx` | AI consulting for legal industry |
| `/property-management` | `property-management.tsx` | Property management AI solutions |
| `/calc-Contract-Review-Automation` | `contract-review-calculator.tsx` | Contract review ROI calculator |
| `/ai-pilot-scorecard-law-firm` | `ai-pilot-scorecard.tsx` | AI pilot scorecard tool |
| `/diy-legal-copilot-roadmap` | `diy-legal-copilot-roadmap.tsx` | DIY legal copilot roadmap |
| `/ai-strategy-assessment` | `ai-strategy-assessment.tsx` | AI strategy assessment tool |
| `/legal-ai-prompt-library` | `legal-ai-prompt-library.tsx` | Legal AI prompt library |
| `/ai-malpractice-risk-calculator` | `ai-malpractice-calculator.tsx` | AI malpractice risk calculator |
| `/legal-ai-workshops` | `legal-ai-workshops.tsx` | Legal AI workshops page |
| `/legal-skill-creator` | `legal-skill-creator.tsx` | Legal Skill Creator download page (GHL gated, tag: Skill Creator V1) |
| `/ai-consulting-and-development-saas-software` | SaaS landing page |

## Layout Components
- `client/src/components/layout/header.tsx` - Site header/navigation
- `client/src/components/layout/footer.tsx` - Site footer

## Landing Page Sections (in order)
1. Hero section (pink/purple gradient)
2. Urgency ticker (rotating statements)
3. Service offering cards (Legal AI / SaaS)
4. **YouTube video showcase** (in progress)
5. Process section
6. Results section
7. Risk reversal / CTA sections

## Component Organization
- `components/sections/` - Page section components (hero, problem, solution, etc.)
- `components/ui/` - Base UI primitives (shadcn/Radix)
- `components/scorecard/` - Scorecard-specific components
- `components/ai-malpractice-calculator/` - Calculator components
