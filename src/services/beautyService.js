import api from './api';

export const beautyService = {
  uploadSelfie: async (imageFileOrBase64) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/beauty/upload', formData);
      await new Promise(res => setTimeout(res, 600));
      return {
        success: true,
        imageUrl: typeof imageFileOrBase64 === 'string' 
          ? imageFileOrBase64 
          : URL.createObjectURL(imageFileOrBase64),
        qualityScore: {
          faceVisibility: 98,
          lighting: 'Optimal (Soft Natural)',
          obstructions: 'None',
          angle: 'Direct Frontal',
          passed: true,
        }
      };
    } catch (err) {
      return { success: false, message: 'Failed to upload selfie.' };
    }
  },

  analyzeBeauty: async (imageUrl) => {
    try {
      // Prepared for FastAPI endpoint: await api.post('/beauty/analyze', { imageUrl });
      await new Promise(res => setTimeout(res, 1800)); // Simulate multi-step AI scan
      return {
        success: true,
        profile: {
          skinTone: 'Medium',
          undertone: 'Warm / Neutral',
          faceShape: 'Oval',
          eyeShape: 'Almond',
          lipProfile: 'Full',
          browProfile: 'Soft Arch',
          confidenceScores: {
            skinTone: 96,
            undertone: 94,
            faceShape: 98,
            eyeShape: 95,
            lipProfile: 97,
            browProfile: 93,
          },
          analyzedAt: new Date().toISOString(),
        }
      };
    } catch (err) {
      return { success: false, message: 'Something went wrong while analyzing your image.' };
    }
  },

  getBeautyProfile: async () => {
    try {
      // Prepared for FastAPI endpoint: await api.get('/beauty/profile');
      await new Promise(res => setTimeout(res, 400));
      return {
        faceShape: "Oval",
        eyeShape: "Almond",
        lipProfile: "Full",
        browProfile: "Soft Arch",
        skinTone: "Medium",
        undertone: "Warm / Neutral"
      };
    } catch (err) {
      return null;
    }
  }
};
