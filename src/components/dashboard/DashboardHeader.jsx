import React from 'react';
import { Sparkles, Scan, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const DashboardHeader = ({ userName }) => {
  return (
    <div className="bg-gradient-to-r from-deep-burgundy via-dark-wine to-deep-burgundy rounded-3xl p-6 sm:p-8 text-cream shadow-beauty-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-rose-accent/30">
      <div className="space-y-1 text-center md:text-left">
        <span className="text-xs font-bold text-soft-blush uppercase tracking-widest">LAVIX Member Portal</span>
        <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">Good morning, {userName || 'Sophia'}</h1>
        <p className="text-xs sm:text-sm text-light-blush/80">Let's create your perfect look today with AI precision.</p>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/analyze">
          <Button variant="outline" size="sm" icon={Scan}>
            New Analysis
          </Button>
        </Link>
        <Link to="/virtual-try-on">
          <Button variant="gold" size="sm" icon={Palette}>
            Try-On Studio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
