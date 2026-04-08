import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] dotted-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-[#6B7280] mb-8">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleTrialClick}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
              data-testid="final-cta-primary"
            >
              {t('cta.button')}
            </button>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-white text-[#0A0A0A] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors text-center"
            >
              {t('cta.plans')}
            </a>
          </div>

          {/* Decorative shape */}
          <div className="mt-16 flex justify-center">
            <svg width="200" height="60" viewBox="0 0 200 60" fill="none" className="text-[#E5E7EB]">
              <path d="M20 30L60 10V50L20 30Z" stroke="currentColor" strokeWidth="1"/>
              <path d="M60 30L100 10V50L60 30Z" stroke="currentColor" strokeWidth="1"/>
              <path d="M100 30L140 10V50L100 30Z" stroke="currentColor" strokeWidth="1"/>
              <path d="M140 30L180 10V50L140 30Z" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
