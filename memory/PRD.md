# SAKSAE - Product Requirements Document

## Original Problem Statement
Site vitrine SaaS B2B premium pour SAKSAE - AI-powered Business Execution System.
Redesign complet style Attio : minimaliste, noir/blanc/gris, icônes ligne fine.

## Design Direction (Attio-inspired)
- **Colors**: Black (#0A0A0A), White (#FAFAFA), Grey (#6B7280, #E5E7EB)
- **Typography**: Inter font, fine weights, tight tracking
- **Background**: Dotted grid pattern, subtle
- **Icons**: Line style (strokeWidth 1.5)
- **Sections**: Numbered [01], [02], etc.
- **Cards**: Minimal borders, hover states

## Architecture

### Backend (FastAPI + MongoDB)
- JWT Authentication with httpOnly cookies
- Brute force protection
- Endpoints: auth, leads, roi-calculations, contact, newsletter

### Frontend (React + Tailwind + Framer Motion)
- **Pages**: Landing, Login, Register
- **Landing Sections**:
  1. Header (minimal nav, language switcher)
  2. Hero (big headline, product preview)
  3. [01] Platform - 8 module cards
  4. [02] IA Onboarding - Smart data import
  5. [03] AI - Action feed with impact values
  6. Testimonial - Fade effect quote
  7. [04] Pricing - 3 tiers
  8. CTA Final
  9. Footer

## What's Been Implemented (2026-04-08)
- ✅ Complete redesign Attio-style
- ✅ New IA Onboarding section with smart import
- ✅ Minimal black/white design
- ✅ Dotted grid backgrounds
- ✅ Numbered sections [01][02][03][04]
- ✅ Line icons throughout
- ✅ JWT Authentication
- ✅ Multilingue FR/EN
- ✅ All backend APIs working

## MOCKED
- SendGrid (logs to console)

## Next Tasks
1. Connect real SendGrid API
2. Set actual Calendly URL for demos
3. Add more testimonials
4. Build user dashboard
