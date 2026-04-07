import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Zap } from 'lucide-react';

const AIFeedSection = () => {
  const { t } = useLanguage();
  const actions = t('aiFeed.actions') || [];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-[#EF4444]';
      case 'medium':
        return 'bg-[#F97316]';
      default:
        return 'bg-[#94A3B8]';
    }
  };

  const totalValue = actions.reduce((sum, action) => sum + (action?.impact || 0), 0);

  return (
    <section id="ai-feed" className="py-20 lg:py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            AI-Powered
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="ai-feed-title"
          >
            {t('aiFeed.title')}
          </h2>
          <p className="text-xl text-[#312E81] font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {t('aiFeed.subtitle')}
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-[#E2E8F0]">
            <Zap className="w-5 h-5 text-[#F97316]" />
            <span className="text-sm font-medium text-[#0F172A]">
              {actions.length} {t('aiFeed.actionsToday')}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-[#22C55E]/10 rounded-full px-6 py-3 border border-[#22C55E]/20">
            <span className="text-sm font-medium text-[#22C55E]">
              €{totalValue.toLocaleString()} {t('aiFeed.valueGenerated')}
            </span>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className="max-w-2xl mx-auto space-y-4">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              data-testid={`action-card-${index}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Priority indicator */}
                  <div className={`w-1 h-16 rounded-full ${getPriorityColor(action?.priority)}`} />
                  
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {action?.action}
                    </h3>
                    <p className="text-sm text-[#475569]">
                      {action?.context}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  {/* Impact */}
                  <span className="text-lg font-bold text-[#22C55E]">
                    +€{action?.impact?.toLocaleString()}
                  </span>
                  
                  {/* Execute button */}
                  <button
                    className="flex items-center gap-2 text-sm font-medium text-[#312E81] opacity-0 group-hover:opacity-100 transition-opacity"
                    data-testid={`execute-btn-${index}`}
                  >
                    {t('aiFeed.execute')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeedSection;
