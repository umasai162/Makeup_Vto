import React from 'react';

const IntensitySlider = ({ label = "Intensity", value = 75, onChange }) => {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-xs font-medium text-plum-900">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="beauty-slider"
      />
    </div>
  );
};

export default IntensitySlider;
