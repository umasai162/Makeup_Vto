import api from './api';
import { MOCK_PRODUCTS } from '../data/mockProducts';

export const productService = {
  getProducts: async (filters = {}) => {
    try {
      // Prepared for FastAPI endpoint: await api.get('/products', { params: filters });
      await new Promise(res => setTimeout(res, 400));
      let products = [...MOCK_PRODUCTS];
      
      if (filters.category && filters.category !== 'All') {
        products = products.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
      }
      if (filters.finish && filters.finish !== 'All') {
        products = products.filter(p => p.finish.toLowerCase().includes(filters.finish.toLowerCase()));
      }
      if (filters.undertone && filters.undertone !== 'All') {
        products = products.filter(p => p.undertone.toLowerCase().includes(filters.undertone.toLowerCase()));
      }
      if (filters.search) {
        const q = filters.search.toLowerCase();
        products = products.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.brand.toLowerCase().includes(q) || 
          p.category.toLowerCase().includes(q)
        );
      }
      return { success: true, products };
    } catch (err) {
      return { success: false, products: MOCK_PRODUCTS };
    }
  },

  getProductById: async (id) => {
    try {
      // Prepared for FastAPI endpoint: await api.get(`/products/${id}`);
      await new Promise(res => setTimeout(res, 300));
      const found = MOCK_PRODUCTS.find(p => p.id === id) || MOCK_PRODUCTS[0];
      return { success: true, product: found };
    } catch (err) {
      return { success: false, product: MOCK_PRODUCTS[0] };
    }
  },

  matchProductsForBag: async (ownedBagItems, targetLookName) => {
    try {
      await new Promise(res => setTimeout(res, 600));
      return {
        success: true,
        matchPercentage: 88,
        recipe: [
          { category: 'Foundation', item: ownedBagItems.foundation || 'Owned Hydrating Foundation', status: 'Perfect Undertone Match' },
          { category: 'Blush', item: ownedBagItems.blush || 'Owned Peach Powder Blush', status: 'Exact Shade Fit' },
          { category: 'Lipstick', item: ownedBagItems.lipstick || 'Owned Rose Nude Lipstick', status: 'Slightly lighter than target - blend with lip liner' },
          { category: 'Eyeshadow', item: ownedBagItems.eyeshadow || 'Owned Bronze Palette', status: 'Exact Match' },
        ]
      };
    } catch (err) {
      return { success: false, message: 'Could not generate bag match.' };
    }
  }
};
