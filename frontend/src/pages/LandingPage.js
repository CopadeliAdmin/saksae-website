import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PlatformSection from '../components/PlatformSection';
import OnboardingSection from '../components/OnboardingSection';
import AISection from '../components/AISection';
import AIToolsSection from '../components/AIToolsSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]" data-testid="landing-page">
      <Header />
      <main>
        <HeroSection />
        <PlatformSection />
        <OnboardingSection />
        <AIToolsSection />
        <AISection />
        <PricingSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
