import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DiscoveryBar from '../components/home/DiscoveryBar';
import BeautyProfileSection from '../components/home/BeautyProfileSection';
import RecommendedLooksSection from '../components/home/RecommendedLooksSection';
import VirtualTryOnSection from '../components/home/VirtualTryOnSection';
import BeautyCoachSection from '../components/home/BeautyCoachSection';
import ShopYourLookSection from '../components/home/ShopYourLookSection';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <div className="space-y-12 pb-12">
      <HeroSection />
      <DiscoveryBar />
      <BeautyProfileSection />
      <RecommendedLooksSection />
      <VirtualTryOnSection />
      <BeautyCoachSection />
      <ShopYourLookSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;
