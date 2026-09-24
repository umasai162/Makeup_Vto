import React from 'react';
import { Sparkles, Palette } from 'lucide-react';
import Button from './Button';

const EmptyState = ({
  title = 'No Saved Looks Yet',
  description = 'Design your custom lipstick & blush combinations in the AR Try-On Studio and save them to your lookbook.',
  actionText = 'Open Try-On Studio',
  onAction
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cream via-rose-50/40 to-plum-50/50 rounded-3xl p-10 sm:p-14 border border-rose-200/80 text-center space-y-5 shadow-beauty-md max-w-xl mx-auto">
      {/* Soft Makeup Powder/Texture Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-300/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-4 right-4 text-rose-200/60 pointer-events-none text-xs font-serif font-bold italic">
        LAVIX ATELIER
      </div>

      <div className="relative z-10 w-16 h-16 rounded-3xl bg-white text-plum-950 mx-auto flex items-center justify-center shadow-beauty-sm border border-rose-100">
        <Palette className="w-8 h-8 text-rose-500" />
      </div>

      <div className="relative z-10 space-y-2 max-w-md mx-auto">
        <h3 className="font-serif font-extrabold text-2xl text-plum-950">{title}</h3>
        <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>

      {actionText && (
        <div className="relative z-10 pt-2">
          <Button
            variant="gold"
            size="md"
            icon={Sparkles}
            onClick={onAction || (() => window.location.href = '/virtual-try-on')}
          >
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
