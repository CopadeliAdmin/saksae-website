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

## What's Been Implemented
- ✅ Complete redesign Attio-style (2026-04-08)
- ✅ New IA Onboarding section with smart import
- ✅ Minimal black/white design with dotted grid backgrounds
- ✅ Numbered sections [01][02][03][04][05]
- ✅ Line icons throughout
- ✅ JWT Authentication
- ✅ Multilingue FR/EN
- ✅ All backend APIs working
- ✅ [01] Plateforme unifiée et actionnable - Attio-style tabs détachés, vraie sidebar SAKSAE, mockups par onglet (2026-04-10)
- ✅ [02] Onboarding intelligent - Animated carousel (2026-04-10)
- ✅ [03] Outils IA - Tabbed layout right-aligned header (2026-04-10)
- ✅ [03] Lead Magnet "Calculez vos économies" - Interactive calculator modal (2026-04-10)
- ✅ [04] Intelligence artificielle - Typing animation, 3+3 actions Revenu/Opération, expandable cards with email preview (2026-04-10)
- ✅ [04] Intelligence artificielle - Refactored to 2-column layout matching [02] Onboarding (title/stats left, interactive feed right) (2026-04-22)
- ✅ [05] Tarification - Toggle Mensuel/Annuel, features par plan (2026-04-10)
- ✅ **Premium design overhaul** - Refonte complète direction artistique premium (2026-04-22)
  - Système de design: Inter optimisé, easing premium, transitions 180-240ms, zinc palette
  - Hero: 92vh, signaux ambiants subtils, gradient fade
  - Toutes sections: py-40, max-w-1120px, reveals viewport margin
  - Motion: stagger reveals 400-700ms, hover states 180ms, spring tabs
  - Pricing: toggle premium avec shadow, cards p-7
  - CTA: plus statutaire, footer éditorial
  - Testimonials: 3 cartes quotes éditoriales

## MOCKED
- SendGrid (logs to console)

## Next Tasks (P1/P2)
1. Connect real SendGrid API (P1)
2. Set actual Calendly URL for demos (P2)
3. Add more testimonials (P2)
4. Build user dashboard (P2)
