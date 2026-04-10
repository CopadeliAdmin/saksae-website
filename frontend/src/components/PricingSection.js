import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Minus, Plus } from 'lucide-react';

const PricingSection = () => {
  const { language } = useLanguage();
  const [tpeUsers, setTpeUsers] = useState(3);
  const [pmeUsers, setPmeUsers] = useState(15);

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const handleContactClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  // Pricing calculation - monthly with annual discount
  const monthlyPrices = {
    independant: 79,
    tpe: 59,
    pme: 49
  };

  // 20% annual discount - show monthly price
  const annualDiscount = 0.20;

  const getDiscountedMonthly = (monthly) => {
    return Math.round(monthly * (1 - annualDiscount));
  };

  const features = {
    fr: {
      operations: ['CRM', 'Management', 'Finances', 'Appro'],
      tools: ['Réunions IA', 'Mémo IA', 'Signatures', 'Calendrier']
    },
    en: {
      operations: ['CRM', 'Management', 'Finance', 'Supply'],
      tools: ['AI Meetings', 'AI Memos', 'Signatures', 'Calendar']
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-16 bg-white grid-pattern">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10"
        >
          <span className="section-tag block mb-4">
            {language === 'fr' ? '[05] Tarification' : '[05] Pricing'}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr' ? 'Simple et transparent.' : 'Simple and transparent.'}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {language === 'fr' 
              ? 'Facturation annuelle. 20% d\'économie par rapport au mensuel.'
              : 'Annual billing. Save 20% compared to monthly.'}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          
          {/* Indépendant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl border border-[#E5E7EB] bg-white"
            data-testid="pricing-independant"
          >
            <h3 className="text-lg font-semibold text-[#0A0A0A] mb-1">
              {language === 'fr' ? 'Indépendant' : 'Freelancer'}
            </h3>
            <p className="text-sm text-[#6B7280] mb-4">
              {language === 'fr' ? '1 utilisateur' : '1 user'}
            </p>

            <div className="mb-2">
              <span className="text-4xl font-semibold text-[#0A0A0A]">
                €{getDiscountedMonthly(monthlyPrices.independant)}
              </span>
              <span className="text-sm text-[#6B7280]">/{language === 'fr' ? 'mois' : 'mo'}</span>
            </div>
            <p className="text-xs text-[#059669] mb-4">
              {language === 'fr' ? `Au lieu de €${monthlyPrices.independant}/mois (abo. annuel)` : `Instead of €${monthlyPrices.independant}/mo (annual plan)`}
            </p>

            {/* Features */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 mb-2">
                {features[language].operations.map((op, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-[#F3F4F6] text-[#6B7280]">
                    {op}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {features[language].tools.map((tool, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-[#F3F4F6] text-[#6B7280]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleTrialClick}
              className="w-full py-2.5 text-sm font-medium rounded-lg bg-[#0A0A0A] text-white hover:bg-[#1F2937] transition-colors"
            >
              {language === 'fr' ? 'Commencer l\'essai' : 'Start trial'}
            </button>
          </motion.div>

          {/* TPE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-6 rounded-xl border border-[#0A0A0A] bg-[#0A0A0A] text-white"
            data-testid="pricing-tpe"
          >
            <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium bg-white text-[#0A0A0A] rounded-full">
              Popular
            </span>

            <h3 className="text-lg font-semibold text-white mb-1">TPE</h3>
            <p className="text-sm text-white/60 mb-4">
              {language === 'fr' ? 'Jusqu\'à 9 utilisateurs' : 'Up to 9 users'}
            </p>

            {/* User selector */}
            <div className="flex items-center justify-between mb-3 bg-white/10 rounded-lg p-2">
              <button
                onClick={() => setTpeUsers(Math.max(1, tpeUsers - 1))}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="text-center">
                <span className="text-2xl font-semibold">{tpeUsers}</span>
                <span className="text-sm text-white/60 ml-1">{language === 'fr' ? 'utilisateurs' : 'users'}</span>
              </div>
              <button
                onClick={() => setTpeUsers(Math.min(9, tpeUsers + 1))}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-2">
              <span className="text-4xl font-semibold text-white">
                €{getDiscountedMonthly(monthlyPrices.tpe) * tpeUsers}
              </span>
              <span className="text-sm text-white/60">/{language === 'fr' ? 'mois' : 'mo'}</span>
            </div>
            <p className="text-xs text-[#4ADE80] mb-4">
              {language === 'fr' ? `€${getDiscountedMonthly(monthlyPrices.tpe)}/utilisateur/mois (abo. annuel)` : `€${getDiscountedMonthly(monthlyPrices.tpe)}/user/mo (annual plan)`}
            </p>

            {/* Features */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 mb-2">
                {features[language].operations.map((op, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/80">
                    {op}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {features[language].tools.map((tool, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleTrialClick}
              className="w-full py-2.5 text-sm font-medium rounded-lg bg-white text-[#0A0A0A] hover:bg-[#F3F4F6] transition-colors"
            >
              {language === 'fr' ? 'Commencer l\'essai' : 'Start trial'}
            </button>
          </motion.div>

          {/* PME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-6 rounded-xl border border-[#E5E7EB] bg-white"
            data-testid="pricing-pme"
          >
            <h3 className="text-lg font-semibold text-[#0A0A0A] mb-1">PME</h3>
            <p className="text-sm text-[#6B7280] mb-4">
              {language === 'fr' ? 'De 10 à 49 utilisateurs' : '10 to 49 users'}
            </p>

            {/* User selector */}
            <div className="flex items-center justify-between mb-3 bg-[#F3F4F6] rounded-lg p-2">
              <button
                onClick={() => setPmeUsers(Math.max(10, pmeUsers - 1))}
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
              >
                <Minus className="w-4 h-4 text-[#6B7280]" />
              </button>
              <div className="text-center">
                <span className="text-2xl font-semibold text-[#0A0A0A]">{pmeUsers}</span>
                <span className="text-sm text-[#6B7280] ml-1">{language === 'fr' ? 'utilisateurs' : 'users'}</span>
              </div>
              <button
                onClick={() => setPmeUsers(Math.min(49, pmeUsers + 1))}
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
              >
                <Plus className="w-4 h-4 text-[#6B7280]" />
              </button>
            </div>

            <div className="mb-2">
              <span className="text-4xl font-semibold text-[#0A0A0A]">
                €{getDiscountedMonthly(monthlyPrices.pme) * pmeUsers}
              </span>
              <span className="text-sm text-[#6B7280]">/{language === 'fr' ? 'mois' : 'mo'}</span>
            </div>
            <p className="text-xs text-[#059669] mb-4">
              {language === 'fr' ? `€${getDiscountedMonthly(monthlyPrices.pme)}/utilisateur/mois (abo. annuel)` : `€${getDiscountedMonthly(monthlyPrices.pme)}/user/mo (annual plan)`}
            </p>

            {/* Features */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 mb-2">
                {features[language].operations.map((op, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-[#F3F4F6] text-[#6B7280]">
                    {op}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {features[language].tools.map((tool, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded bg-[#F3F4F6] text-[#6B7280]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleTrialClick}
              className="w-full py-2.5 text-sm font-medium rounded-lg bg-[#0A0A0A] text-white hover:bg-[#1F2937] transition-colors"
            >
              {language === 'fr' ? 'Commencer l\'essai' : 'Start trial'}
            </button>
          </motion.div>
        </div>

        {/* Enterprise - Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#0A0A0A] mb-1">
                {language === 'fr' ? 'Entreprise' : 'Enterprise'}
              </h3>
              <p className="text-sm text-[#6B7280]">
                {language === 'fr' 
                  ? 'Solution sur mesure et personnalisée pour les grandes organisations.'
                  : 'Custom and personalized solution for large organizations.'}
              </p>
            </div>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors whitespace-nowrap"
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
