import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Video, FolderKanban, Calendar, BookOpen, Receipt, FileText, PenTool, Calculator, X, ArrowRight } from 'lucide-react';

const AIToolsSection = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('reunion');
  const [showCalculator, setShowCalculator] = useState(false);
  const [selectedTools, setSelectedTools] = useState({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const tabs = [
    { 
      key: 'reunion', 
      icon: Video,
      name: { fr: 'Réunion IA', en: 'AI Meeting' },
      title: { fr: 'Vos réunions deviennent intelligentes', en: 'Your meetings become intelligent' },
      description: { fr: 'Transcription automatique, résumés IA et actions générées instantanément après chaque réunion.', en: 'Automatic transcription, AI summaries and actions generated instantly after each meeting.' },
      features: { fr: ['Transcription en temps réel', 'Résumé automatique', 'Actions détectées par IA', 'Intégration calendrier'], en: ['Real-time transcription', 'Automatic summary', 'AI-detected actions', 'Calendar integration'] }
    },
    { 
      key: 'projet', 
      icon: FolderKanban,
      name: { fr: 'Projet', en: 'Project' },
      title: { fr: 'Gérez vos projets avec l\'IA', en: 'Manage projects with AI' },
      description: { fr: 'Planification intelligente, suivi automatisé et alertes proactives sur vos projets.', en: 'Smart planning, automated tracking and proactive alerts on your projects.' },
      features: { fr: ['Kanban & Gantt intégrés', 'Suivi du temps automatique', 'Alertes intelligentes', 'Rapports automatisés'], en: ['Integrated Kanban & Gantt', 'Automatic time tracking', 'Smart alerts', 'Automated reports'] }
    },
    { 
      key: 'calendrier', 
      icon: Calendar,
      name: { fr: 'Calendrier', en: 'Calendar' },
      title: { fr: 'Un calendrier qui pense pour vous', en: 'A calendar that thinks for you' },
      description: { fr: 'Planification intelligente qui optimise votre temps et anticipe vos besoins.', en: 'Smart scheduling that optimizes your time and anticipates your needs.' },
      features: { fr: ['Planification automatique', 'Détection des conflits', 'Suggestions IA', 'Sync multi-calendriers'], en: ['Automatic scheduling', 'Conflict detection', 'AI suggestions', 'Multi-calendar sync'] }
    },
    { 
      key: 'playbook', 
      icon: BookOpen,
      name: { fr: 'Playbook', en: 'Playbook' },
      title: { fr: 'Automatisez vos processus métier', en: 'Automate your business processes' },
      description: { fr: 'Créez des workflows intelligents qui s\'exécutent automatiquement selon vos règles.', en: 'Create intelligent workflows that run automatically according to your rules.' },
      features: { fr: ['Templates pré-configurés', 'Déclencheurs intelligents', 'Actions automatisées', 'Suivi en temps réel'], en: ['Pre-configured templates', 'Smart triggers', 'Automated actions', 'Real-time tracking'] }
    },
    { 
      key: 'paie', 
      icon: Receipt,
      name: { fr: 'Fiche de paie', en: 'Payslip' },
      title: { fr: 'Paie simplifiée et automatisée', en: 'Simplified and automated payroll' },
      description: { fr: 'Génération automatique des fiches de paie avec calculs conformes et envoi sécurisé.', en: 'Automatic payslip generation with compliant calculations and secure delivery.' },
      features: { fr: ['Calculs automatiques', 'Conformité légale', 'Envoi sécurisé', 'Archivage intégré'], en: ['Automatic calculations', 'Legal compliance', 'Secure delivery', 'Integrated archiving'] }
    },
    { 
      key: 'contrats', 
      icon: FileText,
      name: { fr: 'Contrats', en: 'Contracts' },
      title: { fr: 'Gestion intelligente des contrats', en: 'Smart contract management' },
      description: { fr: 'Créez, suivez et renouvelez vos contrats avec des alertes automatiques.', en: 'Create, track and renew your contracts with automatic alerts.' },
      features: { fr: ['Templates personnalisables', 'Suivi des échéances', 'Alertes de renouvellement', 'Versioning automatique'], en: ['Customizable templates', 'Deadline tracking', 'Renewal alerts', 'Automatic versioning'] }
    },
    { 
      key: 'signatures', 
      icon: PenTool,
      name: { fr: 'E-signatures', en: 'E-signatures' },
      title: { fr: 'Signez en un clic', en: 'Sign in one click' },
      description: { fr: 'Signature électronique légale intégrée directement dans vos workflows.', en: 'Legal electronic signature integrated directly into your workflows.' },
      features: { fr: ['Signature légale eIDAS', 'Multi-signataires', 'Rappels automatiques', 'Audit trail complet'], en: ['eIDAS legal signature', 'Multi-signers', 'Automatic reminders', 'Complete audit trail'] }
    },
  ];

  const marketTools = [
    { name: 'Zoom', price: 15, category: 'meeting' },
    { name: 'Otter.ai', price: 17, category: 'transcription' },
    { name: 'Asana', price: 25, category: 'project' },
    { name: 'Monday', price: 30, category: 'project' },
    { name: 'Calendly', price: 12, category: 'calendar' },
    { name: 'DocuSign', price: 25, category: 'signature' },
    { name: 'PandaDoc', price: 35, category: 'contracts' },
    { name: 'Notion', price: 10, category: 'docs' },
    { name: 'Slack', price: 12, category: 'communication' },
    { name: 'PayFit', price: 50, category: 'payroll' },
  ];

  const toggleTool = (toolName) => {
    setSelectedTools(prev => ({
      ...prev,
      [toolName]: !prev[toolName]
    }));
  };

  const totalSavings = Object.entries(selectedTools)
    .filter(([_, selected]) => selected)
    .reduce((sum, [name]) => {
      const tool = marketTools.find(t => t.name === name);
      return sum + (tool?.price || 0);
    }, 0);

  const saksaePrice = 63; // Prix SAKSAE
  const monthlySavings = Math.max(0, totalSavings - saksaePrice);

  const activeTabData = tabs.find(tab => tab.key === activeTab);

  const handleSubmitCalculator = async () => {
    if (!email) return;
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: 'Calculator Lead',
          source: 'savings_calculator',
          message: JSON.stringify({ selectedTools, totalSavings, monthlySavings })
        })
      });
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  };

  // Visual component for each tool
  const TabVisual = ({ tabKey }) => {
    switch(tabKey) {
      case 'reunion':
        return (
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-[#0A0A0A]">Réunion IA</span>
              <span className="text-xs text-[#059669] bg-[#D1FAE5] px-2 py-0.5 rounded">En direct</span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="p-3 bg-[#F9FAFB] rounded-lg text-xs text-[#6B7280]">
                <p className="font-medium text-[#0A0A0A] mb-1">Transcription</p>
                "Nous devons finaliser le budget Q2..."
              </div>
              <div className="p-3 bg-[#FEF3C7] rounded-lg text-xs">
                <p className="font-medium text-[#92400E]">Action détectée</p>
                <p className="text-[#92400E]/70">Envoyer budget → Marie</p>
              </div>
            </div>
          </div>
        );
      case 'projet':
        return (
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
            <p className="text-sm font-medium text-[#0A0A0A] mb-4">Projet: Lancement Q2</p>
            <div className="space-y-2">
              {['Recherche', 'Design', 'Dev', 'Tests'].map((phase, i) => (
                <div key={phase} className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${i < 2 ? 'bg-[#059669]' : i === 2 ? 'bg-[#F59E0B]' : 'bg-[#E5E7EB]'}`} />
                  <span className="text-sm text-[#6B7280] flex-1">{phase}</span>
                  <span className="text-xs text-[#9CA3AF]">{i < 2 ? '100%' : i === 2 ? '60%' : '0%'}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'calendrier':
        return (
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
            <p className="text-sm font-medium text-[#0A0A0A] mb-4">Aujourd'hui</p>
            <div className="space-y-2">
              {[{ time: '09:00', title: 'Call client' }, { time: '11:00', title: 'Review projet' }, { time: '14:00', title: 'Team sync', ai: true }].map((event, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-[#F9FAFB]">
                  <span className="text-xs text-[#9CA3AF] w-12">{event.time}</span>
                  <span className="text-sm text-[#0A0A0A]">{event.title}</span>
                  {event.ai && <span className="text-xs text-[#059669] ml-auto">IA</span>}
                </div>
              ))}
            </div>
          </div>
        );
      case 'playbook':
        return (
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
            <p className="text-sm font-medium text-[#0A0A0A] mb-4">Playbook actif</p>
            <div className="flex items-center justify-between gap-2">
              {['Trigger', 'Action 1', 'Action 2', 'Done'].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${i < 3 ? 'bg-[#0A0A0A] text-white' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>
                      {i < 3 ? '✓' : '4'}
                    </div>
                    <span className="text-[10px] text-[#6B7280] mt-1">{step}</span>
                  </div>
                  {i < 3 && <div className="h-px flex-1 bg-[#E5E7EB]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              {activeTabData && <activeTabData.icon className="w-5 h-5 text-[#0A0A0A]" />}
              <span className="text-sm font-medium text-[#0A0A0A]">{activeTabData?.name[language]}</span>
            </div>
            <div className="space-y-2">
              {activeTabData?.features[language].slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <span className="text-[#059669]">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section id="ai-tools" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-[640px] mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="section-tag block mb-5"
          >
            {language === 'fr' ? '[03] Outils IA' : '[03] AI Tools'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-section-title text-[#0A0A0A] mb-5"
          >
            {language === 'fr' 
              ? 'Tous vos outils. Une seule intelligence d\'exécution.'
              : 'All your tools. One execution intelligence.'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-[#52525B] leading-[1.7]"
          >
            {language === 'fr'
              ? <>SAKSAE remplace vos outils dispersés et transforme chaque interaction en signal actionnable.<br className="hidden md:block" />Gagnez du temps et optimisez vos revenus avec plus d'actions utiles : relancer, facturer, préparer, signer, prioriser, déléguer, suivre.</>
              : 'SAKSAE replaces your scattered tools and transforms every interaction into an actionable signal. Save time and optimize your revenue with more useful actions: follow up, invoice, prepare, sign, prioritize, delegate, track.'}
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-[#E4E4E7] mb-14 overflow-x-auto">
          <div className="flex gap-0 min-w-max pb-px">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3.5 text-[13px] font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === tab.key 
                    ? 'text-[#0A0A0A]' 
                    : 'text-[#A1A1AA] hover:text-[#52525B]'
                }`}
                style={{ transitionDuration: '180ms' }}
                data-testid={`tool-tab-${tab.key}`}
              >
                {tab.name[language]}
                {activeTab === tab.key && (
                  <motion.div 
                    layoutId="activeToolTab"
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-14 items-center mb-14"
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
            <div className="flex justify-center">
              <TabVisual tabKey={activeTab} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA - Calculate Savings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => setShowCalculator(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
          >
            <Calculator className="w-4 h-4" />
            {language === 'fr' ? 'Calculez vos économies' : 'Calculate your savings'}
          </button>
        </motion.div>
      </div>

      {/* Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setShowCalculator(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[#0A0A0A]">
                  {language === 'fr' ? 'Calculez vos économies' : 'Calculate your savings'}
                </h3>
                <button onClick={() => setShowCalculator(false)} className="p-1 hover:bg-[#F3F4F6] rounded-lg">
                  <X className="w-5 h-5 text-[#6B7280]" />
                </button>
              </div>

              {!submitted ? (
                <>
                  <p className="text-sm text-[#6B7280] mb-4">
                    {language === 'fr' 
                      ? 'Sélectionnez les outils que vous utilisez actuellement :'
                      : 'Select the tools you currently use:'}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {marketTools.map((tool) => (
                      <button
                        key={tool.name}
                        onClick={() => toggleTool(tool.name)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedTools[tool.name]
                            ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white'
                            : 'border-[#E5E7EB] hover:border-[#0A0A0A]'
                        }`}
                      >
                        <p className="text-sm font-medium">{tool.name}</p>
                        <p className={`text-xs ${selectedTools[tool.name] ? 'text-white/60' : 'text-[#6B7280]'}`}>
                          €{tool.price}/mois
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="p-4 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#6B7280]">{language === 'fr' ? 'Vos outils actuels' : 'Your current tools'}</span>
                      <span className="text-sm font-medium text-[#0A0A0A]">€{totalSavings}/mois</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#6B7280]">SAKSAE</span>
                      <span className="text-sm font-medium text-[#0A0A0A]">€{saksaePrice}/mois</span>
                    </div>
                    <div className="border-t border-[#E5E7EB] pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-[#059669]">{language === 'fr' ? 'Économies mensuelles' : 'Monthly savings'}</span>
                        <span className="text-lg font-bold text-[#059669]">€{monthlySavings}/mois</span>
                      </div>
                      <p className="text-xs text-[#059669] mt-1">
                        = €{monthlySavings * 12}/an
                      </p>
                    </div>
                  </div>

                  {/* Email capture */}
                  <div className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === 'fr' ? 'Votre email' : 'Your email'}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#0A0A0A] focus:outline-none text-sm"
                    />
                    <button
                      onClick={handleSubmitCalculator}
                      disabled={!email || monthlySavings <= 0}
                      className="w-full py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors disabled:opacity-50"
                    >
                      {language === 'fr' ? 'Recevoir mon rapport d\'économies' : 'Get my savings report'}
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#059669] text-2xl">✓</span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                    {language === 'fr' ? 'Rapport envoyé !' : 'Report sent!'}
                  </h4>
                  <p className="text-sm text-[#6B7280] mb-4">
                    {language === 'fr' 
                      ? `Vous économiseriez €${monthlySavings * 12}/an avec SAKSAE`
                      : `You would save €${monthlySavings * 12}/year with SAKSAE`}
                  </p>
                  <button
                    onClick={() => { setShowCalculator(false); window.location.href = '/register'; }}
                    className="px-6 py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
                  >
                    {language === 'fr' ? 'Commencer l\'essai gratuit' : 'Start free trial'}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIToolsSection;
