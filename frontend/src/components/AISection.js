import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, ArrowRight } from 'lucide-react';

const AISection = () => {
  const { language } = useLanguage();
  
  const actions = language === 'fr' ? [
    { action: 'Relance client envoyée', context: 'Devis #1234 sans réponse depuis 5 jours', impact: '€2,500' },
    { action: 'Réunion préparée', context: 'Brief automatique pour call Acme Corp', impact: '€1,200' },
    { action: 'Facture générée', context: 'Projet terminé - TechStart', impact: '€8,500' },
    { action: 'Lead qualifié', context: 'Score 85/100 - Prêt pour contact', impact: '€3,200' }
  ] : [
    { action: 'Client follow-up sent', context: 'Quote #1234 unanswered for 5 days', impact: '€2,500' },
    { action: 'Meeting prepared', context: 'Auto brief for Acme Corp call', impact: '€1,200' },
    { action: 'Invoice generated', context: 'Project completed - TechStart', impact: '€8,500' },
    { action: 'Lead qualified', context: 'Score 85/100 - Ready for contact', impact: '€3,200' }
  ];

  return (
    <section id="ai" className="py-12 md:py-16 bg-white grid-pattern">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10"
        >
          <span className="section-tag block mb-4">
            {language === 'fr' ? '[03] Intelligence artificielle' : '[03] Artificial Intelligence'}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr' ? "L'IA en action." : "AI in action."}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {language === 'fr'
              ? "Chaque jour, SAKSAE analyse vos données de revenus et les signaux collectés sur vos outils et exécute les actions à impact."
              : "Every day, SAKSAE analyzes your revenue data and signals collected from your tools and executes high-impact actions."}
          </p>
        </motion.div>

        {/* Action Feed */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-[#0A0A0A] text-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">AI Action Feed</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-semibold mb-1">12</p>
                  <p className="text-xs text-white/60">{language === 'fr' ? 'Actions aujourd\'hui' : 'Actions today'}</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold mb-1">€15.4k</p>
                  <p className="text-xs text-white/60">{language === 'fr' ? 'Valeur générée' : 'Value generated'}</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] mb-2">
                {language === 'fr' ? 'Comment ça marche' : 'How it works'}
              </p>
              <p className="text-sm text-[#0A0A0A]">
                {language === 'fr' 
                  ? "SAKSAE analyse vos patterns de données, identifie les opportunités et agit automatiquement. Chaque action est enregistrée avec son impact estimé."
                  : "SAKSAE analyzes your data patterns, identifies opportunities, and takes action automatically. Each action is logged with its estimated impact."}
              </p>
            </div>
          </motion.div>

          {/* Right - Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-[#E5E7EB] rounded-lg p-4 hover:border-[#0A0A0A] transition-all cursor-pointer"
                data-testid={`action-card-${index}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <h4 className="font-medium text-sm text-[#0A0A0A]">{action.action}</h4>
                    </div>
                    <p className="text-xs text-[#6B7280]">{action.context}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-[#059669]">+{action.impact}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-[#6B7280] flex items-center gap-1">
                    {language === 'fr' ? 'Voir détails' : 'View details'} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
