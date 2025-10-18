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
- **Search Console Ready**: Created XML sitemap and robots.txt
- **Server Routes**: Added explicit routes in server/routes.ts to serve /robots.txt and /sitemap.xml with correct MIME types

### Navigation Updates
- Removed "Property Management" links from header (desktop and mobile menus)
- Removed "Property Management" link from footer Quick Links
- Updated footer description to reference "law firms" instead of "Property Management firms"
- Streamlined navigation to focus on primary CTA ("Book Free Audit")

### UI Component Dependencies
- **Radix UI**: Comprehensive primitive components for accessibility and functionality
- **React Hook Form**: Form state management with validation integration
- **Class Variance Authority**: Type-safe component variant management
- **Embla Carousel**: Responsive carousel functionality for content sections