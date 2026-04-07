import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useLanguage } from '../contexts/LanguageContext';
import { Switch } from '../components/ui/switch';

const CostCalculatorSection = () => {
  const { t } = useLanguage();

  const tools = [
    { name: 'Slack', price: 12.50 },
    { name: 'Notion', price: 10 },
    { name: 'Asana', price: 24.99 },
    { name: 'HubSpot CRM', price: 45 },
    { name: 'Calendly', price: 15 },
    { name: 'DocuSign', price: 25 },
    { name: 'QuickBooks', price: 30 },
    { name: 'Zoom', price: 14.99 },
  ];

  const [selectedTools, setSelectedTools] = useState(
    tools.reduce((acc, tool) => ({ ...acc, [tool.name]: true }), {})
  );

  const [totalCost, setTotalCost] = useState(0);
  const saksaePrice = 79;

  useEffect(() => {
    const cost = tools.reduce((sum, tool) => {
      return selectedTools[tool.name] ? sum + tool.price : sum;
    }, 0);
    setTotalCost(cost);
  }, [selectedTools]);

  const savings = Math.max(0, totalCost - saksaePrice);

  const scrollToRoi = () => {
    const element = document.getElementById('roi-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cost-calculator" className="py-20 lg:py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            Cost Analysis
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-6"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="cost-title"
          >
            {t('cost.title')}
          </h2>
          <p className="text-lg text-[#475569]">
            {t('cost.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tools List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-[#0F172A] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              {t('cost.title')}
            </h3>
            <div className="space-y-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between py-3 border-b border-[#E2E8F0] last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <Switch
                      checked={selectedTools[tool.name]}
                      onCheckedChange={(checked) =>
                        setSelectedTools((prev) => ({ ...prev, [tool.name]: checked }))
                      }
                      data-testid={`switch-${tool.name.toLowerCase().replace(' ', '-')}`}
                    />
                    <span className={`font-medium ${selectedTools[tool.name] ? 'text-[#0F172A]' : 'text-[#94A3B8]'}`}>
                      {tool.name}
                    </span>
                  </div>
                  <span className={`font-medium ${selectedTools[tool.name] ? 'text-[#0F172A]' : 'text-[#94A3B8]'}`}>
                    €{tool.price.toFixed(2)}/mo
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Total Cost */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8">
              <p className="text-sm text-[#475569] mb-2">{t('cost.total')}</p>
              <p className="text-4xl font-bold text-[#EF4444]" data-testid="total-cost">
                €<CountUp end={totalCost} decimals={2} duration={0.5} preserveValue />
                <span className="text-lg font-normal text-[#94A3B8]">/mo</span>
              </p>
            </div>

            {/* SAKSAE Price */}
            <div className="bg-[#312E81] rounded-2xl p-6 sm:p-8 text-white">
              <p className="text-sm text-white/70 mb-2">{t('cost.saksaePrice')}</p>
              <p className="text-4xl font-bold" data-testid="saksae-price">
                €{saksaePrice}
                <span className="text-lg font-normal text-white/70">/mo</span>
              </p>
              <p className="text-sm text-white/70 mt-2">All-in-one solution</p>
            </div>

            {/* Savings */}
            <div className="bg-[#22C55E]/10 rounded-2xl border border-[#22C55E]/20 p-6 sm:p-8">
              <p className="text-sm text-[#22C55E] mb-2">{t('cost.savings')}</p>
              <p className="text-4xl font-bold text-[#22C55E]" data-testid="savings">
                €<CountUp end={savings} decimals={2} duration={0.5} preserveValue />
                <span className="text-lg font-normal">/mo</span>
              </p>
              <p className="text-sm text-[#22C55E]/70 mt-2">
                €<CountUp end={savings * 12} decimals={0} duration={0.5} preserveValue /> per year
              </p>
            </div>

            {/* Transition text */}
            <p className="text-[#475569] text-center">
              {t('cost.transition')}
            </p>

            {/* CTA */}
            <button
              onClick={scrollToRoi}
              className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-medium py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
              data-testid="cost-cta"
            >
              {t('cost.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculatorSection;
