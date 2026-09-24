import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Scan, Sparkles, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-16 py-8 px-4 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-extrabold uppercase tracking-widest text-rose-accent">Process Architecture</span>
        <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-deep-burgundy">How LAVIX AI Works</h1>
        <p className="text-muted-text text-base leading-relaxed">
          From 68-landmark facial scan to custom pigment synthesis in real-time.
        </p>
      </div>

      {/* Step 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-warm-white p-8 sm:p-12 rounded-3xl border border-border-pink shadow-beauty-md">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-sm font-extrabold uppercase tracking-widest text-rose-accent">Step 01</span>
          <h2 className="text-3xl font-serif font-bold text-deep-burgundy">UPLOAD YOUR PHOTO</h2>
          <p className="text-muted-text text-sm leading-relaxed">
            Upload a clear selfie and let LAVIX understand your features with 68 facial coordinates in high resolution.
          </p>
          <ul className="space-y-2 text-xs font-bold text-deep-burgundy pt-2">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-accent" /> High resolution portrait support</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-accent" /> Privacy-first instant processing</li>
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="relative h-64 rounded-2xl overflow-hidden border border-border-pink bg-deep-burgundy flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" alt="Upload Step" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-deep-burgundy/40 flex items-center justify-center">
              <Upload className="w-12 h-12 text-light-blush animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-warm-white p-8 sm:p-12 rounded-3xl border border-border-pink shadow-beauty-md">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative h-64 rounded-2xl overflow-hidden border border-border-pink bg-deep-burgundy">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" alt="Scan Step" className="w-full h-full object-cover object-top" />
            <div className="absolute left-0 right-0 h-1 bg-ai-accent animate-scan z-20 shadow-[0_0_15px_#D88EA1]" />
          </div>
        </div>
        <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
          <span className="text-sm font-extrabold uppercase tracking-widest text-rose-accent">Step 02</span>
          <h2 className="text-3xl font-serif font-bold text-deep-burgundy">AI FACE ANALYSIS</h2>
          <p className="text-muted-text text-sm leading-relaxed">
            Detect face shape, skin tone depth, warm/cool undertones, eye shape, lip curvature, and facial symmetry.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-deep-burgundy pt-2">
            <span className="p-2 rounded-xl bg-cream border border-border-pink">• Face Shape & Symmetry</span>
            <span className="p-2 rounded-xl bg-cream border border-border-pink">• Skin Tone & Undertone</span>
            <span className="p-2 rounded-xl bg-cream border border-border-pink">• Eye & Lip Proportions</span>
            <span className="p-2 rounded-xl bg-cream border border-border-pink">• Skin Region Texture</span>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-warm-white p-8 sm:p-12 rounded-3xl border border-border-pink shadow-beauty-md">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-sm font-extrabold uppercase tracking-widest text-rose-accent">Step 03</span>
          <h2 className="text-3xl font-serif font-bold text-deep-burgundy">PERSONALIZED LOOK</h2>
          <p className="text-muted-text text-sm leading-relaxed">
            AI generates custom makeup recommendations based on your facial structure, skin profile, occasion, and preferred style.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="p-6 rounded-2xl bg-deep-burgundy text-cream space-y-3 border border-rose-accent/30">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-ai-accent" />
              <span className="font-serif font-bold text-base text-soft-blush">Soft Glam Golden Hour</span>
            </div>
            <p className="text-xs text-light-blush/80">Warm bronze lids + peach blush + Rose Dusk satin lips calculated at 98.4% match confidence.</p>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-warm-white p-8 sm:p-12 rounded-3xl border border-border-pink shadow-beauty-md">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative h-64 rounded-2xl overflow-hidden border border-border-pink bg-cream p-4 flex items-center justify-center">
            <Palette className="w-16 h-16 text-rose-accent animate-pulse" />
          </div>
        </div>
        <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
          <span className="text-sm font-extrabold uppercase tracking-widest text-rose-accent">Step 04</span>
          <h2 className="text-3xl font-serif font-bold text-deep-burgundy">VIRTUAL TRY-ON</h2>
          <p className="text-muted-text text-sm leading-relaxed">
            Apply makeup virtually with AR pigments and compare Before & After results using our interactive slider.
          </p>
          <Button variant="primary" size="md" icon={ArrowRight} iconPosition="right" onClick={() => navigate('/analyze')}>
            Try It Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
