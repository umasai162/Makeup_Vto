import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const FaceShapeCard = ({ faceShape = "Oval" }) => {
  return (
    <Card className="p-6 bg-white border border-rose-100 space-y-4">
      <div className="flex justify-between items-center border-b border-plum-50 pb-3">
        <h3 className="font-serif font-bold text-plum-950 text-lg">Face Shape</h3>
        <Badge variant="rose">98% Match</Badge>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-16 h-20 rounded-full border-2 border-rose-300 bg-rose-50 flex items-center justify-center text-plum-800 font-serif font-bold text-sm shadow-inner">
          {faceShape}
        </div>
        <div className="space-y-1">
          <p className="text-xl font-serif font-bold text-plum-950">{faceShape} Contour</p>
          <p className="text-xs text-charcoal-600">Slightly wider cheekbones with soft rounded jawline geometry.</p>
        </div>
      </div>

      <div className="bg-plum-50/60 p-3 rounded-xl border border-plum-100 text-xs text-plum-900 space-y-1">
        <p className="font-bold">Recommended Contour Strategy:</p>
        <p className="text-charcoal-600">Place blush high on cheekbones sweeping backward towards temples for natural lifting effect.</p>
      </div>
    </Card>
  );
};

export default FaceShapeCard;
