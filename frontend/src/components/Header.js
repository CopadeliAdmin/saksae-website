import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Demo CTA - links to sales calendar
  const handleDemoClick = () => {
    // TODO: Replace with actual sales calendar URL
    window.open('https://calendly.com/saksae-sales', '_blank');
  };

  // Trial CTA - links to registration page
  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  // Login - links to platform login
  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#E2E8F0]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#312E81] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-[#0F172A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              SAKSAE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('tools')}
              className="text-[#475569] hover:text-[#312E81] transition-colors font-medium"
              data-testid="nav-tools"
            >
              {t('nav.tools')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-[#475569] hover:text-[#312E81] transition-colors font-medium"
              data-testid="nav-pricing"
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-[#475569] hover:text-[#312E81] transition-colors font-medium"
              data-testid="nav-usecases"
            >
              {t('nav.useCases')}
            </button>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-[#475569] hover:text-[#312E81] transition-colors"
              data-testid="language-switcher"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>

            <Button
              variant="ghost"
              onClick={handleLoginClick}
              className="text-[#475569] hover:text-[#312E81]"
              data-testid="nav-login"
            >
              {t('nav.login')}
            </Button>

            <Button
              onClick={handleDemoClick}
              variant="outline"
              className="border-[#312E81] text-[#312E81] hover:bg-[#312E81] hover:text-white"
              data-testid="nav-demo"
            >
              {t('nav.demo')}
            </Button>

            <Button
              onClick={handleTrialClick}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white"
              data-testid="nav-trial"
            >
              {t('nav.trial')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-[#E2E8F0]"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('tools')}
                className="text-left py-2 text-[#475569] hover:text-[#312E81]"
              >
                {t('nav.tools')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left py-2 text-[#475569] hover:text-[#312E81]"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('use-cases')}
                className="text-left py-2 text-[#475569] hover:text-[#312E81]"
              >
                {t('nav.useCases')}
              </button>
              <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8F0]">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 text-[#475569]"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" onClick={handleLoginClick} className="w-full">
                  {t('nav.login')}
                </Button>
                <Button onClick={handleTrialClick} className="w-full bg-[#F97316] hover:bg-[#EA580C]">
                  {t('nav.trial')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
