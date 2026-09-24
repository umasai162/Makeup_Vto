import React from 'react';
import { Check } from 'lucide-react';

const ColorSwatches = ({ swatches = [], currentShade, onSelectShade }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-deep-burgundy uppercase tracking-wider">Shade Selection</label>
        <span className="text-xs font-semibold text-rose-accent">
          {swatches.find(s => s.hex === currentShade)?.name || 'Custom Color'}
        </span>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {swatches.map((swatch) => {
          const isSelected = swatch.hex === currentShade;
          return (
            <button
              key={swatch.hex}
              onClick={() => onSelectShade(swatch.hex)}
              title={swatch.name}
              className={`w-8 h-8 rounded-full transition-all duration-300 relative flex items-center justify-center border-2 ${
                isSelected ? 'ring-2 ring-rose-accent scale-110 border-white shadow-md' : 'border-transparent hover:scale-105'
              }`}
              style={{ backgroundColor: swatch.hex }}
            >
              {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow-md" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSwatches;
