import React from 'react';
import Card from '../common/Card';

const MakeupRecommendationCard = ({ category, recommendation }) => {
  return (
    <Card className="p-4 bg-white border border-plum-100 flex items-start gap-4">
      <div className="w-10 h-10 rounded-2xl bg-rose-100 text-plum-800 flex items-center justify-center font-bold text-xs shrink-0">
        {category.substring(0, 3).toUpperCase()}
      </div>
      <div className="flex-1">
        <h4 className="font-serif font-bold text-plum-950 text-sm">{category}</h4>
        <p className="text-xs text-charcoal-700 mt-0.5">{recommendation.recommendation || recommendation.shade}</p>
        {recommendation.undertone && (
          <span className="text-[10px] text-plum-600 font-semibold block mt-1">
            Undertone: {recommendation.undertone}
          </span>
        )}
      </div>
    </Card>
  );
};

export default MakeupRecommendationCard;
