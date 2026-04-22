import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="max-w-[1120px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[560px] mx-auto text-center"
        >
          <h2 className="text-2xl md:text-[1.875rem] font-semibold text-white mb-10 tracking-[-0.025em] leading-[1.2]">
            {t('cta.title')}
          </h2>
          <a
            href="/register"
            className="group inline-flex items-center gap-2.5 px-7 py-3 text-[14px] font-medium bg-white text-[#0A0A0A] rounded-lg hover:bg-[#F4F4F5] transition-all active:scale-[0.98]"
            style={{ transitionDuration: '240ms', transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
            data-testid="final-cta-primary"
          >
            {t('cta.button')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" style={{ transitionDuration: '240ms' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
