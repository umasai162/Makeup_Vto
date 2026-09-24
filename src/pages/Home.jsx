import React from 'react';
import Hero from '../components/home/Hero';
import FeatureStrip from '../components/home/FeatureStrip';
import HowItWorksPreview from '../components/home/HowItWorksPreview';
import FeaturedLooks from '../components/home/FeaturedLooks';
import BeautyCTA from '../components/home/BeautyCTA';

const Home = () => {
  return (
    <div className="space-y-6 pb-12">
      <Hero />
      <FeatureStrip />
      <HowItWorksPreview />
      <FeaturedLooks />
      <BeautyCTA />
    </div>
  );
};

export default Home;
