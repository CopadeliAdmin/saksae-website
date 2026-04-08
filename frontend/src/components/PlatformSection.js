import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, FolderKanban, UserCog, DollarSign, Package, Truck } from 'lucide-react';

const PlatformSection = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('crm');

  const tabs = [
    { 
      key: 'crm', 
      icon: Users,
      name: { fr: 'CRM', en: 'CRM' },
      title: { 
        fr: 'Gérez vos clients et prospects avec l\'IA', 
        en: 'Manage clients and prospects with AI' 
      },
      description: {
        fr: 'Un CRM intelligent alimenté par l\'IA pour mieux prospecter, automatiser les tâches répétitives et conclure plus rapidement davantage de transactions.',
        en: 'An AI-powered intelligent CRM to better prospect, automate repetitive tasks and close more deals faster.'
      },
      features: {
        fr: ['Pipeline de vente avancé', 'Réunions IA avec transcription', 'Mémos vocaux intelligents', 'Calendrier intégré'],
        en: ['Advanced sales pipeline', 'AI meetings with transcription', 'Smart voice memos', 'Integrated calendar']
      }
    },
    { 
      key: 'management', 
      icon: FolderKanban,
      name: { fr: 'Management', en: 'Management' },
      title: { 
        fr: 'Pilotez vos projets et processus', 
        en: 'Manage your projects and processes' 
      },
      description: {
        fr: 'Une suite complète pour gérer vos projets, automatiser vos processus métier et accélérer les signatures électroniques.',
        en: 'A complete suite to manage your projects, automate your business processes and accelerate electronic signatures.'
      },
      features: {
        fr: ['Gestion de projet collaborative', 'Playbooks IA automatisés', 'Signatures électroniques', 'Planification intelligente'],
        en: ['Collaborative project management', 'Automated AI playbooks', 'Electronic signatures', 'Smart scheduling']
      }
    },
    { 
      key: 'hr', 
      icon: UserCog,
      name: { fr: 'RH', en: 'HR' },
      title: { 
        fr: 'Gérez vos talents et équipes', 
        en: 'Manage your talents and teams' 
      },
      description: {
        fr: 'Un logiciel RH complet pour gérer l\'administration du personnel, le suivi des objectifs et l\'engagement des équipes.',
        en: 'A complete HR software to manage personnel administration, goal tracking and team engagement.'
      },
      features: {
        fr: ['Administration RH centralisée', 'RH opérationnel', 'Onboarding automatisé', 'Suivi des performances'],
        en: ['Centralized HR administration', 'Operational HR', 'Automated onboarding', 'Performance tracking']
      }
    },
    { 
      key: 'finance', 
      icon: DollarSign,
      name: { fr: 'Finances', en: 'Finance' },
      title: { 
        fr: 'Maîtrisez vos finances', 
        en: 'Master your finances' 
      },
      description: {
        fr: 'Centralisez facturation, comptabilité et contrats pour une vision claire de votre santé financière en temps réel.',
        en: 'Centralize invoicing, accounting and contracts for a clear view of your financial health in real time.'
      },
      features: {
        fr: ['Facturation automatique', 'Comptabilité intégrée', 'Gestion des contrats', 'Reporting financier'],
        en: ['Automatic invoicing', 'Integrated accounting', 'Contract management', 'Financial reporting']
      }
    },
    { 
      key: 'products', 
      icon: Package,
      name: { fr: 'Produits', en: 'Products' },
      title: { 
        fr: 'Gérez votre catalogue et stocks', 
        en: 'Manage your catalog and inventory' 
      },
      description: {
        fr: 'Un système complet pour gérer votre catalogue produits, suivre vos stocks en temps réel et optimiser votre inventaire.',
        en: 'A complete system to manage your product catalog, track inventory in real time and optimize your stock.'
      },
      features: {
        fr: ['Catalogue produits', 'Gestion des stocks', 'Alertes de réapprovisionnement', 'Historique des mouvements'],
        en: ['Product catalog', 'Inventory management', 'Restocking alerts', 'Movement history']
      }
    },
    { 
      key: 'supply', 
      icon: Truck,
      name: { fr: 'Approvisionnements', en: 'Supply Chain' },
      title: { 
        fr: 'Optimisez votre supply chain', 
        en: 'Optimize your supply chain' 
      },
      description: {
        fr: 'Gérez vos fournisseurs, optimisez vos approvisionnements et gardez le contrôle sur l\'ensemble de votre chaîne logistique.',
        en: 'Manage your suppliers, optimize your procurement and keep control over your entire logistics chain.'
      },
      features: {
        fr: ['Gestion des fournisseurs', 'Commandes automatisées', 'Suivi des livraisons', 'Analyse supply chain'],
        en: ['Supplier management', 'Automated orders', 'Delivery tracking', 'Supply chain analytics']
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.key === activeTab);

  // Visual components for each tab
  const TabVisual = ({ tabKey }) => {
    switch(tabKey) {
      case 'crm':
        return (
          <div className="relative">
            {/* Main card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#F3F4F6]" />
                <div>
                  <p className="font-medium text-[#0A0A0A] text-sm">Acme Corporation</p>
                  <p className="text-xs text-[#6B7280]">Deal: €45,000</p>
                </div>
                <span className="ml-auto px-2 py-1 bg-[#D1FAE5] text-[#059669] text-xs rounded-full">Hot Lead</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-[#F3F4F6] rounded-full">
                  <div className="h-full w-3/4 bg-[#0A0A0A] rounded-full" />
                </div>
                <p className="text-xs text-[#6B7280]">Pipeline: Négociation</p>
              </div>
            </div>
            {/* Floating AI card */}
            <div className="absolute -bottom-4 -right-4 bg-[#0A0A0A] text-white rounded-xl p-4 shadow-lg max-w-[200px]">
              <p className="text-xs font-medium mb-1">IA Agent</p>
              <p className="text-xs text-white/70">"Relance recommandée - Deal inactif depuis 3 jours"</p>
            </div>
          </div>
        );
      case 'management':
        return (
          <div className="relative">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
              <p className="font-medium text-[#0A0A0A] text-sm mb-4">Projet: Lancement Q2</p>
              <div className="space-y-3">
                {['Recherche', 'Design', 'Développement', 'Tests'].map((phase, i) => (
                  <div key={phase} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${i < 2 ? 'bg-[#059669]' : i === 2 ? 'bg-[#F59E0B]' : 'bg-[#E5E7EB]'}`} />
                    <span className="text-sm text-[#6B7280]">{phase}</span>
                    <span className="ml-auto text-xs text-[#9CA3AF]">{i < 2 ? '100%' : i === 2 ? '60%' : '0%'}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#E5E7EB] rounded-xl p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#0A0A0A] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-xs text-[#0A0A0A]">Playbook activé</p>
              </div>
            </div>
          </div>
        );
      case 'hr':
        return (
          <div className="relative">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
              <p className="font-medium text-[#0A0A0A] text-sm mb-4">Équipe: 24 employés</p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9CA3AF] to-[#6B7280]" />
                ))}
              </div>
              <div className="flex justify-between text-xs text-[#6B7280]">
                <span>Congés: 3</span>
                <span>Télétravail: 8</span>
                <span>Bureau: 13</span>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-[#D1FAE5] border border-[#BBF7D0] rounded-lg p-2">
              <p className="text-xs text-[#059669]">+2 nouveaux</p>
            </div>
          </div>
        );
      case 'finance':
        return (
          <div className="relative">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs text-[#6B7280]">Chiffre d'affaires</p>
                  <p className="text-2xl font-semibold text-[#0A0A0A]">€127,450</p>
                </div>
                <span className="px-2 py-1 bg-[#D1FAE5] text-[#059669] text-xs rounded-full">+12%</span>
              </div>
              <div className="flex gap-1 h-16 items-end">
                {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#0A0A0A] rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 right-4 bg-white border border-[#E5E7EB] rounded-lg p-2 shadow-sm">
              <p className="text-xs text-[#6B7280]">3 factures en attente</p>
            </div>
          </div>
        );
      case 'products':
        return (
          <div className="relative">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
              <p className="font-medium text-[#0A0A0A] text-sm mb-4">Catalogue: 156 produits</p>
              <div className="space-y-3">
                {[
                  { name: 'Produit A', stock: 234, status: 'ok' },
                  { name: 'Produit B', stock: 12, status: 'low' },
                  { name: 'Produit C', stock: 89, status: 'ok' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-[#6B7280]">{p.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#0A0A0A]">{p.stock}</span>
                      <div className={`w-2 h-2 rounded-full ${p.status === 'ok' ? 'bg-[#059669]' : 'bg-[#F59E0B]'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'supply':
        return (
          <div className="relative">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
              <p className="font-medium text-[#0A0A0A] text-sm mb-4">Supply Chain</p>
              <div className="flex items-center justify-between gap-4">
                {['Commande', 'Production', 'Expédition', 'Livré'].map((step, i) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i < 3 ? 'bg-[#0A0A0A] text-white' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>
                      {i < 3 ? '✓' : i + 1}
                    </div>
                    <span className="text-xs text-[#6B7280] mt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 left-4 bg-[#FEF3C7] border border-[#FDE68A] rounded-lg p-2">
              <p className="text-xs text-[#92400E]">2 livraisons en cours</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="platform" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="section-tag block mb-4">
            {t('platform.tag')}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr' 
              ? 'Une plateforme puissante et simple, alimentée par l\'IA.'
              : 'A powerful and simple platform, powered by AI.'}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {language === 'fr'
              ? 'SAKSAE rassemble vos équipes opérationnelles sur la même plateforme. Chaque produit est puissant, mais la véritable magie se produit lorsque vous les utilisez ensemble.'
              : 'SAKSAE brings your operational teams together on the same platform. Each product is powerful, but the real magic happens when you use them together.'}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-[#E5E7EB] mb-12">
          <div className="flex gap-1 overflow-x-auto pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === tab.key 
                    ? 'text-[#0A0A0A]' 
                    : 'text-[#6B7280] hover:text-[#0A0A0A]'
                }`}
                data-testid={`tab-${tab.key}`}
              >
                {tab.name[language]}
                {activeTab === tab.key && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A0A0A]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Text */}
            <div>
              <h3 className="text-2xl font-semibold text-[#0A0A0A] mb-4">
                {activeTabData?.title[language]}
              </h3>
              <p className="text-[#6B7280] mb-6">
                {activeTabData?.description[language]}
              </p>
              <div className="mb-6">
                <p className="text-sm font-medium text-[#0A0A0A] mb-3">
                  {language === 'fr' ? 'Fonctionnalités principales :' : 'Key features:'}
                </p>
                <ul className="space-y-2">
                  {activeTabData?.features[language].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#6B7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative min-h-[280px] flex items-center justify-center">
              <TabVisual tabKey={activeTab} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PlatformSection;
