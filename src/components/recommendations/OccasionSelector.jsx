import React from 'react';
import { OCCASIONS } from '../../data/occasions';
import Card from '../common/Card';

const OccasionSelector = ({ selectedOccasion, onSelect }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-serif font-bold text-plum-950">What are you getting ready for?</h3>
        <p className="text-xs text-charcoal-600">Select an occasion to tailor makeup coverage and finish.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {OCCASIONS.map((occ) => {
          const isSelected = selectedOccasion === occ.id;
          return (
            <Card
              key={occ.id}
              onClick={() => onSelect(occ.id)}
              className={`p-4 cursor-pointer transition-all duration-200 border ${
                isSelected
                  ? 'bg-plum-800 text-white border-plum-800 shadow-beauty-md scale-[1.02]'
                  : 'bg-white text-plum-950 border-plum-100 hover:border-rose-300 hover:bg-rose-50/50'
              }`}
            >
              <h4 className={`font-serif font-bold text-base mb-1 ${isSelected ? 'text-white' : 'text-plum-950'}`}>
                {occ.name}
              </h4>
              <p className={`text-[11px] leading-tight ${isSelected ? 'text-rose-100/80' : 'text-charcoal-500'}`}>
                {occ.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OccasionSelector;
