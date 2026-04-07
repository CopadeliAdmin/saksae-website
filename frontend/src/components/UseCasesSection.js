import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { BarChart3, Users, Briefcase, Wallet, Check } from 'lucide-react';

const UseCasesSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('ceo');

  const roles = [
    { key: 'ceo', icon: BarChart3 },
    { key: 'sales', icon: Briefcase },
    { key: 'hr', icon: Users },
    { key: 'finance', icon: Wallet },
  ];

  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4338CA] mb-4 block">
            Use Cases
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="usecases-title"
          >
            {t('useCases.title')}
          </h2>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-center gap-2 bg-white p-2 rounded-2xl border border-[#E2E8F0] mb-12 max-w-xl mx-auto">
            {roles.map((role) => {
              const Icon = role.icon;
              const roleData = t(`useCases.roles.${role.key}`);
              return (
                <TabsTrigger
                  key={role.key}
                  value={role.key}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl data-[state=active]:bg-[#312E81] data-[state=active]:text-white transition-all"
                  data-testid={`tab-${role.key}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{roleData?.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {roles.map((role) => {
            const roleData = t(`useCases.roles.${role.key}`);
            const Icon = role.icon;
            return (
              <TabsContent key={role.key} value={role.key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Content */}
                  <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-[#312E81]/10 rounded-2xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#312E81]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                          {roleData?.name}
                        </h3>
                        <p className="text-[#475569]">{roleData?.title}</p>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {roleData?.benefits?.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-[#22C55E]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-[#22C55E]" />
                          </div>
                          <span className="text-[#0F172A]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="bg-gradient-to-br from-[#312E81] to-[#4338CA] rounded-2xl p-8 text-white min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <Icon className="w-20 h-20 mx-auto mb-4 opacity-50" />
                      <p className="text-xl font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        {roleData?.title}
                      </p>
                      <p className="text-white/70 mt-2">
                        Powered by SAKSAE AI
                      </p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesSection;
