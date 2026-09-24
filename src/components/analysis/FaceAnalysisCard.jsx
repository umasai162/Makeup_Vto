import React from 'react';
import { Sparkles, Scan, Eye, User } from 'lucide-react';
import Badge from '../common/Badge';

const FaceAnalysisCard = ({ profile }) => {
  return (
    <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-md space-y-6">
      <div className="flex items-center justify-between border-b border-border-pink pb-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-accent">Verified AI Output</span>
          <h3 className="text-2xl font-serif font-bold text-deep-burgundy">Your Facial Profile</h3>
        </div>
        <Badge variant="ai">98.4% Confidence</Badge>
      </div>

      {/* Radial Metric Gauges */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-cream p-4 rounded-2xl border border-border-pink space-y-1">
          <div className="relative w-14 h-14 mx-auto flex items-center justify-center rounded-full border-4 border-rose-accent text-deep-burgundy font-serif font-extrabold text-sm">
            94%
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-text">Face Match</span>
        </div>

        <div className="bg-cream p-4 rounded-2xl border border-border-pink space-y-1">
          <div className="relative w-14 h-14 mx-auto flex items-center justify-center rounded-full border-4 border-ai-accent text-deep-burgundy font-serif font-extrabold text-sm">
            98%
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-text">Skin Profile</span>
        </div>

        <div className="bg-cream p-4 rounded-2xl border border-border-pink space-y-1">
          <div className="relative w-14 h-14 mx-auto flex items-center justify-center rounded-full border-4 border-soft-blush text-deep-burgundy font-serif font-extrabold text-sm">
            96%
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-text">Symmetry</span>
        </div>
      </div>
    </div>
  );
};

export default FaceAnalysisCard;
