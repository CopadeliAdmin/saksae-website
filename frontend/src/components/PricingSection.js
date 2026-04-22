import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Minus, Plus, Check } from 'lucide-react';

const PricingSection = () => {
  const { language } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);
  const [tpeUsers, setTpeUsers] = useState(3);
  const [pmeUsers, setPmeUsers] = useState(15);

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const handleContactClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  const monthlyPrices = { independant: 79, tpe: 59, pme: 49 };

  const getPrice = (base) => isAnnual ? Math.round(base * 0.8) : base;

  const plans = [
    {
      key: 'independant',
      name: language === 'fr' ? 'Indépendant' : 'Freelancer',
      desc: language === 'fr' ? '1 utilisateur' : '1 user',
      price: getPrice(monthlyPrices.independant),
      fullPrice: monthlyPrices.independant,
      total: null,
      perUser: null,
      highlighted: false,
      features: language === 'fr'
        ? ['CRM', 'Management', 'Services ou Produits', 'Admin et Finances', 'RH', 'Actions IA']
        : ['CRM', 'Management', 'Services or Products', 'Admin & Finance', 'HR', 'AI Actions'],
    },
    {
      key: 'tpe',
      name: 'TPE',
      desc: language === 'fr' ? `${tpeUsers} utilisateurs` : `${tpeUsers} users`,
      price: getPrice(monthlyPrices.tpe) * tpeUsers,
      fullPrice: monthlyPrices.tpe * tpeUsers,
      perUser: getPrice(monthlyPrices.tpe),
      perUserFull: monthlyPrices.tpe,
      highlighted: true,
      userControl: { value: tpeUsers, set: setTpeUsers, min: 1, max: 9 },
      features: language === 'fr'
        ? ['CRM', 'Management', 'Services ou Produits', 'Admin et Finances', 'RH', 'Revenus Center', 'Opérations Center', 'Actions IA']
        : ['CRM', 'Management', 'Services or Products', 'Admin & Finance', 'HR', 'Revenue Center', 'Operations Center', 'AI Actions'],
    },
    {
      key: 'pme',
      name: 'PME',
      desc: language === 'fr' ? `${pmeUsers} utilisateurs` : `${pmeUsers} users`,
      price: getPrice(monthlyPrices.pme) * pmeUsers,
      fullPrice: monthlyPrices.pme * pmeUsers,
      perUser: getPrice(monthlyPrices.pme),
      perUserFull: monthlyPrices.pme,
      highlighted: false,
      userControl: { value: pmeUsers, set: setPmeUsers, min: 10, max: 49 },
      features: language === 'fr'
        ? ['CRM', 'Management', 'Services ou Produits', 'Admin et Finances', 'RH', 'Revenus Center', 'Opérations Center', 'Actions IA']
        : ['CRM', 'Management', 'Services or Products', 'Admin & Finance', 'HR', 'Revenue Center', 'Operations Center', 'AI Actions'],
    },
  ];

  return (
    <section id="pricing" className="py-32 md:py-40 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-[540px] mb-14"
        >
          <span className="section-tag block mb-4">
            {language === 'fr' ? '[05] Tarification' : '[05] Pricing'}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr' ? 'Simple et transparent.' : 'Simple and transparent.'}
          </h2>
          <p className="text-base text-[#52525B] leading-[1.7] mb-10">
            {language === 'fr'
              ? 'Tous les outils inclus. Abonnements par utilisateurs.'
              : 'All tools included. Per-user subscriptions.'}
          </p>

          {/* Toggle Mensuel / Annuel */}
          <div className="inline-flex items-center bg-[#F4F4F5] rounded-full p-1" data-testid="billing-toggle">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-[13px] font-medium rounded-full transition-all ${
                !isAnnual
                  ? 'bg-white text-[#0A0A0A] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                  : 'text-[#A1A1AA] hover:text-[#52525B]'
              }`}
              style={{ transitionDuration: '240ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              data-testid="billing-monthly"
            >
              {language === 'fr' ? 'Mensuel' : 'Monthly'}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-[13px] font-medium rounded-full transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-white text-[#0A0A0A] shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                  : 'text-[#A1A1AA] hover:text-[#52525B]'
              }`}
              style={{ transitionDuration: '240ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              data-testid="billing-annual"
            >
              {language === 'fr' ? 'Annuel' : 'Annual'}
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#16A34A]">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {plans.map((plan, pi) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: pi * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-xl p-7 flex flex-col ${
                plan.highlighted
                  ? 'border-2 border-[#0A0A0A] bg-[#0A0A0A] text-white'
                  : 'border border-[#E4E4E7] bg-white'
              }`}
              data-testid={`pricing-${plan.key}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium bg-white text-[#0A0A0A] rounded-full">
                  Popular
                </span>
              )}

              {/* Plan name */}
              <h3 className={`text-lg font-semibold mb-1 ${plan.highlighted ? 'text-white' : 'text-[#0A0A0A]'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? 'text-white/60' : 'text-[#6B7280]'}`}>
                {plan.desc}
              </p>

              {/* User selector */}
              {plan.userControl && (
                <div className={`flex items-center justify-between mb-4 rounded-lg p-2 ${
                  plan.highlighted ? 'bg-white/10' : 'bg-[#F3F4F6]'
                }`}>
                  <button
                    onClick={() => plan.userControl.set(Math.max(plan.userControl.min, plan.userControl.value - 1))}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      plan.highlighted ? 'bg-white/10 hover:bg-white/20' : 'bg-white hover:bg-[#E5E7EB]'
                    }`}
                  >
                    <Minus className={`w-4 h-4 ${plan.highlighted ? 'text-white' : 'text-[#6B7280]'}`} />
                  </button>
                  <div className="text-center">
                    <span className={`text-xl font-semibold ${plan.highlighted ? 'text-white' : 'text-[#0A0A0A]'}`}>
                      {plan.userControl.value}
                    </span>
                    <span className={`text-xs ml-1 ${plan.highlighted ? 'text-white/60' : 'text-[#6B7280]'}`}>
                      {language === 'fr' ? 'utilisateurs' : 'users'}
                    </span>
                  </div>
                  <button
                    onClick={() => plan.userControl.set(Math.min(plan.userControl.max, plan.userControl.value + 1))}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      plan.highlighted ? 'bg-white/10 hover:bg-white/20' : 'bg-white hover:bg-[#E5E7EB]'
                    }`}
                  >
                    <Plus className={`w-4 h-4 ${plan.highlighted ? 'text-white' : 'text-[#6B7280]'}`} />
                  </button>
                </div>
              )}

              {/* Price */}
              <div className="mb-1">
                <span className={`text-4xl font-semibold ${plan.highlighted ? 'text-white' : 'text-[#0A0A0A]'}`}>
                  €{plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-[#6B7280]'}`}>
                  /{language === 'fr' ? 'mois' : 'mo'}
                </span>
              </div>

              {/* Price details */}
              <div className="mb-5">
                {isAnnual && plan.price !== plan.fullPrice && (
                  <p className={`text-xs ${plan.highlighted ? 'text-[#4ADE80]' : 'text-[#059669]'}`}>
                    {language === 'fr' ? `Au lieu de €${plan.fullPrice}/mois` : `Instead of €${plan.fullPrice}/mo`}
                  </p>
                )}
                {plan.perUser && (
                  <p className={`text-xs mt-0.5 ${plan.highlighted ? 'text-white/50' : 'text-[#9CA3AF]'}`}>
                    {language === 'fr'
                      ? `soit €${plan.perUser}/utilisateur/mois`
                      : `i.e. €${plan.perUser}/user/mo`}
                  </p>
                )}
              </div>

              {/* Features list */}
              <div className="flex-1 mb-6">
                <ul className="space-y-2.5">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 flex-shrink-0 ${
                        plan.highlighted ? 'text-[#4ADE80]' : 'text-[#059669]'
                      }`} strokeWidth={2} />
                      <span className={`text-sm ${
                        plan.highlighted ? 'text-white/80' : 'text-[#4B5563]'
                      }`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={handleTrialClick}
                className={`w-full py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-[#0A0A0A] hover:bg-[#F3F4F6]'
                    : 'bg-[#0A0A0A] text-white hover:bg-[#1F2937]'
                }`}
                data-testid={`pricing-cta-${plan.key}`}
              >
                {language === 'fr' ? '15 jours d\'essai gratuit' : '15-day free trial'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise */}
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
                  ? '50+ utilisateurs — Solution sur mesure, déploiement dédié et accompagnement personnalisé.'
                  : '50+ users — Custom solution, dedicated deployment and personalized support.'}
              </p>
            </div>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors whitespace-nowrap"
              data-testid="pricing-cta-enterprise"
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
