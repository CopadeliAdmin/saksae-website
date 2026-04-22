import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Video, FolderKanban, Calendar, BookOpen, Receipt, FileText, PenTool, Calculator, X, ArrowRight } from 'lucide-react';

const AIToolsSection = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('reunion');
  const [showCalculator, setShowCalculator] = useState(false);
  const [selectedTools, setSelectedTools] = useState({});

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

  // Visual component for each tool
  const TabVisual = ({ tabKey }) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
    };
    const itemVariants = {
      hidden: { opacity: 0, y: 12 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
    };

    const cardClass = "bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] w-full max-w-[440px] h-[340px] flex flex-col";

    switch(tabKey) {
      case 'reunion':
        return (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className={cardClass}
          >
            <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                  <Video className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
                </div>
                <span className="text-base font-semibold text-[#0A0A0A]">{language === 'fr' ? 'Réunion IA' : 'AI Meeting'}</span>
              </div>
              <span className="text-xs font-medium text-[#059669] bg-[#D1FAE5] px-2.5 py-1 rounded-full">{language === 'fr' ? 'En direct' : 'Live'}</span>
            </motion.div>
            <motion.div variants={itemVariants} className="p-4 bg-[#F9FAFB] rounded-xl mb-3">
              <p className="text-xs font-medium text-[#0A0A0A] mb-2">{language === 'fr' ? 'Transcription' : 'Transcription'}</p>
              <p className="text-sm text-[#6B7280] leading-relaxed italic">"Nous devons finaliser le budget Q2 avant vendredi..."</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-4 bg-[#FEF3C7] rounded-xl mb-3">
              <p className="text-xs font-semibold text-[#92400E] mb-1">{language === 'fr' ? 'Action détectée' : 'Action detected'}</p>
              <p className="text-sm text-[#92400E]/80">{language === 'fr' ? 'Envoyer budget Q2 → Marie (vendredi)' : 'Send Q2 budget → Marie (Friday)'}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-4 bg-[#EFF6FF] rounded-xl">
              <p className="text-xs font-semibold text-[#1E40AF] mb-1">{language === 'fr' ? 'Résumé IA' : 'AI Summary'}</p>
              <p className="text-sm text-[#1E40AF]/80">{language === 'fr' ? '3 décisions prises, 2 actions assignées' : '3 decisions made, 2 actions assigned'}</p>
            </motion.div>
          </motion.div>
        );
      case 'projet':
        return (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className={cardClass}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                <FolderKanban className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <span className="text-base font-semibold text-[#0A0A0A]">Projet: Lancement Q2</span>
            </motion.div>
            <div className="space-y-4">
              {[
                { name: 'Recherche', pct: 100, color: '#059669' },
                { name: 'Design', pct: 100, color: '#059669' },
                { name: 'Dev', pct: 60, color: '#F59E0B' },
                { name: 'Tests', pct: 0, color: '#E5E7EB' },
              ].map((phase, i) => (
                <motion.div key={phase.name} variants={itemVariants} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0`} style={{ backgroundColor: phase.color }} />
                  <span className="text-sm text-[#0A0A0A] w-24 font-medium">{phase.name}</span>
                  <div className="flex-1 h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: phase.pct > 0 ? phase.color : 'transparent' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${phase.pct}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <span className="text-sm text-[#9CA3AF] w-10 text-right font-medium">{phase.pct}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'calendrier':
        return (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className={cardClass}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <span className="text-base font-semibold text-[#0A0A0A]">{language === 'fr' ? "Aujourd'hui" : 'Today'}</span>
            </motion.div>
            <div className="space-y-2.5">
              {[
                { time: '09:00', title: 'Call client Acme', color: '#0A0A0A' },
                { time: '11:00', title: 'Review projet Q2', color: '#3B82F6' },
                { time: '14:00', title: 'Team sync', color: '#059669', ai: true },
                { time: '16:00', title: 'Prep pitch NexGen', color: '#F59E0B', ai: true },
              ].map((event, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-4 p-3.5 rounded-xl bg-[#F9FAFB]">
                  <span className="text-sm text-[#9CA3AF] w-12 font-medium">{event.time}</span>
                  <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: event.color }} />
                  <span className="text-sm text-[#0A0A0A] font-medium flex-1">{event.title}</span>
                  {event.ai && <span className="text-[10px] font-semibold text-[#059669] bg-[#D1FAE5] px-2 py-0.5 rounded-full">IA</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'playbook':
        return (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className={cardClass}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <span className="text-base font-semibold text-[#0A0A0A]">{language === 'fr' ? 'Playbook actif' : 'Active Playbook'}</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center justify-between gap-3 mb-6">
              {[
                { label: 'Trigger', done: true },
                { label: 'Action 1', done: true },
                { label: 'Action 2', done: true },
                { label: 'Done', done: false },
              ].map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold ${step.done ? 'bg-[#0A0A0A] text-white' : 'bg-[#F3F4F6] text-[#9CA3AF]'}`}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {step.done ? '✓' : (i + 1)}
                    </motion.div>
                    <span className="text-[11px] text-[#6B7280] font-medium">{step.label}</span>
                  </div>
                  {i < 3 && (
                    <motion.div
                      className={`h-0.5 flex-1 rounded-full ${i < 2 ? 'bg-[#0A0A0A]' : 'bg-[#E5E7EB]'}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: 'left', marginBottom: '20px' }}
                    />
                  )}
                </React.Fragment>
              ))}
            </motion.div>
            <motion.div variants={itemVariants} className="p-4 bg-[#F9FAFB] rounded-xl">
              <p className="text-xs font-medium text-[#0A0A0A] mb-1">{language === 'fr' ? 'Prochaine étape' : 'Next step'}</p>
              <p className="text-sm text-[#6B7280]">{language === 'fr' ? 'Validation finale et notification équipe' : 'Final validation and team notification'}</p>
            </motion.div>
          </motion.div>
        );
      case 'paie':
        return (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className={cardClass}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                <Receipt className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <span className="text-base font-semibold text-[#0A0A0A]">{language === 'fr' ? 'Fiche de paie' : 'Payslip'}</span>
            </motion.div>
            <div className="space-y-3">
              {(language === 'fr'
                ? ['Calculs automatiques', 'Conformité légale', 'Envoi sécurisé']
                : ['Automatic calculations', 'Legal compliance', 'Secure delivery']
              ).map((f, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 p-3.5 bg-[#F9FAFB] rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#059669] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-[#0A0A0A] font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-4 p-4 bg-[#EFF6FF] rounded-xl">
              <p className="text-xs font-semibold text-[#1E40AF] mb-1">{language === 'fr' ? 'Statut' : 'Status'}</p>
              <p className="text-sm text-[#1E40AF]/80">{language === 'fr' ? '12 bulletins générés ce mois' : '12 payslips generated this month'}</p>
            </motion.div>
          </motion.div>
        );
      case 'contrats':
        return (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className={cardClass}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <span className="text-base font-semibold text-[#0A0A0A]">{language === 'fr' ? 'Contrats' : 'Contracts'}</span>
            </motion.div>
            <div className="space-y-3">
              {(language === 'fr'
                ? ['Templates personnalisables', 'Suivi des échéances', 'Alertes de renouvellement']
                : ['Customizable templates', 'Deadline tracking', 'Renewal alerts']
              ).map((f, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 p-3.5 bg-[#F9FAFB] rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#059669] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-[#0A0A0A] font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-4 p-4 bg-[#FEF3C7] rounded-xl">
              <p className="text-xs font-semibold text-[#92400E] mb-1">{language === 'fr' ? 'Alerte' : 'Alert'}</p>
              <p className="text-sm text-[#92400E]/80">{language === 'fr' ? '2 contrats à renouveler cette semaine' : '2 contracts to renew this week'}</p>
            </motion.div>
          </motion.div>
        );
      case 'signatures':
        return (
          <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className={cardClass}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                <PenTool className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <span className="text-base font-semibold text-[#0A0A0A]">E-signatures</span>
            </motion.div>
            <div className="space-y-3">
              {(language === 'fr'
                ? ['Signature légale eIDAS', 'Multi-signataires', 'Rappels automatiques']
                : ['eIDAS legal signature', 'Multi-signers', 'Automatic reminders']
              ).map((f, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 p-3.5 bg-[#F9FAFB] rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#059669] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-[#0A0A0A] font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants} className="mt-4 p-4 bg-[#D1FAE5] rounded-xl">
              <p className="text-xs font-semibold text-[#059669] mb-1">{language === 'fr' ? 'Dernier contrat signé' : 'Last signed contract'}</p>
              <p className="text-sm text-[#059669]/80">{language === 'fr' ? 'NexGen — il y a 2h' : 'NexGen — 2h ago'}</p>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
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
            className="text-section-title text-[#295CF0] mb-5"
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
            {language === 'fr' ? 'Calculez vos économies d\'outils dispersés' : 'Calculate your scattered tools savings'}
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
                  {language === 'fr' ? 'Calculez vos économies d\'outils dispersés' : 'Calculate your scattered tools savings'}
                </h3>
                <button onClick={() => setShowCalculator(false)} className="p-1 hover:bg-[#F3F4F6] rounded-lg">
                  <X className="w-5 h-5 text-[#6B7280]" />
                </button>
              </div>

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
                      €{tool.price}/{language === 'fr' ? 'mois/utilisateur' : 'mo/user'}
                    </p>
                  </button>
                ))}
              </div>

              {/* Results */}
              <div className="p-4 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#6B7280]">{language === 'fr' ? 'Vos outils actuels' : 'Your current tools'}</span>
                  <span className="text-sm font-medium text-[#0A0A0A]">€{totalSavings}/{language === 'fr' ? 'mois/utilisateur' : 'mo/user'}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#6B7280]">SAKSAE</span>
                  <span className="text-sm font-medium text-[#0A0A0A]">€{saksaePrice}/{language === 'fr' ? 'mois/utilisateur' : 'mo/user'}</span>
                </div>
                <div className="border-t border-[#E5E7EB] pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-[#059669]">{language === 'fr' ? 'Économies mensuelles' : 'Monthly savings'}</span>
                    <span className="text-lg font-bold text-[#059669]">€{monthlySavings}/{language === 'fr' ? 'mois' : 'mo'}</span>
                  </div>
                  <p className="text-xs text-[#059669] mt-1">
                    = €{monthlySavings * 12}/{language === 'fr' ? 'an par utilisateur' : 'year per user'}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#6B7280] leading-relaxed">
                {language === 'fr'
                  ? 'Au-delà des économies réalisées avec SAKSAE, ces outils dispersés créent des données fragmentées, sans valeur d\'action et de revenus. SAKSAE unifie tout en une seule plateforme intelligente pour créer des actions à impact.'
                  : 'Beyond the savings achieved with SAKSAE, these scattered tools create fragmented data, with no actionable or revenue value. SAKSAE unifies everything into one intelligent platform to create impactful actions.'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIToolsSection;
