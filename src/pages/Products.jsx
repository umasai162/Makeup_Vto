import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Palette } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import ProductSearch from '../components/products/ProductSearch';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import Button from '../components/common/Button';

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = selectedCategory === 'All' || prod.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.shade.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-6 px-4 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-border-pink">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-light-blush text-deep-burgundy text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-accent" />
            <span>AI Match Engine Cosmetics</span>
          </div>
          <h1 className="text-3xl font-serif font-extrabold text-deep-burgundy">
            Shade-Matched Products
          </h1>
          <p className="text-muted-text text-sm">
            Curated foundations, lipsticks, and blushes tailored to your skin undertone profile.
          </p>
        </div>

        <Button variant="gold" size="md" icon={Palette} onClick={() => navigate('/virtual-try-on')}>
          AR Try-On Studio
        </Button>
      </div>

      <div className="bg-warm-white rounded-3xl p-4 border border-border-pink shadow-beauty-sm space-y-4">
        <ProductSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ProductFilters selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Products;
