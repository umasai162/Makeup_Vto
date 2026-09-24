import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Palette, ArrowRight } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';

const RecommendedLook = ({ look, occasion, style }) => {
  const navigate = useNavigate();

  const handleTryLook = () => {
    navigate('/virtual-try-on');
  };

  return (
    <Card glass className="p-8 border border-rose-200 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-plum-100 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="ai">98% AI Precision Match</Badge>
            <span className="text-xs uppercase font-bold text-rose-600">{occasion} • {style}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-plum-950">
            {look?.lookName || 'Soft Glam Golden Hour'}
          </h3>
        </div>

        <Button variant="gold" size="md" icon={Palette} onClick={handleTryLook}>
          Try This Look Virtually
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100 space-y-1">
          <span className="text-[10px] font-bold text-plum-400 uppercase tracking-wider">Foundation</span>
          <p className="text-sm font-bold text-plum-950">Medium Satin Coverage</p>
          <p className="text-xs text-charcoal-600">Warm-neutral formula tailored to skin geometry.</p>
        </div>

        <div className="p-4 rounded-2xl bg-peach-50/70 border border-peach-200 space-y-1">
          <span className="text-[10px] font-bold text-peach-700 uppercase tracking-wider">Blush</span>
          <p className="text-sm font-bold text-plum-950">Peach / Coral Silk</p>
          <p className="text-xs text-charcoal-600">High cheekbone sweep to elongate Oval face shape.</p>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
          <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider">Eyeshadow</span>
          <p className="text-sm font-bold text-plum-950">Warm Bronze & Champagne</p>
          <p className="text-xs text-charcoal-600">Metallic lid wash with soft bronze crease definition.</p>
        </div>

        <div className="p-4 rounded-2xl bg-plum-50/70 border border-plum-100 space-y-1">
          <span className="text-[10px] font-bold text-plum-400 uppercase tracking-wider">Eyeliner</span>
          <p className="text-sm font-bold text-plum-950">Lifted 2mm Espresso Wing</p>
          <p className="text-xs text-charcoal-600">Flicked outer corner matching Almond eye curve.</p>
        </div>

        <div className="p-4 rounded-2xl bg-nude-50/70 border border-nude-200 space-y-1">
          <span className="text-[10px] font-bold text-nude-700 uppercase tracking-wider">Lips</span>
          <p className="text-sm font-bold text-plum-950">Rose Dusk Creamy Satin</p>
          <p className="text-xs text-charcoal-600">Nude rose precision liner with satin lip center.</p>
        </div>

        <div className="p-4 rounded-2xl bg-champagne-50/70 border border-champagne-200 space-y-1">
          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Highlighter</span>
          <p className="text-sm font-bold text-plum-950">Champagne Glass Glow</p>
          <p className="text-xs text-charcoal-600">Applied on cheekbones & inner eye corners.</p>
        </div>
      </div>
    </Card>
  );
};

export default RecommendedLook;
