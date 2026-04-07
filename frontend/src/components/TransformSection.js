import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Check } from 'lucide-react';

const TransformSection = () => {
  const { t } = useLanguage();
  const beforeItems = t('transform.beforeItems') || [];
  const afterItems = t('transform.afterItems') || [];

  return (
    <section id="transform" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            Transformation
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="transform-title"
          >
            {t('transform.title')}
          </h2>
        </motion.div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#FEE2E2] rounded-2xl p-8 border border-[#FECACA]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#EF4444] rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#991B1B]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {t('transform.before')}
                </h3>
              </div>
              
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1670261197450-7dc8f559bdb8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHxtZXNzeSUyMGRlc2slMjBzY2F0dGVyZWQlMjBwYXBlcnN8ZW58MHx8fHwxNzc1NTg2MTI5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Before - Messy workspace"
                  className="w-full h-48 object-cover opacity-80"
                  loading="lazy"
                />
              </div>

              <ul className="space-y-3">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#991B1B]">
                    <X className="w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#DCFCE7] rounded-2xl p-8 border border-[#BBF7D0]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#166534]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {t('transform.after')}
                </h3>
              </div>
              
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7745560/pexels-photo-7745560.jpeg"
                  alt="After - Clean workspace"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>

              <ul className="space-y-3">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#166534]">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center my-8 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:my-0"
        >
          <div className="hidden md:flex w-16 h-16 bg-[#312E81] rounded-full items-center justify-center shadow-xl z-10">
            <span className="text-white text-2xl">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;
