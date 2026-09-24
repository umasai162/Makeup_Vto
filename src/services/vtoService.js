import api from './api';

export const vtoService = {
  applyMakeup: async (userImageUrl, selectedMakeupOptions) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/vto/apply', { userImageUrl, options: selectedMakeupOptions });
      await new Promise(res => setTimeout(res, 500));
      return {
        success: true,
        tryOnImageUrl: userImageUrl, // Returns canvas image target
        appliedShades: selectedMakeupOptions,
      };
    } catch (err) {
      return { success: false, message: 'Could not apply virtual makeup.' };
    }
  },

  saveLook: async (lookData) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/vto/saved-looks', lookData);
      await new Promise(res => setTimeout(res, 400));
      const saved = JSON.parse(localStorage.getItem('lavix_saved_looks') || '[]');
      const newLook = {
        id: `look-${Date.now()}`,
        name: lookData.name || 'Custom Glam Look',
        occasion: lookData.occasion || 'Everyday',
        date: new Date().toISOString(),
        image: lookData.image,
        options: lookData.options,
      };
      saved.unshift(newLook);
      localStorage.setItem('lavix_saved_looks', JSON.stringify(saved));
      return { success: true, savedLook: newLook };
    } catch (err) {
      return { success: false, message: 'Failed to save look.' };
    }
  },

  getSavedLooks: async () => {
    const saved = JSON.parse(localStorage.getItem('lavix_saved_looks') || '[]');
    return saved;
  },

  deleteSavedLook: async (id) => {
    const saved = JSON.parse(localStorage.getItem('lavix_saved_looks') || '[]');
    const filtered = saved.filter(l => l.id !== id);
    localStorage.setItem('lavix_saved_looks', JSON.stringify(filtered));
    return true;
  }
};
