import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Scan } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-deep-burgundy via-dark-wine to-deep-burgundy text-cream">
      {/* Luxury Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-accent/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[380px] h-[380px] bg-soft-blush/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-light-blush/10 border border-soft-blush/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-ai-accent animate-pulse" />
              <span className="text-xs font-bold text-soft-blush uppercase tracking-widest">
                LAVIX AI BEAUTY ARCHITECTURE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-[1.12]">
              Discover the makeup <br className="hidden sm:inline" />
              that suits <span className="text-soft-blush font-serif italic">YOU.</span>
            </h1>

            <p className="text-base sm:text-lg text-light-blush/90 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Analyze your features, discover personalized makeup looks, try them virtually, and learn how to recreate them step by step with your personal AI beauty coach.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/analyze">
                <Button variant="primary" size="lg" icon={Sparkles} className="w-full sm:w-auto shadow-glow">
                  Analyze My Face
                </Button>
              </Link>
              <Link to="/looks">
                <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto">
                  Explore Looks
                </Button>
              </Link>
            </div>

            {/* Feature Indicators */}
            <div className="pt-6 border-t border-burgundy/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-light-blush/80 font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ai-accent" />
                <span>3D Face Feature Mesh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ai-accent" />
                <span>Real-Time Shade Match</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ai-accent" />
                <span>Step-by-Step AI Coach</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual AI Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden shadow-beauty-lg border border-border-pink/30 bg-dark-wine/80 backdrop-blur-md group">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                  alt="LAVIX Beauty Portrait Model"
                  className="w-full h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-deep-burgundy via-transparent to-transparent opacity-90" />

                {/* Top Badge: AI Recommendation */}
                <div className="absolute top-6 right-6 bg-warm-white/95 backdrop-blur-md text-deep-burgundy px-4 py-2 rounded-2xl shadow-beauty-md border border-border-pink flex items-center gap-2.5 animate-float">
                  <Sparkles className="w-4 h-4 text-rose-accent" />
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted-text">AI Recommendation</p>
                    <p className="text-xs font-serif font-bold text-deep-burgundy">Soft Glam Golden Hour</p>
                  </div>
                </div>

                {/* Bottom Information Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-deep-burgundy/90 backdrop-blur-lg p-4 rounded-2xl border border-border-pink/30 text-white space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-serif font-bold text-soft-blush">Face Contour Detected</span>
                    <Badge variant="ai">98% Match</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] text-light-blush/90 pt-2 border-t border-burgundy/60 font-semibold text-center">
                    <div className="bg-dark-wine/60 p-1.5 rounded-lg"><span className="block text-rose-accent text-[9px] uppercase font-bold">Shape</span> Oval</div>
                    <div className="bg-dark-wine/60 p-1.5 rounded-lg"><span className="block text-rose-accent text-[9px] uppercase font-bold">Undertone</span> Warm</div>
                    <div className="bg-dark-wine/60 p-1.5 rounded-lg"><span className="block text-rose-accent text-[9px] uppercase font-bold">Eye</span> Almond</div>
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

export default Hero;
