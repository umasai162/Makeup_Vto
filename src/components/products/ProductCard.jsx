import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Eye, Star } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-warm-white rounded-3xl overflow-hidden border border-border-pink shadow-beauty-sm hover:shadow-beauty-md transition-all duration-300 flex flex-col justify-between group">
      <div className="relative h-56 w-full bg-cream overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="ai">{product.aiMatch}% Match</Badge>
        </div>
        <div className="absolute top-3 right-3 bg-warm-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-deep-burgundy flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{product.rating}</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold uppercase text-rose-accent tracking-wider">{product.brand}</span>
            <span className="text-muted-text">{product.category}</span>
          </div>
          <h3 className="font-serif font-bold text-deep-burgundy text-base line-clamp-1">{product.name}</h3>
          <p className="text-xs text-muted-text line-clamp-2">{product.description}</p>
        </div>

        <div className="space-y-3 pt-2 border-t border-border-pink">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-charcoal">Shade: <strong className="text-deep-burgundy">{product.shade}</strong></span>
            <span className="font-serif font-bold text-deep-burgundy text-base">${product.price.toFixed(2)}</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              icon={Eye}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              View Product
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={Palette}
              onClick={() => navigate('/virtual-try-on')}
            >
              Try On
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
