import React from 'react';
import { Sparkles } from 'lucide-react';
import { LOOKS_DATA } from '../data/looks';
import LookGallery from '../components/looks/LookGallery';

const Looks = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-light-blush text-deep-burgundy text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-rose-accent" />
          <span>Editorial Beauty Lookbook</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-deep-burgundy">
          AI Recommended Makeup Looks
        </h1>
        <p className="text-muted-text text-sm sm:text-base">
          Curated aesthetics shade-matched to your facial geometry and undertone profile.
        </p>
      </div>

      <LookGallery looks={LOOKS_DATA} />
    </div>
  );
};

export default Looks;
