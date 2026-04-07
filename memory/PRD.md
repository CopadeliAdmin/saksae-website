# SAKSAE - Product Requirements Document

## Original Problem Statement
Site vitrine SaaS B2B premium pour SAKSAE - AI-powered Business Execution System.
- Site 1 page multilingue (FR/EN)
- CTAs Demo → calendrier sales
- CTAs 15 jours d'essai → inscription plateforme
- JWT Authentication
- SendGrid MOCKÉ pour l'instant

## Architecture

### Backend (FastAPI + MongoDB)
- **Auth**: JWT with httpOnly cookies, bcrypt password hashing
- **Endpoints**:
  - `/api/auth/register` - User registration
  - `/api/auth/login` - User login
  - `/api/auth/logout` - Logout
  - `/api/auth/me` - Get current user
  - `/api/auth/refresh` - Refresh token
  - `/api/leads` - Lead capture
  - `/api/roi-calculations` - Save ROI calculations
  - `/api/contact` - Contact form
  - `/api/newsletter` - Newsletter subscription

### Frontend (React + Tailwind + Framer Motion)
- **Pages**:
  - `/` - Landing page
  - `/login` - Login page
  - `/register` - Registration page (15 jours d'essai)

- **Landing Page Sections**:
  1. Header (sticky, language switcher FR/EN)
  2. Hero
  3. Tools (Bento grid - 8 modules)
  4. Cost Calculator (interactive checklist)
  5. ROI Calculator (sliders + count-up)
  6. AI Action Feed
  7. Transformation Before/After
  8. Use Cases (tabs: CEO, Sales, RH, Finance)
  9. Testimonials
  10. Pricing (3 plans)
  11. CTA Final
  12. Footer

## User Personas
1. **CEO/Founder** - Needs strategic overview, data-driven decisions
2. **Sales Manager** - Pipeline automation, lead scoring
3. **HR Director** - Talent management, onboarding
4. **Finance Director** - Invoicing, cash flow tracking

## What's Been Implemented (2026-01-07)
- ✅ Complete landing page with all 12 sections
- ✅ JWT authentication (register, login, logout)
- ✅ Language switcher FR/EN with full translations
- ✅ Interactive Cost Calculator
- ✅ Interactive ROI Calculator with database storage
- ✅ Lead capture form
- ✅ Newsletter subscription
- ✅ Responsive design (mobile-first)
- ✅ Framer Motion animations
- ✅ Premium design following guidelines

## MOCKED
- SendGrid email sending (logs to console)

## Prioritized Backlog

### P0 (Critical)
- None - MVP complete

### P1 (Important)
- Connect SendGrid with real API key
- Update Demo CTA with actual sales calendar URL
- Dashboard page for logged-in users

### P2 (Nice to have)
- Password reset flow
- Email verification
- User profile page
- Analytics dashboard for ROI calculations
- A/B testing on landing page

## Next Tasks
1. Get real SendGrid API key and connect
2. Set up actual Calendly/sales calendar URL
3. Build user dashboard after login
4. Add more testimonials content
5. Implement password reset
