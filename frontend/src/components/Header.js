import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTrialClick = () => { window.location.href = '/register'; };
  const handleLoginClick = () => { window.location.href = '/login'; };

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#FAFAFA]/85 backdrop-blur-xl border-b border-[#E4E4E7]/60"
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-between h-[56px]">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img src="/logo-saksae.png" alt="SAKSAE" className="h-10 object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {[
              { href: '#platform', label: language === 'fr' ? 'Plateforme' : 'Platform' },
              { href: '#ai-tools', label: language === 'fr' ? 'Outils IA' : 'AI Tools' },
              { href: '#pricing', label: language === 'fr' ? 'Tarification' : 'Pricing' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[13px] text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                style={{ transitionDuration: '180ms' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 text-[11px] text-[#A1A1AA] hover:text-[#52525B] transition-colors uppercase tracking-[0.08em] font-medium"
              style={{ transitionDuration: '180ms' }}
              data-testid="language-switcher"
            >
              {language}
            </button>
            <button
              onClick={handleLoginClick}
              className="px-3.5 py-2 text-[13px] text-[#71717A] hover:text-[#0A0A0A] transition-colors"
              style={{ transitionDuration: '180ms' }}
              data-testid="nav-login"
            >
              {t('nav.login')}
            </button>
            <button
              onClick={handleTrialClick}
              className="px-4 py-[7px] text-[13px] font-medium bg-[#0A0A0A] text-white rounded-lg hover:bg-[#171717] transition-all active:scale-[0.97]"
              style={{ transitionDuration: '200ms', transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
              data-testid="nav-trial"
            >
              {t('nav.startFree')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#52525B]"
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
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden py-5 border-t border-[#E4E4E7]/60"
          >
            <div className="flex flex-col gap-1">
              <a href="#platform" className="py-2.5 text-[14px] text-[#52525B]">{language === 'fr' ? 'Plateforme' : 'Platform'}</a>
              <a href="#ai-tools" className="py-2.5 text-[14px] text-[#52525B]">{language === 'fr' ? 'Outils IA' : 'AI Tools'}</a>
              <a href="#pricing" className="py-2.5 text-[14px] text-[#52525B]">{language === 'fr' ? 'Tarification' : 'Pricing'}</a>
              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-[#E4E4E7]/60">
                <button onClick={toggleLanguage} className="text-[11px] text-[#A1A1AA] uppercase tracking-wider font-medium">
                  {language}
                </button>
              </div>
              <div className="flex flex-col gap-2 pt-3">
                <button onClick={handleLoginClick} className="w-full py-2.5 text-[14px] border border-[#E4E4E7] rounded-lg text-[#52525B]">
                  {t('nav.login')}
                </button>
                <button onClick={handleTrialClick} className="w-full py-2.5 text-[14px] bg-[#0A0A0A] text-white rounded-lg font-medium">
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
