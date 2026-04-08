import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDemoClick = () => {
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#E5E7EB]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0A0A0A]">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold text-[#0A0A0A] tracking-tight">saksae</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              {language === 'fr' ? 'Plateforme' : 'Platform'}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <a href="#ai" className="px-3 py-2 text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              {language === 'fr' ? 'Outils IA' : 'AI Tools'}
            </a>
            <a href="#" className="px-3 py-2 text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              {language === 'fr' ? 'Ressources' : 'Resources'}
            </a>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs text-[#6B7280] hover:text-[#0A0A0A] transition-colors uppercase tracking-wider"
              data-testid="language-switcher"
            >
              {language}
            </button>
            <button
              onClick={handleLoginClick}
              className="px-3 py-2 text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors"
              data-testid="nav-login"
            >
              {t('nav.login')}
            </button>
            <button
              onClick={handleTrialClick}
              className="px-4 py-2 text-sm font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
              data-testid="nav-trial"
            >
              {t('nav.startFree')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden py-4 border-t border-[#E5E7EB]"
          >
            <div className="flex flex-col gap-2">
              <a href="#platform" className="py-2 text-sm text-[#6B7280]">{language === 'fr' ? 'Plateforme' : 'Platform'}</a>
              <a href="#ai" className="py-2 text-sm text-[#6B7280]">{language === 'fr' ? 'Outils IA' : 'AI Tools'}</a>
              <a href="#" className="py-2 text-sm text-[#6B7280]">{language === 'fr' ? 'Ressources' : 'Resources'}</a>
              <div className="flex items-center gap-4 pt-4 border-t border-[#E5E7EB]">
                <button onClick={toggleLanguage} className="text-xs text-[#6B7280] uppercase">
                  {language}
                </button>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <button onClick={handleLoginClick} className="w-full py-2.5 text-sm border border-[#E5E7EB] rounded-lg">
                  {t('nav.login')}
                </button>
                <button onClick={handleTrialClick} className="w-full py-2.5 text-sm bg-[#0A0A0A] text-white rounded-lg">
                  {t('nav.startFree')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
