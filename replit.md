# Cyberaktive - Legal AI Consulting & Automation Services

## Overview

Cyberaktive is a landing page and marketing website designed to promote AI consulting and automation services specifically for law firms. The application helps legal practices implement AI strategically where it adds real value, with emphasis on measurable ROI and practical recommendations rather than technology sales. The site focuses on conversion optimization with strategic messaging around reducing routine work, increasing billable hours, and delivering more value to clients through intelligent automation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with support for multiple pages
- **Styling**: Tailwind CSS with a comprehensive design system using CSS custom properties
- **UI Components**: Shadcn/ui component library providing consistent, accessible components
- **State Management**: React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development Setup**: Vite middleware integration for hot module replacement
- **API Structure**: RESTful endpoints with proper error handling and validation
- **Static Serving**: Production-ready static file serving with build optimization

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Fallback Storage**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication ready for implementation
- **Middleware**: Express session handling with proper security configurations

### Contact and Lead Management
- **Contact Form**: Validated contact form submission endpoint with Zod schema validation
- **Lead Capture**: Form data collection with plans for CRM integration and email notifications
- **Error Handling**: Comprehensive error handling with user-friendly feedback

## External Dependencies

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **GoHighLevel**: Calendar booking widget integration (placeholder implemented for future integration)
- **Email Service**: Planned integration for contact form notifications and auto-responses

### Development Tools
- **Replit Integration**: Development environment optimizations including error overlay and cartographer plugin
- **Google Fonts**: Inter font family for consistent typography
- **Lucide React**: Icon library for consistent iconography across the application

### Analytics and Marketing
- **Google Tag Manager**: Placeholder implementation for conversion tracking
- **SEO Optimization**: Comprehensive SEO implementation including:
  - Primary keywords: "AI for law firms", "legal AI consulting", "law firm automation"
  - Meta tags with law firm-focused descriptions
  - Open Graph and Twitter Card implementations for social sharing
  - JSON-LD structured data (ProfessionalService, Service, FAQPage schemas)
  - XML sitemap at /sitemap.xml for search engine indexing
  - robots.txt at /robots.txt for crawler directives
- **Performance**: Preloaded fonts and optimized asset loading for conversion rate optimization

## Recent Changes (October 2025)

### Content Transformation
- Converted all homepage content from property management to law firm AI consulting focus
- Updated all 10 homepage sections with legal industry messaging
- Removed all property management references from navigation and footer

### SEO Implementation
- **Keyword Research**: Targeted "AI for law firms", "legal AI consulting", "law firm automation", "AI implementation for attorneys"
- **Meta Tags**: Updated title, description, keywords, canonical URL
- **Structured Data**: Implemented JSON-LD schemas for Organization, Service, and FAQ
- **Search Console Ready**: Created XML sitemap and robots.txt with correct domain (cyberaktiveai.com)
- **Server Routes**: Added explicit routes in server/routes.ts to serve /robots.txt and /sitemap.xml with correct MIME types
- **Domain Configuration**: All SEO URLs updated to use cyberaktiveai.com (non-www version) for canonical indexing

### Conversion Optimization Updates (October 19, 2025)
- **Hero Section**: Updated subheading to highlight specific ROI metrics: "Reduce intake time by 60% and increase billable hours by 20% with proven AI automation"
- **Urgency Messaging**: Added header banner with limited availability message to drive immediate action
- **CTA Enhancement**: Updated all booking buttons to "Book Your ROI Assessment (15 min)" for clearer value proposition
- **Service Benefits**: Replaced generic benefits with specific, measurable outcomes:
  - "Cut document review time by 70%"
  - "Capture 20% more billable hours automatically"
  - "Reduce billing errors by 25%"
- **Results Section**: Added client metrics showcase (35% workflow efficiency, 25% fewer missed deadlines, 58% better lead capture)
- **Urgency Drivers**: Added competitive urgency messaging near testimonials
- **Team Credibility**: Added ROI achievement metric to founder bio (300% ROI within 8 months)
- **Footer CTA**: Added cost-awareness message about daily automation losses

### ROI Calculators Feature (October 19, 2025)
- **Interactive Tools**: Built 5 comprehensive ROI calculators based on real industry data:
  1. **Client Intake Automation**: Calculates savings from 60% time reduction and 58% lead capture improvement
  2. **Time Tracking & Billing**: Shows revenue recovery from 20% more captured hours and 25% billing error reduction
  3. **Document Automation**: Demonstrates savings from 70% reduction in document review time
  4. **Legal Research Automation**: Calculates capacity gains from 60% research time reduction
  5. **Workflow Efficiency**: Shows impact of 35% efficiency improvement and 25% fewer missed deadlines
- **Chrome-Style Tab Navigation**: Implemented browser-inspired tabbed interface for easy switching between calculators
- **Real-Time Calculations**: All calculators provide instant, accurate ROI projections based on user inputs
- **Strategic Placement**: Positioned above "Results That Matter" section to drive engagement before testimonials
- **Data-Driven Logic**: Each calculator uses validated research data to ensure realistic, achievable projections

### Navigation Updates
- Removed "Property Management" links from header (desktop and mobile menus)
- Removed "Property Management" link from footer Quick Links
- Updated footer description to reference "law firms" instead of "Property Management firms"
- Streamlined navigation to focus on primary CTA with enhanced urgency messaging

### UI Component Dependencies
- **Radix UI**: Comprehensive primitive components for accessibility and functionality
- **React Hook Form**: Form state management with validation integration
- **Class Variance Authority**: Type-safe component variant management
- **Embla Carousel**: Responsive carousel functionality for content sections