import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  LayoutGrid, Users, Target, ClipboardList, BookOpen,
  Calendar, PenTool, Receipt, FileText, UserCheck,
  CalendarOff, GraduationCap, BarChart3, Sparkles,
  ChevronDown, Info, Settings, Download, Filter,
  Plus, MoreHorizontal, MessageSquare, Eye, Shield,
  DollarSign, TrendingUp, FileCheck
} from 'lucide-react';

const PlatformSection = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('crm');

  const tabs = [
    { key: 'crm', name: { fr: 'CRM', en: 'CRM' } },
    { key: 'management', name: { fr: 'Management', en: 'Management' } },
    { key: 'hr', name: { fr: 'RH', en: 'HR' } },
    { key: 'finance', name: { fr: 'Finances', en: 'Finance' } },
    { key: 'products', name: { fr: 'Produits', en: 'Products' } },
    { key: 'supply', name: { fr: 'Approvisionnements', en: 'Supply Chain' } },
  ];

  /* ── Sidebar sections matching real SAKSAE ── */
  const sidebarSections = [
    {
      id: 'top',
      items: [{ key: 'aujourdhui', icon: LayoutGrid, label: "Aujourd'hui" }],
    },
    {
      id: 'crm',
      header: 'CRM',
      items: [
        { key: 'clients', icon: Users, label: 'Clients' },
        { key: 'prospects', icon: Target, label: 'Prospects' },
      ],
    },
    {
      id: 'management',
      header: 'MANAGEMENT',
      items: [
        { key: 'projets', icon: ClipboardList, label: 'Projets' },
        { key: 'playbooks', icon: BookOpen, label: 'Playbooks' },
        { key: 'calendrier', icon: Calendar, label: 'Calendrier' },
        { key: 'signatures', icon: PenTool, label: 'Signatures' },
      ],
    },
    {
      id: 'finance',
      header: 'FINANCES',
      items: [
        { key: 'facturation', icon: Receipt, label: 'Facturation' },
        { key: 'contrats', icon: FileText, label: 'Contrats' },
      ],
    },
    {
      id: 'hr',
      header: 'RH',
      items: [
        { key: 'collaborateurs', icon: UserCheck, label: 'Collaborateurs' },
        { key: 'conges', icon: CalendarOff, label: 'Gestion Congés' },
        { key: 'operations', icon: GraduationCap, label: 'Opérations RH' },
      ],
    },
    {
      id: 'intelligence',
      header: 'INTELLIGENCE',
      items: [
        { key: 'revops', icon: BarChart3, label: 'RevOps Center' },
        { key: 'agent', icon: Sparkles, label: 'AI Agent' },
      ],
    },
  ];

  // Map tab → active sidebar item
  const activeItemByTab = {
    crm: 'clients',
    management: 'projets',
    hr: 'collaborateurs',
    finance: 'facturation',
    products: 'aujourdhui',
    supply: 'aujourdhui',
  };

  const Sidebar = () => (
    <div className="w-48 lg:w-52 border-r border-[#E5E7EB] bg-[#FAFAFA] flex-shrink-0 flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="p-3 space-y-4">
        {sidebarSections.map((section) => (
          <div key={section.id}>
            {/* Section header */}
            {section.header && (
              <div className="flex items-center justify-between px-2 mb-1">
                <span className="text-[10px] font-semibold text-[#9CA3AF] tracking-wider">
                  {section.header}
                </span>
                <ChevronDown className="w-3 h-3 text-[#D1D5DB]" />
              </div>
            )}
            {/* Items */}
            <div className="space-y-px">
              {section.items.map((item) => {
                const isActive = activeItemByTab[activeTab] === item.key;
                return (
                  <div
                    key={item.key}
                    className={`flex items-center gap-2.5 px-2.5 py-[6px] rounded-md cursor-default transition-colors ${
                      isActive
                        ? 'bg-white text-[#0A0A0A] font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.04)]'
                        : 'text-[#4B5563] hover:bg-white/60'
                    }`}
                  >
                    <item.icon className="w-[15px] h-[15px] flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[13px] truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ── Tab Contents ── */

  const CRMContent = () => (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-[#0A0A0A]">Bonjour, Christophe</h3>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#6B7280] border border-[#E5E7EB] rounded-md bg-white">
              <Settings className="w-3 h-3" />
              Personnaliser
            </button>
          </div>
        </div>
        <p className="text-xs text-[#9CA3AF]">vendredi 10 avril</p>
      </div>

      <div className="flex-1 overflow-auto p-5 space-y-4">
        {/* Super Admin banner */}
        <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg border border-[#F3F4F6]">
          <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 text-[#6B7280]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-[#0A0A0A]">Vue plateforme Super Admin</p>
            <p className="text-[10px] text-[#9CA3AF]">Pilotage transverse, accès global et supervision multi-organisations.</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="text-[9px] px-1.5 py-0.5 bg-[#0A0A0A] text-white rounded">Super Admin</span>
            <span className="text-[9px] px-1.5 py-0.5 border border-[#E5E7EB] rounded text-[#6B7280]">Sans Équipe</span>
          </div>
        </div>

        {/* KPIs */}
        <div>
          <p className="text-sm font-semibold text-[#0A0A0A] mb-1">Indicateurs prioritaires</p>
          <p className="text-[10px] text-[#9CA3AF] mb-3">Les KPI les plus utiles pour votre profil.</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: DollarSign, iconBg: 'bg-[#D1FAE5]', iconColor: 'text-[#059669]', label: 'Chiffre d\'affaires', value: '€127,450' },
              { icon: TrendingUp, iconBg: 'bg-[#D1FAE5]', iconColor: 'text-[#059669]', label: 'Valeur pipeline', value: '€340,000' },
              { icon: Users, iconBg: 'bg-[#FEF3C7]', iconColor: 'text-[#D97706]', label: 'Clients', value: '48' },
              { icon: UserCheck, iconBg: 'bg-[#FEE2E2]', iconColor: 'text-[#DC2626]', label: 'Collaborateurs', value: '24' },
            ].map((kpi, i) => (
              <div key={i} className="p-3 border border-[#F3F4F6] rounded-lg bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-md ${kpi.iconBg} flex items-center justify-center`}>
                    <kpi.icon className={`w-3 h-3 ${kpi.iconColor}`} />
                  </div>
                  <span className="text-[10px] text-[#9CA3AF]">{kpi.label}</span>
                </div>
                <p className="text-lg font-semibold text-[#0A0A0A]">{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signatures en attente */}
        <div className="p-3 bg-[#F9FAFB] rounded-lg border border-[#F3F4F6]">
          <p className="text-xs font-semibold text-[#0A0A0A]">Signatures en attente</p>
          <p className="text-[10px] text-[#9CA3AF] mt-0.5">3 document(s)</p>
        </div>
      </div>
    </div>
  );

  const ManagementContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#0A0A0A]">Projets</span>
          <span className="text-xs text-[#9CA3AF]">8 actifs</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 text-[10px] bg-[#0A0A0A] text-white rounded">
            <Plus className="w-3 h-3" /> Nouveau
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-5">
        <div className="grid grid-cols-3 gap-3">
          {['À faire', 'En cours', 'Terminé'].map((col, ci) => (
            <div key={col}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#0A0A0A]">{col}</span>
                <span className="text-[9px] text-[#9CA3AF] bg-[#F3F4F6] px-1.5 rounded">{ci === 0 ? 3 : ci === 1 ? 2 : 3}</span>
              </div>
              <div className="space-y-2">
                {(ci === 0
                  ? [{ title: 'Onboarding client TechVision', tag: 'CRM', tagColor: 'bg-[#DBEAFE] text-[#2563EB]' }, { title: 'Mise à jour contrats Q2', tag: 'Juridique', tagColor: 'bg-[#FEF3C7] text-[#92400E]' }, { title: 'Recrutement dev senior', tag: 'RH', tagColor: 'bg-[#EDE9FE] text-[#7C3AED]' }]
                  : ci === 1
                    ? [{ title: 'Migration données CRM', tag: 'Tech', tagColor: 'bg-[#D1FAE5] text-[#059669]' }, { title: 'Formation équipe vente', tag: 'Sales', tagColor: 'bg-[#DBEAFE] text-[#2563EB]' }]
                    : [{ title: 'Audit sécurité', tag: 'IT', tagColor: 'bg-[#F3F4F6] text-[#6B7280]' }, { title: 'Rapport financier Q1', tag: 'Finance', tagColor: 'bg-[#D1FAE5] text-[#059669]' }, { title: 'Setup playbooks vente', tag: 'Sales', tagColor: 'bg-[#DBEAFE] text-[#2563EB]' }]
                ).map((task, ti) => (
                  <div key={ti} className="p-2.5 bg-white border border-[#F3F4F6] rounded-lg hover:border-[#E5E7EB] transition-colors">
                    <p className="text-xs text-[#0A0A0A] mb-1.5">{task.title}</p>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded ${task.tagColor}`}>{task.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const HRContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#0A0A0A]">Collaborateurs</span>
          <span className="text-xs text-[#9CA3AF]">24 actifs</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] bg-[#F9FAFB] px-2 py-1 rounded">
            <Filter className="w-3 h-3" />
            <span>Département</span>
          </div>
          <Plus className="w-3.5 h-3.5 text-[#9CA3AF]" />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
              <th className="text-left px-5 py-2 font-medium text-[#6B7280]">Collaborateur</th>
              <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Poste</th>
              <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Département</th>
              <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Statut</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Marie Dupont', role: 'Directrice Marketing', dept: 'Marketing', status: 'Bureau', color: 'bg-violet-400', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'Thomas Martin', role: 'Développeur Senior', dept: 'Tech', status: 'Télétravail', color: 'bg-blue-400', statusColor: 'bg-[#DBEAFE] text-[#2563EB]' },
              { name: 'Sophie Bernard', role: 'Product Manager', dept: 'Produit', status: 'Bureau', color: 'bg-emerald-400', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'Lucas Petit', role: 'Designer UX', dept: 'Design', status: 'Congé', color: 'bg-orange-400', statusColor: 'bg-[#FEF3C7] text-[#92400E]' },
              { name: 'Emma Richard', role: 'Account Executive', dept: 'Sales', status: 'Bureau', color: 'bg-pink-400', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'Hugo Moreau', role: 'Data Analyst', dept: 'Data', status: 'Télétravail', color: 'bg-cyan-400', statusColor: 'bg-[#DBEAFE] text-[#2563EB]' },
              { name: 'Léa Dubois', role: 'RH Manager', dept: 'RH', status: 'Bureau', color: 'bg-amber-400', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
            ].map((emp, i) => (
              <tr key={i} className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                <td className="px-5 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${emp.color} flex items-center justify-center`}>
                      <span className="text-white text-[8px] font-bold">{emp.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span className="font-medium text-[#0A0A0A]">{emp.name}</span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-[#6B7280]">{emp.role}</td>
                <td className="px-3 py-2.5 text-[#6B7280]">{emp.dept}</td>
                <td className="px-3 py-2.5">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${emp.statusColor}`}>{emp.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const FinanceContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB]">
        <span className="text-sm font-medium text-[#0A0A0A]">Facturation</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <Eye className="w-3.5 h-3.5" />
            <span>Ce mois</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-5 space-y-4">
        {/* Finance live */}
        <div>
          <p className="text-sm font-semibold text-[#0A0A0A] mb-1">Finance live</p>
          <p className="text-[10px] text-[#9CA3AF] mb-3">Encaissements, contrats, commandes et dépenses fournisseurs en direct.</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Encaissements', value: '€87,200', change: '+8%', up: true },
              { label: 'Factures en retard', value: '3', change: '€12,400', up: false },
              { label: 'Contrats actifs', value: '18', change: '+2 ce mois', up: true },
              { label: 'Dépenses fournisseurs', value: '€34,100', change: '-3%', up: true },
            ].map((kpi, i) => (
              <div key={i} className="p-3 border border-[#F3F4F6] rounded-lg bg-white">
                <p className="text-[10px] text-[#9CA3AF] mb-1">{kpi.label}</p>
                <p className="text-base font-semibold text-[#0A0A0A]">{kpi.value}</p>
                <p className={`text-[10px] mt-0.5 ${kpi.up ? 'text-[#059669]' : 'text-[#DC2626]'}`}>{kpi.change}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent invoices */}
        <div>
          <p className="text-xs font-semibold text-[#0A0A0A] mb-2">Dernières factures</p>
          <div className="space-y-1.5">
            {[
              { id: 'FAC-2026-089', client: 'TechVision', amount: '€4,500', status: 'Payée', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { id: 'FAC-2026-090', client: 'DataFlow', amount: '€8,200', status: 'En attente', statusColor: 'bg-[#FEF3C7] text-[#92400E]' },
              { id: 'FAC-2026-091', client: 'CloudNine', amount: '€12,000', status: 'Envoyée', statusColor: 'bg-[#DBEAFE] text-[#2563EB]' },
            ].map((inv, i) => (
              <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#F9FAFB] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#9CA3AF]">{inv.id}</span>
                  <span className="text-xs text-[#0A0A0A]">{inv.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#0A0A0A]">{inv.amount}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${inv.statusColor}`}>{inv.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#0A0A0A]">Catalogue produits</span>
          <span className="text-xs text-[#9CA3AF]">6 produits</span>
        </div>
        <Plus className="w-3.5 h-3.5 text-[#9CA3AF]" />
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
              <th className="text-left px-5 py-2 font-medium text-[#6B7280]">Produit</th>
              <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Type</th>
              <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Statut</th>
              <th className="text-left px-3 py-2 font-medium text-[#6B7280]">MRR</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Module CRM Pro', type: 'SaaS', status: 'Actif', mrr: '€45/mois', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'Module Management', type: 'SaaS', status: 'Actif', mrr: '€35/mois', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'Module RH', type: 'SaaS', status: 'Actif', mrr: '€30/mois', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'Module Finance', type: 'SaaS', status: 'Actif', mrr: '€25/mois', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'Pack Enterprise', type: 'Bundle', status: 'Actif', mrr: '€199/mois', statusColor: 'bg-[#D1FAE5] text-[#059669]' },
              { name: 'IA Agent Add-on', type: 'Add-on', status: 'Beta', mrr: '€25/mois', statusColor: 'bg-[#EDE9FE] text-[#7C3AED]' },
            ].map((p, i) => (
              <tr key={i} className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                <td className="px-5 py-2.5 font-medium text-[#0A0A0A]">{p.name}</td>
                <td className="px-3 py-2.5 text-[#6B7280]">{p.type}</td>
                <td className="px-3 py-2.5">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${p.statusColor}`}>{p.status}</span>
                </td>
                <td className="px-3 py-2.5 font-medium text-[#0A0A0A]">{p.mrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const SupplyContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB]">
        <span className="text-sm font-medium text-[#0A0A0A]">Commandes fournisseurs</span>
        <div className="flex items-center gap-2">
          <Plus className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <MoreHorizontal className="w-3.5 h-3.5 text-[#9CA3AF]" />
        </div>
      </div>
      <div className="flex-1 overflow-auto p-5 space-y-2">
        {[
          { id: 'CMD-089', supplier: 'TechParts SA', items: 12, status: 'Livré', date: '08 Avr', color: 'bg-[#D1FAE5] text-[#059669]' },
          { id: 'CMD-090', supplier: 'CloudServices', items: 3, status: 'En transit', date: '09 Avr', color: 'bg-[#DBEAFE] text-[#2563EB]' },
          { id: 'CMD-091', supplier: 'DataInfra Pro', items: 8, status: 'En transit', date: '09 Avr', color: 'bg-[#DBEAFE] text-[#2563EB]' },
          { id: 'CMD-092', supplier: 'SecureNet', items: 5, status: 'Commandé', date: '10 Avr', color: 'bg-[#FEF3C7] text-[#92400E]' },
          { id: 'CMD-093', supplier: 'InnoLabs', items: 15, status: 'En préparation', date: '10 Avr', color: 'bg-[#EDE9FE] text-[#7C3AED]' },
        ].map((order, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-[#F3F4F6] hover:border-[#E5E7EB] bg-white transition-colors">
            <div>
              <span className="text-[10px] font-mono text-[#9CA3AF]">{order.id}</span>
              <p className="text-xs font-medium text-[#0A0A0A]">{order.supplier}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-[#9CA3AF]">{order.items} articles</span>
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${order.color}`}>{order.status}</span>
              <span className="text-[10px] text-[#9CA3AF]">{order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TabContent = ({ tabKey }) => {
    switch (tabKey) {
      case 'crm': return <CRMContent />;
      case 'management': return <ManagementContent />;
      case 'hr': return <HRContent />;
      case 'finance': return <FinanceContent />;
      case 'products': return <ProductsContent />;
      case 'supply': return <SupplyContent />;
      default: return null;
    }
  };

  return (
    <section id="platform" className="py-32 md:py-40 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-[640px] mb-20"
        >
          <span className="section-tag block mb-4">
            {t('platform.tag')}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr'
              ? 'Une plateforme puissante et simple, alimentée par l\'IA.'
              : 'A powerful and simple platform, powered by AI.'}
          </h2>
          <p className="text-base text-[#52525B] leading-[1.7]">
            {language === 'fr'
              ? <>SAKSAE rassemble vos équipes sur la même plateforme.<br className="hidden md:block" />Chaque outil est performant, mais la véritable magie se produit lorsque vous les utilisez ensemble.<br className="hidden md:block" />Réduisez la dispersion et déclenchez les bonnes actions au bon moment.</>
              : 'SAKSAE brings your teams together on the same platform. Each tool is powerful, but the real magic happens when you use them together. Reduce fragmentation and trigger the right actions at the right time.'}
          </p>
        </motion.div>

        {/* ── Detached Tab Bar (Attio-style) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          data-testid="platform-tabs"
        >
          <div className="border border-[#E4E4E7] rounded-xl overflow-hidden bg-white">
            <div className="grid grid-cols-6">
              {tabs.map((tab, i) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative py-4 text-[13px] text-center transition-colors ${
                    i > 0 ? 'border-l border-[#E4E4E7]' : ''
                  } ${
                    activeTab === tab.key
                      ? 'text-[#0A0A0A] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#52525B]'
                  }`}
                  style={{ transitionDuration: '180ms' }}
                  data-testid={`tab-${tab.key}`}
                >
                  {tab.name[language]}
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="platformTabUnderline"
                      className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#0A0A0A] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-6" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="border border-[#E4E4E7] rounded-xl overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex"
                style={{ height: '480px' }}
              >
                <Sidebar />
                <div className="flex-1 overflow-hidden border-l-0">
                  <TabContent tabKey={activeTab} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
