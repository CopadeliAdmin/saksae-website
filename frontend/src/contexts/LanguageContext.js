import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  fr: {
    // Header
    nav: {
      tools: 'Outils',
      pricing: 'Tarifs',
      useCases: 'Cas d\'usage',
      demo: 'Démo',
      login: 'Connexion',
      trial: '15 jours gratuits'
    },
    // Hero
    hero: {
      headline: 'Centralisez vos outils. Activez vos données. Générez du revenu.',
      subheadline: 'CRM, projets, finance, réunions et communications réunis dans un seul système qui transforme vos données en actions concrètes.',
      ctaRoi: 'Calculer mon ROI',
      ctaDemo: 'Voir une démo'
    },
    // Tools
    tools: {
      title: 'Tous vos outils. Une seule source de vérité.',
      description: 'Chaque outil isolé crée de la donnée inutilisée. SAKSAE les réunit pour produire une donnée unifiée.',
      punchline: 'Moins d\'outils. Plus de données utiles. Plus d\'actions.',
      cta: 'Combien cette centralisation peut vous rapporter ?',
      modules: {
        crm: { name: 'CRM', desc: 'Gestion des relations clients' },
        projects: { name: 'Projets', desc: 'Gestion de projets intégrée' },
        playbooks: { name: 'Playbooks', desc: 'Processus automatisés' },
        signatures: { name: 'Signatures', desc: 'Signatures électroniques' },
        calendar: { name: 'Calendrier', desc: 'Planification intelligente' },
        finance: { name: 'Finance', desc: 'Gestion financière' },
        meetings: { name: 'Réunions IA', desc: 'Réunions assistées par IA' },
        memos: { name: 'Mémos vocaux', desc: 'Notes vocales transcrites' }
      }
    },
    // Cost Calculator
    cost: {
      title: 'Combien vous coûtent vraiment vos outils ?',
      subtitle: 'Et ces outils ne communiquent pas entre eux.',
      total: 'Coût mensuel total',
      saksaePrice: 'Avec SAKSAE',
      savings: 'Économies mensuelles',
      transition: 'SAKSAE transforme ces données en actions concrètes.',
      cta: 'Voir combien ces données peuvent vous rapporter'
    },
    // ROI Calculator
    roi: {
      title: 'Combien vos données peuvent vous rapporter ?',
      employees: 'Nombre d\'employés',
      actionsPerDay: 'Actions par jour',
      timePerAction: 'Minutes par action',
      valuePerAction: 'Valeur par action (€)',
      conversionRate: 'Taux de conversion (%)',
      monthlyRevenue: 'Revenu mensuel généré',
      annualRevenue: 'Revenu annuel généré',
      cta: 'Recevoir mon plan d\'actions personnalisé'
    },
    // AI Feed
    aiFeed: {
      title: 'Chaque jour, SAKSAE vous dit quoi faire.',
      subtitle: 'L\'IA qui agit, pas qui suggère',
      actionsToday: 'Actions aujourd\'hui',
      valueGenerated: 'Valeur générée',
      execute: 'Exécuter',
      actions: [
        { action: 'Relance client envoyée', context: 'Devis #1234 sans réponse depuis 5 jours', impact: 2500, priority: 'high' },
        { action: 'Réunion préparée', context: 'Brief automatique pour call avec Acme Corp', impact: 1200, priority: 'medium' },
        { action: 'Facture générée', context: 'Projet terminé - Client: TechStart', impact: 8500, priority: 'high' },
        { action: 'Lead qualifié', context: 'Score 85/100 - Prêt pour contact commercial', impact: 3200, priority: 'high' }
      ]
    },
    // Transform
    transform: {
      title: 'La transformation que vous méritez',
      before: 'Avant',
      after: 'Après',
      beforeItems: ['Outils dispersés', 'Données fragmentées', 'Actions manuelles', 'Opportunités perdues'],
      afterItems: ['Plateforme unifiée', 'Données centralisées', 'Actions automatisées', 'Revenus maximisés']
    },
    // Use Cases
    useCases: {
      title: 'Adapté à chaque rôle',
      roles: {
        ceo: {
          name: 'CEO',
          title: 'Vision stratégique',
          benefits: ['Vue 360° sur l\'entreprise', 'Décisions basées sur les données', 'Prévisions financières en temps réel', 'Alertes prioritaires']
        },
        sales: {
          name: 'Sales',
          title: 'Performance commerciale',
          benefits: ['Pipeline automatisé', 'Relances intelligentes', 'Scoring des leads', 'Forecasting précis']
        },
        hr: {
          name: 'RH',
          title: 'Gestion des talents',
          benefits: ['Onboarding automatisé', 'Suivi des objectifs', 'Feedback continu', 'Analytics RH']
        },
        finance: {
          name: 'Finance',
          title: 'Maîtrise financière',
          benefits: ['Facturation automatique', 'Suivi de trésorerie', 'Reporting temps réel', 'Conformité simplifiée']
        }
      }
    },
    // Testimonials
    testimonials: {
      title: 'Ils font confiance à SAKSAE',
      items: [
        { quote: 'SAKSAE a transformé notre façon de travailler. Nos revenus ont augmenté de 40% en 6 mois.', name: 'Jean Dupont', role: 'CEO, TechStart' },
        { quote: 'Enfin une solution qui centralise tout. Plus de perte de données, plus d\'opportunités manquées.', name: 'Marie Curie', role: 'Directrice RH, InnovaGroup' }
      ]
    },
    // Pricing
    pricing: {
      title: 'Tarification simple et transparente',
      subtitle: 'Tout inclus. Pas de surprises.',
      perUser: 'par utilisateur/mois',
      features: 'Fonctionnalités incluses',
      cta: 'Démarrer l\'essai gratuit',
      plans: {
        starter: { name: 'Starter', price: 29, desc: 'Pour les petites équipes' },
        pro: { name: 'Pro', price: 79, desc: 'Pour les entreprises en croissance', popular: true },
        enterprise: { name: 'Enterprise', price: 'Sur mesure', desc: 'Solutions personnalisées' }
      },
      allFeatures: ['CRM complet', 'Gestion de projets', 'Calendrier intelligent', 'Finance intégrée', 'Réunions IA', 'Support prioritaire']
    },
    // CTA
    cta: {
      title: 'Prêt à générer plus de revenus ?',
      subtitle: 'Découvrez combien SAKSAE peut générer pour votre entreprise',
      button: 'Commencer mon essai gratuit',
      noCard: 'Pas de carte bancaire requise'
    },
    // Footer
    footer: {
      tagline: 'Centraliser → Activer → Générer',
      product: 'Produit',
      company: 'Entreprise',
      legal: 'Légal',
      rights: 'Tous droits réservés'
    },
    // Auth
    auth: {
      login: 'Connexion',
      register: 'Inscription',
      email: 'Email',
      password: 'Mot de passe',
      name: 'Nom complet',
      company: 'Entreprise',
      loginButton: 'Se connecter',
      registerButton: 'Créer un compte',
      noAccount: 'Pas de compte ?',
      hasAccount: 'Déjà un compte ?',
      signUp: 'S\'inscrire',
      signIn: 'Se connecter',
      trial: 'Commencez votre essai gratuit de 15 jours'
    }
  },
  en: {
    // Header
    nav: {
      tools: 'Tools',
      pricing: 'Pricing',
      useCases: 'Use Cases',
      demo: 'Demo',
      login: 'Login',
      trial: '15-day free trial'
    },
    // Hero
    hero: {
      headline: 'Centralize your tools. Activate your data. Generate revenue.',
      subheadline: 'CRM, projects, finance, meetings and communications unified in one system that transforms your data into concrete actions.',
      ctaRoi: 'Calculate my ROI',
      ctaDemo: 'See a demo'
    },
    // Tools
    tools: {
      title: 'All your tools. One single source of truth.',
      description: 'Each isolated tool creates unused data. SAKSAE unifies them to produce unified data.',
      punchline: 'Fewer tools. More useful data. More actions.',
      cta: 'How much can this centralization bring you?',
      modules: {
        crm: { name: 'CRM', desc: 'Customer relationship management' },
        projects: { name: 'Projects', desc: 'Integrated project management' },
        playbooks: { name: 'Playbooks', desc: 'Automated processes' },
        signatures: { name: 'Signatures', desc: 'Electronic signatures' },
        calendar: { name: 'Calendar', desc: 'Smart scheduling' },
        finance: { name: 'Finance', desc: 'Financial management' },
        meetings: { name: 'AI Meetings', desc: 'AI-powered meetings' },
        memos: { name: 'Voice Memos', desc: 'Transcribed voice notes' }
      }
    },
    // Cost Calculator
    cost: {
      title: 'How much are your tools really costing you?',
      subtitle: 'And these tools don\'t communicate with each other.',
      total: 'Total monthly cost',
      saksaePrice: 'With SAKSAE',
      savings: 'Monthly savings',
      transition: 'SAKSAE transforms this data into concrete actions.',
      cta: 'See how much this data can bring you'
    },
    // ROI Calculator
    roi: {
      title: 'How much can your data bring you?',
      employees: 'Number of employees',
      actionsPerDay: 'Actions per day',
      timePerAction: 'Minutes per action',
      valuePerAction: 'Value per action (€)',
      conversionRate: 'Conversion rate (%)',
      monthlyRevenue: 'Monthly revenue generated',
      annualRevenue: 'Annual revenue generated',
      cta: 'Receive my personalized action plan'
    },
    // AI Feed
    aiFeed: {
      title: 'Every day, SAKSAE tells you what to do.',
      subtitle: 'AI that acts, not just suggests',
      actionsToday: 'Actions today',
      valueGenerated: 'Value generated',
      execute: 'Execute',
      actions: [
        { action: 'Client follow-up sent', context: 'Quote #1234 unanswered for 5 days', impact: 2500, priority: 'high' },
        { action: 'Meeting prepared', context: 'Automatic brief for call with Acme Corp', impact: 1200, priority: 'medium' },
        { action: 'Invoice generated', context: 'Project completed - Client: TechStart', impact: 8500, priority: 'high' },
        { action: 'Lead qualified', context: 'Score 85/100 - Ready for sales contact', impact: 3200, priority: 'high' }
      ]
    },
    // Transform
    transform: {
      title: 'The transformation you deserve',
      before: 'Before',
      after: 'After',
      beforeItems: ['Scattered tools', 'Fragmented data', 'Manual actions', 'Lost opportunities'],
      afterItems: ['Unified platform', 'Centralized data', 'Automated actions', 'Maximized revenue']
    },
    // Use Cases
    useCases: {
      title: 'Adapted to every role',
      roles: {
        ceo: {
          name: 'CEO',
          title: 'Strategic vision',
          benefits: ['360° company view', 'Data-driven decisions', 'Real-time financial forecasts', 'Priority alerts']
        },
        sales: {
          name: 'Sales',
          title: 'Sales performance',
          benefits: ['Automated pipeline', 'Smart follow-ups', 'Lead scoring', 'Accurate forecasting']
        },
        hr: {
          name: 'HR',
          title: 'Talent management',
          benefits: ['Automated onboarding', 'Goal tracking', 'Continuous feedback', 'HR analytics']
        },
        finance: {
          name: 'Finance',
          title: 'Financial control',
          benefits: ['Automatic invoicing', 'Cash flow tracking', 'Real-time reporting', 'Simplified compliance']
        }
      }
    },
    // Testimonials
    testimonials: {
      title: 'They trust SAKSAE',
      items: [
        { quote: 'SAKSAE transformed the way we work. Our revenue increased by 40% in 6 months.', name: 'Jean Dupont', role: 'CEO, TechStart' },
        { quote: 'Finally a solution that centralizes everything. No more data loss, no more missed opportunities.', name: 'Marie Curie', role: 'HR Director, InnovaGroup' }
      ]
    },
    // Pricing
    pricing: {
      title: 'Simple and transparent pricing',
      subtitle: 'All inclusive. No surprises.',
      perUser: 'per user/month',
      features: 'Features included',
      cta: 'Start free trial',
      plans: {
        starter: { name: 'Starter', price: 29, desc: 'For small teams' },
        pro: { name: 'Pro', price: 79, desc: 'For growing businesses', popular: true },
        enterprise: { name: 'Enterprise', price: 'Custom', desc: 'Customized solutions' }
      },
      allFeatures: ['Complete CRM', 'Project management', 'Smart calendar', 'Integrated finance', 'AI meetings', 'Priority support']
    },
    // CTA
    cta: {
      title: 'Ready to generate more revenue?',
      subtitle: 'Discover how much SAKSAE can generate for your business',
      button: 'Start my free trial',
      noCard: 'No credit card required'
    },
    // Footer
    footer: {
      tagline: 'Centralize → Activate → Generate',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      rights: 'All rights reserved'
    },
    // Auth
    auth: {
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      name: 'Full name',
      company: 'Company',
      loginButton: 'Sign in',
      registerButton: 'Create account',
      noAccount: 'No account?',
      hasAccount: 'Already have an account?',
      signUp: 'Sign up',
      signIn: 'Sign in',
      trial: 'Start your 15-day free trial'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const saved = localStorage.getItem('saksae-lang');
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('saksae-lang', newLang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
