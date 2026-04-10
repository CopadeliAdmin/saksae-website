import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Home, Bell, CheckSquare, FileText, Mail, Phone,
  BarChart2, Play, ChevronDown, ChevronRight, Search,
  Star, Settings, Filter, Plus, MoreHorizontal,
  Share2, Download, Eye, MessageSquare, Info,
  Folder, Zap, GitBranch, ToggleRight
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

  const sidebarItems = [
    { icon: Home, label: 'Accueil', active: false },
    { icon: Bell, label: 'Notifications', active: false },
    { icon: CheckSquare, label: 'Tâches', active: false },
    { icon: FileText, label: 'Notes', active: false },
    { icon: Mail, label: 'Emails', active: false },
    { icon: Phone, label: 'Appels', active: false },
    { icon: BarChart2, label: 'Rapports', active: false },
  ];

  const automationItems = [
    { icon: ChevronRight, label: 'Séquences' },
    { icon: GitBranch, label: 'Workflows' },
  ];

  const favoriteItems = [
    { icon: Folder, label: 'Pipeline Deals', tag: 'Deals' },
    { icon: ChevronRight, label: 'Outreach Séquence' },
    { icon: GitBranch, label: 'Triage Leads' },
  ];

  // Active sidebar item per tab
  const activeSidebarByTab = {
    crm: 'Accueil',
    management: 'Tâches',
    hr: 'Accueil',
    finance: 'Rapports',
    products: 'Accueil',
    supply: 'Accueil',
  };

  const Sidebar = () => (
    <div className="w-52 lg:w-56 border-r border-[#E5E7EB] bg-white flex-shrink-0 flex flex-col overflow-hidden">
      {/* Workspace header */}
      <div className="flex items-center gap-2 px-3 py-3 border-b border-[#E5E7EB]">
        <div className="w-6 h-6 bg-[#0A0A0A] rounded flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[10px] font-bold">S</span>
        </div>
        <span className="text-sm font-medium text-[#0A0A0A]">SAKSAE</span>
        <ChevronDown className="w-3 h-3 text-[#9CA3AF] ml-auto" />
      </div>

      {/* Quick Actions + Search */}
      <div className="px-2 pt-2 pb-1">
        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-[#F9FAFB] border border-[#E5E7EB]">
          <Zap className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <span className="text-xs text-[#9CA3AF]">Actions rapides</span>
          <div className="ml-auto flex items-center gap-1">
            <Search className="w-3 h-3 text-[#9CA3AF]" />
          </div>
        </div>
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto px-2 py-1">
        <div className="space-y-0.5">
          {sidebarItems.map((item) => {
            const isActive = activeSidebarByTab[activeTab] === item.label;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm cursor-default transition-colors ${
                  isActive ? 'bg-[#F3F4F6] text-[#0A0A0A] font-medium' : 'text-[#6B7280]'
                }`}
              >
                <item.icon className="w-4 h-4" strokeWidth={1.5} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Automations group */}
        <div className="mt-1">
          <div className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-[#6B7280] cursor-default">
            <Play className="w-4 h-4" strokeWidth={1.5} />
            <span>Automatisations</span>
            <ChevronDown className="w-3 h-3 ml-auto" />
          </div>
          <div className="pl-4">
            {automationItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-2 py-1 text-sm text-[#6B7280] cursor-default">
                <item.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Favorites */}
        <div className="mt-3 pt-2 border-t border-[#F3F4F6]">
          <div className="flex items-center gap-1 px-2 py-1 text-xs text-[#9CA3AF]">
            <ChevronDown className="w-3 h-3" />
            <span>Favoris</span>
          </div>
          <div className="mt-0.5 space-y-0.5">
            {favoriteItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-2 py-1 text-sm text-[#6B7280] cursor-default">
                <item.icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span className="truncate">{item.label}</span>
                {item.tag && (
                  <span className="ml-auto text-[10px] text-[#9CA3AF]">{item.tag}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  /* ── Tab Contents ── */

  const CRMContent = () => {
    const companies = [
      { name: 'TechVision', color: 'bg-violet-500', domain: 'techvision.fr', deals: 'TechVision - Expansion', icp: 'Excellent', icpBg: 'bg-[#D1FAE5] text-[#059669]', arr: '€100K-250K', connection: 'Fort' },
      { name: 'DataFlow', color: 'bg-blue-500', domain: 'dataflow.io', deals: 'DataFlow', icp: 'Medium', icpBg: 'bg-[#FEF3C7] text-[#92400E]', arr: '€500K-1M', connection: 'Fort' },
      { name: 'CloudNine', color: 'bg-emerald-500', domain: 'cloudnine.com', deals: 'CloudNine - Enterprise', icp: 'Good', icpBg: 'bg-[#D1FAE5] text-[#059669]', arr: '€1M-5M', connection: 'Fort' },
      { name: 'SignalPro', color: 'bg-orange-500', domain: 'signalpro.fr', deals: 'SignalPro', icp: 'Good', icpBg: 'bg-[#D1FAE5] text-[#059669]', arr: '€1M-5M', connection: 'Fort' },
      { name: 'NexGen', color: 'bg-pink-500', domain: 'nexgen.io', deals: 'NexGen - Expansion', icp: 'Good', icpBg: 'bg-[#D1FAE5] text-[#059669]', arr: '€500K-1M', connection: 'Fort' },
      { name: 'InnoSys', color: 'bg-cyan-500', domain: 'innosys.com', deals: 'InnoSys - Automation', icp: 'Medium', icpBg: 'bg-[#FEF3C7] text-[#92400E]', arr: '€250K-500K', connection: 'Fort' },
      { name: 'BrightPath', color: 'bg-amber-500', domain: 'brightpath.fr', deals: 'BrightPath', icp: 'Good', icpBg: 'bg-[#D1FAE5] text-[#059669]', arr: '€100K-250K', connection: 'Fort' },
      { name: 'CoreTech', color: 'bg-indigo-500', domain: 'coretech.io', deals: 'CoreTech - Pro', icp: 'Medium', icpBg: 'bg-[#FEF3C7] text-[#92400E]', arr: '€250K-500K', connection: 'Fort' },
    ];

    return (
      <div className="h-full flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#0A0A0A]">Entreprises</span>
            <Info className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5">
              <div className="w-6 h-6 rounded-full bg-[#F59E0B] border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-[#3B82F6] border-2 border-white" />
              <div className="w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-[#E5E7EB] border-2 border-white flex items-center justify-center">
                <span className="text-[8px] text-[#6B7280]">+1</span>
              </div>
            </div>
            <span className="text-xs text-[#6B7280]">Partager</span>
            <MessageSquare className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <Info className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <MoreHorizontal className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </div>
        </div>

        {/* Sub bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#0A0A0A]">Top entreprises</span>
            <ChevronDown className="w-3 h-3 text-[#9CA3AF]" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
              <Settings className="w-3 h-3" />
              <span>Paramètres vue</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
              <Download className="w-3 h-3" />
              <span>Import / Export</span>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] bg-[#F9FAFB] px-2 py-1 rounded">
            <Filter className="w-3 h-3" />
            <span>Trié par</span>
            <span className="font-medium text-[#0A0A0A]">Dernière interaction</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] bg-[#F9FAFB] px-2 py-1 rounded">
            <span>Filtre avancé</span>
            <span className="bg-[#E5E7EB] text-[#0A0A0A] px-1 rounded text-[10px] font-medium">3</span>
          </div>
          <MoreHorizontal className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <Plus className="w-3.5 h-3.5 text-[#9CA3AF]" />
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
                <th className="text-left px-4 py-2 font-medium text-[#6B7280] w-40">Entreprise</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Domaines</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Deals associés</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">
                  <span className="flex items-center gap-1">Score ICP <span className="text-[9px] bg-[#EDE9FE] text-[#7C3AED] px-1 rounded">AI</span></span>
                </th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">
                  <span className="flex items-center gap-1">CA estimé <span className="text-[9px] bg-[#EDE9FE] text-[#7C3AED] px-1 rounded">AI</span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, i) => (
                <tr key={i} className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded ${company.color} flex items-center justify-center`}>
                        <span className="text-white text-[9px] font-bold">{company.name[0]}</span>
                      </div>
                      <span className="font-medium text-[#0A0A0A]">{company.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="text-[#3B82F6]">{company.domain}</span>
                  </td>
                  <td className="px-3 py-2.5 text-[#6B7280]">{company.deals}</td>
                  <td className="px-3 py-2.5">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${company.icpBg}`}>
                      {company.icp}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="text-[#059669] font-medium">{company.arr}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const ManagementContent = () => (
    <div className="h-full flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-[#6B7280]" />
          <span className="text-sm font-medium text-[#0A0A0A]">Workflows</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <Info className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <span>Aide</span>
        </div>
      </div>

      {/* Sub bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs">
            <Settings className="w-3 h-3 text-[#6B7280]" />
            <span className="font-medium text-[#0A0A0A]">Éditeur</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <Play className="w-3 h-3" />
            <span>Exécutions</span>
            <span className="bg-[#E5E7EB] px-1 rounded text-[10px] font-medium text-[#0A0A0A]">70</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="text-xs text-[#059669] font-medium">Live</span>
          <div className="w-8 h-4 bg-[#3B82F6] rounded-full flex items-center justify-end px-0.5">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Content: Workflow editor + Run history */}
      <div className="flex-1 flex overflow-hidden">
        {/* Flow editor */}
        <div className="flex-1 p-6 flex flex-col items-center gap-3 overflow-auto bg-[#FAFAFA]">
          {/* Trigger node */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 w-56 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-[#EDE9FE] flex items-center justify-center">
                  <Zap className="w-2.5 h-2.5 text-[#7C3AED]" />
                </div>
                <span className="text-xs font-medium text-[#0A0A0A]">Trigger</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E]">Running</span>
            </div>
            <div className="text-[10px] text-[#6B7280] border-t border-[#F3F4F6] pt-1.5 mt-1.5">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-[#3B82F6] flex items-center justify-center"><span className="text-white text-[7px]">R</span></span> Record command</span>
            </div>
            <div className="text-[10px] text-[#9CA3AF] mt-0.5">Trigger on a Company</div>
          </div>

          <div className="w-px h-6 bg-[#E5E7EB]" />
          <div className="w-2 h-2 rounded-full border-2 border-[#3B82F6] bg-white" />
          <div className="w-px h-6 bg-[#E5E7EB]" />

          {/* Research node */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 w-56 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-4 h-4 rounded bg-[#3B82F6] flex items-center justify-center">
                <span className="text-white text-[7px] font-bold">R</span>
              </div>
              <span className="text-xs font-medium text-[#0A0A0A]">Research record</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EDE9FE] text-[#7C3AED] ml-auto">Agent</span>
            </div>
            <div className="text-[10px] text-[#9CA3AF] mt-1">Determine funding stage</div>
          </div>

          <div className="w-px h-6 bg-[#E5E7EB]" />
          <div className="w-2 h-2 rounded-full border-2 border-[#3B82F6] bg-white" />
          <div className="w-px h-6 bg-[#E5E7EB]" />

          {/* Switch node */}
          <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 w-56 shadow-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-[#FEE2E2] flex items-center justify-center">
                <span className="text-[#DC2626] text-[8px] font-bold">!</span>
              </div>
              <span className="text-xs font-medium text-[#0A0A0A]">Switch</span>
              <span className="text-[10px] text-[#9CA3AF] ml-auto">Conditions</span>
            </div>
          </div>
        </div>

        {/* Run history panel */}
        <div className="w-52 border-l border-[#E5E7EB] bg-white overflow-auto">
          <div className="p-3 space-y-1.5">
            {[
              { id: 70, status: 'running', time: 'En cours' },
              { id: 69, status: 'done', records: 15, time: 'Il y a 1 min' },
              { id: 68, status: 'done', records: 11, time: 'Il y a 2 min' },
              { id: 67, status: 'done', records: 11, time: 'Il y a 3 min' },
              { id: 66, status: 'done', records: 16, time: 'Il y a 5 min' },
              { id: 65, status: 'done', records: 14, time: 'Il y a 6 min' },
            ].map((run) => (
              <div key={run.id} className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#F9FAFB] transition-colors">
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${run.status === 'running' ? 'bg-[#3B82F6] animate-pulse' : 'bg-[#059669]'}`} />
                  <span className="text-xs text-[#0A0A0A]">Run #{run.id}</span>
                  {run.records && (
                    <span className="text-[9px] text-[#9CA3AF]">@{run.records}</span>
                  )}
                </div>
                <span className="text-[10px] text-[#9CA3AF]">{run.time}</span>
              </div>
            ))}
          </div>

          {/* Overview stats */}
          <div className="px-3 pt-2 border-t border-[#E5E7EB]">
            <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">Overview</span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-[#F9FAFB] rounded p-2 text-center">
                <div className="text-lg font-semibold text-[#059669]">69</div>
                <div className="text-[9px] text-[#9CA3AF]">Completed</div>
              </div>
              <div className="bg-[#F9FAFB] rounded p-2 text-center">
                <div className="text-lg font-semibold text-[#0A0A0A]">0</div>
                <div className="text-[9px] text-[#9CA3AF]">Failed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const HRContent = () => {
    const employees = [
      { name: 'Marie Dupont', role: 'Directrice Marketing', status: 'Bureau', avatar: 'bg-violet-400' },
      { name: 'Thomas Martin', role: 'Dev Senior', status: 'Télétravail', avatar: 'bg-blue-400' },
      { name: 'Sophie Bernard', role: 'Product Manager', status: 'Bureau', avatar: 'bg-emerald-400' },
      { name: 'Lucas Petit', role: 'Designer UX', status: 'Congé', avatar: 'bg-orange-400' },
      { name: 'Emma Richard', role: 'Sales Manager', status: 'Bureau', avatar: 'bg-pink-400' },
      { name: 'Hugo Moreau', role: 'Data Analyst', status: 'Télétravail', avatar: 'bg-cyan-400' },
      { name: 'Léa Dubois', role: 'RH Manager', status: 'Bureau', avatar: 'bg-amber-400' },
    ];
    const statusColors = { Bureau: 'bg-[#D1FAE5] text-[#059669]', Télétravail: 'bg-[#DBEAFE] text-[#2563EB]', Congé: 'bg-[#FEF3C7] text-[#92400E]' };

    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#0A0A0A]">Équipe</span>
            <span className="text-xs text-[#9CA3AF]">24 employés</span>
          </div>
          <div className="flex items-center gap-3">
            <Plus className="w-3.5 h-3.5 text-[#9CA3AF]" />
            <MoreHorizontal className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] bg-[#F9FAFB] px-2 py-1 rounded">
            <Filter className="w-3 h-3" />
            <span>Département: </span>
            <span className="font-medium text-[#0A0A0A]">Tous</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] bg-[#F9FAFB] px-2 py-1 rounded">
            <span>Statut: </span>
            <span className="font-medium text-[#0A0A0A]">Actifs</span>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
                <th className="text-left px-4 py-2 font-medium text-[#6B7280]">Employé</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Poste</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Statut</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Objectifs</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => (
                <tr key={i} className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full ${emp.avatar} flex items-center justify-center`}>
                        <span className="text-white text-[9px] font-bold">{emp.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="font-medium text-[#0A0A0A]">{emp.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-[#6B7280]">{emp.role}</td>
                  <td className="px-3 py-2.5">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${statusColors[emp.status]}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-16 h-1.5 bg-[#E5E7EB] rounded-full">
                        <div className="h-full bg-[#0A0A0A] rounded-full" style={{ width: `${60 + Math.random() * 40}%` }} />
                      </div>
                      <span className="text-[10px] text-[#9CA3AF]">{Math.floor(60 + Math.random() * 40)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const FinanceContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E7EB]">
        <span className="text-sm font-medium text-[#0A0A0A]">Vue financière</span>
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <Eye className="w-3.5 h-3.5" />
          <span>Ce mois</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'Chiffre d\'affaires', value: '€127,450', change: '+12%', up: true },
            { label: 'Factures en attente', value: '€23,800', change: '3 factures', up: false },
            { label: 'Marge nette', value: '34.2%', change: '+2.1%', up: true },
          ].map((kpi, i) => (
            <div key={i} className="bg-[#F9FAFB] rounded-lg p-3 border border-[#F3F4F6]">
              <p className="text-[10px] text-[#9CA3AF] mb-1">{kpi.label}</p>
              <p className="text-lg font-semibold text-[#0A0A0A]">{kpi.value}</p>
              <p className={`text-[10px] mt-0.5 ${kpi.up ? 'text-[#059669]' : 'text-[#6B7280]'}`}>{kpi.change}</p>
            </div>
          ))}
        </div>
        {/* Mini chart */}
        <div className="bg-[#F9FAFB] rounded-lg p-4 border border-[#F3F4F6]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#0A0A0A]">Revenus mensuels</span>
            <span className="text-[10px] text-[#9CA3AF]">Jan - Avr 2026</span>
          </div>
          <div className="flex items-end gap-2 h-20">
            {[45, 62, 58, 75, 68, 82, 90, 78, 95, 88, 92, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#0A0A0A] rounded-t" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((m, i) => (
              <span key={i} className="text-[8px] text-[#9CA3AF] flex-1 text-center">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsContent = () => {
    const products = [
      { name: 'Module CRM Pro', sku: 'CRM-001', stock: 'SaaS', status: 'Actif', mrr: '€45/mois' },
      { name: 'Module RH', sku: 'RH-002', stock: 'SaaS', status: 'Actif', mrr: '€35/mois' },
      { name: 'Module Finance', sku: 'FIN-003', stock: 'SaaS', status: 'Actif', mrr: '€30/mois' },
      { name: 'Pack Enterprise', sku: 'ENT-010', stock: 'Bundle', status: 'Actif', mrr: '€199/mois' },
      { name: 'Module IA Add-on', sku: 'AI-005', stock: 'Add-on', status: 'Beta', mrr: '€25/mois' },
      { name: 'API Avancée', sku: 'API-007', stock: 'Add-on', status: 'Actif', mrr: '€15/mois' },
    ];
    const statusColors = { Actif: 'bg-[#D1FAE5] text-[#059669]', Beta: 'bg-[#EDE9FE] text-[#7C3AED]' };

    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#0A0A0A]">Catalogue</span>
            <span className="text-xs text-[#9CA3AF]">6 produits</span>
          </div>
          <Plus className="w-3.5 h-3.5 text-[#9CA3AF]" />
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
                <th className="text-left px-4 py-2 font-medium text-[#6B7280]">Produit</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">SKU</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Type</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">Statut</th>
                <th className="text-left px-3 py-2 font-medium text-[#6B7280]">MRR</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={i} className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors">
                  <td className="px-4 py-2.5 font-medium text-[#0A0A0A]">{p.name}</td>
                  <td className="px-3 py-2.5 text-[#9CA3AF] font-mono">{p.sku}</td>
                  <td className="px-3 py-2.5 text-[#6B7280]">{p.stock}</td>
                  <td className="px-3 py-2.5">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${statusColors[p.status]}`}>{p.status}</span>
                  </td>
                  <td className="px-3 py-2.5 font-medium text-[#0A0A0A]">{p.mrr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const SupplyContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E7EB]">
        <span className="text-sm font-medium text-[#0A0A0A]">Approvisionnements</span>
        <div className="flex items-center gap-3">
          <Plus className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <MoreHorizontal className="w-3.5 h-3.5 text-[#9CA3AF]" />
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto space-y-3">
        {[
          { id: 'CMD-2024-089', supplier: 'TechParts SA', items: 12, status: 'Livré', date: '08 Avr', color: 'bg-[#D1FAE5] text-[#059669]' },
          { id: 'CMD-2024-090', supplier: 'CloudServices', items: 3, status: 'En transit', date: '09 Avr', color: 'bg-[#DBEAFE] text-[#2563EB]' },
          { id: 'CMD-2024-091', supplier: 'DataInfra Pro', items: 8, status: 'En transit', date: '09 Avr', color: 'bg-[#DBEAFE] text-[#2563EB]' },
          { id: 'CMD-2024-092', supplier: 'SecureNet', items: 5, status: 'Commandé', date: '10 Avr', color: 'bg-[#FEF3C7] text-[#92400E]' },
          { id: 'CMD-2024-093', supplier: 'InnoLabs', items: 15, status: 'Commandé', date: '10 Avr', color: 'bg-[#FEF3C7] text-[#92400E]' },
        ].map((order, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-[#F3F4F6] hover:border-[#E5E7EB] bg-white transition-colors">
            <div className="flex items-center gap-3">
              <div className="text-xs">
                <span className="font-mono text-[#9CA3AF]">{order.id}</span>
                <p className="font-medium text-[#0A0A0A] mt-0.5">{order.supplier}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-[#9CA3AF]">{order.items} articles</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${order.color}`}>{order.status}</span>
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
    <section id="platform" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-3xl mb-16"
        >
          <span className="section-tag block mb-4">
            {t('platform.tag')}
          </span>
          <h2 className="text-section-title text-[#0A0A0A] mb-4">
            {language === 'fr'
              ? 'Une plateforme puissante et simple, alimentée par l\'IA.'
              : 'A powerful and simple platform, powered by AI.'}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {language === 'fr'
              ? 'SAKSAE rassemble vos équipes opérationnelles sur la même plateforme. Chaque produit est puissant, mais la véritable magie se produit lorsque vous les utilisez ensemble.'
              : 'SAKSAE brings your operational teams together on the same platform. Each product is powerful, but the real magic happens when you use them together.'}
          </p>
        </motion.div>

        {/* Attio-style app mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Tabs - grid with borders */}
          <div className="grid grid-cols-6 border border-[#E5E7EB] rounded-t-xl overflow-hidden" data-testid="platform-tabs">
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-3.5 text-sm font-medium text-center transition-colors ${
                  i > 0 ? 'border-l border-[#E5E7EB]' : ''
                } ${
                  activeTab === tab.key
                    ? 'text-[#0A0A0A] bg-white'
                    : 'text-[#9CA3AF] hover:text-[#6B7280] bg-[#FAFAFA]'
                }`}
                data-testid={`tab-${tab.key}`}
              >
                {tab.name[language]}
              </button>
            ))}
          </div>

          {/* App mockup container */}
          <div className="border border-t-0 border-[#E5E7EB] rounded-b-xl overflow-hidden bg-white shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
                style={{ height: '440px' }}
              >
                <Sidebar />
                <div className="flex-1 overflow-hidden">
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
