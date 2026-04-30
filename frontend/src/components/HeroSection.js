import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, TrendingUp, Settings } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();

  const handleDemoClick = () => { window.open('https://calendly.com/saksae-sales', '_blank'); };

  // Each popup cycles through its positions
  const [posIndices, setPosIndices] = useState([0, 0, 0, 0]);
  const [visiblePopups, setVisiblePopups] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = popups.map((p, i) => {
      const show = () => {
        setVisiblePopups(prev => { const n = [...prev]; n[i] = true; return n; });
        setTimeout(() => {
          setVisiblePopups(prev => { const n = [...prev]; n[i] = false; return n; });
          setTimeout(() => {
            setPosIndices(prev => { const n = [...prev]; n[i] = (n[i] + 1) % p.positions.length; return n; });
          }, 400);
        }, 2800);
      };
      const initial = setTimeout(show, p.delay * 1000);
      const interval = setInterval(show, (p.delay + 3.6) * 1000 + 3600);
      return () => { clearTimeout(initial); clearInterval(interval); };
    });
    return () => timers.forEach(fn => fn());
  }, []);

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

  const popups = [
    { type: 'revenue', delay: 0, positions: [{ left: '2%', top: '18%' }, { left: '5%', top: '55%' }, { left: '1%', top: '72%' }],
      fr: { action: 'Relance client', value: '+€2,500' },
      en: { action: 'Client follow-up', value: '+€2,500' } },
    { type: 'revenue', delay: 3, positions: [{ left: '6%', top: '42%' }, { left: '2%', top: '68%' }, { left: '4%', top: '25%' }],
      fr: { action: 'Upsell détecté', value: '+€12,000' },
      en: { action: 'Upsell detected', value: '+€12,000' } },
    { type: 'operation', delay: 1.5, positions: [{ right: '2%', top: '20%' }, { right: '5%', top: '60%' }, { right: '1%', top: '40%' }],
      fr: { action: 'Playbook déclenché', tag: 'Management' },
      en: { action: 'Playbook triggered', tag: 'Management' } },
    { type: 'operation', delay: 4.5, positions: [{ right: '4%', top: '50%' }, { right: '2%', top: '28%' }, { right: '6%', top: '70%' }],
      fr: { action: 'Brief préparé', tag: 'CRM' },
      en: { action: 'Brief prepared', tag: 'CRM' } },
  ];

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

      {/* Action popups — 2 revenue (left), 2 operation (right) — cycle positions */}
      {popups.map((p, i) => {
        const isRevenue = p.type === 'revenue';
        const color = isRevenue ? '#059669' : '#3B82F6';
        const Icon = isRevenue ? TrendingUp : Settings;
        const label = isRevenue
          ? (language === 'fr' ? 'Revenu' : 'Revenue')
          : (language === 'fr' ? 'Opération' : 'Operation');
        const pos = p.positions[posIndices[i]];

        return (
          <AnimatePresence key={i}>
            {visiblePopups[i] && (
              <motion.div
                className="absolute hidden lg:block z-10 pointer-events-none"
                style={pos}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 0.5, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-[#E4E4E7]/60 px-3 py-2 w-[150px]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className="w-3 h-3" style={{ color }} />
                    <span className="text-[9px] font-semibold" style={{ color }}>{label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-[#0A0A0A]/70 truncate">{p[language].action}</span>
                    {isRevenue
                      ? <span className="text-[10px] font-bold ml-1 flex-shrink-0" style={{ color }}>{p[language].value}</span>
                      : <span className="text-[8px] font-medium px-1 py-px rounded ml-1 flex-shrink-0 bg-[#DBEAFE]/70 text-[#2563EB]/70">{p[language].tag}</span>
                    }
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}

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
              onClick={handleDemoClick}
              className="group px-7 py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg transition-all hover:bg-[#171717] active:scale-[0.98]"
              style={{ transitionDuration: '240ms', transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
              data-testid="cta-primary"
            >
              <span className="flex items-center justify-center gap-2">
                {language === 'fr' ? 'Planifier une démo' : 'Schedule a demo'}
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
