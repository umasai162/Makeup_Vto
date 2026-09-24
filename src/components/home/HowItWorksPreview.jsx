import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Scan, Sparkles, Palette, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const HowItWorksPreview = () => {
  const steps = [
    {
      num: '01',
      title: 'UPLOAD YOUR PHOTO',
      desc: 'Upload a clear selfie and let LAVIX understand your features with 68 facial coordinates.',
      icon: Upload,
      accent: 'bg-light-blush text-deep-burgundy'
    },
    {
      num: '02',
      title: 'AI FACE ANALYSIS',
      desc: 'Detect face shape, skin tone, undertone, eye shape, lip geometry, and facial proportions.',
      icon: Scan,
      accent: 'bg-soft-blush text-deep-burgundy'
    },
    {
      num: '03',
      title: 'PERSONALIZED LOOK',
      desc: 'AI generates custom makeup looks tailored to your unique skin depth, undertone & occasion.',
      icon: Sparkles,
      accent: 'bg-deep-burgundy text-light-blush'
    },
    {
      num: '04',
      title: 'VIRTUAL TRY-ON',
      desc: 'Apply makeup virtually with AR pigments and compare before/after slider results in real-time.',
      icon: Palette,
      accent: 'bg-burgundy text-cream'
    }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-accent">Simple 4-Step Experience</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-deep-burgundy">
            How LAVIX Transforms Your Beauty
          </h2>
          <p className="text-muted-text text-sm sm:text-base">
            From facial analysis to real-time virtual try-on, experience precision beauty technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-sm hover:shadow-beauty-md transition-all duration-300 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-extrabold text-rose-accent">{step.num}</span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${step.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-deep-burgundy">{step.title}</h3>
                  <p className="text-xs text-muted-text leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link to="/how-it-works">
            <Button variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
              Learn More About AI Analysis Engine
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;
