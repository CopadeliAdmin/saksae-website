import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialSection = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAFAFA] dotted-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              <span className="text-[#D1D5DB]">{t('testimonial.quote1')}</span>
              <br />
              <span className="text-[#D1D5DB]">{t('testimonial.quote2')}</span>
              <br />
              <span className="text-[#0A0A0A]">{t('testimonial.quote3')}</span>
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E5E7EB] overflow-hidden">
              {/* Placeholder for avatar */}
              <div className="w-full h-full bg-gradient-to-br from-[#9CA3AF] to-[#6B7280]" />
            </div>
            <div className="text-left">
              <p className="font-medium text-[#0A0A0A]">{t('testimonial.author')}</p>
              <p className="text-sm text-[#6B7280]">{t('testimonial.role')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
