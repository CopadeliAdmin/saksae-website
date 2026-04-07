import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';

const PricingSection = () => {
  const { t } = useLanguage();

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const plans = [
    {
      key: 'starter',
      features: 4,
    },
    {
      key: 'pro',
      features: 6,
      popular: true,
    },
    {
      key: 'enterprise',
      features: 6,
      contact: true,
    },
  ];

  const allFeatures = t('pricing.allFeatures') || [];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            Pricing
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="pricing-title"
          >
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-[#475569]">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const planData = t(`pricing.plans.${plan.key}`);
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border ${
                  isPopular ? 'border-[#312E81] shadow-xl scale-105' : 'border-[#E2E8F0]'
                }`}
                data-testid={`pricing-${plan.key}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#312E81] text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {planData?.name}
                </h3>
                <p className="text-sm text-[#475569] mb-6">
                  {planData?.desc}
                </p>

                {/* Price */}
                <div className="mb-6">
                  {typeof planData?.price === 'number' ? (
                    <>
                      <span className="text-4xl font-black text-[#0F172A]">€{planData?.price}</span>
                      <span className="text-[#475569]">/{t('pricing.perUser')}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-[#0F172A]">{planData?.price}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {allFeatures.slice(0, plan.features).map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#475569]">
                      <Check className="w-5 h-5 text-[#22C55E]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={plan.contact ? () => window.open('https://calendly.com/saksae-sales', '_blank') : handleTrialClick}
                  className={`w-full ${
                    isPopular
                      ? 'bg-[#F97316] hover:bg-[#EA580C] text-white'
                      : 'bg-white text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F7F9FC]'
                  }`}
                  data-testid={`pricing-cta-${plan.key}`}
                >
                  {plan.contact ? 'Nous contacter' : t('pricing.cta')}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
