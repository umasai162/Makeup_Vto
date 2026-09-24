import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-400/10 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-4 h-4" /> Start Your Beauty Transformation
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight text-white leading-tight">
          Ready to discover your perfect personalized makeup look?
        </h2>
        <p className="text-base sm:text-lg text-rose-100/80 max-w-2xl mx-auto font-sans">
          Take 30 seconds to upload your selfie and let LAVIX unlock your custom beauty profile, virtual try-on, and step-by-step coaching.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/beauty-analysis">
            <Button variant="gold" size="lg" icon={Sparkles} className="w-full sm:w-auto text-plum-950 font-bold">
              Analyze My Face Now
            </Button>
          </Link>
          <Link to="/virtual-try-on">
            <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto text-white border-rose-200/40">
              Try Virtual Canvas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
