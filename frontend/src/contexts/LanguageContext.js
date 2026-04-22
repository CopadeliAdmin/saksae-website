import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  fr: {
    nav: {
      platform: 'Plateforme',
      pricing: 'Tarifs',
      customers: 'Clients',
      login: 'Connexion',
      startFree: 'Commencer gratuitement'
    },
    hero: {
      badge: 'Découvrez la plateforme IA',
      headline: 'L\'exécution business réinventée.',
      subheadline: 'SAKSAE est le système d\'exécution IA pour les entreprises ambitieuses.',
      ctaPrimary: 'Commencer gratuitement',
      ctaSecondary: 'Parler aux sales'
    },
    platform: {
      tag: '[01] Plateforme unifiée et actionnable',
      title: 'Tout votre business. Une seule source de vérité.',
      desc: 'Centralisez CRM, projets, finance et communications. Transformez chaque donnée en action concrète.',
      modules: {
        crm: { name: 'CRM', desc: 'Gestion des relations clients' },
        projects: { name: 'Projets', desc: 'Gestion de projets intégrée' },
        playbooks: { name: 'Playbooks', desc: 'Processus automatisés' },
        signatures: { name: 'Signatures', desc: 'Signatures électroniques' },
        calendar: { name: 'Calendrier', desc: 'Planification intelligente' },
        finance: { name: 'Finance', desc: 'Gestion financière' },
        meetings: { name: 'Réunions IA', desc: 'Transcription et résumés' },
        memos: { name: 'Mémos vocaux', desc: 'Notes vocales intelligentes' }
      }
    },
    onboarding: {
      tag: '[02] Onboarding IA',
      title: 'Démarrez en minutes, pas en mois.',
      desc: 'Import intelligent de vos données. SAKSAE se connecte à vos outils existants et construit votre CRM automatiquement.',
      features: {
        import: { name: 'Import intelligent', desc: 'CSV, Excel, API, connexions directes' },
        sync: { name: 'Synchronisation', desc: 'Email, calendrier, outils métier' },
        enrich: { name: 'Enrichissement', desc: 'Données complétées automatiquement' },
        mapping: { name: 'Mapping IA', desc: 'Structure détectée intelligemment' }
      },
      cta: 'Importer mes données'
    },
    ai: {
      tag: '[03] Intelligence artificielle',
      title: 'L\'IA qui agit, pas qui suggère.',
      desc: 'Chaque jour, SAKSAE analyse vos données et exécute les actions à fort impact pour générer du revenu.',
      actions: [
        { action: 'Relance client envoyée', context: 'Devis #1234 sans réponse depuis 5 jours', impact: '€2,500' },
        { action: 'Réunion préparée', context: 'Brief automatique pour call Acme Corp', impact: '€1,200' },
        { action: 'Facture générée', context: 'Projet terminé - TechStart', impact: '€8,500' },
        { action: 'Lead qualifié', context: 'Score 85/100 - Prêt pour contact', impact: '€3,200' }
      ]
    },
    testimonial: {
      quote1: '"Quand j\'ai ouvert SAKSAE,',
      quote2: 'j\'ai immédiatement compris que c\'était',
      quote3: 'la nouvelle génération du business."',
      author: 'Marie Dupont',
      role: 'CEO · TechStart'
    },
    pricing: {
      tag: '[04] Tarification',
      title: 'Simple et transparent.',
      desc: 'Commencez gratuitement. Évoluez selon vos besoins.',
      plans: {
        starter: { name: 'Starter', price: '29', desc: 'Pour les petites équipes', users: 'jusqu\'à 5 utilisateurs' },
        pro: { name: 'Pro', price: '79', desc: 'Pour les entreprises en croissance', users: 'utilisateurs illimités', popular: true },
        enterprise: { name: 'Enterprise', price: 'Sur mesure', desc: 'Solutions personnalisées', users: 'déploiement dédié' }
      },
      features: ['CRM complet', 'Gestion de projets', 'Finance intégrée', 'Réunions IA', 'Support prioritaire'],
      cta: 'Commencer l\'essai',
      ctaEnterprise: 'Nous contacter'
    },
    cta: {
      title: 'Prêt à transformer votre business et à passer à l\'action avec SAKSAE ?',
      subtitle: '',
      button: 'Commencez votre essai gratuit de 15 jours',
      plans: 'Voir les tarifs'
    },
    footer: {
      tagline: 'Centraliser → Activer → Générer',
      platform: 'Plateforme',
      company: 'Entreprise',
      legal: 'Légal',
      rights: '© 2024 SAKSAE. Tous droits réservés.'
    },
    auth: {
      login: 'Connexion',
      register: 'Créer un compte',
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
      trial: 'Essai gratuit de 14 jours'
    }
  },
  en: {
    nav: {
      platform: 'Platform',
      pricing: 'Pricing',
      customers: 'Customers',
      login: 'Sign in',
      startFree: 'Start for free'
    },
    hero: {
      badge: 'Discover the AI platform',
      headline: 'Business execution reimagined.',
      subheadline: 'SAKSAE is the AI execution system for ambitious companies.',
      ctaPrimary: 'Start for free',
      ctaSecondary: 'Talk to sales'
    },
    platform: {
      tag: '[01] Unified Platform',
      title: 'Your entire business. One source of truth.',
      desc: 'Centralize CRM, projects, finance and communications. Transform every data point into concrete action.',
      modules: {
        crm: { name: 'CRM', desc: 'Customer relationship management' },
        projects: { name: 'Projects', desc: 'Integrated project management' },
        playbooks: { name: 'Playbooks', desc: 'Automated processes' },
        signatures: { name: 'Signatures', desc: 'Electronic signatures' },
        calendar: { name: 'Calendar', desc: 'Smart scheduling' },
        finance: { name: 'Finance', desc: 'Financial management' },
        meetings: { name: 'AI Meetings', desc: 'Transcription and summaries' },
        memos: { name: 'Voice Memos', desc: 'Smart voice notes' }
      }
    },
    onboarding: {
      tag: '[02] AI Onboarding',
      title: 'Get started in minutes, not months.',
      desc: 'Smart data import. SAKSAE connects to your existing tools and builds your CRM automatically.',
      features: {
        import: { name: 'Smart Import', desc: 'CSV, Excel, API, direct connections' },
        sync: { name: 'Synchronization', desc: 'Email, calendar, business tools' },
        enrich: { name: 'Enrichment', desc: 'Data completed automatically' },
        mapping: { name: 'AI Mapping', desc: 'Structure detected intelligently' }
      },
      cta: 'Import my data'
    },
    ai: {
      tag: '[03] Artificial Intelligence',
      title: 'AI that acts, not just suggests.',
      desc: 'Every day, SAKSAE analyzes your data and executes high-impact actions to generate revenue.',
      actions: [
        { action: 'Client follow-up sent', context: 'Quote #1234 unanswered for 5 days', impact: '€2,500' },
        { action: 'Meeting prepared', context: 'Auto brief for Acme Corp call', impact: '€1,200' },
        { action: 'Invoice generated', context: 'Project completed - TechStart', impact: '€8,500' },
        { action: 'Lead qualified', context: 'Score 85/100 - Ready for contact', impact: '€3,200' }
      ]
    },
    testimonial: {
      quote1: '"When I first opened SAKSAE,',
      quote2: 'I instantly got the feeling this was',
      quote3: 'the next generation of business."',
      author: 'Marie Dupont',
      role: 'CEO · TechStart'
    },
    pricing: {
      tag: '[04] Pricing',
      title: 'Simple and transparent.',
      desc: 'Start for free. Scale as you grow.',
      plans: {
        starter: { name: 'Starter', price: '29', desc: 'For small teams', users: 'up to 5 users' },
        pro: { name: 'Pro', price: '79', desc: 'For growing businesses', users: 'unlimited users', popular: true },
        enterprise: { name: 'Enterprise', price: 'Custom', desc: 'Customized solutions', users: 'dedicated deployment' }
      },
      features: ['Complete CRM', 'Project management', 'Integrated finance', 'AI meetings', 'Priority support'],
      cta: 'Start trial',
      ctaEnterprise: 'Contact us'
    },
    cta: {
      title: 'Ready to transform your business and take action with SAKSAE?',
      subtitle: '',
      button: 'Start your 15-day free trial',
      plans: 'See pricing'
    },
    footer: {
      tagline: 'Centralize → Activate → Generate',
      platform: 'Platform',
      company: 'Company',
      legal: 'Legal',
      rights: '© 2024 SAKSAE. All rights reserved.'
    },
    auth: {
      login: 'Login',
      register: 'Create account',
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
      trial: '14-day free trial'
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
