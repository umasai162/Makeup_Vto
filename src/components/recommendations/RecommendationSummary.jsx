import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const RecommendationSummary = ({ lookName, occasion, style }) => {
  return (
    <Card className="p-4 bg-gradient-to-r from-plum-900 to-plum-950 text-white flex items-center justify-between">
      <div>
        <span className="text-[10px] text-rose-300 uppercase tracking-widest block">Selected Recommendation</span>
        <h4 className="font-serif font-bold text-lg text-white">{lookName}</h4>
        <p className="text-xs text-rose-100/70">{occasion} • {style}</p>
      </div>
      <Badge variant="gold">AI Formulated</Badge>
    </Card>
  );
};

export default RecommendationSummary;
