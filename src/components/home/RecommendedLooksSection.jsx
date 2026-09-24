import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Palette, ArrowRight, Check } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const RecommendedLooksSection = () => {
  const navigate = useNavigate();
  const [selectedLook, setSelectedLook] = useState('Soft Glam');

  const looks = [
    {
      name: 'Soft Glam',
      subtitle: 'Golden Hour Radiance',
      matchScore: 98,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
      description: 'Warm bronze lids, peach satin blush, and Rose Dusk lips for effortlessly chic evening elegance.',
      tags: ['Warm Bronze', 'Peach Blush', 'Rose Nude Lip']
    },
    {
      name: 'Glass Skin',
      subtitle: 'K-Beauty Dewy Luminosity',
      matchScore: 96,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
      description: 'Ultra-hydrated sheer base with champagne liquid highlighter accents and gloss lip finish.',
      tags: ['Dewy Glow', 'Champagne Highlight', 'Clear Gloss']
    },
    {
      name: 'Bridal',
      subtitle: 'Timeless Romantic Beauty',
      matchScore: 97,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      description: 'Velvet medium satin coverage with soft pink cheek wash and defined lifted eyeliner wing.',
      tags: ['Velvet Satin', 'Soft Pink', '2mm Espresso Wing']
    },
    {
      name: 'Natural',
      subtitle: 'No-Makeup Makeup Clean Look',
      matchScore: 95,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      description: 'Tinted serum coverage, micro-feathered brow arch, and hydrating nude lip balm.',
      tags: ['Skin Tint', 'Feathered Brows', 'Nude Balm']
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-beauty-md space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-plum-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Curated Styling Collections</span>
            </div>
            <h2 className="text-3xl font-serif font-extrabold text-plum-950">
              AI RECOMMENDED LOOKS
            </h2>
          </div>

          <Button variant="gold" size="md" icon={Palette} onClick={() => navigate('/virtual-try-on')}>
            Try-On In AR
          </Button>
        </div>

        {/* Tab Pills */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {looks.map((l) => {
            const isActive = selectedLook === l.name;
            return (
              <button
                key={l.name}
                onClick={() => setSelectedLook(l.name)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-plum-950 text-white shadow-beauty-sm'
                    : 'bg-plum-50 text-plum-900 hover:bg-rose-100'
                }`}
              >
                <span>{l.name}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-rose-300" />}
              </button>
            );
          })}
        </div>

        {/* Grid of Recommended Look Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {looks.map((l) => (
            <div
              key={l.name}
              onClick={() => setSelectedLook(l.name)}
              className={`cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                selectedLook === l.name
                  ? 'border-rose-400 ring-2 ring-rose-300 shadow-beauty-md bg-rose-50/20'
                  : 'border-rose-100 bg-white hover:border-rose-300 shadow-beauty-sm'
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={l.image}
                  alt={l.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="ai">{l.matchScore}% Match</Badge>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-plum-950 text-lg">{l.name}</h3>
                  <p className="text-xs font-semibold text-rose-500">{l.subtitle}</p>
                  <p className="text-xs text-charcoal-600 leading-relaxed pt-1">{l.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-plum-50">
                  {l.tags.map((tg) => (
                    <span key={tg} className="px-2 py-0.5 rounded-full bg-plum-50 text-plum-950 text-[10px] font-semibold">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedLooksSection;
