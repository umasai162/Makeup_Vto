import React from 'react';

const ProductFilters = ({ selectedCategory, onSelectCategory }) => {
  const categories = ['All', 'Foundation', 'Concealer', 'Blush', 'Bronzer', 'Eyeshadow', 'Lipstick', 'Highlighter'];

  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              isActive
                ? 'bg-deep-burgundy text-cream shadow-sm'
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

export default ProductFilters;
