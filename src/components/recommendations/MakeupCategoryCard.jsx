import React from 'react';
import Card from '../common/Card';

const MakeupCategoryCard = ({ title, details, colorHex }) => {
  return (
    <Card className="p-4 bg-white border border-rose-100 flex items-center justify-between">
      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500">{title}</span>
        <p className="text-sm font-bold text-plum-950">{details}</p>
      </div>
      {colorHex && (
        <div
          className="w-8 h-8 rounded-full border-2 border-white shadow-sm shrink-0"
          style={{ backgroundColor: colorHex }}
        />
      )}
    </Card>
  );
};

export default MakeupCategoryCard;
