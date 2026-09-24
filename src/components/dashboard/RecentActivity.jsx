import React from 'react';
import { Clock, Palette, Sparkles, ShoppingBag } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    { text: 'Applied Soft Glam Golden Hour in VTO Studio', time: '10 mins ago', icon: Palette },
    { text: 'Saved Velvet Skin Radiant Foundation to Makeup Bag', time: '2 hours ago', icon: ShoppingBag },
    { text: 'Completed 3D Face Landmark Analysis', time: 'Yesterday', icon: Sparkles },
  ];

  return (
    <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-sm space-y-4">
      <div className="flex items-center justify-between border-b border-border-pink pb-3">
        <h3 className="font-serif font-bold text-lg text-deep-burgundy">Recently Tried Activity</h3>
        <Clock className="w-4 h-4 text-muted-text" />
      </div>

      <div className="space-y-3">
        {activities.map((act, idx) => {
          const Icon = act.icon;
          return (
            <div key={idx} className="flex items-center justify-between text-xs p-3 rounded-2xl bg-cream border border-border-pink">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-light-blush text-rose-accent flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-deep-burgundy">{act.text}</span>
              </div>
              <span className="text-muted-text text-[10px] font-bold">{act.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
