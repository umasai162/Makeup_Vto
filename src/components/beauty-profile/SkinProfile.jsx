import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const SkinProfile = ({ skinTone = "Medium", undertone = "Warm / Neutral" }) => {
  return (
    <Card className="p-6 bg-white border border-rose-100 space-y-4">
      <div className="flex justify-between items-center border-b border-plum-50 pb-3">
        <h3 className="font-serif font-bold text-plum-950 text-lg">Skin Profile</h3>
        <Badge variant="rose">96% Accuracy</Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-peach-50/60 border border-peach-200">
          <span className="text-[10px] font-bold uppercase text-charcoal-500 block mb-1">Skin Tone</span>
          <p className="text-xl font-serif font-bold text-plum-950">{skinTone}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-white shadow-sm" style={{ backgroundColor: '#E8C5B0' }} />
            <span className="text-xs text-charcoal-600">Hex #E8C5B0</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-nude-50/60 border border-nude-200">
          <span className="text-[10px] font-bold uppercase text-charcoal-500 block mb-1">Undertone</span>
          <p className="text-xl font-serif font-bold text-plum-950">{undertone}</p>
          <p className="text-xs text-charcoal-600 mt-2">Golden peach sub-surface reflection</p>
        </div>
      </div>

      <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
        <strong>Styling Note:</strong> Warm/Neutral undertones look stunning in terracotta blushes, warm rose nudes, and bronzed golden eye palettes.
      </p>
    </Card>
  );
};

export default SkinProfile;
