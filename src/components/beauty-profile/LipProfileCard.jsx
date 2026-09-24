import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const LipProfileCard = ({ lipProfile = "Full" }) => {
  return (
    <Card className="p-6 bg-white border border-rose-100 space-y-4">
      <div className="flex justify-between items-center border-b border-plum-50 pb-3">
        <h3 className="font-serif font-bold text-plum-950 text-lg">Lip Profile</h3>
        <Badge variant="rose">97% Match</Badge>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-16 h-10 rounded-2xl border-2 border-rose-300 bg-rose-50 flex items-center justify-center text-plum-800 font-serif font-bold text-xs shadow-inner">
          {lipProfile}
        </div>
        <div className="space-y-1">
          <p className="text-xl font-serif font-bold text-plum-950">{lipProfile} Volume</p>
          <p className="text-xs text-charcoal-600">Balanced upper & lower lip fullness with distinct Cupid's bow definition.</p>
        </div>
      </div>

      <div className="bg-plum-50/60 p-3 rounded-xl border border-plum-100 text-xs text-plum-900 space-y-1">
        <p className="font-bold">Lip Application Tip:</p>
        <p className="text-charcoal-600">Satin finishes and nude rose lip liners accentuate your natural volume without feathering.</p>
      </div>
    </Card>
  );
};

export default LipProfileCard;
