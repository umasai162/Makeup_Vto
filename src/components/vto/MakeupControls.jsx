import React from 'react';
import ColorSwatches from './ColorSwatches';
import { MAKEUP_CATEGORIES_CONFIG } from '../../data/makeupColors';

const MakeupControls = ({
  activeCategory,
  currentOption = {},
  onUpdateShade,
  onUpdateIntensity,
  onUpdateOpacity
}) => {
  const categoryConfig = MAKEUP_CATEGORIES_CONFIG.find(c => c.id === activeCategory) || MAKEUP_CATEGORIES_CONFIG[0];

  return (
    <div className="space-y-6">
      {/* Swatches */}
      <ColorSwatches
        swatches={categoryConfig.swatches}
        currentShade={currentOption.shade}
        onSelectShade={(shade) => onUpdateShade(activeCategory, shade)}
      />

      {/* Pigment Intensity Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-deep-burgundy uppercase tracking-wider">Pigment Intensity</span>
          <span className="text-rose-accent">{currentOption.intensity || 80}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={currentOption.intensity || 80}
          onChange={(e) => onUpdateIntensity(activeCategory, Number(e.target.value))}
          className="beauty-slider w-full"
        />
      </div>

      {/* Opacity Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-deep-burgundy uppercase tracking-wider">Coverage Blend Opacity</span>
          <span className="text-rose-accent">{currentOption.opacity || 75}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={currentOption.opacity || 75}
          onChange={(e) => onUpdateOpacity(activeCategory, Number(e.target.value))}
          className="beauty-slider w-full"
        />
      </div>
    </div>
  );
};

export default MakeupControls;
