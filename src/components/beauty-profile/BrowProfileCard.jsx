import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const BrowProfileCard = ({ browProfile = "Soft Arch" }) => {
  return (
    <Card className="p-6 bg-white border border-rose-100 space-y-4">
      <div className="flex justify-between items-center border-b border-plum-50 pb-3">
        <h3 className="font-serif font-bold text-plum-950 text-lg">Brow Profile</h3>
        <Badge variant="rose">93% Match</Badge>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-16 h-10 rounded-2xl border-2 border-rose-300 bg-rose-50 flex items-center justify-center text-plum-800 font-serif font-bold text-xs shadow-inner">
          {browProfile}
        </div>
        <div className="space-y-1">
          <p className="text-xl font-serif font-bold text-plum-950">{browProfile}</p>
          <p className="text-xs text-charcoal-600">Soft natural curvature framing your forehead and eye socket seamlessly.</p>
        </div>
      </div>

      <div className="bg-plum-50/60 p-3 rounded-xl border border-plum-100 text-xs text-plum-900 space-y-1">
        <p className="font-bold">Brow Filling Tip:</p>
        <p className="text-charcoal-600">Use micro eyebrow pencils to fill sparse arch areas with light upward strokes.</p>
      </div>
    </Card>
  );
};

export default BrowProfileCard;
