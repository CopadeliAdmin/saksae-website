import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const { language } = useLanguage();

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const handleContactClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  const plans = [
    {
      key: 'independant',
      name: { fr: 'Indépendant', en: 'Freelancer' },
      price: '79',
      desc: { fr: '1 utilisateur', en: '1 user' },
    },
    {
      key: 'tpe',
      name: { fr: 'TPE', en: 'Small Business' },
      price: '59',
      desc: { fr: "Jusqu'à 9 utilisateurs", en: 'Up to 9 users' },
      popular: true,
    },
    {
      key: 'pme',
      name: { fr: 'PME', en: 'Medium Business' },
      price: '49',
      desc: { fr: 'De 10 à 49 utilisateurs', en: '10 to 49 users' },
    },
  ];

  const features = {
    fr: {
      operations: ['CRM', 'Management', 'Finances', 'Approvisionnements', 'RH', 'Produits'],
      tools: ['Réunions IA', 'Mémo IA', 'Signatures', 'Calendrier', 'Projets', 'Playbooks']
    },
    en: {
      operations: ['CRM', 'Management', 'Finance', 'Supply Chain', 'HR', 'Products'],
      tools: ['AI Meetings', 'AI Memos', 'Signatures', 'Calendar', 'Projects', 'Playbooks']
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
            {language === 'fr' ? '[04] Tarification' : '[04] Pricing'}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr' ? 'Simple et transparent.' : 'Simple and transparent.'}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {language === 'fr' 
              ? 'Tous les modules. Tous les outils IA. Un prix unique par utilisateur.'
              : 'All modules. All AI tools. One price per user.'}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border ${isPopular ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white' : 'border-[#E5E7EB] bg-white'}`}
                data-testid={`pricing-${plan.key}`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium bg-white text-[#0A0A0A] rounded-full">
                    Popular
                  </span>
                )}

                <h3 className={`text-lg font-semibold mb-1 ${isPopular ? 'text-white' : 'text-[#0A0A0A]'}`}>
                  {plan.name[language]}
                </h3>
                <p className={`text-sm mb-4 ${isPopular ? 'text-white/60' : 'text-[#6B7280]'}`}>
                  {plan.desc[language]}
                </p>

                <div className="mb-4">
                  <span className={`text-4xl font-semibold ${isPopular ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    €{plan.price}
                  </span>
                  <span className={`text-sm ${isPopular ? 'text-white/60' : 'text-[#6B7280]'}`}>
                    /{language === 'fr' ? 'mois' : 'mo'}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className={`text-xs font-medium mb-2 ${isPopular ? 'text-white/70' : 'text-[#6B7280]'}`}>
                    {language === 'fr' ? 'Toutes les opérations' : 'All operations'}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {features[language].operations.slice(0, 4).map((op, i) => (
                      <span key={i} className={`text-xs px-2 py-0.5 rounded ${isPopular ? 'bg-white/10 text-white/80' : 'bg-[#F3F4F6] text-[#6B7280]'}`}>
                        {op}
                      </span>
                    ))}
                  </div>
                  <p className={`text-xs font-medium mb-2 ${isPopular ? 'text-white/70' : 'text-[#6B7280]'}`}>
                    {language === 'fr' ? 'Tous les outils IA' : 'All AI tools'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {features[language].tools.slice(0, 4).map((tool, i) => (
                      <span key={i} className={`text-xs px-2 py-0.5 rounded ${isPopular ? 'bg-white/10 text-white/80' : 'bg-[#F3F4F6] text-[#6B7280]'}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleTrialClick}
                  className={`w-full py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isPopular
                      ? 'bg-white text-[#0A0A0A] hover:bg-[#F3F4F6]'
                      : 'bg-[#0A0A0A] text-white hover:bg-[#1F2937]'
                  }`}
                  data-testid={`pricing-cta-${plan.key}`}
                >
                  {language === 'fr' ? 'Commencer l\'essai' : 'Start trial'}
                </button>
              </motion.div>
            );
          })}
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
