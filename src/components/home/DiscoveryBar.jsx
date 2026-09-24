import React from 'react';
import { Link } from 'react-router-dom';
import { Scan, Palette, ShoppingBag, GraduationCap, Sparkles } from 'lucide-react';

const DiscoveryBar = () => {
  const items = [
    { label: 'Analyze Face', icon: Scan, path: '/beauty-analysis', variant: 'bg-plum-950 text-white hover:bg-plum-900 border-plum-800' },
    { label: 'Try Makeup', icon: Palette, path: '/virtual-try-on', variant: 'bg-rose-500 text-white hover:bg-rose-600 border-rose-400' },
    { label: 'Find Products', icon: ShoppingBag, path: '/products', variant: 'bg-white text-plum-950 hover:bg-rose-50 border-rose-200' },
    { label: 'Beauty Coach', icon: GraduationCap, path: '/makeup-coach', variant: 'bg-plum-800 text-white hover:bg-plum-900 border-plum-700' },
    { label: 'Discover Looks', icon: Sparkles, path: '/recommendations', variant: 'bg-peach-100 text-plum-950 hover:bg-peach-200 border-peach-300' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-beauty-md text-center space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500">Fast Navigation</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-plum-950">
            WHAT DO YOU WANT TO DISCOVER?
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.label} to={item.path}>
                <button className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm border shadow-beauty-sm transition-all duration-300 flex items-center gap-2.5 active:scale-95 ${item.variant}`}>
                  <Icon className="w-4 h-4" />
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

export default DiscoveryBar;
