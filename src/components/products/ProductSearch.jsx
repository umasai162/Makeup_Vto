import React from 'react';
import { Search } from 'lucide-react';

const ProductSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
      <input
        type="text"
        placeholder="Search products, brands, shades (e.g. Velvet Foundation, Rose Dusk)..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-warm-white border border-border-pink text-xs sm:text-sm focus:outline-none focus:border-rose-accent text-deep-burgundy"
      />
    </div>
  );
};

export default ProductSearch;
