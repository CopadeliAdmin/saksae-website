import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToRoi = () => {
    const element = document.getElementById('roi-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F7F9FC]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#312E81]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#312E81]/10 text-[#312E81] px-4 py-2 rounded-full mb-6"
            >
              <span className="text-xs font-bold uppercase tracking-wider">AI-Powered Business Execution</span>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-[#0F172A] mb-6"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
              data-testid="hero-headline"
            >
              {t('hero.headline')}
            </h1>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed mb-8 max-w-xl">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToRoi}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-medium px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                data-testid="cta-roi"
              >
                {t('hero.ctaRoi')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={handleDemoClick}
                variant="outline"
                className="border-[#E2E8F0] text-[#0F172A] font-medium px-8 py-6 text-lg rounded-xl hover:bg-white"
                data-testid="cta-demo"
              >
                <Play className="mr-2 w-5 h-5" />
                {t('hero.ctaDemo')}
              </Button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-6 text-[#94A3B8]"
            >
              <span className="text-sm">Trusted by 500+ companies</span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#312E81] to-[#4338CA] border-2 border-white"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#F7F9FC] border-b border-[#E2E8F0]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-[#94A3B8] border border-[#E2E8F0]">
                    app.saksae.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[#0F172A]">AI Action Feed</h3>
                  <span className="text-xs bg-[#22C55E]/10 text-[#22C55E] px-2 py-1 rounded-full font-medium">
                    12 actions today
                  </span>
                </div>

                {/* Action cards */}
                <div className="space-y-3">
                  {[
                    { action: 'Relance client', impact: '€2,500', color: '#F97316' },
                    { action: 'Facture générée', impact: '€8,500', color: '#22C55E' },
                    { action: 'Lead qualifié', impact: '€3,200', color: '#312E81' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between p-3 bg-[#F7F9FC] rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2 h-8 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-medium text-[#0F172A]">{item.action}</span>
                      </div>
                      <span className="text-sm font-bold text-[#22C55E]">+{item.impact}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-[#E2E8F0] grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#312E81]">€47,800</p>
                    <p className="text-xs text-[#94A3B8]">Revenue generated</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#22C55E]">+34%</p>
                    <p className="text-xs text-[#94A3B8]">vs last month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-[#E2E8F0]"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#22C55E] text-lg">✓</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#0F172A]">Action completed</p>
                  <p className="text-xs text-[#94A3B8]">Just now</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
