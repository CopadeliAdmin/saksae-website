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
- ✅ [01] Plateforme - Redesign style Attio v2 : tabs détachés avec underline animé, vraie sidebar SAKSAE (CRM/Management/Finances/RH/Intelligence), contenu pertinent par onglet (Dashboard KPI, Kanban projets, RH table, Facturation, Produits, Supply) (2026-04-10)
- ✅ [02] Onboarding IA - Animated carousel
- ✅ [03] Intelligence Artificielle section
- ✅ [04] Outils IA - Tabbed layout (Réunion IA, Projet, Calendrier, Playbook, Fiche de paie, Contrats, E-signatures) with right-aligned header (2026-04-10)
- ✅ [04] Lead Magnet "Calculez vos économies" - Interactive calculator modal with tool selection + email capture (2026-04-10)
- ✅ [05] Tarification - Interactive sliders, annual/monthly toggle
- ✅ Testimonials section

## MOCKED
- SendGrid (logs to console)

## Next Tasks (P1/P2)
1. Connect real SendGrid API (P1)
2. Set actual Calendly URL for demos (P2)
3. Add more testimonials (P2)
4. Build user dashboard (P2)
