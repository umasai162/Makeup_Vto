import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Bot, Palette, ArrowRight } from 'lucide-react';
import ChatWindow from '../components/coach/ChatWindow';
import Button from '../components/common/Button';

const BeautyCoach = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border-pink">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-light-blush text-deep-burgundy text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-accent" />
            <span>AI Personal Beauty Assistant</span>
          </div>
          <h1 className="text-3xl font-serif font-extrabold text-deep-burgundy">
            LAVIX Beauty Coach
          </h1>
        </div>

        <Button variant="gold" size="md" icon={Palette} onClick={() => navigate('/virtual-try-on')}>
          Open AR Studio
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: AI Avatar Visual */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-gradient-to-b from-deep-burgundy to-dark-wine p-6 rounded-3xl text-cream text-center space-y-4 border border-rose-accent/30 shadow-beauty-md">
            <div className="w-20 h-20 rounded-full bg-light-blush/20 border-2 border-soft-blush mx-auto flex items-center justify-center text-ai-accent shadow-glow">
              <Bot className="w-10 h-10 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-lg text-white">LAVIX AI Coach</h3>
              <p className="text-xs text-light-blush/80">Personalized Assistant</p>
            </div>
            <div className="pt-2 border-t border-burgundy/60 text-[11px] text-light-blush/90 text-left space-y-1">
              <p>✓ Face Shape: Oval</p>
              <p>✓ Undertone: Warm</p>
              <p>✓ Eye Shape: Almond</p>
            </div>
          </div>
        </div>

        {/* Center: Chat Window */}
        <div className="lg:col-span-6">
          <ChatWindow />
        </div>

        {/* Right: Personalized Recommendations */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-warm-white p-5 rounded-3xl border border-border-pink shadow-beauty-sm space-y-3">
            <h4 className="font-serif font-bold text-deep-burgundy text-sm">Recommended Routine</h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-cream border border-border-pink">
                <span className="font-bold text-rose-accent block">Base Prep</span>
                <span>Hydrating Hyaluronic Serum</span>
              </div>
              <div className="p-2.5 rounded-xl bg-light-blush/60 border border-soft-blush">
                <span className="font-bold text-rose-accent block">Shade Match</span>
                <span>M24 Warm Sand Foundation</span>
              </div>
              <div className="p-2.5 rounded-xl bg-cream border border-border-pink">
                <span className="font-bold text-rose-accent block">Lip Accent</span>
                <span>Rose Dusk Satin Lipstick</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyCoach;
