import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, TrendingUp, Settings, ArrowUpRight } from 'lucide-react';

const AISection = () => {
  const { language } = useLanguage();

  const revenueActions = language === 'fr' ? [
    { action: 'Relance client envoyée', context: 'Devis #1234 sans réponse depuis 5j', value: '€2,500', time: 'Il y a 3 min' },
    { action: 'Facture générée', context: 'Projet terminé — TechStart', value: '€8,500', time: 'Il y a 12 min' },
    { action: 'Upsell détecté', context: 'CloudNine éligible au Pack Enterprise', value: '€12,000', time: 'Il y a 25 min' },
  ] : [
    { action: 'Client follow-up sent', context: 'Quote #1234 unanswered for 5d', value: '€2,500', time: '3 min ago' },
    { action: 'Invoice generated', context: 'Project completed — TechStart', value: '€8,500', time: '12 min ago' },
    { action: 'Upsell detected', context: 'CloudNine eligible for Enterprise Pack', value: '€12,000', time: '25 min ago' },
  ];

  const operationalActions = language === 'fr' ? [
    { action: 'Réunion brief préparé', context: 'Call Acme Corp dans 30 min', domain: 'CRM', priority: 'Haute' },
    { action: 'Congé approuvé automatiquement', context: 'Lucas Petit — 15-19 Avril', domain: 'RH', priority: 'Moyenne' },
    { action: 'Playbook déclenché', context: 'Onboarding nouveau client NexGen', domain: 'Management', priority: 'Haute' },
  ] : [
    { action: 'Meeting brief prepared', context: 'Acme Corp call in 30 min', domain: 'CRM', priority: 'High' },
    { action: 'Leave auto-approved', context: 'Lucas Petit — Apr 15-19', domain: 'HR', priority: 'Medium' },
    { action: 'Playbook triggered', context: 'New client onboarding NexGen', domain: 'Management', priority: 'High' },
  ];

  const priorityStyles = {
    Haute: 'bg-[#FEE2E2] text-[#DC2626]',
    High: 'bg-[#FEE2E2] text-[#DC2626]',
    Moyenne: 'bg-[#FEF3C7] text-[#D97706]',
    Medium: 'bg-[#FEF3C7] text-[#D97706]',
    Basse: 'bg-[#F3F4F6] text-[#6B7280]',
    Low: 'bg-[#F3F4F6] text-[#6B7280]',
  };

  // Interleave revenue and operational actions
  const allActions = [];
  const maxLen = Math.max(revenueActions.length, operationalActions.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < revenueActions.length) allActions.push({ ...revenueActions[i], type: 'revenue' });
    if (i < operationalActions.length) allActions.push({ ...operationalActions[i], type: 'operational' });
  }

  const totalRevenue = revenueActions.reduce((sum, a) => {
    const num = parseFloat(a.value.replace(/[€,]/g, '').replace(',', ''));
    return sum + num;
  }, 0);

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section id="ai" className="py-24 md:py-32 bg-white grid-pattern">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-6"
        >
          <span className="section-tag block mb-4">
            {language === 'fr' ? '[03] Intelligence artificielle' : '[03] Artificial Intelligence'}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr' ? "L'IA en action." : 'AI in action.'}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {language === 'fr'
              ? "Chaque jour, SAKSAE analyse vos données, identifie les signaux et exécute les actions à impact — revenu et opérationnel."
              : 'Every day, SAKSAE analyzes your data, identifies signals and executes high-impact actions — revenue and operational.'}
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-6 mb-6"
        >
          <div className="flex items-center gap-3 px-4 py-2.5 bg-[#0A0A0A] text-white rounded-lg">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">AI Action Feed</span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#059669]" />
            <span className="text-sm text-[#6B7280]">
              <span className="font-semibold text-[#0A0A0A]">{revenueActions.length}</span> {language === 'fr' ? 'actions revenu' : 'revenue actions'}
            </span>
            <span className="text-sm font-semibold text-[#059669]">+€{(totalRevenue / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <span className="text-sm text-[#6B7280]">
              <span className="font-semibold text-[#0A0A0A]">{operationalActions.length}</span> {language === 'fr' ? 'actions opérationnelles' : 'operational actions'}
            </span>
          </div>
        </motion.div>

        {/* Action Feed - 2 columns */}
        <div className="grid md:grid-cols-2 gap-3">
          {/* Revenue column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-[#059669]" />
              <span className="text-sm font-semibold text-[#0A0A0A]">
                {language === 'fr' ? 'Revenu' : 'Revenue'}
              </span>
            </div>
            <div className="space-y-2.5">
              {revenueActions.map((action, index) => (
                <motion.div
                  key={`rev-${index}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="group relative bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#059669]/40 hover:shadow-[0_2px_12px_rgba(5,150,105,0.08)] transition-all cursor-pointer overflow-hidden"
                  data-testid={`revenue-action-${index}`}
                >
                  {/* Green left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#059669] rounded-l-xl" />

                  <div className="flex items-start justify-between gap-3 pl-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-medium text-[#0A0A0A] truncate">{action.action}</h4>
                      </div>
                      <p className="text-xs text-[#6B7280] truncate">{action.context}</p>
                    </div>
                    <div className="flex flex-col items-end flex-shrink-0">
                      <span className="text-sm font-semibold text-[#059669]">+{action.value}</span>
                      <span className="text-[10px] text-[#9CA3AF] mt-0.5">{action.time}</span>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Operational column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#0A0A0A]">
                {language === 'fr' ? 'Opérationnel' : 'Operational'}
              </span>
            </div>
            <div className="space-y-2.5">
              {operationalActions.map((action, index) => (
                <motion.div
                  key={`op-${index}`}
                  custom={index + 0.5}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="group relative bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#3B82F6]/40 hover:shadow-[0_2px_12px_rgba(59,130,246,0.08)] transition-all cursor-pointer overflow-hidden"
                  data-testid={`operational-action-${index}`}
                >
                  {/* Blue left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3B82F6] rounded-l-xl" />

                  <div className="pl-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-[#0A0A0A] truncate mb-1">{action.action}</h4>
                        <p className="text-xs text-[#6B7280] truncate">{action.context}</p>
                      </div>
                      <span className="text-[10px] text-[#9CA3AF] flex-shrink-0">
                        {index === 0 ? (language === 'fr' ? 'Il y a 3 min' : '3 min ago') : index === 1 ? (language === 'fr' ? 'Il y a 12 min' : '12 min ago') : (language === 'fr' ? 'Il y a 25 min' : '25 min ago')}
                      </span>
                    </div>

                    {/* Domain + Priority tags */}
                    <div className="flex items-center gap-2 mt-2.5">
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#DBEAFE] text-[#2563EB]">
                        {action.domain}
                      </span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${priorityStyles[action.priority]}`}>
                        {action.priority}
                      </span>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#3B82F6]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
