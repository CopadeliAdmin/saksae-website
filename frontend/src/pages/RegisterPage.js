import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/ui/input';
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
      navigate('/');
    } catch (e) {
      setError(formatApiErrorDetail(e.response?.data?.detail) || e.message);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    '14-day free trial',
    'No credit card required',
    'All features included',
    'Cancel anytime'
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0A0A0A] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#0A0A0A]">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold text-[#0A0A0A]">saksae</span>
          </div>

          <h1 className="text-2xl font-semibold text-[#0A0A0A] mb-2">
            {t('auth.trial')}
          </h1>
          <p className="text-sm text-[#6B7280] mb-8">
            Get started with SAKSAE today.
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm" data-testid="register-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1.5">{t('auth.name')}</label>
              <Input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="h-11 border-[#E5E7EB] focus:border-[#0A0A0A] focus:ring-0"
                required
                data-testid="register-name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1.5">{t('auth.email')}</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="h-11 border-[#E5E7EB] focus:border-[#0A0A0A] focus:ring-0"
                required
                data-testid="register-email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1.5">{t('auth.company')}</label>
              <Input
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="h-11 border-[#E5E7EB] focus:border-[#0A0A0A] focus:ring-0"
                data-testid="register-company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1.5">{t('auth.password')}</label>
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="h-11 pr-10 border-[#E5E7EB] focus:border-[#0A0A0A] focus:ring-0"
                  required
                  minLength={6}
                  data-testid="register-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-[#0A0A0A] text-white text-sm font-medium rounded-lg hover:bg-[#1F2937] transition-colors disabled:opacity-50"
              data-testid="register-submit"
            >
              {loading ? 'Creating account...' : t('auth.registerButton')}
            </button>
          </form>

          <p className="text-center text-sm text-[#6B7280] mt-8">
            {t('auth.hasAccount')}{' '}
            <Link to="/login" className="text-[#0A0A0A] font-medium hover:underline">
              {t('auth.signIn')}
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:flex flex-1 bg-[#0A0A0A] items-center justify-center p-12">
        <div className="max-w-sm text-white">
          <h2 className="text-2xl font-semibold mb-8">
            Start your free trial
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-white/80">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
