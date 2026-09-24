import React from 'react';
import { Camera, Sparkles, SlidersHorizontal, GraduationCap, ShoppingBag } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      icon: Camera,
      title: 'Snap or Upload Selfie',
      description: 'Capture a clear photo. Built-in quality check validates lighting and angle.'
    },
    {
      step: '02',
      icon: Sparkles,
      title: 'AI Feature Analysis',
      description: 'Generates your beauty profile: skin tone, undertone, face shape & eye profile.'
    },
    {
      step: '03',
      icon: SlidersHorizontal,
      title: 'Recommend & Try-On',
      description: 'Select your occasion and style. Test shades live on your VTO canvas.'
    },
    {
      step: '04',
      icon: GraduationCap,
      title: 'AI Step-by-Step Coach',
      description: 'Follow guided face overlays showing exact application regions & direction.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Simple 4-Step Journey"
          title="How LAVIX AI BEAUTY Works"
          subtitle="Understand your features, discover what suits you, try it virtually, and learn how to create it."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
          {steps.map((item, idx) => (
            <div key={idx} className="relative bg-plum-50/60 p-6 rounded-3xl border border-rose-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-rose-200 text-plum-950 flex items-center justify-center font-bold text-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-serif font-black text-plum-300">{item.step}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-plum-950 mb-2">{item.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-sans">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
