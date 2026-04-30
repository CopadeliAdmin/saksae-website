import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useLanguage } from '../contexts/LanguageContext';
import { Slider } from '../components/ui/slider';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const ROICalculatorSection = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const [values, setValues] = useState({
    employees: 10,
    actionsPerDay: 5,
    timePerAction: 30,
    valuePerAction: 50,
    conversionRate: 20,
  });

  const [results, setResults] = useState({
    monthlyRevenue: 0,
    annualRevenue: 0,
  });

  useEffect(() => {
    // Calculate ROI
    const { employees, actionsPerDay, timePerAction, valuePerAction, conversionRate } = values;
    
    // Monthly calculation: employees * actions/day * 22 days * value * conversion rate
    const monthlyActions = employees * actionsPerDay * 22;
    const monthlyRevenue = monthlyActions * valuePerAction * (conversionRate / 100);
    const annualRevenue = monthlyRevenue * 12;

    setResults({
      monthlyRevenue: Math.round(monthlyRevenue),
      annualRevenue: Math.round(annualRevenue),
    });
  }, [values]);

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    // Simulation d'envoi pour un site statique
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };


  return (
    <section id="roi-calculator" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            ROI Calculator
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-6"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="roi-title"
          >
            {t('roi.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Employees */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-[#0F172A]">{t('roi.employees')}</label>
                <span className="text-sm font-bold text-[#312E81]">{values.employees}</span>
              </div>
              <Slider
                value={[values.employees]}
                onValueChange={([v]) => setValues((prev) => ({ ...prev, employees: v }))}
                max={100}
                min={1}
                step={1}
                className="w-full"
                data-testid="slider-employees"
              />
            </div>

            {/* Actions per day */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-[#0F172A]">{t('roi.actionsPerDay')}</label>
                <span className="text-sm font-bold text-[#312E81]">{values.actionsPerDay}</span>
              </div>
              <Slider
                value={[values.actionsPerDay]}
                onValueChange={([v]) => setValues((prev) => ({ ...prev, actionsPerDay: v }))}
                max={50}
                min={1}
                step={1}
                className="w-full"
                data-testid="slider-actions"
              />
            </div>

            {/* Time per action */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-[#0F172A]">{t('roi.timePerAction')}</label>
                <span className="text-sm font-bold text-[#312E81]">{values.timePerAction} min</span>
              </div>
              <Slider
                value={[values.timePerAction]}
                onValueChange={([v]) => setValues((prev) => ({ ...prev, timePerAction: v }))}
                max={120}
                min={5}
                step={5}
                className="w-full"
                data-testid="slider-time"
              />
            </div>

            {/* Value per action */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-[#0F172A]">{t('roi.valuePerAction')}</label>
                <span className="text-sm font-bold text-[#312E81]">€{values.valuePerAction}</span>
              </div>
              <Slider
                value={[values.valuePerAction]}
                onValueChange={([v]) => setValues((prev) => ({ ...prev, valuePerAction: v }))}
                max={500}
                min={10}
                step={10}
                className="w-full"
                data-testid="slider-value"
              />
            </div>

            {/* Conversion rate */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-[#0F172A]">{t('roi.conversionRate')}</label>
                <span className="text-sm font-bold text-[#312E81]">{values.conversionRate}%</span>
              </div>
              <Slider
                value={[values.conversionRate]}
                onValueChange={([v]) => setValues((prev) => ({ ...prev, conversionRate: v }))}
                max={100}
                min={5}
                step={5}
                className="w-full"
                data-testid="slider-conversion"
              />
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Monthly Revenue */}
            <div className="bg-[#F7F9FC] rounded-2xl border border-[#E2E8F0] p-8">
              <p className="text-sm text-[#475569] mb-2">{t('roi.monthlyRevenue')}</p>
              <p className="text-5xl font-black text-[#312E81]" data-testid="monthly-revenue">
                €<CountUp end={results.monthlyRevenue} duration={0.5} separator="," preserveValue />
              </p>
            </div>

            {/* Annual Revenue */}
            <div className="bg-[#312E81] rounded-2xl p-8">
              <p className="text-sm text-white/70 mb-2">{t('roi.annualRevenue')}</p>
              <p className="text-5xl font-black text-white" data-testid="annual-revenue">
                €<CountUp end={results.annualRevenue} duration={0.5} separator="," preserveValue />
              </p>
            </div>

            {/* CTA */}
            {!submitted ? (
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                <p className="text-sm text-[#475569] mb-4">{t('roi.cta')}</p>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    data-testid="roi-email-input"
                  />
                  <Button
                    onClick={handleSubmit}
                    disabled={loading || !email}
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white"
                    data-testid="roi-submit"
                  >
                    {loading ? '...' : 'Envoyer'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-[#22C55E]/10 rounded-2xl border border-[#22C55E]/20 p-6 text-center">
                <p className="text-[#22C55E] font-medium">
                  ✓ Votre plan d'actions a été envoyé !
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
