import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { language } = useLanguage();

  const testimonials = language === 'fr' ? [
    {
      quote: 'SAKSAE a transformé notre façon de travailler. On ne gère plus, on exécute.',
      author: 'Marie Dupont',
      role: 'Directrice Générale',
      company: 'TechVision',
    },
    {
      quote: 'En 3 semaines, on a récupéré l\'équivalent de 2 jours par semaine en actions automatisées.',
      author: 'Thomas Martin',
      role: 'COO',
      company: 'DataFlow',
    },
    {
      quote: 'La clarté que SAKSAE apporte sur les priorités business est incomparable.',
      author: 'Sophie Bernard',
      role: 'Fondatrice',
      company: 'NexGen',
    },
  ] : [
    {
      quote: 'SAKSAE transformed how we work. We no longer manage, we execute.',
      author: 'Marie Dupont',
      role: 'CEO',
      company: 'TechVision',
    },
    {
      quote: 'In 3 weeks, we recovered the equivalent of 2 days per week in automated actions.',
      author: 'Thomas Martin',
      role: 'COO',
      company: 'DataFlow',
    },
    {
      quote: 'The clarity SAKSAE brings to business priorities is unmatched.',
      author: 'Sophie Bernard',
      role: 'Founder',
      company: 'NexGen',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1120px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="section-tag block mb-4">
            {language === 'fr' ? 'Témoignages' : 'Testimonials'}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E4E4E7] rounded-xl p-7 flex flex-col"
            >
              <p className="text-[15px] text-[#0A0A0A] leading-[1.7] mb-6 flex-1 tracking-[-0.01em]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#F4F4F5]">
                <div className="w-8 h-8 rounded-full bg-[#E4E4E7] flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-[#71717A]">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#0A0A0A]">{t.author}</p>
                  <p className="text-[11px] text-[#A1A1AA]">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
