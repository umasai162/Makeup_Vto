import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ShoppingBag, Palette, Star, Sparkles, Check } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import { BeautyContext } from '../context/BeautyContext';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const ProductsPage = () => {
  const navigate = useNavigate();
  const { addToMakeupBag, myMakeupBag } = useContext(BeautyContext);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedIds, setAddedIds] = useState([]);

  const categories = ['All', 'Foundation', 'Concealer', 'Blush', 'Lipstick', 'Eyeshadow', 'Brows', 'Highlighter', 'Contour'];

  const filteredProducts = MOCK_PRODUCTS.filter(prod => {
    const matchesCategory = selectedCategory === 'All' || prod.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.shade.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddBag = (product) => {
    addToMakeupBag({
      category: product.category,
      brand: product.brand,
      name: product.name,
      shade: product.shade,
      image: product.image,
      price: product.price
    });
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id));
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-2 animate-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-rose-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>AI Match Engine Catalog</span>
          </div>
          <h1 className="text-3xl font-serif font-extrabold text-plum-950">
            Tailored Beauty Products
          </h1>
          <p className="text-charcoal-700 text-sm">
            Discover lipsticks, foundations, and palettes shade-matched to your neural facial profile.
          </p>
        </div>

        <Button
          variant="gold"
          size="md"
          icon={Palette}
          onClick={() => navigate('/virtual-try-on')}
        >
          AR Try-On Studio
        </Button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-3xl p-4 border border-rose-100 shadow-beauty-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              type="text"
              placeholder="Search products, brands, shades (e.g. Velvet Foundation, Rose Dusk)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-plum-50/50 border border-plum-100 text-sm focus:outline-none focus:border-plum-800 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pt-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-plum-950 text-white shadow-sm'
                    : 'bg-plum-50 text-plum-900 hover:bg-rose-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const isAdded = addedIds.includes(product.id);
          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-beauty-sm hover:shadow-beauty-md transition-all duration-300 flex flex-col group"
            >
              {/* Image & Match Badge Container */}
              <div className="relative h-56 w-full bg-plum-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="ai">{product.aiMatch}% Match</Badge>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-plum-950 shadow-sm flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-rose-500 uppercase tracking-wider">{product.brand}</span>
                    <span className="text-charcoal-400">{product.category}</span>
                  </div>
                  <h3 className="font-serif font-bold text-plum-950 text-base line-clamp-1">{product.name}</h3>
                  <p className="text-xs text-charcoal-600 line-clamp-2">{product.description}</p>
                </div>

                <div className="space-y-3 pt-2 border-t border-plum-50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-charcoal-700">Shade: <strong className="text-plum-900">{product.shade}</strong></span>
                    <span className="font-bold text-plum-950 text-base">${product.price.toFixed(2)}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant={isAdded ? "gold" : "secondary"}
                      size="sm"
                      className="flex-1"
                      icon={isAdded ? Check : ShoppingBag}
                      onClick={() => handleAddBag(product)}
                    >
                      {isAdded ? "In Bag" : "Add to Bag"}
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      icon={Palette}
                      onClick={() => navigate('/virtual-try-on')}
                    >
                      Try On
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
