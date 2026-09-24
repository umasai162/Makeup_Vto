import React from 'react';

const LookFilters = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['All', 'Natural', 'Everyday', 'Soft Glam', 'Bridal', 'Party', 'Office', 'Korean', 'Minimal'];

  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              isActive
                ? 'bg-deep-burgundy text-cream shadow-beauty-sm'
                : 'bg-cream text-deep-burgundy hover:bg-light-blush border border-border-pink'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default LookFilters;
