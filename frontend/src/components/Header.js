import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#FAFAFA]/85 backdrop-blur-xl border-b border-[#E4E4E7]/60"
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href={process.env.PUBLIC_URL || "/"} className="flex items-center group">
            <img src={`${process.env.PUBLIC_URL}/logo-saksae.png`} alt="SAKSAE" className="h-[60px] object-contain" style={{ imageRendering: 'auto' }} />
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
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
