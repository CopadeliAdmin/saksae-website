import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <footer className="py-16 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0A0A0A]">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-[#0A0A0A]">saksae</span>
            </div>
            <p className="text-sm text-[#6B7280] mb-4">
              {t('footer.tagline')}
            </p>
            <button
              onClick={toggleLanguage}
              className="text-xs text-[#6B7280] hover:text-[#0A0A0A] transition-colors uppercase tracking-wider"
              data-testid="footer-language-switcher"
            >
              {language === 'fr' ? 'Français' : 'English'}
            </button>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-medium text-[#0A0A0A] mb-4">{t('footer.platform')}</h4>
            <ul className="space-y-3 text-sm text-[#6B7280]">
              <li><a href="#platform" className="hover:text-[#0A0A0A] transition-colors">CRM</a></li>
              <li><a href="#platform" className="hover:text-[#0A0A0A] transition-colors">Projects</a></li>
              <li><a href="#ai" className="hover:text-[#0A0A0A] transition-colors">AI Features</a></li>
              <li><a href="#pricing" className="hover:text-[#0A0A0A] transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-[#0A0A0A] mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3 text-sm text-[#6B7280]">
              <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-[#0A0A0A] mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm text-[#6B7280]">
              <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-[#0A0A0A] transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B7280]">
            {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
