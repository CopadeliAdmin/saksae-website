import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(email, password);
      // Redirect to SAKSAE platform dashboard
      // For now, redirect to home or a dashboard page
      navigate('/');
    } catch (e) {
      setError(formatApiErrorDetail(e.response?.data?.detail) || e.message);
    } finally {
      setLoading(false);
    }
  };

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
            {t('auth.login')}
          </h1>
          <p className="text-[#475569] mb-8">
            Connectez-vous à votre plateforme SAKSAE
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6" data-testid="login-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.email')}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="h-12"
                required
                data-testid="login-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t('auth.password')}</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 pr-10"
                  required
                  data-testid="login-password"
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
              className="w-full h-12 bg-[#312E81] hover:bg-[#4338CA] text-white"
              data-testid="login-submit"
            >
              {loading ? 'Connexion...' : t('auth.loginButton')}
            </Button>
          </form>

          <p className="text-center text-[#475569] mt-8">
            {t('auth.noAccount')}{' '}
            <Link to="/register" className="text-[#F97316] hover:underline font-medium">
              {t('auth.signUp')}
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-[#312E81] items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Centraliser → Activer → Générer
          </h2>
          <p className="text-white/70 text-lg">
            Transformez vos données en actions concrètes et générez du revenu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
