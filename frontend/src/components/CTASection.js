import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CTASection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        email,
        name,
        source: 'cta_final',
      });
      setSubmitted(true);
    } catch (e) {
      console.error('Error submitting lead:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleTrialClick = () => {
    window.location.href = '/register';
  };

  return (
    <section id="cta" className="py-20 lg:py-32 bg-[#312E81]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            data-testid="cta-title"
          >
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/70 mb-12">
            {t('cta.subtitle')}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <Input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                data-testid="cta-name-input"
              />
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                data-testid="cta-email-input"
              />
              <Button
                type="submit"
                disabled={loading || !email || !name}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white h-12 text-lg font-medium"
                data-testid="cta-submit"
              >
                {loading ? '...' : t('cta.button')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-white/50 text-sm">
                {t('cta.noCard')}
              </p>
            </form>
          ) : (
            <div className="bg-white/10 rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <p className="text-white text-xl font-medium mb-2">Merci {name} !</p>
              <p className="text-white/70">Nous vous contacterons très bientôt.</p>
              <Button
                onClick={handleTrialClick}
                className="mt-6 bg-white text-[#312E81] hover:bg-white/90"
              >
                Commencer maintenant
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
