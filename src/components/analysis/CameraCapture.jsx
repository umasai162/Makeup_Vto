import React, { useEffect } from 'react';
import { Camera, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { useCamera } from '../../hooks/useCamera';
import Button from '../common/Button';

const CameraCapture = ({ onCapture }) => {
  const { isCameraActive, cameraError, videoRef, startCamera, stopCamera, captureFrame } = useCamera();

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  const handleSnap = () => {
    const frame = captureFrame();
    if (frame) {
      onCapture(frame);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative rounded-3xl overflow-hidden bg-plum-950 border border-plum-800 shadow-beauty-md h-80 sm:h-96 flex items-center justify-center">
        {cameraError ? (
          <div className="p-6 text-center text-rose-200 space-y-3">
            <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
            <p className="text-sm font-medium">{cameraError}</p>
            <Button variant="secondary" size="sm" onClick={startCamera}>
              Retry Camera Access
            </Button>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover object-center"
            />
            {/* Oval Face Positioning Guide Overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-56 h-72 rounded-[50%] border-2 border-dashed border-rose-300/60 shadow-[0_0_0_9999px_rgba(45,10,20,0.4)] flex items-center justify-center">
                <span className="text-[11px] text-rose-200 bg-plum-950/70 px-3 py-1 rounded-full font-medium tracking-wider">
                  Align Face Inside Oval
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {isCameraActive && !cameraError && (
        <div className="flex justify-center gap-4">
          <Button variant="gold" size="lg" icon={Camera} onClick={handleSnap}>
            Take Selfie
          </Button>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
