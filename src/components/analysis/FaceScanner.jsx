import React from 'react';
import { Scan, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';

const FaceScanner = ({ image, progress = 60 }) => {
  return (
    <div className="relative w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border-2 border-rose-accent/40 shadow-beauty-lg bg-deep-burgundy">
      <img
        src={image || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"}
        alt="Facial Feature Analysis Scanning"
        className="w-full h-full object-cover object-top filter contrast-105"
      />

      {/* Futuristic Scan Line Animation */}
      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ai-accent to-transparent shadow-[0_0_15px_#D88EA1] animate-scan z-20 pointer-events-none" />

      {/* Grid Mesh Lines Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#D88EA1_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Status Overlay Pill */}
      <div className="absolute top-4 left-4 z-30 bg-deep-burgundy/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs flex items-center gap-2 border border-rose-accent/40">
        <Scan className="w-3.5 h-3.5 text-ai-accent animate-spin" />
        <span>3D LANDMARK MESH DETECTING ({progress}%)</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-30 bg-deep-burgundy/95 backdrop-blur-lg p-4 rounded-2xl border border-rose-accent/40 text-cream space-y-2">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-soft-blush">Analyzing Geometry Coordinates</span>
          <Badge variant="ai">68 Landmarks Active</Badge>
        </div>
        <div className="w-full bg-dark-wine rounded-full h-2 overflow-hidden border border-burgundy/60">
          <div
            className="bg-gradient-to-r from-rose-accent to-ai-accent h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FaceScanner;
