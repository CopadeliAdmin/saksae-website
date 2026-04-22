import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            {t('cta.title')}
          </h2>
          <p className="text-sm text-[#9CA3AF] mb-6">
            {t('cta.subtitle')}
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-white text-[#0A0A0A] rounded-lg hover:bg-[#F3F4F6] transition-colors"
            data-testid="final-cta-primary"
          >
            {t('cta.button')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
