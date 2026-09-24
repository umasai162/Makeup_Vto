import React from 'react';
import { Scan, Sparkles, Eye, User, Heart, Shield } from 'lucide-react';
import Badge from '../common/Badge';

const FeatureResults = ({ profile }) => {
  const metrics = [
    { label: 'Face Shape', value: profile?.faceShape || 'Oval', confidence: '98%', icon: Scan, detail: 'Balanced length-to-width golden ratio' },
    { label: 'Skin Tone', value: profile?.skinTone || 'Medium Warm', confidence: '96%', icon: User, detail: 'Warm golden pigment depth' },
    { label: 'Undertone', value: profile?.undertone || 'Warm Golden', confidence: '95%', icon: Sparkles, detail: 'Peachy golden glow reflection' },
    { label: 'Eye Shape', value: profile?.eyeShape || 'Almond', confidence: '97%', icon: Eye, detail: 'Lifted outer corner curve' },
    { label: 'Lip Shape', value: profile?.lipShape || 'Full Bow', confidence: '94%', icon: Heart, detail: 'Defined Cupid\'s bow contour' },
    { label: 'Brow Profile', value: profile?.browProfile || 'Soft Arch', confidence: '93%', icon: Shield, detail: 'Natural feathered arch alignment' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {metrics.map((m) => {
        const Icon = m.icon;
        return (
          <div key={m.label} className="bg-warm-white p-5 rounded-3xl border border-border-pink shadow-beauty-sm space-y-2 hover:border-rose-accent transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-light-blush text-deep-burgundy flex items-center justify-center">
                  <Icon className="w-4 h-4 text-rose-accent" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-text">{m.label}</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {m.confidence}
              </span>
            </div>
            <h4 className="text-lg font-serif font-bold text-deep-burgundy">{m.value}</h4>
            <p className="text-xs text-muted-text">{m.detail}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureResults;
