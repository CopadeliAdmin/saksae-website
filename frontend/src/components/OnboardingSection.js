import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Upload, RefreshCw, Sparkles, GitBranch, ArrowRight } from 'lucide-react';

const OnboardingSection = () => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      key: 'import', 
      icon: Upload,
      name: { fr: 'Import', en: 'Import' },
      title: { fr: 'Importez vos données', en: 'Import your data' },
      desc: { fr: 'CSV, Excel, API, connexions directes', en: 'CSV, Excel, API, direct connections' }
    },
    { 
      key: 'sync', 
      icon: RefreshCw,
      name: { fr: 'Synchronisation', en: 'Sync' },
      title: { fr: 'Synchronisez vos outils', en: 'Sync your tools' },
      desc: { fr: 'Email, calendrier, CRM existant', en: 'Email, calendar, existing CRM' }
    },
    { 
      key: 'enrich', 
      icon: Sparkles,
      name: { fr: 'Enrichissement', en: 'Enrichment' },
      title: { fr: 'Enrichissement IA', en: 'AI Enrichment' },
      desc: { fr: 'Données complétées automatiquement', en: 'Data completed automatically' }
    },
    { 
      key: 'mapping', 
      icon: GitBranch,
      name: { fr: 'Mapping IA', en: 'AI Mapping' },
      title: { fr: 'Structure intelligente', en: 'Smart structure' },
      desc: { fr: 'Organisation détectée par l\'IA', en: 'Organization detected by AI' }
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const handleDemoClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  const activeStepData = steps[activeStep];
  const ActiveIcon = activeStepData.icon;

  return (
    <section id="onboarding" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="section-tag block mb-5"
            >
              {language === 'fr' ? '[02] Onboarding intelligent' : '[02] Smart Onboarding'}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2rem] md:text-[2.5rem] font-bold text-[#295CF0] mb-5 leading-[1.1] tracking-[-0.03em]"
            >
              {language === 'fr' 
                ? <>Passez de vos données à vos<br />premières actions en<br />quelques clics.</>
                : <>Go from your data to your<br />first actions in just<br />a few clicks.</>}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#52525B] leading-[1.7] mb-10"
            >
              {language === 'fr'
                ? 'SAKSAE importe vos données dispersées automatiquement et se connecte à vos outils existants pour construire votre plateforme.'
                : 'SAKSAE automatically imports your scattered data and connects to your existing tools to build your platform.'}
            </motion.p>

            {/* Step indicators and labels aligned */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.key} className="flex flex-col items-center">
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`w-full h-1 rounded-full transition-all mb-3 ${
                        index === activeStep ? 'bg-[#0A0A0A]' : 'bg-[#E5E7EB]'
                      }`}
                    />
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`flex items-center gap-1.5 text-xs transition-colors ${
                        index === activeStep ? 'text-[#0A0A0A] font-medium' : 'text-[#9CA3AF]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>{step.name[language]}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <button 
              onClick={handleDemoClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
            >
              {language === 'fr' ? 'Demander une démo' : 'Request a demo'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right - Animated Carousel Visual */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-white rounded-xl border border-[#E4E4E7] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                        <ActiveIcon className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#0A0A0A]">{activeStepData.title[language]}</h3>
                        <p className="text-xs text-[#6B7280]">{activeStepData.desc[language]}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#9CA3AF]">
                      {language === 'fr' ? `Étape ${activeStep + 1} sur ${steps.length}` : `Step ${activeStep + 1} of ${steps.length}`}
                    </span>
                  </div>

                  {/* Visual content based on step */}
                  {activeStep === 0 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        {['Email & Calendar', 'Google Sheets', 'Salesforce', 'HubSpot'].map((source, i) => (
                          <div
                            key={source}
                            className={`p-3 rounded-lg border text-sm ${i === 0 ? 'border-[#0A0A0A] bg-[#F9FAFB]' : 'border-[#E5E7EB]'}`}
                          >
                            <div className="w-6 h-6 rounded bg-[#F3F4F6] mb-2" />
                            {source}
                          </div>
                        ))}
                      </div>
                      <div className="h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-[#0A0A0A] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '75%' }}
                          transition={{ duration: 2 }}
                        />
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-3">
                      {['Gmail connecté', 'Google Calendar synced', 'Contacts importés'].map((item, i) => (
                        <div key={item} className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                          <div className="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center">
                            <span className="text-[#059669] text-xs">✓</span>
                          </div>
                          <span className="text-sm text-[#0A0A0A]">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                        <Sparkles className="w-5 h-5 text-[#6B7280]" />
                        <div>
                          <p className="text-sm text-[#0A0A0A]">{language === 'fr' ? 'IA en cours...' : 'AI processing...'}</p>
                          <p className="text-xs text-[#6B7280]">{language === 'fr' ? 'Enrichissement des données' : 'Enriching data'}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {[
                          { label: 'Contacts', value: '2,847' },
                          { label: 'Companies', value: '423' },
                          { label: 'Enriched', value: '89%' },
                        ].map((stat) => (
                          <div key={stat.label} className="p-2 bg-[#F3F4F6] rounded-lg">
                            <p className="text-lg font-semibold text-[#0A0A0A]">{stat.value}</p>
                            <p className="text-xs text-[#6B7280]">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-3">
                      <div className="p-3 bg-[#D1FAE5] border border-[#BBF7D0] rounded-lg">
                        <p className="text-sm font-medium text-[#059669]">{language === 'fr' ? 'Structure détectée ✓' : 'Structure detected ✓'}</p>
                      </div>
                      <div className="space-y-2">
                        {['Leads → Pipeline', 'Clients → CRM', 'Projets → Boards', 'Factures → Finance'].map((mapping) => (
                          <div key={mapping} className="flex items-center gap-2 text-sm text-[#6B7280]">
                            <GitBranch className="w-4 h-4" />
                            {mapping}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;
