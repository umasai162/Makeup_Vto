import React from 'react';
import { Scan, Palette, ShoppingBag, GraduationCap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureStrip = () => {
  const items = [
    { label: 'Analyze Face', icon: Scan, path: '/analyze' },
    { label: 'Try Makeup', icon: Palette, path: '/virtual-try-on' },
    { label: 'Find Products', icon: ShoppingBag, path: '/products' },
    { label: 'Beauty Coach', icon: GraduationCap, path: '/beauty-coach' },
    { label: 'Discover Looks', icon: Sparkles, path: '/looks' },
  ];

  return (
    <section className="bg-warm-white border-y border-border-pink py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-accent">Fast Feature Navigation</span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-deep-burgundy">
            WHAT DO YOU WANT TO DISCOVER?
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.label} to={item.path}>
                <button className="px-5 py-3 rounded-2xl bg-cream hover:bg-light-blush text-deep-burgundy border border-border-pink font-bold text-xs sm:text-sm shadow-beauty-sm transition-all duration-300 flex items-center gap-2.5 active:scale-95">
                  <Icon className="w-4 h-4 text-rose-accent" />
                  <span>{item.label}</span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
