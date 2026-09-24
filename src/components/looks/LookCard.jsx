import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Eye } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const LookCard = ({ look, onViewDetails }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-warm-white rounded-3xl overflow-hidden border border-border-pink shadow-beauty-sm hover:shadow-beauty-md transition-all duration-300 flex flex-col justify-between group">
      <div className="relative h-60 w-full bg-light-blush overflow-hidden">
        <img
          src={look.image}
          alt={look.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="ai">{look.aiMatch}% Match</Badge>
        </div>
        <div className="absolute bottom-3 left-3 bg-deep-burgundy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {look.category}
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="font-serif font-bold text-deep-burgundy text-xl">{look.name}</h3>
          <p className="text-xs text-muted-text leading-relaxed line-clamp-2">{look.description}</p>
        </div>

        <div className="pt-2 border-t border-border-pink flex gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            icon={Palette}
            onClick={() => navigate('/virtual-try-on')}
          >
            Try This Look
          </Button>
          <Button
            variant="secondary"
            size="sm"
            icon={Eye}
            onClick={() => onViewDetails && onViewDetails(look)}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LookCard;
