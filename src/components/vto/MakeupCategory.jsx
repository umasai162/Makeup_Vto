import React from 'react';
import { MAKEUP_CATEGORIES_CONFIG } from '../../data/makeupColors';

const MakeupCategory = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex border-b border-border-pink space-x-6 overflow-x-auto hide-scrollbar pb-1">
      {MAKEUP_CATEGORIES_CONFIG.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`pb-3 text-sm font-serif font-bold transition-all relative whitespace-nowrap ${
              isActive ? 'text-deep-burgundy border-b-2 border-rose-accent' : 'text-muted-text hover:text-deep-burgundy'
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default MakeupCategory;
