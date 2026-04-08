import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Upload, RefreshCw, Sparkles, GitBranch, ArrowRight } from 'lucide-react';

const OnboardingSection = () => {
  const { t } = useLanguage();

  const features = [
    { key: 'import', icon: Upload },
    { key: 'sync', icon: RefreshCw },
    { key: 'enrich', icon: Sparkles },
    { key: 'mapping', icon: GitBranch },
  ];

  return (
    <section id="onboarding" className="py-24 md:py-32 bg-[#FAFAFA] dotted-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag block mb-4">
              {t('onboarding.tag')}
            </span>
            <h2 className="text-section-title text-[#0A0A0A] mb-4">
              {t('onboarding.title')}
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              {t('onboarding.desc')}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const featureData = t(`onboarding.features.${feature.key}`);
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg border border-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0A0A0A] mb-0.5">
                        {featureData?.name}
                      </h4>
                      <p className="text-sm text-[#6B7280]">
                        {featureData?.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors">
              {t('onboarding.cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
              {/* Import header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-[#0A0A0A]">Import your data</h3>
                <span className="text-xs text-[#6B7280]">Step 1 of 3</span>
              </div>

              {/* Data sources */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Email & Calendar', 'Google Sheets', 'Salesforce', 'HubSpot'].map((source, i) => (
                  <div
                    key={source}
                    className={`p-4 rounded-lg border ${i === 0 ? 'border-[#0A0A0A] bg-[#F9FAFB]' : 'border-[#E5E7EB]'} cursor-pointer hover:border-[#0A0A0A] transition-colors`}
                  >
                    <div className="w-8 h-8 rounded bg-[#F3F4F6] mb-2" />
                    <span className="text-sm text-[#0A0A0A]">{source}</span>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B7280]">Importing contacts...</span>
                  <span className="text-[#0A0A0A] font-medium">2,847 records</span>
                </div>
                <div className="h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-[#0A0A0A] rounded-full" />
                </div>
              </div>

              {/* AI processing indicator */}
              <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F3F4F6] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#6B7280]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0A0A0A]">AI is enriching your data</p>
                    <p className="text-xs text-[#6B7280]">Adding company info, social profiles...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-lg border border-[#E5E7EB] p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D1FAE5] flex items-center justify-center">
                  <span className="text-[#059669] text-sm">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0A0A0A]">Import complete</p>
                  <p className="text-xs text-[#6B7280]">Ready to use</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;
