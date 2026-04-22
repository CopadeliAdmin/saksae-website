import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, Settings, ArrowUpRight, Mail, Send, ChevronDown, CheckCircle } from 'lucide-react';

const AISection = () => {
  const { language } = useLanguage();
  const [expandedRevenue, setExpandedRevenue] = useState(null);
  const [expandedOp, setExpandedOp] = useState(null);

  const revenueActions = language === 'fr' ? [
    {
      action: 'Relance client envoyée', context: 'Devis #1234 sans réponse depuis 5j', value: '€2,500', time: 'Il y a 3 min',
      detail: { desc: 'Le devis #1234 envoyé à TechVision le 5 avril n\'a reçu aucune réponse. L\'IA a détecté un risque de perte et a préparé une relance personnalisée.', emailSubject: 'Relance : Votre devis SAKSAE #1234', emailPreview: 'Bonjour M. Durand,\n\nJe me permets de revenir vers vous concernant notre proposition du 5 avril. Souhaitez-vous en discuter cette semaine ?\n\nCordialement,\nChristophe' }
    },
    {
      action: 'Upsell détecté', context: 'CloudNine éligible au Pack Enterprise', value: '€12,000', time: 'Il y a 25 min',
      detail: { desc: 'CloudNine utilise 90% de sa capacité actuelle et a ajouté 12 collaborateurs ce mois. L\'IA recommande une proposition d\'upgrade vers le Pack Enterprise.', emailSubject: 'Évoluez vers Enterprise — Offre spéciale', emailPreview: 'Bonjour Sophie,\n\nVotre usage de SAKSAE a fortement évolué ! Nous vous proposons une migration vers le Pack Enterprise avec 20% de remise le premier trimestre.\n\nCordialement,\nChristophe' }
    },
  ] : [
    {
      action: 'Client follow-up sent', context: 'Quote #1234 unanswered for 5d', value: '€2,500', time: '3 min ago',
      detail: { desc: 'Quote #1234 sent to TechVision on April 5 received no response. AI detected a churn risk and prepared a personalized follow-up.', emailSubject: 'Follow-up: Your SAKSAE Quote #1234', emailPreview: 'Hello Mr. Durand,\n\nI\'m reaching out regarding our proposal from April 5. Would you like to discuss it this week?\n\nBest regards,\nChristophe' }
    },
    {
      action: 'Upsell detected', context: 'CloudNine eligible for Enterprise Pack', value: '€12,000', time: '25 min ago',
      detail: { desc: 'CloudNine is using 90% of current capacity and added 12 users this month. AI recommends an upgrade proposal to Enterprise Pack.', emailSubject: 'Upgrade to Enterprise — Special Offer', emailPreview: 'Hello Sophie,\n\nYour SAKSAE usage has grown significantly! We\'d like to offer you a migration to the Enterprise Pack with 20% off the first quarter.\n\nBest regards,\nChristophe' }
    },
  ];

  const operationalActions = language === 'fr' ? [
    {
      action: 'Réunion brief préparé', context: 'Call Acme Corp dans 30 min', domain: 'CRM', priority: 'Haute',
      detail: { desc: 'L\'IA a analysé les 3 derniers échanges avec Acme Corp, les notes de réunion précédentes et le statut du deal pour préparer un brief complet.', task: 'Brief de 2 pages généré avec points clés, objections anticipées et proposition de prix. Partagé sur votre calendrier.' }
    },
    {
      action: 'Playbook déclenché', context: 'Onboarding nouveau client NexGen', domain: 'Management', priority: 'Haute',
      detail: { desc: 'NexGen vient de signer. Le playbook d\'onboarding s\'est déclenché automatiquement : création du projet, envoi du welcome pack, planification du kickoff.', task: 'Projet créé dans Management. Email de bienvenue envoyé. Call de kickoff planifié le 14 avril à 10h.' }
    },
  ] : [
    {
      action: 'Meeting brief prepared', context: 'Acme Corp call in 30 min', domain: 'CRM', priority: 'High',
      detail: { desc: 'AI analyzed the last 3 exchanges with Acme Corp, previous meeting notes and deal status to prepare a complete brief.', task: '2-page brief generated with key points, anticipated objections and pricing proposal. Shared to your calendar.' }
    },
    {
      action: 'Playbook triggered', context: 'New client onboarding NexGen', domain: 'Management', priority: 'High',
      detail: { desc: 'NexGen just signed. The onboarding playbook triggered automatically: project creation, welcome pack, kickoff scheduling.', task: 'Project created in Management. Welcome email sent. Kickoff call scheduled Apr 14 at 10am.' }
    },
  ];

  const priorityStyles = {
    Haute: 'bg-[#FEE2E2] text-[#DC2626]', High: 'bg-[#FEE2E2] text-[#DC2626]',
    Moyenne: 'bg-[#FEF3C7] text-[#D97706]', Medium: 'bg-[#FEF3C7] text-[#D97706]',
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: (i) => ({
      opacity: 1, y: 0, scale: 1,
      transition: { delay: 0.25 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="ai" className="py-24 md:py-32 bg-white" data-testid="ai-section">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="section-tag block mb-5"
            >
              {language === 'fr' ? '[04] Intelligence artificielle' : '[04] Artificial Intelligence'}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2rem] md:text-[2.5rem] font-bold text-[#0A0A0A] mb-5 leading-[1.1] tracking-[-0.03em]"
            >
              {language === 'fr'
                ? <>Des Agents IA métier qui<br />transforment vos données<br />en actions.</>
                : <>Business AI Agents that<br />transform your data<br />into actions.</>}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#52525B] leading-[1.7] mb-10"
            >
              {language === 'fr'
                ? "Chaque jour, SAKSAE analyse vos revenus, vos clients, vos projets, vos finances et vos opérations pour identifier les actions à fort impact. L'IA vous propose des actions concrètes, priorisées et reliées à un impact business."
                : 'Every day, SAKSAE analyzes your revenue, clients, projects, finances and operations to identify high-impact actions. AI proposes concrete, prioritized actions linked to business impact.'}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => window.open('https://calendly.com/saksae-sales', '_blank')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
              data-testid="ai-section-demo-btn"
            >
              {language === 'fr' ? 'Demander une démo' : 'Request a demo'}
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right - Interactive Action Feed */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Revenue actions */}
            <div className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 mb-2.5"
              >
                <TrendingUp className="w-4 h-4 text-[#059669]" />
                <span className="text-sm font-semibold text-[#0A0A0A]">
                  {language === 'fr' ? 'Revenu' : 'Revenue'}
                </span>
              </motion.div>
              <div className="space-y-2">
                {revenueActions.map((action, index) => {
                  const isExpanded = expandedRevenue === index;
                  return (
                    <motion.div
                      key={`rev-${index}`}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="relative"
                      data-testid={`revenue-action-${index}`}
                    >
                      <div
                        onClick={() => setExpandedRevenue(isExpanded ? null : index)}
                        className={`group relative bg-white border rounded-xl p-4 cursor-pointer overflow-hidden transition-all ${
                          isExpanded
                            ? 'border-[#059669]/30 shadow-[0_1px_8px_rgba(5,150,105,0.06)]'
                            : 'border-[#E4E4E7] hover:border-[#D4D4D8]'
                        }`}
                        style={{ transitionDuration: '240ms', transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#059669] rounded-l-xl" />
                        <div className="pl-2">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-medium text-[#0A0A0A] truncate">{action.action}</h4>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-sm font-semibold text-[#059669]">+{action.value}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-[#6B7280] truncate">{action.context}</p>
                            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                              <span className="text-[10px] text-[#9CA3AF]">{action.time}</span>
                              <ChevronDown className={`w-3.5 h-3.5 text-[#9CA3AF] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl space-y-3">
                              <p className="text-xs text-[#4B5563] leading-relaxed">{action.detail.desc}</p>
                              <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
                                <div className="flex items-center gap-2 px-3 py-2 bg-[#FAFAFA] border-b border-[#F3F4F6]">
                                  <Mail className="w-3.5 h-3.5 text-[#059669]" />
                                  <span className="text-[10px] font-medium text-[#059669]">
                                    {language === 'fr' ? 'Email prêt à envoyer' : 'Email ready to send'}
                                  </span>
                                </div>
                                <div className="p-3">
                                  <p className="text-[10px] text-[#9CA3AF] mb-1">
                                    {language === 'fr' ? 'Objet :' : 'Subject:'} <span className="text-[#0A0A0A]">{action.detail.emailSubject}</span>
                                  </p>
                                  <p className="text-xs text-[#4B5563] whitespace-pre-line leading-relaxed mt-2">{action.detail.emailPreview}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#059669] text-white rounded-lg hover:bg-[#047857] transition-colors">
                                  <Send className="w-3 h-3" />
                                  {language === 'fr' ? 'Envoyer' : 'Send'}
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#6B7280] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                                  {language === 'fr' ? 'Modifier' : 'Edit'}
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Operational actions */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 mb-2.5"
              >
                <Settings className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm font-semibold text-[#0A0A0A]">
                  {language === 'fr' ? 'Opération' : 'Operational'}
                </span>
              </motion.div>
              <div className="space-y-2">
                {operationalActions.map((action, index) => {
                  const isExpanded = expandedOp === index;
                  return (
                    <motion.div
                      key={`op-${index}`}
                      custom={index + 0.5}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="relative"
                      data-testid={`operational-action-${index}`}
                    >
                      <div
                        onClick={() => setExpandedOp(isExpanded ? null : index)}
                        className={`group relative bg-white border rounded-xl p-4 cursor-pointer overflow-hidden transition-all ${
                          isExpanded
                            ? 'border-[#3B82F6]/30 shadow-[0_1px_8px_rgba(59,130,246,0.06)]'
                            : 'border-[#E4E4E7] hover:border-[#D4D4D8]'
                        }`}
                        style={{ transitionDuration: '240ms', transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3B82F6] rounded-l-xl" />
                        <div className="pl-2">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-medium text-[#0A0A0A] truncate">{action.action}</h4>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#DBEAFE] text-[#2563EB]">{action.domain}</span>
                              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${priorityStyles[action.priority]}`}>{action.priority}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-[#6B7280] truncate">{action.context}</p>
                            <ChevronDown className={`w-3.5 h-3.5 text-[#9CA3AF] flex-shrink-0 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl space-y-3">
                              <p className="text-xs text-[#4B5563] leading-relaxed">{action.detail.desc}</p>
                              <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden">
                                <div className="flex items-center gap-2 px-3 py-2 bg-[#FAFAFA] border-b border-[#F3F4F6]">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
                                  <span className="text-[10px] font-medium text-[#3B82F6]">
                                    {language === 'fr' ? 'Action exécutée' : 'Action executed'}
                                  </span>
                                </div>
                                <div className="p-3">
                                  <p className="text-xs text-[#4B5563] leading-relaxed">{action.detail.task}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition-colors">
                                  <CheckCircle className="w-3 h-3" />
                                  {language === 'fr' ? 'Valider' : 'Confirm'}
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#6B7280] border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors">
                                  {language === 'fr' ? 'Voir détails' : 'View details'}
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
