import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Scan, Eye, User, ArrowRight } from 'lucide-react';
import { BeautyContext } from '../../context/BeautyContext';
import Button from '../common/Button';
import Badge from '../common/Badge';

const BeautyProfileSection = () => {
  const { beautyProfile, uploadedImage } = useContext(BeautyContext);

  const features = [
    { title: 'Face Shape', value: beautyProfile.faceShape, desc: 'Oval & balanced contour ratio', bg: 'bg-plum-50/80 border-plum-100', icon: Scan },
    { title: 'Undertone', value: beautyProfile.undertone, desc: 'Warm-neutral peach glow match', bg: 'bg-peach-50/80 border-peach-200', icon: Sparkles },
    { title: 'Eye Shape', value: beautyProfile.eyeShape, desc: 'Almond curve with natural lift', bg: 'bg-rose-50/80 border-rose-200', icon: Eye },
    { title: 'Skin Tone', value: beautyProfile.skinTone, desc: 'Medium radiant satin depth', bg: 'bg-champagne-50/80 border-champagne-200', icon: User },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-gradient-to-br from-white via-rose-50/30 to-plum-50/40 rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-beauty-md space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-100/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Deep Facial Geometry Analysis</span>
            </div>
            <h2 className="text-3xl font-serif font-extrabold text-plum-950">
              YOUR AI BEAUTY PROFILE
            </h2>
            <p className="text-charcoal-600 text-xs sm:text-sm">
              Neural vision analysis computed across 68 facial landmark coordinates.
            </p>
          </div>

          <Link to="/beauty-analysis">
            <Button variant="primary" size="md" icon={Scan}>
              Run Full Analysis
            </Button>
          </Link>
        </div>

        {/* Grid of 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-6 rounded-3xl border shadow-beauty-sm space-y-3 transition-all duration-300 hover:shadow-beauty-md ${item.bg}`}
              >
                <div className="w-10 h-10 rounded-2xl bg-white text-plum-950 flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 text-rose-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">{item.title}</span>
                  <h3 className="text-xl font-serif font-bold text-plum-950">{item.value}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeautyProfileSection;
