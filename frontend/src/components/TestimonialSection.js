import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] mx-auto text-center"
        >
          {/* Quote */}
          <blockquote className="mb-10">
            <p className="text-[1.5rem] md:text-[1.75rem] font-semibold leading-[1.3] tracking-[-0.02em]">
              <span className="text-[#D4D4D8]">{t('testimonial.quote1')}</span>
              <br />
              <span className="text-[#D4D4D8]">{t('testimonial.quote2')}</span>
              <br />
              <span className="text-[#0A0A0A]">{t('testimonial.quote3')}</span>
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#E4E4E7]">
              <div className="w-full h-full bg-gradient-to-br from-[#A1A1AA] to-[#71717A]" />
            </div>
            <div className="text-left">
              <p className="text-[13px] font-medium text-[#0A0A0A]">{t('testimonial.author')}</p>
              <p className="text-[12px] text-[#A1A1AA]">{t('testimonial.role')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
