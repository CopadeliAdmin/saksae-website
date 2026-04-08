import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, ArrowRight } from 'lucide-react';

const AISection = () => {
  const { t } = useLanguage();
  const actions = t('ai.actions') || [];

  return (
    <section id="ai" className="py-24 md:py-32 bg-white grid-pattern">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="section-tag block mb-4">
            {t('ai.tag')}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {t('ai.title')}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {t('ai.desc')}
          </p>
        </motion.div>

        {/* Action Feed */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#0A0A0A] text-white rounded-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">AI Action Feed</span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-semibold mb-1">12</p>
                  <p className="text-sm text-white/60">Actions today</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold mb-1">€15.4k</p>
                  <p className="text-sm text-white/60">Value generated</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] mb-2">How it works</p>
              <p className="text-[#0A0A0A]">
                SAKSAE analyzes your data patterns, identifies opportunities, and takes action automatically. Each action is logged with its estimated impact.
              </p>
            </div>
          </motion.div>

          {/* Right - Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-[#E5E7EB] rounded-xl p-5 hover:border-[#0A0A0A] transition-all cursor-pointer"
                data-testid={`action-card-${index}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      <h4 className="font-medium text-[#0A0A0A]">{action?.action}</h4>
                    </div>
                    <p className="text-sm text-[#6B7280]">{action?.context}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-[#059669]">+{action?.impact}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-[#6B7280] flex items-center gap-1">
                    View details <ArrowRight className="w-3 h-3" />
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
