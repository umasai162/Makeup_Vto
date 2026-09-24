import React from 'react';
import { ScanFace } from 'lucide-react';

const FaceAnalysisOverlay = ({ imageUrl }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-rose-300/40 shadow-beauty-md h-80 sm:h-96 group">
      <img
        src={imageUrl}
        alt="Scanning Selfie"
        className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
      />
      
      {/* Laser Scanning Line */}
      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent shadow-[0_0_15px_#E89CAE] animate-scan z-20" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#E89CAE_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

      {/* Simulated Landmark Mesh Dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-52 h-64 border border-rose-300/40 rounded-[45%] relative">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-rose-400 animate-ping" />
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-rose-400 animate-ping" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-300 animate-ping" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-rose-400 animate-ping" />
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-rose-400 animate-ping" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-plum-950/80 backdrop-blur-md p-3 rounded-2xl text-white text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ScanFace className="w-4 h-4 text-rose-300 animate-spin" />
          <span className="font-semibold text-rose-100">Scanning 468 Facial Landmarks</span>
        </div>
        <span className="text-[10px] text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full font-mono">CV Mesh v2.4</span>
      </div>
    </div>
  );
};

export default FaceAnalysisOverlay;
