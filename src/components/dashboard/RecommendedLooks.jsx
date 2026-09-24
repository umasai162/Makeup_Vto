import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const RecommendedLooks = ({ looks = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-warm-white rounded-3xl p-6 border border-border-pink shadow-beauty-sm space-y-4">
      <div className="flex items-center justify-between border-b border-border-pink pb-3">
        <h3 className="font-serif font-bold text-lg text-deep-burgundy">Your Recommended Looks</h3>
        <span className="text-xs text-rose-accent font-bold uppercase tracking-wider">Top Match</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {looks.slice(0, 2).map((look) => (
          <div key={look.id} className="p-4 rounded-2xl bg-cream border border-border-pink flex items-center gap-4">
            <img src={look.image} alt={look.name} className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-rose-accent uppercase">{look.category}</span>
                <Badge variant="ai">{look.aiMatch}%</Badge>
              </div>
              <h4 className="font-serif font-bold text-deep-burgundy text-sm">{look.name}</h4>
              <Button variant="ghost" size="sm" icon={Palette} onClick={() => navigate('/virtual-try-on')}>
                Try in AR
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedLooks;
