import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Scan, Palette, GraduationCap, ShoppingBag } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-plum-950 via-plum-900 to-plum-950 text-white">
      {/* Luxury AI Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[380px] h-[380px] bg-peach-300/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-400/15 border border-rose-400/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-rose-300 animate-pulse" />
              <span className="text-xs font-bold text-rose-200 uppercase tracking-widest">
                YOUR BEAUTY, POWERED BY AI
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-[1.12]">
              Discover the makeup <br className="hidden sm:inline" />
              that suits <span className="bg-gradient-to-r from-rose-300 via-peach-200 to-rose-400 bg-clip-text text-transparent">YOU.</span>
            </h1>

            <div className="space-y-2 text-rose-100/90 text-base sm:text-lg font-sans">
              <p className="flex items-center justify-center lg:justify-start gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                Analyze your face
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                Discover your look
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                Try it virtually
              </p>
            </div>

            {/* Main Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/beauty-analysis">
                <Button variant="gold" size="lg" icon={Sparkles} className="w-full sm:w-auto text-plum-950 font-extrabold shadow-glow">
                  Analyze My Face
                </Button>
              </Link>
              <Link to="/virtual-try-on">
                <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto text-white border-rose-300/40 hover:bg-rose-400/20">
                  Try Makeup Now
                </Button>
              </Link>
            </div>

            {/* Badges Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-rose-200 font-semibold border-t border-rose-100/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300" />
                <span>Face Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300" />
                <span>Shade Match</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-300" />
                <span>AI Coach</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase: Beauty Model + AI Analysis Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Beauty Model Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-beauty-lg border border-rose-400/30 bg-plum-900/60 backdrop-blur-md group">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="BEAUTY MODEL AI ANALYSIS"
                  className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* AI Facial Landmarks Scan Grid Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/20 to-transparent" />

                <div className="absolute top-4 left-4 z-20 bg-plum-950/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-rose-400/40 flex items-center gap-2">
                  <Scan className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                  <span>BEAUTY MODEL • AI ANALYSIS</span>
                </div>

                {/* Floating Badge 1: AI Match */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-plum-950 px-3.5 py-2 rounded-2xl shadow-beauty-md border border-rose-200 flex items-center gap-2 animate-float-badge">
                  <Sparkles className="w-4 h-4 text-rose-500" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500">AI Precision Match</p>
                    <p className="text-xs font-bold text-plum-950">98.4% Confidence</p>
                  </div>
                </div>

                {/* Floating Badge 2: Confidence Profile Breakdown */}
                <div className="absolute bottom-4 left-4 right-4 bg-plum-950/90 backdrop-blur-lg p-4 rounded-2xl border border-rose-400/30 text-white space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-serif font-bold text-rose-200">Personalized Feature Mesh</span>
                    <Badge variant="ai">Live AI</Badge>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-[10px] text-rose-100/90 pt-2 border-t border-rose-400/20 text-center font-medium">
                    <div className="bg-plum-900/60 p-1.5 rounded-lg"><span className="block text-rose-300 font-bold">SHAPE</span> Oval</div>
                    <div className="bg-plum-900/60 p-1.5 rounded-lg"><span className="block text-rose-300 font-bold">TONE</span> Medium</div>
                    <div className="bg-plum-900/60 p-1.5 rounded-lg"><span className="block text-rose-300 font-bold">UNDERTONE</span> Warm</div>
                    <div className="bg-plum-900/60 p-1.5 rounded-lg"><span className="block text-rose-300 font-bold">EYE</span> Almond</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
