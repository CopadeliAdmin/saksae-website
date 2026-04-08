import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-14 dotted-pattern">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.a
            href="#platform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-[#6B7280] border border-[#E5E7EB] rounded-full hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
            data-testid="hero-badge"
          >
            {t('hero.badge')}
            <ArrowRight className="w-3 h-3" />
          </motion.a>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-hero text-[#0A0A0A] mb-6"
            data-testid="hero-headline"
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={handleTrialClick}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
              data-testid="cta-primary"
            >
              {t('hero.ctaPrimary')}
            </button>
            <button
              onClick={handleDemoClick}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-white text-[#0A0A0A] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors"
              data-testid="cta-secondary"
            >
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>
        </div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <div className="relative bg-white rounded-xl border border-[#E5E7EB] shadow-xl overflow-hidden">
            {/* Tabs */}
            <div className="flex items-center border-b border-[#E5E7EB]">
              {['Ask SAKSAE', 'Data model', 'Workflows', 'Reporting'].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-6 py-4 text-sm transition-colors ${i === 0 ? 'text-[#0A0A0A] border-b-2 border-[#0A0A0A] -mb-px' : 'text-[#6B7280] hover:text-[#0A0A0A]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="hidden md:block space-y-1 border-r border-[#E5E7EB] pr-6">
                  {['Home', 'Notifications', 'Tasks', 'Notes', 'Emails', 'Reports'].map((item, i) => (
                    <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${i === 0 ? 'bg-[#F3F4F6] text-[#0A0A0A]' : 'text-[#6B7280]'}`}>
                      <div className="w-4 h-4 rounded bg-[#E5E7EB]" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content - Data table */}
                <div className="md:col-span-3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-[#0A0A0A]">Companies</h3>
                    <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <span>View settings</span>
                      <span>Import / Export</span>
                    </div>
                  </div>
                  
                  {/* Table header */}
                  <div className="grid grid-cols-5 gap-4 py-2 border-b border-[#E5E7EB] text-xs font-medium text-[#6B7280]">
                    <span>Company</span>
                    <span>Domain</span>
                    <span>Status</span>
                    <span>ICP Fit</span>
                    <span>Est. ARR</span>
                  </div>

                  {/* Table rows */}
                  {[
                    { name: 'Vercel', domain: 'vercel.com', status: 'Active', fit: 'Good', arr: '$500k-$1M' },
                    { name: 'Stripe', domain: 'stripe.com', status: 'Active', fit: 'Good', arr: '$1M-$5M' },
                    { name: 'Figma', domain: 'figma.com', status: 'Lead', fit: 'Medium', arr: '$500k-$1M' },
                    { name: 'Notion', domain: 'notion.so', status: 'Active', fit: 'Good', arr: '$1M-$5M' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 py-3 border-b border-[#F3F4F6] text-sm items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#F3F4F6]" />
                        <span className="text-[#0A0A0A]">{row.name}</span>
                      </div>
                      <span className="text-[#6B7280]">{row.domain}</span>
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs ${row.status === 'Active' ? 'bg-[#D1FAE5] text-[#065F46]' : 'bg-[#FEF3C7] text-[#92400E]'}`}>
                        {row.status}
                      </span>
                      <span className={`text-xs ${row.fit === 'Good' ? 'text-[#059669]' : 'text-[#D97706]'}`}>{row.fit}</span>
                      <span className="text-[#6B7280]">{row.arr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12 opacity-40"
        >
          {['Modal', 'Railway', 'Replicate', 'Plain', 'Passionfroot'].map((logo) => (
            <span key={logo} className="text-sm font-medium text-[#6B7280]">{logo}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
