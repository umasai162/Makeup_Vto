import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sparkles, Palette, Bookmark, Check, ArrowLeft, Star } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import Button from '../components/common/Button';
import Badge from '../common/Badge';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const product = PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate('/products')}>
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-warm-white p-8 sm:p-10 rounded-3xl border border-border-pink shadow-beauty-md">
        {/* Left: Product Image */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-border-pink bg-cream">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <Badge variant="ai">{product.aiMatch}% Match</Badge>
            </div>
            <div className="absolute top-4 right-4 bg-warm-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-deep-burgundy flex items-center gap-1 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & AI Match Rationale */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase text-rose-accent tracking-widest">{product.brand}</span>
            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-deep-burgundy">{product.name}</h1>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-muted-text">Shade: <strong className="text-deep-burgundy">{product.shade}</strong></span>
              <span className="text-2xl font-serif font-extrabold text-deep-burgundy">${product.price.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">{product.description}</p>

          <hr className="border-border-pink" />

          {/* AI Match Rationale Card */}
          <div className="p-5 rounded-2xl bg-cream border border-border-pink space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-accent">Recommended For You</span>
              <Badge variant="gold">{product.aiMatch}% Compatibility</Badge>
            </div>
            <h4 className="font-serif font-bold text-deep-burgundy text-sm">Why this matches your profile:</h4>
            <ul className="space-y-1.5 text-xs text-charcoal">
              {product.matchReasons ? (
                product.matchReasons.map((r, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-rose-accent shrink-0" />
                    <span>{r}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-accent" /> Warm undertone alignment</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-accent" /> Medium skin tone pigment depth</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-accent" /> Oval face cheek contour fit</li>
                </>
              )}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              variant="primary"
              size="lg"
              className="flex-1 shadow-glow"
              icon={Palette}
              onClick={() => navigate('/virtual-try-on')}
            >
              Try Virtually
            </Button>
            <Button
              variant={saved ? "gold" : "secondary"}
              size="lg"
              icon={saved ? Check : Bookmark}
              onClick={() => {
                setSaved(true);
                setTimeout(() => setSaved(false), 3000);
              }}
            >
              {saved ? "Saved to Favorites" : "Add to Favorites"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
