import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle,
  HelpCircle,
  Wand2,
  Palette
} from 'lucide-react';
import { SOFT_GLAM_TUTORIAL } from '../data/mockTutorials';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

const MakeupCoachPage = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlayingVoice, setIsPlayingVoice] = useState(true);
  const [completedSteps, setCompletedSteps] = useState([]);

  const currentStep = SOFT_GLAM_TUTORIAL[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / SOFT_GLAM_TUTORIAL.length) * 100);

  const handleNextStep = () => {
    if (!completedSteps.includes(currentStep.step)) {
      setCompletedSteps(prev => [...prev, currentStep.step]);
    }
    if (currentStepIndex < SOFT_GLAM_TUTORIAL.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-2 animate-fade-in">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-rose-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-rose-500" />
            <span>Interactive AI Makeup Coach</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-plum-950">
            Step-by-Step AI Guided Tutorial
          </h1>
          <p className="text-charcoal-700 text-xs sm:text-sm">
            Live audio & visual prompts tailored to your facial geometry and skin tone.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" icon={Palette} onClick={() => navigate('/virtual-try-on')}>
            Open AR Try-On Studio
          </Button>
        </div>
      </div>

      {/* Tutorial Step Progress Bar */}
      <div className="bg-white rounded-2xl p-4 border border-rose-100 shadow-beauty-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-plum-950">
          <span>Step {currentStep.step} of {currentStep.totalSteps}: {currentStep.title}</span>
          <span className="text-rose-500">{progressPercent}% Completed</span>
        </div>
        <div className="w-full bg-plum-50 rounded-full h-2.5 overflow-hidden border border-rose-100">
          <div
            className="bg-gradient-to-r from-plum-800 to-rose-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pt-1">
          {SOFT_GLAM_TUTORIAL.map((st, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isDone = completedSteps.includes(st.step);
            return (
              <button
                key={st.step}
                onClick={() => setCurrentStepIndex(idx)}
                className={`flex-1 min-w-[32px] py-1.5 rounded-lg text-[10px] font-bold transition-all text-center ${
                  isCurrent
                    ? 'bg-plum-950 text-white shadow-sm'
                    : isDone
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-plum-50 text-plum-800 hover:bg-rose-100'
                }`}
              >
                {st.step}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio View: Mirror / Visualization Box + Coach Prompt Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side (7 cols): Face Target Mirror View with Zone Overlay */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-rose-300 shadow-beauty-lg bg-plum-950">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              alt="Coach Target View"
              className="w-full h-full object-cover object-center filter contrast-105"
            />

            {/* Targeted Zone Focus Highlight Box */}
            <div
              className="absolute border-2 border-dashed border-amber-300 bg-amber-400/20 rounded-2xl transition-all duration-500 animate-pulse"
              style={{
                left: `${currentStep.coordinates.x - currentStep.coordinates.width / 2}%`,
                top: `${currentStep.coordinates.y - currentStep.coordinates.height / 2}%`,
                width: `${currentStep.coordinates.width}%`,
                height: `${currentStep.coordinates.height}%`
              }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-plum-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase shadow">
                Target Zone
              </div>
            </div>

            {/* Voice Audio Control Widget */}
            <div className="absolute bottom-4 left-4 z-20 bg-plum-950/80 backdrop-blur-md text-white p-3 rounded-2xl flex items-center gap-3 border border-plum-700/50">
              <button
                onClick={() => setIsPlayingVoice(!isPlayingVoice)}
                className="w-9 h-9 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center text-white transition-transform active:scale-95 shadow"
              >
                {isPlayingVoice ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <div className="text-xs">
                <p className="font-bold text-rose-200">AI Voice Coach Active</p>
                <p className="text-[10px] text-plum-200 truncate max-w-[200px]">{currentStep.voiceText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (5 cols): Detailed Step Instructions & Brush Tool Specs */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-rose-100 shadow-beauty-md space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="ai">{currentStep.category}</Badge>
              <span className="text-xs font-bold text-plum-800 uppercase tracking-wider">Step {currentStep.step}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-plum-950">{currentStep.title}</h2>
            <p className="text-charcoal-700 text-sm leading-relaxed">{currentStep.instruction}</p>
          </div>

          <hr className="border-plum-100" />

          {/* Technical Guidance Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-plum-50/70 border border-plum-100 space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-plum-400">Target Region</span>
              <p className="font-bold text-plum-950">{currentStep.region}</p>
            </div>
            <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100 space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-rose-500">Brush Motion</span>
              <p className="font-bold text-plum-950">{currentStep.direction}</p>
            </div>
            <div className="p-3 rounded-xl bg-peach-50/70 border border-peach-200 space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-peach-700">Product Amount</span>
              <p className="font-bold text-plum-950">{currentStep.amount}</p>
            </div>
            <div className="p-3 rounded-xl bg-champagne-50/70 border border-champagne-200 space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-amber-700">Recommended Tool</span>
              <p className="font-bold text-plum-950">{currentStep.toolRecommended}</p>
            </div>
          </div>

          {/* Step Navigation Controls */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="secondary"
              size="md"
              className="flex-1"
              icon={ChevronLeft}
              disabled={currentStepIndex === 0}
              onClick={handlePrevStep}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              size="md"
              className="flex-1"
              icon={ChevronRight}
              onClick={handleNextStep}
            >
              {currentStepIndex === SOFT_GLAM_TUTORIAL.length - 1 ? 'Finish Tutorial' : 'Next Step'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeupCoachPage;
