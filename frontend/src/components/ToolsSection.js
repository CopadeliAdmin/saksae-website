import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, FolderKanban, BookOpen, PenTool, Calendar, DollarSign, Video, Mic } from 'lucide-react';

const ToolsSection = () => {
  const { t } = useLanguage();

  const modules = [
    { key: 'crm', icon: Users, color: '#312E81' },
    { key: 'projects', icon: FolderKanban, color: '#4338CA' },
    { key: 'playbooks', icon: BookOpen, color: '#6366F1' },
    { key: 'signatures', icon: PenTool, color: '#8B5CF6' },
    { key: 'calendar', icon: Calendar, color: '#A855F7' },
    { key: 'finance', icon: DollarSign, color: '#22C55E' },
    { key: 'meetings', icon: Video, color: '#F97316' },
    { key: 'memos', icon: Mic, color: '#EF4444' },
  ];

  const scrollToCost = () => {
    const element = document.getElementById('cost-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tools" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            Platform
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-6"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="tools-title"
          >
            {t('tools.title')}
          </h2>
          <p className="text-lg text-[#475569]">
            {t('tools.description')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const moduleData = t(`tools.modules.${module.key}`);
            return (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                data-testid={`tool-${module.key}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${module.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: module.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {moduleData?.name || module.key}
                </h3>
                <p className="text-sm text-[#475569]">
                  {moduleData?.desc || ''}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Punchline & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-semibold text-[#0F172A] mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {t('tools.punchline')}
          </p>
          <button
            onClick={scrollToCost}
            className="inline-flex items-center gap-2 text-[#F97316] font-medium hover:gap-4 transition-all"
            data-testid="tools-cta"
          >
            {t('tools.cta')}
            <span>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
