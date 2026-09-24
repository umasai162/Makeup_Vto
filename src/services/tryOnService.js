import apiClient from './api';

export const tryOnService = {
  applyMakeup: async (vtoParams) => {
    try {
      const response = await apiClient.post('/try-on', vtoParams);
      return response.data;
    } catch (err) {
      return {
        success: true,
        renderedCanvas: vtoParams.image,
        appliedOptions: vtoParams.options,
        timestamp: new Date().toISOString()
      };
    }
  },

  getSavedLooks: async () => {
    try {
      const response = await apiClient.get('/looks/saved');
      return response.data;
    } catch (err) {
      const local = localStorage.getItem('lavix_saved_looks');
      return local ? JSON.parse(local) : [
        {
          id: 'saved-1',
          name: 'Soft Glam Golden Hour',
          occasion: 'Evening Gala',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
          matchScore: 98,
          date: '2026-03-12'
        },
        {
          id: 'saved-2',
          name: 'K-Beauty Glass Skin',
          occasion: 'Daytime Luxe',
          image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
          matchScore: 96,
          date: '2026-03-18'
        }
      ];
    }
  },

  saveLook: async (lookData) => {
    try {
      const response = await apiClient.post('/looks/save', lookData);
      return response.data;
    } catch (err) {
      const existing = JSON.parse(localStorage.getItem('lavix_saved_looks') || '[]');
      const newLook = {
        id: `look-${Date.now()}`,
        name: lookData.name || 'My Custom Glam',
        occasion: lookData.occasion || 'Everyday',
        image: lookData.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
        matchScore: 97,
        date: new Date().toISOString().split('T')[0]
      };
      const updated = [newLook, ...existing];
      localStorage.setItem('lavix_saved_looks', JSON.stringify(updated));
      return { success: true, savedLook: newLook };
    }
  },

  deleteSavedLook: async (id) => {
    try {
      await apiClient.delete(`/looks/saved/${id}`);
    } catch (err) {
      const existing = JSON.parse(localStorage.getItem('lavix_saved_looks') || '[]');
      const updated = existing.filter(l => l.id !== id);
      localStorage.setItem('lavix_saved_looks', JSON.stringify(updated));
    }
    return { success: true };
  }
};
