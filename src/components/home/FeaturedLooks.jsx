import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Palette, ArrowRight } from 'lucide-react';
import { LOOKS_DATA } from '../../data/looks';
import Button from '../common/Button';
import Badge from '../common/Badge';

const FeaturedLooks = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-warm-white border-y border-border-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-accent">Curated Style Collection</span>
            <h2 className="text-3xl font-serif font-extrabold text-deep-burgundy">
              AI Recommended Looks
            </h2>
          </div>

          <Link to="/looks">
            <Button variant="ghost" size="md" icon={ArrowRight} iconPosition="right">
              View All Looks
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOOKS_DATA.slice(0, 3).map((look) => (
            <div
              key={look.id}
              className="bg-cream rounded-3xl overflow-hidden border border-border-pink shadow-beauty-sm hover:shadow-beauty-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-56 w-full bg-light-blush overflow-hidden">
                <img
                  src={look.image}
                  alt={look.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="ai">{look.aiMatch}% Match</Badge>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-rose-accent uppercase tracking-wider">{look.category}</span>
                    <span className="text-muted-text font-medium">{look.subtitle}</span>
                  </div>
                  <h3 className="font-serif font-bold text-deep-burgundy text-xl">{look.name}</h3>
                  <p className="text-xs text-muted-text leading-relaxed">{look.description}</p>
                </div>

                <div className="pt-2 border-t border-border-pink flex items-center justify-between gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    icon={Palette}
                    onClick={() => navigate('/virtual-try-on')}
                  >
                    Try This Look
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLooks;
