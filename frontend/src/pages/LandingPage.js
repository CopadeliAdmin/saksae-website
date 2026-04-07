import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ToolsSection from '../components/ToolsSection';
import CostCalculatorSection from '../components/CostCalculatorSection';
import ROICalculatorSection from '../components/ROICalculatorSection';
import AIFeedSection from '../components/AIFeedSection';
import TransformSection from '../components/TransformSection';
import UseCasesSection from '../components/UseCasesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC]" data-testid="landing-page">
      <Header />
      <main>
        <HeroSection />
        <ToolsSection />
        <CostCalculatorSection />
        <ROICalculatorSection />
        <AIFeedSection />
        <TransformSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
