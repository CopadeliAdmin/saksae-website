import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, TrendingUp, Settings } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();

  const handleTrialClick = () => { window.location.href = '/register'; };
  const handleDemoClick = () => { window.open('https://calendly.com/saksae-sales', '_blank'); };

  // Subtle floating signals - very light, ambient
  const signals = [
    { text: '+€2.5k', delay: 0, x: '7%', y: '25%' },
    { text: '85/100', delay: 2, x: '88%', y: '20%' },
  ];

  const revenuePopup = {
    fr: { label: 'Revenu', action: 'Relance client envoyée', value: '+€2,500' },
    en: { label: 'Revenue', action: 'Client follow-up sent', value: '+€2,500' },
  };
  const operationPopup = {
    fr: { label: 'Opération', action: 'Playbook déclenché', tag: 'Management' },
    en: { label: 'Operation', action: 'Playbook triggered', tag: 'Management' },
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-[#FAFAFA]">
      {/* Very subtle dotted background */}
      <div className="absolute inset-0 dotted-pattern opacity-40" />

      {/* Ambient floating signals */}
      {signals.map((s, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/50 backdrop-blur-sm border border-[#E4E4E7]/40"
          style={{ left: s.x, top: s.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: 5, delay: s.delay, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1 rounded-full bg-[#059669]/50" />
          <span className="text-[10px] text-[#A1A1AA] font-medium tracking-wide">{s.text}</span>
        </motion.div>
      ))}

      {/* Revenue popup - left side */}
      <motion.div
        className="absolute hidden lg:block z-20"
        style={{ left: '4%', top: '55%' }}
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-white rounded-xl border border-[#E4E4E7] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] w-[220px]">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#059669] rounded-l-xl" />
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />
            <span className="text-[11px] font-semibold text-[#059669]">{revenuePopup[language].label}</span>
          </div>
          <p className="text-xs font-medium text-[#0A0A0A] mb-1">{revenuePopup[language].action}</p>
          <span className="text-sm font-bold text-[#059669]">{revenuePopup[language].value}</span>
        </div>
      </motion.div>

      {/* Operation popup - right side */}
      <motion.div
        className="absolute hidden lg:block z-20"
        style={{ right: '4%', top: '50%' }}
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-white rounded-xl border border-[#E4E4E7] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] w-[220px]">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3B82F6] rounded-l-xl" />
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[11px] font-semibold text-[#3B82F6]">{operationPopup[language].label}</span>
          </div>
          <p className="text-xs font-medium text-[#0A0A0A] mb-1">{operationPopup[language].action}</p>
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#DBEAFE] text-[#2563EB]">{operationPopup[language].tag}</span>
        </div>
      </motion.div>

      <div className="max-w-[1120px] mx-auto px-6 pt-40 md:pt-48 pb-6 relative z-10">
        <div className="max-w-[960px] mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero text-[#0A0A0A] mb-7"
            data-testid="hero-headline"
          >
            {language === 'fr' 
              ? <>#1 plateforme business IA<br /><span className="text-[#A1A1AA]">pour Indépendants, TPE/PME</span></>
              : <>The #1 AI Business platform<br /><span className="text-[#A1A1AA]">for Freelancers & SMEs</span></>}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-[#52525B] leading-[1.7] mb-5 max-w-[680px] mx-auto"
          >
            {language === 'fr'
              ? <>SAKSAE est une plateforme d'Exécution Business, qui centralise vos outils,<br className="hidden md:block" />analyse vos données d'opérations et de revenus et les transforme en actions.</>
              : <>SAKSAE is a Business Execution platform that centralizes your tools,<br className="hidden md:block" />analyzes your operations and revenue data, and turns them into actions.</>}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-[#52525B] leading-[1.7] mb-12 max-w-[680px] mx-auto"
          >
            {language === 'fr'
              ? 'Pilotez votre activité, détectez vos priorités, passez à l\'action avec SAKSAE.'
              : 'Drive your business, detect priorities, take action with SAKSAE.'}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <button
              onClick={handleTrialClick}
              className="group px-7 py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg transition-all hover:bg-[#171717] active:scale-[0.98]"
              style={{ transitionDuration: '240ms', transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
              data-testid="cta-primary"
            >
              <span className="flex items-center justify-center gap-2">
                {language === 'fr' ? 'Commencez votre essai gratuit pro de 14 jours' : 'Start your 14-day pro free trial'}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" style={{ transitionDuration: '240ms' }} />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
    </section>
  );
};

export default HeroSection;
