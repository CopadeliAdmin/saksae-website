import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const footerLinks = {
    product: {
      title: language === 'fr' ? 'Produit' : 'Product',
      links: [
        { label: 'CRM', href: '#platform' },
        { label: 'Management', href: '#platform' },
        { label: language === 'fr' ? 'Finances' : 'Finance', href: '#platform' },
        { label: 'RH', href: '#platform' },
        { label: language === 'fr' ? 'Outils IA' : 'AI Tools', href: '#ai-tools' },
      ],
    },
    company: {
      title: language === 'fr' ? 'Entreprise' : 'Company',
      links: [
        { label: language === 'fr' ? 'Tarification' : 'Pricing', href: '#pricing' },
        { label: language === 'fr' ? 'Connexion' : 'Login', href: '/login' },
        { label: language === 'fr' ? 'Inscription' : 'Register', href: '/register' },
      ],
    },
  };

  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E4E4E7]">
      <div className="max-w-[1120px] mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo-saksae.png" alt="SAKSAE" className="h-10 object-contain" style={{ imageRendering: 'auto' }} />
            </div>
            <p className="text-[13px] text-[#A1A1AA] leading-[1.7] max-w-xs">
              {language === 'fr'
                ? 'La plateforme d\'Exécution Business IA pour Indépendants, TPE et PME.'
                : 'The AI Business Execution platform for Freelancers and SMEs.'}
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-[0.08em] mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#71717A] hover:text-[#0A0A0A] transition-colors"
                      style={{ transitionDuration: '180ms' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-[#E4E4E7]">
          <p className="text-[12px] text-[#A1A1AA]">
            &copy; {new Date().getFullYear()} SAKSAE. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
