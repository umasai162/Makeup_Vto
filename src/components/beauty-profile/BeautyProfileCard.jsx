import React from 'react';
import { Sparkles, Calendar, Award } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const BeautyProfileCard = ({ profile, user }) => {
  return (
    <Card glass className="p-8 border border-rose-200 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"}
            alt={user?.name || "User Avatar"}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-beauty-md"
          />
          <div className="absolute -bottom-1 -right-1 bg-plum-800 text-rose-200 p-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-rose-300" />
          </div>
        </div>

        <div className="text-center sm:text-left space-y-2 flex-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h2 className="text-2xl font-serif font-bold text-plum-950">
              {user?.name || "Sophia Vance"}'s Beauty Identity
            </h2>
            <Badge variant="ai">AI Certified Profile</Badge>
          </div>
          
          <p className="text-xs text-charcoal-600 font-sans">
            Calibrated for Medium Warm-Neutral Skin • Oval Geometry • Almond Eye Mesh
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-charcoal-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-plum-700" /> Last Scanned: Today
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-rose-500" /> Overall AI Confidence: 96%
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BeautyProfileCard;
