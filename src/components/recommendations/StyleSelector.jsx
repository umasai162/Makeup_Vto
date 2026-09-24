import React from 'react';
import { MAKEUP_STYLES } from '../../data/makeupStyles';
import Card from '../common/Card';
import Badge from '../common/Badge';

const StyleSelector = ({ selectedStyle, onSelect }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-serif font-bold text-plum-950">Select Your Desired Look Style</h3>
        <p className="text-xs text-charcoal-600">Choose intensity from sheer natural to full glam drama.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MAKEUP_STYLES.map((style) => {
          const isSelected = selectedStyle === style.id;
          return (
            <Card
              key={style.id}
              onClick={() => onSelect(style.id)}
              className={`p-5 cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-plum-900 to-plum-950 text-white border-plum-800 shadow-beauty-md scale-[1.02]'
                  : 'bg-white text-plum-950 border-plum-100 hover:border-rose-300 hover:bg-rose-50/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-serif font-bold text-lg ${isSelected ? 'text-white' : 'text-plum-950'}`}>
                    {style.name}
                  </h4>
                  {style.badge && <Badge variant={isSelected ? 'ai' : 'rose'}>{style.badge}</Badge>}
                </div>
                <p className={`text-xs font-medium mb-2 ${isSelected ? 'text-rose-300' : 'text-rose-600'}`}>
                  {style.tagline}
                </p>
                <p className={`text-xs leading-relaxed ${isSelected ? 'text-rose-100/80' : 'text-charcoal-600'}`}>
                  {style.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
