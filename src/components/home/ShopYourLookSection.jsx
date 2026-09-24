import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Sparkles, Star, Check, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../../data/mockProducts';
import { BeautyContext } from '../../context/BeautyContext';
import Button from '../common/Button';
import Badge from '../common/Badge';

const ShopYourLookSection = () => {
  const navigate = useNavigate();
  const { addToMakeupBag } = useContext(BeautyContext);

  const [activeCategory, setActiveCategory] = useState('All');
  const [addedIds, setAddedIds] = useState([]);

  const categories = ['All', 'Foundation', 'Blush', 'Lipstick', 'Eyeshadow', 'Highlighter'];

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Lipstick') return p.category === 'Lipstick';
    return p.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handleAdd = (prod) => {
    addToMakeupBag({
      category: prod.category,
      brand: prod.brand,
      name: prod.name,
      shade: prod.shade,
      image: prod.image,
      price: prod.price
    });
    setAddedIds(prev => [...prev, prod.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== prod.id));
    }, 2500);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-beauty-md space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-rose-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-plum-900 text-xs font-bold mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-rose-500" />
              <span>AI Shade Matched Cosmetics</span>
            </div>
            <h2 className="text-3xl font-serif font-extrabold text-plum-950">
              SHOP YOUR LOOK
            </h2>
          </div>

          <Button variant="ghost" size="md" icon={ArrowRight} iconPosition="right" onClick={() => navigate('/products')}>
            View Full Collection
          </Button>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-plum-950 text-white shadow-beauty-sm'
                    : 'bg-plum-50 text-plum-900 hover:bg-rose-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 4).map((product) => {
            const isAdded = addedIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-beauty-sm hover:shadow-beauty-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full bg-plum-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="ai">{product.aiMatch}% Match</Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-rose-500 tracking-wider">{product.brand}</span>
                    <h3 className="font-serif font-bold text-plum-950 text-sm line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-charcoal-600 font-medium">Shade: {product.shade}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-plum-50">
                    <span className="text-sm font-bold text-plum-950">${product.price.toFixed(2)}</span>
                    <Button
                      variant={isAdded ? "gold" : "secondary"}
                      size="sm"
                      icon={isAdded ? Check : ShoppingBag}
                      onClick={() => handleAdd(product)}
                    >
                      {isAdded ? "Added" : "Add to Bag"}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopYourLookSection;
