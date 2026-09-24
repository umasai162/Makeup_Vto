import React from 'react';
import { MAKEUP_CATEGORIES } from '../../data/makeupCategories';

const MakeupCategoryTabs = ({ activeTab, onTabChange, activeSubcategory, onSubcategoryChange }) => {
  const currentCategoryObj = MAKEUP_CATEGORIES.find(c => c.id === activeTab) || MAKEUP_CATEGORIES[0];

  return (
    <div className="space-y-4">
      {/* Top Main Category Tabs (Face, Eyes, Lips, Brows) */}
      <div className="flex border-b border-plum-100 space-x-6 overflow-x-auto hide-scrollbar">
        {MAKEUP_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                onTabChange(cat.id);
                onSubcategoryChange(cat.subcategories[0]?.id);
              }}
              className={`pb-3 text-sm font-serif font-bold transition-all relative whitespace-nowrap ${
                isActive ? 'text-plum-950 border-b-2 border-plum-800' : 'text-charcoal-400 hover:text-plum-700'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Subcategory Pills */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {currentCategoryObj.subcategories.map((sub) => {
          const isSubActive = activeSubcategory === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => onSubcategoryChange(sub.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                isSubActive
                  ? 'bg-plum-800 text-white shadow-sm font-semibold'
                  : 'bg-plum-50 text-plum-900 hover:bg-rose-100/60'
              }`}
            >
              {sub.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MakeupCategoryTabs;
