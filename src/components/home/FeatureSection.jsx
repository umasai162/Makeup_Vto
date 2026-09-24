import React from 'react';
import { ScanFace, UserCheck, Palette, GraduationCap, ShoppingBag } from 'lucide-react';
import Card from '../common/Card';
import SectionHeader from '../common/SectionHeader';

const FeatureSection = () => {
  const features = [
    {
      icon: ScanFace,
      title: 'AI Face Analysis',
      description: 'Upload a selfie or use webcam. Our vision engine assesses lighting, head angle, face shape, eye shape, and undertone.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Beauty Profile',
      description: 'Receive an accurate estimation of your facial attributes with confidence scores and tailored undertone analysis.'
    },
    {
      icon: Palette,
      title: 'Virtual Try-On Canvas',
      description: 'Test foundations, blushes, lipsticks, liners, and brow shades in real-time with instant Before/After comparison sliders.'
    },
    {
      icon: GraduationCap,
      title: 'Interactive AI Makeup Coach',
      description: 'Step-by-step visual application instructions with face region overlays, direction arrows, and optional voice guides.'
    },
    {
      icon: ShoppingBag,
      title: 'Shop or "Use What You Own"',
      description: 'Match high-scoring products or create custom looks using cosmetics already in your personal makeup bag.'
    }
  ];

  return (
    <section className="py-20 bg-plum-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Commercial BeautyTech Features"
          title="Designed for Precision and Confidence"
          subtitle="From understanding your unique facial geometry to mastering the exact application technique."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, idx) => (
            <Card key={idx} hover glass className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-plum-800 text-rose-200 flex items-center justify-center mb-6 shadow-beauty-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-plum-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
