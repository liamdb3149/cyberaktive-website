# Cyberaktive - Legal AI Consulting & Automation Services

## Overview
Cyberaktive is a landing page and marketing website offering AI consulting and automation services specifically for law firms. The platform aims to help legal practices strategically implement AI to achieve measurable ROI, reduce routine work, increase billable hours, and enhance client value. Key features include conversion-optimized messaging, interactive ROI calculators, and an AI pilot scorecard application for tracking AI implementation.

## User Preferences
Preferred communication style: Simple, everyday language.
Target audience: Legal teams (both law firms and in-house legal departments) - messaging uses "legal teams" terminology to be inclusive of in-house counsel.

## System Architecture

### Frontend
- **Framework**: React with TypeScript (Vite)
- **Routing**: Wouter
- **Styling**: Tailwind CSS, Shadcn/ui for components
- **State Management**: React Query
- **Form Handling**: React Hook Form with Zod validation
- **UI/UX**: Legal industry color scheme (blue/gray gradients), responsive grid layouts, Chrome-style tab navigation, data visualizations with Recharts, Lucide React for iconography, Inter font.

### Backend
- **Server**: Express.js with TypeScript
- **API**: RESTful endpoints with error handling and Zod validation
- **Development**: Vite middleware for HMR
- **Static Serving**: Production-ready static file serving

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM (Neon Database for cloud hosting)
- **Schema Management**: Drizzle Kit
- **Session Management**: PostgreSQL-based session storage (connect-pg-simple)
- **Client-Side Data**: Browser localStorage for privacy-first applications (e.g., AI Pilot Scorecard)

### Core Features
- **Contact & Lead Management**: Validated contact form, lead capture.
- **SEO Optimization**: Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD (ProfessionalService, Service, FAQPage), XML sitemap, robots.txt, keyword targeting ("AI for law firms", "legal AI consulting").
- **Conversion Optimization**: Strategic CTAs, urgency messaging, tailored service benefits, client metrics, ROI calculators.
- **Hero Section**: Results-focused messaging with guarantee-first positioning. Headline: "Turn Your Law Firm's Busywork Into Billable Hours—Guaranteed in 90 Days". Key differentiators emphasize "in the weeds" implementation approach (developers ARE consultants), 90-day ROI vs strategy reports, and platform independence. Features problem awareness strip, 3 differentiator cards, social proof metrics ($150K+ savings, 75%+ adoption, 90-day implementation, 12+ law firms), and risk reversal (90-day money-back guarantee).
- **Interactive ROI Calculators**: Five calculators (Client Intake, Time Tracking, Document Automation, Legal Research, Workflow Efficiency) and a dedicated Contract Review Automation calculator, providing real-time ROI projections.
- **AI Pilot Scorecard**: Comprehensive application for tracking 8-week AI implementation pilots, including project setup, weekly tracking, automated ROI calculation, partner presentation generation, and a benchmark database.
- **AI Strategy Assessment (Lead Magnet)**: Gated decision matrix tool at /ai-strategy-assessment with 12-question assessment across 6 steps. Provides personalized recommendation (LLM-First vs Specialist vs Hybrid) with weighted scoring logic, rationale, privacy checklist, and 30-day action plan. Features backdrop-blur gating with GoHighLevel form integration, localStorage persistence, SEO optimization for "AI strategy assessment for law firms" keywords.
- **DIY Legal Copilot Roadmap (Lead Magnet)**: Gated content landing page at /diy-legal-copilot-roadmap offering free technical blueprint to build Harvey-class legal AI for $15K vs $300K. Features GoHighLevel form integration, content gating with preview teaser, localStorage-based unlock state, SEO-optimized for "DIY legal copilot" keywords. Includes value proposition cards, feature checklist, disclaimer section, and post-submission CTA to book consultation.
- **Free Tools Section**: Footer navigation linking all lead magnets (AI Strategy Assessment, DIY Legal Copilot Roadmap, AI Pilot Scorecard, ROI Calculators) for easy access across site.

## External Dependencies

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting.
- **GoHighLevel**: Calendar booking widget integration.
- **Email Service**: Planned for notifications and auto-responses.

### Development Tools
- **Replit Integration**: Development environment optimizations.
- **Google Fonts**: Inter font family.
- **Lucide React**: Icon library.
- **Radix UI**: Primitive components for accessibility.
- **Embla Carousel**: Carousel functionality.

### Analytics and Marketing
- **Google Tag Manager**: Placeholder for conversion tracking.