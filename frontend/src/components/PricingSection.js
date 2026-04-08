import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const { t } = useLanguage();

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const handleContactClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  const plans = ['starter', 'pro', 'enterprise'];
  const features = t('pricing.features') || [];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white grid-pattern">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="section-tag block mb-4">
            {t('pricing.tag')}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {t('pricing.desc')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((planKey, index) => {
            const plan = t(`pricing.plans.${planKey}`);
            const isPopular = plan?.popular;
            const isEnterprise = planKey === 'enterprise';

            return (
              <motion.div
                key={planKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border ${isPopular ? 'border-[#0A0A0A] bg-[#0A0A0A] text-white' : 'border-[#E5E7EB] bg-white'}`}
                data-testid={`pricing-${planKey}`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium bg-white text-[#0A0A0A] rounded-full">
                    Popular
                  </span>
                )}

                <h3 className={`text-lg font-semibold mb-1 ${isPopular ? 'text-white' : 'text-[#0A0A0A]'}`}>
                  {plan?.name}
                </h3>
                <p className={`text-sm mb-4 ${isPopular ? 'text-white/60' : 'text-[#6B7280]'}`}>
                  {plan?.desc}
                </p>

                <div className="mb-6">
                  {!isEnterprise ? (
                    <>
                      <span className={`text-4xl font-semibold ${isPopular ? 'text-white' : 'text-[#0A0A0A]'}`}>
                        €{plan?.price}
                      </span>
                      <span className={`text-sm ${isPopular ? 'text-white/60' : 'text-[#6B7280]'}`}>/user/mo</span>
                    </>
                  ) : (
                    <span className={`text-2xl font-semibold ${isPopular ? 'text-white' : 'text-[#0A0A0A]'}`}>
                      {plan?.price}
                    </span>
                  )}
                </div>

                <p className={`text-sm mb-6 ${isPopular ? 'text-white/60' : 'text-[#6B7280]'}`}>
                  {plan?.users}
                </p>

                <ul className="space-y-3 mb-6">
                  {features.slice(0, planKey === 'starter' ? 3 : 5).map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${isPopular ? 'text-white/80' : 'text-[#6B7280]'}`}>
                      <Check className={`w-4 h-4 ${isPopular ? 'text-white' : 'text-[#0A0A0A]'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={isEnterprise ? handleContactClick : handleTrialClick}
                  className={`w-full py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isPopular
                      ? 'bg-white text-[#0A0A0A] hover:bg-[#F3F4F6]'
                      : 'bg-[#0A0A0A] text-white hover:bg-[#1F2937]'
                  }`}
                  data-testid={`pricing-cta-${planKey}`}
                >
                  {isEnterprise ? t('pricing.ctaEnterprise') : t('pricing.cta')}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
