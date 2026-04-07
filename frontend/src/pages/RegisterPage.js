import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { ArrowLeft, Eye, EyeOff, Check } from 'lucide-react';

const RegisterPage = () => {
  const { t } = useLanguage();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const formatApiErrorDetail = (detail) => {
    if (detail == null) return 'Something went wrong. Please try again.';
    if (typeof detail === 'string') return detail;
    if (Array.isArray(detail))
      return detail.map((e) => (e && typeof e.msg === 'string' ? e.msg : JSON.stringify(e))).filter(Boolean).join(' ');
    if (detail && typeof detail.msg === 'string') return detail.msg;
    return String(detail);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await register(formData.email, formData.password, formData.name, formData.company);
      // Redirect to SAKSAE platform dashboard
      navigate('/');
    } catch (e) {
      setError(formatApiErrorDetail(e.response?.data?.detail) || e.message);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    '15 jours d\'essai gratuit',
    'Accès à toutes les fonctionnalités',
    'Pas de carte bancaire requise',
    'Support prioritaire',
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#475569] hover:text-[#312E81] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#312E81] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-2xl text-[#0F172A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              SAKSAE
            </span>
          </div>

          <h1
            className="text-3xl font-bold text-[#0F172A] mb-2"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            {t('auth.trial')}
          </h1>
          <p className="text-[#475569] mb-8">
            Créez votre compte et découvrez SAKSAE
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6" data-testid="register-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">{t('auth.name')}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jean Dupont"
                className="h-12"
                required
                data-testid="register-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                className="h-12"
                required
                data-testid="register-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">{t('auth.company')}</Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Votre entreprise"
                className="h-12"
                data-testid="register-company"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t('auth.password')}</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="h-12 pr-10"
                  required
                  minLength={6}
                  data-testid="register-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#475569]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#F97316] hover:bg-[#EA580C] text-white"
              data-testid="register-submit"
            >
              {loading ? 'Création...' : t('auth.registerButton')}
            </Button>
          </form>

          <p className="text-center text-[#475569] mt-8">
            {t('auth.hasAccount')}{' '}
            <Link to="/login" className="text-[#312E81] hover:underline font-medium">
              {t('auth.signIn')}
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#312E81] to-[#4338CA] items-center justify-center p-12">
        <div className="text-white max-w-md">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Commencez votre essai gratuit
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
