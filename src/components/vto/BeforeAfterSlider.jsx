import React, { useState, useRef } from 'react';

const BeforeAfterSlider = ({ originalImage, makeupOptions }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-border-pink shadow-beauty-md bg-deep-burgundy"
    >
      {/* BEFORE IMAGE */}
      <img
        src={originalImage}
        alt="Before Makeup"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none filter brightness-95"
      />
      <div className="absolute top-4 left-4 z-20 bg-deep-burgundy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-border-pink/40">
        Before Raw
      </div>

      {/* AFTER IMAGE (Clipped by sliderPos) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={originalImage}
          alt="After Makeup Applied"
          className="absolute inset-0 w-full h-full object-cover object-top max-w-none filter contrast-105 saturate-110"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
        />

        {/* Dynamic VTO Pigment Layers */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            backgroundColor: makeupOptions?.blush?.shade || 'transparent',
            opacity: (makeupOptions?.blush?.opacity || 0) / 300,
            mixBlendMode: 'color-burn'
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            backgroundColor: makeupOptions?.lipstick?.shade || 'transparent',
            opacity: (makeupOptions?.lipstick?.opacity || 0) / 350,
            mixBlendMode: 'soft-light'
          }}
        />

        <div className="absolute top-4 left-4 z-20 bg-rose-accent text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          After (AR Try-On)
        </div>
      </div>

      {/* Draggable Divider Handle Line */}
      <div
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-deep-burgundy shadow-beauty-md flex items-center justify-center font-bold text-xs border-2 border-deep-burgundy">
          ↔
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
