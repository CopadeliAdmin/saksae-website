import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Check } from 'lucide-react';

const PricingSection = () => {
  const { language } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const handleDemoClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  const plans = [
    {
      key: 'independant',
      name: language === 'fr' ? 'Indépendant' : 'Freelancer',
      target: language === 'fr' ? '1 utilisateur' : '1 user',
      desc: language === 'fr'
        ? 'Pour piloter seul vos clients, missions et revenus.'
        : 'To manage your clients, missions and revenue solo.',
      monthlyPrice: '99',
      annualPrice: '79',
      highlighted: false,
      cta: language === 'fr' ? 'Planifier une démo' : 'Schedule a demo',
      ctaAction: handleDemoClick,
      features: language === 'fr'
        ? ['CRM', 'Missions, produits & rentabilité', 'Admin & Finance', 'RH essentiel', 'Actions IA & alertes business', 'Dashboards essentiels']
        : ['CRM', 'Missions, products & profitability', 'Admin & Finance', 'Essential HR', 'AI Actions & business alerts', 'Essential dashboards'],
    },
    {
      key: 'equipe',
      name: language === 'fr' ? 'Équipe' : 'Team',
      target: language === 'fr' ? '2 à 9 utilisateurs' : '2 to 9 users',
      desc: language === 'fr'
        ? "Pour structurer l'exécution commerciale, opérationnelle et financière d'une TPE."
        : 'To structure the commercial, operational and financial execution of a small business.',
      monthlyPrice: '349',
      annualPrice: '279',
      highlighted: true,
      badge: language === 'fr' ? 'Populaire' : 'Popular',
      cta: language === 'fr' ? 'Planifier une démo' : 'Schedule a demo',
      ctaAction: handleDemoClick,
      features: language === 'fr'
        ? ['Tout le plan Indépendant', 'CRM clients & prospects', 'Missions, livrables, temps & rentabilité', 'Réunions IA', 'Revenue Center', 'Operations Center', 'Playbooks', 'Support prioritaire']
        : ['Everything in Freelancer', 'CRM clients & prospects', 'Missions, deliverables, time & profitability', 'AI Meetings', 'Revenue Center', 'Operations Center', 'Playbooks', 'Priority support'],
    },
    {
      key: 'croissance',
      name: language === 'fr' ? 'Croissance' : 'Growth',
      target: language === 'fr' ? '10 à 20 utilisateurs' : '10 to 20 users',
      desc: language === 'fr'
        ? 'Pour piloter une PME de services avec visibilité sur revenus, rentabilité, équipe et cash.'
        : 'To manage a services SME with visibility on revenue, profitability, team and cash.',
      monthlyPrice: '749',
      annualPrice: '599',
      highlighted: false,
      cta: language === 'fr' ? 'Planifier une démo' : 'Schedule a demo',
      ctaAction: handleDemoClick,
      features: language === 'fr'
        ? ['Tout le plan Équipe', 'Dashboards avancés', 'Rentabilité par client, mission et collaborateur', 'Workflows internes', 'Contrats & e-signature', 'Objectifs commerciaux', 'Pilotage cash, facturation & relances', 'Permissions avancées']
        : ['Everything in Team', 'Advanced dashboards', 'Profitability per client, mission & collaborator', 'Internal workflows', 'Contracts & e-signature', 'Sales objectives', 'Cash management, invoicing & follow-ups', 'Advanced permissions'],
    },
    {
      key: 'entreprise',
      name: language === 'fr' ? 'Entreprise' : 'Enterprise',
      target: '20+ ' + (language === 'fr' ? 'utilisateurs' : 'users'),
      desc: language === 'fr'
        ? "Pour connecter vos équipes, vos données et vos décisions à l'échelle de l'organisation."
        : 'To connect your teams, data and decisions at organizational scale.',
      monthlyPrice: language === 'fr' ? 'dès 1 200' : 'from 1,200',
      annualPrice: language === 'fr' ? 'Sur devis' : 'Custom',
      highlighted: false,
      cta: language === 'fr' ? "Contacter l'équipe" : 'Contact team',
      ctaAction: handleDemoClick,
      features: language === 'fr'
        ? ['Tout le plan Croissance', 'Multi-entités', 'Intégrations avancées', 'Automatisations sur mesure', 'Reporting dirigeant', 'Gouvernance des données', 'SLA', 'Accompagnement dédié']
        : ['Everything in Growth', 'Multi-entity', 'Advanced integrations', 'Custom automations', 'Executive reporting', 'Data governance', 'SLA', 'Dedicated support'],
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-[540px] mb-14"
        >
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="section-tag block mb-5"
          >
            {language === 'fr' ? '[05] Tarification' : '[05] Pricing'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-section-title text-[#0A0A0A] mb-5"
          >
            {language === 'fr' ? 'Simple et transparent.' : 'Simple and transparent.'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-[#52525B] leading-[1.7] mb-10"
          >
            {language === 'fr'
              ? 'Tous les outils inclus. Pas de frais cachés.'
              : 'All tools included. No hidden fees.'}
          </motion.p>

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

          {isAnnual && (
            <p className="text-xs text-[#059669] mt-3 font-medium">
              {language === 'fr' ? 'Économisez 20 % avec l\'annuel' : 'Save 20% with annual billing'}
            </p>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, pi) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: pi * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'border-2 border-[#0A0A0A] bg-[#0A0A0A] text-white'
                  : 'border border-[#E4E4E7] bg-white'
              }`}
              data-testid={`pricing-${plan.key}`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-5 px-3 py-1 text-xs font-medium bg-white text-[#0A0A0A] rounded-full shadow-sm">
                  {plan.badge}
                </span>
              )}

              {/* Plan name & target */}
              <h3 className={`text-lg font-semibold mb-0.5 ${plan.highlighted ? 'text-white' : 'text-[#0A0A0A]'}`}>
                {plan.name}
              </h3>
              <p className={`text-xs font-medium mb-3 ${plan.highlighted ? 'text-white/50' : 'text-[#9CA3AF]'}`}>
                {plan.target}
              </p>

              {/* Price */}
              <div className="mb-1">
                {plan.key === 'entreprise' ? (
                  <div>
                    <span className={`text-2xl font-semibold ${plan.highlighted ? 'text-white' : 'text-[#0A0A0A]'}`}>
                      {isAnnual ? plan.annualPrice : `€${plan.monthlyPrice}`}
                    </span>
                    {!isAnnual && (
                      <span className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-[#6B7280]'}`}>
                        /{language === 'fr' ? 'mois' : 'mo'}
                      </span>
                    )}
                  </div>
                ) : (
                  <div>
                    <span className={`text-3xl font-semibold ${plan.highlighted ? 'text-white' : 'text-[#0A0A0A]'}`}>
                      €{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-[#6B7280]'}`}>
                      /{language === 'fr' ? 'mois' : 'mo'}
                    </span>
                  </div>
                )}
              </div>

              {/* Savings hint */}
              {isAnnual && plan.key !== 'entreprise' && (
                <p className={`text-[11px] mb-4 ${plan.highlighted ? 'text-[#4ADE80]' : 'text-[#059669]'}`}>
                  {language === 'fr' ? `Au lieu de €${plan.monthlyPrice}/mois` : `Instead of €${plan.monthlyPrice}/mo`}
                </p>
              )}
              {(!isAnnual || plan.key === 'entreprise') && <div className="mb-4" />}

              {/* Description */}
              <p className={`text-xs leading-relaxed mb-5 ${plan.highlighted ? 'text-white/70' : 'text-[#6B7280]'}`}>
                {plan.desc}
              </p>

              {/* Features list */}
              <div className="flex-1 mb-6">
                <ul className="space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-[#4ADE80]' : 'text-[#059669]'
                      }`} strokeWidth={2.5} />
                      <span className={`text-[13px] leading-tight ${
                        plan.highlighted ? 'text-white/80' : 'text-[#4B5563]'
                      }`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={plan.ctaAction}
                className={`w-full py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-white text-[#0A0A0A] hover:bg-[#F3F4F6]'
                    : 'bg-[#0A0A0A] text-white hover:bg-[#1F2937]'
                }`}
                data-testid={`pricing-cta-${plan.key}`}
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
