import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import Badge from '../common/Badge';

const TryOnCanvas = ({ originalImage, makeupOptions, compareMode }) => {
  return (
    <div className="w-full space-y-3">
      {compareMode ? (
        <BeforeAfterSlider originalImage={originalImage} makeupOptions={makeupOptions} />
      ) : (
        <div className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden border border-border-pink shadow-beauty-md bg-deep-burgundy">
          <img
            src={originalImage}
            alt="Virtual Try-On Selfie"
            className="w-full h-full object-cover object-top filter contrast-105 saturate-110"
          />

          {/* VTO Overlay Simulation Layers */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              backgroundColor: makeupOptions?.blush?.shade || 'transparent',
              opacity: (makeupOptions?.blush?.opacity || 0) / 250,
              mixBlendMode: 'color-burn'
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              backgroundColor: makeupOptions?.lipstick?.shade || 'transparent',
              opacity: (makeupOptions?.lipstick?.opacity || 0) / 350,
              mixBlendMode: 'soft-light'
            }}
          />

          <div className="absolute top-4 left-4 bg-deep-burgundy/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs flex items-center gap-2 border border-border-pink/40">
            <Badge variant="ai">VTO Studio Live</Badge>
          </div>
        </div>
      )}
    </div>
  );
};

export default TryOnCanvas;
