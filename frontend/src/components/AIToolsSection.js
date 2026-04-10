import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Video, FileText, Zap, FolderKanban, BookOpen, Calendar, Receipt, PenTool } from 'lucide-react';

const AIToolsSection = () => {
  const { language } = useLanguage();

  const tools = [
    { icon: Video, name: { fr: 'Réunion IA', en: 'AI Meeting' }, position: { top: '10%', left: '5%' }, delay: 0 },
    { icon: FileText, name: { fr: 'Transcription', en: 'Transcription' }, position: { top: '5%', right: '15%' }, delay: 0.5 },
    { icon: Zap, name: { fr: 'Actions', en: 'Actions' }, position: { top: '25%', right: '5%' }, delay: 1 },
    { icon: FolderKanban, name: { fr: 'Projet', en: 'Project' }, position: { bottom: '30%', right: '10%' }, delay: 1.5 },
    { icon: BookOpen, name: { fr: 'Playbook', en: 'Playbook' }, position: { bottom: '15%', right: '25%' }, delay: 2 },
    { icon: Calendar, name: { fr: 'Calendrier', en: 'Calendar' }, position: { bottom: '10%', left: '20%' }, delay: 2.5 },
    { icon: Receipt, name: { fr: 'Fiche de paie', en: 'Payslip' }, position: { bottom: '25%', left: '5%' }, delay: 3 },
    { icon: PenTool, name: { fr: 'Signatures', en: 'Signatures' }, position: { top: '35%', left: '8%' }, delay: 3.5 },
  ];

  return (
    <section id="ai-tools" className="py-12 md:py-16 bg-[#FAFAFA] relative overflow-hidden">
      {/* Animated floating tool popups */}
      {tools.map((tool, index) => {
        const Icon = tool.icon;
        return (
          <motion.div
            key={tool.name.fr}
            className="absolute hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[#E5E7EB]/50 px-3 py-2 shadow-sm"
            style={tool.position}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [10, 0, 0, -10]
            }}
            transition={{ 
              duration: 4,
              delay: tool.delay,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-4 h-4 text-[#6B7280]" strokeWidth={1.5} />
            <span className="text-xs text-[#0A0A0A] font-medium">{tool.name[language]}</span>
          </motion.div>
        );
      })}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10"
        >
          <span className="section-tag block mb-4">
            {language === 'fr' ? '[04] Outils IA' : '[04] AI Tools'}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr' 
              ? 'Tous vos outils. Une seule intelligence.'
              : 'All your tools. One intelligence.'}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {language === 'fr'
              ? 'SAKSAE remplace vos outils dispersés et transforme chaque interaction en signal exploitable. Les données deviennent des actions.'
              : 'SAKSAE replaces your scattered tools and transforms every interaction into an actionable signal. Data becomes action.'}
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Today */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-[#E5E7EB] bg-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="text-sm font-medium text-[#6B7280]">
                {language === 'fr' ? 'Aujourd\'hui' : 'Today'}
              </span>
            </div>
            <div className="space-y-3">
              {(language === 'fr' 
                ? ['Outils isolés', 'Données perdues', 'Aucune intelligence globale']
                : ['Isolated tools', 'Lost data', 'No global intelligence']
              ).map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#6B7280]">
                  <span className="text-[#EF4444]">✕</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* With SAKSAE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-[#0A0A0A] bg-[#0A0A0A] text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
              <span className="text-sm font-medium text-white/70">
                {language === 'fr' ? 'Avec SAKSAE' : 'With SAKSAE'}
              </span>
            </div>
            <div className="space-y-3">
              {(language === 'fr' 
                ? ['1 plateforme unifiée', '1 source de vérité', '1 moteur d\'exécution']
                : ['1 unified platform', '1 source of truth', '1 execution engine']
              ).map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <span className="text-[#4ADE80]">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tool orchestration visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-xl border border-[#E5E7EB] bg-white"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm text-[#6B7280]">
              {language === 'fr' ? 'Orchestration des outils' : 'Tool orchestration'}
            </span>
          </div>
          
          {/* Tool flow */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {[
              { icon: Video, label: language === 'fr' ? 'Réunion' : 'Meeting' },
              { icon: FileText, label: language === 'fr' ? 'Transcription' : 'Transcription' },
              { icon: Zap, label: 'Actions' },
              { icon: FolderKanban, label: language === 'fr' ? 'Projet' : 'Project' },
              { icon: BookOpen, label: 'Playbook' },
            ].map((item, i, arr) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0A0A0A]" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-[#6B7280]">{item.label}</span>
                  </motion.div>
                  {i < arr.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                      className="text-[#E5E7EB]"
                    >
                      →
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIToolsSection;
