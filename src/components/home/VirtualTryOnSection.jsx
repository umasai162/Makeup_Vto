import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Camera, Palette, Eye, Sparkles } from 'lucide-react';
import Button from '../common/Button';

const VirtualTryOnSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 rounded-3xl p-8 sm:p-12 text-white shadow-beauty-lg relative overflow-hidden border border-rose-400/30">
        {/* Ambient Glow background */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-400/20 border border-rose-300/30 text-rose-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              <span>Real-Time Neural Canvas Simulator</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white">
              VIRTUAL TRY-ON
            </h2>

            <p className="text-xl sm:text-2xl font-serif italic text-rose-200">
              "See the look on YOU"
            </p>

            <p className="text-sm text-rose-100/80 max-w-xl">
              Experience instant live lipstick, eyeshadow, blush, and eyeliner application with true pigment opacity and split before/after sliders.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="gold"
                size="lg"
                icon={Upload}
                onClick={() => navigate('/beauty-analysis')}
                className="w-full sm:w-auto text-plum-950 font-extrabold"
              >
                Upload Photo
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Camera}
                onClick={() => navigate('/virtual-try-on')}
                className="w-full sm:w-auto text-white border-rose-300/40 hover:bg-rose-400/20"
              >
                Use Camera
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-rose-300/40 shadow-glow bg-plum-900/80 p-2">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="Virtual Try On Preview"
                className="w-full h-72 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-plum-950/90 backdrop-blur-md p-3 rounded-xl border border-rose-400/30 flex items-center justify-between text-xs">
                <span className="font-bold text-rose-200">AR Pigment Overlay: Active</span>
                <span className="text-rose-400 font-semibold">60 FPS Render</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOnSection;
