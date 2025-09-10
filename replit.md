# Cyberaktive - Property Management AI Workflow Automations

## Overview

Cyberaktive is a landing page and marketing website designed to promote AI workflow automation services specifically for property management companies. The application targets the $134.2B property management market by offering custom AI solutions that help firms handle 50% more clients with existing staff while increasing profit margins from single to double digits. The site focuses on conversion optimization with strategic messaging around eliminating manual tasks, reducing operational costs, and providing 24/7 automated systems.

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
- **SEO Optimization**: Meta tags, Open Graph, and Twitter Card implementations for social sharing
- **Performance**: Preloaded fonts and optimized asset loading for conversion rate optimization

### UI Component Dependencies
- **Radix UI**: Comprehensive primitive components for accessibility and functionality
- **React Hook Form**: Form state management with validation integration
- **Class Variance Authority**: Type-safe component variant management
- **Embla Carousel**: Responsive carousel functionality for content sections