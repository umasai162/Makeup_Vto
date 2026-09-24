import React from 'react';

const ShadeSelector = ({ shades = [], selectedShade, onSelectShade }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs">
        <span className="font-bold text-plum-900">Select Shade</span>
        <span className="text-charcoal-500 font-mono text-[11px] uppercase">{selectedShade || 'Default'}</span>
      </div>

      <div className="flex flex-wrap gap-2.5 pt-1">
        {shades.map((hex, idx) => {
          const isSelected = selectedShade?.toLowerCase() === hex.toLowerCase();
          return (
            <button
              key={idx}
              onClick={() => onSelectShade(hex)}
              className={`w-8 h-8 rounded-full transition-transform duration-200 shadow-sm relative ${
                isSelected ? 'scale-115 ring-2 ring-plum-800 ring-offset-2' : 'hover:scale-105'
              }`}
              style={{ backgroundColor: hex }}
              title={hex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShadeSelector;
