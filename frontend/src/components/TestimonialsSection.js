import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = t('testimonials.items') || [];

  const logos = [
    'https://images.unsplash.com/photo-1496200186974-4293800e2c20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NzU1ODI0NDh8MA&ixlib=rb-4.1.0&q=85&w=100',
    'https://images.pexels.com/photos/4744755/pexels-photo-4744755.jpeg?w=100',
    'https://images.unsplash.com/photo-1619551734325-81aaf323686c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nb3xlbnwwfHx8fDE3NzU1ODI0NDh8MA&ixlib=rb-4.1.0&q=85&w=100',
  ];

  const testimonialImages = [
    'https://images.pexels.com/photos/28442317/pexels-photo-28442317.jpeg?w=100',
    'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NTU4NjExM3ww&ixlib=rb-4.1.0&q=85&w=100',
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            Social Proof
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="testimonials-title"
          >
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-12 mb-16 opacity-50"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E2E8F0] relative"
              data-testid={`testimonial-${index}`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#312E81]/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-[#0F172A] mb-6 leading-relaxed">
                "{testimonial?.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonialImages[index] || testimonialImages[0]}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-[#0F172A]">{testimonial?.name}</p>
                  <p className="text-sm text-[#475569]">{testimonial?.role}</p>
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
