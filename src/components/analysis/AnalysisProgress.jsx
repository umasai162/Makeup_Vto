import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import ProgressBar from '../common/ProgressBar';

const AnalysisProgress = ({ onComplete }) => {
  const steps = [
    "Checking image quality & lighting...",
    "Detecting 468 facial mesh landmarks...",
    "Analyzing skin tone & undertone frequency...",
    "Evaluating face, eye, and lip geometric profile...",
    "Preparing personalized makeup recommendations..."
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete && onComplete(), 400);
          return 100;
        }
        const next = prev + 20;
        const stepIdx = Math.min(steps.length - 1, Math.floor((next / 100) * steps.length));
        setCurrentStepIndex(stepIdx);
        return next;
      });
    }, 450);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="bg-plum-950 text-white p-8 rounded-3xl shadow-beauty-lg border border-plum-800 space-y-6 text-center max-w-lg mx-auto">
      <div className="relative inline-flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-rose-400/30 border-t-rose-300 animate-spin" />
        <Sparkles className="w-6 h-6 text-rose-300 absolute animate-pulse" />
      </div>

      <div>
        <h3 className="text-xl font-serif font-bold text-white mb-1">
          AI Face Analysis in Progress
        </h3>
        <p className="text-xs text-rose-200/80">
          Our vision neural model is scanning your portrait attributes.
        </p>
      </div>

      <ProgressBar progress={progress} showPercentage height="h-3" />

      <div className="space-y-2 text-left pt-2 border-t border-plum-800/80">
        {steps.map((stepText, idx) => {
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex;
          return (
            <div
              key={idx}
              className={`flex items-center gap-2.5 text-xs transition-opacity duration-300 ${
                isDone
                  ? 'text-rose-300 font-medium'
                  : isCurrent
                  ? 'text-white font-semibold animate-pulse'
                  : 'text-rose-100/30'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDone ? 'text-rose-300' : 'text-plum-800'}`} />
              <span>{stepText}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalysisProgress;
