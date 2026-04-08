import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, FolderKanban, BookOpen, PenTool, Calendar, DollarSign, Video, Mic } from 'lucide-react';

const PlatformSection = () => {
  const { t } = useLanguage();

  const modules = [
    { key: 'crm', icon: Users },
    { key: 'projects', icon: FolderKanban },
    { key: 'playbooks', icon: BookOpen },
    { key: 'signatures', icon: PenTool },
    { key: 'calendar', icon: Calendar },
    { key: 'finance', icon: DollarSign },
    { key: 'meetings', icon: Video },
    { key: 'memos', icon: Mic },
  ];

  return (
    <section id="platform" className="py-24 md:py-32 bg-white grid-pattern">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="section-tag block mb-4" data-testid="platform-tag">
            {t('platform.tag')}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {t('platform.title')}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {t('platform.desc')}
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const moduleData = t(`platform.modules.${module.key}`);
            return (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-5 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#0A0A0A] transition-all cursor-pointer"
                data-testid={`module-${module.key}`}
              >
                <Icon className="w-5 h-5 text-[#6B7280] group-hover:text-[#0A0A0A] mb-3 transition-colors" strokeWidth={1.5} />
                <h3 className="font-medium text-[#0A0A0A] mb-1">
                  {moduleData?.name || module.key}
                </h3>
                <p className="text-sm text-[#9CA3AF]">
                  {moduleData?.desc || ''}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
