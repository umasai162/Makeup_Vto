import React from 'react';
import { Sparkles } from 'lucide-react';

const Loader = ({ text = 'Analyzing beauty features...', fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
      <div className="relative w-16 h-16 rounded-3xl bg-deep-burgundy text-rose-accent flex items-center justify-center shadow-glow">
        <Sparkles className="w-8 h-8 animate-spin text-soft-blush" />
      </div>
      <p className="font-serif font-semibold text-deep-burgundy text-base tracking-wide">{text}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-cream/50">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;
