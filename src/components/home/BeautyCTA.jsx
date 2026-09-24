import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const BeautyCTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-deep-burgundy via-dark-wine to-deep-burgundy rounded-3xl p-8 sm:p-14 text-center text-cream shadow-beauty-lg relative overflow-hidden border border-rose-accent/30 space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-light-blush/10 border border-soft-blush/30 mx-auto flex items-center justify-center text-ai-accent">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white">
            Ready to Discover Your Perfect Look?
          </h2>
          <p className="text-light-blush/80 text-sm sm:text-base font-sans">
            Start your personalized AI beauty journey today with instant face analysis & virtual try-on.
          </p>
        </div>

        <div className="pt-2">
          <Link to="/analyze">
            <Button variant="primary" size="lg" icon={Sparkles} className="shadow-glow">
              Analyze My Face Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeautyCTA;
