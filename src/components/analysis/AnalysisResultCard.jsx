import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { DEFAULT_AI_DISCLAIMER } from '../../utils/constants';

const AnalysisResultCard = ({ profile, onProceed }) => {
  if (!profile) return null;

  return (
    <Card glass className="p-8 border border-rose-200 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-plum-100 pb-4">
        <div>
          <Badge variant="ai" className="mb-2">AI Scan Complete</Badge>
          <h3 className="text-2xl font-serif font-bold text-plum-950">Your Beauty Profile Is Ready</h3>
        </div>
        <Button variant="gold" size="md" icon={ArrowRight} iconPosition="right" onClick={onProceed}>
          Get Recommendations
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100">
          <span className="text-[11px] font-bold text-plum-400 uppercase tracking-wider block mb-1">Skin Tone</span>
          <p className="text-lg font-bold text-plum-950">{profile.skinTone}</p>
          <span className="text-[10px] text-emerald-700 font-semibold">{profile.confidenceScores?.skinTone}% Confidence</span>
        </div>

        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100">
          <span className="text-[11px] font-bold text-plum-400 uppercase tracking-wider block mb-1">Undertone</span>
          <p className="text-lg font-bold text-plum-950">{profile.undertone}</p>
          <span className="text-[10px] text-emerald-700 font-semibold">{profile.confidenceScores?.undertone}% Confidence</span>
        </div>

        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100">
          <span className="text-[11px] font-bold text-plum-400 uppercase tracking-wider block mb-1">Face Shape</span>
          <p className="text-lg font-bold text-plum-950">{profile.faceShape}</p>
          <span className="text-[10px] text-emerald-700 font-semibold">{profile.confidenceScores?.faceShape}% Confidence</span>
        </div>

        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100">
          <span className="text-[11px] font-bold text-plum-400 uppercase tracking-wider block mb-1">Eye Shape</span>
          <p className="text-lg font-bold text-plum-950">{profile.eyeShape}</p>
          <span className="text-[10px] text-emerald-700 font-semibold">{profile.confidenceScores?.eyeShape}% Confidence</span>
        </div>

        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100">
          <span className="text-[11px] font-bold text-plum-400 uppercase tracking-wider block mb-1">Lip Profile</span>
          <p className="text-lg font-bold text-plum-950">{profile.lipProfile}</p>
          <span className="text-[10px] text-emerald-700 font-semibold">{profile.confidenceScores?.lipProfile}% Confidence</span>
        </div>

        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100">
          <span className="text-[11px] font-bold text-plum-400 uppercase tracking-wider block mb-1">Brow Arch</span>
          <p className="text-lg font-bold text-plum-950">{profile.browProfile}</p>
          <span className="text-[10px] text-emerald-700 font-semibold">{profile.confidenceScores?.browProfile}% Confidence</span>
        </div>
      </div>

      <p className="text-xs text-charcoal-500 italic bg-white/80 p-3 rounded-xl border border-plum-100/60">
        "{DEFAULT_AI_DISCLAIMER}"
      </p>
    </Card>
  );
};

export default AnalysisResultCard;
