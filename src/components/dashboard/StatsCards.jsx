import React from 'react';
import { Palette, Bookmark, Sparkles, ShoppingBag } from 'lucide-react';

const StatsCards = ({ stats = { looksTried: 14, savedLooks: 6, aiRecommendations: 28, favoriteProducts: 5 } }) => {
  const cards = [
    { label: 'Looks Tried', val: stats.looksTried, icon: Palette, bg: 'bg-cream border-border-pink' },
    { label: 'Saved Looks', val: stats.savedLooks, icon: Bookmark, bg: 'bg-light-blush/60 border-soft-blush' },
    { label: 'AI Recommendations', val: stats.aiRecommendations, icon: Sparkles, bg: 'bg-deep-burgundy text-cream border-burgundy' },
    { label: 'Favorite Products', val: stats.favoriteProducts, icon: ShoppingBag, bg: 'bg-warm-white border-border-pink' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div key={c.label} className={`p-5 rounded-3xl border shadow-beauty-sm space-y-2 ${c.bg}`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-80">{c.label}</span>
              <Icon className="w-4 h-4 text-rose-accent" />
            </div>
            <p className="text-2xl font-serif font-extrabold">{c.val}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
