import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { language } = useLanguage();

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  // Floating AI action cards data - smaller and more transparent
  const aiActions = [
    { 
      text: language === 'fr' ? 'Relance client' : 'Client follow-up',
      impact: '+€2.5k',
      delay: 0,
      position: { top: '20%', left: '8%' }
    },
    { 
      text: language === 'fr' ? 'Lead scoré' : 'Lead scored',
      impact: '85/100',
      delay: 1.2,
      position: { top: '15%', right: '10%' }
    },
    { 
      text: language === 'fr' ? 'Facture' : 'Invoice',
      impact: '+€8.5k',
      delay: 2.4,
      position: { bottom: '25%', left: '5%' }
    },
    { 
      text: language === 'fr' ? 'Action détectée' : 'Action detected',
      impact: 'Priority',
      delay: 3.6,
      position: { bottom: '18%', right: '8%' }
    },
  ];

  return (
    <section className="relative flex items-center pt-14 pb-16 overflow-hidden bg-[#FAFAFA]">
      {/* Subtle background grid */}
      <div className="absolute inset-0 dotted-pattern opacity-30" />

      {/* Floating AI Action Cards - smaller and 70% opacity */}
      {aiActions.map((action, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block bg-white/70 backdrop-blur-sm rounded-lg border border-[#E5E7EB]/50 px-3 py-2 shadow-sm"
          style={action.position}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ 
            opacity: [0, 0.7, 0.7, 0],
            y: [10, 0, 0, -10],
            scale: [0.95, 1, 1, 0.95]
          }}
          transition={{ 
            duration: 4,
            delay: action.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#059669]/70" />
            <span className="text-xs text-[#6B7280]">{action.text}</span>
          </div>
          <div className="text-right mt-1">
            <span className="text-[10px] font-medium text-[#059669]/70">{action.impact}</span>
          </div>
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-hero text-[#0A0A0A] mb-6"
            data-testid="hero-headline"
          >
            {language === 'fr' 
              ? <>La plateforme d'Execution business IA pour Indépendant&nbsp;/&nbsp;TPE et&nbsp;PME.</>
              : "The AI Business Execution platform for Freelancers / SMEs."}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto"
          >
            {language === 'fr'
              ? <>SAKSAE est une plateforme d'Exécution Business, qui centralise vos outils, analyse vos données d'opérations et de revenus et les transforme en actions.<br className="hidden md:block" />Pilotez votre activité, détectez vos priorités, passez à l'action avec SAKSAE.</>
              : "SAKSAE is a Business Execution platform that centralizes your tools, analyzes your operations and revenue data, and turns them into actions. Drive your business, detect priorities, take action with SAKSAE."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={handleTrialClick}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
              data-testid="cta-primary"
            >
              {language === 'fr' ? 'Commencer gratuitement' : 'Start for free'}
            </button>
            <button
              onClick={handleDemoClick}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-white text-[#0A0A0A] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors"
              data-testid="cta-secondary"
            >
              {language === 'fr' ? 'Parler aux sales' : 'Talk to sales'}
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
