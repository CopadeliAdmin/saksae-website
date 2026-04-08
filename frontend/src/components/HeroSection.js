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

  // Floating AI action cards data
  const aiActions = [
    { 
      text: language === 'fr' ? 'Relance client qualifiée' : 'Qualified client follow-up',
      impact: '+€2,500',
      delay: 0,
      position: { top: '15%', left: '5%' }
    },
    { 
      text: language === 'fr' ? 'Lead automatiquement scoré' : 'Lead automatically scored',
      impact: '85/100',
      delay: 0.5,
      position: { top: '25%', right: '8%' }
    },
    { 
      text: language === 'fr' ? 'Facture générée' : 'Invoice generated',
      impact: '+€8,500',
      delay: 1,
      position: { bottom: '30%', left: '10%' }
    },
    { 
      text: language === 'fr' ? 'Action à fort impact détectée' : 'High impact action detected',
      impact: 'Priority',
      delay: 1.5,
      position: { bottom: '20%', right: '5%' }
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-[#FAFAFA]">
      {/* Animated background grid */}
      <div className="absolute inset-0 dotted-pattern opacity-50" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#E5E7EB]/30 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#E5E7EB]/30 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating AI Action Cards */}
      {aiActions.map((action, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block bg-white rounded-xl border border-[#E5E7EB] p-4 shadow-lg z-10"
          style={action.position}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{ 
            duration: 4,
            delay: action.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-sm text-[#0A0A0A] font-medium">{action.text}</span>
          </div>
          <div className="mt-2 text-right">
            <span className="text-xs font-semibold text-[#059669]">{action.impact}</span>
          </div>
        </motion.div>
      ))}

      {/* Central AI visualization */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Orbiting elements */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-[#E5E7EB] rounded-full"
              style={{
                left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
              }}
            />
          ))}
        </motion.div>
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-[20%] border border-dashed border-[#E5E7EB] rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center AI indicator */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-20 h-20 bg-[#0A0A0A] rounded-2xl flex items-center justify-center shadow-2xl"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white text-2xl font-bold">IA</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.a
            href="#platform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-[#6B7280] border border-[#E5E7EB] rounded-full bg-white/80 backdrop-blur-sm hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
            data-testid="hero-badge"
          >
            {language === 'fr' ? 'Découvrez la plateforme IA' : 'Discover the AI platform'}
            <ArrowRight className="w-3 h-3" />
          </motion.a>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-hero text-[#0A0A0A] mb-6"
            data-testid="hero-headline"
          >
            {language === 'fr' 
              ? "L'Exécution Business pour Indépendant TPE et PME."
              : "Business Execution for Freelancers and SMBs."}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto"
          >
            {language === 'fr'
              ? "SAKSAE est une plateforme d'Exécution Business IA, qui analyse vos données de revenus et les transforme en action à Impact."
              : "SAKSAE is an AI Business Execution platform that analyzes your revenue data and transforms it into impactful actions."}
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

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-8 md:gap-12 opacity-40"
        >
          {['Modal', 'Railway', 'Replicate', 'Plain', 'Passionfroot'].map((logo) => (
            <span key={logo} className="text-sm font-medium text-[#6B7280]">{logo}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
